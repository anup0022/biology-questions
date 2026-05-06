import PptxGenJS from "pptxgenjs";

export const generatePpt = (selectedQuestions) => {
  const pptx = new PptxGenJS();

  pptx.layout = "LAYOUT_16x9";
  pptx.author = "Biology Question Bank";
  pptx.subject = "Biology Questions for Class 8, 9, 10";
  pptx.title = "Biology Question Paper";

  const colors = {
    primary: "2E7D32",
    secondary: "1565C0",
    accent: "6A1B9A",
    dark: "1B1B1B",
    light: "F5F5F5",
    white: "FFFFFF",
    gray: "757575",
  };

  const appQuestions = selectedQuestions.filter((q) => q.type === "application");
  const diagQuestions = selectedQuestions.filter((q) => q.type === "diagram");
  const concQuestions = selectedQuestions.filter((q) => q.type === "conceptual");

  // Title Slide
  const titleSlide = pptx.addSlide();
  titleSlide.background = { color: colors.primary };
  titleSlide.addText("BIOLOGY\nQUESTION PAPER", {
    x: 0.5,
    y: 1.0,
    w: 9,
    h: 2.5,
    fontSize: 44,
    bold: true,
    color: colors.white,
    fontFace: "Times New Roman",
    align: "left",
    valign: "middle",
  });
  titleSlide.addText(`Class 8, 9, 10 | ${selectedQuestions.length} Selected Questions`, {
    x: 0.5,
    y: 3.5,
    w: 9,
    h: 0.8,
    fontSize: 20,
    color: colors.light,
    fontFace: "Times New Roman",
    italic: true,
  });

  const parts = [];
  if (appQuestions.length) parts.push(`${appQuestions.length} Application Based`);
  if (diagQuestions.length) parts.push(`${diagQuestions.length} Diagram Based`);
  if (concQuestions.length) parts.push(`${concQuestions.length} Conceptual`);

  titleSlide.addText(parts.join(" | "), {
    x: 0.5,
    y: 4.2,
    w: 9,
    h: 0.6,
    fontSize: 16,
    color: colors.light,
    fontFace: "Times New Roman",
  });

  let qNumber = 1;

  // Application Based Questions
  if (appQuestions.length > 0) {
    const sectionSlide = pptx.addSlide();
    sectionSlide.background = { color: colors.primary };
    sectionSlide.addText("SECTION A", {
      x: 0.5,
      y: 1.5,
      w: 9,
      h: 1.5,
      fontSize: 48,
      bold: true,
      color: colors.white,
      fontFace: "Times New Roman",
      align: "center",
    });
    sectionSlide.addText(`Application Based Questions (${appQuestions.length})`, {
      x: 0.5,
      y: 3.2,
      w: 9,
      h: 1.0,
      fontSize: 20,
      color: colors.light,
      fontFace: "Times New Roman",
      align: "center",
      italic: true,
    });

    appQuestions.forEach((q) => {
      const slide = pptx.addSlide();
      slide.background = { color: colors.white };

      slide.addText(`Q${qNumber}`, {
        x: 0.3,
        y: 0.3,
        w: 0.8,
        h: 0.6,
        fontSize: 18,
        bold: true,
        color: colors.white,
        fontFace: "Times New Roman",
        align: "center",
        valign: "middle",
        fill: { color: colors.primary },
      });

      slide.addText(`Class ${q.class} | ${q.topic}`, {
        x: 1.3,
        y: 0.35,
        w: 7.5,
        h: 0.5,
        fontSize: 12,
        color: colors.gray,
        fontFace: "Times New Roman",
        italic: true,
      });

      slide.addText("APPLICATION BASED", {
        x: 7.5,
        y: 0.3,
        w: 2.2,
        h: 0.4,
        fontSize: 10,
        bold: true,
        color: colors.white,
        fontFace: "Times New Roman",
        align: "center",
        valign: "middle",
        fill: { color: colors.primary },
      });

      slide.addText(q.question, {
        x: 0.5,
        y: 1.2,
        w: 9.0,
        h: 4.0,
        fontSize: 18,
        color: colors.dark,
        fontFace: "Times New Roman",
        valign: "top",
        lineSpacingMultiple: 1.4,
      });

      qNumber++;
    });
  }

  // Diagram Based Questions
  if (diagQuestions.length > 0) {
    const sectionSlide = pptx.addSlide();
    sectionSlide.background = { color: colors.secondary };
    sectionSlide.addText("SECTION B", {
      x: 0.5,
      y: 1.5,
      w: 9,
      h: 1.5,
      fontSize: 48,
      bold: true,
      color: colors.white,
      fontFace: "Times New Roman",
      align: "center",
    });
    sectionSlide.addText(`Diagram Based Questions (${diagQuestions.length})`, {
      x: 0.5,
      y: 3.2,
      w: 9,
      h: 1.0,
      fontSize: 20,
      color: colors.light,
      fontFace: "Times New Roman",
      align: "center",
      italic: true,
    });

    diagQuestions.forEach((q) => {
      const slide = pptx.addSlide();
      slide.background = { color: colors.white };

      slide.addText(`Q${qNumber}`, {
        x: 0.3,
        y: 0.3,
        w: 0.8,
        h: 0.6,
        fontSize: 18,
        bold: true,
        color: colors.white,
        fontFace: "Times New Roman",
        align: "center",
        valign: "middle",
        fill: { color: colors.secondary },
      });

      slide.addText(`Class ${q.class} | ${q.topic}`, {
        x: 1.3,
        y: 0.35,
        w: 7.5,
        h: 0.5,
        fontSize: 12,
        color: colors.gray,
        fontFace: "Times New Roman",
        italic: true,
      });

      slide.addText("DIAGRAM BASED", {
        x: 7.5,
        y: 0.3,
        w: 2.2,
        h: 0.4,
        fontSize: 10,
        bold: true,
        color: colors.white,
        fontFace: "Times New Roman",
        align: "center",
        valign: "middle",
        fill: { color: colors.secondary },
      });

      slide.addText(q.question, {
        x: 0.5,
        y: 1.2,
        w: 5.5,
        h: 3.5,
        fontSize: 16,
        color: colors.dark,
        fontFace: "Times New Roman",
        valign: "top",
        lineSpacingMultiple: 1.3,
      });

      if (q.diagramHint) {
        slide.addText(`Diagram Required:\n${q.diagramHint}`, {
          x: 6.2,
          y: 1.2,
          w: 3.3,
          h: 3.5,
          fontSize: 14,
          color: colors.secondary,
          fontFace: "Times New Roman",
          align: "center",
          valign: "middle",
          border: { type: "dash", pt: 2, color: colors.secondary },
        });
      }

      qNumber++;
    });
  }

  // Conceptual Questions
  if (concQuestions.length > 0) {
    const sectionSlide = pptx.addSlide();
    sectionSlide.background = { color: colors.accent };
    sectionSlide.addText("SECTION C", {
      x: 0.5,
      y: 1.5,
      w: 9,
      h: 1.5,
      fontSize: 48,
      bold: true,
      color: colors.white,
      fontFace: "Times New Roman",
      align: "center",
    });
    sectionSlide.addText(`Conceptual Questions (${concQuestions.length})`, {
      x: 0.5,
      y: 3.2,
      w: 9,
      h: 1.0,
      fontSize: 20,
      color: colors.light,
      fontFace: "Times New Roman",
      align: "center",
      italic: true,
    });

    for (let i = 0; i < concQuestions.length; i += 2) {
      const slide = pptx.addSlide();
      slide.background = { color: colors.white };

      const q1 = concQuestions[i];
      const q2 = concQuestions[i + 1];

      slide.addText(`Q${qNumber}`, {
        x: 0.3,
        y: 0.3,
        w: 0.6,
        h: 0.5,
        fontSize: 14,
        bold: true,
        color: colors.white,
        fontFace: "Times New Roman",
        align: "center",
        valign: "middle",
        fill: { color: colors.accent },
      });

      slide.addText(`Class ${q1.class} | ${q1.topic}`, {
        x: 1.0,
        y: 0.35,
        w: 8.5,
        h: 0.4,
        fontSize: 10,
        color: colors.gray,
        fontFace: "Times New Roman",
        italic: true,
      });

      slide.addText(q1.question, {
        x: 0.5,
        y: 0.9,
        w: 9.0,
        h: 2.0,
        fontSize: 15,
        color: colors.dark,
        fontFace: "Times New Roman",
        valign: "top",
        lineSpacingMultiple: 1.3,
      });

      qNumber++;

      if (q2) {
        slide.addText(`Q${qNumber}`, {
          x: 0.3,
          y: 3.1,
          w: 0.6,
          h: 0.5,
          fontSize: 14,
          bold: true,
          color: colors.white,
          fontFace: "Times New Roman",
          align: "center",
          valign: "middle",
          fill: { color: colors.accent },
        });

        slide.addText(`Class ${q2.class} | ${q2.topic}`, {
          x: 1.0,
          y: 3.15,
          w: 8.5,
          h: 0.4,
          fontSize: 10,
          color: colors.gray,
          fontFace: "Times New Roman",
          italic: true,
        });

        slide.addText(q2.question, {
          x: 0.5,
          y: 3.7,
          w: 9.0,
          h: 2.0,
          fontSize: 15,
          color: colors.dark,
          fontFace: "Times New Roman",
          valign: "top",
          lineSpacingMultiple: 1.3,
        });

        qNumber++;
      }
    }
  }

  // End slide
  const endSlide = pptx.addSlide();
  endSlide.background = { color: colors.dark };
  endSlide.addText("End of Question Paper", {
    x: 0.5,
    y: 2.0,
    w: 9,
    h: 1.5,
    fontSize: 36,
    bold: true,
    color: colors.white,
    fontFace: "Times New Roman",
    align: "center",
  });
  endSlide.addText(`Total: ${selectedQuestions.length} Questions | All the Best!`, {
    x: 0.5,
    y: 3.5,
    w: 9,
    h: 0.8,
    fontSize: 18,
    color: colors.gray,
    fontFace: "Times New Roman",
    align: "center",
    italic: true,
  });

  pptx.writeFile({ fileName: "Biology_Questions_Selected.pptx" });
};
