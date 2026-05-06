import { Document, Packer, Paragraph, TextRun, AlignmentType, BorderStyle } from "docx";
import { saveAs } from "file-saver";

export const generateDoc = (selectedQuestions) => {
  const children = [];

  const appQuestions = selectedQuestions.filter((q) => q.type === "application");
  const diagQuestions = selectedQuestions.filter((q) => q.type === "diagram");
  const concQuestions = selectedQuestions.filter((q) => q.type === "conceptual");

  // Title
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "BIOLOGY QUESTION PAPER",
          bold: true,
          size: 36,
          font: "Times New Roman",
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 200 },
    })
  );

  // Subtitle
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: `Class 8, 9, 10 | Total Questions: ${selectedQuestions.length}`,
          size: 24,
          font: "Times New Roman",
          italics: true,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 100 },
    })
  );

  // Instructions
  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "General Instructions:",
          bold: true,
          size: 22,
          font: "Times New Roman",
        }),
      ],
      spacing: { before: 300, after: 100 },
    })
  );

  const instructions = [
    "All questions are compulsory.",
    "Diagram-based questions must include neat, labelled diagrams.",
    "Write answers in your own words for better understanding.",
  ];

  instructions.forEach((inst, idx) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `${idx + 1}. ${inst}`,
            size: 20,
            font: "Times New Roman",
          }),
        ],
        spacing: { after: 50 },
        indent: { left: 400 },
      })
    );
  });

  // Separator
  children.push(
    new Paragraph({
      children: [new TextRun({ text: "" })],
      spacing: { after: 200 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E7D32" },
      },
    })
  );

  let qNumber = 1;

  // Section A - Application Based (if any)
  if (appQuestions.length > 0) {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `SECTION A - APPLICATION BASED QUESTIONS (${appQuestions.length} Questions)`,
            bold: true,
            size: 26,
            font: "Times New Roman",
            color: "2E7D32",
          }),
        ],
        spacing: { before: 300, after: 200 },
      })
    );

    appQuestions.forEach((q) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `Q${qNumber}. `,
              bold: true,
              size: 22,
              font: "Times New Roman",
            }),
            new TextRun({
              text: q.question,
              size: 22,
              font: "Times New Roman",
            }),
          ],
          spacing: { after: 50 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `[Class ${q.class} | Topic: ${q.topic}]`,
              size: 18,
              font: "Times New Roman",
              italics: true,
              color: "666666",
            }),
          ],
          spacing: { after: 300 },
          indent: { left: 400 },
        })
      );
      qNumber++;
    });
  }

  // Section B - Diagram Based (if any)
  if (diagQuestions.length > 0) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: "" })],
        spacing: { after: 100 },
        border: {
          bottom: { style: BorderStyle.SINGLE, size: 3, color: "CCCCCC" },
        },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `SECTION B - DIAGRAM BASED QUESTIONS (${diagQuestions.length} Questions)`,
            bold: true,
            size: 26,
            font: "Times New Roman",
            color: "1565C0",
          }),
        ],
        spacing: { before: 300, after: 200 },
      })
    );

    diagQuestions.forEach((q) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `Q${qNumber}. `,
              bold: true,
              size: 22,
              font: "Times New Roman",
            }),
            new TextRun({
              text: q.question,
              size: 22,
              font: "Times New Roman",
            }),
          ],
          spacing: { after: 50 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `[Class ${q.class} | Topic: ${q.topic}]`,
              size: 18,
              font: "Times New Roman",
              italics: true,
              color: "666666",
            }),
          ],
          spacing: { after: 80 },
          indent: { left: 400 },
        })
      );
      if (q.diagramHint) {
        children.push(
          new Paragraph({
            children: [
              new TextRun({
                text: `Diagram Required: ${q.diagramHint}`,
                size: 18,
                font: "Times New Roman",
                italics: true,
                color: "1565C0",
              }),
            ],
            spacing: { after: 100 },
            indent: { left: 400 },
          })
        );
      }
      // Space for diagram
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: "                    [ Space for Diagram ]                    ",
              size: 20,
              font: "Times New Roman",
              italics: true,
              color: "999999",
            }),
          ],
          spacing: { before: 100, after: 400 },
          alignment: AlignmentType.CENTER,
          border: {
            top: { style: BorderStyle.DASHED, size: 1, color: "CCCCCC" },
            bottom: { style: BorderStyle.DASHED, size: 1, color: "CCCCCC" },
            left: { style: BorderStyle.DASHED, size: 1, color: "CCCCCC" },
            right: { style: BorderStyle.DASHED, size: 1, color: "CCCCCC" },
          },
        })
      );
      qNumber++;
    });
  }

  // Section C - Conceptual (if any)
  if (concQuestions.length > 0) {
    children.push(
      new Paragraph({
        children: [new TextRun({ text: "" })],
        spacing: { after: 100 },
        border: {
          bottom: { style: BorderStyle.SINGLE, size: 3, color: "CCCCCC" },
        },
      })
    );

    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: `SECTION C - CONCEPTUAL QUESTIONS (${concQuestions.length} Questions)`,
            bold: true,
            size: 26,
            font: "Times New Roman",
            color: "6A1B9A",
          }),
        ],
        spacing: { before: 300, after: 200 },
      })
    );

    concQuestions.forEach((q) => {
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `Q${qNumber}. `,
              bold: true,
              size: 22,
              font: "Times New Roman",
            }),
            new TextRun({
              text: q.question,
              size: 22,
              font: "Times New Roman",
            }),
          ],
          spacing: { after: 50 },
        })
      );
      children.push(
        new Paragraph({
          children: [
            new TextRun({
              text: `[Class ${q.class} | Topic: ${q.topic}]`,
              size: 18,
              font: "Times New Roman",
              italics: true,
              color: "666666",
            }),
          ],
          spacing: { after: 300 },
          indent: { left: 400 },
        })
      );
      qNumber++;
    });
  }

  // Footer
  children.push(
    new Paragraph({
      children: [new TextRun({ text: "" })],
      spacing: { before: 400 },
      border: {
        bottom: { style: BorderStyle.SINGLE, size: 6, color: "2E7D32" },
      },
    })
  );

  children.push(
    new Paragraph({
      children: [
        new TextRun({
          text: "--- End of Question Paper ---",
          bold: true,
          size: 22,
          font: "Times New Roman",
          italics: true,
        }),
      ],
      alignment: AlignmentType.CENTER,
      spacing: { before: 200, after: 200 },
    })
  );

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            margin: {
              top: 1440,
              right: 1440,
              bottom: 1440,
              left: 1440,
            },
          },
        },
        children: children,
      },
    ],
  });

  Packer.toBlob(doc).then((blob) => {
    saveAs(blob, "Biology_Questions_Selected.docx");
  });
};
