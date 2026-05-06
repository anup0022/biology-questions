import PptxGenJS from "pptxgenjs";

export const generatePpt = (selectedQuestions) => {
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
  };

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

  // Question Slides - one per question
  selectedQuestions.forEach((q, idx) => {
    const slide = pptx.addSlide();
    slide.background = { color: colors.white };

    const typeColor = q.type === "diagram" ? colors.secondary : colors.primary;

    // Question number
    slide.addText(`Q${idx + 1}`, {
      x: 0.3, y: 0.25, w: 0.7, h: 0.55,
      fontSize: 16, bold: true, color: colors.white,
      fontFace: "Times New Roman", align: "center", valign: "middle",
      fill: { color: typeColor },
    });

    // Meta info
    slide.addText(`Class ${q.class} | ${q.topic}`, {
      x: 1.1, y: 0.3, w: 6, h: 0.4,
      fontSize: 11, color: colors.gray,
      fontFace: "Times New Roman", italic: true,
    });

    // Type badge
    const typeLabel = q.type === "diagram" ? "DIAGRAM" : "OBJECTIVE";
    slide.addText(typeLabel, {
      x: 8.0, y: 0.25, w: 1.6, h: 0.4,
      fontSize: 9, bold: true, color: colors.white,
      fontFace: "Times New Roman", align: "center", valign: "middle",
      fill: { color: typeColor },
    });

    // Question text
    slide.addText(q.question, {
      x: 0.5, y: 1.0, w: 9.0, h: 1.2,
      fontSize: 18, color: colors.dark,
      fontFace: "Times New Roman", valign: "top",
      lineSpacingMultiple: 1.3,
    });

    // Diagram hint
    if (q.diagramHint) {
      slide.addText(`Refer to: ${q.diagramHint}`, {
        x: 0.5, y: 2.1, w: 9.0, h: 0.4,
        fontSize: 12, color: colors.secondary,
        fontFace: "Times New Roman", italic: true,
      });
    }

    const optStartY = q.diagramHint ? 2.6 : 2.3;

    // Options - 2x2 grid
    q.options.forEach((opt, optIdx) => {
      const col = optIdx % 2;
      const row = Math.floor(optIdx / 2);
      const x = col === 0 ? 0.5 : 5.0;
      const y = optStartY + row * 1.0;

      slide.addText(`${String.fromCharCode(65 + optIdx)})  ${opt}`, {
        x, y, w: 4.3, h: 0.75,
        fontSize: 15, color: colors.dark,
        fontFace: "Times New Roman", valign: "middle",
        border: { type: "solid", pt: 1, color: "E0E0E0" },
      });
    });
  });

  // Answer Key Slide
  const ansSlide = pptx.addSlide();
  ansSlide.background = { color: colors.primary };
  ansSlide.addText("ANSWER KEY", {
    x: 0.5, y: 0.3, w: 9, h: 0.8,
    fontSize: 28, bold: true, color: colors.white,
    fontFace: "Times New Roman", align: "center",
  });

  // Build answer key text
  const answerRows = [];
  for (let i = 0; i < selectedQuestions.length; i += 5) {
    const row = selectedQuestions.slice(i, i + 5).map((q, idx) => {
      return `Q${i + idx + 1}: ${String.fromCharCode(65 + q.answer)}`;
    }).join("    ");
    answerRows.push(row);
  }

  ansSlide.addText(answerRows.join("\n"), {
    x: 0.5, y: 1.3, w: 9.0, h: 4.0,
    fontSize: 14, color: colors.white,
    fontFace: "Times New Roman", valign: "top",
    lineSpacingMultiple: 1.8,
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

  pptx.writeFile({ fileName: "Biology_MCQ_Questions.pptx" });
};
