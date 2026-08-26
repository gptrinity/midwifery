// Questions: Infant Care / Newborn (Part 1 - Newbie + Intermediate)

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- NEWBIE ----
  Q("The Apgar score assesses:", "MCQ", "NEWBIE", 1, {
    options: ["Weight, length, head circumference", "Appearance, pulse, grimace, activity, respiration", "Blood pressure and temperature", "Feeding and sleep"], correct: 1,
    answer: "Apgar: Appearance (color), Pulse, Grimace (reflex), Activity (tone), Respiration.",
  }),
  Q("A baby born before 37 completed weeks is:", "MCQ", "NEWBIE", 1, {
    options: ["Term", "Preterm", "Post-term", "Small for dates"], correct: 1,
    answer: "Preterm is birth before 37 weeks.",
  }),
  Q("Low birth weight is defined as:", "MCQ", "NEWBIE", 1, {
    options: ["Below 4000g", "Below 2500g", "Below 3000g", "Below 1000g"], correct: 1,
    answer: "LBW is <2500g; VLBW <1500g; ELBW <1000g.",
  }),
  Q("The first milk produced by the breast after birth is:", "MCQ", "NEWBIE", 1, {
    options: ["Mature milk", "Colostrum", "Formula", "Hindmilk"], correct: 1,
    answer: "Colostrum is the first secretion, rich in antibodies.",
  }),
  Q("Breastfeeding should ideally begin within:", "MCQ", "NEWBIE", 1, {
    options: ["6 hours", "1 hour of birth", "24 hours", "3 days"], correct: 1,
    answer: "Early initiation within the first hour is recommended.",
  }),
  Q("Physiological jaundice of the newborn usually appears:", "MCQ", "NEWBIE", 1, {
    options: ["At birth", "Day 2-3, peaks day 4-5", "Week 3", "Month 2"], correct: 1,
    answer: "Physiological jaundice appears day 2-3 and peaks at day 4-5.",
  }),
  Q("The Moro reflex is also known as the:", "MCQ", "NEWBIE", 1, {
    options: ["Sucking reflex", "Startle reflex", "Rooting reflex", "Stepping reflex"], correct: 1,
    answer: "The Moro reflex is the startle reflex.",
  }),
  Q("Which of the following is a sign of neonatal sepsis?", "MCQ", "NEWBIE", 1, {
    options: ["Poor feeding and lethargy", "Frequent crying and good tone", "Weight gain", "Pink colour"], correct: 0,
    answer: "Lethargy, poor feeding and temperature instability suggest sepsis.",
  }),
  Q("Kangaroo Mother Care involves:", "MCQ", "NEWBIE", 1, {
    options: ["Incubator care only", "Continuous skin-to-skin contact plus exclusive breastfeeding", "Formula feeding", "Cold therapy"], correct: 1,
    answer: "KMC is skin-to-skin contact with breastfeeding and follow-up.",
  }),
  Q("The normal birth weight of a term baby is approximately:", "MCQ", "NEWBIE", 1, {
    options: ["1.0-1.5 kg", "2.5-4.0 kg", "5.0-6.0 kg", "4.5-5.5 kg"], correct: 1,
    answer: "Term birth weight is about 2.5-4.0 kg.",
  }),
  Q("Which of the following is given to prevent haemorrhagic disease of the newborn?", "MCQ", "NEWBIE", 1, {
    options: ["Vitamin C", "Vitamin K", "Iron", "Folate"], correct: 1,
    answer: "Vitamin K prevents haemorrhagic disease of the newborn.",
  }),
  Q("The rooting reflex is elicited by:", "MCQ", "NEWBIE", 1, {
    options: ["Stroking the cheek", "Tapping the knee", "Lighting in the eye", "Touching the palm"], correct: 0,
    answer: "Rooting is triggered by stroking the cheek/lip, turning toward the stimulus.",
  }),
  Q("An infant at risk of ophthalmia neonatorum receives eye prophylaxis with:", "MCQ", "NEWBIE", 1, {
    options: ["Vitamin K drops", "Erythromycin or tetracycline ointment", "Normal saline", "Antifungal cream"], correct: 1,
    answer: "Antibiotic eye ointment prevents ophthalmia neonatorum.",
  }),
  Q("Breastfed babies should be fed:", "MCQ", "NEWBIE", 1, {
    options: ["On a strict 4-hourly schedule", "On demand, 8-12 times daily", "Once daily", "Only at night"], correct: 1,
    answer: "Demand feeding 8-12 times in 24 hours is recommended.",
  }),
  Q("Adequate milk intake in a newborn is suggested by:", "MCQ", "NEWBIE", 1, {
    options: ["Sleeping all day", "Six or more wet nappies and steady weight gain", "Frequent crying", "Few stools"], correct: 1,
    answer: "Wet diapers and weight gain indicate adequate intake.",
  }),
  Q("Define 'birth asphyxia'.", "SHORT", "NEWBIE", 2, {
    answer: "Failure of the newborn to initiate and sustain breathing at birth, with hypoxia, hypercapnia and acidosis.",
  }),
  Q("List three (3) signs used in the Apgar score.", "SHORT", "NEWBIE", 2, {
    answer: "Heart rate, respiratory effort, muscle tone, reflex irritability, colour.",
  }),
  Q("State two (2) immediate care actions for the newborn at birth.", "SHORT", "NEWBIE", 2, {
    answer: "Dry and keep warm (skin-to-skin); clear airway; assess breathing; clamp cord after delay; initiate breastfeeding within 1 hour; give vitamin K and eye prophylaxis.",
  }),
  // ---- INTERMEDIATE ----
  Q("Which of the following is the first step in neonatal resuscitation?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Chest compressions", "Warm, position, clear airway, dry and stimulate", "Give adrenaline", "Ventilate at once"], correct: 1,
    answer: "Initial steps: warmth, positioning, airway clearance, drying and stimulation.",
  }),
  Q("Positive pressure ventilation is indicated when the newborn is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Crying vigorously", "Gasping or not breathing, or heart rate below 100", "Sleeping", "Feeding"], correct: 1,
    answer: "PPV is started for apnea/gasping or HR <100.",
  }),
  Q("Chest compressions in neonatal resuscitation are given when the heart rate is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["<60 despite 30 seconds of effective ventilation", "<100 with normal breathing", ">160", "Any rate"], correct: 0,
    answer: "Compressions are for HR <60 despite adequate ventilation.",
  }),
  Q("Which of the following is a cause of pathological neonatal jaundice?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Normal red cell breakdown", "Rh or ABO incompatibility causing haemolysis", "Colostrum", "Circumcision"], correct: 1,
    answer: "Haemolytic disease (Rh/ABO) is a pathological cause of jaundice.",
  }),
  Q("Kernicterus is caused by:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Low bilirubin", "Unconjugated bilirubin deposition in the brain", "Hypoglycaemia", "Hypothermia"], correct: 1,
    answer: "High unconjugated bilirubin damages the brain (kernicterus).",
  }),
  Q("The most common cause of early-onset neonatal sepsis (within 72 hours) is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Hospital equipment", "Group B streptococcus acquired from the mother", "Mosquitoes", "Formula milk"], correct: 1,
    answer: "GBS from the maternal genital tract causes early-onset sepsis.",
  }),
  Q("Which of the following is a danger sign in a newborn?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Normal crying", "Refusing feeds and temperature instability", "Yellow urine", "Pink skin"], correct: 1,
    answer: "Poor feeding and temperature instability are danger signs.",
  }),
  Q("Phototherapy is used to treat:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Neonatal sepsis", "Neonatal jaundice (hyperbilirubinaemia)", "Hypoglycaemia", "Anaemia"], correct: 1,
    answer: "Phototherapy converts bilirubin to excretable forms.",
  }),
  Q("The New Ballard score is used to:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Assess gestational age", "Measure blood sugar", "Screen hearing", "Assess feeding"], correct: 0,
    answer: "The New Ballard score estimates gestational age by neurological and physical maturity.",
  }),
  Q("Hypoglycaemia in a newborn is most associated with:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Term healthy babies", "Preterm, LBW and infants of diabetic mothers", "Babies of non-diabetic mothers", "Babies fed on demand"], correct: 1,
    answer: "Preterm/LBW and diabetic mothers predispose to hypoglycaemia.",
  }),
  Q("The correct management of a suspected imperforate anus includes:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Feeding normally", "NPO, refer to surgery urgently", "Rectal examination by a nurse", "Wait 24 hours"], correct: 1,
    answer: "Imperforate anus requires urgent surgical referral; keep NPO.",
  }),
  Q("When should phototherapy be considered for jaundice?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Always at day 1", "When bilirubin crosses the threshold for age/risk or appears pathological", "Never", "Only at 2 weeks"], correct: 1,
    answer: "Treatment is based on bilirubin levels against age-specific thresholds.",
  }),
  Q("Explain the steps of neonatal resuscitation when a baby is not breathing at birth.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Keep warm, position head, clear airway, dry and stimulate; reassess breathing and HR; if gasping/not breathing or HR <100, give positive pressure ventilation (bag and mask) for 30 sec; reassess; if HR <60, start chest compressions with ventilation (3:1); consider adrenaline and reassess; call for help.",
  }),
  Q("Describe the care of a low-birth-weight baby in a resource-limited setting.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Thermoregulation via kangaroo mother care (skin-to-skin) or warmth; early and frequent feeding with expressed breast milk; monitor glucose and temperature; infection control and hand hygiene; cord care; watch for jaundice, apnoea and sepsis; follow-up and growth monitoring; involve and educate the mother.",
  }),
  Q("Outline the signs of respiratory distress in a newborn.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Tachypnoea (>60/min), grunting, nasal flaring, intercostal/subcostal recession, cyanosis, poor chest expansion, lethargy; may progress to apnea.",
  }),
  Q("Discuss the benefits of kangaroo mother care for preterm infants.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Temperature stability, reduced infection and sepsis, improved weight gain and breastfeeding, reduced crying and stress, better bonding and maternal confidence, reduced length of hospital stay, and lower mortality for LBW babies.",
  }),
  Q("Explain the difference between physiological and pathological neonatal jaundice.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Physiological: appears day 2-3, peaks day 4-5, resolves by 2 weeks, term, otherwise well, due to immature liver/RBC breakdown; pathological: appears <24h, rapidly rising, prolonged (>2wks term), associated with pallor, hepato-splenomegaly, poor feeding - causes haemolysis (Rh/ABO), G6PD, infection, biliary obstruction; requires investigation and treatment (phototherapy/exchange).",
  }),
];