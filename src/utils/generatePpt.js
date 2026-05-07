import PptxGenJS from "pptxgenjs";

// Map diagramHint to image filenames
const diagramImageMap = {
  "Human Heart diagram": "heart.png",
  "Structure of Neuron": "neuron.png",
  "Human Digestive System": "digestive.png",
  "Plant Cell": "plant-cell.png",
  "Human Excretory System": "excretory.png",
  "Parts of a Flower": "flower.png",
  "Human Respiratory System": "respiratory.png",
  "Human Brain": "brain.png",
  "Human Eye": "eye.png",
  "Cross-section of Stem (Xylem & Phloem)": "xylem-phloem.png",
};

// Convert image file to base64 data URL
async function getImageBase64(filename) {
  const baseUrl = import.meta.env.BASE_URL || "/";
  const url = `${baseUrl}images/${filename}`;
  try {
    const response = await fetch(url);
    if (!response.ok) return null;
    const blob = await response.blob();
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.onerror = () => resolve(null);
      reader.readAsDataURL(blob);
    });
  } catch {
    return null;
  }
}

export const generatePpt = async (selectedQuestions) => {
  const pptx = new PptxGenJS();
  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Biology MCQ Bank";
  pptx.title = "Biology MCQ Questions";

  const colors = {
    primary: "2E7D32",
    secondary: "1565C0",
    dark: "1B1B1B",
    light: "F5F5F5",
    white: "FFFFFF",
    gray: "757575",
    correct: "1B5E20",
    answerBg: "E8F5E9",
  };

  // Pre-load all diagram images
  const imageCache = {};
  for (const q of selectedQuestions) {
    if (q.diagramHint && diagramImageMap[q.diagramHint]) {
      const filename = diagramImageMap[q.diagramHint];
      if (!imageCache[filename]) {
        imageCache[filename] = await getImageBase64(filename);
      }
    }
  }

  // Title Slide
  const titleSlide = pptx.addSlide();
  titleSlide.background = { color: colors.primary };
  titleSlide.addText("BIOLOGY\nMCQ QUESTION BANK", {
    x: 0.5, y: 1.0, w: 9, h: 2.5,
    fontSize: 42, bold: true, color: colors.white,
    fontFace: "Times New Roman", align: "left", valign: "middle",
  });
  titleSlide.addText(`${selectedQuestions.length} Selected Questions | Class 8, 9, 10`, {
    x: 0.5, y: 3.5, w: 9, h: 0.8,
    fontSize: 18, color: colors.light,
    fontFace: "Times New Roman", italic: true,
  });
  titleSlide.addText("Choose the correct answer for each question", {
    x: 0.5, y: 4.2, w: 9, h: 0.6,
    fontSize: 14, color: colors.light, fontFace: "Times New Roman",
  });

  // Question Slides - one per question with answer included
  selectedQuestions.forEach((q, idx) => {
    const slide = pptx.addSlide();
    slide.background = { color: colors.white };

    const typeColor = q.type === "diagram" ? colors.secondary : colors.primary;
    const hasDiagram = q.diagramHint && diagramImageMap[q.diagramHint];
    const diagramImage = hasDiagram ? imageCache[diagramImageMap[q.diagramHint]] : null;

    // Question number badge
    slide.addText(`Q${idx + 1}`, {
      x: 0.3, y: 0.2, w: 0.7, h: 0.5,
      fontSize: 14, bold: true, color: colors.white,
      fontFace: "Times New Roman", align: "center", valign: "middle",
      fill: { color: typeColor },
    });

    // Meta info
    slide.addText(`Class ${q.class} | ${q.topic}`, {
      x: 1.1, y: 0.25, w: 6, h: 0.35,
      fontSize: 10, color: colors.gray,
      fontFace: "Times New Roman", italic: true,
    });

    // Type badge
    const typeLabel = q.type === "diagram" ? "DIAGRAM" : "OBJECTIVE";
    slide.addText(typeLabel, {
      x: 8.2, y: 0.2, w: 1.4, h: 0.35,
      fontSize: 9, bold: true, color: colors.white,
      fontFace: "Times New Roman", align: "center", valign: "middle",
      fill: { color: typeColor },
    });

    if (diagramImage) {
      // Layout WITH diagram image: question on left, image on right
      // Question text (left side)
      slide.addText(q.question, {
        x: 0.3, y: 0.8, w: 5.2, h: 1.0,
        fontSize: 15, color: colors.dark,
        fontFace: "Times New Roman", valign: "top",
        lineSpacingMultiple: 1.2,
      });

      // Diagram image (right side)
      slide.addImage({
        data: diagramImage,
        x: 5.8, y: 0.8, w: 3.8, h: 2.8,
        sizing: { type: "contain", w: 3.8, h: 2.8 },
      });

      // Options below question text (left side, stacked vertically)
      const optStartY = 1.9;
      q.options.forEach((opt, optIdx) => {
        const isCorrect = optIdx === q.answer;
        slide.addText(`${String.fromCharCode(65 + optIdx)})  ${opt}`, {
          x: 0.3, y: optStartY + optIdx * 0.6, w: 5.2, h: 0.5,
          fontSize: 12, color: isCorrect ? colors.correct : colors.dark,
          fontFace: "Times New Roman", valign: "middle",
          bold: isCorrect,
          border: { type: "solid", pt: 1, color: isCorrect ? "4CAF50" : "E0E0E0" },
          fill: isCorrect ? { color: colors.answerBg } : undefined,
        });
      });

      // Answer at bottom
      const answerText = `Answer: ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}`;
      slide.addText(answerText, {
        x: 0.3, y: 4.5, w: 9.4, h: 0.5,
        fontSize: 13, bold: true, color: colors.correct,
        fontFace: "Times New Roman", valign: "middle",
        fill: { color: colors.answerBg },
        border: { type: "solid", pt: 1, color: "4CAF50" },
      });

    } else {
      // Layout WITHOUT diagram: full width
      // Question text
      slide.addText(q.question, {
        x: 0.3, y: 0.8, w: 9.4, h: 1.0,
        fontSize: 16, color: colors.dark,
        fontFace: "Times New Roman", valign: "top",
        lineSpacingMultiple: 1.2,
      });

      // Diagram hint text (if diagram but image not loaded)
      let optStartY = 2.0;
      if (q.diagramHint) {
        slide.addText(`[Refer to: ${q.diagramHint}]`, {
          x: 0.3, y: 1.9, w: 9.4, h: 0.35,
          fontSize: 11, color: colors.secondary,
          fontFace: "Times New Roman", italic: true,
        });
        optStartY = 2.4;
      }

      // Options - 2x2 grid
      q.options.forEach((opt, optIdx) => {
        const col = optIdx % 2;
        const row = Math.floor(optIdx / 2);
        const x = col === 0 ? 0.3 : 5.0;
        const y = optStartY + row * 0.85;
        const isCorrect = optIdx === q.answer;

        slide.addText(`${String.fromCharCode(65 + optIdx)})  ${opt}`, {
          x, y, w: 4.5, h: 0.7,
          fontSize: 14, color: isCorrect ? colors.correct : colors.dark,
          fontFace: "Times New Roman", valign: "middle",
          bold: isCorrect,
          border: { type: "solid", pt: 1, color: isCorrect ? "4CAF50" : "E0E0E0" },
          fill: isCorrect ? { color: colors.answerBg } : undefined,
        });
      });

      // Answer at bottom
      const answerText = `Answer: ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}`;
      slide.addText(answerText, {
        x: 0.3, y: 4.5, w: 9.4, h: 0.5,
        fontSize: 13, bold: true, color: colors.correct,
        fontFace: "Times New Roman", valign: "middle",
        fill: { color: colors.answerBg },
        border: { type: "solid", pt: 1, color: "4CAF50" },
      });
    }
  });

  // End slide
  const endSlide = pptx.addSlide();
  endSlide.background = { color: colors.dark };
  endSlide.addText("End of Question Paper", {
    x: 0.5, y: 2.0, w: 9, h: 1.5,
    fontSize: 36, bold: true, color: colors.white,
    fontFace: "Times New Roman", align: "center",
  });
  endSlide.addText(`${selectedQuestions.length} Questions | All the Best!`, {
    x: 0.5, y: 3.5, w: 9, h: 0.8,
    fontSize: 18, color: colors.gray,
    fontFace: "Times New Roman", align: "center", italic: true,
  });

  await pptx.writeFile({ fileName: "Biology_MCQ_Questions.pptx" });
};
