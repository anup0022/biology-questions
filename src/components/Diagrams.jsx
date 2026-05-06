import React from "react";

const BASE = import.meta.env.BASE_URL;

const DiagramImage = ({ src, alt, caption }) => (
  <div className="bio-diagram-container">
    <img
      src={`${BASE}images/${src}`}
      alt={alt}
      className="bio-diagram-img"
      loading="lazy"
    />
    <p className="bio-diagram-caption">{caption}</p>
  </div>
);

// 1. Human Heart
export const HeartDiagram = () => (
  <DiagramImage
    src="heart.png"
    alt="Diagram of the Human Heart showing all four chambers, valves, and blood vessels"
    caption="Human Heart - Internal Structure"
  />
);

// 2. Neuron
export const NeuronDiagram = () => (
  <DiagramImage
    src="neuron.png"
    alt="Structure of a multipolar neuron showing dendrites, cell body, axon, myelin sheath, and axon terminals"
    caption="Structure of a Neuron"
  />
);

// 3. Digestive System
export const DigestiveSystemDiagram = () => (
  <DiagramImage
    src="digestive.png"
    alt="Human Digestive System showing mouth, oesophagus, stomach, liver, small intestine, large intestine"
    caption="Human Digestive System"
  />
);

// 4. Plant Cell
export const PlantCellDiagram = () => (
  <DiagramImage
    src="plant-cell.png"
    alt="Plant cell showing cell wall, chloroplast, mitochondria, vacuole, nucleus, and other organelles"
    caption="Plant Cell Structure"
  />
);

// 5. Excretory System
export const ExcretoryDiagram = () => (
  <DiagramImage
    src="excretory.png"
    alt="Human Excretory System showing kidneys, ureters, bladder, and urethra"
    caption="Human Excretory System"
  />
);

// 6. Flower Parts
export const FlowerDiagram = () => (
  <DiagramImage
    src="flower.png"
    alt="Longitudinal section of a flower showing petals, sepals, stamens, pistil, ovary, and ovules"
    caption="L.S. of a Flower"
  />
);

// 7. Respiratory System
export const RespiratoryDiagram = () => (
  <DiagramImage
    src="respiratory.png"
    alt="Human Respiratory System showing nasal cavity, trachea, bronchi, lungs, and diaphragm"
    caption="Human Respiratory System"
  />
);

// 8. Human Brain
export const BrainDiagram = () => (
  <DiagramImage
    src="brain.png"
    alt="Human brain showing cerebrum, cerebellum, medulla oblongata, and pons"
    caption="Human Brain"
  />
);

// 9. Human Eye
export const EyeDiagram = () => (
  <DiagramImage
    src="eye.png"
    alt="Human eye cross section showing cornea, lens, retina, optic nerve, iris, and pupil"
    caption="Human Eye (Cross Section)"
  />
);

// 10. Xylem and Phloem
export const XylemPhloemDiagram = () => (
  <DiagramImage
    src="xylem-phloem.png"
    alt="Xylem and Phloem transport tissue in plants"
    caption="Xylem & Phloem (Vascular Tissue)"
  />
);

const diagramComponents = {
  1: HeartDiagram,
  2: NeuronDiagram,
  3: DigestiveSystemDiagram,
  4: PlantCellDiagram,
  5: ExcretoryDiagram,
  6: FlowerDiagram,
  7: RespiratoryDiagram,
  8: BrainDiagram,
  9: EyeDiagram,
  10: XylemPhloemDiagram,
};

export default diagramComponents;
