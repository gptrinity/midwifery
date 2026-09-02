// NMCN (Nursing and Midwifery Council of Nigeria) Past Exam Questions
// Sourced from NMCN licensing examination collections
// type: MCQ, level: PROFESSIONAL (NMCN exam level), source: "NMCN-past-paper"

const Q = (t, level, m, extra) => Object.assign({ text: t, type: "MCQ", level, marks: m, year: "NMCN", source: "NMCN-past-paper" }, extra);

module.exports = [
  // ===== FOUNDATION OF MIDWIFERY (NMCN) =====
  Q("The Nursing and Midwifery Council of Nigeria (NMCN) was established under which act?", "PROFESSIONAL", 1, {
    options: ["Nurses and Midwives Act Cap 197", "National Health Act 2014", "Medical and Dental Practitioners Act", "Federal Ministry of Health Act"],
    correct: 0,
    answer: "The NMCN was established under the Nurses and Midwives Act (Cap N13, Laws of the Federation of Nigeria 2004).",
  }),
  Q("A midwife who witnesses child trafficking has a legal duty to:", "PROFESSIONAL", 1, {
    options: ["Ignore it to maintain confidentiality", "Report to the appropriate authority", "Confront the trafficker directly", "Wait for the woman to report herself"],
    correct: 1,
    answer: "Child trafficking is a criminal offense. The midwife has a mandatory duty to report to law enforcement or child protection services.",
  }),
  Q("The concept of 'duty of care' in midwifery means:", "PROFESSIONAL", 1, {
    options: ["The midwife must always agree with the patient", "The midwife is legally bound to act reasonably to prevent harm", "The midwife must work overtime", "The hospital is responsible for all errors"],
    correct: 1,
    answer: "Duty of care is the legal obligation to act with reasonable care and skill to prevent foreseeable harm to the patient.",
  }),
  Q("Which of the following is NOT a component of informed consent?", "PROFESSIONAL", 1, {
    options: ["Disclosure of risks", "Voluntary agreement", "Consent given under pressure from family", "Capacity to consent"],
    correct: 2,
    answer: "Informed consent must be voluntary, not coerced. Consent under pressure or duress is invalid.",
  }),
  Q("The 'never event' in midwifery practice includes all EXCEPT:", "PROFESSIONAL", 1, {
    options: ["Wrong-site surgery", "Retained swab after delivery", "Administering the correct medication", "Wrong baby given to mother"],
    correct: 2,
    answer: "Administering the correct medication is appropriate care, not a never event. Never events are serious, wholly preventable patient safety incidents.",
  }),
  Q("The primary purpose of the partograph is to:", "PROFESSIONAL", 1, {
    options: ["Record the mother's meal intake", "Detect prolonged or obstructed labor early", "Replace the need for vaginal examination", "Monitor the baby's feeding after birth"],
    correct: 1,
    answer: "The partograph is a graphical record that plots cervical dilatation, descent, contractions and fetal heart rate to detect labor abnormalities early.",
  }),
  Q("In a breech presentation at term, the most important assessment before deciding mode of delivery is:", "PROFESSIONAL", 1, {
    options: ["Maternal blood group", "Pelvic adequacy and type of breech", "Fetal sex", "Number of previous pregnancies"],
    correct: 1,
    answer: "Pelvic adequacy (CT scan pelvimetry) and classification of breech type (frank, complete, footling) determine whether vaginal breech delivery is safe.",
  }),
  Q("The most reliable sign of labor is:", "PROFESSIONAL", 1, {
    options: ["Rupture of membranes", "Regular uterine contractions with cervical change", "Bloody show", "Lower abdominal pain"],
    correct: 1,
    answer: "Regular contractions causing progressive cervical effacement and dilatation is the only reliable sign of true labor.",
  }),

  // ===== APPLIED ANATOMY AND PHYSIOLOGY (NMCN) =====
  Q("The vertex diameter that engages in a well-flexed vertex presentation is:", "PROFESSIONAL", 1, {
    options: ["Suboccipito-bregmatic (9.5 cm)", "Occipito-frontal (11.5 cm)", "Submento-bregmatic (9.5 cm)", "Biparietal (8.5 cm)"],
    correct: 0,
    answer: "In a well-flexed vertex presentation, the suboccipito-bregmatic diameter (9.5 cm) engages, which is the smallest anteroposterior diameter of the fetal skull.",
  }),
  Q("During pregnancy, the physiological increase in blood volume is approximately:", "PROFESSIONAL", 1, {
    options: ["10-15%", "25-30%", "40-50%", "60-70%"],
    correct: 2,
    answer: "Blood volume increases by about 40-50% by term, with plasma increasing more than red cells, causing physiological anaemia of pregnancy.",
  }),
  Q("The hormone primarily responsible for maintaining the uterine lining in early pregnancy is:", "PROFESSIONAL", 1, {
    options: ["Estrogen", "Progesterone", "hCG", "Oxytocin"],
    correct: 1,
    answer: "Progesterone from the corpus luteum (early) and placenta (later) maintains the endometrium and reduces uterine irritability.",
  }),
  Q("The foramen ovale in fetal circulation shunts blood from:", "PROFESSIONAL", 1, {
    options: ["Left atrium to right atrium", "Right atrium to left atrium", "Pulmonary artery to aorta", "Umbilical vein to portal vein"],
    correct: 1,
    answer: "The foramen ovale shunts oxygenated blood from the right atrium directly to the left atrium, bypassing the non-functional fetal lungs.",
  }),
  Q("The normal fetal heart rate range is:", "PROFESSIONAL", 1, {
    options: ["60-100 bpm", "110-160 bpm", "120-180 bpm", "80-120 bpm"],
    correct: 1,
    answer: "The normal fetal heart rate is 110-160 beats per minute. Rates below 110 or above 160 may indicate fetal distress.",
  }),

  // ===== NORMAL MIDWIFERY (NMCN) =====
  Q("Active management of the third stage of labor includes all EXCEPT:", "PROFESSIONAL", 1, {
    options: ["Controlled cord traction", "Uterine massage", "Delayed cord clamping for 5 minutes", "Administration of oxytocin"],
    correct: 2,
    answer: "Active management involves early cord clamping (1-3 min), oxytocin administration, controlled cord traction and uterine massage. Delayed clamping beyond 3 min is not part of active management.",
  }),
  Q("A mother at 3 days postpartum presents with red, hot, painful breast. The most likely diagnosis is:", "PROFESSIONAL", 1, {
    options: ["Breast cancer", "Engorgement", "Galactocele", "Fibroadenoma"],
    correct: 1,
    answer: "Breast engorgement typically occurs on day 2-4 postpartum when milk 'comes in'. It presents with bilateral breast fullness, warmth and pain.",
  }),
  Q("The recommended position for a mother during the second stage of labor is:", "PROFESSIONAL", 1, {
    options: ["Left lateral only", "Lithotomy position", "Upright position of her choice", "Supine with head down"],
    correct: 2,
    answer: "Upright and mobile positions (squatting, standing, side-lying) improve pelvic diameters, reduce pain and facilitate descent.",
  }),
  Q("The Apgar score is assessed at:", "PROFESSIONAL", 1, {
    options: ["Birth only", "1 and 5 minutes after birth", "10 minutes after birth", "Only if the baby looks unwell"],
    correct: 1,
    answer: "Apgar score is assessed at 1 and 5 minutes. If low, continue at 10 and 15 minutes until stable.",
  }),
  Q("Exclusive breastfeeding is recommended for the first:", "PROFESSIONAL", 1, {
    options: ["3 months", "4 months", "6 months", "12 months"],
    correct: 2,
    answer: "WHO recommends exclusive breastfeeding for the first 6 months with continued breastfeeding alongside complementary foods up to 2 years.",
  }),
  Q("The normal duration of the third stage of labor is:", "PROFESSIONAL", 1, {
    options: ["1-5 minutes", "5-15 minutes (up to 30 min)", "30-60 minutes", "1-2 hours"],
    correct: 1,
    answer: "The third stage normally lasts 5-15 minutes. If the placenta is not delivered within 30 minutes, it is classified as retained.",
  }),
  Q(" Lochia rubra is characterized by:", "PROFESSIONAL", 1, {
    options: ["White discharge", "Red blood-stained discharge (days 1-3)", "Yellowish-green discharge", "Clear watery discharge"],
    correct: 1,
    answer: "Lochia rubra is the red, blood-stained vaginal discharge in the first 3-4 days postpartum, consisting of blood, decidua and meconium.",
  }),

  // ===== COMPLICATED MIDWIFERY (NMCN) =====
  Q("The '4 Ts' of postpartum haemorrhage include all EXCEPT:", "PROFESSIONAL", 1, {
    options: ["Tone", "Trauma", "Tissue", "Temperature"],
    correct: 3,
    answer: "The 4 Ts are Tone (uterine atony), Trauma (lacerations), Tissue (retained placenta), and Thrombin (coagulopathy). Temperature is not one of them.",
  }),
  Q("A woman with pre-eclampsia presents with severe headache and BP 170/110. The first action is:", "PROFESSIONAL", 1, {
    options: ["Send her home with paracetamol", "Administer antihypertensives and magnesium sulfate", "Wait for convulsions before treating", "Perform emergency cesarean section immediately"],
    correct: 1,
    answer: "Severe pre-eclampsia requires immediate antihypertensive therapy (labetalol/nifedipine) and magnesium sulfate for seizure prophylaxis, with preparation for delivery.",
  }),
  Q("In placenta praevia, the classic presentation is:", "PROFESSIONAL", 1, {
    options: ["Painful dark bleeding", "Painless, recurrent, bright red vaginal bleeding", "Continuous dark brown discharge", "Foul-smelling discharge"],
    correct: 1,
    answer: "Placenta praevia classically presents with painless, recurrent, bright red vaginal bleeding, often in the third trimester.",
  }),
  Q("The most common cause of primary postpartum haemorrhage is:", "PROFESSIONAL", 1, {
    options: ["Retained placenta", "Uterine atony", "Cervical laceration", "Coagulopathy"],
    correct: 1,
    answer: "Uterine atony accounts for approximately 80% of primary PPH cases. The uterus fails to contract adequately after delivery.",
  }),
  Q("Shoulder dystocia is an obstetric emergency where:", "PROFESSIONAL", 1, {
    options: ["The baby is born before the head", "The fetal head is delivered but the shoulders cannot be delivered", "The cord prolapses", "The placenta delivers before the baby"],
    correct: 1,
    answer: "Shoulder dystocia occurs when the fetal head is delivered but the anterior shoulder is impacted behind the symphysis pubis.",
  }),
  Q("The mnemonic 'HELPERR' is used for managing:", "PROFESSIONAL", 1, {
    options: ["Postpartum haemorrhage", "Shoulder dystocia", "Eclamptic seizure", "Neonatal resuscitation"],
    correct: 1,
    answer: "HELPERR is the mnemonic for shoulder dystocia management: Call for Help, Episiotomy, Legs (McRoberts), Suprapubic pressure, Enter maneuvers, Remove posterior arm, Rotate the baby.",
  }),
  Q("An ectopic pregnancy typically presents with:", "PROFESSIONAL", 1, {
    options: ["Painless vaginal bleeding", "Amenorrhea, lower abdominal pain, and vaginal bleeding", "Severe backache only", "Urinary frequency"],
    correct: 1,
    answer: "The classic triad of ectopic pregnancy is amenorrhea, unilateral lower abdominal pain, and vaginal bleeding.",
  }),
  Q("Magnesium sulfate in the management of eclampsia works by:", "PROFESSIONAL", 1, {
    options: ["Lowering blood pressure", "Preventing and treating convulsions", "Stimulating uterine contractions", "Reducing swelling"],
    correct: 1,
    answer: "Magnesium sulfate is a central nervous system depressant that prevents and treats eclamptic seizures. It is the drug of choice for seizure prophylaxis in pre-eclampsia/eclampsia."),
  }),

  // ===== COMMUNITY MIDWIFERY (NMCN) =====
  Q("Primary Health Care was declared as the key to 'Health for All' at:", "PROFESSIONAL", 1, {
    options: ["WHO Geneva 1975", "Alma-Ata 1978", "UNICEF New York 1980", "Lagos Conference 1985"],
    correct: 1,
    answer: "The Alma-Ata Declaration of 1978 declared Primary Health Care as the key to achieving 'Health for All'."),
  }),
  Q("The cold chain in immunization refers to:", "PROFESSIONAL", 1, {
    options: ["Keeping vaccines in the freezer permanently", "Maintaining vaccines at the correct temperature from manufacture to administration", "Using ice packs during transport only", "Freezing and thawing vaccines repeatedly"],
    correct: 1,
    answer: "The cold chain is the system of transporting and storing vaccines within the recommended temperature range (2-8°C for most) from production to administration."),
  }),
  Q("The maternal mortality ratio (MMR) is expressed per:", "PROFESSIONAL", 1, {
    options: ["1,000 live births", "10,000 live births", "100,000 live births", "1,000,000 births"],
    correct: 2,
    answer: "MMR is the number of maternal deaths per 100,000 live births. Nigeria's MMR remains among the highest globally."),
  }),
  Q("The Lactational Amenorrhoea Method (LAM) of family planning is effective when:", "PROFESSIONAL", 1, {
    options: ["The baby is any age", "The mother is fully breastfeeding, the baby is under 6 months, and she has no periods", "The mother is partially breastfeeding", "The baby sleeps through the night"],
    correct: 1,
    answer: "LAM is >98% effective when all three criteria are met: exclusive/full breastfeeding, baby <6 months, and amenorrhoeic."),
  }),
  Q("BCG vaccine is given at birth to protect against:", "PROFESSIONAL", 1, {
    options: ["Polio", "Tuberculosis", "Measles", "Hepatitis B"],
    correct: 1,
    answer: "BCG (Bacillus Calmette-Guerin) vaccine protects against severe forms of tuberculosis in children."),
  }),
  Q("The three delays model in maternal mortality refers to delays in:", "PROFESSIONAL", 1, {
    options: ["Decision to seek care, reaching care, receiving adequate care", "Booking, labor, postnatal", "Registration, vaccination, delivery", "Antenatal, intranatal, postnatal"],
    correct: 0,
    answer: "The three delays are: 1) delay in deciding to seek care, 2) delay in reaching the health facility, 3) delay in receiving adequate treatment at the facility."),
  }),
  Q("The EPI (Expanded Programme on Immunization) schedule in Nigeria includes OPV at birth. OPV protects against:", "PROFESSIONAL", 1, {
    options: ["Measles", "Polio", "Tuberculosis", "Diphtheria"],
    correct: 1,
    answer: "OPV (Oral Polio Vaccine) protects against poliomyelitis. It is given at birth (OPV-0) and repeated at 6, 10, and 14 weeks."),
  }),

  // ===== PSYCHOLOGY IN MIDWIFERY (NMCN) =====
  Q("The Edinburgh Postnatal Depression Scale (EPDS) is most appropriately administered:", "PROFESSIONAL", 1, {
    options: ["Only during labor", "At 6-8 weeks postpartum and when symptoms are reported", "Only in the antenatal period", "Only when the baby is 1 year old"],
    correct: 1,
    answer: "The EPDS is recommended at the 6-8 week postnatal visit and whenever symptoms of depression are reported. Repeat screening may be needed."),
  }),
  Q("Puerperal psychosis typically presents with:", "PROFESSIONAL", 1, {
    options: ["Mild low mood only", "Hallucinations, delusions, and disorganized behavior", "Excessive crying for 2 days", "Fatigue only"],
    correct: 1,
    answer: "Puerperal psychosis is a psychiatric emergency presenting with psychotic symptoms (hallucinations, delusions, mood disturbance, confusion) usually within the first 2 weeks postpartum."),
  }),
  Q("Tokophobia refers to:", "PROFESSIONAL", 1, {
    options: ["Fear of breastfeeding", "An extreme fear of childbirth", "Fear of the newborn", "Fear of hospitals"],
    correct: 1,
    answer: "Tokophobia is an extreme, irrational fear of childbirth. It may be primary (never given birth) or secondary (following a traumatic birth experience)."),
  }),
  Q("The most effective intervention to reduce fear and anxiety during labor is:", "PROFESSIONAL", 1, {
    options: ["Routine episiotomy", "Continuous support from a companion", "Mandatory bed rest", "Avoiding all communication"],
    correct: 1,
    answer: "Continuous labor support reduces anxiety, shortens labor, decreases analgesic use and improves satisfaction (Cochrane evidence)."),
  }),
  Q("Postnatal depression differs from 'baby blues' in that:", "PROFESSIONAL", 1, {
    options: ["It occurs on day 2-3", "It persists beyond 2 weeks and requires treatment", "It resolves spontaneously within 48 hours", "It only affects first-time mothers"],
    correct: 1,
    answer: "Baby blues is transient (days 2-5, self-limiting). Postnatal depression persists beyond 2 weeks, worsens without treatment, and requires professional intervention."),
  }),

  // ===== INFANT CARE / NEWBORN (NMCN) =====
  Q("The initial steps in neonatal resuscitation are:", "PROFESSIONAL", 1, {
    options: ["Chest compressions first", "Warm, position, clear airway, dry and stimulate", "Give oxygen immediately", "Intubate the baby"],
    correct: 1,
    answer: "The initial steps (NRP) are: provide warmth, position the head in neutral, clear the airway if needed, dry and stimulate. These are done within the first 30 seconds."),
  }),
  Q("Exchange transfusion is indicated when:", "PROFESSIONAL", 1, {
    options: ["Mild physiological jaundice", "Bilirubin reaches exchange thresholds or signs of kernicterus", "Any jaundice is present", "The baby is sleepy"],
    correct: 1,
    answer: "Exchange transfusion is performed when bilirubin levels reach specific thresholds (varies by age/risk factors) or when signs of acute bilirubin encephalopathy (kernicterus) appear."),
  }),
  Q("A newborn with grunting, nasal flaring and intercostal retractions most likely has:", "PROFESSIONAL", 1, {
    options: ["Hypoglycemia", "Respiratory distress", "Dehydration", "Jaundice"],
    correct: 1,
    answer: "Grunting, nasal flaring, and intercostal retractions are signs of respiratory distress. Common causes include RDS (preterm), TTN, sepsis, and pneumonia."),
  }),
  Q("The most common cause of neonatal sepsis in the first 72 hours is:", "PROFESSIONAL", 1, {
    options: ["Environmental contamination", "Maternal Group B Streptococcus or E. coli", "Viral infection", "Fungal infection"],
    correct: 1,
    answer: "Early-onset neonatal sepsis (<72h) is usually caused by vertical transmission from the birth canal, most commonly GBS and E. coli."),
  }),
  Q("Kangaroo Mother Care (KMC) is particularly beneficial for:", "PROFESSIONAL", 1, {
    options: ["Term babies only", "Low birth weight and preterm babies", "Babies with congenital anomalies", "Babies who are overweight"],
    correct: 1,
    answer: "KMC provides continuous skin-to-skin contact, exclusive breastfeeding and close monitoring, significantly reducing mortality and morbidity in LBW/preterm infants."),
  }),
  Q("Vitamin K is given to all newborns to prevent:", "PROFESSIONAL", 1, {
    options: ["Neonatal jaundice", "Haemorrhagic disease of the newborn (Vitamin K Deficiency Bleeding)", "Neonatal sepsis", "Congenital heart disease"],
    correct: 1,
    answer: "Vitamin K deficiency bleeding (VKDB) affects newborns who lack vitamin K (does not cross placenta well, low in breast milk). Prophylaxis prevents this potentially fatal condition."),
  }),
  Q("The normal birth weight of a Nigerian term neonate is approximately:", "PROFESSIONAL", 1, {
    options: ["1.5-2.0 kg", "2.5-4.0 kg", "4.5-5.5 kg", "3.5-6.0 kg"],
    correct: 1,
    answer: "Normal term birth weight is 2.5-4.0 kg. Low birth weight is <2.5 kg; macrosomia is >4.0 kg (or >4.5 kg depending on definition)."),
  }),
  Q("Eye prophylaxis for the newborn is given to prevent:", "PROFESSIONAL", 1, {
    options: ["Retinopathy of prematurity", "Ophthalmia neonatorum (neonatal conjunctivitis)", "Congenital cataracts", "Glaucoma"],
    correct: 1,
    answer: "Ophthalmia neonatorum (conjunctivitis) can be caused by gonococcus, chlamydia or other organisms acquired during birth. Antibiotic eye prophylaxis prevents this."),
  }),
];
