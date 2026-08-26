// Questions: Applied Anatomy and Physiology

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- NEWBIE ----
  Q("Which of the following is the primary site of fertilization?", "MCQ", "NEWBIE", 1, {
    options: ["Uterus", "Ampulla of the fallopian tube", "Vagina", "Ovary"], correct: 1,
    answer: "Fertilization occurs in the ampullary region of the fallopian tube.",
  }),
  Q("The endometrium is the:", "MCQ", "NEWBIE", 1, {
    options: ["Muscular layer of the uterus", "Inner lining of the uterus", "Outer covering of the uterus", "Cervical gland"], correct: 1,
    answer: "The endometrium is the inner mucosal lining of the uterus.",
  }),
  Q("Which hormone is responsible for ovulation?", "MCQ", "NEWBIE", 1, {
    options: ["FSH surge", "LH surge", "Prolactin", "hCG"], correct: 1,
    answer: "The LH surge triggers ovulation.",
  }),
  Q("How many layers does the uterine wall have?", "MCQ", "NEWBIE", 1, {
    options: ["Two", "Three", "Four", "Five"], correct: 1,
    answer: "The uterus has three layers: perimetrium, myometrium, endometrium.",
  }),
  Q("The most favorable pelvic type for childbirth is:", "MCQ", "NEWBIE", 1, {
    options: ["Android", "Gynaecoid", "Platypelloid", "Anthropoid"], correct: 1,
    answer: "The gynaecoid (female) pelvis is most favorable for vaginal delivery.",
  }),
  Q("Which part of the fetal skull presents first in a normal vertex delivery?", "MCQ", "NEWBIE", 1, {
    options: ["Face", "Occiput", "Sinciput", "Ears"], correct: 1,
    answer: "The occiput leads in a normal occipito-anterior vertex delivery.",
  }),
  Q("The normal suboccipito-bregmatic diameter is approximately:", "MCQ", "NEWBIE", 1, {
    options: ["12.5 cm", "9.5 cm", "6.5 cm", "15 cm"], correct: 1,
    answer: "The suboccipito-bregmatic diameter is about 9.5 cm.",
  }),
  Q("Which structure produces hCG in early pregnancy?", "MCQ", "NEWBIE", 1, {
    options: ["Decidua", "Trophoblast", "Myometrium", "Fallopian tube"], correct: 1,
    answer: "The trophoblast produces human chorionic gonadotropin (hCG).",
  }),
  Q("Blood volume in pregnancy increases by approximately:", "MCQ", "NEWBIE", 1, {
    options: ["10%", "40-50%", "80%", "100%"], correct: 1,
    answer: "Blood volume increases by about 40-50% by term.",
  }),
  Q("The normal fetal heart rate ranges from:", "MCQ", "NEWBIE", 1, {
    options: ["60-80 bpm", "110-160 bpm", "170-200 bpm", "90-100 bpm"], correct: 1,
    answer: "The normal fetal heart rate is 110-160 beats per minute.",
  }),
  Q("The foramen ovale is a fetal shunt between the:", "MCQ", "NEWBIE", 1, {
    options: ["Right atrium and left atrium", "Pulmonary artery and aorta", "Umbilical artery and vein", "Left ventricle and aorta"], correct: 0,
    answer: "The foramen ovale shunts blood from the right atrium to the left atrium.",
  }),
  Q("Which hormone is responsible for the milk 'let-down' reflex?", "MCQ", "NEWBIE", 1, {
    options: ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"], correct: 1,
    answer: "Oxytocin causes milk ejection (let-down).",
  }),
  Q("Colostrum is characterized by being rich in:", "MCQ", "NEWBIE", 1, {
    options: ["Iron", "Immunoglobulins (antibodies)", "Vitamin K", "Carbohydrates only"], correct: 1,
    answer: "Colostrum is rich in immunoglobulins and protective factors.",
  }),
  Q("The normal umbilical cord contains:", "MCQ", "NEWBIE", 1, {
    options: ["Two arteries and one vein", "One artery and two veins", "Two arteries and two veins", "One artery and one vein"], correct: 0,
    answer: "The normal cord has two umbilical arteries and one umbilical vein.",
  }),
  Q("Which hormone maintains the corpus luteum in early pregnancy?", "MCQ", "NEWBIE", 1, {
    options: ["FSH", "hCG", "Oxytocin", "Aldosterone"], correct: 1,
    answer: "hCG maintains the corpus luteum which secretes progesterone.",
  }),
  Q("The ovum is released during which phase of the menstrual cycle?", "MCQ", "NEWBIE", 1, {
    options: ["Menstrual", "Ovulatory", "Secretory", "Ischemic"], correct: 1,
    answer: "Ovulation occurs mid-cycle during the ovulatory phase.",
  }),
  Q("The placenta is usually located in the:", "MCQ", "NEWBIE", 1, {
    options: ["Lower uterine segment", "Upper uterine segment", "Cervix", "Fallopian tube"], correct: 1,
    answer: "The placenta normally implants in the upper uterine segment (fundus/body).",
  }),
  Q("Progesterone is primarily produced by the corpus luteum during:", "MCQ", "NEWBIE", 1, {
    options: ["The follicular phase", "Early pregnancy before placental takeover", "Menstruation", "Ovulation"], correct: 1,
    answer: "The corpus luteum secretes progesterone in early pregnancy until the placenta takes over.",
  }),
  Q("The lactating breast secretes mature milk under the influence of:", "MCQ", "NEWBIE", 1, {
    options: ["FSH", "Prolactin and oxytocin", "Aldosterone", "Testosterone"], correct: 1,
    answer: "Prolactin promotes milk secretion; oxytocin promotes milk ejection.",
  }),
  Q("State the three layers of the uterine wall.", "SHORT", "NEWBIE", 2, {
    answer: "Perimetrium (outer serosa), myometrium (middle muscular layer), endometrium (inner mucosa).",
  }),
  Q("Name two (2) hormones involved in the menstrual cycle.", "SHORT", "NEWBIE", 2, {
    answer: "FSH, LH, estrogen, progesterone, GnRH.",
  }),
  Q("List the four (4) diameters of the fetal skull that are important in labor.", "SHORT", "NEWBIE", 2, {
    answer: "Suboccipito-bregmatic (9.5cm), occipito-frontal (11.5cm), mento-vertical (13.5cm), biparietal (9.5cm), bi-temporal (8cm). Any four acceptable.",
  }),
  Q("State the functions of the placenta.", "SHORT", "NEWBIE", 2, {
    answer: "Exchange of oxygen/nutrients/waste, hormone production (hCG, estrogen, progesterone, hPL), barrier function, immune protection, metabolic and storage functions.",
  }),
  // ---- INTERMEDIATE ----
  Q("Which of the following is a function of the myometrium?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Secreting estrogen", "Contracting during labor", "Producing milk", "Filtering blood"], correct: 1,
    answer: "The myometrium contracts during labor to expel the fetus.",
  }),
  Q("The 'false pelvis' differs from the 'true pelvis' because it:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Contains the pelvic organs of childbirth", "Lies above the pelvic brim and is not part of the birth canal", "Is formed only by the sacrum", "Is smaller in women"], correct: 1,
    answer: "The false pelvis lies above the pelvic brim; the true pelvis forms the birth canal.",
  }),
  Q("Physiological anaemia of pregnancy occurs because:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Red cells increase more than plasma", "Plasma volume increases proportionally more than red cell mass", "Iron absorption stops", "Blood loss at delivery begins early"], correct: 1,
    answer: "Plasma volume increases more than red cells, diluting haemoglobin.",
  }),
  Q("Supine hypotension in late pregnancy is caused by:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Increased cardiac output", "Compression of the inferior vena cava by the gravid uterus", "Low estrogen", "Dehydration"], correct: 1,
    answer: "The gravid uterus compresses the IVC in the supine position, reducing venous return.",
  }),
  Q("Which of the following best explains increased urinary frequency in early pregnancy?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Enlarged uterus pressing on the bladder", "Decreased renal blood flow", "Low progesterone", "Constipation"], correct: 0,
    answer: "The enlarging uterus presses on the bladder, reducing its capacity.",
  }),
  Q("The ductus arteriosus connects the:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Right atrium to left atrium", "Pulmonary artery to the descending aorta", "Umbilical vein to the liver", "Left ventricle to the right atrium"], correct: 1,
    answer: "The ductus arteriosus shunts blood from the pulmonary artery to the aorta.",
  }),
  Q("After birth, the ductus venosus closes because:", "MCQ", "INTERMEDIATE", 2, {
    options: ["The foramen ovale opens", "Umbilical venous flow ceases and the vessel constricts", "The lungs expand", "Prolactin rises"], correct: 1,
    answer: "Cessation of umbilical venous return triggers closure of the ductus venosus.",
  }),
  Q("Which hormone has a diabetogenic (anti-insulin) effect in pregnancy?", "MCQ", "INTERMEDIATE", 2, {
    options: ["hCG", "Human placental lactogen (hPL)", "Prolactin", "Oxytocin"], correct: 1,
    answer: "hPL antagonizes insulin, raising glucose for fetal use.",
  }),
  Q("The fetus receives the most oxygenated blood via the:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Umbilical artery", "Umbilical vein", "Aorta", "Pulmonary artery"], correct: 1,
    answer: "The umbilical vein carries oxygenated blood from the placenta to the fetus.",
  }),
  Q("Which of the following is NOT a physiological change of pregnancy in the kidney?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Increased GFR", "Glycosuria", "Decreased renal blood flow", "Hydronephrosis of pregnancy"], correct: 2,
    answer: "Renal blood flow and GFR INCREASE in pregnancy, not decrease.",
  }),
  Q("Hormone primarily responsible for maintaining uterine quiescence (relaxed uterus) during pregnancy:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Estrogen", "Progesterone", "Oxytocin", "Prolactin"], correct: 1,
    answer: "Progesterone maintains uterine quiescence during pregnancy.",
  }),
  Q("The transition from fetal to neonatal circulation is triggered mainly by:", "MCQ", "INTERMEDIATE", 2, {
    options: ["First breath and placental separation", "Cord clamping only", "Breastfeeding", "Vitamin K"], correct: 0,
    answer: "Breathing (lung expansion) and removal of the low-resistance placenta trigger circulatory transition.",
  }),
  Q("In a vertex presentation, the largest diameter engaging the pelvis is the:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Suboccipito-bregmatic", "Biparietal", "Occipito-frontal", "Mento-vertical"], correct: 1,
    answer: "The biparietal (9.5cm) diameter is the widest transverse diameter engaging in vertex presentation.",
  }),
  Q("Which of the following is true of the fetal haemoglobin (HbF)?", "MCQ", "INTERMEDIATE", 2, {
    options: ["It has lower oxygen affinity than adult Hb", "It has higher oxygen affinity than adult Hb", "It carries less oxygen", "It is produced only after birth"], correct: 1,
    answer: "HbF has a higher oxygen affinity, favoring oxygen transfer across the placenta.",
  }),
  Q("Milk production (galactopoiesis) is sustained mainly by:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Estrogen", "Prolactin stimulated by suckling", "hCG", "FSH"], correct: 1,
    answer: "Suckling maintains prolactin, sustaining milk production.",
  }),
  Q("Explain why the respiratory rate and tidal volume change in pregnancy.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Progesterone stimulates the respiratory centre, increasing tidal volume and minute ventilation (slight respiratory alkalosis), to meet the higher oxygen demand of mother and fetus; respiratory rate changes little.",
  }),
  Q("Describe the changes in the urinary tract during pregnancy.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Increased renal blood flow and GFR (~50%); reduced BUN/creatinine; glycosuria; dilatation of ureters and renal pelvis (hydronephrosis) predisposing to UTI; bladder displacement upward with reduced capacity and increased frequency.",
  }),
  Q("Outline the pathway of fetal blood from the placenta to the fetal heart.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Umbilical vein → ductus venosus → inferior vena cava → right atrium → foramen ovale → left atrium → left ventricle → aorta → systemic circulation; deoxygenated blood returns via arteries to placenta.",
  }),
  Q("Explain the mechanism of the milk let-down reflex.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Suckling stimulates nerve endings in the nipple → hypothalamus → posterior pituitary releases oxytocin → oxytocin contracts myoepithelial cells around the alveoli → milk is ejected (let-down); emotional factors (stress, anxiety) can inhibit the reflex.",
  }),
  Q("Discuss the functions of estrogen and progesterone in pregnancy.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Estrogen: uterine growth, increased blood flow, ductal breast development, sensitivity to oxytocin, helps prepare for lactation. Progesterone: maintains endometrium/uterine quiescence, prevents miscarriage, develops alveoli, relaxes smooth muscle (GI, ureters), raises basal temperature, reduces uterine irritability.",
  }),
  // ---- ADVANCED ----
  Q("Which diameter of the fetal skull is most relevant when the head is well flexed?", "MCQ", "ADVANCED", 2, {
    options: ["Mento-vertical", "Suboccipito-bregmatic", "Occipito-frontal", "Bi-temporal"], correct: 1,
    answer: "Good flexion presents the suboccipito-bregmatic diameter, the smallest engaging diameter.",
  }),
  Q("In a prolonged pregnancy, which placental change is most likely?", "MCQ", "ADVANCED", 2, {
    options: ["Increased function", "Aging with reduced transfer capacity and calcification", "Increased hormone output", "Increased blood flow"], correct: 1,
    answer: "Post-term placentae show aging changes: calcification, infarction and reduced transfer, risking fetal compromise.",
  }),
  Q("The 'uterine souffle' heard during auscultation is due to:", "MCQ", "ADVANCED", 2, {
    options: ["Fetal heart", "Maternal blood flow through the uterine vessels", "Fetal hiccups", "Bowel sounds"], correct: 1,
    answer: "The uterine souffle is produced by maternal blood flow in the uterine arteries.",
  }),
  Q("Which of the following best explains polyhydramnios in oesophageal atresia?", "MCQ", "ADVANCED", 2, {
    options: ["Increased fetal urine", "Impaired fetal swallowing of amniotic fluid", "Reduced placental transfer", "Maternal dehydration"], correct: 1,
    answer: "Impaired fetal swallowing of amniotic fluid causes accumulation (polyhydramnios).",
  }),
  Q("At which week does the uterus normally become an abdominal organ?", "MCQ", "ADVANCED", 2, {
    options: ["8 weeks", "12 weeks", "20 weeks", "36 weeks"], correct: 1,
    answer: "By about 12 weeks the fundus rises above the pelvis into the abdomen.",
  }),
  Q("The corpus luteum continues to function through early pregnancy because of:", "MCQ", "ADVANCED", 2, {
    options: ["Progesterone", "Luteotrophic action of hCG", "Estrogen", "Prolactin"], correct: 1,
    answer: "hCG exerts a luteotrophic effect, maintaining the corpus luteum.",
  }),
  Q("Which is the correct mechanism of the descent of the fetal head?", "MCQ", "ADVANCED", 2, {
    options: ["Flexion, engagement, descent, rotation", "Engagement, descent, flexion, internal rotation, crowning, extension, restitution, external rotation, expulsion", "Descent, extension, flexion, rotation", "Rotation, engagement, flexion, expulsion"], correct: 1,
    answer: "The mechanism follows: engagement → descent → flexion → internal rotation → crowning → extension → restitution → external rotation → expulsion.",
  }),
  Q("Why does maternal blood pressure normally fall in mid-pregnancy?", "MCQ", "ADVANCED", 2, {
    options: ["Increased progesterone leading to vasodilation and reduced peripheral resistance", "Reduced blood volume", "Anaemia", "Decreased cardiac output"], correct: 0,
    answer: "Progesterone-mediated vasodilation lowers peripheral resistance and BP in mid-pregnancy.",
  }),
  Q("Maternal thyroid activity in pregnancy:", "MCQ", "ADVANCED", 2, {
    options: ["Decreases", "Increases due to elevated TBG and hCG stimulation", "Is unchanged", "Stops completely"], correct: 1,
    answer: "Estrogen raises TBG and hCG stimulates the thyroid, increasing thyroid activity.",
  }),
  Q("Which of the following is an effect of relaxin in pregnancy?", "MCQ", "ADVANCED", 2, {
    options: ["Contraction of the uterus", "Softening of the cervix and pelvic ligaments", "Milk ejection", "Ovulation"], correct: 1,
    answer: "Relaxin softens the cervix and relaxes pelvic joints.",
  }),
  Q("Describe the physiological changes in the cardiovascular system that predispose to deep vein thrombosis in pregnancy.", "SHORT", "ADVANCED", 3, {
    answer: "Hypercoagulability (increased clotting factors II, VII, VIII, X; decreased fibrinolysis), venous stasis from progesterone vasodilation and the gravid uterus compressing pelvic veins, vessel wall changes, and reduced mobility postpartum - together raise thromboembolic risk.",
  }),
  Q("Explain how the placenta functions as an endocrine organ.", "SHORT", "ADVANCED", 3, {
    answer: "The placenta produces hCG (maintains corpus luteum), hPL (diabetogenic, growth), estrogen and progesterone (maintain pregnancy, breast preparation), and other peptides; it synthesizes these from maternal/fetal precursors, regulating pregnancy maintenance, fetal growth and parturition.",
  }),
  Q("Analyze the importance of the fetal skull fontanelles during labor.", "SHORT", "ADVANCED", 3, {
    answer: "Fontanelles (anterior, posterior) permit moulding and overlap of skull bones, reducing head size for passage through the pelvis; they also indicate position and progress on vaginal examination and allow assessment of the level of the presenting part.",
  }),
  Q("Discuss the respiratory adaptations of pregnancy and their clinical significance.", "ESSAY", "ADVANCED", 6, {
    answer: "Increased tidal volume and minute ventilation from progesterone; mild respiratory alkalosis with compensatory renal bicarbonate excretion; increased oxygen consumption; nasal congestion and dyspnea of pregnancy; upward displacement of the diaphragm; importance of maintaining maternal oxygenation for fetal wellbeing and the implications for anaesthesia and respiratory disease in pregnancy.",
  }),
  Q("Compare fetal and adult haemoglobin and explain the clinical relevance.", "ESSAY", "ADVANCED", 6, {
    answer: "HbF has two alpha and two gamma chains with higher oxygen affinity, enabling transplacental oxygen transfer; HbA (alpha2 beta2) has lower affinity releasing oxygen to tissues; HbF is measured in cord blood for haemoglobinopathy screening and in neonatal screening; persistence of HbF has diagnostic significance.",
  }),
  // ---- PROFESSIONAL ----
  Q("A primigravida at term with a contracted android pelvis is at greatest risk of:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Precipitate labor", "Obstructed labor", "Postnatal depression", "Polyhydramnios"], correct: 1,
    answer: "An android pelvis predisposes to obstructed labor due to funneling and malposition.",
  }),
  Q("In cardiotocography, a late deceleration indicates:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Head compression", "Utero-placental insufficiency", "Cord compression", "Fetal sleep"], correct: 1,
    answer: "Late decelerations reflect utero-placental insufficiency and fetal hypoxia.",
  }),
  Q("Which fetal circulation shunt closes permanently within the first days of life and is most influenced by oxygen?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Ductus venosus", "Ductus arteriosus", "Foramen ovale", "Umbilical vein"], correct: 1,
    answer: "The ductus arteriosus constricts in response to rising oxygen after birth.",
  }),
  Q("A clinician palpates a uterus at term that is 'tense and tender' with a small-for-dates fetus. The most concerning diagnosis is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Oligohydramnios", "Abruptio placentae with concealed haemorrhage", "Normal pregnancy", "Placenta praevia"], correct: 1,
    answer: "Tense, tender uterus with fetal compromise suggests concealed abruption.",
  }),
  Q("Which of the following placental conditions most strongly increases the risk of placenta accreta?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Placenta praevia over a previous cesarean scar", "Posterior placenta", "Multiple pregnancy", "Preterm placenta"], correct: 0,
    answer: "Placenta praevia with a prior cesarean scar greatly increases accreta risk.",
  }),
  Q("Interpret the significance of a symphysio-fundal height lagging 4 cm behind the gestational age.", "SHORT", "PROFESSIONAL", 3, {
    answer: "It suggests possible fetal growth restriction, oligohydramnios or dating error; requires confirmation by ultrasound (growth parameters, amniotic fluid, Dopplers), review of risk factors, and appropriate surveillance/referral.",
  }),
  Q("Analyze how knowledge of pelvic types guides the prediction of labor outcome.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Gynaecoid pelvis offers best diameters for vertex delivery; android is funneled with narrow forepelvis (occipito-posterior, obstructed labor); anthropoid favors occipito-posterior but often delivers; platypelloid gives poor AP but adequate transverse (deep transverse arrest); clinical pelvimetry and trial of labor guide decisions.",
  }),
  Q("Develop an evidence-based approach to assessing fetal wellbeing in a high-risk pregnancy.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Combination of symphysis-fundal height trends, fetal movement counting (kick charts), serial ultrasound for growth and amniotic fluid, Doppler studies (umbilical and MCA), cardiotocography (NST, CTG), biophysical profile, and, when indicated, placental assessment; interpretation in context of maternal disease and timely intervention (delivery when compromised).",
  }),
  Q("Critically evaluate the physiological basis for delayed cord clamping.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Delayed clamping (1-3 min) allows placental transfusion increasing neonatal iron stores and red cell mass, improves transitional circulation, reduces anaemia; balanced against polycythaemia/jaundice risk and delayed resuscitation; evidence supports delayed clamping in vigorous term and preterm infants.",
  }),
  Q("Explain how pregnancy-induced cardiovascular changes alter the management of a woman with pre-existing cardiac disease.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Increased blood volume (40-50%) and cardiac output (30-40%) peak around 28-32 weeks, increasing cardiac workload; women with cardiac disease risk decompensation, pulmonary oedema and arrhythmia; management includes preconception counseling, functional class assessment, multidisciplinary care, avoidance of fluid overload, planned delivery, and postpartum surveillance because haemodynamic shifts persist for weeks.",
  }),
];