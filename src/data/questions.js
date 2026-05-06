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
      class: 10,
      topic: "Life Processes - Excretion",
      diagramHint: "Human Excretory System",
    },
    {
      id: 6,
      question: "In the diagram of a flower, if part X is removed before the bud opens and the flower is covered with a bag, which of the following will NOT occur?",
      options: [
        "Pollen grains will still mature in the anther",
        "Cross-pollination will be prevented",
        "Self-pollination can still occur if anthers are intact",
        "Fertilization and seed formation will definitely fail"
      ],
      answer: 3,
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
      class: 9,
      topic: "Life Processes - Transportation",
      diagramHint: "Cross-section of Stem (Xylem & Phloem)",
    },
  ],

  objective: [
    {
      id: 11,
      question: "A cell placed in solution X gains water and swells, but when placed in solution Y it shrinks. The cell itself has a solute concentration of 0.5M. Which is true?",
      options: [
        "X is 0.8M and Y is 0.3M",
        "X is 0.3M and Y is 0.8M",
        "X is 0.5M and Y is 0.5M",
        "X is 0.5M and Y is 0.3M"
      ],
      answer: 1,
      class: 9,
      topic: "The Fundamental Unit of Life",
    },
    {
      id: 12,
      question: "During photosynthesis, the oxygen released comes from the splitting of which molecule?",
      options: ["Carbon dioxide", "Glucose", "Water", "NADPH"],
      answer: 2,
      class: 10,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 13,
      question: "In a cross between Tt x Tt plants, 800 offspring are obtained. Approximately how many are expected to be homozygous recessive?",
      options: ["200", "400", "600", "800"],
      answer: 0,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 14,
      question: "A person with blood group AB can receive blood from all groups because their blood:",
      options: [
        "Has both antibodies anti-A and anti-B",
        "Has neither anti-A nor anti-B antibodies",
        "Has neither A nor B antigens",
        "Produces universal antibodies"
      ],
      answer: 1,
      class: 10,
      topic: "Life Processes - Transportation",
    },
    {
      id: 15,
      question: "During anaerobic respiration in yeast, pyruvate is converted to ethanol and CO2. In human muscles during oxygen debt, pyruvate is instead converted to:",
      options: ["Ethanol", "Acetic acid", "Lactic acid", "Citric acid"],
      answer: 2,
      class: 9,
      topic: "Life Processes - Respiration",
    },
    {
      id: 16,
      question: "Vitamin D deficiency causes rickets in children. An interesting fact is that dark-skinned people in northern latitudes are more prone because:",
      options: [
        "They eat less calcium-rich food",
        "Melanin in their skin reduces UV absorption needed for Vitamin D synthesis",
        "Their bones are genetically weaker",
        "They have fewer sweat glands"
      ],
      answer: 1,
      class: 9,
      topic: "Why Do We Fall Ill",
    },
    {
      id: 17,
      question: "If a person has 44 autosomes and XXY sex chromosomes, the total chromosome count is 47. This condition (Klinefelter syndrome) arises due to:",
      options: [
        "Crossing over during meiosis",
        "Non-disjunction of sex chromosomes during cell division",
        "Mutation in autosomal genes",
        "Deletion of Y chromosome fragment"
      ],
      answer: 1,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 18,
      question: "Hydra can reproduce both sexually and by budding. Which advantage does budding provide over sexual reproduction?",
      options: [
        "Produces genetically diverse offspring",
        "Allows rapid population growth without needing a mate",
        "Creates offspring better adapted to new environments",
        "Increases chance of survival during unfavorable conditions"
      ],
      answer: 1,
      class: 8,
      topic: "Reproduction in Animals",
    },
    {
      id: 19,
      question: "The human small intestine is approximately 6 meters long and has villi. If the villi were flattened, the absorption surface area would be approximately:",
      options: ["0.5 sq meters", "2 sq meters", "250 sq meters", "25 sq meters"],
      answer: 2,
      class: 9,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 20,
      question: "When a potted plant is kept in dark for 48 hours and then one leaf is partially covered with black paper and exposed to light, after testing with iodine, the covered part shows no blue-black colour. This proves that:",
      options: [
        "Chlorophyll is necessary for photosynthesis",
        "CO2 is necessary for photosynthesis",
        "Light is necessary for photosynthesis",
        "Water is necessary for photosynthesis"
      ],
      answer: 2,
      class: 10,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 21,
      question: "Blood pressure is measured as 120/80 mmHg. The '120' represents pressure during:",
      options: [
        "Relaxation of ventricles (diastole)",
        "Contraction of atria only",
        "Contraction of ventricles (systole)",
        "Complete cardiac rest"
      ],
      answer: 2,
      class: 10,
      topic: "Life Processes - Transportation",
    },
    {
      id: 22,
      question: "Adrenaline is released during emergency. Which of the following is NOT a direct effect of adrenaline?",
      options: [
        "Increased heart rate",
        "Dilation of bronchioles",
        "Increased digestive activity",
        "Redirection of blood to skeletal muscles"
      ],
      answer: 2,
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 23,
      question: "In an ecosystem, if 10000 J of energy is available at the producer level, how much energy will be available to the tertiary consumer (assuming 10% transfer at each level)?",
      options: ["1000 J", "100 J", "10 J", "1 J"],
      answer: 2,
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 24,
      question: "Root hairs absorb water from soil primarily by osmosis. If a farmer adds too much fertilizer to the soil, the plants wilt. This happens because:",
      options: [
        "Fertilizer is toxic to root hairs",
        "Soil solution becomes hypertonic to root cells, causing exosmosis",
        "Roots cannot absorb minerals with excess fertilizer",
        "The fertilizer blocks the root hair pores physically"
      ],
      answer: 1,
      class: 9,
      topic: "Life Processes - Transportation",
    },
    {
      id: 25,
      question: "Plasmodium (malaria parasite) completes its sexual reproduction in the mosquito and asexual reproduction in humans. The mosquito is therefore called:",
      options: [
        "Intermediate host",
        "Definitive (primary) host",
        "Vector only, not a host",
        "Secondary parasite"
      ],
      answer: 1,
      class: 9,
      topic: "Why Do We Fall Ill",
    },
    {
      id: 26,
      question: "A nerve cell can be up to 1 meter long (from spinal cord to toe). Why can't it divide by mitosis like other cells?",
      options: [
        "It has no nucleus",
        "It lacks centrioles and its highly specialized structure prevents cell division",
        "Nerve cells have too many mitochondria",
        "The myelin sheath blocks cell division signals"
      ],
      answer: 1,
      class: 8,
      topic: "Cell - Structure and Functions",
    },
    {
      id: 27,
      question: "Two populations of beetles live on separate islands. After thousands of generations, they can no longer interbreed when brought together. This is an example of:",
      options: [
        "Artificial selection",
        "Genetic drift without speciation",
        "Reproductive isolation leading to speciation",
        "Acquired characteristics becoming hereditary"
      ],
      answer: 2,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 28,
      question: "Pepsin works optimally at pH 2 in the stomach. When food enters the duodenum, pancreatic juice (pH 8) is secreted. If pancreatic enzymes were added to the stomach, they would:",
      options: [
        "Work faster due to acidic activation",
        "Be denatured and non-functional in acidic pH",
        "Convert all proteins to amino acids immediately",
        "Increase pepsin activity synergistically"
      ],
      answer: 1,
      class: 9,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 29,
      question: "Solar panels convert light to electricity (about 20% efficiency). Photosynthesis converts light to chemical energy. The efficiency of photosynthesis is approximately:",
      options: ["1-2%", "20-30%", "50-60%", "80-90%"],
      answer: 0,
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 30,
      question: "The ozone layer absorbs UV-B radiation. CFC molecules release chlorine atoms in the stratosphere. One chlorine atom can destroy approximately how many ozone molecules before being deactivated?",
      options: ["10", "100", "1,000", "100,000"],
      answer: 3,
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 31,
      question: "Cardiac muscle has properties of both smooth and skeletal muscle. Unlike skeletal muscle, cardiac muscle:",
      options: [
        "Is voluntary and striated",
        "Has intercalated discs that allow synchronized contraction",
        "Contains no mitochondria",
        "Cannot contract without nervous stimulation"
      ],
      answer: 1,
      class: 9,
      topic: "Tissues",
    },
    {
      id: 32,
      question: "Insulin causes cells to absorb glucose from blood. In Type 1 diabetes, the immune system destroys beta cells. In Type 2, cells become resistant to insulin. Which treatment works for Type 1 but NOT Type 2?",
      options: [
        "Exercise and diet control",
        "Injecting external insulin alone",
        "Drugs that increase cell sensitivity to insulin",
        "Reducing carbohydrate intake"
      ],
      answer: 1,
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 33,
      question: "Yeast is used to make bread rise. The rising occurs because yeast performs:",
      options: [
        "Aerobic respiration producing water vapour",
        "Anaerobic respiration producing CO2 gas that gets trapped in dough",
        "Photosynthesis producing oxygen bubbles",
        "Fermentation producing only ethanol"
      ],
      answer: 1,
      class: 8,
      topic: "Microorganisms",
    },
    {
      id: 34,
      question: "A colour-blind man (XᶜY) marries a carrier woman (XᶜX). What percentage of their sons will be colour-blind?",
      options: ["0%", "25%", "50%", "100%"],
      answer: 2,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 35,
      question: "Arteries have thick elastic walls while veins have valves. If a vein is cut, blood flows out steadily, but if an artery is cut, blood spurts out in jets. This is because:",
      options: [
        "Veins carry more blood than arteries",
        "Arterial blood is under high pressure from ventricular contraction",
        "Venous blood has more oxygen making it flow faster",
        "Arteries have wider lumen than veins"
      ],
      answer: 1,
      class: 9,
      topic: "Life Processes - Transportation",
    },
    {
      id: 36,
      question: "In a dihybrid cross (RrYy × RrYy), the expected phenotypic ratio is 9:3:3:1. If 640 seeds are obtained, approximately how many will be wrinkled and green (rryy)?",
      options: ["40", "120", "360", "480"],
      answer: 0,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 37,
      question: "The Chipko movement and the concept of 'sustainable development' share which core principle?",
      options: [
        "Complete ban on use of all natural resources",
        "Meeting present needs without compromising future generations' ability to meet theirs",
        "Maximizing industrial output using forest resources",
        "Replacing all natural forests with monoculture plantations"
      ],
      answer: 1,
      class: 10,
      topic: "Management of Natural Resources",
    },
    {
      id: 38,
      question: "Transpiration pull helps in upward movement of water in tall trees (>100m like redwoods). This works because water molecules have strong cohesion due to:",
      options: [
        "Covalent bonds between water molecules",
        "Hydrogen bonds creating a continuous water column",
        "Ionic attraction between water and xylem walls",
        "Van der Waals forces in the phloem"
      ],
      answer: 1,
      class: 9,
      topic: "Life Processes - Transportation",
    },
    {
      id: 39,
      question: "The nervous system sends electrical impulses (fast, short-lived) while the endocrine system sends chemical signals (slow, long-lasting). Which situation requires endocrine control rather than nervous control?",
      options: [
        "Pulling hand away from a hot surface",
        "Blinking when dust enters the eye",
        "Growth and development during puberty",
        "Maintaining balance while riding a bicycle"
      ],
      answer: 2,
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 40,
      question: "Bone, blood, and fat tissue are all classified as connective tissue despite looking very different. What common feature do they share?",
      options: [
        "All have cells embedded in a non-living matrix (extracellular material)",
        "All can contract and relax",
        "All contain haemoglobin",
        "All are made of the same type of cells"
      ],
      answer: 0,
      class: 9,
      topic: "Tissues",
    },
    {
      id: 41,
      question: "In the carbon cycle, if all decomposers were suddenly eliminated from an ecosystem, which problem would arise first?",
      options: [
        "Atmospheric oxygen would immediately run out",
        "Nutrients locked in dead organisms would not be recycled back to soil",
        "All photosynthesis would stop within hours",
        "The water cycle would reverse direction"
      ],
      answer: 1,
      class: 8,
      topic: "Conservation of Plants and Animals",
    },
    {
      id: 42,
      question: "Dolly the sheep was cloned using a somatic cell nucleus transferred to an enucleated egg cell. Dolly was genetically identical to:",
      options: [
        "The sheep that provided the egg cell",
        "The sheep that provided the somatic cell (mammary cell donor)",
        "The surrogate mother who carried her",
        "A combination of all three sheep"
      ],
      answer: 1,
      class: 10,
      topic: "How Do Organisms Reproduce",
    },
    {
      id: 43,
      question: "Cataract is a condition where the lens becomes opaque. A patient with cataract will experience:",
      options: [
        "Inability to see colours (colour blindness)",
        "Progressive blurring of vision as light cannot pass through clearly",
        "Double vision due to two images on retina",
        "Only loss of peripheral vision"
      ],
      answer: 1,
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 44,
      question: "In a food chain: Plants → Grasshopper → Frog → Snake → Eagle, DDT concentration is highest in eagles. This phenomenon of increase in toxin concentration at higher trophic levels is called:",
      options: [
        "Eutrophication",
        "Biomagnification",
        "Bioaccumulation only",
        "Biological oxygen demand"
      ],
      answer: 1,
      class: 10,
      topic: "Our Environment",
    },
    {
      id: 45,
      question: "A plant is placed horizontally. After a few days, the root grows downward and shoot grows upward. The root shows positive gravitropism. This bending is caused by:",
      options: [
        "Even distribution of auxin on all sides",
        "Higher concentration of auxin on the lower side promoting cell elongation in shoots but inhibiting it in roots",
        "Absence of auxin in the root tip",
        "Phototropism overriding gravitropism"
      ],
      answer: 1,
      class: 10,
      topic: "Control and Coordination",
    },
    {
      id: 46,
      question: "After vaccination, a person doesn't get the disease because the vaccine:",
      options: [
        "Directly kills all pathogens already in the body",
        "Stimulates memory cells that produce antibodies rapidly upon future infection",
        "Permanently increases body temperature to kill viruses",
        "Blocks all entry points for pathogens"
      ],
      answer: 1,
      class: 9,
      topic: "Why Do We Fall Ill",
    },
    {
      id: 47,
      question: "Peppered moths in England changed from mostly light-coloured to dark-coloured during industrial revolution, then back to light after pollution control. This demonstrates:",
      options: [
        "Lamarck's theory - moths acquired dark colour from soot",
        "Natural selection - dark moths had survival advantage on soot-covered trees",
        "Mutation caused by pollution chemicals",
        "Dark moths migrated from other countries"
      ],
      answer: 1,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 48,
      question: "Composting converts organic waste into manure in 3-6 months. The primary organisms responsible for breaking down this waste are:",
      options: [
        "Viruses and algae",
        "Bacteria and fungi (decomposers)",
        "Protozoa and nematodes only",
        "Insects and earthworms only"
      ],
      answer: 1,
      class: 8,
      topic: "Conservation of Plants and Animals",
    },
    {
      id: 49,
      question: "During puberty, testosterone in males causes voice deepening, facial hair, and muscle development. If a boy's pituitary gland is damaged and cannot produce FSH and LH, what happens?",
      options: [
        "Normal puberty occurs because testosterone is made by adrenal glands",
        "Testes will not be stimulated to produce testosterone, puberty will be delayed/absent",
        "Only voice change is affected, other changes proceed normally",
        "The boy will develop female secondary sexual characteristics"
      ],
      answer: 1,
      class: 10,
      topic: "How Do Organisms Reproduce",
    },
    {
      id: 50,
      question: "Acid rain has pH below 5.6. Normal rain is slightly acidic (pH ~5.6) due to dissolved CO2 forming carbonic acid. Acid rain is MORE acidic because it additionally contains:",
      options: [
        "Hydrochloric acid from sea salt evaporation",
        "Sulphuric acid and nitric acid from SO2 and NOx emissions",
        "Phosphoric acid from agricultural runoff",
        "Acetic acid from industrial food processing"
      ],
      answer: 1,
      class: 8,
      topic: "Pollution of Air and Water",
    },
    {
      id: 51,
      question: "A student sets up two test tubes: Tube A has boiled and cooled leaf extract, Tube B has fresh leaf extract. Both are kept in sunlight with CO2 supply. After 4 hours, only Tube B shows starch formation. What does boiling destroy that prevents photosynthesis?",
      options: [
        "Chlorophyll pigment, which is heat-stable",
        "Enzymes required for the Calvin cycle (dark reactions)",
        "The cell wall structure",
        "Water molecules inside the cells"
      ],
      answer: 1,
      class: 10,
      topic: "Life Processes - Nutrition",
    },
    {
      id: 52,
      question: "In a family, the father has blood group A (heterozygous IAi) and the mother has blood group B (heterozygous IBi). What is the probability that their child will have blood group O?",
      options: ["0%", "25%", "50%", "75%"],
      answer: 1,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 53,
      question: "During heavy exercise, the breathing rate increases from 15 to 40 breaths/min. The primary stimulus that triggers this increase is detected by the brain when:",
      options: [
        "Oxygen level in blood rises above normal",
        "CO2 concentration in blood increases, lowering blood pH",
        "Heart rate decreases below resting level",
        "Body temperature drops significantly"
      ],
      answer: 1,
      class: 10,
      topic: "Life Processes - Respiration",
    },
    {
      id: 54,
      question: "A plant heterozygous for two traits (TtRr) is crossed with a double recessive plant (ttrr). This is called a test cross. The expected phenotypic ratio of offspring is:",
      options: ["9:3:3:1", "1:1:1:1", "3:1", "1:2:1"],
      answer: 1,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 55,
      question: "A person's kidney fails and they undergo dialysis. The dialysis fluid contains glucose and salts at the same concentration as normal blood, but NO urea. Why is this composition critical?",
      options: [
        "To add extra glucose to the patient's blood",
        "So urea diffuses out from blood into fluid (down concentration gradient) while useful substances are retained",
        "To increase blood pressure in the patient",
        "To destroy bacteria in the blood"
      ],
      answer: 1,
      class: 10,
      topic: "Life Processes - Excretion",
    },
    {
      id: 56,
      question: "Mendel crossed pure tall plants (TT) with pure dwarf plants (tt). All F1 were tall. When F1 plants were self-pollinated, F2 showed 3:1 ratio. If Mendel had instead crossed F1 tall with pure dwarf (tt), what ratio would he get?",
      options: ["3:1 (tall:dwarf)", "1:1 (tall:dwarf)", "All tall", "1:2:1"],
      answer: 1,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 57,
      question: "In the human female reproductive system, fertilization normally occurs in the fallopian tube. If both fallopian tubes are blocked but ovaries and uterus are functional, which assisted reproduction technique would be most appropriate?",
      options: [
        "Artificial insemination (IUI)",
        "In Vitro Fertilization (IVF) - fertilize egg outside and implant embryo in uterus",
        "Hormone therapy to unblock tubes",
        "Surrogacy using another woman's egg"
      ],
      answer: 1,
      class: 10,
      topic: "How Do Organisms Reproduce",
    },
    {
      id: 58,
      question: "The human genome has approximately 20,000-25,000 genes but only about 1.5% of DNA codes for proteins. A mutation in the non-coding region is MOST LIKELY to:",
      options: [
        "Always cause a lethal disease",
        "Have no visible effect on the organism (be neutral)",
        "Immediately cause cancer",
        "Change the person's blood group"
      ],
      answer: 1,
      class: 10,
      topic: "Heredity and Evolution",
    },
    {
      id: 59,
      question: "In an experiment, a student covers both surfaces of a leaf with vaseline. Another leaf has only the lower surface covered. A third leaf is left uncovered. Which leaf will show maximum wilting first?",
      options: [
        "Both surfaces covered (no transpiration possible)",
        "Lower surface covered (most stomata blocked)",
        "Uncovered leaf (maximum transpiration from both surfaces)",
        "All three will wilt at the same rate"
      ],
      answer: 2,
      class: 10,
      topic: "Life Processes - Transportation",
    },
    {
      id: 60,
      question: "ATP is called the 'energy currency' of cells. During aerobic respiration, one glucose molecule produces approximately 36-38 ATP molecules. During anaerobic respiration in yeast, the same glucose produces only:",
      options: ["2 ATP molecules", "12 ATP molecules", "19 ATP molecules", "36 ATP molecules"],
      answer: 0,
      class: 10,
      topic: "Life Processes - Respiration",
    },
  ],
};

export default questions;
