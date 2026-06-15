/* =========================================================
   IIHHCP002 — 2018 Consensus Guidelines Interactive Tool
   SINGLE SOURCE OF CONTENT
   ---------------------------------------------------------
   Authoritative source (verbatim meaning preserved):
   Mollan SP, Davies B, Silver NC, et al. Idiopathic
   intracranial hypertension: consensus guidelines on
   management. J Neurol Neurosurg Psychiatry 2018;89:1088–1100.
   doi:10.1136/jnnp-2017-317440  (Open access, CC BY 4.0)

   IMPORTANT METHODOLOGY NOTE (read CG_META.gradingNote):
   The 2018 guideline is a DELPHI CONSENSUS document. Every
   statement reached ≥75% agreement from the specialist
   interest group and wider Delphi panel. The authors did NOT
   assign formal evidence grades (no A/B/C/GPP scheme appears
   in the paper). To avoid fabricating an evidence hierarchy
   the original authors never published, each recommendation
   here carries a STRENGTH label derived from the guideline's
   own directive language (must / should / could-may / not
   recommended), plus an EVIDENCE note describing the actual
   underlying evidence base. This is faithful to the source.
   ========================================================= */

window.CG_META = {
  title: "2018 Consensus Guidelines on the Management of IIH",
  citation: "Mollan SP, Davies B, Silver NC, et al. J Neurol Neurosurg Psychiatry 2018;89:1088–1100.",
  doi: "10.1136/jnnp-2017-317440",
  sourceUrl: "https://jnnp.bmj.com/content/89/10/1088",
  audience: "Neurologists, ophthalmologists, neurosurgeons, neuroradiologists, orthoptists, emergency and primary care clinicians, and allied health professionals who investigate and manage adult IIH.",

  /* Strength scheme — derived from the guideline's modal language */
  strengths: {
    must:   { label: "Must / Mandatory",   short: "Must",  tone: "alert",   note: "Directive (“must” / “mandatory”) — the guideline states this as a requirement." },
    should: { label: "Should / Recommended", short: "Should", tone: "primary", note: "Recommended (“should”) — the consensus position for usual practice." },
    may:    { label: "May / Could (option)", short: "May",  tone: "muted",   note: "An option (“may” / “could”) — reasonable in selected patients; clinician judgement applies." },
    against:{ label: "Not recommended",     short: "Against", tone: "warning", note: "The guideline advises against this, generally or routinely." }
  },

  gradingNote:
    "The 2018 guideline is a UK Delphi consensus statement: all statements obtained ≥75% agreement from the specialist interest group and wider Delphi panel, with international expert and professional-body review (ABN, BASH, RCOphth, SBNS). It is NOT an evidence-graded guideline — the authors did not publish an A/B/C/GPP scheme, and explicitly note that high-quality evidence is lacking for most statements. The “strength” labels in this tool reflect the guideline’s own wording (must / should / could / not recommended), not a formal grade. Where genuine trial evidence exists (e.g. the IIH Treatment Trial for acetazolamide), it is named in the Evidence line. Always read the full paper for the complete rationale and the “Uncertainty” caveats reproduced here.",

  categories: [
    { id: "diagnosis",  label: "Diagnosis & investigation", color: "primary" },
    { id: "treatment",  label: "Treatment & management",     color: "teal"    },
    { id: "monitoring", label: "Follow-up & monitoring",     color: "green"   },
    { id: "referral",   label: "Referral & escalation",      color: "indigo"  }
  ]
};

/* ---------------------------------------------------------
   Each recommendation:
     id        unique slug
     q         source question / section in the paper
     category  diagnosis | treatment | monitoring | referral
     principle optional grouping (the 3 management principles)
     strength  must | should | may | against
     title     short scannable headline
     summary   the recommendation in brief (quick-reference)
     points[]  the consensus statements (HTML allowed)
     evidence  one line on the underlying evidence base
     uncertainty  the guideline's own "Uncertainty" caveat (optional)
   --------------------------------------------------------- */
window.CG_RECS = [

  /* ===================== DIAGNOSIS ===================== */
  {
    id: "dx-blood-pressure",
    q: "Q1 — Investigating papilloedema",
    category: "diagnosis",
    strength: "must",
    title: "Measure blood pressure to exclude malignant hypertension",
    summary: "Blood pressure must be measured in every patient with papilloedema to exclude malignant hypertension.",
    points: [
      "Blood pressure <strong>must</strong> be measured to exclude malignant hypertension.",
      "Malignant hypertension is defined here as diastolic BP ≥120 mmHg or systolic BP ≥180 mmHg."
    ],
    evidence: "Consensus statement; BP threshold per 2017 ACC/AHA guidance."
  },
  {
    id: "dx-ophthalmology",
    q: "Q1 — Investigating papilloedema",
    category: "diagnosis",
    strength: "should",
    title: "Confirm papilloedema and assess imminent visual risk",
    summary: "All patients should have papilloedema confirmed and the imminent risk to vision assessed, recording a defined set of ophthalmic measures.",
    points: [
      "Record in the presence of papilloedema: <strong>visual acuity</strong>, <strong>pupil examination</strong>, <strong>intraocular pressure</strong> (to exclude hypotony, a rare cause of disc swelling), <strong>formal visual field test (perimetry)</strong>, and <strong>dilated fundal examination</strong> to grade severity and exclude ocular causes of disc swelling.",
      "Document the fundus with drawings and record optic nerve head findings (hyperaemia, haemorrhages, cotton-wool spots, vessel obscuration).",
      "Photographs and/or OCT imaging are useful.",
      "Where visual function is threatened, regular ophthalmic examination must occur as it will influence timely management."
    ],
    evidence: "Consensus statement (good-practice diagnostic standard).",
    uncertainty: "Where there is diagnostic uncertainty about papilloedema vs pseudopapilloedema, an experienced clinician should be consulted early before invasive tests are performed."
  },
  {
    id: "dx-neuro-exam",
    q: "Q1 — Investigating papilloedema",
    category: "diagnosis",
    strength: "should",
    title: "Perform neurological examination including cranial nerves",
    summary: "Record a cranial nerve examination. In IIH there should typically be no cranial nerve involvement other than a sixth nerve palsy.",
    points: [
      "Record cranial nerve examination.",
      "Where IIH is suspected, typically there should be <strong>no cranial nerve involvement other than sixth cranial nerve palsy/palsies</strong>.",
      "If other cranial nerves or other pathological findings are involved, an alternative diagnosis should be considered."
    ],
    evidence: "Consensus statement."
  },
  {
    id: "dx-neuroimaging",
    q: "Q1 — Investigating papilloedema",
    category: "diagnosis",
    strength: "must",
    title: "Urgent neuroimaging with venography within 24 hours",
    summary: "Urgent MRI brain within 24 hours (CT if MRI unavailable), with CT or MR venography mandatory to exclude cerebral venous sinus thrombosis.",
    points: [
      "<strong>Urgent MRI brain within 24 hours.</strong> If MRI is unavailable within 24 hours, urgent CT brain with subsequent MRI if no lesion is identified.",
      "There should be no evidence of hydrocephalus, mass, structural or vascular lesion, and no abnormal meningeal enhancement.",
      "<strong>CT or MR venography is mandatory</strong> to exclude cerebral venous sinus thrombosis within 24 hours.",
      "Features of raised ICP may be seen on neuroimaging (see the raised-ICP imaging features) but are not pathognomonic of IIH."
    ],
    evidence: "Consensus statement; raised-ICP imaging features per Degnan, Hoffmann, Farb, Kelly et al.",
    uncertainty: "Interpretation of cerebral venography can be difficult; where there is uncertainty, an experienced radiologist should be consulted."
  },
  {
    id: "dx-imaging-features",
    q: "Box 1 — Neuroimaging features of raised ICP",
    category: "diagnosis",
    strength: "may",
    title: "Recognise (but do not rely on) imaging features of raised ICP",
    summary: "Typical neuroimaging features of raised ICP support but do not confirm IIH — none are pathognomonic.",
    points: [
      "Empty sella, or partially empty sella / decreased pituitary height.",
      "Increased tortuosity of the optic nerve.",
      "Enlarged optic nerve sheath (perioptic subarachnoid space).",
      "Flattened posterior globe / sclera.",
      "Intraocular protrusion of the optic nerve head.",
      "Attenuation of the cerebral venous sinuses, including bilateral transverse sinus stenosis or stenosis of a dominant transverse sinus."
    ],
    evidence: "Descriptive; features are supportive only and not diagnostic.",
    uncertainty: "Optic nerve sheath enhancement with IV contrast has been reported. Ventricle size is typically normal, though some reports describe slit-like ventricles."
  },
  {
    id: "dx-lumbar-puncture",
    q: "Q1 — Investigating papilloedema",
    category: "diagnosis",
    strength: "must",
    title: "Lumbar puncture: opening pressure and CSF contents",
    summary: "After normal imaging, all patients with papilloedema should have an LP measuring opening pressure (lateral decubitus) with a diagnostic cut-off of >25 cm CSF; do not interpret opening pressure in isolation.",
    points: [
      "Following normal imaging, <strong>all patients with papilloedema should have a lumbar puncture</strong> to check opening pressure and ensure contents are normal.",
      "Measure opening pressure in the <strong>lateral decubitus position</strong>, with the patient relaxed and legs extended; allow the CSF level to settle before reading.",
      "CSF analysis should at minimum include protein, glucose and cell count.",
      "Give a clear explanation of the LP to reduce fear and anxiety.",
      "If the LP is unsuccessful, a guided LP (ultrasound or X-ray) may be considered.",
      "The diagnostic criteria mandate an opening pressure <strong>&gt;25 cm CSF</strong>.",
      "The opening pressure should <strong>not</strong> be interpreted in isolation when diagnosing IIH."
    ],
    evidence: "Consensus statement; diagnostic cut-off per Friedman et al. 2013 revised criteria.",
    uncertainty: "There is debate about the absolute 25 cm CSF value. The opening pressure is a single measurement with diurnal and wide variation. Where it does not fit the clinical picture, interpret with caution; a repeat LP or ICP monitoring may be considered. There is no evidence to dictate how much CSF to drain or what the closing pressure should be."
  },
  {
    id: "dx-secondary-causes",
    q: "Q1 — Investigating papilloedema",
    category: "diagnosis",
    strength: "should",
    title: "Exclude secondary causes of raised ICP",
    summary: "Take a careful history for secondary causes, perform a full blood count to exclude anaemia, and consider further tests/imaging in atypical patients.",
    points: [
      "Take a careful history to exclude possible secondary causes previously linked to raised ICP (haematological, venous obstruction, medications, systemic, endocrine and syndromic associations).",
      "All patients should have a <strong>full blood count</strong> to exclude anaemia.",
      "In atypical patients, consider additional blood tests and additional neuroimaging (e.g. more proximal neck vasculature imaging to exclude internal jugular obstruction)."
    ],
    evidence: "Consensus statement; associations per Friedman, Sodhi et al.",
    uncertainty: "There is no clear evidence of a contraindication to medications (including the oral contraceptive) previously reported as associated with secondary pseudotumour. Atypical patients could be referred to an experienced clinician familiar with IIH."
  },
  {
    id: "dx-iihwop-criteria",
    q: "Definitions / Q22 — IIHWOP",
    category: "diagnosis",
    strength: "should",
    title: "Diagnose IIH without papilloedema (IIHWOP) cautiously",
    summary: "IIHWOP requires all criteria for definite IIH except papilloedema, plus supportive features such as a sixth nerve palsy and MRI signs of raised ICP.",
    points: [
      "IIHWOP is a rare subtype: patients meet all criteria for definite IIH but have no papilloedema.",
      "Requires criteria B–E for IIH <strong>plus</strong> a unilateral or bilateral sixth cranial nerve palsy.",
      "IIHWOP is suggested where, with criteria B–E, there are ≥3 neuroimaging features of raised ICP (empty sella, flattening of the posterior globe, distension of the perioptic subarachnoid space ± a tortuous optic nerve, transverse venous sinus stenosis).",
      "Emphasis on an opening pressure &gt;25 cm CSF and the necessity of additional features suggesting pathologically raised ICP."
    ],
    evidence: "Consensus / Friedman 2013 criteria; IIHWOP is uncommon (<6% of IIH)."
  },

  /* ===================== TREATMENT — Principle 1: treat the disease ===================== */
  {
    id: "tx-weight-loss",
    q: "Q2 — Modify the underlying disease",
    category: "treatment",
    principle: "Principle 1 — Treat the underlying disease",
    strength: "should",
    title: "Weight management as primary disease-modifying therapy",
    summary: "Weight loss is the only disease-modifying therapy in typical IIH. Counsel all patients with BMI >30 about weight management, sensitively, at the earliest opportunity, and refer to a weight programme.",
    points: [
      "Weight loss is the <strong>only disease-modifying therapy</strong> in typical IIH.",
      "Once definite IIH is diagnosed, all patients with <strong>BMI &gt;30 kg/m²</strong> should be counselled about weight management at the earliest opportunity, done with sensitivity.",
      "Refer patients to a community or hospital-based weight management programme.",
      "The amount of weight loss needed for remission is not known; up to ~15% weight loss achieved remission in one cohort, and 5–15% weight gain often precedes diagnosis."
    ],
    evidence: "Prospective cohort evidence (Sinclair et al. 2010); strongest disease-modifying evidence in IIH.",
    uncertainty: "Maintained weight loss is difficult and the optimal long-term approach is not established. There is an increasing role for bariatric surgery, but more prospective controlled evidence is needed. For non-obese patients, revisit secondary causes."
  },

  /* ===================== TREATMENT — Principle 2: protect the vision ===================== */
  {
    id: "tx-imminent-vision-loss",
    q: "Q3 — Imminent risk of visual loss",
    category: "treatment",
    principle: "Principle 2 — Protect the vision",
    strength: "should",
    title: "Acute management of imminent visual loss is surgical",
    summary: "Where visual function is declining, acute management to preserve vision is surgical; a lumbar drain can temporise while urgent surgery is planned.",
    points: [
      "Where there is evidence of <strong>declining visual function, acute management to preserve vision is surgical</strong>.",
      "A temporising <strong>lumbar drain</strong> can protect vision while planning urgent surgical treatment.",
      "Surgical procedures (CSF diversion and ONSF) work well in the short term; while they work, modify the underlying disease with weight loss."
    ],
    evidence: "Observational; surgical short-term efficacy per Uretsky et al.",
    uncertainty: "In the absence of high-class evidence, corticosteroids are NOT recommended for fulminant IIH; a prolonged corticosteroid course would also cause weight gain."
  },
  {
    id: "tx-csf-diversion",
    q: "Q4 — Best surgical procedure for visual loss",
    category: "treatment",
    principle: "Principle 2 — Protect the vision",
    strength: "should",
    title: "CSF diversion (VP preferred) for visual deterioration",
    summary: "In the UK the preferred surgical procedure is neurosurgical CSF diversion; ventriculoperitoneal shunting is preferred over LP shunt due to fewer revisions. Use neuronavigation and counsel re DVLA.",
    points: [
      "In the UK, the preferred procedure is <strong>neurosurgical CSF diversion</strong>, performed where possible by an experienced clinician with an interest in CSF disorders.",
      "<strong>Ventriculoperitoneal (VP) shunting is the preferred CSF diversion</strong> for visual deterioration, due to lower reported revisions per patient. An LP shunt could also be used.",
      "It is best practice to use <strong>neuronavigation</strong> to place VP shunts.",
      "All UK patients should be counselled to inform the <strong>DVLA</strong> following VP shunt placement.",
      "Adjustable valves with antigravity / antisiphon devices should be considered to reduce low-pressure headaches."
    ],
    evidence: "Observational, mainly case series (Kalyvas, Sinclair, Abubaker et al.).",
    uncertainty: "Shunt-type literature is observational. Complications include abdominal pain, obstruction, migration, infection, low-pressure headache, subdural haematoma and tonsillar herniation; there is a low but present mortality with CSF diversion."
  },
  {
    id: "tx-onsf",
    q: "Q5 — Other surgical procedures for visual loss",
    category: "treatment",
    principle: "Principle 2 — Protect the vision",
    strength: "may",
    title: "Optic nerve sheath fenestration (ONSF)",
    summary: "ONSF is used rarely in the UK but has fewer reported complications; some consider it first-line for malignant fulminant cases or asymmetric papilloedema causing unilateral visual loss.",
    points: [
      "ONSF is performed more often in Europe/USA and rarely in the UK; it has fewer complications than CSF diversion and no reported mortalities.",
      "Some consider ONSF the first treatment step in malignant fulminant cases, and for asymmetric papilloedema causing visual loss in one eye; if it fails, CSF diversion can follow.",
      "ONSF should be performed by an <strong>experienced clinician trained in the technique</strong>.",
      "Temporary adverse effects include diplopia, anisocoria and optic nerve head haemorrhages; rarely, retinal artery occlusions."
    ],
    evidence: "Observational, mainly case series (Spitze, Banta et al.).",
    uncertainty: "Vision worsens after a period of stabilisation in 34% at 1 year and 45% at 3 years, with failure to improve headache in one-third to one-half."
  },
  {
    id: "tx-stenting-vision",
    q: "Q6 — Neurovascular stenting in acute IIH",
    category: "treatment",
    principle: "Principle 2 — Protect the vision",
    strength: "against",
    title: "Neurovascular stenting for acute visual loss — role not established",
    summary: "The role of venous sinus stenting to prevent visual loss in acute IIH is not yet established; long-term antithrombotic therapy is required afterwards.",
    points: [
      "The <strong>role of neurovascular stenting in IIH is not yet established</strong>.",
      "Long-term antithrombotic therapy is required for longer than 6 months following stenting.",
      "May be useful for highly selected patients with venous sinus stenosis, an elevated pressure gradient and elevated ICP in whom traditional therapies have failed."
    ],
    evidence: "Observational, mainly case series; no long-term efficacy/safety data (Riggeal, Liu et al.).",
    uncertainty: "Complications include short-lived ipsilateral headache, stent-adjacent stenosis requiring retreatment in a third, and rarely vessel perforation, stent migration and thrombosis."
  },
  {
    id: "tx-serial-lp",
    q: "Q7 — Serial lumbar punctures",
    category: "treatment",
    strength: "against",
    title: "Serial lumbar punctures are not recommended",
    summary: "Serial LPs are not recommended for management; relief is short-lived and they cause significant anxiety and back pain in some patients.",
    points: [
      "<strong>Serial lumbar punctures are not recommended</strong> for the management of IIH.",
      "Relief is typically short-lived: CSF is secreted at ~25 mL/hour, so the volume removed in a therapeutic tap is rapidly replaced.",
      "Despite headache relief in nearly three-quarters of patients, LPs cause significant anxiety and can lead to acute and chronic back pain."
    ],
    evidence: "Physiological + observational (Wright, Duits et al.)."
  },

  /* ===================== TREATMENT — Medical therapy ===================== */
  {
    id: "tx-acetazolamide-use",
    q: "Q8 — Best drug treatment for IIH symptoms",
    category: "treatment",
    strength: "may",
    title: "Acetazolamide for IIH symptoms",
    summary: "Acetazolamide could be prescribed for IIH symptoms. Counsel all women about side effects and teratogenic risk before starting. Not all UK clinicians prescribe it.",
    points: [
      "Acetazolamide <strong>could be prescribed</strong> for those with IIH symptoms.",
      "All women starting any new medical therapy (IIH-specific or headache-related) <strong>must be counselled</strong> regarding side effects and potential teratogenic risks.",
      "Drug therapy may need to be altered for adverse effects, lack of efficacy, potential teratogenicity, or patient preference."
    ],
    evidence: "RCT evidence: IIH Treatment Trial (Wall et al. 2014) showed modest visual-field benefit in mild visual loss; Ball et al. showed no effect with high discontinuation. 2015 Cochrane: insufficient evidence to recommend or reject.",
    uncertainty: "Given limited evidence and the side-effect profile, not all UK clinicians prescribe acetazolamide for IIH."
  },
  {
    id: "tx-acetazolamide-dose",
    q: "Q9 — How to prescribe acetazolamide",
    category: "treatment",
    strength: "should",
    title: "Acetazolamide prescribing and counselling",
    summary: "A popular starting dose is 250–500 mg twice daily, titrated up. Warn patients about the recognised side-effect profile.",
    points: [
      "A popular <strong>starting dose is 250–500 mg twice daily</strong>, with most clinicians titrating the daily dose up.",
      "In the IIHTT a maximal dose of 4 g/day was used (44% achieved 4 g/day; most tolerated 1 g/day); Ball et al. reported 48% discontinuation at a mean 1.5 g due to side effects.",
      "Warn patients about side effects: diarrhoea, dysgeusia, fatigue, nausea, paraesthesia, tinnitus, vomiting, depression, and rarely renal stones.",
      "There is no consensus on normal-release vs modified-release acetazolamide."
    ],
    evidence: "IIHTT tolerability data (ten Hove et al.).",
    uncertainty: "The optimal dose is not established. Licensing recommends periodic serum electrolyte monitoring, but there is no consensus on timing."
  },
  {
    id: "tx-topiramate-other",
    q: "Q10 — Other helpful drugs",
    category: "treatment",
    strength: "may",
    title: "Topiramate and other drug options",
    summary: "Topiramate may have a role (carbonic anhydrase activity, appetite suppression). Counsel women about reduced contraceptive efficacy, side effects and teratogenicity.",
    points: [
      "There may be a role for <strong>topiramate</strong> in IIH, with weekly dose escalation from 25 mg to 50 mg twice daily.",
      "Women <strong>must be informed</strong> that topiramate can reduce the efficacy of the contraceptive pill and other hormonal contraceptives.",
      "Women <strong>must be counselled</strong> about side effects (including depression and cognitive slowing) and potential teratogenic risks."
    ],
    evidence: "Open-label comparison vs acetazolamide (Celebisoy et al.); migraine-prevention efficacy (Silberstein).",
    uncertainty: "The roles of other diuretics (furosemide, amiloride, co-amilofruse) are uncertain but used by some as alternatives."
  },

  /* ===================== TREATMENT — Principle 3: reduce headache ===================== */
  {
    id: "tx-headache-new",
    q: "Q11 — Headache in newly diagnosed IIH",
    category: "treatment",
    principle: "Principle 3 — Reduce headache disability",
    strength: "should",
    title: "Manage headache in newly diagnosed IIH",
    summary: "Warn about medication-overuse headache early. Short-term simple analgesics may help; opioids should not be prescribed; acetazolamide is not effective for headache alone.",
    points: [
      "Inform patients at the earliest opportunity about <strong>medication-overuse headache (MOH)</strong>: simple analgesics on &gt;15 days/month, or opioids / combined preparations / triptans on &gt;10 days/month for &gt;3 months.",
      "Short-term painkillers (NSAIDs or paracetamol) may help in the first few weeks; <strong>indomethacin</strong> may have an advantage by reducing ICP (use NSAIDs cautiously; consider gastric protection).",
      "<strong>Opioids should not be prescribed</strong> for headache.",
      "Greater occipital nerve blocks are considered helpful by some, but evidence and consensus are lacking.",
      "Acetazolamide has not been shown to be effective for headache alone.",
      "Lumbar punctures are not typically recommended for treating headache."
    ],
    evidence: "Consensus; ICHD-3 definitions; indomethacin ICP effect (Sader et al.).",
    uncertainty: "There is no evidence to support the optimal management of headache in acute IIH."
  },
  {
    id: "tx-headache-longterm",
    q: "Q12 — Long-term headache management",
    category: "treatment",
    principle: "Principle 3 — Reduce headache disability",
    strength: "should",
    title: "Long-term headache: assess phenotype and tailor therapy",
    summary: "The headache phenotype changes over time and is often mixed. Assess phenotype, tailor therapy, explain the changing pattern, and consider early preventatives.",
    points: [
      "A multidisciplinary approach should be considered, ideally including an experienced clinician with an interest in headache.",
      "Assess the <strong>headache phenotype</strong> and tailor therapies to it (often a mix: headache attributed to IIH, migraine, MOH, tension-type, low-CSF-pressure, or iatrogenic Chiari).",
      "Give patients a clear explanation of how headaches change over time and how to minimise MOH risk.",
      "Consider <strong>early introduction of preventatives</strong> (migraine preventatives), which can take 3–4 months to reach maximal efficacy."
    ],
    evidence: "Consensus.",
    uncertainty: "There is no evidence to support the optimal management of headache in established IIH."
  },
  {
    id: "tx-headache-strategies",
    q: "Q13 — Therapeutic strategies for headache",
    category: "treatment",
    principle: "Principle 3 — Reduce headache disability",
    strength: "may",
    title: "Specific headache therapeutic strategies",
    summary: "A migrainous phenotype occurs in ~68%. Migraine acute and preventative strategies may help; avoid weight-increasing and depression-exacerbating drugs; add lifestyle advice.",
    points: [
      "Migraine attacks may benefit from a <strong>triptan with an NSAID or paracetamol and an antiemetic</strong>; limit to ≤2 days/week or ≤10 days/month.",
      "Migraine preventatives may be tried, most effective once ICP is settling or papilloedema has resolved (ocular remission); NICE migraine-prevention guidance is useful.",
      "<strong>Avoid drugs that increase weight</strong> (beta-blockers, tricyclics, sodium valproate, pizotifen, flunarizine) or exacerbate depression (beta-blockers, topiramate, flunarizine).",
      "Topiramate may help via appetite suppression and ICP reduction; zonisamide is an alternative if side effects are excessive.",
      "Candesartan or venlafaxine are weight-neutral alternatives helpful with coexisting depression; botulinum toxin A may help coexisting chronic migraine.",
      "Give lifestyle advice: limit caffeine, regular meals, hydration, exercise, sleep hygiene, and behavioural/stress techniques (yoga, CBT, mindfulness)."
    ],
    evidence: "Largely extrapolated from migraine evidence; many drugs used off-label in IIH.",
    uncertainty: "There are no clinical trials yet for the treatment of headache alone in IIH."
  },
  {
    id: "tx-moh",
    q: "Q14 — Medication overuse headache",
    category: "treatment",
    principle: "Principle 3 — Reduce headache disability",
    strength: "should",
    title: "Address medication overuse headache (MOH)",
    summary: "MOH is common in IIH and, if unaddressed, blocks preventative effectiveness. Non-opioids/triptans can be stopped abruptly or weaned within a month; opioids gradually withdrawn.",
    points: [
      "MOH is a common issue in IIH; removing excessive analgesic use significantly improves headaches and is needed for preventatives to work.",
      "Non-opioid and triptan medications may be <strong>stopped abruptly or weaned within a month</strong>.",
      "Opioid medications should be <strong>gradually removed</strong>, with at least 1 month painkiller-free to determine effectiveness."
    ],
    evidence: "Observational (deSouza, Zeeberg et al.).",
    uncertainty: "The most effective strategies to facilitate analgesic withdrawal are not fully established."
  },
  {
    id: "tx-csf-diversion-headache",
    q: "Q15 — CSF diversion for headache alone",
    category: "treatment",
    principle: "Principle 3 — Reduce headache disability",
    strength: "against",
    title: "CSF diversion for headache alone — generally not recommended",
    summary: "CSF diversion is generally not recommended for headache alone; if considered, only in a multidisciplinary setting after a period of ICP monitoring.",
    points: [
      "Where papilloedema has resolved, ICP is usually normalising and conservative strategies should be used.",
      "<strong>CSF diversion is generally not recommended</strong> as a treatment for headache alone.",
      "If considered, CSF diversion for headache should only be carried out in a <strong>multidisciplinary setting and after a period of ICP monitoring</strong>.",
      "After CSF diversion, 68% still have headaches at 6 months and 79% by 2 years; ~28% develop iatrogenic low-pressure headaches."
    ],
    evidence: "Observational (Sinclair et al.).",
    uncertainty: "Coexisting migrainous headache superimposed on raised-ICP headache complicates outcomes; failure to optimise ICP may render migrainous headache hard to treat."
  },
  {
    id: "tx-stenting-headache",
    q: "Q16 — Neurovascular stenting for headache alone",
    category: "treatment",
    principle: "Principle 3 — Reduce headache disability",
    strength: "against",
    title: "Neurovascular stenting for headache alone — not a treatment",
    summary: "Neurovascular stenting is not currently a treatment for headache in IIH.",
    points: [
      "<strong>Neurovascular stenting is not currently a treatment for headache in IIH.</strong>",
      "The stenting literature does not clearly separate visual-loss, headache-only and combined cohorts, nor acute vs chronic vs ocular-remission IIH; series are small, non-randomised, with selection bias and short follow-up."
    ],
    evidence: "Observational, low quality (Teleb et al.)."
  },
  {
    id: "tx-shunted-exacerbation-ix",
    q: "Q17 — Acute headache exacerbation in shunted patients (investigation)",
    category: "treatment",
    strength: "must",
    title: "Investigating acute headache in a shunted patient",
    summary: "Funduscopy is mandatory in any shunted IIH patient with acute headache. Obtain CSF if infection is suspected; avoid routine diagnostic LP, CT and shunt series without papilloedema.",
    points: [
      "For any shunted IIH patient with acute headache exacerbation, <strong>funduscopy is mandatory</strong> to establish whether papilloedema exists; if visual function (including formal fields) is worsening, surgical intervention may be required.",
      "Where infection is suspected, obtain CSF for microbiological evaluation and treat any infection.",
      "A diagnostic LP should not be routinely performed in the absence of papilloedema (unless infection is suspected).",
      "In those with papilloedema, some may perform a diagnostic LP to establish ICP level.",
      "CT imaging and shunt X-ray series should not routinely be performed without papilloedema, as they do not alter management.",
      "ICP monitoring may sometimes be useful."
    ],
    evidence: "Consensus + observational (Liu et al. on shunt series/CT utility)."
  },
  {
    id: "tx-shunted-exacerbation-rx",
    q: "Q18 — Acute headache exacerbation in shunted patients (treatment)",
    category: "treatment",
    strength: "should",
    title: "Treating acute headache in a shunted patient",
    summary: "Without papilloedema or vision risk, shunt revision is not recommended. Consider overdrainage / low-pressure headache, adjust valve settings, and otherwise manage as per headache strategies.",
    points: [
      "For patients without current papilloedema or imminent vision risk, <strong>shunt revision is not recommended</strong>.",
      "In deteriorating headache, consider low-pressure headache and shunt overdrainage.",
      "In established overdrainage / low CSF pressure, consider valve setting adjustment or tying off the shunt.",
      "Absent overdrainage, follow the standard headache strategies (Q13).",
      "Consider MOH as a cause of acute exacerbation in shunted patients."
    ],
    evidence: "Consensus + observational (Willer et al.)."
  },

  /* ===================== TREATMENT — Pregnancy & special situations ===================== */
  {
    id: "tx-pregnancy-drugs",
    q: "Q20 — Drug treatment in pregnancy",
    category: "treatment",
    strength: "should",
    title: "Drug treatment in the pregnant patient with IIH",
    summary: "Discuss a clear risk–benefit assessment for acetazolamide in pregnancy. Topiramate should not be used in pregnancy and should be discontinued if the patient becomes pregnant.",
    points: [
      "Discuss a clear <strong>risk–benefit assessment</strong> for acetazolamide; rodent data show teratogenic effects and manufacturers do not recommend its use in pregnancy.",
      "<strong>Topiramate should not be used in pregnancy</strong> — there is clear evidence of higher fetal abnormality rates.",
      "If a patient on topiramate becomes pregnant, reduce and discontinue it as soon as possible per manufacturer recommendations.",
      "Discuss a clear risk–benefit assessment for headache treatment, as many commonly used headache medications are not recommended in pregnancy."
    ],
    evidence: "Teratology / observational (Holmes, Weston, Falardeau et al.)."
  },
  {
    id: "tx-pregnancy-management",
    q: "Q21 — Management considerations in pregnancy",
    category: "treatment",
    strength: "should",
    title: "Managing IIH in pregnancy",
    summary: "Use multidisciplinary communication throughout pregnancy. Mode of delivery is not dictated by IIH. If vision is at imminent risk, manage in a specialist centre, with serial LP as a temporising measure.",
    points: [
      "Multidisciplinary communication among experienced clinicians should occur throughout pregnancy, peri-delivery and postpartum.",
      "<strong>No specific mode of delivery</strong> should be suggested based on a prior IIH diagnosis.",
      "Consider weight-service referral so gestational weight gain is appropriate (per ACOG 2013).",
      "Increased outpatient observation may reassure during this period.",
      "If IIH is active with imminent vision-loss risk, some would consider <strong>serial LPs as a temporising measure</strong> until CSF diversion or ONSF can be implemented.",
      "Those with imminent vision-loss risk at delivery should be managed in a <strong>specialist centre</strong>."
    ],
    evidence: "Consensus."
  },
  {
    id: "tx-iihwop-management",
    q: "Q22 — Managing IIHWOP",
    category: "treatment",
    strength: "should",
    title: "Manage IIHWOP as typical IIH (headache is the main morbidity)",
    summary: "In IIHWOP, vision-loss risk has not been identified; headache is the principal morbidity. Manage as typical IIH; surgical pressure control is not routine.",
    points: [
      "In IIHWOP, the risk of vision loss has not been identified and does not seem to develop over the disease course; headache is the principal morbidity.",
      "Once IIHWOP is diagnosed, manage as typical IIH and counsel about weight management.",
      "Manage headache the same as in typical IIH.",
      "<strong>Surgical management to control ICP in IIHWOP should not routinely be considered</strong> unless advised by experienced clinicians within the MDT."
    ],
    evidence: "Consensus; IIHWOP visual phenomena per Digre et al."
  },

  /* ===================== MONITORING ===================== */
  {
    id: "mon-chronic-problems",
    q: "Q19 — Other chronic problems",
    category: "monitoring",
    strength: "should",
    title: "Address the chronic burden and comorbidities",
    summary: "Recognise the psychological burden of a chronic rare disease; screen for and manage anxiety, depression, sleep apnoea, PCOS and cognitive dysfunction.",
    points: [
      "Recognise that these patients have a rare chronic disease and need support for its psychological burden.",
      "Patients may have higher anxiety and depression and lower quality of life (often a response to chronic pain) — this needs recognition and management.",
      "<strong>Sleep apnoea</strong> is frequently reported; consider respiratory referral.",
      "<strong>Polycystic ovary syndrome</strong> may coexist.",
      "<strong>Cognitive dysfunction</strong> may coexist."
    ],
    evidence: "Observational (Kleinschmidt, Thurtell, Glueck, Yri et al.)."
  },
  {
    id: "mon-followup",
    q: "Q23 — Follow-up and monitoring",
    category: "monitoring",
    strength: "should",
    title: "What to document at follow-up",
    summary: "At each review of a patient with papilloedema, document visual acuity, pupils, formal visual fields, dilated fundal grading and BMI, plus a structured headache assessment. Use Table 4 intervals.",
    points: [
      "Document for any patient with papilloedema: <strong>visual acuity, pupil examination, formal visual field assessment, dilated fundal examination to grade papilloedema, and BMI</strong>.",
      "Formal optic nerve head documentation (serial photographs or OCT) is useful; transorbital ultrasound of optic nerve sheath diameter has reported utility but variable cut-offs.",
      "All patients (with or without papilloedema) should have a headache assessment: features, frequency, severity and analgesic use; a validated score such as <strong>HIT-6</strong> may be useful.",
      "Follow follow-up intervals by papilloedema grade and visual-field status (see Table 4); expedite review if visual fields or papilloedema worsen."
    ],
    evidence: "Consensus; OCT/ultrasound utility per Chacko et al."
  },
  {
    id: "mon-followup-intervals",
    q: "Table 4 — Follow-up intervals",
    category: "monitoring",
    strength: "should",
    title: "Follow-up intervals by papilloedema grade and visual fields",
    summary: "Consensus follow-up intervals scale with papilloedema grade and visual-field status — from 6-monthly for mild/normal fields to within 1 week for severe grade with worsening fields.",
    points: [
      "<strong>Atrophic discs:</strong> normal/stable fields 4–6 months; worsening fields within 4 weeks.",
      "<strong>Mild papilloedema:</strong> normal 6 months; improving 3–6 months; stable 3–4 months; worsening within 4 weeks.",
      "<strong>Moderate papilloedema:</strong> normal 3–4 months; improving 1–3 months; stable 1–3 months; worsening within 2 weeks.",
      "<strong>Severe papilloedema:</strong> normal/improving 1–3 months; stable within 4 weeks; worsening within 1 week.",
      "Once papilloedema resolves, hospital visual monitoring may no longer be required — but use caution in patients who were asymptomatic at presentation, as recurrence may also be asymptomatic."
    ],
    evidence: "Consensus (Table 4)."
  },

  /* ===================== REFERRAL & ESCALATION ===================== */
  {
    id: "ref-experienced-clinician",
    q: "Diagnostic principles — uncertainty",
    category: "referral",
    strength: "should",
    title: "Involve an experienced clinician early when uncertain",
    summary: "Where there is diagnostic uncertainty about papilloedema, or venogram interpretation, consult an experienced clinician/radiologist early — before invasive tests.",
    points: [
      "Where there is uncertainty about papilloedema vs pseudopapilloedema, consult an <strong>experienced clinician early, before invasive tests</strong>.",
      "Where venogram interpretation is uncertain, consult an <strong>experienced radiologist</strong>.",
      "Atypical patients (not female, not of childbearing age, or BMI &lt;30) warrant more in-depth investigation and may be referred to an experienced clinician familiar with IIH.",
      "An “experienced clinician” is any clinician confident in their own experience of managing IIH."
    ],
    evidence: "Consensus."
  },
  {
    id: "ref-surgical-expertise",
    q: "Q4–Q6 — Surgical care",
    category: "referral",
    strength: "should",
    title: "Refer surgical decisions to appropriately experienced teams",
    summary: "CSF diversion, ONSF and stenting should be performed by experienced clinicians; surgical management for vision and headache belongs in a multidisciplinary setting.",
    points: [
      "CSF diversion should, where possible, be performed by an experienced clinician with an interest in CSF disorders.",
      "ONSF should be performed by an experienced clinician trained in the technique.",
      "Surgery for headache (CSF diversion) should only be carried out in a <strong>multidisciplinary setting after ICP monitoring</strong>.",
      "Surgical management in IIHWOP should not be considered unless advised by experienced clinicians within the MDT."
    ],
    evidence: "Consensus."
  },
  {
    id: "ref-mdt-headache",
    q: "Q12 / Q18 — Headache services",
    category: "referral",
    strength: "should",
    title: "Use multidisciplinary and specialist headache services",
    summary: "Long-term and refractory headache benefit from a multidisciplinary approach and an experienced headache clinician; medication-refractory patients belong in a specialist headache service.",
    points: [
      "Long-term headache management should consider a multidisciplinary approach including an experienced headache clinician.",
      "Shunted patients with significant headache morbidity may need assessment by an experienced clinician who routinely manages headache.",
      "Medication-refractory patients should be managed in a <strong>specialist headache service</strong> and discussed in an MDT for consideration of ICP monitoring."
    ],
    evidence: "Consensus."
  },
  {
    id: "ref-pregnancy-specialist",
    q: "Q21 — Pregnancy",
    category: "referral",
    strength: "should",
    title: "Specialist-centre care for at-risk pregnancy",
    summary: "Coordinate pregnancy care through multidisciplinary communication; patients with imminent vision-loss risk at delivery should be managed in a specialist centre.",
    points: [
      "Multidisciplinary communication among experienced clinicians should occur throughout pregnancy, peri-delivery and postpartum.",
      "Patients with imminent vision-loss risk at delivery should be managed in a <strong>specialist centre</strong>.",
      "Consider referral to a weight-management service during pregnancy."
    ],
    evidence: "Consensus."
  }
];

/* =========================================================
   PRESENTATION ROUTES — "What is the patient presenting with?"
   ---------------------------------------------------------
   DRAFT — pending clinical review team sign-off (see the
   published sibling "20260612 IIHHCP002 Evidence Grading
   Decision Rationale HTML v1.0.html" and the Outstanding
   Issues Log).
   The route list, red-flag wording and the timeframe mapping
   below were derived editorially from the question groupings
   in the 2018 paper; they are NOT part of the published
   guideline and must be validated clinically.
   ========================================================= */
window.CG_DRAFT = {
  isDraft: true,
  label: "Draft — pending clinical review",
  note: "The presentation routes, red-flag wording and immediate / short-term / long-term mapping are an editorial layer over the 2018 guideline and await clinical review team sign-off. Strength labels follow the guideline’s own wording, not formal grades.",
  rationaleHref: "20260612 IIHHCP002 Evidence Grading Decision Rationale HTML v1.0.html",
  rationaleTitle: "IIHHCP002 Evidence Grading Decision Rationale (v1.0)"
};

window.CG_ROUTES = [
  {
    id: "suspected",
    title: "Papilloedema / suspected IIH",
    sub: "Diagnostic work-up",
    icon: "eye",
    source: "Q1, Box 1",
    redflag: "Malignant hypertension and cerebral venous sinus thrombosis must be excluded — measure BP now; urgent brain imaging AND venography within 24 hours."
  },
  {
    id: "fulminant",
    title: "Sight-threatening / fulminant IIH",
    sub: "Declining visual function",
    icon: "alert",
    source: "Q3–Q6",
    redflag: "Declining visual function is a surgical emergency — a lumbar drain can temporise; refer for urgent surgical treatment now."
  },
  {
    id: "confirmed",
    title: "Confirmed IIH — disease & therapy",
    sub: "Vision not at imminent risk",
    icon: "pill",
    source: "Q2, Q7–Q10",
    redflag: "Any new visual deterioration → re-examine urgently. If vision becomes threatened, switch to the sight-threatening route.",
    redflagRoute: "fulminant"
  },
  {
    id: "headache",
    title: "Headache in IIH",
    sub: "Principal long-term morbidity",
    icon: "activity",
    source: "Q11–Q16",
    redflag: "If papilloedema is worsening or vision is threatened, manage as sight-threatening IIH first — headache strategies come second to sight.",
    redflagRoute: "fulminant"
  },
  {
    id: "shunted",
    title: "Shunted patient — acute headache",
    sub: "Known CSF shunt in situ",
    icon: "device",
    source: "Q17–Q18",
    redflag: "Funduscopy is mandatory in every shunted patient with acute headache. If CNS infection is suspected, obtain CSF for microbiology now."
  },
  {
    id: "pregnancy",
    title: "IIH in pregnancy",
    sub: "Drugs and peri-delivery care",
    icon: "heart",
    source: "Q20–Q21",
    redflag: "Imminent risk to vision in pregnancy → manage in a specialist centre; serial lumbar punctures may temporise until CSF diversion or ONSF."
  },
  {
    id: "iihwop",
    title: "IIH without papilloedema (IIHWOP)",
    sub: "Sixth nerve palsy / imaging features",
    icon: "search",
    source: "Q22, definitions",
    redflag: "If papilloedema appears at any point, this is no longer IIHWOP — re-examine and manage as IIH with the vision-protection pathways."
  },
  {
    id: "monitoring",
    title: "Follow-up, monitoring & chronic care",
    sub: "Intervals, documentation, comorbidity",
    icon: "calendar",
    source: "Q19, Q23, Table 4",
    redflag: "Worsening visual fields or papilloedema → expedite review: within 1–4 weeks by grade; severe grade with worsening fields within 1 week."
  }
];

/* Placement of each recommendation on the routes × timeframe grid.
   time: "immediate" | "short" | "long". A recommendation may appear
   on more than one route. DRAFT mapping — clinical sign-off required. */
window.CG_PLACEMENTS = {
  "dx-blood-pressure":        [{ route: "suspected",  time: "immediate" }],
  "dx-ophthalmology":         [{ route: "suspected",  time: "immediate" }],
  "dx-neuro-exam":            [{ route: "suspected",  time: "immediate" }],
  "dx-neuroimaging":          [{ route: "suspected",  time: "immediate" }],
  "dx-imaging-features":      [{ route: "suspected",  time: "short" }],
  "dx-lumbar-puncture":       [{ route: "suspected",  time: "short" }],
  "dx-secondary-causes":      [{ route: "suspected",  time: "short" }],
  "ref-experienced-clinician":[{ route: "suspected",  time: "short" }],

  "tx-imminent-vision-loss":  [{ route: "fulminant",  time: "immediate" }],
  "tx-csf-diversion":         [{ route: "fulminant",  time: "short" }],
  "tx-onsf":                  [{ route: "fulminant",  time: "short" }],
  "tx-stenting-vision":       [{ route: "fulminant",  time: "short" }],
  "ref-surgical-expertise":   [{ route: "fulminant",  time: "short" }],

  "tx-weight-loss":           [{ route: "confirmed",  time: "short" }, { route: "fulminant", time: "long" }],
  "tx-acetazolamide-use":     [{ route: "confirmed",  time: "short" }],
  "tx-acetazolamide-dose":    [{ route: "confirmed",  time: "short" }],
  "tx-serial-lp":             [{ route: "confirmed",  time: "short" }],
  "tx-topiramate-other":      [{ route: "confirmed",  time: "long" }],

  "tx-headache-new":          [{ route: "headache",   time: "short" }],
  "tx-moh":                   [{ route: "headache",   time: "short" }],
  "tx-headache-longterm":     [{ route: "headache",   time: "long" }],
  "tx-headache-strategies":   [{ route: "headache",   time: "long" }],
  "tx-csf-diversion-headache":[{ route: "headache",   time: "long" }],
  "tx-stenting-headache":     [{ route: "headache",   time: "long" }],
  "ref-mdt-headache":         [{ route: "headache",   time: "long" }],

  "tx-shunted-exacerbation-ix":[{ route: "shunted",   time: "immediate" }],
  "tx-shunted-exacerbation-rx":[{ route: "shunted",   time: "short" }],

  "ref-pregnancy-specialist": [{ route: "pregnancy",  time: "immediate" }],
  "tx-pregnancy-drugs":       [{ route: "pregnancy",  time: "short" }],
  "tx-pregnancy-management":  [{ route: "pregnancy",  time: "long" }],

  "dx-iihwop-criteria":       [{ route: "iihwop",     time: "short" }],
  "tx-iihwop-management":     [{ route: "iihwop",     time: "short" }],

  "mon-followup":             [{ route: "monitoring", time: "long" }],
  "mon-followup-intervals":   [{ route: "monitoring", time: "long" }],
  "mon-chronic-problems":     [{ route: "monitoring", time: "long" }]
};

window.CG_TIMEFRAMES = [
  { id: "immediate", label: "Immediate — act now",   short: "Immediate" },
  { id: "short",     label: "Short-term — weeks",    short: "Short-term" },
  { id: "long",      label: "Long-term — ongoing",   short: "Long-term" }
];

/* Review questions for the clinical review pack (from the
   Evidence Grading Decision Rationale, plus the new editorial layer) */
/* =========================================================
   SOURCE TRACEABILITY + EDITORIAL FIDELITY SELF-AUDIT
   ---------------------------------------------------------
   For each recommendation: the verbatim consensus statement(s)
   from Mollan et al. 2018 (JNNP), a page reference, and an
   honest confidence flag for the SUMMARY/TITLE wording:
     faithful  = reproduces the guideline's own wording closely
     condensed = several statements compressed; check wording/emphasis
     editorial = grouping / framing is the author's judgement; confirm
   Light spacing normalisation only (e.g. "24 hours", "25 cm CSF");
   wording is verbatim. Quotes joined with “ … ” show elision.
   NOTE: route assignment and the immediate/short/long-term timing
   are a separate editorial layer and are clinical judgements that
   require expert sign-off regardless of these per-text flags.
   ========================================================= */
window.CG_AUDIT_LEGEND = {
  faithful:  { label: "Faithful to source wording", tone: "teal" },
  condensed: { label: "Condensed — check wording", tone: "warning" },
  editorial: { label: "Editorial grouping — confirm", tone: "alert" }
};

window.CG_SOURCES = {
  "dx-blood-pressure": { page: "1089–1090", confidence: "faithful", quotes: [
    "Blood pressure must be measured to exclude malignant hypertension, as defined as a diastolic blood pressure greater than or equal to 120 mm Hg or systolic blood pressure greater than or equal to 180 mm Hg." ] },
  "dx-ophthalmology": { page: "1090", confidence: "faithful", quotes: [
    "All patients should have papilloedema confirmed and an assessment made of the imminent risk to their visual function. The following should be recorded in the presence of papilloedema: visual acuity; pupil examination; intraocular pressure (to exclude hypotony, a rare cause for disc swelling); formal visual field test (perimetry); dilated fundal examination to grade the severity of the papilloedema and exclude ocular causes for disc swelling." ] },
  "dx-neuro-exam": { page: "1090", confidence: "faithful", quotes: [
    "Record cranial nerve examination. Where IIH is suspected, typically there should be no cranial nerve involvement other than sixth cranial nerve palsy/palsies. Should other cranial nerves and/or other pathological findings be involved, an alternative diagnosis should be considered." ] },
  "dx-neuroimaging": { page: "1090–1091", confidence: "faithful", quotes: [
    "Urgent MRI brain within 24 hours; if unavailable within 24 hours, then urgent CT brain with subsequent MRI brain if no lesion identified.",
    "CT or MR venography is mandatory to exclude cerebral sinus thrombosis within 24 hours." ] },
  "dx-imaging-features": { page: "1093 (Box 1)", confidence: "faithful", quotes: [
    "Neuroimaging features of raised ICP: empty sella; partially empty sella/decreased pituitary height; increased tortuosity of optic nerve; enlarged optic nerve sheath (perioptic subarachnoid space); flattened posterior globe/sclera; intraocular protrusion of optic nerve head; attenuation of the cerebrovenous sinuses including bilateral transverse sinus stenosis or stenosis of a dominant transverse sinus." ] },
  "dx-lumbar-puncture": { page: "1091–1092", confidence: "faithful", quotes: [
    "Following normal imaging, all patients with papilloedema should have a lumbar puncture to check opening pressure and ensure contents are normal.",
    "The diagnostic criteria mandate a cut-off opening pressure of >25 cm CSF for diagnosing IIH.",
    "The LP opening pressure should not be interpreted in isolation when diagnosing IIH." ] },
  "dx-secondary-causes": { page: "1092", confidence: "faithful", quotes: [
    "All should have a careful history taken to exclude any possible secondary causes that have previously been linked to raised intracranial hypertension.",
    "All patients should have a full blood count performed to exclude anaemia." ] },
  "dx-iihwop-criteria": { page: "1089 (Fig 1C), 1090 (Table 2)", confidence: "condensed", quotes: [
    "IIH without papilloedema (IIHWOP) diagnostic criteria: presence of criteria B–E for IIH plus unilateral or bilateral sixth cranial nerve palsy.",
    "Suggestion of possible IIHWOP if: presence of criteria B–E for IIH plus 3 neuroimaging findings suggestive of raised intracranial pressure (empty sella, flattening of posterior aspect of the globe, distention of the perioptic subarachnoid space ± a tortuous optic nerve, transverse venous sinus stenosis)." ] },
  "ref-experienced-clinician": { page: "1090–1092", confidence: "editorial", quotes: [
    "Where there is diagnostic uncertainty regarding papilloedema … an experienced clinician should be consulted early before invasive tests are performed.",
    "Where there is diagnostic uncertainty regarding interpretation of the venogram findings, an experienced radiologist should be consulted." ] },

  "tx-weight-loss": { page: "1092–1093", confidence: "faithful", quotes: [
    "Weight loss is the only disease-modifying therapy in typical IIH.",
    "Once definite IIH is diagnosed, all patients with a BMI >30 kg/m² should be counselled about weight management at the earliest opportunity. This should be done with sensitivity.",
    "Patients should be referred to a community weight management programme or a hospital-based weight programme." ] },
  "tx-imminent-vision-loss": { page: "1093", confidence: "faithful", quotes: [
    "Where there is evidence of declining visual function, the acute management to preserve vision is surgical.",
    "A temporising measure of a lumbar drain could be useful to protect the vision while planning urgent surgical treatment.",
    "In the absence of high class evidence, we do not recommend the use of corticosteroids for fulminant IIH at this time." ] },
  "tx-csf-diversion": { page: "1093–1094", confidence: "faithful", quotes: [
    "In the UK, the preferred surgical procedure is neurosurgical CSF diversion.",
    "Ventriculoperitoneal (VP) should be the preferred CSF diversion procedure for visual deterioration in IIH, due to lower reported revisions per patient.",
    "All patients in the UK should be counselled that they should inform the Driver and Vehicle Licensing Agency following VP shunt placement." ] },
  "tx-onsf": { page: "1094", confidence: "condensed", quotes: [
    "ONSF is performed more frequently in Europe and the USA and rarely in the UK. ONSF is reported to have less complications than CSF diversion …",
    "Some consider ONSF as the first treatment step in malignant fulminant cases and eventually also for those with asymmetric papilloedema causing visual loss in one eye.",
    "ONSF should be performed by an experienced clinician trained in this technique." ] },
  "tx-stenting-vision": { page: "1094", confidence: "faithful", quotes: [
    "The role of neurovascular stenting in IIH is not yet established.",
    "Long-term antithrombotic therapy is required for longer than 6 months following neurovascular stenting treatment." ] },
  "tx-serial-lp": { page: "1095", confidence: "faithful", quotes: [
    "Serial lumbar punctures are not recommended for management of IIH." ] },
  "tx-acetazolamide-use": { page: "1095", confidence: "faithful", quotes: [
    "Acetazolamide could be prescribed for those with IIH symptoms.",
    "All females with IIH when commencing any new medical therapy … must be counselled regarding side effects and potential teratogenetic risks." ] },
  "tx-acetazolamide-dose": { page: "1095", confidence: "faithful", quotes: [
    "A popular starting dose of acetazolamide is 250–500 mg twice a day, with the majority of clinicians titrating the daily dose up.",
    "Patients should be warned of the adverse side effects of acetazolamide … increased risk of diarrhoea, dysgeusia, fatigue, nausea, paraesthesia, tinnitus, vomiting, depression and rarely renal stones." ] },
  "tx-topiramate-other": { page: "1095", confidence: "faithful", quotes: [
    "There may be a role for topiramate in IIH with weekly dose escalation from 25 mg to 50 mg bd.",
    "Where topiramate is prescribed, women must be informed that it can reduce the efficacy of the contraceptive pill/oral contraceptives and other hormonal contraceptives." ] },
  "tx-headache-new": { page: "1095–1096", confidence: "faithful", quotes: [
    "Opioids should not be prescribed for headaches.",
    "Acetazolamide has not been shown to be effective for the treatment of headache alone.",
    "Patients must be informed, at the earliest opportunity, of the potential issues of painkiller overuse that can lead to medication overuse headache …" ] },
  "tx-headache-longterm": { page: "1096", confidence: "condensed", quotes: [
    "In patients with IIH, the headache phenotype should be assessed. Headache therapies should be tailored to the headache phenotype.",
    "Early introduction of preventative medications (migraine preventatives) should be considered as these can take 3–4 months to reach maximal efficacy." ] },
  "tx-headache-strategies": { page: "1096", confidence: "condensed", quotes: [
    "Migraine attacks may benefit from triptan acute therapy used in combination with either a NSAID or paracetamol and an antiemetic … Their use should be limited to 2 days per week or a maximum of 10 days per month.",
    "Caution must be observed before selecting drugs that could increase weight … or those that could exacerbate depression …",
    "Lifestyle advice should be given with all headache disorders … limit caffeine intake. Ensure regular meals and adequate hydration, exercise programme and sleep hygiene." ] },
  "tx-moh": { page: "1096", confidence: "faithful", quotes: [
    "Non-opioids and triptan medications may be stopped abruptly or weaned down within a month.",
    "Opioid medications should be gradually removed, with at least 1 month painkiller free to determine effectiveness." ] },
  "tx-csf-diversion-headache": { page: "1096", confidence: "faithful", quotes: [
    "CSF diversion is generally not recommended as a treatment for headache alone in IIH.",
    "CSF diversion procedures for the management of headaches should only be carried out in a multidisciplinary setting and following a period of intracranial pressure monitoring." ] },
  "tx-stenting-headache": { page: "1096", confidence: "faithful", quotes: [
    "Neurovascular stenting is not currently a treatment for headache in IIH." ] },
  "tx-shunted-exacerbation-ix": { page: "1097", confidence: "condensed", quotes: [
    "For all shunted patient with IIH presenting with an acute exacerbation of headaches, funduscopy is mandatory to establish if papilloedema exists …",
    "A diagnostic lumbar puncture should not be routinely performed in the absence of papilloedema (unless suspicion of infection …).",
    "CT imaging and shunt X-ray series should not routinely be considered for those without evidence of papilloedema, as these investigations do not alter management." ] },
  "tx-shunted-exacerbation-rx": { page: "1097", confidence: "faithful", quotes: [
    "For patients without current papilloedema or imminent risk to vision, shunt revision is not recommended.",
    "In shunted patients with deteriorating headaches, low pressure headache and shunt over drainage should be considered." ] },
  "tx-pregnancy-drugs": { page: "1097", confidence: "faithful", quotes: [
    "Topiramate should not be used in pregnancy. There is clear evidence of a higher rate of fetal abnormalities following its use.",
    "A clear risk−benefit assessment regarding the necessity of acetazolamide treatment during pregnancy should be discussed with the patient …" ] },
  "tx-pregnancy-management": { page: "1098", confidence: "condensed", quotes: [
    "Multidisciplinary communication among relevant experienced clinicians should occur throughout pregnancy, peri-delivery and in the postpartum period.",
    "No specific mode of delivery should be suggested based on the fact there is a previous diagnosis of IIH.",
    "Those with imminent risk of vision loss at time of delivery should be managed in a specialist centre." ] },
  "tx-iihwop-management": { page: "1098", confidence: "faithful", quotes: [
    "Once definite IIHWOP is diagnosed, all patients should be managed as typical IIH and counselled about weight management.",
    "Surgical management to control elevated intracranial pressures in IIHWOP should not routinely be considered unless advised by experienced clinicians within the multidisciplinary team setting." ] },

  "mon-chronic-problems": { page: "1097", confidence: "condensed", quotes: [
    "The patient with IIH may have significantly higher levels of anxiety and depression and a lower quality of life … This needs recognition and appropriate management.",
    "Sleep apnoea is frequently reported in this group, and referral to respiratory service may be appropriate.",
    "Polycystic ovary syndrome may coexist. Cognitive dysfunction may coexist." ] },
  "mon-followup": { page: "1098", confidence: "condensed", quotes: [
    "Any patient with papilloedema should have the following documented: visual acuity; pupil examination; formal visual field assessment; dilated fundal examination to grade the papilloedema; BMI calculation.",
    "A validated headache disability score such as HIT 6 may be useful." ] },
  "mon-followup-intervals": { page: "1097 (Table 4)", confidence: "faithful", quotes: [
    "Consensus of follow-up intervals for patients with IIH based on their papilloedema grade and their visual field status (Table 4).",
    "Should there be worsening of the visual fields or papilloedema, then outpatient review should be expedited." ] },

  "ref-surgical-expertise": { page: "1093–1094, 1096, 1098", confidence: "editorial", quotes: [
    "Where possible. it should be performed by a experienced clinician with an interest in CSF disorders.",
    "ONSF should be performed by an experienced clinician trained in this technique.",
    "CSF diversion procedures for the management of headaches should only be carried out in a multidisciplinary setting and following a period of intracranial pressure monitoring." ] },
  "ref-mdt-headache": { page: "1096–1097", confidence: "editorial", quotes: [
    "A multidisciplinary team approach could be considered including, ideally, an assessment by an experienced clinician with an interest in headache management.",
    "Medication refractory patients should be managed in a specialist headache service and discussed within a multidisciplinary setting for consideration of ICP monitoring." ] },
  "ref-pregnancy-specialist": { page: "1098", confidence: "faithful", quotes: [
    "Multidisciplinary communication among relevant experienced clinicians should occur throughout pregnancy, peri-delivery and in the postpartum period.",
    "Those with imminent risk of vision loss at time of delivery should be managed in a specialist centre." ] }
};

window.CG_REVIEW_QUESTIONS = [
  "Do you agree that A/B/C/GPP grades should not be fabricated for a consensus source that does not contain them?",
  "Is the strength-from-wording scheme (Must / Should / May / Not recommended) an acceptable and accurate representation of the 2018 statements?",
  "Are the per-recommendation evidence-base descriptions accurate and appropriately cautious?",
  "Are the eight presentation routes the right clinical entry points, correctly named and ordered?",
  "Is each recommendation placed in the correct route and the correct timeframe (immediate / short-term / long-term)?",
  "Is the red-flag wording for each route clinically correct and sufficiently prominent?",
  "Does the symptom / finding picker map to the correct suggested route(s), and is the emergency (vision) logic safe?",
  "Is the in-tool methodology disclosure sufficiently clear for a clinical audience?"
];

/* =========================================================
   SYMPTOM / FINDING PICKER  ("What has the patient got?")
   ---------------------------------------------------------
   DRAFT triage aid — NOT diagnostic. The symptom list and
   frequencies are from the 2018 paper (Figure 1A, Markey et al.).
   The mapping from each item to a suggested route is an
   EDITORIAL clinical-judgement layer and requires review-team
   sign-off (see review question above). The vision-threat item
   is treated as an emergency and always surfaces the
   sight-threatening route.
   ========================================================= */
window.CG_SYMPTOMS = [
  { id: "headache",   label: "Headache",                         freq: "76–94%", routes: ["suspected", "headache"] },
  { id: "tvo",        label: "Transient visual obscurations",    freq: "68–72%", routes: ["suspected"] },
  { id: "tinnitus",   label: "Pulsatile tinnitus",               freq: "52–61%", routes: ["suspected"] },
  { id: "back",       label: "Back pain",                        freq: "53%",    routes: ["suspected"] },
  { id: "dizzy",      label: "Dizziness",                        freq: "52%",    routes: ["suspected"] },
  { id: "neck",       label: "Neck pain",                        freq: "42%",    routes: ["suspected"] },
  { id: "blurred",    label: "Blurred vision",                   freq: "32%",    routes: ["suspected"] },
  { id: "cognitive",  label: "Cognitive disturbance",           freq: "20%",    routes: ["suspected"] },
  { id: "radicular",  label: "Radicular pain",                   freq: "19%",    routes: ["suspected"] },
  { id: "diplopia",   label: "Diplopia (typically horizontal)",  freq: "18%",    routes: ["suspected", "iihwop"] }
];

/* Discriminating findings / context — these do the real routing */
window.CG_FINDINGS = [
  { id: "vision-threat",  label: "Declining or threatened vision (acuity or field loss)", emergency: true, routes: ["fulminant"] },
  { id: "papilloedema",   label: "Papilloedema present",                                   routes: ["suspected"] },
  { id: "sixth-nerve",    label: "Sixth cranial nerve palsy",                              routes: ["suspected", "iihwop"] },
  { id: "no-papilloedema",label: "IIH features but NO papilloedema",                       routes: ["iihwop"] },
  { id: "has-shunt",      label: "Existing CSF shunt in situ",                             routes: ["shunted"] },
  { id: "pregnant",       label: "Pregnant",                                               routes: ["pregnancy"] },
  { id: "confirmed",      label: "IIH already confirmed / in follow-up",                   routes: ["confirmed", "headache", "monitoring"] }
];

/* =========================================================
   DIFFERENTIAL FORKS  (DRAFT — needs review-team validation)
   ---------------------------------------------------------
   Where two+ routes differ only by a single discriminator, the
   picker shows them SIDE BY SIDE as a differential until the
   clinician resolves it (by selecting the discriminator) — e.g.
   a sixth nerve palsy occurs in IIH (with papilloedema) and in
   IIHWOP (without). Add further differentials here and they will
   render the same way automatically.
     resolvedBy: maps a branch.key -> the finding id that resolves to it
     branches:   key (matches resolvedBy), condition (column header), route
   ========================================================= */
window.CG_DIFFERENTIALS = [
  {
    id: "papilloedema",
    question: "papilloedema present?",
    hint: "fundoscopy decides",
    resolvedBy: { present: "papilloedema", absent: "no-papilloedema" },
    branches: [
      { key: "present", condition: "With papilloedema",    route: "suspected" },
      { key: "absent",  condition: "Without papilloedema", route: "iihwop" }
    ]
  }
];
