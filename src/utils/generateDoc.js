import { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } from "docx";
import { saveAs } from "file-saver";

export const generateDoc = (selectedQuestions) => {
  const children = [];

  const diagQuestions = selectedQuestions.filter((q) => q.type === "diagram");
  const objQuestions = selectedQuestions.filter((q) => q.type === "objective");

  // Title
  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: "BIOLOGY - MULTIPLE CHOICE QUESTIONS", bold: true, size: 36, font: "Times New Roman" }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({ text: `Class 8, 9, 10 | Total Questions: ${selectedQuestions.length} | Choose the correct answer`, size: 22, font: "Times New Roman", italics: true }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
    })
  );

  // Instructions
  children.push(
    new Paragraph({
      children: [new TextRun({ text: "Instructions:", bold: true, size: 22, font: "Times New Roman" })],
      spacing: { before: 200, after: 80 },
    })
  );

  ["Each question has four options. Select ONE correct answer.",
   "Diagram-based questions refer to standard biology diagrams.",
  ].forEach((inst, idx) => {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: `${idx + 1}. ${inst}`, size: 20, font: "Times New Roman" })],
        spacing: { after: 40 },
        indent: { left: 300 },
      })
    );
  });

  children.push(
    new Paragraph({
      children: [new TextRun({ text: "" })],
      spacing: { after: 200 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "2E7D32" } },
    })
  );

  let qNum = 1;

  // Diagram Based
  if (diagQuestions.length > 0) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: `SECTION A - DIAGRAM BASED (${diagQuestions.length} Questions)`, bold: true, size: 24, font: "Times New Roman", color: "1565C0" })],
        spacing: { before: 200, after: 150 },
      })
    );

    diagQuestions.forEach((q) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: `Q${qNum}. `, bold: true, size: 22, font: "Times New Roman" }),
            new TextRun({ text: q.question, size: 22, font: "Times New Roman" }),
          ],
          spacing: { after: 40 },
        })
      );

      if (q.diagramHint) {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: `[Refer to: ${q.diagramHint}]`, size: 18, font: "Times New Roman", italics: true, color: "1565C0" })],
            spacing: { after: 60 },
            indent: { left: 400 },
          })
        );
      }

      q.options.forEach((opt, idx) => {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: `${String.fromCharCode(65 + idx)}) ${opt}`, size: 20, font: "Times New Roman" })],
            spacing: { after: 30 },
            indent: { left: 600 },
          })
        );
      });

      children.push(
        new Paragraph({
          children: [new TextRun({ text: `[Class ${q.class} | ${q.topic}]`, size: 16, font: "Times New Roman", italics: true, color: "888888" })],
          spacing: { after: 250 },
          indent: { left: 400 },
        })
      );

      qNum++;
    });
  }

  // Objective
  if (objQuestions.length > 0) {
    if (diagQuestions.length > 0) {
      children.push(
        new Paragraph({
          children: [new TextRun({ text: "" })],
          spacing: { after: 100 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 2, color: "CCCCCC" } },
        })
      );
    }

    children.push(
      new Paragraph({
        children: [new TextRun({ text: `SECTION B - OBJECTIVE (${objQuestions.length} Questions)`, bold: true, size: 24, font: "Times New Roman", color: "2E7D32" })],
        spacing: { before: 200, after: 150 },
      })
    );

    objQuestions.forEach((q) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({ text: `Q${qNum}. `, bold: true, size: 22, font: "Times New Roman" }),
            new TextRun({ text: q.question, size: 22, font: "Times New Roman" }),
          ],
          spacing: { after: 40 },
        })
      );

      q.options.forEach((opt, idx) => {
        children.push(
          new Paragraph({
            children: [new TextRun({ text: `${String.fromCharCode(65 + idx)}) ${opt}`, size: 20, font: "Times New Roman" })],
            spacing: { after: 30 },
            indent: { left: 600 },
          })
        );
      });

      children.push(
        new Paragraph({
          children: [new TextRun({ text: `[Class ${q.class} | ${q.topic}]`, size: 16, font: "Times New Roman", italics: true, color: "888888" })],
          spacing: { after: 250 },
          indent: { left: 400 },
        })
      );

      qNum++;
    });
  }

  // Answer Key
  children.push(
    new Paragraph({
      children: [new TextRun({ text: "" })],
      spacing: { before: 300 },
      border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "2E7D32" } },
    })
  );

  children.push(
    new Paragraph({
      children: [new TextRun({ text: "ANSWER KEY", bold: true, size: 24, font: "Times New Roman", color: "2E7D32" })],
      spacing: { before: 200, after: 150 },
      alignment: AlignmentType.CENTER,
    })
  );

  let ansNum = 1;
  const answerLines = [];
  selectedQuestions.forEach((q) => {
    answerLines.push(`Q${ansNum}: ${String.fromCharCode(65 + q.answer)}) ${q.options[q.answer]}`);
    ansNum++;
  });

  // Print answer key in rows
  for (let i = 0; i < answerLines.length; i += 2) {
    const line = answerLines.slice(i, i + 2).join("     |     ");
    children.push(
      new Paragraph({
        children: [new TextRun({ text: line, size: 18, font: "Times New Roman" })],
        spacing: { after: 40 },
        indent: { left: 300 },
      })
    );
  }

  children.push(
    new Paragraph({
      children: [new TextRun({ text: "--- End of Question Paper ---", bold: true, size: 20, font: "Times New Roman", italics: true })],
      alignment: AlignmentType.CENTER,
      spacing: { before: 300 },
    })
  );

  const doc = new Document({
    sections: [{
      properties: { page: { margin: { top: 1200, right: 1200, bottom: 1200, left: 1200 } } },
      children,
    }],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "Biology_MCQ_Questions.docx");
  });
};
