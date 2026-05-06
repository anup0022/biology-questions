import React from "react";

// 1. Human Heart - Detailed anatomical diagram
export const HeartDiagram = () => (
  <svg viewBox="0 0 400 380" className="bio-diagram">
    <defs>
      <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E57373"/>
        <stop offset="100%" stopColor="#B71C1C"/>
      </linearGradient>
      <linearGradient id="deoxyBlood" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#5C6BC0"/>
        <stop offset="100%" stopColor="#283593"/>
      </linearGradient>
      <linearGradient id="oxyBlood" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EF5350"/>
        <stop offset="100%" stopColor="#B71C1C"/>
      </linearGradient>
    </defs>
    {/* Heart outer wall */}
    <path d="M200 340 C200 340 80 280 60 200 C45 140 55 100 90 75 C120 55 155 55 175 70 C185 78 195 90 200 100 C205 90 215 78 225 70 C245 55 280 55 310 75 C345 100 355 140 340 200 C320 280 200 340 200 340Z" fill="url(#heartGrad)" stroke="#7f0000" strokeWidth="2.5"/>
    {/* Inner wall texture */}
    <path d="M200 340 C200 340 90 280 75 205 C62 145 72 108 100 85 C125 68 155 68 175 80 C188 90 195 100 200 112 C205 100 212 90 225 80 C245 68 275 68 300 85 C328 108 338 145 325 205 C310 280 200 340 200 340Z" fill="none" stroke="#c62828" strokeWidth="1" opacity="0.5"/>
    {/* Septum - thick muscular wall */}
    <path d="M197 105 C197 105 195 150 195 200 C195 250 197 300 200 330" stroke="#7f0000" strokeWidth="8" fill="none"/>
    <path d="M197 105 C197 105 195 150 195 200 C195 250 197 300 200 330" stroke="#c62828" strokeWidth="4" fill="none"/>
    {/* Horizontal septum dividing atria and ventricles */}
    <path d="M80 185 C100 180 140 175 195 178" stroke="#7f0000" strokeWidth="4" fill="none"/>
    <path d="M205 178 C260 175 300 180 320 185" stroke="#7f0000" strokeWidth="4" fill="none"/>
    {/* Tricuspid valve (right) */}
    <path d="M130 175 L140 190 L150 175" stroke="#7f0000" strokeWidth="2" fill="#EF9A9A"/>
    <path d="M145 175 L155 190 L165 175" stroke="#7f0000" strokeWidth="2" fill="#EF9A9A"/>
    {/* Mitral/Bicuspid valve (left) */}
    <path d="M240 175 L250 190 L260 175" stroke="#7f0000" strokeWidth="2" fill="#EF9A9A"/>
    <path d="M250 175 L260 190 L270 175" stroke="#7f0000" strokeWidth="2" fill="#EF9A9A"/>
    {/* Superior Vena Cava */}
    <path d="M130 75 C130 55 125 40 120 20 L115 20 C108 20 108 20 105 20 L105 40 C110 55 115 70 120 80" fill="url(#deoxyBlood)" stroke="#1A237E" strokeWidth="1.5"/>
    {/* Inferior Vena Cava */}
    <path d="M110 310 C100 320 95 330 90 345 L95 348 C100 348 105 348 110 345 L115 330 C118 320 120 310 125 300" fill="url(#deoxyBlood)" stroke="#1A237E" strokeWidth="1.5"/>
    {/* Pulmonary Artery */}
    <path d="M155 78 C150 65 145 55 135 45 L130 42 C130 38 135 32 145 30 L150 30 C160 35 165 42 170 55 C172 62 170 70 168 78" fill="url(#deoxyBlood)" stroke="#1A237E" strokeWidth="1.5"/>
    {/* Pulmonary Veins */}
    <path d="M280 90 C300 80 315 70 330 60 L333 63 C335 68 334 72 330 75 L310 85 C295 92 285 95 278 98" fill="url(#oxyBlood)" stroke="#B71C1C" strokeWidth="1.5"/>
    <path d="M275 105 C290 100 305 90 318 80 L320 83 C322 87 321 90 318 93 L300 103 C290 108 282 110 275 112" fill="url(#oxyBlood)" stroke="#B71C1C" strokeWidth="1.5"/>
    {/* Aorta - large arch */}
    <path d="M230 80 C235 60 240 45 250 35 C260 28 275 25 290 30 C305 35 315 50 320 65 C325 80 325 90 320 100" fill="url(#oxyBlood)" stroke="#B71C1C" strokeWidth="2"/>
    {/* Thicker left ventricle wall indication */}
    <path d="M205 200 C210 220 215 260 218 290 C220 310 215 325 210 335" stroke="#7f0000" strokeWidth="10" fill="none" opacity="0.4"/>
    {/* Chordae tendineae */}
    <line x1="140" y1="190" x2="135" y2="220" stroke="#7f0000" strokeWidth="1" opacity="0.7"/>
    <line x1="155" y1="190" x2="160" y2="220" stroke="#7f0000" strokeWidth="1" opacity="0.7"/>
    <line x1="250" y1="190" x2="245" y2="218" stroke="#7f0000" strokeWidth="1" opacity="0.7"/>
    <line x1="260" y1="190" x2="265" y2="218" stroke="#7f0000" strokeWidth="1" opacity="0.7"/>
    {/* Chamber Labels */}
    <text x="110" y="150" fontSize="11" fill="#fff" fontWeight="bold">Right</text>
    <text x="107" y="164" fontSize="11" fill="#fff" fontWeight="bold">Atrium</text>
    <text x="240" y="150" fontSize="11" fill="#fff" fontWeight="bold">Left</text>
    <text x="235" y="164" fontSize="11" fill="#fff" fontWeight="bold">Atrium</text>
    <text x="105" y="245" fontSize="11" fill="#fff" fontWeight="bold">Right</text>
    <text x="98" y="259" fontSize="11" fill="#fff" fontWeight="bold">Ventricle</text>
    <text x="228" y="245" fontSize="11" fill="#fff" fontWeight="bold">Left</text>
    <text x="220" y="259" fontSize="11" fill="#fff" fontWeight="bold">Ventricle</text>
    <text x="220" y="275" fontSize="8" fill="#ffcdd2">(Wall X - thicker)</text>
    {/* Vessel labels with leader lines */}
    <line x1="120" y1="22" x2="70" y2="12" stroke="#333" strokeWidth="0.7"/>
    <text x="10" y="14" fontSize="9" fill="#283593" fontWeight="bold">Superior Vena Cava</text>
    <line x1="90" y1="345" x2="40" y2="355" stroke="#333" strokeWidth="0.7"/>
    <text x="5" y="360" fontSize="9" fill="#283593" fontWeight="bold">Inferior Vena Cava</text>
    <line x1="145" y1="32" x2="100" y2="32" stroke="#333" strokeWidth="0.7"/>
    <text x="30" y="37" fontSize="9" fill="#283593" fontWeight="bold">Pulmonary Artery</text>
    <line x1="330" y1="60" x2="360" y2="50" stroke="#333" strokeWidth="0.7"/>
    <text x="335" y="45" fontSize="9" fill="#B71C1C" fontWeight="bold">Pulmonary Veins</text>
    <line x1="290" y1="28" x2="330" y2="20" stroke="#333" strokeWidth="0.7"/>
    <text x="330" y="22" fontSize="9" fill="#B71C1C" fontWeight="bold">Aorta</text>
    {/* Blood flow arrows */}
    <polygon points="135,155 140,145 145,155" fill="#283593" opacity="0.8"/>
    <polygon points="255,155 260,145 265,155" fill="#B71C1C" opacity="0.8"/>
    <polygon points="135,265 140,275 145,265" fill="#283593" opacity="0.8"/>
    <polygon points="255,265 260,275 265,265" fill="#B71C1C" opacity="0.8"/>
    <text x="130" y="375" fontSize="12" fill="#333" fontWeight="bold">Human Heart (Internal Structure)</text>
  </svg>
);

// 2. Neuron - Detailed structure
export const NeuronDiagram = () => (
  <svg viewBox="0 0 500 220" className="bio-diagram">
    <defs>
      <linearGradient id="myelinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FFF59D"/>
        <stop offset="50%" stopColor="#F9A825"/>
        <stop offset="100%" stopColor="#FFF59D"/>
      </linearGradient>
      <linearGradient id="cellBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#CE93D8"/>
        <stop offset="100%" stopColor="#7B1FA2"/>
      </linearGradient>
    </defs>
    {/* Dendrites - multiple branching */}
    <path d="M70 60 C55 45 40 35 25 20" stroke="#6A1B9A" strokeWidth="2" fill="none"/>
    <path d="M25 20 C20 15 15 12 10 8" stroke="#6A1B9A" strokeWidth="1.2" fill="none"/>
    <path d="M25 20 C22 14 25 10 20 5" stroke="#6A1B9A" strokeWidth="1.2" fill="none"/>
    <path d="M65 50 C50 38 35 30 15 28" stroke="#6A1B9A" strokeWidth="2" fill="none"/>
    <path d="M15 28 C10 25 8 20 5 18" stroke="#6A1B9A" strokeWidth="1" fill="none"/>
    <path d="M15 28 C10 30 5 35 3 38" stroke="#6A1B9A" strokeWidth="1" fill="none"/>
    <path d="M62 75 C45 70 30 62 15 55" stroke="#6A1B9A" strokeWidth="2" fill="none"/>
    <path d="M15 55 C10 52 5 48 2 45" stroke="#6A1B9A" strokeWidth="1" fill="none"/>
    <path d="M68 95 C50 100 35 108 18 118" stroke="#6A1B9A" strokeWidth="2" fill="none"/>
    <path d="M18 118 C14 122 10 128 8 132" stroke="#6A1B9A" strokeWidth="1" fill="none"/>
    <path d="M18 118 C12 115 8 112 3 110" stroke="#6A1B9A" strokeWidth="1" fill="none"/>
    <path d="M72 110 C55 120 40 130 22 145" stroke="#6A1B9A" strokeWidth="2" fill="none"/>
    <path d="M22 145 C18 150 15 155 12 160" stroke="#6A1B9A" strokeWidth="1" fill="none"/>
    <path d="M75 125 C60 135 48 148 35 162" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    {/* Cell body (soma) */}
    <ellipse cx="95" cy="95" rx="35" ry="40" fill="url(#cellBodyGrad)" stroke="#4A148C" strokeWidth="2.5"/>
    {/* Nissl granules (rough ER) */}
    <ellipse cx="82" cy="80" rx="5" ry="3" fill="#E1BEE7" stroke="#7B1FA2" strokeWidth="0.5" opacity="0.7"/>
    <ellipse cx="100" cy="115" rx="5" ry="3" fill="#E1BEE7" stroke="#7B1FA2" strokeWidth="0.5" opacity="0.7"/>
    <ellipse cx="78" cy="105" rx="4" ry="3" fill="#E1BEE7" stroke="#7B1FA2" strokeWidth="0.5" opacity="0.7"/>
    {/* Nucleus */}
    <circle cx="95" cy="90" r="15" fill="#E1BEE7" stroke="#4A148C" strokeWidth="1.5"/>
    {/* Nucleolus */}
    <circle cx="95" cy="90" r="5" fill="#4A148C"/>
    {/* Axon hillock */}
    <path d="M128 90 C135 88 142 88 150 90 C142 92 135 92 128 95" fill="url(#cellBodyGrad)" stroke="#4A148C" strokeWidth="1"/>
    {/* Axon - long fiber */}
    <line x1="148" y1="91" x2="420" y2="91" stroke="#4A148C" strokeWidth="3"/>
    {/* Myelin sheath segments */}
    <path d="M158 91 C158 75 168 72 175 72 C182 72 192 75 192 91 C192 107 182 110 175 110 C168 110 158 107 158 91Z" fill="url(#myelinGrad)" stroke="#F57F17" strokeWidth="1.5"/>
    <path d="M200 91 C200 75 210 72 217 72 C224 72 234 75 234 91 C234 107 224 110 217 110 C210 110 200 107 200 91Z" fill="url(#myelinGrad)" stroke="#F57F17" strokeWidth="1.5"/>
    <path d="M242 91 C242 75 252 72 259 72 C266 72 276 75 276 91 C276 107 266 110 259 110 C252 110 242 107 242 91Z" fill="url(#myelinGrad)" stroke="#F57F17" strokeWidth="1.5"/>
    <path d="M284 91 C284 75 294 72 301 72 C308 72 318 75 318 91 C318 107 308 110 301 110 C294 110 284 107 284 91Z" fill="url(#myelinGrad)" stroke="#F57F17" strokeWidth="1.5"/>
    <path d="M326 91 C326 75 336 72 343 72 C350 72 360 75 360 91 C360 107 350 110 343 110 C336 110 326 107 326 91Z" fill="url(#myelinGrad)" stroke="#F57F17" strokeWidth="1.5"/>
    <path d="M368 91 C368 75 378 72 385 72 C392 72 402 75 402 91 C402 107 392 110 385 110 C378 110 368 107 368 91Z" fill="url(#myelinGrad)" stroke="#F57F17" strokeWidth="1.5"/>
    {/* Nodes of Ranvier (gaps) */}
    <circle cx="196" cy="91" r="2" fill="#4A148C"/>
    <circle cx="238" cy="91" r="2" fill="#4A148C"/>
    <circle cx="280" cy="91" r="2" fill="#4A148C"/>
    <circle cx="322" cy="91" r="2" fill="#4A148C"/>
    <circle cx="364" cy="91" r="2" fill="#4A148C"/>
    {/* Schwann cell nucleus */}
    <ellipse cx="175" cy="82" rx="5" ry="3" fill="#4A148C" opacity="0.5"/>
    <ellipse cx="259" cy="82" rx="5" ry="3" fill="#4A148C" opacity="0.5"/>
    <ellipse cx="343" cy="82" rx="5" ry="3" fill="#4A148C" opacity="0.5"/>
    {/* Axon terminal (synaptic knobs) */}
    <path d="M418 91 L435 75 L445 72" stroke="#4A148C" strokeWidth="2" fill="none"/>
    <path d="M418 91 L440 85 L452 82" stroke="#4A148C" strokeWidth="2" fill="none"/>
    <path d="M418 91 L440 91 L455 91" stroke="#4A148C" strokeWidth="2" fill="none"/>
    <path d="M418 91 L440 97 L452 100" stroke="#4A148C" strokeWidth="2" fill="none"/>
    <path d="M418 91 L435 107 L445 110" stroke="#4A148C" strokeWidth="2" fill="none"/>
    <circle cx="445" cy="72" r="5" fill="#CE93D8" stroke="#4A148C" strokeWidth="1.5"/>
    <circle cx="452" cy="82" r="5" fill="#CE93D8" stroke="#4A148C" strokeWidth="1.5"/>
    <circle cx="455" cy="91" r="5" fill="#CE93D8" stroke="#4A148C" strokeWidth="1.5"/>
    <circle cx="452" cy="100" r="5" fill="#CE93D8" stroke="#4A148C" strokeWidth="1.5"/>
    <circle cx="445" cy="110" r="5" fill="#CE93D8" stroke="#4A148C" strokeWidth="1.5"/>
    {/* Point P label */}
    <text x="430" y="65" fontSize="11" fill="#D32F2F" fontWeight="bold">P</text>
    <circle cx="450" cy="91" r="18" fill="none" stroke="#D32F2F" strokeWidth="1.5" strokeDasharray="4"/>
    {/* Labels */}
    <text x="15" y="175" fontSize="10" fill="#6A1B9A" fontWeight="bold">Dendrites</text>
    <text x="65" y="148" fontSize="10" fill="#4A148C" fontWeight="bold">Cell Body</text>
    <text x="78" y="160" fontSize="8" fill="#4A148C">(Soma)</text>
    <line x1="95" y1="136" x2="95" y2="146" stroke="#4A148C" strokeWidth="0.7"/>
    <text x="250" y="55" fontSize="10" fill="#F57F17" fontWeight="bold">Myelin Sheath</text>
    <line x1="280" y1="57" x2="280" y2="70" stroke="#F57F17" strokeWidth="0.7"/>
    <text x="180" y="130" fontSize="8" fill="#4A148C">Node of Ranvier</text>
    <line x1="196" y1="96" x2="200" y2="125" stroke="#333" strokeWidth="0.5"/>
    <text x="250" y="140" fontSize="10" fill="#4A148C" fontWeight="bold">Axon</text>
    <line x1="260" y1="130" x2="260" y2="95" stroke="#4A148C" strokeWidth="0.7"/>
    <text x="420" y="135" fontSize="9" fill="#4A148C" fontWeight="bold">Synaptic</text>
    <text x="420" y="147" fontSize="9" fill="#4A148C" fontWeight="bold">Terminals</text>
    {/* Direction arrow */}
    <path d="M140 30 L400 30" stroke="#333" strokeWidth="1" markerEnd="url(#arrowhead)"/>
    <polygon points="400,27 410,30 400,33" fill="#333"/>
    <text x="220" y="25" fontSize="9" fill="#333">Direction of Impulse →</text>
    <text x="145" y="205" fontSize="12" fill="#333" fontWeight="bold">Structure of a Neuron</text>
  </svg>
);

// 3. Digestive System - Full detailed diagram
export const DigestiveSystemDiagram = () => (
  <svg viewBox="0 0 300 420" className="bio-diagram">
    <defs>
      <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFCC80"/>
        <stop offset="100%" stopColor="#E65100"/>
      </linearGradient>
      <linearGradient id="intestineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFAB91"/>
        <stop offset="100%" stopColor="#FF5722"/>
      </linearGradient>
    </defs>
    {/* Mouth cavity */}
    <path d="M135 20 C120 20 110 25 108 35 C106 45 115 55 135 55 C155 55 164 45 162 35 C160 25 150 20 135 20Z" fill="#FFCDD2" stroke="#C62828" strokeWidth="1.5"/>
    <path d="M120 35 L150 35" stroke="#C62828" strokeWidth="1" strokeDasharray="2"/>
    <text x="118" y="40" fontSize="7" fill="#C62828">Teeth</text>
    {/* Salivary glands */}
    <ellipse cx="95" cy="45" rx="12" ry="8" fill="#FFF9C4" stroke="#F9A825" strokeWidth="1"/>
    <line x1="107" y1="45" x2="115" y2="42" stroke="#F9A825" strokeWidth="1"/>
    <text x="55" y="48" fontSize="7" fill="#F57F17">Salivary</text>
    <text x="60" y="57" fontSize="7" fill="#F57F17">Gland</text>
    {/* Pharynx */}
    <path d="M128 55 C128 60 125 65 125 70 L145 70 C145 65 142 60 142 55" fill="#FFCDD2" stroke="#C62828" strokeWidth="1"/>
    <text x="160" y="65" fontSize="7" fill="#C62828">Pharynx</text>
    {/* Oesophagus */}
    <path d="M125 70 C122 80 120 90 120 100 C120 110 122 120 125 130 L145 130 C148 120 150 110 150 100 C150 90 148 80 145 70Z" fill="#FFCDD2" stroke="#E64A19" strokeWidth="1.5"/>
    {/* Peristalsis lines */}
    <path d="M122 80 C128 83 137 83 143 80" stroke="#C62828" strokeWidth="0.8" fill="none"/>
    <path d="M121 95 C128 98 137 98 144 95" stroke="#C62828" strokeWidth="0.8" fill="none"/>
    <path d="M122 110 C128 113 137 113 143 110" stroke="#C62828" strokeWidth="0.8" fill="none"/>
    <text x="160" y="100" fontSize="8" fill="#E64A19" fontWeight="bold">Oesophagus</text>
    {/* Stomach - J-shaped */}
    <path d="M110 130 C85 130 65 145 60 170 C55 195 60 220 75 235 C90 250 110 252 130 245 C145 240 155 225 158 210 C162 195 160 175 155 155 C152 140 140 130 110 130Z" fill="url(#stomachGrad)" stroke="#E65100" strokeWidth="2"/>
    {/* Stomach rugae folds */}
    <path d="M80 160 C90 163 100 163 110 160" stroke="#BF360C" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M75 180 C90 183 105 183 120 180" stroke="#BF360C" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M78 200 C90 203 105 203 118 200" stroke="#BF360C" strokeWidth="1" fill="none" opacity="0.5"/>
    <path d="M85 220 C95 222 108 222 115 220" stroke="#BF360C" strokeWidth="1" fill="none" opacity="0.5"/>
    <text x="82" y="190" fontSize="9" fill="#fff" fontWeight="bold">Stomach</text>
    {/* Pyloric sphincter */}
    <ellipse cx="135" cy="248" rx="8" ry="4" fill="#BF360C" stroke="#7f0000" strokeWidth="1"/>
    {/* Liver - large right lobe */}
    <path d="M170 110 C200 105 240 108 260 120 C275 130 278 145 270 160 C260 175 235 180 210 178 C185 176 170 165 168 150 C166 135 165 120 170 110Z" fill="#66BB6A" stroke="#2E7D32" strokeWidth="2"/>
    <path d="M220 115 C220 130 218 150 215 170" stroke="#1B5E20" strokeWidth="1" opacity="0.4"/>
    <text x="200" y="145" fontSize="10" fill="#1B5E20" fontWeight="bold">Liver</text>
    <text x="190" y="157" fontSize="7" fill="#1B5E20">(Organ X)</text>
    {/* Gall bladder */}
    <path d="M195 175 C190 180 188 188 192 195 C196 200 202 200 206 195 C210 188 208 180 203 175Z" fill="#A5D6A7" stroke="#2E7D32" strokeWidth="1.5"/>
    <text x="210" y="195" fontSize="7" fill="#2E7D32">Gall</text>
    <text x="210" y="204" fontSize="7" fill="#2E7D32">Bladder</text>
    {/* Pancreas */}
    <path d="M100 260 C110 255 130 252 155 255 C170 257 180 262 185 268 C180 274 170 277 155 278 C130 279 110 276 100 272 Z" fill="#FFF9C4" stroke="#F9A825" strokeWidth="1.5"/>
    <text x="120" y="269" fontSize="8" fill="#F57F17" fontWeight="bold">Pancreas</text>
    {/* Duodenum */}
    <path d="M135 248 C145 255 160 260 170 265 C180 270 185 280 180 290 C175 300 165 305 155 300" fill="none" stroke="url(#intestineGrad)" strokeWidth="5"/>
    <text x="180" y="285" fontSize="7" fill="#E64A19">Duodenum</text>
    {/* Small intestine - coiled */}
    <path d="M155 300 C140 305 120 310 110 315 C100 320 95 328 105 332 C115 336 135 334 145 330 C155 326 160 320 150 316 C140 312 120 314 110 318" stroke="#FF8A65" strokeWidth="4" fill="none"/>
    <path d="M110 318 C100 322 95 330 105 336 C115 342 135 340 145 336 C155 332 160 326 150 322 C140 318 120 320 110 324" stroke="#FF8A65" strokeWidth="4" fill="none"/>
    <path d="M110 324 C100 328 95 335 105 340 C115 345 130 344 140 340" stroke="#FF8A65" strokeWidth="4" fill="none"/>
    <text x="160" y="330" fontSize="8" fill="#E64A19" fontWeight="bold">Small</text>
    <text x="160" y="341" fontSize="8" fill="#E64A19" fontWeight="bold">Intestine</text>
    {/* Large intestine - ascending, transverse, descending */}
    <path d="M60 340 L60 300 C60 285 55 280 50 275 L50 345 C50 360 65 370 90 375 C115 380 150 380 175 375 C200 370 215 360 215 345 L215 310 C215 300 210 295 205 300" stroke="#8D6E63" strokeWidth="7" fill="none" opacity="0.8"/>
    <path d="M60 340 L60 300 C60 285 55 280 50 275 L50 345 C50 360 65 370 90 375 C115 380 150 380 175 375 C200 370 215 360 215 345 L215 310 C215 300 210 295 205 300" stroke="#A1887F" strokeWidth="4" fill="none" opacity="0.5"/>
    <text x="8" y="310" fontSize="7" fill="#5D4037" fontWeight="bold">Large</text>
    <text x="5" y="320" fontSize="7" fill="#5D4037" fontWeight="bold">Intestine</text>
    {/* Rectum and anus */}
    <path d="M130 378 L130 395 C130 400 128 405 130 408" stroke="#795548" strokeWidth="5" fill="none"/>
    <text x="140" y="400" fontSize="7" fill="#5D4037">Rectum</text>
    <text x="123" y="415" fontSize="7" fill="#5D4037">Anus</text>
    {/* Title */}
    <text x="75" y="12" fontSize="12" fill="#333" fontWeight="bold">Human Digestive System</text>
  </svg>
);

// 4. Plant Cell - Detailed structure
export const PlantCellDiagram = () => (
  <svg viewBox="0 0 380 300" className="bio-diagram">
    <defs>
      <linearGradient id="vacuoleGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E3F2FD"/>
        <stop offset="100%" stopColor="#90CAF9"/>
      </linearGradient>
      <linearGradient id="chloroGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A5D6A7"/>
        <stop offset="100%" stopColor="#2E7D32"/>
      </linearGradient>
      <linearGradient id="mitoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFCCBC"/>
        <stop offset="100%" stopColor="#E64A19"/>
      </linearGradient>
    </defs>
    {/* Cell Wall - thick outer boundary */}
    <rect x="25" y="25" width="330" height="230" rx="20" ry="20" fill="none" stroke="#33691E" strokeWidth="6"/>
    <rect x="25" y="25" width="330" height="230" rx="20" ry="20" fill="none" stroke="#558B2F" strokeWidth="3"/>
    {/* Cell Membrane - inner boundary */}
    <rect x="35" y="35" width="310" height="210" rx="16" ry="16" fill="#F1F8E9" stroke="#66BB6A" strokeWidth="2" strokeDasharray="6,3"/>
    {/* Large Central Vacuole */}
    <ellipse cx="200" cy="145" rx="95" ry="70" fill="url(#vacuoleGrad)" stroke="#1565C0" strokeWidth="2"/>
    <text x="170" y="148" fontSize="11" fill="#0D47A1" fontWeight="bold">Central</text>
    <text x="168" y="163" fontSize="11" fill="#0D47A1" fontWeight="bold">Vacuole</text>
    {/* Tonoplast label */}
    <text x="228" y="88" fontSize="7" fill="#1565C0" fontStyle="italic">(Tonoplast)</text>
    {/* Nucleus - pushed to periphery */}
    <circle cx="85" cy="90" r="28" fill="#FFF9C4" stroke="#F57F17" strokeWidth="2"/>
    {/* Nuclear membrane double line */}
    <circle cx="85" cy="90" r="26" fill="none" stroke="#F57F17" strokeWidth="0.8" strokeDasharray="3"/>
    {/* Nuclear pores */}
    <circle cx="70" cy="66" r="1.5" fill="#F57F17"/>
    <circle cx="100" cy="68" r="1.5" fill="#F57F17"/>
    <circle cx="108" cy="82" r="1.5" fill="#F57F17"/>
    <circle cx="60" cy="85" r="1.5" fill="#F57F17"/>
    {/* Nucleolus */}
    <circle cx="85" cy="90" r="9" fill="#FFB74D" stroke="#E65100" strokeWidth="1"/>
    {/* Chromatin network */}
    <path d="M75 80 C78 78 82 82 85 79 C88 76 92 80 95 78" stroke="#E65100" strokeWidth="0.8" fill="none"/>
    <path d="M72 95 C76 93 80 97 84 95 C88 93 92 96 96 94" stroke="#E65100" strokeWidth="0.8" fill="none"/>
    {/* Chloroplasts - organelle X - multiple with internal thylakoids */}
    <ellipse cx="295" cy="70" rx="20" ry="12" fill="url(#chloroGrad)" stroke="#1B5E20" strokeWidth="1.5"/>
    <path d="M280 70 L310 70 M283 66 L307 66 M283 74 L307 74" stroke="#1B5E20" strokeWidth="0.7" opacity="0.5"/>
    <ellipse cx="310" cy="100" rx="18" ry="11" fill="url(#chloroGrad)" stroke="#1B5E20" strokeWidth="1.5"/>
    <path d="M296 100 L324 100 M298 96 L322 96 M298 104 L322 104" stroke="#1B5E20" strokeWidth="0.7" opacity="0.5"/>
    <ellipse cx="60" cy="180" rx="18" ry="11" fill="url(#chloroGrad)" stroke="#1B5E20" strokeWidth="1.5"/>
    <path d="M46 180 L74 180 M48 176 L72 176 M48 184 L72 184" stroke="#1B5E20" strokeWidth="0.7" opacity="0.5"/>
    <ellipse cx="80" cy="210" rx="17" ry="10" fill="url(#chloroGrad)" stroke="#1B5E20" strokeWidth="1.5"/>
    <path d="M67 210 L93 210 M69 206 L91 206 M69 214 L91 214" stroke="#1B5E20" strokeWidth="0.7" opacity="0.5"/>
    {/* Mitochondria - organelle Y - with cristae */}
    <ellipse cx="300" cy="195" rx="16" ry="10" fill="url(#mitoGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    <path d="M288 195 C290 190 295 190 298 195 C301 200 295 200 292 195" stroke="#BF360C" strokeWidth="0.7" fill="none"/>
    <path d="M302 195 C304 190 309 190 312 195" stroke="#BF360C" strokeWidth="0.7" fill="none"/>
    <ellipse cx="70" cy="145" rx="14" ry="9" fill="url(#mitoGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    <path d="M60 145 C62 140 66 140 68 145 C70 150 66 150 64 145" stroke="#BF360C" strokeWidth="0.7" fill="none"/>
    <path d="M72 145 C74 140 78 140 80 145" stroke="#BF360C" strokeWidth="0.7" fill="none"/>
    {/* Endoplasmic Reticulum */}
    <path d="M120 60 C125 55 135 55 140 60 C145 65 145 70 140 75 C135 80 130 80 125 75" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    <path d="M125 75 C120 70 115 72 112 77 C109 82 112 87 117 87" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    {/* Ribosomes on ER */}
    <circle cx="123" cy="57" r="1.5" fill="#7B1FA2"/>
    <circle cx="137" cy="55" r="1.5" fill="#7B1FA2"/>
    <circle cx="143" cy="63" r="1.5" fill="#7B1FA2"/>
    <circle cx="142" cy="73" r="1.5" fill="#7B1FA2"/>
    {/* Golgi apparatus */}
    <path d="M290 145 C295 140 310 140 315 145" stroke="#FF6F00" strokeWidth="2" fill="none"/>
    <path d="M292 150 C297 145 308 145 313 150" stroke="#FF6F00" strokeWidth="2" fill="none"/>
    <path d="M294 155 C299 150 306 150 311 155" stroke="#FF6F00" strokeWidth="2" fill="none"/>
    <circle cx="316" cy="142" r="2.5" fill="#FF6F00"/>
    <circle cx="318" cy="148" r="2" fill="#FF6F00"/>
    {/* Plasmodesmata */}
    <line x1="25" y1="120" x2="35" y2="120" stroke="#33691E" strokeWidth="2"/>
    <line x1="25" y1="160" x2="35" y2="160" stroke="#33691E" strokeWidth="2"/>
    {/* Labels with leader lines */}
    <line x1="85" y1="62" x2="85" y2="48" stroke="#333" strokeWidth="0.5"/>
    <text x="60" y="45" fontSize="9" fill="#E65100" fontWeight="bold">Nucleus</text>
    <text x="68" y="132" fontSize="8" fill="#BF360C" fontWeight="bold">Y</text>
    <text x="285" y="180" fontSize="8" fill="#BF360C" fontWeight="bold">Mitochondria (Y)</text>
    <text x="265" y="55" fontSize="9" fill="#1B5E20" fontWeight="bold">Chloroplast (X)</text>
    <text x="38" y="48" fontSize="8" fill="#66BB6A">Cell Membrane</text>
    <text x="50" y="18" fontSize="9" fill="#33691E" fontWeight="bold">Cell Wall</text>
    <text x="100" y="50" fontSize="7" fill="#7B1FA2">ER</text>
    <text x="295" y="135" fontSize="7" fill="#FF6F00">Golgi Body</text>
    <text x="125" y="290" fontSize="12" fill="#333" fontWeight="bold">Plant Cell (Organelles X and Y)</text>
  </svg>
);

// 5. Excretory System - Detailed with nephron
export const ExcretoryDiagram = () => (
  <svg viewBox="0 0 360 380" className="bio-diagram">
    <defs>
      <linearGradient id="kidneyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFAB91"/>
        <stop offset="50%" stopColor="#D84315"/>
        <stop offset="100%" stopColor="#BF360C"/>
      </linearGradient>
    </defs>
    {/* Adrenal glands */}
    <path d="M100 80 C105 72 115 70 125 72 C130 74 132 78 128 82 C124 86 112 87 105 85 C100 84 98 82 100 80Z" fill="#FFF176" stroke="#F9A825" strokeWidth="1"/>
    <path d="M235 80 C240 72 250 70 260 72 C265 74 267 78 263 82 C259 86 247 87 240 85 C235 84 233 82 235 80Z" fill="#FFF176" stroke="#F9A825" strokeWidth="1"/>
    <text x="96" y="70" fontSize="7" fill="#F57F17">Adrenal gland</text>
    {/* Left Kidney */}
    <path d="M105 88 C80 92 68 115 68 145 C68 175 80 200 105 205 C120 208 128 195 130 175 C132 155 130 130 128 115 C126 100 120 90 105 88Z" fill="url(#kidneyGrad)" stroke="#BF360C" strokeWidth="2.5"/>
    {/* Left kidney internal - medulla */}
    <path d="M100 105 C90 110 85 125 85 145 C85 165 90 180 100 185 C108 188 114 180 116 168 C118 155 117 135 115 120 C114 110 108 103 100 105Z" fill="#FFCCBC" stroke="#E64A19" strokeWidth="1"/>
    {/* Renal pelvis left */}
    <path d="M115 135 C118 138 120 145 118 155 C116 162 113 165 110 160 C107 155 108 145 110 138 C112 133 114 132 115 135Z" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1"/>
    {/* Right Kidney */}
    <path d="M260 88 C285 92 297 115 297 145 C297 175 285 200 260 205 C245 208 237 195 235 175 C233 155 235 130 237 115 C239 100 245 90 260 88Z" fill="url(#kidneyGrad)" stroke="#BF360C" strokeWidth="2.5"/>
    {/* Right kidney internal */}
    <path d="M265 105 C275 110 280 125 280 145 C280 165 275 180 265 185 C257 188 251 180 249 168 C247 155 248 135 250 120 C251 110 257 103 265 105Z" fill="#FFCCBC" stroke="#E64A19" strokeWidth="1"/>
    {/* Renal pelvis right */}
    <path d="M250 135 C247 138 245 145 247 155 C249 162 252 165 255 160 C258 155 257 145 255 138 C253 133 251 132 250 135Z" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1"/>
    {/* Aorta (central red vessel) */}
    <path d="M180 50 L180 280" stroke="#C62828" strokeWidth="5" fill="none"/>
    <path d="M180 50 L180 280" stroke="#E53935" strokeWidth="3" fill="none"/>
    {/* Vena cava (blue vessel) */}
    <path d="M188 50 L188 280" stroke="#1565C0" strokeWidth="5" fill="none"/>
    <path d="M188 50 L188 280" stroke="#42A5F5" strokeWidth="3" fill="none"/>
    {/* Renal arteries */}
    <path d="M180 130 L135 130" stroke="#C62828" strokeWidth="3" fill="none"/>
    <path d="M180 130 L230 130" stroke="#C62828" strokeWidth="3" fill="none"/>
    {/* Renal veins */}
    <path d="M188 140 L135 140" stroke="#1565C0" strokeWidth="3" fill="none"/>
    <path d="M188 140 L230 140" stroke="#1565C0" strokeWidth="3" fill="none"/>
    {/* Ureters */}
    <path d="M115 200 C115 220 120 250 130 280 C135 295 140 310 145 320" stroke="#FF8A65" strokeWidth="3.5" fill="none"/>
    <path d="M250 200 C250 220 245 250 235 280 C230 295 225 310 220 320" stroke="#FF8A65" strokeWidth="3.5" fill="none"/>
    {/* Urinary Bladder */}
    <path d="M145 320 C140 325 130 335 130 345 C130 360 145 370 183 372 C220 370 235 360 235 345 C235 335 225 325 220 320" fill="#FFF9C4" stroke="#F9A825" strokeWidth="2"/>
    {/* Urethra */}
    <line x1="183" y1="372" x2="183" y2="395" stroke="#F57F17" strokeWidth="3"/>
    {/* Nephron detail (inset circle) */}
    <circle cx="310" cy="280" r="55" fill="#FFF3E0" stroke="#E64A19" strokeWidth="1.5"/>
    <text x="285" y="235" fontSize="8" fill="#BF360C" fontWeight="bold">Nephron (P)</text>
    {/* Glomerulus in nephron */}
    <circle cx="310" cy="265" r="12" fill="none" stroke="#C62828" strokeWidth="1.5"/>
    <path d="M303 260 C306 258 310 262 312 258 C314 255 318 260 316 263" stroke="#C62828" strokeWidth="1" fill="none"/>
    <path d="M305 265 C308 268 312 264 315 268 C317 270 314 272 310 270" stroke="#C62828" strokeWidth="1" fill="none"/>
    <text x="325" y="265" fontSize="6" fill="#C62828">Glomerulus</text>
    {/* Bowman's capsule */}
    <path d="M295 258 C290 250 295 245 305 245 L315 245 C325 245 330 250 325 258 C330 275 325 280 315 282 L305 282 C295 280 290 275 295 258Z" fill="none" stroke="#F57F17" strokeWidth="1.5"/>
    <text x="285" y="243" fontSize="6" fill="#F57F17">Bowman's Capsule</text>
    {/* Tubule */}
    <path d="M310 282 C310 290 305 295 300 300 C295 305 290 310 295 315 C300 320 310 320 315 315 C320 310 325 305 320 300 C315 295 310 295 310 300" stroke="#FF8A65" strokeWidth="2" fill="none"/>
    <text x="275" y="330" fontSize="6" fill="#E64A19">Tubule</text>
    {/* Afferent arteriole */}
    <path d="M290 260 L298 260" stroke="#C62828" strokeWidth="2"/>
    <text x="268" y="258" fontSize="5.5" fill="#C62828">Afferent</text>
    {/* Efferent arteriole */}
    <path d="M322 260 L330 258" stroke="#1565C0" strokeWidth="2"/>
    <text x="332" y="258" fontSize="5.5" fill="#1565C0">Efferent</text>
    {/* Labels */}
    <text x="72" y="148" fontSize="10" fill="#fff" fontWeight="bold">Kidney</text>
    <text x="247" y="148" fontSize="10" fill="#fff" fontWeight="bold">Kidney</text>
    <text x="150" y="45" fontSize="8" fill="#C62828" fontWeight="bold">Aorta</text>
    <text x="192" y="45" fontSize="8" fill="#1565C0" fontWeight="bold">Vena Cava</text>
    <text x="100" y="225" fontSize="8" fill="#E64A19">Ureter</text>
    <text x="240" y="225" fontSize="8" fill="#E64A19">Ureter</text>
    <text x="148" y="350" fontSize="9" fill="#F57F17" fontWeight="bold">Bladder</text>
    <text x="160" y="400" fontSize="8" fill="#F57F17">Urethra</text>
    <text x="95" y="20" fontSize="12" fill="#333" fontWeight="bold">Human Excretory System</text>
  </svg>
);

// 6. Flower - Detailed longitudinal section
export const FlowerDiagram = () => (
  <svg viewBox="0 0 350 320" className="bio-diagram">
    <defs>
      <linearGradient id="petalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F8BBD0"/>
        <stop offset="50%" stopColor="#EC407A"/>
        <stop offset="100%" stopColor="#F8BBD0"/>
      </linearGradient>
      <linearGradient id="sepalGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#A5D6A7"/>
        <stop offset="100%" stopColor="#2E7D32"/>
      </linearGradient>
    </defs>
    {/* Stem/Pedicel */}
    <path d="M175 280 L175 320" stroke="#388E3C" strokeWidth="5"/>
    <path d="M175 280 L175 320" stroke="#4CAF50" strokeWidth="3"/>
    {/* Thalamus/Receptacle */}
    <ellipse cx="175" cy="270" rx="30" ry="15" fill="#81C784" stroke="#2E7D32" strokeWidth="2"/>
    {/* Sepals */}
    <path d="M145 265 C130 270 115 280 110 295 C108 300 112 303 118 298 C125 290 135 278 148 268Z" fill="url(#sepalGrad)" stroke="#1B5E20" strokeWidth="1.5"/>
    <path d="M205 265 C220 270 235 280 240 295 C242 300 238 303 232 298 C225 290 215 278 202 268Z" fill="url(#sepalGrad)" stroke="#1B5E20" strokeWidth="1.5"/>
    <path d="M160 268 C150 275 140 290 138 300 C137 305 140 306 144 302 C150 295 155 280 162 270Z" fill="url(#sepalGrad)" stroke="#1B5E20" strokeWidth="1"/>
    <path d="M190 268 C200 275 210 290 212 300 C213 305 210 306 206 302 C200 295 195 280 188 270Z" fill="url(#sepalGrad)" stroke="#1B5E20" strokeWidth="1"/>
    {/* Petals - large and prominent */}
    <path d="M165 255 C140 240 110 210 95 170 C88 150 95 135 115 140 C135 145 155 170 167 200 C172 215 170 240 167 255Z" fill="url(#petalGrad)" stroke="#AD1457" strokeWidth="1.5"/>
    <path d="M185 255 C210 240 240 210 255 170 C262 150 255 135 235 140 C215 145 195 170 183 200 C178 215 180 240 183 255Z" fill="url(#petalGrad)" stroke="#AD1457" strokeWidth="1.5"/>
    <path d="M170 258 C155 235 130 195 125 155 C122 135 130 125 145 130 C160 135 170 160 173 190 C175 215 173 245 172 255Z" fill="url(#petalGrad)" stroke="#AD1457" strokeWidth="1.5" opacity="0.8"/>
    <path d="M180 258 C195 235 220 195 225 155 C228 135 220 125 205 130 C190 135 180 160 177 190 C175 215 177 245 178 255Z" fill="url(#petalGrad)" stroke="#AD1457" strokeWidth="1.5" opacity="0.8"/>
    <path d="M172 260 C168 240 160 200 162 160 C163 140 170 130 178 130 C186 130 190 140 190 160 C192 200 183 240 179 260Z" fill="url(#petalGrad)" stroke="#AD1457" strokeWidth="1.5" opacity="0.7"/>
    {/* Petal veins */}
    <path d="M130 200 C140 185 150 175 160 170" stroke="#AD1457" strokeWidth="0.5" fill="none" opacity="0.4"/>
    <path d="M220 200 C210 185 200 175 190 170" stroke="#AD1457" strokeWidth="0.5" fill="none" opacity="0.4"/>
    {/* Pistil - Ovary */}
    <ellipse cx="175" cy="255" rx="15" ry="20" fill="#FFF9C4" stroke="#F57F17" strokeWidth="2"/>
    {/* Ovules inside ovary */}
    <circle cx="170" cy="252" r="4" fill="#FFD54F" stroke="#F57F17" strokeWidth="0.8"/>
    <circle cx="180" cy="258" r="4" fill="#FFD54F" stroke="#F57F17" strokeWidth="0.8"/>
    <circle cx="172" cy="263" r="3.5" fill="#FFD54F" stroke="#F57F17" strokeWidth="0.8"/>
    {/* Style */}
    <path d="M175 235 L175 170 C175 165 175 160 175 155" stroke="#F57F17" strokeWidth="2.5" fill="none"/>
    {/* Stigma (X - if removed) */}
    <path d="M168 155 C165 148 167 142 175 140 C183 142 185 148 182 155" fill="#FF8F00" stroke="#E65100" strokeWidth="1.5"/>
    <path d="M170 148 C172 145 178 145 180 148" stroke="#E65100" strokeWidth="0.8" fill="none"/>
    <text x="188" y="142" fontSize="9" fill="#D32F2F" fontWeight="bold">X (Stigma)</text>
    {/* Stamens - multiple */}
    <path d="M155 250 C148 235 140 210 138 190 C136 175 140 168 143 165" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <ellipse cx="143" cy="160" rx="5" ry="9" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1.5"/>
    <path d="M143 152 L143 168" stroke="#4A148C" strokeWidth="0.5"/>
    <path d="M195 250 C202 235 210 210 212 190 C214 175 210 168 207 165" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <ellipse cx="207" cy="160" rx="5" ry="9" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1.5"/>
    <path d="M207 152 L207 168" stroke="#4A148C" strokeWidth="0.5"/>
    <path d="M160 248 C152 230 148 205 150 185" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <ellipse cx="150" cy="180" rx="4.5" ry="8" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1.5"/>
    <path d="M190 248 C198 230 202 205 200 185" stroke="#6A1B9A" strokeWidth="1.5" fill="none"/>
    <ellipse cx="200" cy="180" rx="4.5" ry="8" fill="#CE93D8" stroke="#6A1B9A" strokeWidth="1.5"/>
    {/* Pollen grains on anthers */}
    <circle cx="141" cy="155" r="1.5" fill="#FFD54F"/>
    <circle cx="145" cy="157" r="1.5" fill="#FFD54F"/>
    <circle cx="209" cy="155" r="1.5" fill="#FFD54F"/>
    <circle cx="205" cy="157" r="1.5" fill="#FFD54F"/>
    {/* Labels with leader lines */}
    <line x1="95" y1="168" x2="75" y2="160" stroke="#333" strokeWidth="0.7"/>
    <text x="20" y="163" fontSize="9" fill="#AD1457" fontWeight="bold">Petal (Corolla)</text>
    <line x1="110" y1="297" x2="75" y2="300" stroke="#333" strokeWidth="0.7"/>
    <text x="20" y="303" fontSize="9" fill="#2E7D32" fontWeight="bold">Sepal (Calyx)</text>
    <line x1="135" y1="160" x2="60" y2="130" stroke="#333" strokeWidth="0.7"/>
    <text x="15" y="125" fontSize="8" fill="#6A1B9A" fontWeight="bold">Anther</text>
    <text x="15" y="137" fontSize="8" fill="#6A1B9A">(with pollen)</text>
    <line x1="155" y1="250" x2="60" y2="240" stroke="#333" strokeWidth="0.7"/>
    <text x="25" y="238" fontSize="8" fill="#6A1B9A" fontWeight="bold">Filament</text>
    <line x1="175" y1="200" x2="290" y2="200" stroke="#333" strokeWidth="0.7"/>
    <text x="292" y="198" fontSize="8" fill="#F57F17" fontWeight="bold">Style</text>
    <line x1="175" y1="255" x2="290" y2="250" stroke="#333" strokeWidth="0.7"/>
    <text x="292" y="248" fontSize="8" fill="#F57F17" fontWeight="bold">Ovary</text>
    <text x="292" y="260" fontSize="7" fill="#F57F17">(with ovules)</text>
    <line x1="175" y1="272" x2="290" y2="275" stroke="#333" strokeWidth="0.7"/>
    <text x="292" y="277" fontSize="8" fill="#2E7D32" fontWeight="bold">Thalamus</text>
    <line x1="175" y1="290" x2="290" y2="295" stroke="#333" strokeWidth="0.7"/>
    <text x="292" y="298" fontSize="8" fill="#388E3C" fontWeight="bold">Pedicel</text>
    <text x="95" y="15" fontSize="12" fill="#333" fontWeight="bold">L.S. of a Flower</text>
  </svg>
);

// 7. Respiratory System - Detailed
export const RespiratoryDiagram = () => (
  <svg viewBox="0 0 320 380" className="bio-diagram">
    <defs>
      <linearGradient id="lungGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E3F2FD"/>
        <stop offset="50%" stopColor="#BBDEFB"/>
        <stop offset="100%" stopColor="#90CAF9"/>
      </linearGradient>
    </defs>
    {/* Nasal cavity */}
    <path d="M148 30 C140 28 135 32 133 38 C131 45 134 52 140 55 L152 55 C158 52 161 45 159 38 C157 32 152 28 148 30Z" fill="#FFCDD2" stroke="#C62828" strokeWidth="1.5"/>
    <path d="M138 38 L154 38 M136 44 L156 44 M138 50 L154 50" stroke="#C62828" strokeWidth="0.5" opacity="0.5"/>
    <text x="165" y="42" fontSize="8" fill="#C62828" fontWeight="bold">Nasal Cavity</text>
    {/* Pharynx */}
    <path d="M142 55 C140 58 139 62 139 67 L153 67 C153 62 152 58 150 55Z" fill="#FFCDD2" stroke="#C62828" strokeWidth="1"/>
    <text x="158" y="65" fontSize="7" fill="#C62828">Pharynx</text>
    {/* Larynx */}
    <path d="M137 67 C135 70 133 75 134 80 C135 85 138 88 142 88 L150 88 C154 88 157 85 158 80 C159 75 157 70 155 67Z" fill="#FFECB3" stroke="#FF8F00" strokeWidth="1.5"/>
    <path d="M140 73 L152 73 M141 78 L151 78 M142 83 L150 83" stroke="#FF8F00" strokeWidth="0.7"/>
    <text x="162" y="80" fontSize="7" fill="#FF8F00" fontWeight="bold">Larynx</text>
    {/* Trachea with cartilage rings */}
    <rect x="139" y="88" width="14" height="75" fill="#BBDEFB" stroke="#1565C0" strokeWidth="1.5" rx="3"/>
    <path d="M139 95 C143 97 149 97 153 95" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <path d="M139 103 C143 105 149 105 153 103" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <path d="M139 111 C143 113 149 113 153 111" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <path d="M139 119 C143 121 149 121 153 119" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <path d="M139 127 C143 129 149 129 153 127" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <path d="M139 135 C143 137 149 137 153 135" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <path d="M139 143 C143 145 149 145 153 143" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <path d="M139 151 C143 153 149 153 153 151" stroke="#0D47A1" strokeWidth="1.2" fill="none"/>
    <text x="158" y="130" fontSize="8" fill="#1565C0" fontWeight="bold">Trachea</text>
    {/* Bronchi - branching */}
    <path d="M143 163 C135 170 120 178 100 185" stroke="#1565C0" strokeWidth="4" fill="none"/>
    <path d="M149 163 C157 170 172 178 192 185" stroke="#1565C0" strokeWidth="4" fill="none"/>
    <text x="108" y="178" fontSize="7" fill="#0D47A1" fontWeight="bold">Bronchus</text>
    {/* Bronchioles inside lungs */}
    <path d="M100 185 C90 192 80 200 75 210" stroke="#42A5F5" strokeWidth="2" fill="none"/>
    <path d="M100 185 C95 195 92 208 95 220" stroke="#42A5F5" strokeWidth="2" fill="none"/>
    <path d="M100 185 C105 195 108 210 105 225" stroke="#42A5F5" strokeWidth="1.5" fill="none"/>
    <path d="M192 185 C202 192 212 200 217 210" stroke="#42A5F5" strokeWidth="2" fill="none"/>
    <path d="M192 185 C197 195 200 208 197 220" stroke="#42A5F5" strokeWidth="2" fill="none"/>
    <path d="M192 185 C187 195 184 210 187 225" stroke="#42A5F5" strokeWidth="1.5" fill="none"/>
    {/* Left Lung */}
    <path d="M55 165 C35 170 25 195 22 225 C18 265 25 300 45 320 C65 340 90 342 108 335 C125 328 132 310 133 285 C134 260 130 220 120 195 C112 175 80 163 55 165Z" fill="url(#lungGrad)" stroke="#1565C0" strokeWidth="2.5"/>
    {/* Left lung lobes */}
    <path d="M35 250 C55 248 80 246 120 250" stroke="#1565C0" strokeWidth="1.5" fill="none" strokeDasharray="4"/>
    <text x="55" y="215" fontSize="9" fill="#0D47A1" fontWeight="bold">Left</text>
    <text x="55" y="228" fontSize="9" fill="#0D47A1" fontWeight="bold">Lung</text>
    {/* Right Lung */}
    <path d="M237 165 C257 170 267 195 270 225 C274 265 267 300 247 320 C227 340 202 342 184 335 C167 328 160 310 159 285 C158 260 162 220 172 195 C180 175 212 163 237 165Z" fill="url(#lungGrad)" stroke="#1565C0" strokeWidth="2.5"/>
    {/* Right lung lobes */}
    <path d="M172 230 C195 228 225 228 262 230" stroke="#1565C0" strokeWidth="1.5" fill="none" strokeDasharray="4"/>
    <path d="M175 280 C198 278 228 278 260 280" stroke="#1565C0" strokeWidth="1.5" fill="none" strokeDasharray="4"/>
    <text x="200" y="210" fontSize="9" fill="#0D47A1" fontWeight="bold">Right</text>
    <text x="200" y="223" fontSize="9" fill="#0D47A1" fontWeight="bold">Lung</text>
    {/* Alveoli cluster (magnified) */}
    <circle cx="280" cy="330" r="35" fill="#F3E5F5" stroke="#7B1FA2" strokeWidth="1"/>
    <circle cx="270" cy="320" r="8" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.2"/>
    <circle cx="282" cy="315" r="7" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.2"/>
    <circle cx="290" cy="325" r="8" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.2"/>
    <circle cx="275" cy="332" r="7" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.2"/>
    <circle cx="287" cy="338" r="7.5" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.2"/>
    <circle cx="268" cy="340" r="6" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.2"/>
    <circle cx="295" cy="335" r="5" fill="#E3F2FD" stroke="#1565C0" strokeWidth="1.2"/>
    {/* Capillaries on alveoli */}
    <path d="M264 316 C260 314 258 318 262 320" stroke="#C62828" strokeWidth="0.8" fill="none"/>
    <path d="M294 322 C298 320 300 324 296 326" stroke="#C62828" strokeWidth="0.8" fill="none"/>
    <text x="262" y="358" fontSize="7" fill="#7B1FA2" fontWeight="bold">Alveoli</text>
    <text x="258" y="300" fontSize="7" fill="#7B1FA2">(enlarged)</text>
    <line x1="250" y1="310" x2="240" y2="300" stroke="#7B1FA2" strokeWidth="0.7" strokeDasharray="3"/>
    {/* Diaphragm */}
    <path d="M15 345 C60 360 120 365 160 355 C200 365 240 360 285 345" stroke="#795548" strokeWidth="3" fill="none"/>
    <path d="M15 345 C60 360 120 365 160 355 C200 365 240 360 285 345" stroke="#A1887F" strokeWidth="1.5" fill="none"/>
    <text x="125" y="373" fontSize="9" fill="#5D4037" fontWeight="bold">Diaphragm</text>
    {/* Ribs indication */}
    <path d="M30 180 C50 175 65 176 80 180" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4"/>
    <path d="M25 210 C48 205 70 206 90 210" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4"/>
    <path d="M210 180 C230 175 245 176 260 180" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4"/>
    <path d="M205 210 C228 205 250 206 268 210" stroke="#795548" strokeWidth="1" fill="none" opacity="0.4"/>
    <text x="80" y="20" fontSize="12" fill="#333" fontWeight="bold">Human Respiratory System</text>
  </svg>
);

// 8. Human Brain - Detailed sagittal view
export const BrainDiagram = () => (
  <svg viewBox="0 0 380 280" className="bio-diagram">
    <defs>
      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#F3E5F5"/>
        <stop offset="50%" stopColor="#CE93D8"/>
        <stop offset="100%" stopColor="#AB47BC"/>
      </linearGradient>
      <linearGradient id="cerebellumGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#E1BEE7"/>
        <stop offset="100%" stopColor="#7B1FA2"/>
      </linearGradient>
    </defs>
    {/* Cerebrum - large with sulci and gyri */}
    <path d="M70 140 C65 100 80 55 120 35 C160 15 220 10 260 20 C300 30 330 55 340 90 C350 125 340 155 320 170 C300 185 250 190 200 190 C150 190 110 185 90 175 C75 165 72 155 70 140Z" fill="url(#brainGrad)" stroke="#6A1B9A" strokeWidth="2.5"/>
    {/* Sulci (grooves) of cerebrum */}
    <path d="M120 50 C130 55 140 65 145 80" stroke="#7B1FA2" strokeWidth="1.5" fill="none"/>
    <path d="M155 35 C160 50 158 70 155 85" stroke="#7B1FA2" strokeWidth="1.5" fill="none"/>
    <path d="M200 25 C195 40 197 60 200 80" stroke="#7B1FA2" strokeWidth="1.5" fill="none"/>
    <path d="M240 28 C235 45 238 65 242 85" stroke="#7B1FA2" strokeWidth="1.5" fill="none"/>
    <path d="M280 40 C275 55 278 75 282 90" stroke="#7B1FA2" strokeWidth="1.5" fill="none"/>
    <path d="M310 60 C305 75 307 90 310 105" stroke="#7B1FA2" strokeWidth="1.5" fill="none"/>
    {/* Gyri bumps */}
    <path d="M100 60 C105 50 115 48 120 50" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    <path d="M135 32 C145 28 155 29 160 35" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    <path d="M175 22 C190 18 205 19 215 24" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    <path d="M250 22 C260 20 275 22 285 30" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    <path d="M85 100 C88 90 95 88 100 92" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    <path d="M90 130 C95 120 102 118 108 125" stroke="#7B1FA2" strokeWidth="1" fill="none"/>
    {/* Frontal lobe area */}
    <text x="100" y="105" fontSize="9" fill="#4A148C" fontWeight="bold">Frontal</text>
    <text x="108" y="117" fontSize="9" fill="#4A148C" fontWeight="bold">Lobe</text>
    {/* Parietal lobe */}
    <text x="200" y="70" fontSize="9" fill="#4A148C" fontWeight="bold">Parietal Lobe</text>
    {/* Occipital lobe */}
    <text x="290" y="120" fontSize="8" fill="#4A148C">Occipital</text>
    <text x="298" y="132" fontSize="8" fill="#4A148C">Lobe</text>
    {/* Central sulcus */}
    <path d="M180 22 C175 50 178 100 180 140" stroke="#4A148C" strokeWidth="2" fill="none" strokeDasharray="5"/>
    <text x="160" y="145" fontSize="6" fill="#4A148C">Central Sulcus</text>
    {/* Cerebellum - Region P */}
    <path d="M280 175 C310 172 340 180 345 200 C348 218 335 235 310 238 C285 240 260 235 250 220 C242 205 250 178 280 175Z" fill="url(#cerebellumGrad)" stroke="#4A148C" strokeWidth="2"/>
    {/* Cerebellum internal folds (arbor vitae pattern) */}
    <path d="M270 200 C275 195 282 195 288 200 C294 205 288 210 282 210 C276 210 268 205 270 200Z" stroke="#4A148C" strokeWidth="0.8" fill="none"/>
    <path d="M290 195 C296 192 303 193 308 198 C312 203 308 208 302 208 C296 208 288 203 290 195Z" stroke="#4A148C" strokeWidth="0.8" fill="none"/>
    <path d="M280 210 C285 208 292 209 296 213 C300 217 296 222 290 222 C284 222 278 217 280 210Z" stroke="#4A148C" strokeWidth="0.8" fill="none"/>
    <path d="M300 208 C306 206 312 208 315 212 C318 216 315 220 310 220 C305 220 298 216 300 208Z" stroke="#4A148C" strokeWidth="0.8" fill="none"/>
    <text x="272" y="205" fontSize="9" fill="#fff" fontWeight="bold">P</text>
    {/* Cerebellum label */}
    <line x1="310" y1="240" x2="310" y2="255" stroke="#333" strokeWidth="0.7"/>
    <text x="272" y="265" fontSize="10" fill="#4A148C" fontWeight="bold">Cerebellum (P)</text>
    {/* Pons */}
    <ellipse cx="240" cy="200" rx="20" ry="14" fill="#E1BEE7" stroke="#6A1B9A" strokeWidth="1.5"/>
    <text x="228" y="204" fontSize="8" fill="#4A148C" fontWeight="bold">Pons</text>
    {/* Medulla oblongata */}
    <path d="M235 215 C230 225 225 240 220 255 C218 262 220 268 225 270" stroke="#4A148C" strokeWidth="5" fill="none"/>
    <path d="M235 215 C230 225 225 240 220 255 C218 262 220 268 225 270" stroke="#9C27B0" strokeWidth="3" fill="none"/>
    <text x="155" y="255" fontSize="9" fill="#4A148C" fontWeight="bold">Medulla</text>
    <text x="150" y="267" fontSize="9" fill="#4A148C" fontWeight="bold">Oblongata</text>
    <line x1="200" y1="258" x2="218" y2="258" stroke="#333" strokeWidth="0.7"/>
    {/* Spinal cord */}
    <path d="M225 270 C228 275 230 280 230 285" stroke="#4A148C" strokeWidth="4" fill="none"/>
    <text x="238" y="282" fontSize="8" fill="#4A148C">Spinal Cord</text>
    {/* Hypothalamus */}
    <ellipse cx="195" cy="185" rx="15" ry="10" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1"/>
    <text x="135" y="188" fontSize="7" fill="#F57F17">Hypothalamus</text>
    <line x1="170" y1="185" x2="180" y2="185" stroke="#F57F17" strokeWidth="0.5"/>
    {/* Corpus callosum */}
    <path d="M120 150 C150 142 200 140 270 148" stroke="#9C27B0" strokeWidth="3" fill="none"/>
    <text x="165" y="155" fontSize="7" fill="#9C27B0">Corpus Callosum</text>
    {/* Title */}
    <text x="100" y="16" fontSize="12" fill="#333" fontWeight="bold">Human Brain (Sagittal Section)</text>
  </svg>
);

// 9. Human Eye - Detailed cross section
export const EyeDiagram = () => (
  <svg viewBox="0 0 400 280" className="bio-diagram">
    <defs>
      <linearGradient id="scleraGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FAFAFA"/>
        <stop offset="100%" stopColor="#E0E0E0"/>
      </linearGradient>
      <radialGradient id="lensGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF9C4"/>
        <stop offset="100%" stopColor="#F9A825"/>
      </radialGradient>
      <radialGradient id="irisGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#5D4037"/>
        <stop offset="70%" stopColor="#8D6E63"/>
        <stop offset="100%" stopColor="#4E342E"/>
      </radialGradient>
    </defs>
    {/* Sclera - outer white coat */}
    <ellipse cx="200" cy="140" rx="130" ry="100" fill="url(#scleraGrad)" stroke="#616161" strokeWidth="3"/>
    {/* Choroid - middle vascular layer */}
    <ellipse cx="200" cy="140" rx="123" ry="93" fill="none" stroke="#4E342E" strokeWidth="4"/>
    {/* Retina - inner layer */}
    <path d="M80 90 C70 110 68 130 70 150 C72 170 78 190 90 205" stroke="#C62828" strokeWidth="4" fill="none"/>
    <path d="M90 205 C105 225 130 238 160 240 C190 242 210 238 220 230" stroke="#C62828" strokeWidth="3" fill="none" opacity="0.6"/>
    {/* Cornea - transparent front */}
    <path d="M325 140 C325 100 340 90 350 90 C360 90 375 100 375 140 C375 180 360 190 350 190 C340 190 325 180 325 140Z" fill="#E3F2FD" stroke="#1565C0" strokeWidth="2.5" opacity="0.8"/>
    {/* Aqueous humor */}
    <path d="M310 120 C315 115 320 115 325 120 L325 160 C320 165 315 165 310 160Z" fill="#E1F5FE" stroke="#0277BD" strokeWidth="0.5" opacity="0.5"/>
    {/* Iris */}
    <ellipse cx="320" cy="140" rx="8" ry="28" fill="url(#irisGrad)" stroke="#3E2723" strokeWidth="1.5"/>
    {/* Iris muscle fibers */}
    <path d="M318 115 L322 115" stroke="#5D4037" strokeWidth="0.5"/>
    <path d="M317 120 L323 120" stroke="#5D4037" strokeWidth="0.5"/>
    <path d="M316 125 L324 125" stroke="#5D4037" strokeWidth="0.5"/>
    <path d="M316 155 L324 155" stroke="#5D4037" strokeWidth="0.5"/>
    <path d="M317 160 L323 160" stroke="#5D4037" strokeWidth="0.5"/>
    <path d="M318 165 L322 165" stroke="#5D4037" strokeWidth="0.5"/>
    {/* Pupil */}
    <ellipse cx="320" cy="140" rx="4" ry="12" fill="#1A1A1A"/>
    {/* Lens - biconvex */}
    <ellipse cx="295" cy="140" rx="12" ry="28" fill="url(#lensGrad)" stroke="#F57F17" strokeWidth="2"/>
    {/* Ciliary muscles */}
    <path d="M285 108 C280 105 278 108 280 112" stroke="#795548" strokeWidth="2" fill="none"/>
    <path d="M285 172 C280 175 278 172 280 168" stroke="#795548" strokeWidth="2" fill="none"/>
    {/* Suspensory ligaments */}
    <line x1="283" y1="113" x2="290" y2="118" stroke="#795548" strokeWidth="1"/>
    <line x1="283" y1="167" x2="290" y2="162" stroke="#795548" strokeWidth="1"/>
    {/* Vitreous humor */}
    <text x="165" y="142" fontSize="9" fill="#666" fontStyle="italic">Vitreous</text>
    <text x="168" y="155" fontSize="9" fill="#666" fontStyle="italic">Humor</text>
    {/* Optic nerve */}
    <path d="M72 140 C60 140 50 138 35 135 C25 133 18 130 10 128" stroke="#4A148C" strokeWidth="7" fill="none"/>
    <path d="M72 140 C60 140 50 138 35 135 C25 133 18 130 10 128" stroke="#7B1FA2" strokeWidth="4" fill="none"/>
    {/* Blind spot */}
    <circle cx="75" cy="140" r="6" fill="#FFF9C4" stroke="#F57F17" strokeWidth="1"/>
    {/* Fovea / Yellow spot */}
    <circle cx="90" cy="165" r="5" fill="#FFD54F" stroke="#FF8F00" strokeWidth="1"/>
    {/* Blood vessels on retina */}
    <path d="M78 140 C85 130 95 120 108 115" stroke="#C62828" strokeWidth="1" fill="none"/>
    <path d="M78 140 C85 150 95 160 108 165" stroke="#C62828" strokeWidth="1" fill="none"/>
    <path d="M78 140 C88 138 100 135 115 130" stroke="#C62828" strokeWidth="0.8" fill="none"/>
    <path d="M78 140 C88 142 100 148 115 155" stroke="#C62828" strokeWidth="0.8" fill="none"/>
    {/* Labels with precise leader lines */}
    <line x1="350" y1="85" x2="360" y2="70" stroke="#333" strokeWidth="0.7"/>
    <text x="340" y="65" fontSize="9" fill="#1565C0" fontWeight="bold">Cornea</text>
    <line x1="320" y1="105" x2="345" y2="80" stroke="#333" strokeWidth="0.7"/>
    <text x="345" y="80" fontSize="8" fill="#4E342E" fontWeight="bold">Iris</text>
    <text x="345" y="92" fontSize="7" fill="#333">&amp; Pupil</text>
    <line x1="295" y1="108" x2="295" y2="75" stroke="#333" strokeWidth="0.7"/>
    <text x="275" y="70" fontSize="9" fill="#F57F17" fontWeight="bold">Lens</text>
    <line x1="280" y1="110" x2="260" y2="80" stroke="#333" strokeWidth="0.7"/>
    <text x="230" y="75" fontSize="8" fill="#795548">Ciliary</text>
    <text x="230" y="87" fontSize="8" fill="#795548">Muscles</text>
    <line x1="88" y1="200" x2="88" y2="215" stroke="#333" strokeWidth="0.7"/>
    <text x="60" y="225" fontSize="9" fill="#C62828" fontWeight="bold">Retina</text>
    <line x1="90" y1="170" x2="90" y2="235" stroke="#333" strokeWidth="0.7"/>
    <text x="65" y="245" fontSize="8" fill="#FF8F00">Fovea (Yellow spot)</text>
    <line x1="10" y1="125" x2="10" y2="115" stroke="#333" strokeWidth="0.7"/>
    <text x="5" y="110" fontSize="8" fill="#4A148C" fontWeight="bold">Optic Nerve</text>
    <line x1="75" y1="134" x2="60" y2="100" stroke="#333" strokeWidth="0.7"/>
    <text x="35" y="95" fontSize="7" fill="#F57F17">Blind Spot</text>
    <line x1="200" y1="48" x2="200" y2="55" stroke="#333" strokeWidth="0.7"/>
    <text x="170" y="45" fontSize="8" fill="#616161" fontWeight="bold">Sclera</text>
    <text x="115" y="270" fontSize="12" fill="#333" fontWeight="bold">Human Eye (Horizontal Section)</text>
  </svg>
);

// 10. Xylem and Phloem - Detailed cross section with transport
export const XylemPhloemDiagram = () => (
  <svg viewBox="0 0 380 320" className="bio-diagram">
    <defs>
      <linearGradient id="xylemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#BBDEFB"/>
        <stop offset="100%" stopColor="#1565C0"/>
      </linearGradient>
      <linearGradient id="phloemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFCCBC"/>
        <stop offset="100%" stopColor="#E64A19"/>
      </linearGradient>
      <radialGradient id="stemGrad" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#FFF9C4"/>
        <stop offset="50%" stopColor="#F1F8E9"/>
        <stop offset="100%" stopColor="#C8E6C9"/>
      </radialGradient>
    </defs>
    {/* Main stem cross-section */}
    <circle cx="150" cy="155" r="105" fill="url(#stemGrad)" stroke="#33691E" strokeWidth="5"/>
    {/* Epidermis */}
    <circle cx="150" cy="155" r="105" fill="none" stroke="#2E7D32" strokeWidth="4"/>
    <circle cx="150" cy="155" r="100" fill="none" stroke="#4CAF50" strokeWidth="2"/>
    {/* Cortex region */}
    <circle cx="150" cy="155" r="88" fill="none" stroke="#81C784" strokeWidth="1" strokeDasharray="4"/>
    {/* Vascular bundles - arranged in ring */}
    {/* Bundle 1 (top) */}
    <g transform="translate(150, 75)">
      <ellipse cx="0" cy="0" rx="18" ry="25" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-5" cy="-5" r="6" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="5" cy="-10" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-8" cy="5" r="5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="3" cy="3" r="3" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="15" rx="10" ry="6" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Bundle 2 (top-right) */}
    <g transform="translate(210, 95)">
      <ellipse cx="0" cy="0" rx="16" ry="22" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-3" cy="-5" r="5.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="4" cy="-8" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-6" cy="3" r="4.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <circle cx="3" cy="2" r="3" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="13" rx="9" ry="5" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Bundle 3 (right) */}
    <g transform="translate(225, 155)">
      <ellipse cx="0" cy="0" rx="17" ry="23" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-4" cy="-5" r="6" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="5" cy="-8" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-7" cy="4" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <circle cx="3" cy="2" r="3.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="14" rx="9" ry="5.5" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Bundle 4 (bottom-right) */}
    <g transform="translate(205, 215)">
      <ellipse cx="0" cy="0" rx="15" ry="21" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-3" cy="-5" r="5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="4" cy="-7" r="3.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-5" cy="3" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <circle cx="3" cy="1" r="3" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="12" rx="8" ry="5" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Bundle 5 (bottom) */}
    <g transform="translate(150, 235)">
      <ellipse cx="0" cy="0" rx="17" ry="23" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-4" cy="-5" r="5.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="5" cy="-9" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-7" cy="4" r="4.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <circle cx="3" cy="2" r="3" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="14" rx="9" ry="5.5" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Bundle 6 (bottom-left) */}
    <g transform="translate(95, 215)">
      <ellipse cx="0" cy="0" rx="15" ry="21" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-3" cy="-5" r="5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="4" cy="-7" r="3.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-5" cy="3" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <circle cx="3" cy="1" r="3" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="12" rx="8" ry="5" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Bundle 7 (left) */}
    <g transform="translate(75, 155)">
      <ellipse cx="0" cy="0" rx="16" ry="22" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-3" cy="-5" r="5.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="5" cy="-8" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-6" cy="4" r="4.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <circle cx="3" cy="2" r="3" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="13" rx="9" ry="5" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Bundle 8 (top-left) */}
    <g transform="translate(90, 95)">
      <ellipse cx="0" cy="0" rx="15" ry="21" fill="none" stroke="#388E3C" strokeWidth="1.5"/>
      <circle cx="-3" cy="-5" r="5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="4" cy="-7" r="3.5" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
      <circle cx="-5" cy="3" r="4" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <circle cx="3" cy="1" r="3" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1"/>
      <ellipse cx="0" cy="12" rx="8" ry="5" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    </g>
    {/* Pith (center) */}
    <circle cx="150" cy="155" r="30" fill="#FFFDE7" stroke="#827717" strokeWidth="1" strokeDasharray="3"/>
    <text x="137" y="158" fontSize="8" fill="#827717" fontWeight="bold">Pith</text>
    {/* Cambium ring */}
    <circle cx="150" cy="155" r="60" fill="none" stroke="#9C27B0" strokeWidth="1.5" strokeDasharray="5,3"/>
    {/* Legend and labels on right side */}
    <rect x="275" y="60" width="100" height="200" rx="5" fill="#FAFAFA" stroke="#E0E0E0" strokeWidth="1"/>
    <text x="295" y="80" fontSize="10" fill="#333" fontWeight="bold">LEGEND</text>
    {/* Xylem legend */}
    <circle cx="295" cy="100" r="8" fill="url(#xylemGrad)" stroke="#0D47A1" strokeWidth="1.5"/>
    <text x="310" y="104" fontSize="9" fill="#0D47A1" fontWeight="bold">Xylem</text>
    <text x="310" y="116" fontSize="7" fill="#1565C0">(vessels &amp;</text>
    <text x="310" y="126" fontSize="7" fill="#1565C0">tracheids)</text>
    {/* Phloem legend */}
    <ellipse cx="295" cy="148" rx="10" ry="6" fill="url(#phloemGrad)" stroke="#BF360C" strokeWidth="1.5"/>
    <text x="310" y="152" fontSize="9" fill="#E64A19" fontWeight="bold">Phloem</text>
    <text x="310" y="164" fontSize="7" fill="#E64A19">(sieve tubes &amp;</text>
    <text x="310" y="174" fontSize="7" fill="#E64A19">companion cells)</text>
    {/* Transport arrows */}
    <line x1="295" y1="195" x2="295" y2="215" stroke="#0D47A1" strokeWidth="2"/>
    <polygon points="292,198 295,188 298,198" fill="#0D47A1"/>
    <text x="310" y="200" fontSize="8" fill="#0D47A1">Water ↑</text>
    <text x="310" y="212" fontSize="7" fill="#0D47A1">(upward)</text>
    <line x1="295" y1="228" x2="295" y2="248" stroke="#E64A19" strokeWidth="2"/>
    <polygon points="292,245 295,255 298,245" fill="#E64A19"/>
    <text x="310" y="238" fontSize="8" fill="#E64A19">Food ↓</text>
    <text x="310" y="250" fontSize="7" fill="#E64A19">(bidirectional)</text>
    {/* Outer labels */}
    <line x1="245" y1="55" x2="220" y2="70" stroke="#333" strokeWidth="0.7"/>
    <text x="245" y="52" fontSize="8" fill="#33691E" fontWeight="bold">Epidermis</text>
    <line x1="245" y1="43" x2="228" y2="60" stroke="#333" strokeWidth="0.7"/>
    <text x="245" y="40" fontSize="8" fill="#81C784">Cortex</text>
    <text x="30" y="155" fontSize="8" fill="#9C27B0">Cambium</text>
    <line x1="68" y1="152" x2="90" y2="152" stroke="#9C27B0" strokeWidth="0.7"/>
    {/* Ring bark removal illustration */}
    <text x="5" y="240" fontSize="7" fill="#D32F2F" fontWeight="bold">If bark (phloem)</text>
    <text x="5" y="252" fontSize="7" fill="#D32F2F" fontWeight="bold">is removed in a</text>
    <text x="5" y="264" fontSize="7" fill="#D32F2F" fontWeight="bold">ring → food supply</text>
    <text x="5" y="276" fontSize="7" fill="#D32F2F" fontWeight="bold">to roots is cut off</text>
    <text x="85" y="305" fontSize="12" fill="#333" fontWeight="bold">T.S. of Dicot Stem (Vascular Bundles)</text>
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
