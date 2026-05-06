import React from "react";

// 1. Human Heart
export const HeartDiagram = () => (
  <svg viewBox="0 0 300 280" className="bio-diagram">
    {/* Heart shape */}
    <path d="M150 250 C150 250 50 180 50 120 C50 70 90 40 130 40 C150 40 150 60 150 60 C150 60 150 40 170 40 C210 40 250 70 250 120 C250 180 150 250 150 250Z" fill="#FFCDD2" stroke="#C62828" strokeWidth="2"/>
    {/* Septum */}
    <line x1="150" y1="60" x2="150" y2="220" stroke="#C62828" strokeWidth="1.5" strokeDasharray="4"/>
    {/* Chambers */}
    <text x="100" y="100" fontSize="9" fill="#1565C0" fontWeight="bold">Right</text>
    <text x="95" y="112" fontSize="9" fill="#1565C0" fontWeight="bold">Atrium</text>
    <text x="175" y="100" fontSize="9" fill="#C62828" fontWeight="bold">Left</text>
    <text x="172" y="112" fontSize="9" fill="#C62828" fontWeight="bold">Atrium</text>
    <text x="90" y="170" fontSize="9" fill="#1565C0" fontWeight="bold">Right</text>
    <text x="82" y="182" fontSize="9" fill="#1565C0" fontWeight="bold">Ventricle</text>
    <text x="168" y="170" fontSize="9" fill="#C62828" fontWeight="bold">Left</text>
    <text x="160" y="182" fontSize="9" fill="#C62828" fontWeight="bold">Ventricle</text>
    {/* Blood vessels */}
    <path d="M120 40 L120 15 L90 15" stroke="#1565C0" strokeWidth="3" fill="none"/>
    <text x="45" y="13" fontSize="8" fill="#1565C0">Pulmonary Artery</text>
    <path d="M180 40 L180 10 L220 10" stroke="#C62828" strokeWidth="3" fill="none"/>
    <text x="222" y="13" fontSize="8" fill="#C62828">Aorta</text>
    <path d="M80 55 L80 25 L50 25" stroke="#1565C0" strokeWidth="2.5" fill="none"/>
    <text x="10" y="30" fontSize="7" fill="#1565C0">SVC</text>
    {/* Arrows for blood flow */}
    <polygon points="115,130 120,120 125,130" fill="#1565C0"/>
    <polygon points="175,130 180,120 185,130" fill="#C62828"/>
    <polygon points="115,200 120,210 125,200" fill="#1565C0"/>
    <polygon points="175,200 180,210 185,200" fill="#C62828"/>
    {/* Horizontal line separating chambers */}
    <line x1="55" y1="130" x2="148" y2="130" stroke="#C62828" strokeWidth="1"/>
    <line x1="152" y1="130" x2="245" y2="130" stroke="#C62828" strokeWidth="1"/>
    <text x="100" y="265" fontSize="10" fill="#333" fontWeight="bold">Human Heart</text>
  </svg>
);

// 2. Neuron
export const NeuronDiagram = () => (
  <svg viewBox="0 0 340 180" className="bio-diagram">
    {/* Cell body */}
    <ellipse cx="80" cy="90" rx="35" ry="30" fill="#E1BEE7" stroke="#6A1B9A" strokeWidth="2"/>
    <circle cx="80" cy="85" r="12" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1"/>
    <text x="70" y="89" fontSize="7" fill="#4A148C">Nucleus</text>
    <text x="58" y="130" fontSize="8" fill="#6A1B9A" fontWeight="bold">Cell Body</text>
    {/* Dendrites */}
    <path d="M45 75 C30 60 20 50 10 40" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <path d="M48 85 C30 80 15 75 5 70" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <path d="M47 100 C30 105 15 115 5 120" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <path d="M50 65 C35 50 25 40 15 25" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <text x="5" y="145" fontSize="8" fill="#6A1B9A" fontWeight="bold">Dendrites</text>
    {/* Axon */}
    <line x1="115" y1="90" x2="280" y2="90" stroke="#4A148C" strokeWidth="3"/>
    <text x="175" y="82" fontSize="8" fill="#4A148C" fontWeight="bold">Axon</text>
    {/* Myelin sheath */}
    <ellipse cx="145" cy="90" rx="12" ry="8" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="1.5"/>
    <ellipse cx="175" cy="90" rx="12" ry="8" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="1.5"/>
    <ellipse cx="205" cy="90" rx="12" ry="8" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="1.5"/>
    <ellipse cx="235" cy="90" rx="12" ry="8" fill="#F3E5F5" stroke="#9C27B0" strokeWidth="1.5"/>
    <text x="155" y="115" fontSize="7" fill="#9C27B0">Myelin Sheath</text>
    {/* Axon terminal */}
    <path d="M280 90 L300 80 L310 75" stroke="#4A148C" strokeWidth="1.5" fill="none"/>
    <path d="M280 90 L300 90 L310 90" stroke="#4A148C" strokeWidth="1.5" fill="none"/>
    <path d="M280 90 L300 100 L310 105" stroke="#4A148C" strokeWidth="1.5" fill="none"/>
    <circle cx="310" cy="75" r="3" fill="#4A148C"/>
    <circle cx="310" cy="90" r="3" fill="#4A148C"/>
    <circle cx="310" cy="105" r="3" fill="#4A148C"/>
    <text x="285" y="125" fontSize="7" fill="#4A148C" fontWeight="bold">Axon Terminal</text>
    <text x="130" y="170" fontSize="10" fill="#333" fontWeight="bold">Structure of a Neuron</text>
  </svg>
);

// 3. Digestive System
export const DigestiveSystemDiagram = () => (
  <svg viewBox="0 0 220 320" className="bio-diagram">
    {/* Mouth */}
    <ellipse cx="110" cy="25" rx="18" ry="10" fill="#FFCDD2" stroke="#C62828" strokeWidth="1.5"/>
    <text x="135" y="28" fontSize="7" fill="#333">Mouth</text>
    {/* Oesophagus */}
    <path d="M110 35 L110 80" stroke="#EF5350" strokeWidth="6" fill="none"/>
    <path d="M110 35 L110 80" stroke="#FFCDD2" strokeWidth="3" fill="none"/>
    <text x="125" y="60" fontSize="7" fill="#333">Oesophagus</text>
    {/* Stomach */}
    <path d="M90 80 C70 80 60 100 60 120 C60 145 80 155 100 155 L120 145 C140 135 140 110 130 90 C125 82 110 80 90 80Z" fill="#FFF9C4" stroke="#F57F17" strokeWidth="2"/>
    <text x="75" y="120" fontSize="8" fill="#F57F17" fontWeight="bold">Stomach</text>
    {/* Liver */}
    <ellipse cx="160" cy="100" rx="30" ry="20" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1.5"/>
    <text x="145" y="104" fontSize="7" fill="#2E7D32" fontWeight="bold">Liver</text>
    {/* Small intestine */}
    <path d="M100 155 C100 170 80 175 90 185 C100 195 120 190 110 200 C100 210 80 215 90 225 C100 235 120 230 110 240" stroke="#FF8A65" strokeWidth="4" fill="none"/>
    <text x="130" y="200" fontSize="7" fill="#E65100" fontWeight="bold">Small</text>
    <text x="130" y="210" fontSize="7" fill="#E65100" fontWeight="bold">Intestine</text>
    {/* Large intestine */}
    <path d="M60 240 L60 180 C60 165 55 160 50 170 L50 250 C50 265 70 270 110 270 C150 270 165 265 165 250 L165 210" stroke="#8D6E63" strokeWidth="5" fill="none" opacity="0.7"/>
    <text x="15" y="220" fontSize="7" fill="#5D4037" fontWeight="bold">Large</text>
    <text x="10" y="230" fontSize="7" fill="#5D4037" fontWeight="bold">Intestine</text>
    {/* Rectum */}
    <rect x="105" y="275" width="12" height="15" rx="3" fill="#BCAAA4" stroke="#5D4037" strokeWidth="1"/>
    <text x="75" y="305" fontSize="9" fill="#333" fontWeight="bold">Digestive System</text>
  </svg>
);

// 4. Plant Cell
export const PlantCellDiagram = () => (
  <svg viewBox="0 0 280 220" className="bio-diagram">
    {/* Cell wall */}
    <rect x="20" y="20" width="240" height="170" rx="15" fill="none" stroke="#33691E" strokeWidth="4"/>
    <text x="25" y="15" fontSize="8" fill="#33691E" fontWeight="bold">Cell Wall</text>
    {/* Cell membrane */}
    <rect x="30" y="30" width="220" height="150" rx="12" fill="#E8F5E9" stroke="#66BB6A" strokeWidth="1.5" strokeDasharray="4"/>
    <text x="35" y="50" fontSize="7" fill="#388E3C">Cell Membrane</text>
    {/* Vacuole */}
    <ellipse cx="140" cy="110" rx="60" ry="45" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.5"/>
    <text x="115" y="114" fontSize="9" fill="#1565C0" fontWeight="bold">Vacuole</text>
    {/* Nucleus */}
    <circle cx="80" cy="80" r="22" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1.5"/>
    <circle cx="80" cy="80" r="8" fill="#FFD54F" stroke="#F57F17" strokeWidth="1"/>
    <text x="64" y="83" fontSize="7" fill="#E65100" fontWeight="bold">Nucleus</text>
    {/* Chloroplasts */}
    <ellipse cx="200" cy="70" rx="15" ry="8" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1.5"/>
    <ellipse cx="220" cy="90" rx="15" ry="8" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1.5"/>
    <ellipse cx="55" cy="145" rx="15" ry="8" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1.5"/>
    <text x="185" y="60" fontSize="7" fill="#2E7D32" fontWeight="bold">Chloroplast</text>
    {/* Mitochondria */}
    <ellipse cx="200" cy="150" rx="12" ry="7" fill="#FFCCBC" stroke="#E64A19" strokeWidth="1"/>
    <text x="215" y="153" fontSize="6" fill="#E64A19">Mitochondria</text>
    <text x="85" y="210" fontSize="10" fill="#333" fontWeight="bold">Plant Cell</text>
  </svg>
);

// 5. Excretory System (Kidney/Nephron)
export const ExcretoryDiagram = () => (
  <svg viewBox="0 0 260 240" className="bio-diagram">
    {/* Left Kidney */}
    <path d="M70 60 C40 60 30 90 30 120 C30 150 40 180 70 180 C85 180 90 160 90 120 C90 80 85 60 70 60Z" fill="#FFCCBC" stroke="#E64A19" strokeWidth="2"/>
    <text x="45" y="125" fontSize="8" fill="#BF360C" fontWeight="bold">Kidney</text>
    {/* Right Kidney */}
    <path d="M190 60 C220 60 230 90 230 120 C230 150 220 180 190 180 C175 180 170 160 170 120 C170 80 175 60 190 60Z" fill="#FFCCBC" stroke="#E64A19" strokeWidth="2"/>
    <text x="177" y="125" fontSize="8" fill="#BF360C" fontWeight="bold">Kidney</text>
    {/* Ureters */}
    <path d="M70 180 C70 200 90 210 130 220" stroke="#FF8A65" strokeWidth="3" fill="none"/>
    <path d="M190 180 C190 200 170 210 130 220" stroke="#FF8A65" strokeWidth="3" fill="none"/>
    <text x="95" y="198" fontSize="7" fill="#E65100">Ureter</text>
    {/* Bladder */}
    <ellipse cx="130" cy="225" rx="25" ry="15" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1.5"/>
    <text x="113" y="229" fontSize="7" fill="#F57F17" fontWeight="bold">Bladder</text>
    {/* Aorta */}
    <line x1="130" y1="40" x2="130" y2="70" stroke="#C62828" strokeWidth="3"/>
    <line x1="130" y1="70" x2="80" y2="90" stroke="#C62828" strokeWidth="2"/>
    <line x1="130" y1="70" x2="180" y2="90" stroke="#C62828" strokeWidth="2"/>
    <text x="115" y="35" fontSize="7" fill="#C62828">Aorta</text>
    {/* Nephron detail */}
    <circle cx="130" cy="100" r="20" fill="none" stroke="#9C27B0" strokeWidth="1" strokeDasharray="3"/>
    <text x="110" y="90" fontSize="6" fill="#9C27B0">Nephron</text>
    <text x="107" y="100" fontSize="6" fill="#9C27B0">(functional unit)</text>
    <text x="75" y="237" fontSize="9" fill="#333" fontWeight="bold">Human Excretory System</text>
  </svg>
);

// 6. Flower parts
export const FlowerDiagram = () => (
  <svg viewBox="0 0 260 240" className="bio-diagram">
    {/* Petals */}
    <ellipse cx="130" cy="60" rx="25" ry="40" fill="#F8BBD0" stroke="#C2185B" strokeWidth="1" transform="rotate(-30 130 100)"/>
    <ellipse cx="130" cy="60" rx="25" ry="40" fill="#F8BBD0" stroke="#C2185B" strokeWidth="1" transform="rotate(30 130 100)"/>
    <ellipse cx="130" cy="60" rx="25" ry="40" fill="#F8BBD0" stroke="#C2185B" strokeWidth="1" transform="rotate(90 130 100)"/>
    <ellipse cx="130" cy="60" rx="25" ry="40" fill="#F8BBD0" stroke="#C2185B" strokeWidth="1" transform="rotate(-90 130 100)"/>
    <ellipse cx="130" cy="60" rx="25" ry="40" fill="#F8BBD0" stroke="#C2185B" strokeWidth="1"/>
    <text x="165" y="55" fontSize="7" fill="#C2185B" fontWeight="bold">Petal</text>
    {/* Sepals */}
    <ellipse cx="130" cy="140" rx="12" ry="25" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1" transform="rotate(-20 130 140)"/>
    <ellipse cx="130" cy="140" rx="12" ry="25" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1" transform="rotate(20 130 140)"/>
    <text x="160" y="148" fontSize="7" fill="#2E7D32" fontWeight="bold">Sepal</text>
    {/* Pistil (Ovary) */}
    <ellipse cx="130" cy="130" rx="12" ry="15" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1.5"/>
    <line x1="130" y1="115" x2="130" y2="80" stroke="#F57F17" strokeWidth="2"/>
    <circle cx="130" cy="78" r="4" fill="#FF8F00" stroke="#F57F17" strokeWidth="1"/>
    <text x="78" y="135" fontSize="7" fill="#F57F17" fontWeight="bold">Ovary</text>
    <line x1="95" y1="132" x2="118" y2="132" stroke="#F57F17" strokeWidth="0.5" strokeDasharray="2"/>
    <text x="90" y="95" fontSize="6" fill="#F57F17">Style</text>
    <text x="137" y="76" fontSize="6" fill="#FF8F00">Stigma</text>
    {/* Stamens (Anther) */}
    <line x1="145" y1="100" x2="165" y2="75" stroke="#6A1B9A" strokeWidth="1.5"/>
    <ellipse cx="168" cy="72" rx="6" ry="4" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1"/>
    <text x="175" y="75" fontSize="6" fill="#6A1B9A" fontWeight="bold">Anther</text>
    {/* Stem */}
    <line x1="130" y1="155" x2="130" y2="210" stroke="#388E3C" strokeWidth="4"/>
    <text x="88" y="220" fontSize="9" fill="#333" fontWeight="bold">Parts of a Flower</text>
  </svg>
);

// 7. Respiratory System
export const RespiratoryDiagram = () => (
  <svg viewBox="0 0 240 280" className="bio-diagram">
    {/* Nose/Mouth */}
    <ellipse cx="120" cy="25" rx="12" ry="8" fill="#FFCDD2" stroke="#C62828" strokeWidth="1"/>
    <text x="138" y="28" fontSize="7" fill="#333">Nose</text>
    {/* Trachea */}
    <rect x="115" y="35" width="10" height="60" rx="3" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5"/>
    <text x="130" y="65" fontSize="7" fill="#1565C0" fontWeight="bold">Trachea</text>
    {/* Bronchi */}
    <path d="M118 95 C110 105 90 110 75 115" stroke="#1565C0" strokeWidth="3" fill="none"/>
    <path d="M122 95 C130 105 150 110 165 115" stroke="#1565C0" strokeWidth="3" fill="none"/>
    <text x="82" y="108" fontSize="7" fill="#1565C0">Bronchi</text>
    {/* Left Lung */}
    <path d="M45 100 C30 100 20 130 20 160 C20 200 35 230 60 235 C85 240 100 220 105 200 C110 180 105 120 90 105 C80 100 60 100 45 100Z" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2"/>
    <text x="45" y="170" fontSize="8" fill="#0D47A1" fontWeight="bold">Left</text>
    <text x="45" y="182" fontSize="8" fill="#0D47A1" fontWeight="bold">Lung</text>
    {/* Right Lung */}
    <path d="M195 100 C210 100 220 130 220 160 C220 200 205 230 180 235 C155 240 140 220 135 200 C130 180 135 120 150 105 C160 100 180 100 195 100Z" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2"/>
    <text x="158" y="170" fontSize="8" fill="#0D47A1" fontWeight="bold">Right</text>
    <text x="158" y="182" fontSize="8" fill="#0D47A1" fontWeight="bold">Lung</text>
    {/* Alveoli */}
    <circle cx="60" cy="210" r="6" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1"/>
    <circle cx="72" cy="215" r="5" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1"/>
    <circle cx="55" cy="220" r="5" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1"/>
    <text x="30" y="240" fontSize="7" fill="#1565C0" fontWeight="bold">Alveoli</text>
    {/* Diaphragm */}
    <path d="M15 245 C60 260 180 260 225 245" stroke="#4E342E" strokeWidth="2" fill="none" strokeDasharray="4"/>
    <text x="90" y="260" fontSize="7" fill="#4E342E">Diaphragm</text>
    <text x="65" y="275" fontSize="9" fill="#333" fontWeight="bold">Respiratory System</text>
  </svg>
);

// 8. Human Brain
export const BrainDiagram = () => (
  <svg viewBox="0 0 280 200" className="bio-diagram">
    {/* Cerebrum */}
    <path d="M60 100 C60 40 120 20 150 20 C180 20 240 40 240 100 C240 130 220 140 200 140 L100 140 C80 140 60 130 60 100Z" fill="#F3E5F5" stroke="#6A1B9A" strokeWidth="2"/>
    <path d="M150 25 L150 140" stroke="#9C27B0" strokeWidth="1" strokeDasharray="3"/>
    <text x="115" y="70" fontSize="10" fill="#6A1B9A" fontWeight="bold">Cerebrum</text>
    <text x="100" y="85" fontSize="7" fill="#9C27B0">(thinking, memory)</text>
    {/* Cerebellum */}
    <path d="M180 140 C200 140 220 150 220 165 C220 180 200 185 180 185 C160 185 150 180 150 165 C150 150 160 140 180 140Z" fill="#E1BEE7" stroke="#6A1B9A" strokeWidth="1.5"/>
    <text x="155" y="167" fontSize="8" fill="#4A148C" fontWeight="bold">Cerebellum</text>
    {/* Medulla */}
    <path d="M150 165 C145 175 140 185 135 195" stroke="#4A148C" strokeWidth="4" fill="none"/>
    <text x="90" y="192" fontSize="8" fill="#4A148C" fontWeight="bold">Medulla</text>
    {/* Pons */}
    <ellipse cx="155" cy="155" rx="12" ry="8" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1"/>
    <text x="100" y="158" fontSize="7" fill="#6A1B9A">Pons</text>
    {/* Labels with lines */}
    <line x1="230" y1="165" x2="200" y2="165" stroke="#4A148C" strokeWidth="0.5"/>
    <text x="232" y="163" fontSize="6" fill="#4A148C">(balance, posture)</text>
    <text x="110" y="198" fontSize="9" fill="#333" fontWeight="bold">Human Brain</text>
  </svg>
);

// 9. Human Eye
export const EyeDiagram = () => (
  <svg viewBox="0 0 300 200" className="bio-diagram">
    {/* Eyeball */}
    <ellipse cx="150" cy="100" rx="90" ry="70" fill="#F5F5F5" stroke="#333" strokeWidth="2"/>
    {/* Cornea */}
    <path d="M240 100 C240 65 260 65 260 100 C260 135 240 135 240 100Z" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2"/>
    <text x="250" y="55" fontSize="7" fill="#1565C0" fontWeight="bold">Cornea</text>
    {/* Iris */}
    <circle cx="235" cy="100" r="18" fill="#8D6E63" stroke="#4E342E" strokeWidth="1.5"/>
    <text x="270" y="85" fontSize="7" fill="#4E342E" fontWeight="bold">Iris</text>
    <line x1="253" y1="100" x2="268" y2="88" stroke="#4E342E" strokeWidth="0.5"/>
    {/* Pupil */}
    <circle cx="235" cy="100" r="8" fill="#1A1A1A"/>
    <text x="270" y="105" fontSize="6" fill="#333">Pupil</text>
    {/* Lens */}
    <ellipse cx="215" cy="100" rx="8" ry="20" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1.5"/>
    <text x="195" y="65" fontSize="7" fill="#F57F17" fontWeight="bold">Lens</text>
    <line x1="210" y1="80" x2="205" y2="70" stroke="#F57F17" strokeWidth="0.5"/>
    {/* Retina */}
    <path d="M60 55 C45 70 40 90 40 100 C40 110 45 130 60 145" stroke="#C62828" strokeWidth="3" fill="none"/>
    <text x="15" y="100" fontSize="7" fill="#C62828" fontWeight="bold">Retina</text>
    {/* Optic nerve */}
    <path d="M60 100 L30 100 L20 95" stroke="#4A148C" strokeWidth="4" fill="none"/>
    <text x="5" y="115" fontSize="6" fill="#4A148C">Optic Nerve</text>
    {/* Vitreous humor label */}
    <text x="120" y="105" fontSize="7" fill="#666">Vitreous</text>
    <text x="120" y="115" fontSize="7" fill="#666">Humor</text>
    <text x="115" y="190" fontSize="9" fill="#333" fontWeight="bold">Human Eye (Cross Section)</text>
  </svg>
);

// 10. Xylem and Phloem
export const XylemPhloemDiagram = () => (
  <svg viewBox="0 0 260 220" className="bio-diagram">
    {/* Stem cross section */}
    <circle cx="130" cy="100" r="80" fill="#F1F8E9" stroke="#33691E" strokeWidth="3"/>
    <circle cx="130" cy="100" r="65" fill="#FFF9C4" stroke="#827717" strokeWidth="1"/>
    <text x="105" y="15" fontSize="9" fill="#33691E" fontWeight="bold">Stem Cross-Section</text>
    {/* Epidermis label */}
    <text x="190" y="40" fontSize="7" fill="#33691E">Epidermis</text>
    <line x1="185" y1="42" x2="170" y2="50" stroke="#33691E" strokeWidth="0.5"/>
    {/* Xylem bundles */}
    <circle cx="110" cy="85" r="10" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
    <circle cx="130" cy="75" r="8" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
    <circle cx="145" cy="90" r="9" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
    <circle cx="120" cy="105" r="7" fill="#BBDEFB" stroke="#1565C0" strokeWidth="2"/>
    <text x="95" y="130" fontSize="8" fill="#1565C0" fontWeight="bold">Xylem</text>
    <text x="90" y="142" fontSize="6" fill="#1565C0">(water transport)</text>
    {/* Phloem bundles */}
    <circle cx="155" cy="110" r="7" fill="#FFCCBC" stroke="#E64A19" strokeWidth="2"/>
    <circle cx="165" cy="95" r="6" fill="#FFCCBC" stroke="#E64A19" strokeWidth="2"/>
    <circle cx="140" cy="115" r="6" fill="#FFCCBC" stroke="#E64A19" strokeWidth="2"/>
    <text x="155" y="135" fontSize="8" fill="#E64A19" fontWeight="bold">Phloem</text>
    <text x="148" y="147" fontSize="6" fill="#E64A19">(food transport)</text>
    {/* Cambium */}
    <path d="M105 70 C115 65 135 63 155 70" stroke="#9C27B0" strokeWidth="1.5" fill="none" strokeDasharray="3"/>
    <text x="165" y="70" fontSize="6" fill="#9C27B0">Cambium</text>
    {/* Arrows showing direction */}
    <line x1="50" y1="100" x2="50" y2="60" stroke="#1565C0" strokeWidth="1.5"/>
    <polygon points="47,62 50,52 53,62" fill="#1565C0"/>
    <text x="30" y="80" fontSize="6" fill="#1565C0">Water</text>
    <text x="37" y="88" fontSize="6" fill="#1565C0">up</text>
    <line x1="210" y1="70" x2="210" y2="110" stroke="#E64A19" strokeWidth="1.5"/>
    <polygon points="207,108 210,118 213,108" fill="#E64A19"/>
    <text x="215" y="85" fontSize="6" fill="#E64A19">Food</text>
    <text x="215" y="93" fontSize="6" fill="#E64A19">down</text>
    <text x="75" y="210" fontSize="9" fill="#333" fontWeight="bold">Xylem &amp; Phloem</text>
  </svg>
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
