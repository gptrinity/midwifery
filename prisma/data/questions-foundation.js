// Questions: Foundation of Midwifery
// type: MCQ | SHORT | ESSAY, level: NEWBIE | INTERMEDIATE | ADVANCED | PROFESSIONAL

const Q = (t, type, level, m, extra) => Object.assign({ text: t, type, level, marks: m, year: "" }, extra);

module.exports = [
  // ---- NEWBIE ----
  Q("Which of the following is the oldest recognized role of the midwife?", "MCQ", "NEWBIE", 1, {
    options: ["Nurse anesthetist", "Traditional birth attendant", "Pediatric specialist", "Pharmacist"], correct: 1,
    answer: "The traditional birth attendant is the oldest recognized form of the midwifery role.",
  }),
  Q("The Safe Motherhood Initiative was launched in which year?", "MCQ", "NEWBIE", 1, {
    options: ["1978", "1987", "2000", "1994"], correct: 1,
    answer: "The Safe Motherhood Initiative was launched in 1987 in Nairobi.",
  }),
  Q("Which of the following is a core value of professional midwifery?", "MCQ", "NEWBIE", 1, {
    options: ["Routine episiotomy", "Woman-centered care", "Rapid hospital discharge", "Task delegation to relatives"], correct: 1,
    answer: "Midwifery is founded on woman-centered, respectful, evidence-based care.",
  }),
  Q("The principle of 'doing good' for the patient is termed:", "MCQ", "NEWBIE", 1, {
    options: ["Autonomy", "Beneficence", "Justice", "Veracity"], correct: 1,
    answer: "Beneficence means acting in the best interest of the client to do good.",
  }),
  Q("What does 'non-maleficence' require of the midwife?", "MCQ", "NEWBIE", 1, {
    options: ["To always tell the truth", "To do no harm", "To ensure fairness", "To respect choices"], correct: 1,
    answer: "Non-maleficence requires the midwife to avoid causing harm to the client.",
  }),
  Q("Which document governs the professional conduct of midwives in most countries?", "MCQ", "NEWBIE", 1, {
    options: ["Hospital bylaws", "Nursing and Midwifery Code of Conduct", "Labor ward register", "Vaccination schedule"], correct: 1,
    answer: "The Nursing and Midwifery (professional) Code of Conduct governs professional behavior.",
  }),
  Q("The term 'standard precautions' primarily emphasizes:", "MCQ", "NEWBIE", 1, {
    options: ["Use of antibiotics for all", "Hand hygiene for every client contact", "Isolation of all patients", "Routine shaving of delivery area"], correct: 1,
    answer: "Standard precautions begin with hand hygiene for every client contact.",
  }),
  Q("Confidentiality in midwifery means that client information is:", "MCQ", "NEWBIE", 1, {
    options: ["Shared freely with family", "Protected from unauthorized disclosure", "Written in the visitor's log", "Reported to the community"], correct: 1,
    answer: "Confidentiality protects client information from unauthorized disclosure.",
  }),
  Q("Which of the following is a key component of informed consent?", "MCQ", "NEWBIE", 1, {
    options: ["Rush and pressure", "Provision of adequate information", "Withholding risk details", "Consent from the nurse in charge"], correct: 1,
    answer: "Informed consent requires adequate information about risks, benefits and alternatives.",
  }),
  Q("A midwife who fails to meet the expected standard of care causing harm may be charged with:", "MCQ", "NEWBIE", 1, {
    options: ["Theft", "Negligence", "Arson", "Defamation"], correct: 1,
    answer: "Negligence is failure to meet the expected standard of care causing harm.",
  }),
  Q("The single most effective measure to prevent healthcare-associated infection is:", "MCQ", "NEWBIE", 1, {
    options: ["Antibiotic prophylaxis", "Hand washing", "UV lights", "Routine fumigation"], correct: 1,
    answer: "Hand washing is the single most effective infection-control measure.",
  }),
  Q("In the chain of infection, the 'portal of entry' for a pathogen is:", "MCQ", "NEWBIE", 1, {
    options: ["A reservoir", "The route by which an organism enters a host", "The vector", "The source of the organism"], correct: 1,
    answer: "The portal of entry is the route by which the pathogen enters the host.",
  }),
  Q("Which of the following personal protective equipment is essential during delivery?", "MCQ", "NEWBIE", 1, {
    options: ["Face shield only", "Sterile gloves, apron, goggles and mask", "Sandals", "Finger rings"], correct: 1,
    answer: "Sterile gloves, waterproof apron, goggles and mask protect the midwife during delivery.",
  }),
  Q("Documentation of care in midwifery serves as:", "MCQ", "NEWBIE", 1, {
    options: ["A decoration", "A legal record of care given", "A personal diary", "An unofficial note"], correct: 1,
    answer: "Documentation is a contemporaneous legal record of the care provided.",
  }),
  Q("Which of the following is NOT a component of the midwife's role?", "MCQ", "NEWBIE", 1, {
    options: ["Antenatal care", "Newborn care", "Prescribing all drugs without limits", "Health education"], correct: 2,
    answer: "Midwives prescribe only within their scope and legal authority, not all drugs.",
  }),
  Q("The initial responsibility of a midwife at the first antenatal visit is to:", "MCQ", "NEWBIE", 1, {
    options: ["Immediately refer all women", "Take a full history and assess risk", "Book for cesarean", "Prescribe antibiotics"], correct: 1,
    answer: "A comprehensive history and risk assessment form the basis of antenatal care.",
  }),
  Q("Active listening involves:", "MCQ", "NEWBIE", 1, {
    options: ["Interrupting frequently", "Paying full attention and responding appropriately", "Writing notes constantly", "Advising immediately"], correct: 1,
    answer: "Active listening requires full attention, reflection and appropriate response.",
  }),
  Q("Which of these is an open-ended question?", "MCQ", "NEWBIE", 1, {
    options: ["Are you in pain?", "How do you feel about your pregnancy?", "Is your name Mary?", "Do you drink water?"], correct: 1,
    answer: "Open-ended questions invite detailed responses, as in 'How do you feel...?'.",
  }),
  Q("The main purpose of the partograph is to:", "MCQ", "NEWBIE", 1, {
    options: ["Record birth weight", "Monitor labor progress and detect delay", "Record immunizations", "Plan meals"], correct: 1,
    answer: "The partograph monitors cervical dilatation, descent, contractions and fetal heart to detect prolonged labor.",
  }),
  Q("Which of the following best describes 'quality of care'?", "MCQ", "NEWBIE", 1, {
    options: ["Fastest possible service", "Safe, effective, woman-centered, timely, efficient and equitable care", "Expensive care", "Care given only at night"], correct: 1,
    answer: "Quality care is safe, effective, woman-centered, timely, efficient and equitable.",
  }),
  Q("Define the term 'midwifery'.", "SHORT", "NEWBIE", 2, {
    answer: "Midwifery is the profession that provides skilled care to women during pregnancy, labor, birth and the postnatal period, and care of the newborn, including health education and family planning.",
  }),
  Q("List three (3) professional responsibilities of a midwife.", "SHORT", "NEWBIE", 2, {
    answer: "Acceptable answers include: providing antenatal/intranatal/postnatal care; early detection and referral of complications; health education and counseling; documentation; maintaining competence and confidentiality.",
  }),
  Q("Mention two (2) principles of the ICM Code of Ethics.", "SHORT", "NEWBIE", 2, {
    answer: "Examples: respect for human dignity and rights; confidentiality; informed decision-making; accountability; supporting the wellbeing of women and their families.",
  }),
  Q("What is meant by 'informed consent'?", "SHORT", "NEWBIE", 2, {
    answer: "Informed consent is the voluntary agreement of a client to a procedure or care after receiving adequate, understandable information about the nature, benefits, risks and alternatives.",
  }),
  Q("State two (2) routes of transmission of infection in a health facility.", "SHORT", "NEWBIE", 2, {
    answer: "Examples: contact (direct/indirect), droplet, airborne, blood-borne (sharps injury), contaminated equipment/environment.",
  }),
  Q("Why is documentation considered a legal record?", "SHORT", "NEWBIE", 2, {
    answer: "Because accurate, contemporaneous records can be produced in court to show the care given; poor or absent documentation may be presumed as care not given, and is a basis for litigation.",
  }),
  Q("Differentiate between ethics and law.", "SHORT", "NEWBIE", 2, {
    answer: "Ethics are moral principles guiding conduct (voluntary, internal), while law is a set of rules enacted and enforced by the state (compulsory, external).",
  }),
  Q("List two (2) items of equipment needed for a safe delivery.", "SHORT", "NEWBIE", 2, {
    answer: "Examples: sterile gloves, cord clamps, sterile scissors/knife, mucus extractor, delivery pack, linen, antiseptic, oxytocin, suction.",
  }),
  // ---- INTERMEDIATE ----
  Q("The principle of autonomy in midwifery care refers to:", "MCQ", "INTERMEDIATE", 2, {
    options: ["The midwife making all decisions", "Respecting the woman's right to make her own informed decisions", "The doctor deciding treatment", "Following hospital policy only"], correct: 1,
    answer: "Autonomy respects the woman's right to self-determination in her care.",
  }),
  Q("A midwife observes a colleague stealing drugs. The most appropriate action is:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Ignore it", "Report through the appropriate professional channels", "Demand a share", "Warn the colleague privately and drop it"], correct: 1,
    answer: "Professional accountability requires reporting misconduct through the appropriate channels.",
  }),
  Q("Which of the following is an example of vicarious liability?", "MCQ", "INTERMEDIATE", 2, {
    options: ["A midwife is personally liable for her own negligence only", "An employer is liable for negligent acts of employees within their employment", "Patients are liable for their care", "Governments are never liable"], correct: 1,
    answer: "Vicarious liability holds the employer responsible for employees' negligent acts committed during employment.",
  }),
  Q("In labor, which danger sign warrants immediate referral to a doctor?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Mild backache", "Vaginal bleeding after 28 weeks", "Frequent Braxton Hicks", "Leg cramps"], correct: 1,
    answer: "Antepartum haemorrhage is a danger sign requiring urgent review.",
  }),
  Q("The most appropriate ethical stance when a client refuses a blood transfusion on religious grounds is to:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Transfuse secretly", "Respect her informed refusal and discuss alternatives", "Force the transfusion", "Discharge her immediately"], correct: 1,
    answer: "Respect for autonomy means honoring an informed refusal while exploring alternatives.",
  }),
  Q("Which of the following is a barrier to effective communication in maternity care?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Using simple language", "Listening actively", "Use of medical jargon with clients", "Maintaining eye contact"], correct: 2,
    answer: "Medical jargon confuses clients and is a barrier to effective communication.",
  }),
  Q("A mother is grieving after a stillbirth. The midwife's best response is to:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Tell her to be strong and move on", "Acknowledge the loss and listen without judgment", "Avoid discussing the baby", "Blame her for the loss"], correct: 1,
    answer: "Compassionate acknowledgment and non-judgmental listening support the grieving mother.",
  }),
  Q("Which step is first in the chain of aseptic technique during delivery?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Opening the delivery pack", "Hand washing and wearing sterile gloves", "Giving antibiotics", "Performing a vaginal examination"], correct: 1,
    answer: "Hand hygiene and sterile attire precede any aseptic procedure.",
  }),
  Q("Under the law, consent for emergency cesarean section in an unconscious, unaccompanied woman:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Cannot be done under any circumstance", "May proceed in her best interest as an emergency", "Requires a court order", "Must wait for relatives"], correct: 1,
    answer: "In life-threatening emergencies, treatment may proceed in the patient's best interest (implied consent).",
  }),
  Q("Which of the following is a notifiable disease relevant to midwifery?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Varicose veins", "Neonatal tetanus", "Physiological jaundice", "Stretch marks"], correct: 1,
    answer: "Neonatal tetanus and certain infections are notifiable to health authorities.",
  }),
  Q("A woman reports she was physically abused at home. The midwife should:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Ignore the report", "Offer support, document carefully and refer to social services", "Confront the husband publicly", "Refuse further care"], correct: 1,
    answer: "The midwife offers safety, support and referral while documenting and maintaining confidentiality.",
  }),
  Q("Which of the following shows the correct order of the infection chain?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Host-agent-environment", "Agent-reservoir-portal of exit-mode of transmission-portal of entry-susceptible host", "Environment-host-agent", "Portal-entry-agent-host"], correct: 1,
    answer: "The chain is agent → reservoir → portal of exit → mode of transmission → portal of entry → susceptible host.",
  }),
  Q("An important principle in correcting a mistake in a patient's record is to:", "MCQ", "INTERMEDIATE", 2, {
    options: ["Erase the mistake completely", "Draw a single line through it, date and sign", "Cover with correction fluid", "Tear the page out"], correct: 1,
    answer: "Records are corrected with a single line, dated and signed, never erased.",
  }),
  Q("Which of these reflects 'respectful maternity care'?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Ignoring client questions", "Informed consent and freedom from abuse and discrimination", "Forcing positions during labor", "Withholding pain relief"], correct: 1,
    answer: "Respectful maternity care upholds dignity, informed choice and freedom from mistreatment.",
  }),
  Q("The 'standard of care' in a negligence case is judged against:", "MCQ", "INTERMEDIATE", 2, {
    options: ["What the midwife personally thinks", "What a competent midwife with similar training would do", "Hospital profits", "The doctor's preference"], correct: 1,
    answer: "The standard of care is compared to what a competent practitioner would reasonably do.",
  }),
  Q("Which of the following best describes the role of the midwife in community health education?", "MCQ", "INTERMEDIATE", 2, {
    options: ["Distribute drugs only", "Empower individuals and communities to make healthy choices", "Diagnose all diseases", "Sell nutritional supplements"], correct: 1,
    answer: "Health education empowers people to make informed health decisions.",
  }),
  Q("List four (4) principles of the ICM Global Code of Ethics.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Examples: respect for human dignity; respect for confidentiality; informed decision-making; accountability for one's own practice; promoting the health of women and newborns; appropriate use of technology.",
  }),
  Q("Explain the term 'duty of care' as applied to midwifery.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Duty of care is the legal obligation of the midwife to provide competent, reasonable care to the client once a professional relationship is established; breach causing harm constitutes negligence.",
  }),
  Q("Describe three (3) techniques of effective communication with a laboring woman.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Examples: active listening; clear, simple, respectful language; appropriate touch and eye contact; providing information and reassurance; encouraging questions; involving her in decisions.",
  }),
  Q("State the steps of aseptic technique used in preparation for delivery.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Hand hygiene; wearing sterile gloves/gown/mask/goggles; preparing the sterile field correctly; cleaning the perineum with antiseptic; maintaining sterility of equipment; and preventing contamination during the procedure.",
  }),
  Q("What actions should a midwife take after accidental needle-stick injury?", "SHORT", "INTERMEDIATE", 3, {
    answer: "Wash wound with soap and water, encourage bleeding, apply antiseptic, report immediately, seek post-exposure prophylaxis (PEP) and baseline serology for HIV/HBV/HCV, and follow up.",
  }),
  Q("Explain why accuracy in record keeping is a legal requirement.", "SHORT", "INTERMEDIATE", 3, {
    answer: "Accurate records provide evidence of the care given, support continuity and handover, protect the midwife in litigation, and are admissible in court; errors or omissions may be treated as care not given.",
  }),
  Q("Discuss the importance of the code of conduct to the practice of midwifery.", "ESSAY", "INTERMEDIATE", 5, {
    answer: "The code defines professional standards, guides ethical decision-making, protects clients from misconduct, maintains public trust, sets expectations of competence and confidentiality, provides a framework for discipline, and promotes the image and accountability of the profession.",
  }),
  // ---- ADVANCED ----
  Q("A woman at 34 weeks has a history of previous cesarean section. The midwife's most appropriate plan is to:", "MCQ", "ADVANCED", 2, {
    options: ["Plan repeat cesarean unconditionally", "Assess for trial of labor after cesarean and discuss options", "Induce labor at 34 weeks", "Ignore the history"], correct: 1,
    answer: "TOLAC assessment (VBAC) considers indication, interval and pelvic factors, with informed discussion.",
  }),
  Q("In a maternal death audit, the purpose is to:", "MCQ", "ADVANCED", 2, {
    options: ["Blame the midwife", "Identify avoidable factors and improve care", "Punish the facility", "Close the maternity unit"], correct: 1,
    answer: "Maternal death audits identify avoidable factors to prevent future deaths, not to blame.",
  }),
  Q("A woman refuses a life-saving cesarean for her distressed fetus. The midwife should:", "MCQ", "ADVANCED", 2, {
    options: ["Proceed against her will", "Delay discussion and involve the multidisciplinary team, ethics committee and legal counsel", "Discharge her", "Coerce her consent"], correct: 1,
    answer: "Complex refusal requires multidisciplinary, ethical and legal review while maintaining respect and seeking the least restrictive resolution.",
  }),
  Q("Which of the following is a signal function of comprehensive emergency obstetric care (CEmOC)?", "MCQ", "ADVANCED", 2, {
    options: ["Normal delivery only", "Cesarean section and blood transfusion", "Vaccination", "Family planning counseling"], correct: 1,
    answer: "CEmOC includes cesarean section and blood transfusion; BEmOC includes parenteral oxytocics, antibiotics and anticonvulsants.",
  }),
  Q("Vicarious liability in a public hospital means:", "MCQ", "ADVANCED", 2, {
    options: ["Midwives are never liable", "The employing authority may be liable for employees' negligent acts in the course of duty", "Only doctors are liable", "Patients are liable"], correct: 1,
    answer: "Employers bear vicarious liability for negligent acts of staff acting within the scope of employment.",
  }),
  Q("In auditing a near-miss (severe maternal morbidity), which is most useful?", "MCQ", "ADVANCED", 2, {
    options: ["Counting all deliveries", "Detailed case review to identify system gaps and delays", "Interviewing only doctors", "Reviewing birth weights"], correct: 1,
    answer: "Near-miss audits provide rich case detail to identify delays and system failures.",
  }),
  Q("A midwife discovers she gave an incorrect drug dose. The best action is to:", "MCQ", "ADVANCED", 2, {
    options: ["Conceal it", "Report immediately, manage the client, document honestly", "Blame the pharmacy", "Wait for symptoms"], correct: 1,
    answer: "Honest, prompt disclosure and client management uphold professional integrity and patient safety.",
  }),
  Q("Which of the following scenarios represents a breach of the principle of justice?", "MCQ", "ADVANCED", 2, {
    options: ["Giving the same care to all", "Prioritizing paying patients over the poor", "Using evidence-based protocols", "Maintaining confidentiality"], correct: 1,
    answer: "Justice requires equitable allocation of care regardless of ability to pay.",
  }),
  Q("Under mandatory reporting, a midwife must report:", "MCQ", "ADVANCED", 2, {
    options: ["Routine deliveries", "Suspected child abuse and notifiable diseases", "Normal newborn jaundice", "Breastfeeding mothers"], correct: 1,
    answer: "Child abuse and notifiable diseases are legally reportable.",
  }),
  Q("The most important principle when documenting a telephone referral is to:", "MCQ", "ADVANCED", 2, {
    options: ["Record only the outcome", "Record time, content, advice given and receiver's name", "Write it in pencil", "Skip documentation"], correct: 1,
    answer: "Timed, detailed referral records capture the content, advice and parties involved.",
  }),
  Q("Explain the difference between standard precautions and transmission-based precautions.", "SHORT", "ADVANCED", 3, {
    answer: "Standard precautions apply to all clients (hand hygiene, PPE, safe sharps). Transmission-based precautions are added for known/suspected infections spread by contact, droplet or airborne routes (e.g., gowning, isolation, negative pressure).",
  }),
  Q("Outline the steps of a maternal death review (confidential enquiry).", "SHORT", "ADVANCED", 3, {
    answer: "Identify the death; collect clinical and contextual data; convene a multidisciplinary review panel; determine causes and avoidable factors; make recommendations; implement and monitor changes; feedback to staff (no-blame).",
  }),
  Q("A client discloses an intention to self-harm after delivery. What is your immediate professional duty?", "SHORT", "ADVANCED", 3, {
    answer: "Take it seriously; ensure her safety (never leave alone), conduct a risk assessment, involve the mental health team urgently, inform the family with her consent where safe, document, and arrange emergency psychiatric review.",
  }),
  Q("Describe the midwife's legal responsibility in obtaining consent for an instrumental delivery.", "SHORT", "ADVANCED", 3, {
    answer: "Explain the indication, risks, benefits and alternatives in understandable terms; allow questions and time; document the discussion and consent; respect refusal and explore alternatives with the team.",
  }),
  Q("Discuss the ethical and professional issues in the refusal of care by a midwife on conscientious grounds.", "ESSAY", "ADVANCED", 6, {
    answer: "Address: the tension between personal moral beliefs and professional duty; the duty to refer the client promptly to a competent provider; ensuring refusal does not abandon the client or cause harm; maintaining non-judgmental attitude; institutional policies on conscientious objection; and balancing autonomy of both midwife and client with the ethical principle of non-maleficence and the woman's right to care.",
  }),
  Q("Analyze how a 'no-blame culture' improves maternity safety.", "ESSAY", "ADVANCED", 6, {
    answer: "A no-blame culture encourages reporting of errors and near-misses; facilitates root-cause analysis; identifies system weaknesses rather than punishing individuals; improves learning, guidelines, training and safety; reduces fear and concealment; and ultimately lowers maternal and neonatal harm.",
  }),
  // ---- PROFESSIONAL ----
  Q("In a case of suspected negligence involving a midwife, the 'four D's' that must be proven are:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Duty, breach, damage, causation", "Danger, delay, death, disorder", "Diagnosis, drug, dose, date", "Duty, doubt, delay, decision"], correct: 0,
    answer: "Negligence requires duty of care, breach of duty, damage and causation.",
  }),
  Q("A midwife is summoned to testify in court regarding a delivery she attended 18 months ago. The best preparation is to:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Testify from memory", "Review the contemporaneous records carefully and testify factually", "Refuse to attend", "Submit a written excuse"], correct: 1,
    answer: "Testifying requires reviewing contemporaneous records and giving factual, impartial evidence.",
  }),
  Q("Which of the following represents the highest-level ethical duty when a conflict arises between a client's autonomy and professional recommendation?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Imposing professional will", "Shared decision-making through counseling and information", "Court order always", "Ignoring the client's choice"], correct: 1,
    answer: "Shared decision-making respects autonomy while providing expert information.",
  }),
  Q("A staff member is found to be practicing while impaired by alcohol. The midwife's professional obligation is to:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Cover for the colleague", "Ensure client safety and report the impairment to management", "Keep quiet to protect the team", "Offer to do the work silently"], correct: 1,
    answer: "Client safety and professional duty require reporting an impaired practitioner.",
  }),
  Q("Which factor most strongly determines whether an employer is vicariously liable?", "MCQ", "PROFESSIONAL", 2, {
    options: ["The employee's intent", "Whether the negligent act occurred within the course of employment", "The employee's salary", "Whether the client complained"], correct: 1,
    answer: "Liability attaches to acts done within the scope of employment.",
  }),
  Q("In risk management for maternity services, the most proactive strategy is:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Waiting for adverse events", "Prospective hazard identification, clinical audit and simulation training", "Blame after incidents", "Insurance only"], correct: 1,
    answer: "Proactive risk management prevents harm before it occurs.",
  }),
  Q("The '3 delays' model of maternal mortality identifies delays in:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Seeking care, reaching care, receiving care", "Bathing, feeding, dressing", "Booking, follow-up, discharge", "Diagnosis, surgery, recovery"], correct: 0,
    answer: "The three delays are seeking care, reaching the facility, and receiving adequate care at the facility.",
  }),
  Q("A hospital implements a checklist before cesarean section. This is best described as:", "MCQ", "PROFESSIONAL", 2, {
    options: ["Unnecessary paperwork", "A patient-safety intervention based on evidence", "A punitive measure", "A cost-cutting tool"], correct: 1,
    answer: "Surgical safety checklists reduce errors and mortality.",
  }),
  Q("Which of the following demonstrates accountability in professional practice?", "MCQ", "PROFESSIONAL", 2, {
    options: ["Hiding an error", "Accepting responsibility and taking corrective action", "Blaming the system only", "Avoiding complex cases"], correct: 1,
    answer: "Accountability means accepting responsibility for one's actions and improving practice.",
  }),
  Q("Critically evaluate the role of the midwife in reducing maternal mortality in low-resource settings.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "The midwife reduces maternal mortality through skilled attendance at birth; timely recognition and referral of complications; provision of BEmOC signal functions; community health education and birth preparedness; family planning to reduce high-risk pregnancies; quality antenatal care; respectful, evidence-based care; and participation in audits and policy. Constraints (staffing, supplies, transport) must be addressed systemically.",
  }),
  Q("Develop a professional response plan for a midwife who witnesses workplace bullying that endangers clients.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "A comprehensive plan: recognize and document incidents; address the colleague directly and professionally; report through formal channels (manager, HR, ethics committee); involve occupational health and professional council if needed; maintain client safety; provide support to victims; advocate for a respectful workplace policy; and participate in training on professional behavior.",
  }),
  Q("Explain how the principles of ethics can guide decision-making in a Jehovah's Witness who refuses blood transfusion postpartum.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Respect autonomy (informed refusal); assess capacity; provide full information on risks/alternatives (iron, tranexamic acid, cell salvage, optimize Hb antenatally); explore advance directives; involve the ethics committee and legal counsel; provide supportive care without coercion; document thoroughly; ensure staff respect the decision while delivering all other care; and balance beneficence with the client's values.",
  }),
  Q("Discuss the legal and ethical framework for reporting professional misconduct of a colleague.", "ESSAY", "PROFESSIONAL", 8, {
    answer: "Address: the duty to report (mandatory for serious misconduct); distinction between confidentiality and whistleblowing; using the correct channels (supervisor, professional council); documentation and evidence; protection against victimization (whistleblower laws); avoiding gossip and defamation; balancing loyalty with public protection; and the professional body's disciplinary process.",
  }),
];