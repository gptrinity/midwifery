// Seed script: creates admin user, subjects, topics and the question bank.
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");

const prisma = new PrismaClient();

const subjectsData = require("./data/subjects");
const qFoundation = require("./data/questions-foundation");
const qAnatomy = require("./data/questions-anatomy");
const qNormal = require("./data/questions-normal");
const qComplicated = require("./data/questions-complicated");
const qCommunity = require("./data/questions-community");
const qPsych = require("./data/questions-psych");
const qPsychAdv = require("./data/questions-psych-adv");
const qInfant = require("./data/questions-infant");
const qInfantAdv = require("./data/questions-infant-adv");
const qNmcnPast = require("./data/questions-nmcn-past");

// topic slug -> keywords (substring match, lower-cased)
const TOPIC_KEYWORDS = {
  "foundation-of-midwifery": {
    "history-development": ["history", "oldest", "traditional birth", " tba", "safe motherhood", "1987", "midwives act", "regulation", "profession", "development of midwifery"],
    "roles-responsibilities": ["role", "responsibilit", "scope", "competence", "accountab", "multidisciplinary"],
    "ethics-code": ["ethic", "moral", "beneficence", "autonomy", "non-maleficence", "justice", "confidentiality", "code of conduct", "dignity", "integrity", "values"],
    "legal-issues": ["legal", "law", "negligence", "liability", "duty of care", "consent", "court", "litigation", "malpractice", "mandatory", "informed consent", "testify"],
    "communication-counseling": ["communication", "counsel", "listening", "question", "language", "jargon", "barrier", "active listen"],
    "infection-control": ["infection", "hand washing", "hygiene", "aseptic", "sterile", "ppe", "needle", "standard precaution", "chain of infection", "waste", "sharps", "transmission"],
    "maternal-health-policies": ["policy", "maternal mortality", "program", "indicator", "emergency obstetric", "death review", "near-miss", "monitoring and evaluation"],
    "documentation": ["document", "record", "partograph", "chart", "note"],
    "quality-of-care": ["quality", "respectful", "audit", "standard of care", "checklist", "risk management"],
  },
  "applied-anatomy-physiology": {
    "female-reproductive-system": ["reproductive system", "uterus", "ovary", "ovarian", "fallopian", "endometrium", "myometrium", "menstrual", "ovulation", "cycle"],
    "pelvis-fetal-skull": ["pelvis", "pelvic", "skull", "gynaecoid", "android", "brim", "diameter", "fontanelle", "fontanel", "biparietal"],
    "endocrine-pregnancy": ["endocrine", "hcg", "hpl", "hormone", "thyroid", "corpus luteum", "luteotroph"],
    "cardiovascular-respiratory": ["cardiovascular", "blood volume", "cardiac", "heart", "respiration", "lung", "supine", "hypotension", "respiratory"],
    "renal-gastro": ["renal", "kidney", "urine", "glycosuria", "gastro", "constipation", "liver", "bladder", "frequency"],
    "placenta-membranes": ["placenta", "membrane", "cord", "umbilical"],
    "fetal-circulation": ["fetal circulation", "foramen", "ductus", "shunt", "hbf", "haemoglobin", "fetal haemoglobin", "circulation"],
    "breast-lactation": ["breast", "lactat", "prolactin", "oxytocin", "colostrum", "milk", "let-down"],
    "hormones-pregnancy": ["relaxin", "parturition", "labor onset", "progesterone", "estrogen", "cortisol"],
  },
  "normal-midwifery": {
    "antenatal-care": ["booking", "antenatal care", "antenatal", "visit", "first visit", "focus"],
    "antenatal-assessment": ["assessment", "screening", "fundal", "leopold", "fetal heart", "palpation", "engagement"],
    "nutrition-pregnancy": ["nutrition", "diet", "iron", "folate", "folic", "weight gain", "supplement", "vitamin", "energy"],
    "minor-disorders": ["minor disorder", "heartburn", "nausea", "constipation", "backache", "leg cramp", "varicose", "oedema of", "morning sickness"],
    "physiology-labor": ["true labor", "braxton", "contraction", "onset of labor", "show", "pre-labor", "physiology of labor"],
    "stages-mechanisms": ["stage", "mechanism", "engagement", "descent", "flexion", "rotation", "crowning", "dilatation", "first stage", "second stage", "third stage"],
    "intrapartum-care": ["partograph", "intrapartum", "fetal monitoring", "meconium", "amniotomy", "fetal distress", "deceleration", "ctg", "alert line", "action line"],
    "pain-relief": ["pain relief", "analgesic", "epidural", "pethidine", "entonox", "analgesia", "pain"],
    "postnatal-care": ["postnatal", "puerperium", "lochia", "involution", "perineal", "postpartum"],
    "breastfeeding": ["breastfeed", "lactation", "attachment", "latch", "mastitis", "engorgement", "colostrum", "sore nipples", "nipple"],
  },
  "complicated-midwifery": {
    "antepartum-haemorrhage": ["antepartum", "placenta praevia", "abruptio", "abruption", "bleeding", "vasa praevia", "blood loss"],
    "postpartum-haemorrhage": ["postpartum haemorrhage", "pph", "atony", "retained placenta", "4 ts", "tranexamic", "b-lynch", "inversion", "hysterectomy"],
    "hypertensive-disorders": ["pre-eclampsia", "eclampsia", "hypertension", "hypertensive", "hellp", "magnesium", "labetalol", "nifedipine", "proteinuria"],
    "obstructed-labor": ["obstructed", "prolonged", "bandl", "cpd", "arrest", "action line"],
    "malpresentations": ["breech", "malpresentation", "transverse", "face presentation", "brow", "occipito-posterior", "occipito-post", "shoulder dystocia"],
    "multiple-pregnancy": ["twin", "multiple pregnancy", "monochorionic", "ttts", "triplet"],
    "ectopic-abortion": ["ectopic", "abortion", "miscarriage", "methotrexate", "salpingectomy"],
    "gestational-diabetes": ["diabetes", "gdm", "glucose", "ogtt", "macrosomia"],
    "anaemia-pregnancy": ["anaemia", "anemia", "iron", "hb", "rh", "anti-d", "sickle", "rhesus"],
    "uterine-rupture": ["rupture", "scar", "vbac", "trial of labor", "tolac"],
    "infection-puerperium": ["sepsis", "infection", "puerperal", "endometritis", "mastitis", "ut", "hiv", "syphilis", "antibiotic", "septic"],
    "fetal-neonatal-complications": ["fetal distress", "cord prolapse", "iugr", "fetal", "stillbirth", "perinatal", "asphyxia"],
  },
  "community-midwifery": {
    "community-health": ["community health", "community", "population", "determinants", "primary health", "alma-ata", "phc", "vulnerable"],
    "mch-services": ["mch", "maternal and child health", "safe motherhood", "maternal health"],
    "family-planning": ["family planning", "contraceptive", "iud", "condom", "pill", "implant", "sterilization", "emergency contraception", "lam", "lactational amenorrhoea", "unmet need", "cpr"],
    "immunization": ["immunization", "vaccine", "vaccination", "cold chain", "bcg", "tetanus", "measles", "polio", "opv", "vvm", "coverage"],
    "home-visits": ["home visit", "home delivery", "postnatal home", "referral protocol"],
    "health-education": ["health education", "education", "promotion", "teaching"],
    "epidemiology": ["epidemiology", "incidence", "prevalence", "mortality", "indicator", "mdsr", "audit", "near-miss", "ratio", "rate"],
    "phc-referral": ["referral", "primary health care", "emergency obstetric", "three delays", "skilled birth", "emoc", "bemoc", "maternity waiting"],
  },
  "psychology-in-midwifery": {
    "psych-changes-pregnancy": ["psychological change", "ambivalence", "mood swings", "transition", "psychosocial", "changes in pregnancy"],
    "postnatal-depression": ["postnatal depression", "pnd", "baby blues", "edinburgh", "epds", "mood disorder", "postpartum depression"],
    "anxiety-stress": ["anxiety", "stress", "hpa", "cortisol", "tokophobia", "ptsd", "traumatic"],
    "grief-bereavement": ["grief", "bereavement", "loss", "stillbirth", "kubler", "disenfranchised"],
    "bonding-attachment": ["bonding", "attachment", "skin-to-skin", "bond"],
    "counseling-skills": ["counsel", "client-centered", "non-directive", "counselling"],
    "psych-labor": ["labor pain", "fear", "labor", "childbirth", "pain perception"],
    "family-support": ["family", "support", "partner", "teenager", "adolescent", "teen"],
    "perinatal-mental-health": ["mental health", "psychosis", "suicide", "puerperal psychosis", "screening", "mental illness", "stepped care", "cbt", "bipolar"],
  },
  "infant-care": {
    "normal-newborn": ["normal newborn", "immediate care", "vitamin k", "cord care", "eye prophylaxis", "normal newborn care"],
    "newborn-assessment": ["assessment", "examination", "apgar", "ballard", "gestational age", "birth weight"],
    "asphyxia-resuscitation": ["asphyxia", "resuscitation", "ventilation", "compression", "adrenaline", "ppv", "gasping"],
    "prematurity-lbw": ["preterm", "premature", "low birth weight", "lbw", "vlbw", "rds", "surfactant", "kangaroo"],
    "neonatal-infections": ["sepsis", "infection", "conjunctivitis", "omphalitis", "gbs", "antibiotic", "ophthalmia"],
    "neonatal-jaundice": ["jaundice", "bilirubin", "phototherapy", "kernicterus", "exchange"],
    "congenital-anomalies": ["congenital", "anomaly", "imperforate", "heart disease", "cleft", "anencephaly"],
    "newborn-feeding": ["feeding", "breastfeed", "formula", "hypoglycaemia", "milk intake", "feed"],
    "reflexes-growth": ["reflex", "moro", "rooting", "grasp", "growth", "milestone", "development"],
    "kangaroo-immunization": ["kangaroo", "immunization"],
  },
};

function pickTopic(subjectSlug, text, level) {
  const map = TOPIC_KEYWORDS[subjectSlug];
  if (!map) return null;
  const hay = ` ${text.toLowerCase()} `;
  let best = null;
  let bestScore = -1;
  for (const [slug, kws] of Object.entries(map)) {
    let score = 0;
    for (const kw of kws) {
      if (hay.includes(kw)) score++;
    }
    if (score > bestScore) {
      bestScore = score;
      best = slug;
    }
  }
  if (bestScore <= 0) return null;
  return best;
}

async function main() {
  console.log("Seeding database...");

  const adminEmail = process.env.ADMIN_EMAIL || "admin@midwifery.local";
  const adminPassword = process.env.ADMIN_PASSWORD || "admin1234";
  const passwordHash = await bcrypt.hash(adminPassword, 10);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      name: "Administrator",
      email: adminEmail,
      passwordHash,
      role: "ADMIN",
    },
  });
  console.log("Admin user ready:", adminEmail);

  // Optional demo student
  const studentEmail = "student@midwifery.local";
  const existingStudent = await prisma.user.findUnique({ where: { email: studentEmail } });
  if (!existingStudent) {
    await prisma.user.create({
      data: {
        name: "Demo Student",
        email: studentEmail,
        passwordHash: await bcrypt.hash("student1234", 10),
        role: "STUDENT",
      },
    });
    console.log("Demo student created:", studentEmail);
  }

  const questionFiles = [
    ["foundation-of-midwifery", [qFoundation]],
    ["applied-anatomy-physiology", [qAnatomy]],
    ["normal-midwifery", [qNormal]],
    ["complicated-midwifery", [qComplicated]],
    ["community-midwifery", [qCommunity]],
    ["psychology-in-midwifery", [qPsych, qPsychAdv]],
    ["infant-care", [qInfant, qInfantAdv]],
  ];

  // NMCN past questions are pre-categorized by subject in the data file
  const nmcnFiles = [
    ["foundation-of-midwifery", [qNmcnPast.filter((q) => q.text.toLowerCase().includes("nmcn") || q.text.toLowerCase().includes("council") || q.text.toLowerCase().includes("duty of care") || q.text.toLowerCase().includes("informed consent") || q.text.toLowerCase().includes("never event") || q.text.toLowerCase().includes("partograph") || q.text.toLowerCase().includes("breech") || q.text.toLowerCase().includes("true labor"))]],
    ["applied-anatomy-physiology", [qNmcnPast.filter((q) => q.text.toLowerCase().includes("diameter") || q.text.toLowerCase().includes("blood volume") || q.text.toLowerCase().includes("progesterone") || q.text.toLowerCase().includes("foramen ovale") || q.text.toLowerCase().includes("fetal heart rate"))]],
    ["normal-midwifery", [qNmcnPast.filter((q) => q.text.toLowerCase().includes("third stage") || q.text.toLowerCase().includes("engorgement") || q.text.toLowerCase().includes("second stage") || q.text.toLowerCase().includes("apgar") || q.text.toLowerCase().includes("breastfeeding") || q.text.toLowerCase().includes("lochia"))]],
    ["complicated-midwifery", [qNmcnPast.filter((q) => q.text.toLowerCase().includes("postpartum haemorrhage") || q.text.toLowerCase().includes("pre-eclampsia") || q.text.toLowerCase().includes("placenta praevia") || q.text.toLowerCase().includes("shoulder dystocia") || q.text.toLowerCase().includes("helperr") || q.text.toLowerCase().includes("ectopic") || q.text.toLowerCase().includes("magnesium sulfate"))]],
    ["community-midwifery", [qNmcnPast.filter((q) => q.text.toLowerCase().includes("alma-ata") || q.text.toLowerCase().includes("cold chain") || q.text.toLowerCase().includes("maternal mortality") || q.text.toLowerCase().includes("lam") || q.text.toLowerCase().includes("bcg") || q.text.toLowerCase().includes("three delays") || q.text.toLowerCase().includes("opv"))]],
    ["psychology-in-midwifery", [qNmcnPast.filter((q) => q.text.toLowerCase().includes("edinburgh") || q.text.toLowerCase().includes("puerperal psychosis") || q.text.toLowerCase().includes("tokophobia") || q.text.toLowerCase().includes("continuous support") || q.text.toLowerCase().includes("baby blues"))]],
    ["infant-care", [qNmcnPast.filter((q) => q.text.toLowerCase().includes("neonatal resuscitation") || q.text.toLowerCase().includes("exchange transfusion") || q.text.toLowerCase().includes("respiratory distress") || q.text.toLowerCase().includes("neonatal sepsis") || q.text.toLowerCase().includes("kangaroo") || q.text.toLowerCase().includes("vitamin k") || q.text.toLowerCase().includes("birth weight") || q.text.toLowerCase().includes("eye prophylaxis"))]],
  ];

  let totalQuestions = 0;

  const allFiles = [...questionFiles, ...nmcnFiles];

  for (const [subjectSlug, fileArrays] of allFiles) {
    const subjectData = subjectsData.find((s) => s.slug === subjectSlug);
    if (!subjectData) {
      console.warn("Missing subject data for", subjectSlug);
      continue;
    }

    const subject = await prisma.subject.upsert({
      where: { slug: subjectSlug },
      update: { name: subjectData.name, description: subjectData.description, icon: subjectData.icon, color: subjectData.color, order: subjectData.order },
      create: {
        slug: subjectSlug,
        name: subjectData.name,
        description: subjectData.description,
        icon: subjectData.icon,
        color: subjectData.color,
        order: subjectData.order,
      },
    });

    // topics
    const topicIds = {};
    for (const t of subjectData.topics) {
      const rec = await prisma.topic.upsert({
        where: { subjectId_slug: { subjectId: subject.id, slug: t.slug } },
        update: { name: t.name, summary: t.summary, order: t.order },
        create: { subjectId: subject.id, slug: t.slug, name: t.name, summary: t.summary, order: t.order },
      });
      topicIds[t.slug] = rec.id;
    }

    const topicList = subjectData.topics;
    let subjectCount = 0;

    for (const arr of fileArrays) {
      for (const q of arr) {
        const topicSlug = pickTopic(subjectSlug, q.text + " " + (q.answer || ""), q.level);
        const topic = topicList.find((t) => t.slug === topicSlug) || topicList[0];

        await prisma.question.create({
          data: {
            subjectId: subject.id,
            topicId: topicIds[topic.slug],
            text: q.text,
            type: q.type,
            level: q.level,
            options: JSON.stringify(q.options || []),
            correctIndex: q.correct !== undefined && q.correct !== null ? q.correct : null,
            answer: q.answer || "",
            marks: q.marks || 2,
            year: q.year || "",
            source: q.source || "original",
          },
        });
        subjectCount++;
      }
    }
    totalQuestions += subjectCount;
    console.log(`${subjectSlug}: ${subjectCount} questions`);
  }

  console.log(`Seed complete. Total questions: ${totalQuestions}`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });