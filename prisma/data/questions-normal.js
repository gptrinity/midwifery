// Questions: Normal Midwifery

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- NEWBIE ----
  Q("The recommended first antenatal visit should ideally occur before:", "MCQ", "NEWBIE", 1, {
    options: ["20 weeks", "12 weeks", "28 weeks", "36 weeks"], correct: 1,
    answer: "Booking ideally occurs before 12 weeks of gestation.",
  }),
  Q("Which of the following is a sign of true labor?", "MCQ", "NEWBIE", 1, {
    options: ["Irregular Braxton Hicks contractions", "Regular contractions causing progressive cervical dilatation", "Increased fetal movements", "Backache only"], correct: 1,
    answer: "True labor shows regular contractions with cervical effacement and dilatation.",
  }),
  Q("The first stage of labor ends with:", "MCQ", "NEWBIE", 1, {
    options: ["Rupture of membranes", "Full dilatation of the cervix (10cm)", "Birth of the baby", "Delivery of the placenta"], correct: 1,
    answer: "The first stage ends at full cervical dilatation (10 cm).",
  }),
  Q("What is the duration of the third stage of labor?", "MCQ", "NEWBIE", 1, {
    options: ["1-2 hours", "5-15 minutes (up to 30)", "Seconds", "24 hours"], correct: 1,
    answer: "The third stage lasts about 5-15 minutes (up to 30).",
  }),
  Q("The 'show' in labor refers to:", "MCQ", "NEWBIE", 1, {
    options: ["The presenting part", "Blood-stained mucus plug discharge", "Contractions", "Ruptured membranes"], correct: 1,
    answer: "The show is the blood-stained mucus plug discharged from the cervix.",
  }),
  Q("Which of the following is a minor disorder of pregnancy?", "MCQ", "NEWBIE", 1, {
    options: ["Pre-eclampsia", "Heartburn", "Placenta praevia", "Gestational diabetes"], correct: 1,
    answer: "Heartburn is a minor (physiological) disorder of pregnancy.",
  }),
  Q("Folic acid supplementation is most important for preventing:", "MCQ", "NEWBIE", 1, {
    options: ["Anaemia only", "Neural tube defects", "Constipation", "Gestational diabetes"], correct: 1,
    answer: "Folic acid prevents neural tube defects when given preconception and in early pregnancy.",
  }),
  Q("The average recommended total weight gain in a normal pregnancy is:", "MCQ", "NEWBIE", 1, {
    options: ["5-7 kg", "11.5-16 kg", "20-25 kg", "2-4 kg"], correct: 1,
    answer: "Average recommended total gain is about 11.5-16 kg depending on BMI.",
  }),
  Q("In a vertex occipito-anterior delivery, the head emerges by:", "MCQ", "NEWBIE", 1, {
    options: ["Flexion then extension (crowning)", "Pure rotation", "Straight expulsion", "Side bending"], correct: 0,
    answer: "Crowning and delivery of the head occur by extension after flexion.",
  }),
  Q("Exclusive breastfeeding is recommended for the first:", "MCQ", "NEWBIE", 1, {
    options: ["2 months", "6 months", "12 months", "3 months"], correct: 1,
    answer: "WHO recommends exclusive breastfeeding for 6 months.",
  }),
  Q("Lochia rubra is characterized by being:", "MCQ", "NEWBIE", 1, {
    options: ["Pale and watery", "Red and blood-stained (first 3-4 days)", "Yellowish white", "Green"], correct: 1,
    answer: "Lochia rubra is red blood-stained in the first 3-4 days postpartum.",
  }),
  Q("The puerperium lasts approximately:", "MCQ", "NEWBIE", 1, {
    options: ["6 weeks", "2 weeks", "6 months", "1 week"], correct: 0,
    answer: "The puerperium is about 6 weeks after delivery.",
  }),
  Q("Uterine involution is assessed by:", "MCQ", "NEWBIE", 1, {
    options: ["Fundal height descent", "Breast size", "Foot size", "Blood pressure"], correct: 0,
    answer: "Involution is monitored by the descent of the uterine fundus.",
  }),
  Q("Which of the following is an advantage of breastfeeding?", "MCQ", "NEWBIE", 1, {
    options: ["Immunity for the baby", "Cost savings", "Bonding", "All of the above"], correct: 3,
    answer: "Breastfeeding provides immunity, bonding, nutrition and birth-spacing.",
  }),
  Q("The correct way to hold a newborn for feeding is to ensure:", "MCQ", "NEWBIE", 1, {
    options: ["The baby faces away from the breast", "Proper positioning and attachment with the whole body facing the mother", "Feeding only from one breast always", "Bottle only at night"], correct: 1,
    answer: "The baby should face the breast with good attachment.",
  }),
  Q("What does the fundal height in centimetres approximate after 20 weeks?", "MCQ", "NEWBIE", 1, {
    options: ["The maternal weight in kg", "The gestational age in weeks", "The fetal weight in grams", "The maternal height"], correct: 1,
    answer: "Symphysio-fundal height in cm approximates gestational weeks after 20 weeks.",
  }),
  Q("Which position is recommended for a woman in active first stage of labor?", "MCQ", "NEWBIE", 1, {
    options: ["Flat supine only", "Upright/mobility positions of her choice", "Head-down", "Standing still"], correct: 1,
    answer: "Upright and mobile positions improve comfort and labor progress.",
  }),
  Q("The first breast secretion in pregnancy is called:", "MCQ", "NEWBIE", 1, {
    options: ["Mature milk", "Colostrum", "Hindmilk", "Fore milk"], correct: 1,
    answer: "Colostrum is the first secretion, present from mid-pregnancy.",
  }),
  Q("How often should a newborn be breastfed?", "MCQ", "NEWBIE", 1, {
    options: ["On demand, about 8-12 times daily", "Every 6 hours", "Once daily", "Twice weekly"], correct: 0,
    answer: "Newborns feed on demand, 8-12 times in 24 hours.",
  }),
  Q("Define the term 'primigravida'.", "SHORT", "NEWBIE", 2, {
    answer: "A woman pregnant for the first time.",
  }),
  Q("List three (3) signs of engagement of the fetal head.", "SHORT", "NEWBIE", 2, {
    answer: "Examples: head fixed and cannot be displaced (ballottement negative), fundal height falls/lower, easier breathing for the mother, increased urinary frequency.",
  }),
  Q("State two (2) objectives of antenatal care.", "SHORT", "NEWBIE", 2, {
    answer: "Examples: promote and maintain the health of mother and fetus; detect and manage complications early; prepare the mother for labor and parenting; provide health education.",
  }),
  Q("What is the recommended number of WHO antenatal care contacts?", "SHORT", "NEWBIE", 2, {
    answer: "At least 8 contacts (FANC - focused antenatal care).",
  }),
  // ---- INTERMEDIATE ----
  Q("In the active phase of the first stage of labor, cervical dilatation should progress at least:", "MCQ", "INTERMEDIATE", 2, {
    options: ["0.5 cm/hour", "1 cm/hour", "2 cm/hour", "5 cm/hour"], correct: 1,
    answer: "Active phase progress is about 1 cm/hour in primigravidas.",
  }),
  Q("The partograph alerts the midwife to prolonged labor when the cervix reaches:", "MCQ", "INTERMEDIATE", 2, {
    options: ["The action line", "The alert line", "Full dilatation", "The latent line"], correct: 0,
    answer: "Crossing the alert line signals potential delay; reaching the action line requires intervention.",
  }),
  Q("Which of the following is an appropriate use of the partograph?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Recording fetal growth", "Plotting cervical dilatation, descent, contractions and fetal heart", "Monitoring blood sugar", "Planning immunizations"], correct: 1,
    answer: "The partograph records labor progress and fetal/maternal wellbeing.",
  }),
  Q("Amniotomy (artificial rupture of membranes) is indicated for:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Precipitate labor", "Slow progress in active labor or to assess liquor", "Placenta praevia", "Prolonged second stage only"], correct: 1,
    answer: "Amniotomy may augment slow progress and allows assessment of liquor.",
  }),
  Q("The preferred analgesic for a woman in established labor with severe pain is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Aspirin", "Pethidine or epidural analgesia", "Paracetamol only", "Diazepam"], correct: 1,
    answer: "Systemic opioids (pethidine) or epidural provide effective labor analgesia.",
  }),
  Q("Which of the following supports the diagnosis of full cervical dilatation?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Cessation of contractions", "Rectal pressure and urge to push with confirmed 10cm on VE", "Rupture of membranes", "Mother feeling nauseous"], correct: 1,
    answer: "Full dilatation is confirmed by vaginal examination at 10 cm with maternal urge to bear down.",
  }),
  Q("Routine perineal management at delivery should:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Always include episiotomy", "Only perform episiotomy when indicated, with perineal support and warm compresses", "Never touch the perineum", "Always use vacuum"], correct: 1,
    answer: "Episiotomy is restricted to clear indications; spontaneous tears are preferred.",
  }),
  Q("Signs of placental separation include:", "MCQ", "INTERMEDIATE", 2, {
    options: ["A gush of blood, cord lengthening and rise of the fundus", "Cessation of lochia", "Uterine softening only", "Maternal fever"], correct: 0,
    answer: "Separation is signaled by a blood gush, cord lengthening and fundal rise.",
  }),
  Q("Active management of the third stage of labor reduces:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Postpartum haemorrhage", "Breast engorgement", "Neonatal jaundice", "Gestational diabetes"], correct: 0,
    answer: "AMTSL (uterotonic, controlled cord traction, uterine massage) reduces PPH.",
  }),
  Q("On the first postnatal day, lochia is best described as:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Serosa (pink)", "Rubra (red)", "Alba (white)", "Absent"], correct: 1,
    answer: "Lochia rubra is present for the first 3-4 days.",
  }),
  Q("A breastfeeding mother develops a red, tender, wedge-shaped area in one breast with fever. This is most likely:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Breast engorgement", "Mastitis", "Normal milk production", "Galactocele"], correct: 1,
    answer: "Mastitis presents with a tender wedge of erythema and systemic symptoms.",
  }),
  Q("Which of the following indicates good attachment during breastfeeding?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Only the tip of the nipple in the mouth", "Baby's chin touching the breast with wide-open mouth and lower lip rolled out", "Baby's nose buried flat against the breast", "Nipple pinched during feeding"], correct: 1,
    answer: "Good attachment: mouth wide, chin touching, lips flanged, areola more visible above.",
  }),
  Q("Contraindication to breastfeeding in a mother with HIV per current WHO guidance is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["None if on ART with suppressed viral load", "Always contraindicated", "Only in the first week", "Only for twins"], correct: 0,
    answer: "With ART and viral suppression, breastfeeding is recommended for its benefits.",
  }),
  Q("The most reliable sign that a newborn is receiving enough milk is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Crying frequency", "Adequate weight gain and 6+ wet diapers/day", "Length of feeds", "Breast fullness"], correct: 1,
    answer: "Weight gain and adequate wet diapers indicate sufficient intake.",
  }),
  Q("Which of the following foods is NOT appropriate for a lactating mother with an allergic-prone baby?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Increased fluids", "Iron-rich foods", "Excessive cow's milk only if it triggers symptoms", "Green leafy vegetables"], correct: 2,
    answer: "Restricting foods is only needed if a clear association is shown.",
  }),
  Q("Explain the difference between the alert line and the action line on the partograph.", "SHORT", "INTERMEDIATE", 3, {
    answer: "The alert line marks expected active-phase progress (1cm/hr); crossing it signals possible delay and closer monitoring. The action line is 4 hours to the right of the alert line; reaching it indicates prolonged/arrested labor requiring active intervention/review.",
  }),
  Q("Describe the steps of active management of the third stage of labor.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Give oxytocin (10 IU IM) with/just after birth of the anterior shoulder; delayed cord clamping 1-3 min in the well baby; controlled cord traction with uterine counter-traction during a contraction after signs of separation; and uterine massage after delivery of the placenta.",
  }),
  Q("State four (4) danger signs a pregnant woman should report immediately.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Vaginal bleeding; severe headache with blurred vision; swollen face/hands; fever; severe abdominal pain; reduced fetal movements; leaking of liquor; convulsions. Any four.",
  }),
  Q("Outline the immediate care of the newborn at birth.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Dry thoroughly; keep warm (skin-to-skin); clear airway if needed; assess breathing/cry/tone (Apgar); cord clamp after delay; eye prophylaxis; vitamin K; initiate breastfeeding within the first hour; identify the baby and record.",
  }),
  Q("Discuss the components and purpose of a postnatal assessment of the mother.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Assess vital signs, temperature (sepsis), blood pressure (pre-eclampsia), pulse; lochia (amount, colour, odour); uterine involution; perineal/wound healing; breasts and nipples; bladder and bowel function; emotional state (baby blues, depression screening); pain; and provide education on hygiene, nutrition, rest, contraception and danger signs.",
  }),
  Q("Explain how you would support a mother with sore nipples while maintaining breastfeeding.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Correct positioning and attachment; start on the less sore side; express a little milk to soften before latching; ensure full areola latch, not nipple only; air-dry nipples; apply expressed milk or pure lanolin; avoid soap and plastic liners; treat underlying causes (thrush, tongue-tie); reassure and continue frequent feeding.",
  }),
  // ---- ADVANCED ----
  Q("A primigravida at 41 weeks has an unengaged head with draining liquor. The midwife should suspect:", "MCQ", "ADVANCED", 2, {
    options: ["Normal finding", "Malpresentation or CPD", "Polyhydramnios", "Placenta praevia"], correct: 1,
    answer: "Failure of engagement at term with ROM suggests malpresentation or cephalopelvic disproportion.",
  }),
  Q("In a primigravida, the head normally engages by:", "MCQ", "ADVANCED", 2, {
    options: ["28 weeks", "36-38 weeks", "At the onset of the second stage", "After birth"], correct: 1,
    answer: "In primigravidas the head engages around 36-38 weeks.",
  }),
  Q("Which of the following indicates fetal compromise requiring urgent intervention during labor?", "MCQ", "ADVANCED", 2, {
    options: ["Fetal heart 140 bpm", "Variable decelerations with recovery and good variability", "Prolonged late decelerations with reduced variability", "Fetal movements felt by mother"], correct: 2,
    answer: "Late decelerations with reduced variability indicate hypoxia and need urgent action.",
  }),
  Q("Meconium-stained liquor during labor:", "MCQ", "ADVANCED", 2, {
    options: ["Is always normal", "May indicate fetal distress and requires close monitoring", "Requires immediate cesarean always", "Means the baby is term"], correct: 1,
    answer: "Meconium may signal fetal hypoxia; close fetal monitoring and appropriate neonatal care are needed.",
  }),
  Q("The most appropriate management of a prolonged active phase (no progress for 4 hours) with a vertex at -1 and adequate pelvis is:", "MCQ", "ADVANCED", 2, {
    options: ["Immediate cesarean", "Review by a senior clinician and consider oxytocin augmentation with monitoring", "Wait another 8 hours", "Forceps delivery now"], correct: 1,
    answer: "Arrest in active phase with adequate pelvis and no fetal distress may be managed with oxytocin augmentation after senior review.",
  }),
  Q("Routine prophylactic oxytocin is given during the third stage primarily to:", "MCQ", "ADVANCED", 2, {
    options: ["Prevent retained placenta", "Reduce postpartum haemorrhage by improving uterine tone", "Accelerate placental separation only", "Prevent infection"], correct: 1,
    answer: "Oxytocin improves uterine contraction, reducing PPH.",
  }),
  Q("A mother has a second-degree perineal tear. This involves:", "MCQ", "ADVANCED", 2, {
    options: ["Skin only", "Skin and perineal muscles, not the anal sphincter", "Anal sphincter", "Rectal mucosa"], correct: 1,
    answer: "Second-degree tears involve the perineal muscles but not the anal sphincter.",
  }),
  Q("Which of the following is a predisposing factor for shoulder dystocia?", "MCQ", "ADVANCED", 2, {
    options: ["Maternal diabetes with macrosomia", "Preterm small baby", "Oligohydramnios", "First trimester bleeding"], correct: 0,
    answer: "Macrosomia, especially in diabetes, predisposes to shoulder dystocia.",
  }),
  Q("An involution assessment on day 3 postpartum expects the fundus to be:", "MCQ", "ADVANCED", 2, {
    options: ["At the umbilicus", "About 2 fingerbreadths below the umbilicus", "At the xiphisternum", "In the pelvis"], correct: 1,
    answer: "The fundus descends about 1 cm/day; by day 3 it is a few cm below the umbilicus.",
  }),
  Q("Which finding differentiates breast engorgement from mastitis?", "MCQ", "ADVANCED", 2, {
    options: ["Both have fever", "Mastitis has systemic symptoms (fever, malaise) and localized inflammation; engorgement is bilateral and afebrile", "Engorgement is unilateral", "Mastitis is painless"], correct: 1,
    answer: "Engorgement is typically bilateral, bilateral firmness without fever; mastitis is localized with systemic illness.",
  }),
  Q("In the second stage of labor, the recommended pushing technique is:", "MCQ", "ADVANCED", 2, {
    options: ["Sustained Valsalva from the start", "Physiological pushing with the urge and maternal position of choice", "Pushing while flat on the back only", "Never pushing"], correct: 1,
    answer: "Physiological pushing, driven by the urge and maternal choice of position, is recommended.",
  }),
  Q("Which sign indicates that the fetal head is crowning?", "MCQ", "ADVANCED", 2, {
    options: ["The head remains above the pelvic brim", "The widest diameter of the head is distending the vulva and does not recede", "Only the vertex is visible between contractions", "The face appears first"], correct: 1,
    answer: "Crowning occurs when the biparietal diameter distends the vulva and the head no longer recedes.",
  }),
  Q("Describe the management of a woman who develops a postpartum temperature of 38.5°C.", "SHORT", "ADVANCED", 3, {
    answer: "Assess and document; examine for source (uterus - endometritis, perineal wound, breasts - mastitis, urinary tract, chest); perform cultures/urinalysis; administer antibiotics as per protocol after septic screen; supportive care (fluids, antipyretics); escalate/refer; monitor and evaluate.",
  }),
  Q("Explain the principles of perineal care and the management of a third-degree tear.", "SHORT", "ADVANCED", 3, {
    answer: "Third-degree tears involve the anal sphincter; require repair in theatre by a trained clinician, antibiotics, analgesia, laxatives/stool softeners to prevent constipation, perineal hygiene, wound care, physiotherapy referral, and follow-up to assess healing and continence.",
  }),
  Q("Discuss the role of the partograph in reducing maternal and fetal morbidity.", "ESSAY", "ADVANCED", 6, {
    answer: "The partograph provides a standardized, visual record of labor; detects prolonged and obstructed labor early; triggers timely referral and intervention; prevents uterine rupture, fistulae, sepsis and fetal asphyxia; guides decision-making and documentation; and is a WHO-recommended tool in all births.",
  }),
  Q("Analyze the benefits and risks of epidural analgesia in labor.", "ESSAY", "ADVANCED", 6, {
    answer: "Benefits: excellent pain relief, maternal comfort, reduced stress response, useful in hypertension/pre-eclampsia, allows instrumental delivery smoothly. Risks: hypotension, prolonged labor and increased instrumental delivery, urinary retention, fever, headache (dural puncture), motor block, rare neurological complications; requires monitoring and skilled anaesthetic cover.",
  }),
  // ---- PROFESSIONAL ----
  Q("A multiparous woman has a prolonged second stage (2 hours) with a fully dilated cervix and the head at +1, occipito-posterior. The most appropriate next step is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Immediate cesarean", "Senior review; optimize position (all-fours), encourage maternal effort, consider augmentation/ventouse if head descends", "Continue waiting indefinitely", "Fundal pressure"], correct: 1,
    answer: "Occipito-posterior with delay requires senior review, positioning and judicious instrumental delivery; fundal pressure is unsafe.",
  }),
  Q("In a woman with previous cesarean undergoing trial of labor, which of the following is an absolute contraindication?", "MCQ", "PROFESSIONAL", 2, {
    options: ["One previous lower-segment scar", "Previous classical (upper-segment) cesarean", "Mild gestational hypertension", "Vertex presentation"], correct: 1,
    answer: "A classical scar carries a high rupture risk and precludes trial of labor.",
  }),
  Q("A patient in labor has a documented fetal heart of 90 bpm with late decelerations despite oxygen and repositioning. Your immediate action is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Observe for 1 hour", "Urgent delivery (assisted vaginal or cesarean) with paediatric team", "Increase IV fluids only", "Perform amniotomy only"], correct: 1,
    answer: "Fetal bradycardia with late decelerations indicates acute hypoxia requiring expedited delivery.",
  }),
  Q("Which uterotonic is preferred for preventing PPH when oxytocin is unavailable or contraindicated in cardiac disease?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Ergometrine", "Carboprost (15-methyl PGF2α)", "Misoprostol", "Syntometrine"], correct: 2,
    answer: "Misoprostol is the preferred option for prophylaxis when oxytocin is unavailable; ergometrine and carboprost raise BP/contract vessels and are risky in hypertension/cardiac disease.",
  }),
  Q("The recommended initial management of shoulder dystocia is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Fundal pressure", "McRoberts' manoeuvre and suprapubic pressure", "Immediate cesarean", "Episiotomy alone"], correct: 1,
    answer: "McRoberts' manoeuvre with suprapubic pressure resolves most shoulder dystocia; fundal pressure is harmful.",
  }),
  Q("Interpret the clinical significance of a non-reassuring CTG with recurrent late decelerations in a preterm labor at 34 weeks.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Suggests utero-placental insufficiency with fetal hypoxia; assess liquor, perform scalp sampling if available, consider corticosteroids already given, expedite delivery (cesarean) with neonatal team, and provide neuroprotection (MgSO4) if preterm.",
  }),
  Q("Develop a stepwise algorithm for a woman who has had a previous massive PPH (blood loss >2000ml).", "SHORT", "PROFESSIONAL", 3, {
    answer: "Preconception review and correction of anaemia; delivery in a facility with blood products and theatre; skilled staff; active management of third stage; intraoperative uterotonics (oxytocin + ergometrine if not hypertensive); tranexamic acid; peripartum hysterectomy and interventional radiology preparedness; postpartum surveillance and family planning counseling.",
  }),
  Q("Critically evaluate the evidence for water immersion during labor.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Water immersion in the first stage reduces pain and need for analgesia, shortens labor and improves maternal satisfaction with few adverse effects; immersion in the second stage/waterbirth remains more controversial (rare infection, cord avulsion, neonatal water aspiration risks); requires clear protocols, temperature control and appropriate candidate selection.",
  }),
  Q("Formulate a care plan for a primigravida at 39 weeks with a breech presentation and a normal-sized fetus.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Confirm breech type and attitude by ultrasound; offer external cephalic version (36-37 weeks ideally, here discuss risks/benefits); if breech persists, counsel on mode of delivery (planned cesarean vs. vaginal breech in selected cases with experienced team); ensure continuous CTG, skilled obstetrician, blood availability; plan neonatal team presence; document informed consent and fetal wellbeing.",
  }),
  Q("Explain how you would reduce the risk of neonatal hypoglycaemia in a baby of a diabetic mother.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Optimize maternal glycaemic control in pregnancy and intrapartum; ensure early and frequent breastfeeding; monitor neonatal blood glucose (within 30 min, at 2h and before feeds); feed early; use formula/gavage/dextrose if symptomatic or persistently low; avoid cold stress; observe for respiratory distress, jaundice and macrosomia-related birth trauma; involve paediatric team.",
  }),
];