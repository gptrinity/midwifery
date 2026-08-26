// Questions: Complicated Midwifery

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- NEWBIE ----
  Q("Bleeding from the genital tract after 28 weeks of gestation before delivery is called:", "MCQ", "NEWBIE", 1, {
    options: ["Postpartum haemorrhage", "Antepartum haemorrhage", "Menorrhagia", "Lochia"], correct: 1,
    answer: "Antepartum haemorrhage is bleeding after 28 weeks before delivery.",
  }),
  Q("The most common cause of primary postpartum haemorrhage is:", "MCQ", "NEWBIE", 1, {
    options: ["Retained placenta", "Uterine atony", "Vaginal lacerations", "Coagulopathy"], correct: 1,
    answer: "Uterine atony is the most common cause of primary PPH.",
  }),
  Q("Blood loss of 500ml or more after vaginal delivery is classified as:", "MCQ", "NEWBIE", 1, {
    options: ["Normal blood loss", "Postpartum haemorrhage", "Anaemia", "Haematuria"], correct: 1,
    answer: "PPH is blood loss ≥500ml after vaginal (≥1000ml after cesarean) delivery.",
  }),
  Q("Which of the following is a classic feature of placenta praevia?", "MCQ", "NEWBIE", 1, {
    options: ["Painful bleeding", "Painless, recurrent bright red bleeding", "Constant abdominal pain", "Backache only"], correct: 1,
    answer: "Placenta praevia causes painless bright red bleeding.",
  }),
  Q("Pre-eclampsia is defined as new-onset hypertension with:", "MCQ", "NEWBIE", 1, {
    options: ["Oedema only", "Proteinuria or end-organ dysfunction after 20 weeks", "Glycosuria", "Polyhydramnios"], correct: 1,
    answer: "Pre-eclampsia = hypertension + proteinuria/end-organ involvement after 20 weeks.",
  }),
  Q("A convulsion occurring in a woman with pre-eclampsia is termed:", "MCQ", "NEWBIE", 1, {
    options: ["Epilepsy", "Eclampsia", "Syncope", "Hysteria"], correct: 1,
    answer: "Eclampsia is generalized convulsions in pre-eclampsia.",
  }),
  Q("Which of the following is a risk factor for pre-eclampsia?", "MCQ", "NEWBIE", 1, {
    options: ["Multiparity", "Primigravida and family history", "Advanced maternal age only", "Low BMI"], correct: 1,
    answer: "Primigravida, family history, obesity and multiple pregnancy are risk factors.",
  }),
  Q("Obstructed labor may lead to which long-term complication?", "MCQ", "NEWBIE", 1, {
    options: ["Polyhydramnios", "Vesico-vaginal fistula", "Placenta praevia", "Twin pregnancy"], correct: 1,
    answer: "Prolonged obstructed labor can cause vesico-vaginal fistula from tissue pressure necrosis.",
  }),
  Q("A breech presentation is suspected when the firm, round, ballotable part felt at the fundus is the:", "MCQ", "NEWBIE", 1, {
    options: ["Head", "Foot", "Back", "Shoulder"], correct: 0,
    answer: "In breech, the head is felt at the fundus.",
  }),
  Q("Which of the following is a cause of hyperemesis gravidarum?", "MCQ", "NEWBIE", 1, {
    options: ["Low hCG", "High hCG levels and hormonal changes", "High iron", "Low estrogen"], correct: 1,
    answer: "Hyperemesis is associated with high hCG and hormonal changes.",
  }),
  Q("Retained placenta is diagnosed when the placenta is not delivered within:", "MCQ", "NEWBIE", 1, {
    options: ["5 minutes", "30 minutes of active management", "2 hours", "24 hours"], correct: 1,
    answer: "Retained placenta: not expelled within 30 minutes (with active management).",
  }),
  Q("Which of the following is a symptom of ectopic pregnancy?", "MCQ", "NEWBIE", 1, {
    options: ["Amenorrhea, abdominal pain and vaginal bleeding", "Painless bleeding only", "Backache only", "Polyuria"], correct: 0,
    answer: "Classic triad: amenorrhea, lower abdominal pain, vaginal bleeding.",
  }),
  Q("Miscarriage is defined as pregnancy loss before:", "MCQ", "NEWBIE", 1, {
    options: ["12 weeks", "Viability (24 weeks / 500g)", "37 weeks", "40 weeks"], correct: 1,
    answer: "Abortion/miscarriage is loss before viability (24 weeks).",
  }),
  Q("A pregnant woman with Hb below 11g/dL has:", "MCQ", "NEWBIE", 1, {
    options: ["Normal Hb", "Anaemia", "Polycythaemia", "Thalassaemia always"], correct: 1,
    answer: "Anaemia in pregnancy is Hb <11g/dL (WHO).",
  }),
  Q("The most common cause of anaemia in pregnancy is:", "MCQ", "NEWBIE", 1, {
    options: ["Vitamin B12 deficiency", "Iron deficiency", "Folate excess", "Sickle cell"], correct: 1,
    answer: "Iron deficiency is the most common cause of anaemia in pregnancy.",
  }),
  Q("Define postpartum haemorrhage.", "SHORT", "NEWBIE", 2, {
    answer: "Blood loss ≥500ml after vaginal delivery or ≥1000ml after cesarean, within 24h (primary) or later (secondary).",
  }),
  Q("State two (2) signs of severe pre-eclampsia.", "SHORT", "NEWBIE", 2, {
    answer: "Examples: severe headache; visual disturbances; epigastric pain; BP ≥160/110; proteinuria; oliguria; convulsions; pulmonary oedema.",
  }),
  Q("List three (3) types of malpresentation.", "SHORT", "NEWBIE", 2, {
    answer: "Breech, transverse/oblique lie, face, brow, compound presentation.",
  }),
  Q("What are the 4 Ts of primary PPH?", "SHORT", "NEWBIE", 2, {
    answer: "Tone (uterine atony), Trauma (lacerations/rupture), Tissue (retained placenta), Thrombin (coagulopathy).",
  }),
  // ---- INTERMEDIATE ----
  Q("The single most important initial step in managing a woman with antepartum haemorrhage is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Immediate vaginal examination", "Resuscitation and assessment of maternal and fetal status", "Ultrasound only", "Discharge home"], correct: 1,
    answer: "ABC resuscitation and assessment precede any further management; avoid VE until placenta praevia excluded.",
  }),
  Q("In abruptio placentae, the most characteristic finding is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Painless bleeding", "Painful, tense, tender uterus", "Soft, non-tender uterus", "Absent contractions"], correct: 1,
    answer: "Abruption presents with pain and a tense, tender uterus (concealed or revealed bleeding).",
  }),
  Q("Vaginal examination in suspected placenta praevia is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Always safe", "Contraindicated until ultrasound excludes the diagnosis", "Necessary to confirm", "Only safe after 37 weeks"], correct: 1,
    answer: "VE in placenta praevia may precipitate torrential haemorrhage.",
  }),
  Q("Which drug is the first-line anticonvulsant for eclampsia?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Diazepam", "Magnesium sulfate", "Phenytoin", "Carbamazepine"], correct: 1,
    answer: "Magnesium sulfate is the drug of choice for preventing/treating eclampsia.",
  }),
  Q("In the management of PPH, after uterine massage the next priority is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Observation", "Uterotonics (oxytocin) and assess for retained tissue/trauma", "Discharge", "Antibiotics"], correct: 1,
    answer: "Tone-first management uses uterotonics promptly; then exclude trauma/retained tissue.",
  }),
  Q("Ergometrine is avoided in which condition?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Uterine atony", "Hypertension/pre-eclampsia", "Retained placenta", "Twin pregnancy"], correct: 1,
    answer: "Ergometrine causes vasoconstriction and hypertension; avoid in hypertensive disorders.",
  }),
  Q("Which of the following is a feature of HELLP syndrome?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Haemolysis, elevated liver enzymes, low platelets", "High platelets and low enzymes", "Hyperglycaemia", "Polycythaemia"], correct: 0,
    answer: "HELLP = Haemolysis, Elevated Liver enzymes, Low Platelets.",
  }),
  Q("The essential management of gestational diabetes mellitus begins with:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Immediate insulin", "Diet and lifestyle modification with glucose monitoring", "Metformin always", "Early delivery"], correct: 1,
    answer: "GDM is initially managed with diet, exercise and glucose monitoring.",
  }),
  Q("Rhesus-negative unsensitized mothers receive anti-D immunoglobulin to prevent:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Anaemia", "Rhesus isoimmunization (haemolytic disease of the newborn)", "Gestational diabetes", "Postnatal depression"], correct: 1,
    answer: "Anti-D prevents maternal sensitization and HDN in future pregnancies.",
  }),
  Q("The most important risk of polyhydramnios during labor is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Cord prolapse", "Postnatal depression", "Breast engorgement", "Neonatal jaundice"], correct: 0,
    answer: "Excess liquor predisposes to cord prolapse and malpresentation.",
  }),
  Q("Which complication is most associated with monochorionic twins?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Twin-to-twin transfusion syndrome", "Dystocia only", "Ectopic", "Placenta accreta"], correct: 0,
    answer: "Monochorionic twins share placental vessels, risking TTTS.",
  }),
  Q("A woman at 30 weeks with placenta praevia and no bleeding for 2 weeks is best managed by:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Immediate delivery", "Expectant management with admission/monitoring, steroids and avoiding vaginal examination", "Home rest without review", "Forcing induction"], correct: 1,
    answer: "Expectant management with monitoring, corticosteroids for lung maturity and planned delivery is appropriate.",
  }),
  Q("The definitive treatment of uterine rupture is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Oxytocin infusion", "Immediate laparotomy", "Antibiotics only", "Analgesia and observation"], correct: 1,
    answer: "Uterine rupture requires immediate laparotomy (repair or hysterectomy).",
  }),
  Q("Which of the following indicates cord prolapse?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Meconium", "Cord felt at or beyond the cervix with membranes ruptured", "Placenta delivery first", "Fetal hiccups"], correct: 1,
    answer: "Cord prolapse is the cord presenting through the cervix after membrane rupture.",
  }),
  Q("Which of the following is a neonatal complication of gestational diabetes?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Hypoglycaemia", "Hyperglycaemia at birth", "Polycythaemia is not seen", "Tall stature at birth"], correct: 0,
    answer: "Fetal hyperinsulinism causes neonatal hypoglycaemia after birth.",
  }),
  Q("State the steps you would take in the first 5 minutes of managing a massive PPH.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Call for help; start ABC with IV fluids and oxygen; massage the uterus; give IV/IM oxytocin; assess for retained tissue and trauma; monitor blood loss and vital signs; give tranexamic acid; escalate for theatre/blood; document.",
  }),
  Q("Explain the mechanism by which magnesium sulfate prevents eclampsia.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Magnesium sulfate reduces neuronal excitability, blocks NMDA receptors and calcium channels, reduces cerebral vasospasm and excitatory neurotransmitter release, thereby preventing and terminating eclamptic seizures; also causes peripheral vasodilation.",
  }),
  Q("Describe the management of a woman presenting with a ruptured ectopic pregnancy.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Resuscitate (IV fluids, oxygen, blood); urgent surgical referral (salpingectomy); treat shock; monitor Hb and vital signs; provide analgesia; anti-D if Rhesus negative; postoperative care and counseling.",
  }),
  Q("Differentiate between threatened, incomplete and missed abortion.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Threatened: bleeding with closed cervix and viable pregnancy. Incomplete: products partially expelled, open cervix, continuing bleeding. Missed: fetal death retained in utero with closed cervix; may show brownish discharge and shrinking symptoms.",
  }),
  Q("Outline the management of severe pre-eclampsia before transfer to a higher level of care.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Assess and stabilize: IV access, monitor BP/fetal heart; magnesium sulfate loading dose if convulsions; antihypertensives (labetalol/nifedipine); position in left lateral; control seizures; arrange urgent transfer with a skilled escort; avoid ergometrine; prepare for delivery; document.",
  }),
  Q("Explain the prevention of postpartum haemorrhage in a low-resource setting.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Antenatal: treat anaemia, identify risk. Intrapartum: active management of third stage with oxytocin/misoprostol, skilled attendance. Postpartum: early breastfeeding, monitoring of lochia, bladder care, awareness of danger signs, community birth preparedness, and availability of emergency transport and uterotonics.",
  }),
  // ---- ADVANCED ----
  Q("In a woman with abruptio placentae and fetal death, the priority is:", "MCQ", "ADVANCED", 2, {
    options: ["Elective cesarean", "Assessment and correction of coagulopathy and maternal stabilization", "Wait for spontaneous labor", "Forceps delivery"], correct: 1,
    answer: "Maternal safety, including coagulopathy management, takes priority; mode of delivery follows.",
  }),
  Q("Which of the following is the strongest predictor of a future trial of labor success after a previous cesarean?", "MCQ", "ADVANCED", 2, {
    options: ["Maternal age over 40", "Previous vaginal birth (especially successful VBAC)", "Short interpregnancy interval", "Recurrent indication"], correct: 1,
    answer: "A previous vaginal birth is the strongest predictor of VBAC success.",
  }),
  Q("In shoulder dystocia, after McRoberts and suprapubic pressure fail, the next appropriate manoeuvre is:", "MCQ", "ADVANCED", 2, {
    options: ["Fundal pressure", "Posterior arm delivery or 'all-fours' rotation", "Immediate symphysiotomy", "Vaginal pushing harder"], correct: 1,
    answer: "Progression includes internal rotational manoeuvres (Woods', Rubin's) or posterior arm delivery.",
  }),
  Q("A woman in labor has Bandl's ring and features of obstructed labor. The management is:", "MCQ", "ADVANCED", 2, {
    options: ["Oxytocin augmentation", "Immediate cesarean section after resuscitation", "Forceps", "Vaginal examination only"], correct: 1,
    answer: "Obstructed labor with Bandl's ring requires emergency cesarean after resuscitation.",
  }),
  Q("Which of the following is a sign of impending uterine rupture in a scarred uterus?", "MCQ", "ADVANCED", 2, {
    options: ["Painless contractions", "Tenderness over the scar, abnormal CTG, vaginal bleeding, cessation of contractions", "High fetal heart", "Reduced contractions"], correct: 1,
    answer: "Scar tenderness, fetal distress, bleeding and contraction changes signal impending rupture.",
  }),
  Q("The recommended treatment of choice for an ectopic pregnancy with rising hCG and a live ectopic mass <3.5cm is:", "MCQ", "ADVANCED", 2, {
    options: ["Surgery always", "Methotrexate (medical management) in selected cases", "Observation alone", "Radiotherapy"], correct: 1,
    answer: "Methotrexate is used for small unruptured ectopics with specific criteria.",
  }),
  Q("Which complication is most feared in a placenta praevia accreta?", "MCQ", "ADVANCED", 2, {
    options: ["Neonatal jaundice", "Catastrophic haemorrhage and hysterectomy", "Postnatal depression", "Breast engorgement"], correct: 1,
    answer: "Accreta causes intractable bleeding often requiring hysterectomy.",
  }),
  Q("A fetus of a diabetic mother at term is most at risk of:", "MCQ", "ADVANCED", 2, {
    options: ["Small for dates", "Macrosomia and shoulder dystocia", "Post-maturity only", "Anencephaly"], correct: 1,
    answer: "Fetal hyperinsulinism drives macrosomia and shoulder dystocia risk.",
  }),
  Q("Which investigation confirms the diagnosis of GDM?", "MCQ", "ADVANCED", 2, {
    options: ["Random blood sugar", "Oral glucose tolerance test (OGTT)", "Urine ketones", "HbA1c alone"], correct: 1,
    answer: "OGTT is the diagnostic test for GDM.",
  }),
  Q("In puerperal sepsis, the most appropriate first-line antibiotic strategy is:", "MCQ", "ADVANCED", 2, {
    options: ["Single penicillin", "Broad-spectrum antibiotics (e.g., clindamycin + gentamicin) after cultures", "No antibiotics", "Antifungals"], correct: 1,
    answer: "Broad-spectrum cover for mixed aerobic/anaerobic infection is standard after cultures.",
  }),
  Q("The best predictor of uterine rupture in a VBAC is:", "MCQ", "ADVANCED", 2, {
    options: ["Maternal age", "Intrapartum use of oxytocin/PGE2 and fetal distress pattern", "Fetal sex", "Length of labor alone"], correct: 1,
    answer: "Oxytocin/augmentation and non-reassuring fetal status are key rupture predictors.",
  }),
  Q("Which of the following is the immediate priority when a cord prolapse is diagnosed?", "MCQ", "ADVANCED", 2, {
    options: ["Amniotomy", "Elevate the presenting part, position the mother, and prepare for urgent delivery", "Oxytocin", "Wait 30 minutes"], correct: 1,
    answer: "Elevating the presenting part (manual or bladder filling) reduces cord compression while arranging delivery.",
  }),
  Q("Describe the steps for manual removal of a retained placenta.", "SHORT", "ADVANCED", 3, {
    answer: "Explain and consent; IV access and analgesia (or anaesthesia); empty bladder; controlled cord traction attempt; asepsis; hand enters the uterus along the cord; find the cleavage plane; separate and remove placenta in one piece; check completeness; give antibiotics and uterotonics; monitor blood loss.",
  }),
  Q("Explain the use of tranexamic acid in PPH (WOMAN trial evidence).", "SHORT", "ADVANCED", 3, {
    answer: "Tranexamic acid (1g IV, repeat once if bleeding continues after 30 min) reduces death from bleeding by inhibiting fibrinolysis; most effective if given within 3 hours of onset; do not give after 3 hours for bleeding death benefit.",
  }),
  Q("Outline the intrapartum management of a twin pregnancy where the first twin is vertex.", "SHORT", "ADVANCED", 3, {
    answer: "Deliver in theatre with anaesthesia and neonatal teams; continuous CTG; active management of third stage; monitor for malpresentation and cord prolapse of the second twin; assess the second twin by ultrasound/VE; deliver by cesarean if malpresentation or distress; prevent PPH with uterotonics.",
  }),
  Q("Discuss the management of a woman with a previous stillbirth who is now pregnant.", "ESSAY", "ADVANCED", 6, {
    answer: "Early booking and detailed history of the cause; targeted investigations (thrombophilia, diabetes, infection); increased surveillance (growth scans, Dopplers, fetal movement and CTG); psychological support for anxiety and grief; individualized birth plan; clear communication; bereavement follow-up and family planning.",
  }),
  Q("Analyze the causes and management of uterine inversion.", "ESSAY", "ADVANCED", 6, {
    answer: "Causes: excessive cord traction on a fundal placenta, fundal pressure, uterine atony. Features: shock out of proportion, absence of fundus, mass in vagina. Management: resuscitate, call help, attempt manual replacement (if placenta attached, replace after removal only if already separated), tocolysis/anaesthesia, hydrostatic or surgical reduction, replace and hold in place, uterotonics, antibiotics, monitor.",
  }),
  // ---- PROFESSIONAL ----
  Q("A woman presents at 34 weeks with a BP of 170/115 and right upper quadrant pain. Immediate management includes:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Discharge with analgesics", "Magnesium sulfate, antihypertensives, urgent delivery planning and corticosteroid therapy", "Wait 48 hours", "Oxytocin induction now"], correct: 1,
    answer: "Severe pre-eclampsia/HELLP needs MgSO4, BP control, steroids and timed urgent delivery.",
  }),
  Q("Which of the following is the most appropriate uterotonic sequence for refractory PPH?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Oxytocin → ergometrine (if not hypertensive) → carboprost → misoprostol", "Misoprostol only", "Ergometrine first always", "No sequence needed"], correct: 0,
    answer: "Stepwise escalation of uterotonics is recommended, tailoring to contraindications.",
  }),
  Q("In a woman with placenta praevia accreta, the recommended approach is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Attempt manual placenta removal", "Planned multidisciplinary cesarean with potential hysterectomy and blood product availability", "Vaginal delivery always", "Hysterotomy without planning"], correct: 1,
    answer: "Antenatally diagnosed accreta warrants a planned, multidisciplinary cesarean-hysterectomy strategy.",
  }),
  Q("Which finding in a postpartum woman with sepsis suggests septic shock?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Temperature 38°C with normal BP", "Hypotension, tachycardia, reduced urine output, altered consciousness", "Mild perineal tenderness", "Normal WBC"], correct: 1,
    answer: "End-organ hypoperfusion defines septic shock.",
  }),
  Q("A trial of labor after cesarean should be discontinued immediately when:", "MCQ", "PROFESSIONAL", 2, {
    options: ["The woman requests it and it is appropriate", "There is scar tenderness with abnormal CTG", "Progress is slow at 6cm", "The woman is a primigravida-like"], correct: 1,
    answer: "Suspected rupture (scar pain + CTG abnormality) mandates emergency cesarean.",
  }),
  Q("Formulate the management of HELLP syndrome at 36 weeks.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Confirm diagnosis (LFTs, platelets, LDH); treat hypertension; magnesium sulfate; corticosteroids if <34 weeks (and per protocol); deliver at a suitable time (often promptly at 36 weeks); correct coagulopathy if needed; postpartum surveillance for recovery and complications.",
  }),
  Q("Develop a management plan for a woman with suspected amniotic fluid embolism.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Immediate ABC support with high-flow oxygen and intubation if needed; treat cardiovascular collapse (fluids, vasopressors); manage coagulopathy (blood products, fibrinogen); correct DIC; treat pulmonary hypertension; ICU transfer; multidisciplinary care.",
  }),
  Q("Critically evaluate the role of expectant versus interventional management of preterm prelabour rupture of membranes at 32 weeks.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Expectant management with antibiotics (erythromycin), corticosteroids, surveillance for chorioamnionitis and fetal wellbeing to allow lung maturity, balanced against risk of ascending infection, cord prolapse and abruption; delivery when infection, fetal compromise or maturity reached; the midwife monitors temperature, contractions, liquor colour and CTG.",
  }),
  Q("Design a comprehensive plan to reduce maternal deaths from postpartum haemorrhage in a district hospital.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Prevention: antenatal anaemia screening and treatment, risk identification, active management of third stage. Preparation: protocols, drills/simulation, uterotonic stocks, blood transfusion capacity, theatre readiness. Detection: standardized blood loss measurement, early warning scores. Response: escalation pathway, tranexamic acid, surgical measures (B-Lynch, balloon tamponade, hysterectomy), team communication. Audit and feedback, data tracking, and community education on danger signs.",
  }),
  Q("Evaluate the evidence and practice for magnesium sulfate in preventing cerebral palsy in preterm birth.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "MgSO4 given before preterm birth (<32 weeks) reduces the risk of cerebral palsy and gross motor dysfunction; recommended antenatal neuroprotective dosing; criteria for use, timing, monitoring for toxicity (loss of reflexes, respiratory depression), and contraindications (myasthenia, renal failure) are integrated into protocols.",
  }),
];