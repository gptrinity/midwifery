// Questions: Psychology in Midwifery (Part 1 - Newbie + Intermediate)

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- NEWBIE ----
  Q("Which of the following is a common psychological change in pregnancy?", "MCQ", "NEWBIE", 1, {
    options: ["Complete emotional stability", "Mood swings and ambivalence", "Loss of all emotions", "Euphoria only"], correct: 1,
    answer: "Hormonal and psychosocial changes cause mood swings and mixed feelings.",
  }),
  Q("'Baby blues' typically occurs:", "MCQ", "NEWBIE", 1, {
    options: ["6 months after birth", "Within the first few days after birth and resolves quickly", "Only before birth", "At 1 year"], correct: 1,
    answer: "Baby blues occurs in the first few days and is self-limiting.",
  }),
  Q("Postnatal depression usually begins:", "MCQ", "NEWBIE", 1, {
    options: ["During labor", "Within weeks to months after birth", "Only at 2 years", "Before conception"], correct: 1,
    answer: "PND begins within weeks to a year postpartum.",
  }),
  Q("Which of the following is a symptom of postnatal depression?", "MCQ", "NEWBIE", 1, {
    options: ["Persistent low mood, loss of interest, guilt and sleep disturbance", "Excessive energy", "Complete happiness", "Irritability only in labor"], correct: 0,
    answer: "Persistent low mood with anhedonia and disturbed sleep characterize PND.",
  }),
  Q("Grief is best described as:", "MCQ", "NEWBIE", 1, {
    options: ["A mental illness", "The emotional response to loss", "Anger only", "Forgetting the loss"], correct: 1,
    answer: "Grief is the natural emotional response to loss.",
  }),
  Q("Skin-to-skin contact after birth primarily promotes:", "MCQ", "NEWBIE", 1, {
    options: ["Infection", "Bonding and thermoregulation", "Jaundice", "Overfeeding"], correct: 1,
    answer: "Skin-to-skin promotes bonding, warmth and breastfeeding.",
  }),
  Q("The Edinburgh Postnatal Depression Scale (EPDS) is used to:", "MCQ", "NEWBIE", 1, {
    options: ["Measure blood pressure", "Screen for postnatal depression", "Assess fetal heart", "Diagnose anaemia"], correct: 1,
    answer: "EPDS is a screening tool for PND.",
  }),
  Q("Which of the following promotes mother-infant attachment?", "MCQ", "NEWBIE", 1, {
    options: ["Delaying first contact", "Early and frequent contact including breastfeeding", "Minimizing touch", "Separating them at night"], correct: 1,
    answer: "Early, repeated contact and breastfeeding foster attachment.",
  }),
  Q("Fear and anxiety during labor:", "MCQ", "NEWBIE", 1, {
    options: ["Improve contractions", "Increase pain perception and stress hormones", "Shorten labor always", "Have no effect"], correct: 1,
    answer: "Anxiety raises catecholamines, worsening pain and slowing labor.",
  }),
  Q("Effective counseling requires the midwife to be:", "MCQ", "NEWBIE", 1, {
    options: ["Judgmental", "Empathetic, non-judgmental and a good listener", "Always giving advice", "Silent always"], correct: 1,
    answer: "Empathy, non-judgment and active listening define effective counseling.",
  }),
  Q("Which of the following is an example of disenfranchised grief?", "MCQ", "NEWBIE", 1, {
    options: ["Grief of a mother after a stillbirth acknowledged by all", "Grief not socially recognized (e.g., after a termination or early miscarriage)", "Grief of a widower", "Normal grief after a funeral"], correct: 1,
    answer: "Disenfranchised grief is loss that society does not recognize or validate.",
  }),
  Q("The emotional bond between parent and infant is called:", "MCQ", "NEWBIE", 1, {
    options: ["Attachment", "Anaemia", "Reflex", "Menopause"], correct: 0,
    answer: "Attachment is the parent-infant emotional bond.",
  }),
  Q("Define the term 'bereavement'.", "SHORT", "NEWBIE", 2, {
    answer: "Bereavement is the state of having suffered a loss (often death of a loved one), encompassing the process of adjusting to that loss.",
  }),
  Q("List two (2) signs of the 'baby blues'.", "SHORT", "NEWBIE", 2, {
    answer: "Tearfulness, mood lability, irritability, anxiety, sleep disturbance, emotional sensitivity within the first few days; transient.",
  }),
  Q("State two (2) ways the midwife can promote bonding.", "SHORT", "NEWBIE", 2, {
    answer: "Early skin-to-skin contact; encourage breastfeeding; rooming-in; respond to newborn cues; involve the partner; positive verbal interaction.",
  }),
  // ---- INTERMEDIATE ----
  Q("Which of the following distinguishes puerperal psychosis from postnatal depression?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Presence of hallucinations and delusions", "Low mood only", "Mild anxiety", "Normal sleep"], correct: 0,
    answer: "Puerperal psychosis is a psychiatric emergency with psychosis (hallucinations, delusions).",
  }),
  Q("A mother with a history of severe anxiety in pregnancy is at increased risk of:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Postnatal depression", "Only physical problems", "No risk", "Better outcomes"], correct: 0,
    answer: "Antenatal anxiety predicts postpartum depression and adverse birth outcomes.",
  }),
  Q("The most appropriate midwifery response when a mother cries persistently 5 days postpartum is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Ignore the tears", "Assess mood, sleep, social support and screen with EPDS", "Tell her to stop crying", "Sedate her"], correct: 1,
    answer: "Persistent crying warrants assessment and depression screening.",
  }),
  Q("In counseling a couple after a stillbirth, the midwife should:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Avoid mentioning the baby", "Acknowledge the loss, allow expression of grief and offer memory-making", "Hurry them to leave", "Blame one parent"], correct: 1,
    answer: "Acknowledgment, time for grief and memory-making are supportive.",
  }),
  Q("Which of the following is a risk factor for postnatal depression?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Strong social support", "Previous depression and poor partner support", "Planned pregnancy only", "No history of mental illness"], correct: 1,
    answer: "Previous mental illness and low support are key risk factors.",
  }),
  Q("Antenatal stress activates which hormonal axis?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Hypothalamic-pituitary-adrenal (HPA) axis", "Renin-angiotensin axis", "Blood-clotting axis", "Calcium axis"], correct: 0,
    answer: "Stress activates the HPA axis, raising cortisol.",
  }),
  Q("A woman has intrusive memories and nightmares of her traumatic birth. This suggests:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Normal recovery", "Post-traumatic stress disorder (PTSD)", "Baby blues", "Psychosis"], correct: 1,
    answer: "Re-experiencing phenomena after a traumatic birth indicate PTSD.",
  }),
  Q("The counseling approach that respects the client's capacity to make her own decisions is based on:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Directing the client", "Client-centered, non-directive counseling", "Giving orders", "Withholding information"], correct: 1,
    answer: "Client-centered counseling supports self-determination.",
  }),
  Q("Which of the following is a protective factor for maternal mental health?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Social isolation", "Supportive partner and family, adequate rest and realistic expectations", "Financial stress", "Previous loss"], correct: 1,
    answer: "Social support and practical help protect mental health.",
  }),
  Q("In grief counseling, the Kubler-Ross model includes:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Denial, anger, bargaining, depression, acceptance", "Only sadness", "Shock, euphoria, calm", "Avoidance, panic, relief"], correct: 0,
    answer: "Kubler-Ross stages describe the grieving process.",
  }),
  Q("The best way to detect postnatal depression during routine visits is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Asking only about physical health", "Routine screening with EPDS and asking about mood", "Waiting for the mother to volunteer", "Reading the case notes only"], correct: 1,
    answer: "Routine screening and enquiry detect PND early.",
  }),
  Q("Describe the signs of puerperal psychosis and why it is an emergency.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Rapid onset within 2 weeks: confusion, delusions, hallucinations (often about the baby), severe mood swings, agitation, risk of harm to self or baby; requires urgent psychiatric admission because of suicide/infanticide risk.",
  }),
  Q("Explain how you would assess and support a mother showing signs of postnatal depression.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Build rapport in privacy; screen with EPDS; explore mood, sleep, appetite, social support, thoughts of self-harm/harming the baby; assess risk; provide psychoeducation and practical support; encourage partner/family involvement; refer to mental health services/CBT/GP; follow up and monitor.",
  }),
  Q("Outline the midwife's role in supporting a woman after a stillbirth.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Compassionate presence; clear, sensitive communication; allow parents to see/hold the baby and create memories; explain procedures and post-mortem options; arrange privacy; involve chaplaincy/bereavement support; ensure follow-up, counseling and support for future pregnancy planning.",
  }),
  Q("Discuss the psychological factors that influence the experience of labor pain.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Fear and anxiety increase pain (fear-tension-pain cycle via catecholamines); preparation and information reduce fear; perceived control and participation reduce distress; continuous support and companionship lower pain and intervention; cultural beliefs, expectations and prior trauma shape the experience; relaxation, breathing and positioning improve coping.",
  }),
  Q("Explain how bonding can be promoted in a mother whose preterm baby is in the NICU.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "Encourage early and frequent visits; kangaroo mother care; guided interactions and reading cues; encourage breastfeeding/expressed milk; involve parents in care (nappy changes, touch); provide psychological support and reduce guilt; education on preterm behavior; involve the father; peer support and counseling for stress.",
  }),
];