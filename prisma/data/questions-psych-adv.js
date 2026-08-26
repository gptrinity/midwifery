// Questions: Psychology in Midwifery (Part 2 - Advanced + Professional)

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- ADVANCED ----
  Q("A woman at 6 weeks postpartum has an EPDS score of 18 and passive suicidal thoughts. The most appropriate action is:", "MCQ", "ADVANCED", 2, {
    options: ["Reassure and rescreen in a month", "Urgent mental health referral, risk assessment and safety planning", "Give multivitamins", "Discharge from care"], correct: 1,
    answer: "High EPDS with suicidal ideation requires urgent psychiatric assessment.",
  }),
  Q("Which of the following is the strongest predictor of puerperal psychosis?", "MCQ", "ADVANCED", 2, {
    options: ["Postnatal depression history", "Bipolar disorder or previous puerperal psychosis", "Primiparity alone", "Breastfeeding difficulties"], correct: 1,
    answer: "Bipolar disorder and past puerperal psychosis strongly predict puerperal psychosis.",
  }),
  Q("A bereaved mother after stillbirth is in the 'anger' stage of grief. The best midwifery response is to:", "MCQ", "ADVANCED", 2, {
    options: ["Take the anger personally and argue", "Recognize the stage, allow expression without judgment and offer support", "Send her home", "Sedate her"], correct: 1,
    answer: "Recognizing grief stages and allowing expression supports healthy grieving.",
  }),
  Q("Which of the following is a key component of cognitive behavioral therapy (CBT) relevant to perinatal anxiety?", "MCQ", "ADVANCED", 2, {
    options: ["Identifying and challenging unhelpful thoughts", "Prescribing sedatives", "Avoiding all triggers", "Hospital admission always"], correct: 0,
    answer: "CBT works on thoughts, feelings and behaviors.",
  }),
  Q("A mother is highly anxious about breastfeeding and feels she has 'failed'. The midwife should:", "MCQ", "ADVANCED", 2, {
    options: ["Insist she breastfeed exclusively", "Provide skilled support, normalize challenges, and address her feelings without judgment", "Formula feed without discussion", "Blame her technique"], correct: 1,
    answer: "Emotional support alongside practical help protects maternal wellbeing.",
  }),
  Q("Which factor most increases the risk of maternal suicide in the perinatal period?", "MCQ", "ADVANCED", 2, {
    options: ["Mild tiredness", "Previous severe mental illness and untreated depression", "Breast engorgement", "Multiparity"], correct: 1,
    answer: "Mental illness, especially untreated, is the key suicide risk.",
  }),
  Q("In assessing a woman for perinatal mental illness, the midwife should screen:", "MCQ", "ADVANCED", 2, {
    options: ["Only at booking", "Throughout pregnancy and the postnatal period", "Only when symptoms are obvious", "Never"], correct: 1,
    answer: "Repeated screening detects emerging illness.",
  }),
  Q("A woman who fears childbirth (tokophobia) at 38 weeks requests a cesarean. The best approach is:", "MCQ", "ADVANCED", 2, {
    options: ["Dismiss her fear", "Explore her fears, offer psychological support and share decision-making", "Force vaginal delivery", "Avoid discussion"], correct: 1,
    answer: "Severe tokophobia needs exploration, support and shared decision-making.",
  }),
  Q("Explain how the midwife would assess suicide risk in a postpartum woman.", "SHORT", "ADVANCED", 3, {
    answer: "Ask directly and non-judgmentally about thoughts of self-harm, plans, means and intent; assess protective factors, support and access; screen with EPDS; check for psychosis; involve mental health services urgently if risk present; ensure safety planning and follow-up.",
  }),
  Q("Outline a support plan for a teenager who has delivered and shows poor attachment.", "SHORT", "ADVANCED", 3, {
    answer: "Assess social support and housing; involve family/partner; teach newborn cues and care; encourage skin-to-skin and feeding; provide parenting education; refer to social services and peer support; monitor mood; involve school/education programs; follow up with home visits.",
  }),
  Q("Discuss the impact of untreated maternal depression on infant development.", "ESSAY", "ADVANCED", 6, {
    answer: "Impaired bonding and responsiveness; reduced breastfeeding; altered cortisol and stress regulation; cognitive and language delay; behavioral and emotional problems; insecure attachment; neglect and safety concerns; effects persist through childhood; underscores early detection and treatment.",
  }),
  Q("Analyze the psychological components of a traumatic birth experience and their prevention.", "ESSAY", "ADVANCED", 6, {
    answer: "Components: loss of control, fear for self/baby, perceived poor care, pain, lack of information and support. Prevention: respectful care, informed choice, continuous support, effective communication, debriefing after traumatic events, screening for PTSD and referral to trauma-focused therapy (EMDR/CBT).",
  }),
  // ---- PROFESSIONAL ----
  Q("A woman at 34 weeks with bipolar disorder is stable on lithium. The most appropriate multidisciplinary plan is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Stop all medication abruptly", "Joint psychiatric-obstetric planning with medication review, monitoring and relapse prevention", "Hospitalize until delivery", "Only psychotherapy"], correct: 1,
    answer: "Shared care prevents relapse while managing fetal risks.",
  }),
  Q("Which of the following is the priority in the emergency management of puerperal psychosis?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Sleep hygiene", "Urgent psychiatric admission to protect mother and baby", "Breastfeeding support", "Diet review"], correct: 1,
    answer: "Rapid psychiatric admission prevents suicide and infanticide.",
  }),
  Q("In a woman who has had a previous stillbirth, the most effective strategy to reduce anxiety in the next pregnancy is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Minimizing contact with staff", "Increased surveillance, continuity of care, and psychological support", "Ignoring the history", "Avoiding antenatal visits"], correct: 1,
    answer: "Continuity, surveillance and psychological support reduce anxiety.",
  }),
  Q("A mother persistently reports fears that her baby is being poisoned despite reassurance. This most likely indicates:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Normal worry", "A delusion (possible psychosis) requiring urgent psychiatric review", "Simple fatigue", "A feeding problem"], correct: 1,
    answer: "Fixed, bizarre beliefs are delusions and signal psychosis.",
  }),
  Q("Which of the following demonstrates the most effective model for perinatal mental health services?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Single-point screening only", "Stepped care: universal screening, targeted brief interventions, and specialist perinatal services", "Emergency care only", "No services"], correct: 1,
    answer: "Stepped care matches intensity to need.",
  }),
  Q("Design a stepped-care pathway for perinatal mental health from a midwifery perspective.", "SHORT", "PROFESSIONAL", 3, {
    answer: "Step 1: universal screening (EPDS/Whooley) and wellbeing promotion at all contacts. Step 2: targeted support - psychoeducation, peer groups, guided self-help (CBT). Step 3: specialist assessment and treatment - perinatal mental health team, psychological therapies and medication. Step 4: crisis services for psychosis/severe risk. With clear referral criteria, escalation and follow-up.",
  }),
  Q("Evaluate the ethical considerations in treating maternal mental illness during pregnancy and breastfeeding.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Balancing fetal exposure risk of medications against the risks of untreated maternal illness (relapse, self-harm, poor care); informed consent and shared decision-making; pharmacokinetic changes in pregnancy; breastfeeding compatibility; stigma and autonomy; close monitoring and lowest effective dose; multidisciplinary and documented decisions.",
  }),
  Q("Critically appraise the use of routine EPDS screening in the postpartum period.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Strengths: detects hidden depression, enables early treatment, acceptable, validated, feasible. Limitations: false positives/negatives, cultural variation, requires trained staff and referral pathways, screening alone without treatment has limited benefit; best practice: integrate screening with clear care pathways and follow-up.",
  }),
  Q("Develop a protocol for supporting a family following the death of a newborn.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Immediate: compassionate, honest communication by senior staff; privacy; allow seeing/holding and memory-making (photos, footprints, handprints); options for post-mortem and disposal; spiritual/cultural support. Ongoing: bereavement follow-up, counseling referrals, inform GP, support siblings; explain likely grief reactions; offer future pregnancy planning and preconception review; staff debriefing.",
  }),
  Q("Discuss how a midwife can promote resilience and prevent burnout in the context of repeated perinatal loss.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Self-awareness and debriefing after losses; clinical supervision and peer support; setting professional boundaries; balanced caseloads; continuing education and competency; compassion fatigue recognition; organizational support and policies; mindfulness and self-care; engaging positive meaning in the work; and accessing professional help when needed.",
  }),
];