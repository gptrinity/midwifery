// Questions: Infant Care / Newborn (Part 2 - Advanced + Professional)

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- ADVANCED ----
  Q("A term newborn has an Apgar of 3 at 5 minutes despite PPV. The next step is to:", "MCQ", "ADVANCED", 2, {
    options: ["Stop resuscitation", "Check heart rate; if <60 start chest compressions and consider adrenaline, reassess ventilation", "Give the baby to the mother", "Start antibiotics"], correct: 1,
    answer: "Ongoing resuscitation continues with ventilation, compressions and drugs based on HR.",
  }),
  Q("Which of the following is a critical danger sign in a newborn requiring urgent referral?", "MCQ", "ADVANCED", 2, {
    options: ["Mild umbilical oozing", "Convulsions or apnea", "Physiological jaundice", "Infrequent sneezing"], correct: 1,
    answer: "Convulsions and apnea are emergencies.",
  }),
  Q("In neonatal resuscitation, the compression-to-ventilation ratio is:", "MCQ", "ADVANCED", 2, {
    options: ["30:2", "3:1", "15:2", "5:1"], correct: 1,
    answer: "Neonatal compressions use a 3:1 ratio (90 compressions, 30 breaths per minute).",
  }),
  Q("A newborn with a bilirubin of 320 micromol/L on day 3 is at highest risk of:", "MCQ", "ADVANCED", 2, {
    options: ["Hypoglycaemia", "Kernicterus", "Anaemia", "Polycythaemia"], correct: 1,
    answer: "Very high unconjugated bilirubin risks kernicterus; urgent treatment needed.",
  }),
  Q("Which of the following indicates a need for exchange transfusion in haemolytic disease?", "MCQ", "ADVANCED", 2, {
    options: ["Any jaundice", "Bilirubin reaching exchange thresholds or signs of kernicterus", "Physiological jaundice", "Pink skin"], correct: 1,
    answer: "Exchange transfusion is used at threshold levels or for kernicterus risk.",
  }),
  Q("A baby born at 31 weeks has respiratory distress. The most likely cause is:", "MCQ", "ADVANCED", 2, {
    options: ["Surfactant deficiency (respiratory distress syndrome)", "Oesophageal atresia", "Pyloric stenosis", "Tetanus"], correct: 0,
    answer: "Preterm lungs lack surfactant, causing RDS.",
  }),
  Q("Which of the following is a feature of neonatal respiratory distress syndrome?", "MCQ", "ADVANCED", 2, {
    options: ["Grunting, retractions, cyanosis, tachypnoea", "Weight gain", "Normal oxygen saturation", "Bradycardia with pink colour"], correct: 0,
    answer: "RDS presents with grunting, retractions and hypoxia.",
  }),
  Q("In a newborn with suspected congenital heart disease, which of the following is an important sign?", "MCQ", "ADVANCED", 2, {
    options: ["Cyanosis, poor feeding and murmur", "Good weight gain", "Pink extremities", "Normal cry"], correct: 0,
    answer: "Cyanosis, feeding difficulty and murmurs suggest CHD.",
  }),
  Q("The most appropriate management of a baby with neonatal conjunctivitis is:", "MCQ", "ADVANCED", 2, {
    options: ["Observation only", "Clean eyes, antibiotics (topical/systemic) and refer if persistent", "Surgery", "Cold compress only"], correct: 1,
    answer: "Ophthalmia neonatorum is treated with appropriate antibiotics; refer.",
  }),
  Q("A mother asks about umbilical cord care. The correct advice is:", "MCQ", "ADVANCED", 2, {
    options: ["Apply ash and cover tightly", "Keep the cord clean and dry, expose to air, fold nappy below it", "Apply frequent soap", "Leave the stump in urine"], correct: 1,
    answer: "Clean and dry cord care reduces omphalitis and tetanus.",
  }),
  Q("Which of the following is the most reliable indicator of adequate breastfeeding in a newborn?", "MCQ", "ADVANCED", 2, {
    options: ["Duration of feed", "Breast fullness", "Weight gain and 6+ wet nappies/day", "Frequency of burping"], correct: 2,
    answer: "Growth and wet nappies confirm adequate intake.",
  }),
  Q("Explain the mechanism by which surfactant deficiency causes neonatal respiratory distress.", "SHORT", "ADVANCED", 3, {
    answer: "Surfactant reduces alveolar surface tension preventing collapse; deficiency (preterm) causes alveolar collapse (atelectasis), reduced compliance, ventilation-perfusion mismatch, hypoxia, and progressive RDS; treatment includes surfactant replacement and respiratory support.",
  }),
  Q("Outline the steps in the assessment of a newborn with suspected sepsis.", "SHORT", "ADVANCED", 3, {
    answer: "History (maternal risk factors); clinical assessment (temperature, feeding, activity, respiration, colour); investigations (FBC, CRP, blood culture, LP if indicated); chest x-ray if respiratory signs; start empirical broad-spectrum antibiotics after cultures; supportive care (fluids, oxygen, warmth); monitor and reassess.",
  }),
  Q("Describe the management of neonatal hypoglycaemia.", "SHORT", "ADVANCED", 3, {
    answer: "Prevent: early feeding, keep warm. Screen at-risk babies (preterm, SGA, IDM). Asymptomatic: feed immediately and recheck. Symptomatic or very low: IV dextrose (10%), reassess, monitor; seek cause (sepsis, hypothermia, inborn errors); treat underlying condition.",
  }),
  Q("Discuss the nursing care of a baby receiving phototherapy.", "ESSAY", "ADVANCED", 6, {
    answer: "Expose skin maximally, protect eyes and genitalia; monitor temperature and hydration; encourage frequent feeding and assess intake/output; monitor bilirubin levels; assess for loose stools and dehydration; reassure and involve parents; maintain safe light source and skin integrity; stop when thresholds met.",
  }),
  Q("Analyze the causes and prevention of birth asphyxia.", "ESSAY", "ADVANCED", 6, {
    answer: "Causes: prolonged/obstructed labor, cord problems, placental insufficiency, maternal hypotension/anaesthesia, prematurity, fetal anomalies, infection. Prevention: risk identification, partograph, intrapartum fetal monitoring, skilled attendance, readiness and training in resuscitation, timely intervention for fetal distress.",
  }),
  // ---- PROFESSIONAL ----
  Q("In neonatal resuscitation, adrenaline is given when:", "MCQ", "PROFESSIONAL", 2, {
    options: ["HR is <60 despite ventilation and compressions", "At the start", "HR >100", "The baby is crying"], correct: 0,
    answer: "Adrenaline (IV/IO 0.01-0.03 mg/kg) is for HR <60 unresponsive to ventilation and compressions.",
  }),
  Q("Which of the following is a contraindication to breastfeeding (in rare cases)?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Maternal cold", "Untreated HIV in settings where replacement feeding is acceptable, or certain drugs/illnesses per guidance", "Mild engorgement", "Twin delivery"], correct: 1,
    answer: "Rare contraindications include specific drugs, active untreated TB/HIV per context.",
  }),
  Q("A term baby develops grunting and recession 2 hours after birth; the umbilical cord had been around the neck. The most important immediate action is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Feed immediately", "Assess oxygenation and support respiration; consider transient tachypnea or evolving RDS/sepsis", "Bath the baby", "Wait 12 hours"], correct: 1,
    answer: "Early respiratory distress needs prompt assessment and respiratory support.",
  }),
  Q("Which neonatal reflex, if absent, suggests a neurological problem?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Rooting", "Moro", "Grasp", "All of the above"], correct: 3,
    answer: "Absence or asymmetry of primitive reflexes warrants neurological evaluation.",
  }),
  Q("In counselling a mother of a baby with neonatal jaundice, which advice is correct?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Stop breastfeeding", "Continue frequent feeding and follow monitoring/treatment as advised", "Give water only", "Wait until 6 weeks"], correct: 1,
    answer: "Continue feeding; treatment depends on bilirubin thresholds.",
  }),
  Q("Formulate a resuscitation protocol for a non-breathing newborn in a small facility.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Prepare warm delivery area and equipment daily; dry, warm, position and clear airway; stimulate; assess breathing/HR; if not breathing or HR<100, bag-and-mask ventilation with air/oxygen; reassess; if HR<60 add compressions (3:1); adrenaline if no response; arrange referral while stabilizing; document Apgar and actions.",
  }),
  Q("Explain the principles of thermoregulation and its importance in the preterm infant.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Preterm infants lose heat rapidly (large surface area, thin skin, little brown fat, poor thermoregulation); cold stress consumes glucose and oxygen, worsening RDS, hypoglycaemia and infection; maintain neutral thermal environment with warm delivery room, skin-to-skin/kangaroo care, incubators, radiant warmers, warm fluids and minimal handling.",
  }),
  Q("Critically evaluate the evidence for delayed cord clamping in preterm infants.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Delayed clamping (30-60s) in preterm infants improves transitional circulation, reduces need for transfusion, lowers IVH and necrotizing enterocolitis, and reduces mortality; risks include polycythaemia and jaundice; should be performed when the infant is stable, with careful consideration of the need for immediate resuscitation.",
  }),
  Q("Design a nursing care plan for a very low birth weight infant (<1500g) in a district hospital.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Thermoregulation (kangaroo mother care/incubator); respiratory support and monitoring (oxygen, apnoea); feeding via expressed breast milk, gavage if needed; infection control and hand hygiene; glucose and bilirubin monitoring; fluid and electrolyte balance; minimal handling and clustering of care; neurodevelopmental positioning; parental involvement and education; growth monitoring; early detection of complications; referral criteria.",
  }),
  Q("Discuss the midwife's role in supporting parents of a baby with a congenital anomaly.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Sensitive, honest communication of diagnosis; involve specialists early; provide information in understandable terms; acknowledge emotional response and allow questions; support bonding and feeding; coordinate referral and follow-up; provide practical guidance and resources; respect cultural/religious beliefs; provide bereavement support if applicable; advocate for the family.",
  }),
];