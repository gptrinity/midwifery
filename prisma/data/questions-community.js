// Questions: Community Midwifery

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- NEWBIE ----
  Q("The Alma-Ata Declaration (1978) is associated with:", "MCQ", "NEWBIE", 1, {
    options: ["Hospital-based care", "Primary Health Care for all", "Private practice", "Curative care only"], correct: 1,
    answer: "Alma-Ata 1978 promoted Primary Health Care for all.",
  }),
  Q("Community health nursing emphasizes care of the:", "MCQ", "NEWBIE", 1, {
    options: ["Individual only", "Population/community as a whole", "Hospital inpatients", "Private clients"], correct: 1,
    answer: "Community health focuses on the health of populations.",
  }),
  Q("Which of the following is a method of family planning?", "MCQ", "NEWBIE", 1, {
    options: ["Immunization", "Intrauterine device (IUD)", "Vitamin supplementation", "Breastfeeding only always"], correct: 1,
    answer: "The IUD is a long-acting reversible contraceptive method.",
  }),
  Q("The cold chain is essential for:", "MCQ", "NEWBIE", 1, {
    options: ["Maintaining vaccine potency", "Storing antibiotics", "Preserving blood for transfusion only", "Cooling labour wards"], correct: 0,
    answer: "The cold chain preserves vaccine potency from manufacture to use.",
  }),
  Q("BCG vaccine protects against:", "MCQ", "NEWBIE", 1, {
    options: ["Polio", "Tuberculosis (severe forms)", "Measles", "Tetanus"], correct: 1,
    answer: "BCG protects against severe tuberculosis in children.",
  }),
  Q("The maternal mortality ratio measures deaths per:", "MCQ", "NEWBIE", 1, {
    options: ["1,000 live births", "100,000 live births", "1,000,000 births", "100 births"], correct: 1,
    answer: "MMR = maternal deaths per 100,000 live births.",
  }),
  Q("Which of the following is a component of PHC?", "MCQ", "NEWBIE", 1, {
    options: ["Maternal and child health with family planning", "Surgery only", "Tertiary ICU care", "Genetic engineering"], correct: 0,
    answer: "MCH/family planning, immunization, nutrition, safe water and treatment of common diseases are PHC components.",
  }),
  Q("Tetanus toxoid is given to pregnant women to prevent:", "MCQ", "NEWBIE", 1, {
    options: ["Malaria", "Neonatal tetanus", "Anaemia", "Measles"], correct: 1,
    answer: "Maternal TT immunization prevents neonatal tetanus.",
  }),
  Q("The purpose of a home visit by the midwife is to:", "MCQ", "NEWBIE", 1, {
    options: ["Check the home environment and provide care/education", "Collect fees", "Relax", "Take a census only"], correct: 0,
    answer: "Home visits assess environment and deliver care/education.",
  }),
  Q("Incidence is defined as:", "MCQ", "NEWBIE", 1, {
    options: ["All existing cases in a population", "New cases occurring in a population over a period", "Deaths in a population", "Recoveries in a population"], correct: 1,
    answer: "Incidence counts NEW cases over time.",
  }),
  Q("Which of the following is a barrier method of contraception?", "MCQ", "NEWBIE", 1, {
    options: ["Condom", "COC pill", "Implant", "IUD"], correct: 0,
    answer: "Condoms are barrier methods that also protect against STIs.",
  }),
  Q("Exclusive breastfeeding for 6 months also acts as (when criteria met):", "MCQ", "NEWBIE", 1, {
    options: ["A permanent method", "Lactational amenorrhoea method (LAM)", "An emergency contraceptive", "A surgical method"], correct: 1,
    answer: "LAM is a natural method when amenorrhoeic and fully breastfeeding under 6 months.",
  }),
  Q("Which is a key maternal health indicator?", "MCQ", "NEWBIE", 1, {
    options: ["Literacy rate", "Maternal mortality ratio", "Traffic accidents", "Population density"], correct: 1,
    answer: "MMR is a key MCH indicator.",
  }),
  Q("The role of a traditional birth attendant in the formal system is best described as:", "MCQ", "NEWBIE", 1, {
    options: ["Independent surgeon", "Recognized community birth partner with training and referral linkage", "Pharmacist", "Hospital administrator"], correct: 1,
    answer: "Trained TBAs act as community-level caregivers linked to referral systems.",
  }),
  Q("Define Primary Health Care.", "SHORT", "NEWBIE", 2, {
    answer: "Essential health care based on practical, scientifically sound and socially acceptable methods made universally accessible to individuals and families in the community at an affordable cost, with their full participation.",
  }),
  Q("List three (3) components of PHC.", "SHORT", "NEWBIE", 2, {
    answer: "MCH/family planning; immunization against major infectious diseases; prevention/control of endemic diseases; treatment of common diseases; nutrition; safe water and sanitation; essential drugs; health education.",
  }),
  Q("State two (2) principles of PHC.", "SHORT", "NEWBIE", 2, {
    answer: "Equity; community participation; intersectoral collaboration; appropriate technology; accessibility.",
  }),
  Q("Name two (2) vaccines given at birth.", "SHORT", "NEWBIE", 2, {
    answer: "BCG and OPV (and hepatitis B in many schedules).",
  }),
  // ---- INTERMEDIATE ----
  Q("A community nurse is conducting a home visit for a mother 3 days postpartum. The most important assessment is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Only the baby's weight", "Maternal and newborn wellbeing including danger signs, feeding and bonding", "The family's income", "The house size"], correct: 1,
    answer: "Postnatal home visits assess both mother and baby comprehensively.",
  }),
  Q("Which of the following describes 'prevalence'?", "MCQ", "INTERMEDIATE", 2, {
    options: ["New cases over time", "All existing cases in a population at a point in time", "Deaths from a disease", "Duration of illness"], correct: 1,
    answer: "Prevalence counts all current cases in the population.",
  }),
  Q("The recommended schedule for measles-rubella vaccine in many national programs is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["At birth", "9 months (with booster around 15-18 months)", "At 6 weeks", "At 5 years only"], correct: 1,
    answer: "Measles vaccine is given at about 9 months with a booster.",
  }),
  Q("Which method of family planning is most appropriate for a breastfeeding mother at 8 weeks postpartum?", "MCQ", "INTERMEDIATE", 2, {
    options: ["COC pill (combined)", "Progestin-only methods (POP, implant, injectable) or IUD/LAM", "Rhythm without monitoring", "Sterilization now"], correct: 1,
    answer: "Progestin-only and non-hormonal methods are safe during lactation.",
  }),
  Q("A woman wants emergency contraception after unprotected sex 24 hours ago. You would provide:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Levonorgestrel or copper IUD as appropriate", "Nothing until next cycle", "COC for one day only", "Antibiotics"], correct: 0,
    answer: "Emergency contraception (levonorgestrel up to 72h, or Cu-IUD up to 5 days) is indicated.",
  }),
  Q("Cold chain failure is detected by which monitoring device?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Stethoscope", "Vaccine vial monitor (VVM)", "Thermometer only in the fridge", "Sphygmomanometer"], correct: 1,
    answer: "VVMs on vials and fridge temperature logs detect cold chain failure.",
  }),
  Q("Which is the correct route for BCG vaccine?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Intramuscular", "Intradermal (upper deltoid)", "Subcutaneous in the thigh", "Oral"], correct: 1,
    answer: "BCG is given intradermally.",
  }),
  Q("The epidemiological triad consists of:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Agent, host, environment", "Doctor, nurse, patient", "Cure, care, prevention", "Fever, cough, pain"], correct: 0,
    answer: "The triad is agent, host, environment.",
  }),
  Q("Which of the following is a level of prevention that targets early detection and treatment?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Primary", "Secondary", "Tertiary", "Quaternary"], correct: 1,
    answer: "Secondary prevention = early detection and treatment (screening).",
  }),
  Q("A mother reports her 6-week-old baby has not gained weight since birth. Your first action is to:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Weigh once and reassure", "Assess feeding, health status and refer appropriately", "Give multivitamins", "Delay review"], correct: 1,
    answer: "Investigate feeding and health; growth failure warrants full assessment.",
  }),
  Q("Health education in the community is most effective when:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Uses medical jargon", "Is tailored to local language, culture and literacy", "Is given only in English", "Avoids participation"], correct: 1,
    answer: "Tailored, participatory education is most effective.",
  }),
  Q("The '3 delays' relevant to community maternal health are delays in:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Booking, delivery, discharge", "Seeking care, reaching care, receiving care", "Vaccination, education, nutrition", "Diagnosis, surgery, recovery"], correct: 1,
    answer: "The three delays model explains maternal deaths.",
  }),
  Q("A woman delivered at home with a traditional attendant. What is your first community midwifery action?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Leave immediately", "Assess mother and baby for danger signs and refer if needed", "Punish the attendant", "Report only to police"], correct: 1,
    answer: "Immediate assessment and linkage to the health system are priorities.",
  }),
  Q("Describe the steps of a postnatal home visit.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Greet and establish rapport; assess mother (vitals, uterus, lochia, perineum, breasts, emotional state); assess newborn (vitals, feeding, cord, jaundice, weight); observe environment and family support; provide education (hygiene, nutrition, family planning, danger signs); refer as needed; document and schedule follow-up.",
  }),
  Q("Explain the importance of the cold chain in immunization programs.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Vaccines are heat-labile; without refrigeration from manufacture to use (cold chain) they lose potency and fail to protect; maintaining 2-8°C (and -15 to -25°C for some), using VVMs, fridge temperature monitoring and correct storage/transport ensures effectiveness.",
  }),
  Q("Differentiate between MMR, IMR and NMR.", "SHORT", "INTERMEDIATE", 3, {
    answer: "MMR = maternal deaths per 100,000 live births; IMR = infant deaths (<1yr) per 1,000 live births; NMR = neonatal deaths (<28 days) per 1,000 live births.",
  }),
  Q("Discuss the role of the community midwife in promoting family planning.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Educate on methods and dispel myths; counsel couples on choice based on medical eligibility; provide short-acting methods where trained; refer for LARC/surgical methods; follow up on continuation and side effects; integrate with MCH and postnatal care; support birth spacing to reduce high-risk pregnancies and maternal/infant mortality.",
  }),
  Q("Outline a community health education session on 'danger signs in pregnancy'.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Identify audience (pregnant women/families); use local language and visual aids; list danger signs (vaginal bleeding, severe headache, blurred vision, swollen face/hands, fever, severe abdominal pain, reduced fetal movements, leaking liquor, convulsions); emphasize seeking care immediately; discuss birth preparedness and emergency transport plans; evaluate understanding and answer questions.",
  }),
  // ---- ADVANCED ----
  Q("A community programme aims to reduce maternal mortality. The most effective single intervention is:", "MCQ", "ADVANCED", 2, {
    options: ["Training more TBAs", "Skilled birth attendance at every delivery with access to EmOC", "More beds", "Free vitamins"], correct: 1,
    answer: "Skilled attendance with emergency obstetric care access is the key intervention.",
  }),
  Q("Which of the following is a BEmOC signal function?", "MCQ", "ADVANCED", 2, {
    options: ["Blood transfusion", "Parenteral oxytocics, antibiotics, anticonvulsants", "Cesarean section", "Laparotomy"], correct: 1,
    answer: "BEmOC: parenteral oxytocics, antibiotics, anticonvulsants, manual removal of placenta, retained products, assisted vaginal delivery.",
  }),
  Q("The main advantage of the copper IUD as emergency contraception is:", "MCQ", "ADVANCED", 2, {
    options: ["It does not work after ovulation", "It is effective up to 5 days and provides ongoing contraception", "It is hormonal", "It needs follow-up in 1 hour"], correct: 1,
    answer: "Cu-IUD ECP works up to 5 days and continues as contraception.",
  }),
  Q("Which of the following is the most appropriate indicator to evaluate an immunization programme?", "MCQ", "ADVANCED", 2, {
    options: ["Number of health workers", "Vaccine coverage and disease incidence trends", "Number of fridges", "Budget spent"], correct: 1,
    answer: "Coverage and disease incidence measure program impact.",
  }),
  Q("A community is reluctant to accept immunization due to myths. The best approach is:", "MCQ", "ADVANCED", 2, {
    options: ["Forcing parents", "Engaging community leaders and addressing concerns through dialogue", "Stopping the program", "Ignoring the myths"], correct: 1,
    answer: "Community engagement and dialogue build trust and acceptance.",
  }),
  Q("Which of the following correctly links the epidemiological measure to its use?", "MCQ", "ADVANCED", 2, {
    options: ["Prevalence - shows new infection risk", "Incidence - shows new case risk over time", "Mortality - shows recovery", "Birth rate - shows deaths"], correct: 1,
    answer: "Incidence measures the rate of NEW cases over time.",
  }),
  Q("A nurse-led community clinic detects a spike in neonatal tetanus. Priority action is:", "MCQ", "ADVANCED", 2, {
    options: ["Only report to police", "Investigate cases, strengthen clean delivery practices and TT immunization, and report", "Disband the clinic", "Ignore clusters"], correct: 1,
    answer: "Outbreak response requires investigation, prevention measures and reporting.",
  }),
  Q("Which level of prevention does immunization exemplify?", "MCQ", "ADVANCED", 2, {
    options: ["Primary", "Secondary", "Tertiary", "Rehabilitation"], correct: 0,
    answer: "Immunization is primary prevention.",
  }),
  Q("A community midwife planning a home delivery should prioritize which criterion?", "MCQ", "ADVANCED", 2, {
    options: ["No previous births", "Uncomplicated pregnancy, low-risk status and a functioning referral plan", "Woman's preference without assessment", "Distance only"], correct: 1,
    answer: "Home delivery requires careful low-risk selection and referral readiness.",
  }),
  Q("Which of the following best measures the effectiveness of family planning services?", "MCQ", "ADVANCED", 2, {
    options: ["Number of condoms distributed", "Contraceptive prevalence rate and unmet need", "Number of posters", "Clinic opening hours"], correct: 1,
    answer: "CPR and unmet need are the standard indicators.",
  }),
  Q("Describe how you would conduct a community maternal health needs assessment.", "SHORT", "ADVANCED", 3, {
    answer: "Define the population and objectives; collect quantitative data (vital statistics, service utilization, MCH indicators); gather qualitative data (focus groups, interviews, home visits); analyse determinants and gaps; prioritize needs with the community; plan interventions; implement and evaluate.",
  }),
  Q("Outline a referral protocol for a home-delivered woman with retained placenta.", "SHORT", "ADVANCED", 3, {
    answer: "Recognize the danger sign (placenta not delivered after 30 min); reassure and monitor bleeding; insert IV access, give fluids/oxytocin per protocol; call and transport to the nearest facility with blood and theatre; communicate a clear handover (time, blood loss, drugs given); accompany and document; follow up.",
  }),
  Q("Explain the concept of 'unmet need for family planning' and its importance.", "SHORT", "ADVANCED", 3, {
    answer: "Unmet need = fecund women who want to avoid pregnancy but use no method; it identifies service gaps, guides program targeting, reduces unintended and high-risk pregnancies, and is a key indicator for maternal health programs.",
  }),
  Q("Discuss the challenges and solutions to delivering skilled maternal care in rural communities.", "ESSAY", "ADVANCED", 6, {
    answer: "Challenges: distance, transport, staff shortages, equipment/drugs, cultural barriers, cost. Solutions: training and deployment of midwives, task-sharing, outreach clinics, maternity waiting homes, community transport schemes, health education, telemedicine, incentives and retention policies, and strengthening referral systems.",
  }),
  Q("Analyze the role of community participation in the success of an immunization campaign.", "ESSAY", "ADVANCED", 6, {
    answer: "Community participation ensures ownership and trust; involves leaders and volunteers in mobilization; addresses beliefs and rumours; improves coverage and timeliness; supports follow-up of defaulters; provides feedback for improvement; and makes programs sustainable and culturally appropriate.",
  }),
  // ---- PROFESSIONAL ----
  Q("In designing a district maternal health programme, which evidence-based package has the highest impact on mortality?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Vitamins only", "Skilled birth attendance + EmOC + family planning + focused antenatal care", "Free transport only", "Hospital beds"], correct: 1,
    answer: "The safe-motherhood package combines these high-impact interventions.",
  }),
  Q("A quality improvement audit reveals cesarean rates of 35% in a district. The most appropriate interpretation is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["All is fine", "Assess indication, WHO Robson classification and facility capability before action", "Immediately stop all cesareans", "Blame surgeons"], correct: 1,
    answer: "Use Robson classification and context before judging rates.",
  }),
  Q("Which of the following is the most valid measure of the success of a 'maternity waiting home' program?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Number of beds", "Reduction in maternal deaths and improved access for high-risk women", "Number of visitors", "Length of the building"], correct: 1,
    answer: "Outcomes (mortality, access for at-risk women) measure success.",
  }),
  Q("A community midwife is developing a tool to monitor near-miss maternal cases. The best approach is to:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Record all deliveries only", "Use WHO near-miss criteria with audits and case reviews", "Count only deaths", "Ignore severe cases"], correct: 1,
    answer: "WHO near-miss criteria + audit provide robust surveillance.",
  }),
  Q("Which strategy best addresses the 'second delay' (reaching care)?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Community health education only", "Improved transport, referral networks and maternity waiting homes", "More clinics without staff", "Lower fees only"], correct: 1,
    answer: "Transport and referral logistics address the second delay.",
  }),
  Q("Design a monitoring and evaluation framework for a maternal and newborn health programme.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Define indicators (MMR, IMR, facility delivery, EmOC availability, ANC coverage, CPR); collect baseline data; set targets; establish routine data systems and audits; conduct periodic reviews and near-miss/death audits; use findings to improve; report and disseminate.",
  }),
  Q("Critically evaluate the strengths and limitations of using TBAs in the reduction of maternal mortality.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Strengths: accessibility, cultural acceptance, early recognition and referral, linkage to services. Limitations: cannot manage complications, limited training, potential harmful practices, cannot replace skilled attendance. Best practice: train and supervise TBAs as community referral agents while prioritizing skilled birth attendance and EmOC.",
  }),
  Q("Develop a community-based strategy to prevent neonatal deaths from hypothermia and infection.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Clean delivery practices and hand hygiene; immediate drying, warmth and skin-to-skin (kangaroo) care; delayed bathing; cord care with chlorhexidine; early and exclusive breastfeeding; timely recognition of danger signs (poor feeding, lethargy, fast breathing, fever/hypothermia); referral pathways; community education; home-visit follow-up; and immunization.",
  }),
  Q("Analyze how maternal death surveillance and response (MDSR) reduces mortality at community level.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "MDSR identifies every maternal death, reviews avoidable factors, makes actionable recommendations, and ensures response; at community level it reveals delays and barriers (transport, cultural, access), guides referral strengthening and education, reduces stigma through no-blame review, and provides data for policy; success depends on confidentiality, completeness of reporting and follow-through.",
  }),
  Q("Propose an integrated approach to delivering family planning, immunization and nutrition services at community level.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Integration through outreach clinics and community days; service integration points (postnatal visits, immunization clinics, growth monitoring) to deliver counseling, contraception, vaccination and nutrition education; trained community workers; supply-chain integration; referral for LARC and malnutrition; digital registers for tracking; and community engagement for uptake.",
  }),
];