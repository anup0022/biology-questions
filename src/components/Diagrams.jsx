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

// 1. Antibody Structure (Human Health and Disease)
export const AntibodyDiagram = () => (
  <DiagramImage
    src="antibody-structure.svg"
    alt="Structure of an IgG antibody showing heavy chains, light chains, variable regions, Fc and Fab regions"
    caption="Structure of Antibody (Immunoglobulin IgG)"
  />
);

// 2. Plasmodium Life Cycle (Human Health and Disease)
export const PlasmodiumDiagram = () => (
  <DiagramImage
    src="plasmodium-lifecycle.svg"
    alt="Life cycle of Plasmodium showing stages in human host and mosquito vector"
    caption="Life Cycle of Plasmodium (Malarial Parasite)"
  />
);

// 3. pBR322 Plasmid (Biotechnology)
export const PBR322Diagram = () => (
  <DiagramImage
    src="pbr322-plasmid.svg"
    alt="pBR322 plasmid vector map showing restriction sites, selectable markers, and ori"
    caption="pBR322 Plasmid Vector Map"
  />
);

// 4. Photoperiodism & Phytochrome (Plant Growth)
export const PhotoperiodismDiagram = () => (
  <DiagramImage
    src="photoperiodism.svg"
    alt="Photoperiodism in SDP and LDP with phytochrome interconversion system"
    caption="Photoperiodism & Phytochrome System"
  />
);

// 5. Z-Scheme of Light Reactions (Photosynthesis)
export const ZSchemeDiagram = () => (
  <DiagramImage
    src="z-scheme.svg"
    alt="Z-scheme showing non-cyclic electron flow through PS II, cytochrome b6f, and PS I"
    caption="Z-Scheme of Light Reactions (Non-cyclic Photophosphorylation)"
  />
);

// 6. Embryo Sac (Sexual Reproduction in Flowering Plants)
export const EmbryoSacDiagram = () => (
  <DiagramImage
    src="embryo-sac.svg"
    alt="Structure of mature embryo sac showing egg apparatus, central cell, and antipodals"
    caption="Mature Embryo Sac (7-celled, 8-nucleate)"
  />
);

// 7. Human Reproduction
export const HumanReproDiagram = () => (
  <DiagramImage
    src="human-reproduction.svg"
    alt="Human sperm structure and menstrual cycle phases with hormone levels"
    caption="Human Reproductive System & Gametogenesis"
  />
);

// Map diagramHint strings to components
const diagramByHint = {
  "Life Cycle of Plasmodium": PlasmodiumDiagram,
  "Antibody Structure": AntibodyDiagram,
  "pBR322 Plasmid Vector": PBR322Diagram,
  "Photoperiodism and Phytochrome": PhotoperiodismDiagram,
  "Z-Scheme of Light Reactions": ZSchemeDiagram,
  "Embryo Sac Structure": EmbryoSacDiagram,
  "Human Reproduction Diagram": HumanReproDiagram,
};

export function getDiagramComponent(diagramHint) {
  return diagramByHint[diagramHint] || null;
}

export default diagramByHint;
