const questions = {
  diagramBased: [
    {
      id: 1,
      question: "In the diagram of the human heart, if the wall of chamber X is thicker than chamber Y and both are ventricles, which statement is correct about X?",
      options: [
        "X receives blood from pulmonary veins and pumps to lungs",
        "X receives blood from vena cava and pumps to lungs",
        "X receives blood from pulmonary veins and pumps to the entire body",
        "X receives blood from vena cava and pumps to the entire body"
      ],
      answer: 2,
      explanation: "The left ventricle (X) has the thickest wall because it pumps oxygenated blood (received from pulmonary veins via left atrium) to the entire body through the aorta. The right ventricle only pumps to the nearby lungs, requiring less pressure.",
      class: 10,
      topic: "Life Processes - Transportation",
      diagramHint: "Human Heart diagram",
    },
    {
      id: 2,
      question: "In the diagram of a neuron, a drug blocks the release of neurotransmitters at point P (axon terminal). What will be the immediate effect?",
      options: [
        "The impulse will travel faster along the axon",
        "The impulse will not be transmitted to the next neuron",
        "The dendrites will stop receiving stimuli",
        "The myelin sheath will degenerate"
      ],
      answer: 1,
      explanation: "Neurotransmitters are chemical messengers released at the synapse (axon terminal) to transmit the impulse to the next neuron's dendrites. If their release is blocked, the electrical impulse cannot cross the synaptic cleft, so transmission to the next neuron stops completely.",
      class: 10,
      topic: "Control and Coordination",
      diagramHint: "Structure of Neuron",
    },
    {
      id: 3,
      question: "In the diagram of the digestive system, organ X secretes a substance that emulsifies fats but contains no enzymes. If organ X is damaged, which process will be most affected?",
      options: [
        "Digestion of proteins in the stomach",
        "Absorption of water in the large intestine",
        "Breakdown of large fat globules into smaller droplets",
        "Conversion of starch into maltose in the mouth"
      ],
      answer: 2,
      explanation: "Organ X is the liver, which produces bile. Bile contains no digestive enzymes but has bile salts that emulsify (break down) large fat globules into smaller droplets, increasing surface area for lipase to act. Without bile, fat digestion is severely impaired.",
      class: 9,
      topic: "Life Processes - Nutrition",
      diagramHint: "Human Digestive System",
    },
    {
      id: 4,
      question: "In the diagram of a plant cell, if organelle X is removed, the cell can no longer prepare its own food but can still respire. If organelle Y is also removed, even respiration stops. Identify X and Y respectively:",
      options: [
        "X = Mitochondria, Y = Chloroplast",
        "X = Chloroplast, Y = Mitochondria",
        "X = Nucleus, Y = Ribosome",
        "X = Vacuole, Y = Chloroplast"
      ],
      answer: 1,
      explanation: "Chloroplast (X) is the site of photosynthesis (food preparation). Without it, the cell cannot make food but mitochondria still perform cellular respiration. Mitochondria (Y) is the powerhouse where aerobic respiration occurs. Without both, neither food preparation nor energy release is possible.",
      class: 8,
      topic: "Cell - Structure and Functions",
      diagramHint: "Plant Cell",
    },
    {
      id: 5,
      question: "In the diagram of the excretory system, structure P inside the kidney filters blood at high pressure. If the efferent arteriole of P becomes wider than the afferent arteriole, what happens?",
      options: [
        "Filtration rate increases significantly",
        "Filtration pressure decreases, less urine is formed",
        "Reabsorption stops completely",
        "Blood flow to the kidney is blocked"
      ],
      answer: 1,
      explanation: "Structure P is the glomerulus. Normally, the afferent arteriole (incoming) is wider than the efferent (outgoing), creating high pressure in the glomerulus for filtration. If efferent becomes wider, blood exits easily, pressure drops in the glomerulus, and filtration rate decreases significantly.",
      class: 10,
      topic: "Life Processes - Excretion",
      diagramHint: "Human Excretory System",
    },
    {
      id: 6,
      question: "In the diagram of a flower, if the stigma (part X) is removed before the bud opens and the flower is covered with a bag, what will definitely happen?",
      options: [
        "Pollen grains will still be produced in the anthers",
        "Cross-pollination will be prevented",
        "Self-pollination can still occur normally",
        "No fertilization will occur because pollen cannot land on stigma"
      ],
      answer: 3,
      explanation: "The stigma is the receptive surface where pollen must land for pollination to occur. Even if anthers produce pollen, without a stigma there is no surface for pollen germination. The pollen tube cannot grow to reach the ovule, so fertilization is impossible regardless of the pollen source.",
      class: 8,
      topic: "Reproduction in Plants",
      diagramHint: "Parts of a Flower",
    },
    {
      id: 7,
      question: "In the diagram of the respiratory system, a patient's alveolar walls are damaged and have merged into larger air sacs (emphysema). Which statement best explains why the patient feels breathless?",
      options: [
        "The trachea becomes narrower reducing airflow",
        "The surface area for gas exchange is drastically reduced",
        "The diaphragm can no longer contract",
        "The bronchi produce excess mucus blocking the alveoli"
      ],
      answer: 1,
      explanation: "Alveoli provide enormous surface area (~70 sq m) for gas exchange due to their grape-like cluster structure. In emphysema, alveolar walls break down and merge into larger sacs, drastically reducing the total surface area available for O2/CO2 exchange. Less oxygen enters blood per breath, causing breathlessness.",
      class: 10,
      topic: "Life Processes - Respiration",
      diagramHint: "Human Respiratory System",
    },
    {
      id: 8,
      question: "In the diagram of the human brain, if region P is damaged in an accident and the person can still think and remember but cannot walk in a straight line or pick up objects smoothly, which region is P?",
      options: [
        "Cerebrum - frontal lobe",
        "Cerebellum",
        "Medulla oblongata",
        "Hypothalamus"
      ],
      answer: 1,
      explanation: "The cerebellum controls coordination of voluntary movements, balance, posture, and motor learning. Damage to it causes ataxia - inability to perform smooth, coordinated movements. The person can still think (cerebrum intact) but movements become jerky and uncoordinated, and walking straight becomes difficult.",
      class: 10,
      topic: "Control and Coordination",
      diagramHint: "Human Brain",
    },
    {
      id: 9,
      question: "In the diagram of the human eye, a person cannot see nearby objects clearly but can see distant objects. Which structure is unable to increase its curvature sufficiently, and what type of lens corrects this?",
      options: [
        "Cornea; concave lens",
        "Lens; convex lens",
        "Retina; cylindrical lens",
        "Iris; bifocal lens"
      ],
      answer: 1,
      explanation: "This is hypermetropia (farsightedness). The eye lens cannot become convex enough (due to weakened ciliary muscles or lens hardening) to focus nearby objects on the retina. The image forms behind the retina. A convex (converging) lens is used to bring the focal point forward onto the retina.",
      class: 10,
      topic: "Control and Coordination",
      diagramHint: "Human Eye",
    },
    {
      id: 10,
      question: "In the diagram showing xylem and phloem, if a ring of bark (containing phloem) is removed from a tree trunk in a complete circle, what will happen over time?",
      options: [
        "Water transport to leaves will immediately stop",
        "The roots will eventually die due to lack of food supply",
        "The leaves will wilt immediately due to no mineral transport",
        "The tree will grow faster above the ring"
      ],
      answer: 1,
      explanation: "Phloem transports food (sucrose) made in leaves downward to roots. If bark (containing phloem) is removed in a complete ring (girdling), food cannot reach the roots. Xylem (inner wood) is intact so water still goes up. But roots eventually starve and die, ultimately killing the whole tree.",
      class: 9,
      topic: "Life Processes - Transportation",
      diagramHint: "Cross-section of Stem (Xylem & Phloem)",
    },
    {
      id: 11,
      question: "Refer to the heart diagram. During a cardiac cycle, when both ventricles contract simultaneously (ventricular systole), the tricuspid and bicuspid valves close producing the 'lub' sound. Why do these valves close at this moment?",
      options: [
        "Blood pressure from ventricles pushes them shut to prevent backflow into atria",
        "Nerve impulses from the brain signal them to close",
        "The atria pull the valves shut by muscular action",
        "Gravity causes the valve flaps to fall closed"
      ],
      answer: 0,
      explanation: "When ventricles contract, the pressure inside them rises sharply above atrial pressure. This pressure difference pushes the AV valves (tricuspid and bicuspid) shut, preventing blood from flowing back into the atria. The 'lub' sound is produced by this forceful closure. Chordae tendineae prevent valve inversion.",
      class: 10,
      topic: "Life Processes - Transportation",
      diagramHint: "Human Heart diagram",
    },
    {
      id: 12,
      question: "Looking at the neuron diagram, impulse transmission along a myelinated nerve fiber is called saltatory conduction. The impulse 'jumps' from one point to another. Between which structures does it jump?",
      options: [
        "From one Schwann cell nucleus to the next",
        "From one Node of Ranvier to the next Node of Ranvier",
        "From the cell body directly to the axon terminal",
        "From one dendrite branch to another dendrite branch"
      ],
      answer: 1,
      explanation: "In myelinated neurons, the myelin sheath acts as an insulator. The electrical impulse cannot pass through myelinated regions and instead 'jumps' between the gaps in myelin called Nodes of Ranvier. This saltatory conduction is much faster (up to 120 m/s) than continuous conduction in unmyelinated fibers.",
      class: 10,
      topic: "Control and Coordination",
      diagramHint: "Structure of Neuron",
    },
    {
      id: 13,
      question: "In the digestive system diagram, the stomach has thick muscular walls with three layers of muscle (longitudinal, circular, oblique). What is the primary advantage of having three muscle layers instead of one?",
      options: [
        "To increase acid secretion from gastric glands",
        "To enable churning movements in multiple directions for thorough mechanical digestion",
        "To prevent food from entering the oesophagus",
        "To absorb nutrients directly through the stomach wall"
      ],
      answer: 1,
      explanation: "Three muscle layers oriented in different directions allow the stomach to contract in multiple directions simultaneously, creating churning/peristaltic movements that thoroughly mix food with gastric juices. This mechanical digestion breaks food into smaller particles (chyme), increasing surface area for enzymatic action.",
      class: 9,
      topic: "Life Processes - Nutrition",
      diagramHint: "Human Digestive System",
    },
    {
      id: 14,
      question: "From the plant cell diagram, during plasmolysis a plant cell is placed in a highly concentrated salt solution. The cell membrane shrinks away from the cell wall. Why doesn't the cell wall also shrink?",
      options: [
        "Cell wall is dead and fully permeable, so water loss doesn't affect it",
        "Cell wall is rigid and inelastic due to cellulose microfibrils, maintaining its shape",
        "Cell wall absorbs the salt solution and expands",
        "Cell wall has no connection to the cell membrane"
      ],
      answer: 1,
      explanation: "The cell wall is composed of rigid cellulose microfibrils arranged in a criss-cross pattern, making it strong and inelastic. During plasmolysis, water leaves the cell by osmosis, and the flexible cell membrane shrinks inward, but the rigid cell wall maintains its original shape. This is why plant cells don't burst in hypotonic solutions either.",
      class: 9,
      topic: "The Fundamental Unit of Life",
      diagramHint: "Plant Cell",
    },
    {
      id: 15,
      question: "In the excretory system diagram, a person drinks 2 litres of water. Within an hour, they produce large volumes of dilute urine. Which hormone's secretion DECREASED to cause this?",
      options: [
        "Insulin from the pancreas",
        "ADH (Antidiuretic Hormone) from the pituitary gland",
        "Thyroxine from the thyroid gland",
        "Adrenaline from the adrenal glands"
      ],
      answer: 1,
      explanation: "ADH (vasopressin) promotes water reabsorption in kidney collecting ducts. When excess water is consumed, blood becomes dilute, so the hypothalamus signals the posterior pituitary to REDUCE ADH secretion. Less ADH means collecting ducts become less permeable to water, so more water remains in the urine, producing dilute urine.",
      class: 10,
      topic: "Life Processes - Excretion",
      diagramHint: "Human Excretory System",
    },
    {
      id: 16,
      question: "In the flower diagram, some flowers like papaya have either only stamens or only pistils (unisexual flowers). If all flowers in a field are only pistillate (female), what is absolutely necessary for seed production?",
      options: [
        "Self-pollination within the same flower",
        "Pollen from staminate flowers of the same species must be brought by external agents",
        "The pistil can produce seeds without fertilization (apomixis always occurs)",
        "Wind will automatically convert pistils into stamens"
      ],
      answer: 1,
      explanation: "Unisexual pistillate flowers lack stamens and cannot self-pollinate. For fertilization and seed production, pollen must come from staminate (male) flowers of the same species. This requires cross-pollination by agents like wind, insects, birds, or water. Without pollen transfer, ovules remain unfertilized.",
      class: 8,
      topic: "Reproduction in Plants",
      diagramHint: "Parts of a Flower",
    },
    {
      id: 17,
      question: "From the respiratory system diagram, at high altitudes (like Mt. Everest at 8848m), atmospheric pressure is very low. A climber without oxygen supply breathes faster but still feels dizzy. Why?",
      options: [
        "There is no oxygen at high altitudes",
        "Low partial pressure of O2 means less O2 dissolves into blood despite faster breathing",
        "The lungs shrink at high altitude due to cold",
        "CO2 concentration increases at high altitude"
      ],
      answer: 1,
      explanation: "At high altitudes, total atmospheric pressure is low, so the partial pressure of O2 is also low (though O2 percentage remains 21%). Gas exchange depends on pressure difference - with lower O2 partial pressure in alveoli, less O2 diffuses into blood even with increased breathing rate. This causes hypoxia (oxygen deficiency in tissues), leading to dizziness.",
      class: 10,
      topic: "Life Processes - Respiration",
      diagramHint: "Human Respiratory System",
    },
    {
      id: 18,
      question: "In the brain diagram, a person suffers a stroke that damages the left side of the cerebrum's motor area. Which side of the body will be paralyzed?",
      options: [
        "Left side of the body",
        "Right side of the body",
        "Both sides equally",
        "Only the legs, not arms"
      ],
      answer: 1,
      explanation: "The cerebrum's motor pathways cross over (decussate) at the medulla oblongata. The left cerebral hemisphere controls the right side of the body and vice versa. So damage to the left motor cortex results in right-sided paralysis (right hemiplegia). This is why stroke patients often have paralysis on the opposite side of the brain damage.",
      class: 10,
      topic: "Control and Coordination",
      diagramHint: "Human Brain",
    },
    {
      id: 19,
      question: "From the eye diagram, a person enters a dark room from bright sunlight. For a few seconds they cannot see anything. This is because:",
      options: [
        "The optic nerve temporarily stops working",
        "Rod cells (dim light receptors) need time to regenerate rhodopsin visual pigment that was bleached in bright light",
        "The cornea becomes opaque in darkness",
        "The lens changes shape too slowly"
      ],
      answer: 1,
      explanation: "In bright light, rhodopsin (visual purple) in rod cells gets bleached (broken down). When entering darkness, cone cells (used for bright/colour vision) cannot function, and rod cells need 20-30 minutes to fully regenerate rhodopsin for maximum dark adaptation. Initial partial adaptation takes a few seconds as some rhodopsin regenerates.",
      class: 10,
      topic: "Control and Coordination",
      diagramHint: "Human Eye",
    },
    {
      id: 20,
      question: "In the xylem/phloem diagram, phloem transport is bidirectional and requires living cells with ATP energy. If a metabolic poison (like cyanide) is applied to the phloem region, which process stops FIRST?",
      options: [
        "Water absorption by roots",
        "Translocation of sugars from leaves to roots",
        "Transpiration from leaves",
        "Photosynthesis in leaves"
      ],
      answer: 1,
      explanation: "Phloem translocation requires metabolic energy (ATP) from living companion cells to load sucrose into sieve tubes against concentration gradient. Cyanide blocks cellular respiration, stopping ATP production. Without ATP, active loading of sucrose into phloem stops immediately, halting translocation. Xylem transport (passive, driven by transpiration) continues unaffected initially.",
      class: 10,
      topic: "Life Processes - Transportation",
      diagramHint: "Cross-section of Stem (Xylem & Phloem)",
    },
  ],

  objective: [
    {
      id: 21,
      question: "A cell placed in solution X gains water and swells, but when placed in solution Y it shrinks. The cell itself has a solute concentration of 0.5M. Which is true?",
      options: [
        "X is 0.8M and Y is 0.3M",
        "X is 0.3M and Y is 0.8M",
        "X is 0.5M and Y is 0.5M",
        "X is 0.5M and Y is 0.3M"
      ],
      answer: 1,
      explanation: "The cell gains water in X (endosmosis), meaning X is hypotonic (lower concentration than cell's 0.5M). The cell loses water in Y (exosmosis), meaning Y is hypertonic (higher concentration). So X must be <0.5M (0.3M works) and Y must be >0.5M (0.8M works).",
      class: 9,
      topic: "The Fundamental Unit of Life",
    },
    {
      id: 22,
      question: "During photosynthesis, the oxygen released comes from the splitting of which molecule?",
      options: ["Carbon dioxide", "Glucose", "Water", "NADPH"],
      answer: 2,
      explanation: "In the light reactions of photosynthesis, water molecules are split (photolysis of water: 2H₂O → 4H⁺ + 4e⁻ + O₂). This was proven by using isotope-labeled water (H₂¹⁸O). The oxygen released as a by-product comes entirely from water, not from CO₂.",
      class: 10,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 23,
      question: "In a cross between Tt x Tt plants, 800 offspring are obtained. Approximately how many are expected to be homozygous recessive?",
      options: ["200", "400", "600", "800"],
      answer: 0,
      explanation: "Tt × Tt gives genotypic ratio 1TT : 2Tt : 1tt. Homozygous recessive (tt) = 1/4 of total. So 1/4 × 800 = 200 offspring are expected to be homozygous recessive (tt).",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 24,
      question: "A person with blood group AB can receive blood from all groups because their blood:",
      options: [
        "Has both antibodies anti-A and anti-B",
        "Has neither anti-A nor anti-B antibodies",
        "Has neither A nor B antigens",
        "Produces universal antibodies"
      ],
      answer: 1,
      explanation: "Blood group AB has both A and B antigens on RBCs but produces NEITHER anti-A nor anti-B antibodies in plasma. Since there are no antibodies to react against donor blood antigens, AB individuals can receive blood from any group without agglutination. Hence they are called 'universal recipients'.",
      class: 10,
      topic: "Life Processes - Transportation",
    },
    {
      id: 25,
      question: "During anaerobic respiration in yeast, pyruvate is converted to ethanol and CO2. In human muscles during oxygen debt, pyruvate is instead converted to:",
      options: ["Ethanol", "Acetic acid", "Lactic acid", "Citric acid"],
      answer: 2,
      explanation: "In human muscles during intense exercise (oxygen debt), pyruvate undergoes anaerobic respiration to form lactic acid (not ethanol). Accumulation of lactic acid causes muscle fatigue and cramps. Unlike yeast, human cells lack the enzyme alcohol dehydrogenase needed to produce ethanol.",
      class: 9,
      topic: "Life Processes - Respiration",
    },
    {
      id: 26,
      question: "Vitamin D deficiency causes rickets in children. Dark-skinned people in northern latitudes are more prone because:",
      options: [
        "They eat less calcium-rich food",
        "Melanin in their skin reduces UV absorption needed for Vitamin D synthesis",
        "Their bones are genetically weaker",
        "They have fewer sweat glands"
      ],
      answer: 1,
      explanation: "Vitamin D is synthesized in the skin when UV-B radiation converts 7-dehydrocholesterol to vitamin D3. Melanin (dark pigment) acts as natural sunscreen, absorbing UV radiation before it can trigger vitamin D synthesis. In northern latitudes where sunlight is already weak, dark-skinned people synthesize significantly less vitamin D.",
      class: 9,
      topic: "Why Do We Fall Ill",
    },
    {
      id: 27,
      question: "If a person has 44 autosomes and XXY sex chromosomes, the total chromosome count is 47. This condition (Klinefelter syndrome) arises due to:",
      options: [
        "Crossing over during meiosis",
        "Non-disjunction of sex chromosomes during cell division",
        "Mutation in autosomal genes",
        "Deletion of Y chromosome fragment"
      ],
      answer: 1,
      explanation: "Klinefelter syndrome (47, XXY) results from non-disjunction - the failure of sex chromosomes to separate properly during meiosis. Either the mother's egg carries XX (instead of X) or the father's sperm carries XY (instead of X or Y). The resulting zygote has an extra sex chromosome (XXY instead of XX or XY).",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 28,
      question: "Hydra can reproduce both sexually and by budding. Which advantage does budding provide over sexual reproduction?",
      options: [
        "Produces genetically diverse offspring",
        "Allows rapid population growth without needing a mate",
        "Creates offspring better adapted to new environments",
        "Increases chance of survival during unfavorable conditions"
      ],
      answer: 1,
      explanation: "Budding is asexual - no mate needed, no gamete production time, and each individual can reproduce independently. This allows exponential population growth when conditions are favorable. The trade-off is no genetic diversity (all offspring are clones), making the population vulnerable to environmental changes.",
      class: 8,
      topic: "Reproduction in Animals",
    },
    {
      id: 29,
      question: "The human small intestine is approximately 6 meters long and has villi. If the villi were flattened, the absorption surface area would be approximately:",
      options: ["0.5 sq meters", "2 sq meters", "250 sq meters", "25 sq meters"],
      answer: 2,
      explanation: "The small intestine has three levels of surface area amplification: circular folds (plicae circulares), villi (finger-like projections), and microvilli on each villus cell. Together, these increase the absorptive surface area from ~0.5 m² (smooth tube) to approximately 250 m² (size of a tennis court), maximizing nutrient absorption.",
      class: 9,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 30,
      question: "When a potted plant is kept in dark for 48 hours and then one leaf is partially covered with black paper and exposed to light, after testing with iodine, the covered part shows no blue-black colour. This proves that:",
      options: [
        "Chlorophyll is necessary for photosynthesis",
        "CO2 is necessary for photosynthesis",
        "Light is necessary for photosynthesis",
        "Water is necessary for photosynthesis"
      ],
      answer: 2,
      explanation: "De-starching (48hr dark) ensures no pre-existing starch. The only variable between covered and uncovered parts is light. The uncovered part received light → photosynthesis occurred → starch formed → blue-black with iodine. The covered part had no light → no photosynthesis → no starch → brown iodine colour. This proves light is essential.",
      class: 10,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 31,
      question: "Blood pressure is measured as 120/80 mmHg. The '120' represents pressure during:",
      options: [
        "Relaxation of ventricles (diastole)",
        "Contraction of atria only",
        "Contraction of ventricles (systole)",
        "Complete cardiac rest"
      ],
      answer: 2,
      explanation: "120 mmHg is the systolic pressure - the maximum pressure in arteries when ventricles contract and pump blood. 80 mmHg is the diastolic pressure - the minimum pressure when ventricles relax and refill. The pressure never reaches zero because arterial walls are elastic and maintain some pressure between beats.",
      class: 10,
      topic: "Life Processes - Transportation",
    },
    {
      id: 32,
      question: "Adrenaline is released during emergency. Which of the following is NOT a direct effect of adrenaline?",
      options: [
        "Increased heart rate",
        "Dilation of bronchioles",
        "Increased digestive activity",
        "Redirection of blood to skeletal muscles"
      ],
      answer: 2,
      explanation: "Adrenaline triggers the 'fight or flight' response: heart rate increases, bronchioles dilate (more air intake), blood is redirected to muscles/brain. However, digestion is INHIBITED (not increased) because it's non-essential during emergencies. Blood is diverted away from the digestive system to more critical organs.",
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 33,
      question: "In an ecosystem, if 10000 J of energy is available at the producer level, how much energy will be available to the tertiary consumer (assuming 10% transfer at each level)?",
      options: ["1000 J", "100 J", "10 J", "1 J"],
      answer: 2,
      explanation: "Applying the 10% law: Producers (10000 J) → Primary consumer (1000 J, 10%) → Secondary consumer (100 J, 10%) → Tertiary consumer (10 J, 10%). At each trophic level, only 10% energy transfers to the next; 90% is lost as heat through respiration, excretion, etc.",
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 34,
      question: "Root hairs absorb water from soil primarily by osmosis. If a farmer adds too much fertilizer to the soil, the plants wilt. This happens because:",
      options: [
        "Fertilizer is toxic to root hairs",
        "Soil solution becomes hypertonic to root cells, causing exosmosis",
        "Roots cannot absorb minerals with excess fertilizer",
        "The fertilizer blocks the root hair pores physically"
      ],
      answer: 1,
      explanation: "Excess fertilizer increases the solute concentration of soil water, making it hypertonic to root cells. Water moves OUT of root cells into soil by exosmosis (from lower concentration to higher). This dehydrates the plant cells, causing plasmolysis and wilting. This is called 'fertilizer burn'.",
      class: 9,
      topic: "Life Processes - Transportation",
    },
    {
      id: 35,
      question: "Plasmodium (malaria parasite) completes its sexual reproduction in the mosquito and asexual reproduction in humans. The mosquito is therefore called:",
      options: [
        "Intermediate host",
        "Definitive (primary) host",
        "Vector only, not a host",
        "Secondary parasite"
      ],
      answer: 1,
      explanation: "In parasitology, the definitive (primary) host is where the parasite completes its SEXUAL reproduction. Since Plasmodium's sexual cycle (gametogony and sporogony) occurs in the female Anopheles mosquito, the mosquito is the definitive host. Humans are the intermediate host where only asexual reproduction (schizogony) occurs.",
      class: 9,
      topic: "Why Do We Fall Ill",
    },
    {
      id: 36,
      question: "A nerve cell can be up to 1 meter long (from spinal cord to toe). Why can't it divide by mitosis like other cells?",
      options: [
        "It has no nucleus",
        "It lacks centrioles and its highly specialized structure prevents cell division",
        "Nerve cells have too many mitochondria",
        "The myelin sheath blocks cell division signals"
      ],
      answer: 1,
      explanation: "Neurons are terminally differentiated cells. They lack centrioles (needed for spindle formation in mitosis) and their highly specialized cytoskeletal structure (long axons, complex dendrites) is incompatible with cell division. Most mature neurons are permanently in G0 phase. This is why nerve damage is often irreversible.",
      class: 8,
      topic: "Cell - Structure and Functions",
    },
    {
      id: 37,
      question: "Two populations of beetles live on separate islands. After thousands of generations, they can no longer interbreed when brought together. This is an example of:",
      options: [
        "Artificial selection",
        "Genetic drift without speciation",
        "Reproductive isolation leading to speciation",
        "Acquired characteristics becoming hereditary"
      ],
      answer: 2,
      explanation: "Geographic isolation (allopatry) prevented gene flow between the populations. Over thousands of generations, random mutations and natural selection caused genetic divergence. Eventually, they accumulated enough differences that they cannot interbreed (reproductive isolation) - they are now separate species. This is allopatric speciation.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 38,
      question: "Pepsin works optimally at pH 2 in the stomach. When food enters the duodenum, pancreatic juice (pH 8) is secreted. If pancreatic enzymes were added to the stomach, they would:",
      options: [
        "Work faster due to acidic activation",
        "Be denatured and non-functional in acidic pH",
        "Convert all proteins to amino acids immediately",
        "Increase pepsin activity synergistically"
      ],
      answer: 1,
      explanation: "Enzymes are proteins with specific 3D structures dependent on pH. Pancreatic enzymes (trypsin, lipase) have optimal pH ~8. At pH 2 (stomach), the H⁺ ions disrupt hydrogen bonds and ionic bonds maintaining the enzyme's tertiary structure, causing denaturation. The active site shape changes and the enzyme becomes non-functional.",
      class: 9,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 39,
      question: "Solar panels convert light to electricity (about 20% efficiency). Photosynthesis converts light to chemical energy. The efficiency of photosynthesis is approximately:",
      options: ["1-2%", "20-30%", "50-60%", "80-90%"],
      answer: 0,
      explanation: "Despite being remarkably complex, photosynthesis is only about 1-2% efficient in converting total solar radiation to chemical energy in biomass. Most light energy is reflected, transmitted, or lost as heat. Of the light absorbed by chlorophyll, much is lost in the electron transport chain and metabolic processes.",
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 40,
      question: "The ozone layer absorbs UV-B radiation. CFC molecules release chlorine atoms in the stratosphere. One chlorine atom can destroy approximately how many ozone molecules before being deactivated?",
      options: ["10", "100", "1,000", "100,000"],
      answer: 3,
      explanation: "One chlorine atom acts as a catalyst in ozone destruction: Cl + O₃ → ClO + O₂, then ClO + O → Cl + O₂. The chlorine is regenerated and repeats the cycle. A single Cl atom can destroy approximately 100,000 ozone molecules over its stratospheric lifetime before being removed by other reactions.",
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 41,
      question: "Cardiac muscle has properties of both smooth and skeletal muscle. Unlike skeletal muscle, cardiac muscle:",
      options: [
        "Is voluntary and striated",
        "Has intercalated discs that allow synchronized contraction",
        "Contains no mitochondria",
        "Cannot contract without nervous stimulation"
      ],
      answer: 1,
      explanation: "Intercalated discs are unique to cardiac muscle. They contain gap junctions that allow direct electrical communication between adjacent cardiac cells. This enables the entire heart to contract as a synchronized unit (functional syncytium). Cardiac muscle is also striated but involuntary, and can contract rhythmically without nervous stimulation (myogenic).",
      class: 9,
      topic: "Tissues",
    },
    {
      id: 42,
      question: "Insulin causes cells to absorb glucose from blood. In Type 1 diabetes, the immune system destroys beta cells. In Type 2, cells become resistant to insulin. Which treatment works for Type 1 but NOT Type 2?",
      options: [
        "Exercise and diet control",
        "Injecting external insulin alone",
        "Drugs that increase cell sensitivity to insulin",
        "Reducing carbohydrate intake"
      ],
      answer: 1,
      explanation: "In Type 1, beta cells are destroyed so NO insulin is produced. Injecting insulin directly replaces what's missing and works. In Type 2, insulin IS produced but cells don't respond to it (resistance). Simply adding more insulin doesn't fix the resistance problem - cells still won't absorb glucose properly. Type 2 needs drugs that improve cell sensitivity.",
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 43,
      question: "Yeast is used to make bread rise. The rising occurs because yeast performs:",
      options: [
        "Aerobic respiration producing water vapour",
        "Anaerobic respiration producing CO2 gas that gets trapped in dough",
        "Photosynthesis producing oxygen bubbles",
        "Fermentation producing only ethanol"
      ],
      answer: 1,
      explanation: "In dough (low oxygen environment), yeast performs anaerobic respiration: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂. The CO₂ gas forms bubbles that get trapped in the elastic gluten network of the dough, causing it to expand ('rise'). The ethanol evaporates during baking. Both CO₂ AND ethanol are produced, but CO₂ causes the rising.",
      class: 8,
      topic: "Microorganisms",
    },
    {
      id: 44,
      question: "A colour-blind man (XᶜY) marries a carrier woman (XᶜX). What percentage of their sons will be colour-blind?",
      options: ["0%", "25%", "50%", "100%"],
      answer: 2,
      explanation: "Father: XᶜY, Mother: XᶜX. Sons get Y from father and one X from mother. Mother can give either Xᶜ or X. So sons are: XᶜY (colour-blind) or XY (normal). That's 50% colour-blind sons. Note: daughters would be XᶜXᶜ (colour-blind) or XᶜX (carrier) - 50% each.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 45,
      question: "Arteries have thick elastic walls while veins have valves. If a vein is cut, blood flows out steadily, but if an artery is cut, blood spurts out in jets. This is because:",
      options: [
        "Veins carry more blood than arteries",
        "Arterial blood is under high pressure from ventricular contraction",
        "Venous blood has more oxygen making it flow faster",
        "Arteries have wider lumen than veins"
      ],
      answer: 1,
      explanation: "Arteries carry blood directly from the heart's pumping action. Each ventricular contraction creates a pressure wave (pulse). Blood spurts in jets matching heartbeats because pressure fluctuates between systole (high, spurt) and diastole (low). Veins have low, steady pressure (no pulsation) because they're far from the heart and blood flows steadily aided by valves.",
      class: 9,
      topic: "Life Processes - Transportation",
    },
    {
      id: 46,
      question: "In a dihybrid cross (RrYy × RrYy), the expected phenotypic ratio is 9:3:3:1. If 640 seeds are obtained, approximately how many will be wrinkled and green (rryy)?",
      options: ["40", "120", "360", "480"],
      answer: 0,
      explanation: "In 9:3:3:1 ratio, the double recessive (rryy = wrinkled green) represents 1/16 of total offspring. So: 640 × 1/16 = 40 seeds expected to be wrinkled and green. The 9:3:3:1 means 9/16 round yellow, 3/16 round green, 3/16 wrinkled yellow, 1/16 wrinkled green.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 47,
      question: "The Chipko movement and the concept of 'sustainable development' share which core principle?",
      options: [
        "Complete ban on use of all natural resources",
        "Meeting present needs without compromising future generations' ability to meet theirs",
        "Maximizing industrial output using forest resources",
        "Replacing all natural forests with monoculture plantations"
      ],
      answer: 1,
      explanation: "Sustainable development (Brundtland Report, 1987) means using resources wisely so future generations also have access. Chipko movement (1970s, Uttarakhand) fought against commercial deforestation to protect forests for local communities' future needs. Both emphasize conservation while allowing responsible use - not total ban, but balanced utilization.",
      class: 10,
      topic: "Management of Natural Resources",
    },
    {
      id: 48,
      question: "Transpiration pull helps in upward movement of water in tall trees (>100m like redwoods). This works because water molecules have strong cohesion due to:",
      options: [
        "Covalent bonds between water molecules",
        "Hydrogen bonds creating a continuous water column",
        "Ionic attraction between water and xylem walls",
        "Van der Waals forces in the phloem"
      ],
      answer: 1,
      explanation: "The Cohesion-Tension Theory explains water transport: transpiration creates negative pressure (tension) at leaf level. Water molecules cling together via hydrogen bonds (cohesion) forming an unbroken column from roots to leaves. They also adhere to xylem walls (adhesion). This continuous chain is pulled upward as water evaporates from leaves.",
      class: 9,
      topic: "Life Processes - Transportation",
    },
    {
      id: 49,
      question: "The nervous system sends electrical impulses (fast, short-lived) while the endocrine system sends chemical signals (slow, long-lasting). Which situation requires endocrine control rather than nervous control?",
      options: [
        "Pulling hand away from a hot surface",
        "Blinking when dust enters the eye",
        "Growth and development during puberty",
        "Maintaining balance while riding a bicycle"
      ],
      answer: 2,
      explanation: "Growth and puberty are slow, long-term processes requiring sustained hormonal signals over months/years. Hormones like growth hormone, testosterone, and estrogen circulate in blood and produce long-lasting effects. Quick reflexes (hot surface, blinking, balance) need the nervous system's rapid millisecond responses. Endocrine = slow/prolonged; Nervous = fast/brief.",
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 50,
      question: "Bone, blood, and fat tissue are all classified as connective tissue despite looking very different. What common feature do they share?",
      options: [
        "All have cells embedded in a non-living matrix (extracellular material)",
        "All can contract and relax",
        "All contain haemoglobin",
        "All are made of the same type of cells"
      ],
      answer: 0,
      explanation: "The defining feature of all connective tissues is that cells are scattered in an extracellular matrix they themselves secrete. In bone: matrix is hard calcium phosphate. In blood: matrix is liquid plasma. In fat (adipose): matrix contains fat droplets. Despite different appearances, this cell-in-matrix pattern is the unifying characteristic.",
      class: 9,
      topic: "Tissues",
    },
    {
      id: 51,
      question: "In the carbon cycle, if all decomposers were suddenly eliminated from an ecosystem, which problem would arise first?",
      options: [
        "Atmospheric oxygen would immediately run out",
        "Nutrients locked in dead organisms would not be recycled back to soil",
        "All photosynthesis would stop within hours",
        "The water cycle would reverse direction"
      ],
      answer: 1,
      explanation: "Decomposers (bacteria, fungi) break down dead organisms, releasing locked-up nutrients (N, P, C, S) back into soil and atmosphere. Without them, dead matter accumulates, soil nutrients deplete over time, and plants eventually cannot grow due to nutrient unavailability. O₂ wouldn't run out immediately as it has a large atmospheric reservoir.",
      class: 8,
      topic: "Conservation of Plants and Animals",
    },
    {
      id: 52,
      question: "Dolly the sheep was cloned using a somatic cell nucleus transferred to an enucleated egg cell. Dolly was genetically identical to:",
      options: [
        "The sheep that provided the egg cell",
        "The sheep that provided the somatic cell (mammary cell donor)",
        "The surrogate mother who carried her",
        "A combination of all three sheep"
      ],
      answer: 1,
      explanation: "In somatic cell nuclear transfer (SCNT), the nucleus containing all nuclear DNA comes from the donor somatic cell. The enucleated egg provides only cytoplasm (and mitochondrial DNA). Since >99.9% of genetic information is nuclear, Dolly was essentially a genetic clone of the mammary cell donor (Finn Dorset sheep), not the egg donor or surrogate.",
      class: 10,
      topic: "How Do Organisms Reproduce",
    },
    {
      id: 53,
      question: "Cataract is a condition where the lens becomes opaque. A patient with cataract will experience:",
      options: [
        "Inability to see colours (colour blindness)",
        "Progressive blurring of vision as light cannot pass through clearly",
        "Double vision due to two images on retina",
        "Only loss of peripheral vision"
      ],
      answer: 1,
      explanation: "The lens must be transparent to focus light on the retina. In cataract, proteins in the lens clump together causing cloudiness/opacity. Light is scattered instead of focused, resulting in progressive blurring. It's like looking through a foggy window. It's NOT colour blindness (retinal cone issue) or peripheral loss (glaucoma).",
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 54,
      question: "In a food chain: Plants → Grasshopper → Frog → Snake → Eagle, DDT concentration is highest in eagles. This phenomenon of increase in toxin concentration at higher trophic levels is called:",
      options: [
        "Eutrophication",
        "Biomagnification",
        "Bioaccumulation only",
        "Biological oxygen demand"
      ],
      answer: 1,
      explanation: "Biomagnification is the progressive increase in concentration of non-biodegradable toxins (DDT, mercury) at successively higher trophic levels. Each consumer eats many organisms from below, accumulating their toxins. An eagle eats many snakes, each containing toxins from many frogs, etc. Concentration increases ~10x per level.",
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 55,
      question: "A plant is placed horizontally. After a few days, the root grows downward and shoot grows upward. The root shows positive gravitropism. This bending is caused by:",
      options: [
        "Even distribution of auxin on all sides",
        "Higher concentration of auxin on the lower side promoting cell elongation in shoots but inhibiting it in roots",
        "Absence of auxin in the root tip",
        "Phototropism overriding gravitropism"
      ],
      answer: 1,
      explanation: "Gravity causes auxin to accumulate on the lower side. In shoots: more auxin = more cell elongation on lower side → shoot bends upward (negative gravitropism). In roots: cells are more sensitive to auxin; high concentration INHIBITS elongation on lower side while upper side grows normally → root bends downward (positive gravitropism). Same hormone, opposite effects due to different sensitivity.",
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 56,
      question: "After vaccination, a person doesn't get the disease because the vaccine:",
      options: [
        "Directly kills all pathogens already in the body",
        "Stimulates memory cells that produce antibodies rapidly upon future infection",
        "Permanently increases body temperature to kill viruses",
        "Blocks all entry points for pathogens"
      ],
      answer: 1,
      explanation: "Vaccines contain weakened/killed pathogens or their antigens. These trigger primary immune response, producing memory B-cells and memory T-cells without causing disease. On future exposure to real pathogen, memory cells rapidly produce large quantities of specific antibodies (secondary response), neutralizing the pathogen before it causes symptoms.",
      class: 9,
      topic: "Why Do We Fall Ill",
    },
    {
      id: 57,
      question: "Peppered moths in England changed from mostly light-coloured to dark-coloured during industrial revolution, then back to light after pollution control. This demonstrates:",
      options: [
        "Lamarck's theory - moths acquired dark colour from soot",
        "Natural selection - dark moths had survival advantage on soot-covered trees",
        "Mutation caused by pollution chemicals",
        "Dark moths migrated from other countries"
      ],
      answer: 1,
      explanation: "Both light and dark variants always existed in the population. Before industrialization, light moths were camouflaged on lichen-covered trees (survived more). During pollution, soot killed lichens and darkened trees → dark moths were better camouflaged → survived → their proportion increased. After Clean Air Acts, lichens returned → light moths again favored. This is natural selection in action.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 58,
      question: "Composting converts organic waste into manure in 3-6 months. The primary organisms responsible for breaking down this waste are:",
      options: [
        "Viruses and algae",
        "Bacteria and fungi (decomposers)",
        "Protozoa and nematodes only",
        "Insects and earthworms only"
      ],
      answer: 1,
      explanation: "Bacteria (thermophilic and mesophilic) and fungi (like Aspergillus, Trichoderma) are the PRIMARY decomposers that break down complex organic molecules using enzymes. They handle the bulk of chemical decomposition. Earthworms and insects assist (physical breakdown) but bacteria and fungi do the major biochemical decomposition work.",
      class: 8,
      topic: "Conservation of Plants and Animals",
    },
    {
      id: 59,
      question: "During puberty, testosterone in males causes voice deepening, facial hair, and muscle development. If a boy's pituitary gland is damaged and cannot produce FSH and LH, what happens?",
      options: [
        "Normal puberty occurs because testosterone is made by adrenal glands",
        "Testes will not be stimulated to produce testosterone, puberty will be delayed/absent",
        "Only voice change is affected, other changes proceed normally",
        "The boy will develop female secondary sexual characteristics"
      ],
      answer: 1,
      explanation: "The hypothalamic-pituitary-gonadal axis: Hypothalamus → GnRH → Pituitary → FSH/LH → Testes → Testosterone. LH specifically stimulates Leydig cells in testes to produce testosterone. Without pituitary FSH/LH, testes receive no signal to produce testosterone. Adrenal glands produce tiny amounts insufficient for full puberty. Result: hypogonadism with delayed/absent puberty.",
      class: 10,
      topic: "How Do Organisms Reproduce",
    },
    {
      id: 60,
      question: "Acid rain has pH below 5.6. Normal rain is slightly acidic (pH ~5.6) due to dissolved CO2 forming carbonic acid. Acid rain is MORE acidic because it additionally contains:",
      options: [
        "Hydrochloric acid from sea salt evaporation",
        "Sulphuric acid and nitric acid from SO2 and NOx emissions",
        "Phosphoric acid from agricultural runoff",
        "Acetic acid from industrial food processing"
      ],
      answer: 1,
      explanation: "Burning fossil fuels releases SO₂ and NOₓ. In atmosphere: SO₂ + H₂O + O₂ → H₂SO₄ (sulphuric acid) and NOₓ + H₂O + O₂ → HNO₃ (nitric acid). These strong acids dissolve in rain, lowering pH well below 5.6. Major sources: coal power plants (SO₂) and vehicle exhaust (NOₓ). These acids damage buildings, lakes, and vegetation.",
      class: 8,
      topic: "Pollution of Air and Water",
    },
    {
      id: 61,
      question: "A student sets up two test tubes: Tube A has boiled and cooled leaf extract, Tube B has fresh leaf extract. Both are kept in sunlight with CO2 supply. After 4 hours, only Tube B shows starch formation. What does boiling destroy that prevents photosynthesis?",
      options: [
        "Chlorophyll pigment, which is heat-stable",
        "Enzymes required for the Calvin cycle (dark reactions)",
        "The cell wall structure",
        "Water molecules inside the cells"
      ],
      answer: 1,
      explanation: "The Calvin cycle (light-independent reactions) uses enzymes like RuBisCO to fix CO₂ into glucose. Boiling denatures these protein enzymes irreversibly, destroying their 3D active site structure. Chlorophyll is actually relatively heat-stable, and water/cell walls aren't destroyed by boiling. Without functional enzymes, CO₂ cannot be fixed into carbohydrates.",
      class: 10,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 62,
      question: "In a family, the father has blood group A (heterozygous IAi) and the mother has blood group B (heterozygous IBi). What is the probability that their child will have blood group O?",
      options: ["0%", "25%", "50%", "75%"],
      answer: 1,
      explanation: "Father (IAi) gametes: IA or i. Mother (IBi) gametes: IB or i. Punnett square: IAIB (AB), IAi (A), IBi (B), ii (O). Blood group O (genotype ii) has probability 1/4 = 25%. This cross uniquely produces all four blood groups in the ratio 1AB : 1A : 1B : 1O.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 63,
      question: "During heavy exercise, the breathing rate increases from 15 to 40 breaths/min. The primary stimulus that triggers this increase is detected by the brain when:",
      options: [
        "Oxygen level in blood rises above normal",
        "CO2 concentration in blood increases, lowering blood pH",
        "Heart rate decreases below resting level",
        "Body temperature drops significantly"
      ],
      answer: 1,
      explanation: "Chemoreceptors in the medulla oblongata and carotid/aortic bodies detect increased CO₂ (hypercapnia) and decreased pH in blood. CO₂ + H₂O → H₂CO₃ → H⁺ + HCO₃⁻, making blood more acidic. This is the PRIMARY stimulus for increasing breathing rate. O₂ levels are secondary triggers and only activate at very low levels.",
      class: 10,
      topic: "Life Processes - Respiration",
    },
    {
      id: 64,
      question: "A plant heterozygous for two traits (TtRr) is crossed with a double recessive plant (ttrr). This is called a test cross. The expected phenotypic ratio of offspring is:",
      options: ["9:3:3:1", "1:1:1:1", "3:1", "1:2:1"],
      answer: 1,
      explanation: "Test cross: TtRr × ttrr. The heterozygous parent produces 4 types of gametes (TR, Tr, tR, tr) in equal proportions. The homozygous recessive parent only produces tr gametes. Offspring: TtRr, Ttrr, ttRr, ttrr in 1:1:1:1 ratio. This test cross reveals the gamete ratios of the heterozygous parent directly.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 65,
      question: "A person's kidney fails and they undergo dialysis. The dialysis fluid contains glucose and salts at the same concentration as normal blood, but NO urea. Why is this composition critical?",
      options: [
        "To add extra glucose to the patient's blood",
        "So urea diffuses out from blood into fluid (down concentration gradient) while useful substances are retained",
        "To increase blood pressure in the patient",
        "To destroy bacteria in the blood"
      ],
      answer: 1,
      explanation: "Dialysis works on diffusion across a semi-permeable membrane. Urea (high in patient's blood, zero in dialysate) diffuses OUT down its concentration gradient. Glucose and salts are at equal concentration on both sides, so they DON'T diffuse out (no gradient). This selectively removes only waste products while retaining useful substances.",
      class: 10,
      topic: "Life Processes - Excretion",
    },
    {
      id: 66,
      question: "Mendel crossed pure tall plants (TT) with pure dwarf plants (tt). All F1 were tall. If Mendel had instead crossed F1 tall with pure dwarf (tt), what ratio would he get?",
      options: ["3:1 (tall:dwarf)", "1:1 (tall:dwarf)", "All tall", "1:2:1"],
      answer: 1,
      explanation: "F1 plants are Tt (heterozygous tall). Cross: Tt × tt. Gametes from Tt: T or t. Gametes from tt: only t. Offspring: Tt (tall) and tt (dwarf) in 1:1 ratio. This is a test cross - crossing with homozygous recessive reveals the heterozygous parent's genotype through the offspring ratio.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 67,
      question: "In the human female reproductive system, fertilization normally occurs in the fallopian tube. If both fallopian tubes are blocked but ovaries and uterus are functional, which assisted reproduction technique would be most appropriate?",
      options: [
        "Artificial insemination (IUI)",
        "In Vitro Fertilization (IVF) - fertilize egg outside and implant embryo in uterus",
        "Hormone therapy to unblock tubes",
        "Surrogacy using another woman's egg"
      ],
      answer: 1,
      explanation: "With blocked fallopian tubes: sperm cannot meet egg naturally (IUI won't work since sperm still can't reach egg). IVF bypasses the tubes entirely - eggs are harvested directly from ovaries, fertilized with sperm in a lab dish, and the resulting embryo is implanted directly into the functional uterus. The tubes are completely bypassed.",
      class: 10,
      topic: "How Do Organisms Reproduce",
    },
    {
      id: 68,
      question: "The human genome has approximately 20,000-25,000 genes but only about 1.5% of DNA codes for proteins. A mutation in the non-coding region is MOST LIKELY to:",
      options: [
        "Always cause a lethal disease",
        "Have no visible effect on the organism (be neutral)",
        "Immediately cause cancer",
        "Change the person's blood group"
      ],
      answer: 1,
      explanation: "~98.5% of human DNA is non-coding (previously called 'junk DNA'). While some non-coding regions have regulatory functions, mutations in most non-coding DNA have no effect on protein structure or gene expression. These neutral mutations accumulate over generations and are useful for evolutionary studies (molecular clocks) but usually have no phenotypic effect.",
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 69,
      question: "In an experiment, a student covers both surfaces of a leaf with vaseline. Another leaf has only the lower surface covered. A third leaf is left uncovered. Which leaf will show maximum wilting first?",
      options: [
        "Both surfaces covered (no transpiration possible)",
        "Lower surface covered (most stomata blocked)",
        "Uncovered leaf (maximum transpiration from both surfaces)",
        "All three will wilt at the same rate"
      ],
      answer: 2,
      explanation: "Transpiration (water loss) occurs mainly through stomata. The uncovered leaf loses water from both surfaces at maximum rate, causing fastest water loss and wilting. Most stomata are on the lower epidermis in dorsiventral leaves, so covering the lower surface significantly reduces transpiration. Both surfaces covered = virtually no transpiration = no wilting.",
      class: 10,
      topic: "Life Processes - Transportation",
    },
    {
      id: 70,
      question: "ATP is called the 'energy currency' of cells. During aerobic respiration, one glucose molecule produces approximately 36-38 ATP molecules. During anaerobic respiration in yeast, the same glucose produces only:",
      options: ["2 ATP molecules", "12 ATP molecules", "19 ATP molecules", "36 ATP molecules"],
      answer: 0,
      explanation: "Anaerobic respiration only completes glycolysis (glucose → 2 pyruvate → 2 ethanol + 2CO₂ in yeast), producing net 2 ATP. Without oxygen, the Krebs cycle and electron transport chain (which produce 34-36 ATP) cannot operate. This is why anaerobic respiration is 18-19 times less efficient than aerobic respiration per glucose molecule.",
      class: 10,
      topic: "Life Processes - Respiration",
    },
  ],
};

export default questions;
