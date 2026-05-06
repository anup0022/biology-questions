import React from "react";

const DiagramImage = ({ src, alt, caption }) => (
  <div className="bio-diagram-container">
    <img
      src={src}
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
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/800px-Diagram_of_the_human_heart_%28cropped%29.svg.png"
    alt="Diagram of the Human Heart showing all four chambers, valves, and blood vessels"
    caption="Human Heart - Internal Structure"
  />
);

// 2. Neuron
export const NeuronDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Blausen_0657_MultipolarNeuron.png/800px-Blausen_0657_MultipolarNeuron.png"
    alt="Structure of a multipolar neuron showing dendrites, cell body, axon, myelin sheath, and axon terminals"
    caption="Structure of a Neuron"
  />
);

// 3. Digestive System
export const DigestiveSystemDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Digestive_system_diagram_en.svg/800px-Digestive_system_diagram_en.svg.png"
    alt="Human Digestive System showing mouth, oesophagus, stomach, liver, small intestine, large intestine"
    caption="Human Digestive System"
  />
);

// 4. Plant Cell
export const PlantCellDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Plant_cell_structure_svg_labels.svg/800px-Plant_cell_structure_svg_labels.svg.png"
    alt="Plant cell showing cell wall, chloroplast, mitochondria, vacuole, nucleus, and other organelles"
    caption="Plant Cell Structure"
  />
);

// 5. Excretory System
export const ExcretoryDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Urinary_system.svg/800px-Urinary_system.svg.png"
    alt="Human Excretory System showing kidneys, ureters, bladder, and urethra"
    caption="Human Excretory System"
  />
);

// 6. Flower Parts
export const FlowerDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Mature_flower_diagram.svg/800px-Mature_flower_diagram.svg.png"
    alt="Longitudinal section of a flower showing petals, sepals, stamens, pistil, ovary, and ovules"
    caption="L.S. of a Flower"
  />
);

// 7. Respiratory System
export const RespiratoryDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Respiratory_system_complete_en.svg/800px-Respiratory_system_complete_en.svg.png"
    alt="Human Respiratory System showing nasal cavity, trachea, bronchi, lungs, and diaphragm"
    caption="Human Respiratory System"
  />
);

// 8. Human Brain
export const BrainDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Gray728.svg/800px-Gray728.svg.png"
    alt="Human brain sagittal section showing cerebrum, cerebellum, medulla oblongata, and pons"
    caption="Human Brain (Sagittal Section)"
  />
);

// 9. Human Eye
export const EyeDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Schematic_diagram_of_the_human_eye_en.svg/800px-Schematic_diagram_of_the_human_eye_en.svg.png"
    alt="Human eye cross section showing cornea, lens, retina, optic nerve, iris, and pupil"
    caption="Human Eye (Cross Section)"
  />
);

// 10. Xylem and Phloem
export const XylemPhloemDiagram = () => (
  <DiagramImage
    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Xylem_cells.svg/800px-Xylem_cells.svg.png"
    alt="Xylem and Phloem transport tissue in plants showing vessels, tracheids, sieve tubes"
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
