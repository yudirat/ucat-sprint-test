import type { UCATSet } from './types';

const APPROPRIATENESS_OPTIONS = ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"];
const IMPORTANCE_OPTIONS = ["Very Important", "Important", "Of minor importance", "Not at all important"];

export const sjtSprints: UCATSet[] = [
  {
    setId: 107,
    section: 'Situational Judgement',
    title: "SJT Sprint A",
    type: "SCENARIO",
    context: "Ethics and professionalism. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          questionRange: [109, 116],
          type: 'TEXT',
          title: 'Medical Ethics: Confidentiality',
          context: "A medical student, Sarah, is in a public elevator at the hospital. She witnesses a senior consultant, Dr. Smith, discussing a specific patient's rare condition and personal history with another colleague, using the patient's full name. There are several members of the public in the elevator."
        },
        {
          id: 2,
          questionRange: [117, 124],
          type: 'TEXT',
          title: 'Teamwork: Task Management',
          context: "You are a junior doctor on a busy surgical ward. Your colleague, James, has been spending a lot of time on his phone in the staff room while you have a long list of patient discharges and blood tests to complete before the end of your shift."
        },
        {
          id: 3,
          questionRange: [125, 132],
          type: 'TEXT',
          title: 'Professionalism: Social Media',
          context: "A group of medical students are planning to start a TikTok channel where they film themselves performing 'funny' dances in the hospital corridors during their lunch break. They plan to keep the patients in the background to show the 'real hospital vibe'."
        }
      ]
    },
    questions: [
      {
        id: 109,
        text: "How appropriate is it for Sarah to: Politely remind Dr. Smith that they are in a public space.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 0,
        explanation: "Directly addressing the breach of confidentiality in a polite manner is the most effective way to stop the immediate issue."
      },
      {
        id: 110,
        text: "How appropriate is it for Sarah to: Wait until they leave the elevator and then report Dr. Smith to the Medical School immediately.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 1,
        explanation: "Reporting is necessary, but failing to stop the immediate breach in the elevator is less ideal than intervening."
      },
      {
        id: 111,
        text: "How appropriate is it for Sarah to: Join in the conversation to show her knowledge of the rare condition.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "This actively contributes to the breach of confidentiality and is highly unprofessional."
      },
      {
        id: 112,
        text: "How appropriate is it for Sarah to: Ignore the situation as Dr. Smith is a senior consultant and she is just a student.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "Patient confidentiality is a collective responsibility; hierarchy does not excuse silence in the face of a breach."
      },
      {
        id: 113,
        text: "How important is the following factor: The fact that the public in the elevator may not know the patient personally.",
        options: IMPORTANCE_OPTIONS,
        answerIndex: 3,
        explanation: "A breach of confidentiality is a breach regardless of whether the listeners know the patient; the principle is absolute."
      },
      {
        id: 114,
        text: "How important is the following factor: Dr. Smith's seniority and reputation in the hospital.",
        options: IMPORTANCE_OPTIONS,
        answerIndex: 3,
        explanation: "Seniority does not change the ethical requirement to maintain patient confidentiality."
      },
      {
        id: 115,
        text: "How appropriate is it for Sarah to: Mention the incident to her clinical supervisor for advice on how to handle similar situations in the future.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 0,
        explanation: "Seeking guidance on professional conduct and how to navigate hierarchy is very appropriate for a student."
      },
      {
        id: 116,
        text: "How appropriate is it for Sarah to: Post about the incident on an anonymous forum for medical students to complain about the consultant's behavior.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "Venting on social media or forums about professional issues is inappropriate; formal channels should be used."
      },
      {
        id: 117,
        text: "How appropriate is it to: Politely ask James if he can help with the discharge summaries as you are feeling overwhelmed.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 0,
        explanation: "Direct, professional communication is the first step in resolving teamwork issues."
      },
      {
        id: 118,
        text: "How appropriate is it to: Do all the work yourself and then report James's laziness to the consultant at the end of the shift.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 2,
        explanation: "Reporting without first attempting to resolve the issue with the colleague is generally inappropriate unless it's a recurring pattern."
      },
      {
        id: 119,
        text: "How appropriate is it to: Take a break yourself and leave the work unfinished until James starts helping.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "Leaving patient care tasks unfinished directly compromises patient safety."
      },
      {
        id: 120,
        text: "How appropriate is it to: Mention to other colleagues that James is always on his phone and never helps.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "Gossiping about colleagues is unprofessional and damages team morale."
      },
      {
        id: 121,
        text: "How important is the following factor: The urgency of the patient discharges and blood tests.",
        options: IMPORTANCE_OPTIONS,
        answerIndex: 0,
        explanation: "Patient safety and timely care are the highest priorities in a clinical setting."
      },
      {
        id: 122,
        text: "How important is the following factor: Whether James has already completed his own assigned tasks for the day.",
        options: IMPORTANCE_OPTIONS,
        answerIndex: 2,
        explanation: "Even if he finished his tasks, clinical work is a team effort, especially when a colleague is overwhelmed, but it's less critical than the work itself."
      },
      {
        id: 123,
        text: "How appropriate is it to: Suggest to James that you split the remaining tasks so that you can both finish on time.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 0,
        explanation: "Proposing a collaborative solution is proactive and professional."
      },
      {
        id: 124,
        text: "How appropriate is it to: Shout at James in front of other staff so he realizes how stressed you are.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "Aggressive behavior and public confrontation are highly unprofessional."
      },
      {
        id: 125,
        text: "How appropriate is it to: Advise your friends that filming in the hospital is inappropriate, even if patients are 'just in the background'.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 0,
        explanation: "Patients have a right to privacy, and hospitals are not playgrounds; advising peers on professional boundaries is very appropriate."
      },
      {
        id: 126,
        text: "How appropriate is it to: Participate in the dance but make sure no patients are visible in your specific shots.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "The act itself is unprofessional in a clinical environment and still risks accidental privacy breaches."
      },
      {
        id: 127,
        text: "How appropriate is it to: Inform the hospital's communications team or your supervisor about the students' plan.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 1,
        explanation: "Escalating is appropriate if the peers refuse to listen to advice, but trying to resolve it internally first is often preferred."
      },
      {
        id: 128,
        text: "How appropriate is it to: Post a 'disclaimer' on the video saying the hospital does not endorse the content.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "A disclaimer does not excuse unprofessional behavior or potential privacy violations."
      },
      {
        id: 129,
        text: "How important is the following factor: The risk of patients or their families feeling uncomfortable or disrespected.",
        options: IMPORTANCE_OPTIONS,
        answerIndex: 0,
        explanation: "Maintaining public trust and patient dignity is a core tenet of medical professionalism."
      },
      {
        id: 130,
        text: "How important is the following factor: The students' intention to show the 'real hospital vibe' and humanize doctors.",
        options: IMPORTANCE_OPTIONS,
        answerIndex: 3,
        explanation: "Good intentions do not override professional standards and patient privacy."
      },
      {
        id: 131,
        text: "How important is the following factor: Whether the students are filming during their lunch break or during clinical hours.",
        options: IMPORTANCE_OPTIONS,
        answerIndex: 2,
        explanation: "While filming during clinical hours is worse, the location (hospital) makes it unprofessional even during breaks."
      },
      {
        id: 132,
        text: "How appropriate is it to: Take no action as it is their personal TikTok account and not yours.",
        options: APPROPRIATENESS_OPTIONS,
        answerIndex: 3,
        explanation: "Medical students have a duty to uphold the reputation of the profession and protect patient privacy."
      }
    ]
  },
  {
    setId: 115,
    section: 'Situational Judgement',
    title: "SJT Elite Sprint 1",
    type: "SCENARIO",
    context: "Professionalism, Patient Safety, and Ethical Integrity. 13 Minutes.",
    tags: ["Elite", "GMC Alignment", "High Difficulty"],
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          questionRange: [133, 137],
          type: 'TEXT',
          title: 'Scenario 1: The Social Media Slip-Up',
          context: "You are a third-year medical student. A fellow student, Sarah, posts a selfie in the scrub room. In the background, a patient’s partially obscured face and surgical chart are visible. Sarah has a large following and captioned it \"#SurgeryLife.\""
        },
        {
          id: 2,
          questionRange: [138, 141],
          type: 'TEXT',
          title: 'Scenario 2: The Gift and Influence',
          context: "Mr. Henderson, a sensitive patient, offers you a £100 restaurant gift card for \"being the only doctor who listened.\""
        },
        {
          id: 3,
          questionRange: [142, 146],
          type: 'TEXT',
          title: 'Scenario 3: The Impaired Colleague',
          context: "You suspect your senior, Dr. Miller, has alcohol on his breath during a shift. He is the only senior on the ward."
        },
        {
          id: 6,
          questionRange: [147, 151],
          type: 'TEXT',
          title: 'Scenario 6: The Clinical Error (Duty of Candour)',
          context: "While reviewing a patient's chart, you realize you administered a double dose of a non-critical antibiotic. The patient appears fine, but the mistake is clear. Your supervisor says, \"It’s a harmless error; don't worry the patient by mentioning it.\""
        },
        {
          id: 7,
          questionRange: [152, 156],
          type: 'TEXT',
          title: 'Scenario 7: The Professional Boundary',
          context: "A patient you are treating for clinical depression finds you on a personal social media platform and sends a private message asking for advice on a personal relationship issue, stating, \"I feel you're the only one who understands me.\""
        },
        {
          id: 4,
          questionRange: [157, 161],
          type: 'TEXT',
          title: 'Scenario 4: The Research Dilemma',
          context: "A professor asks you to \"adjust\" data in a paper to make a drug look more favorable."
        },
        {
          id: 5,
          questionRange: [162, 166],
          type: 'TEXT',
          title: 'Scenario 5: Informed Consent',
          context: "An elderly patient, Mrs. Gable, has mild cognitive impairment. She says her son told her to \"just sign\" the consent form for a hip replacement."
        }
      ]
    },
    questions: [
      {
        id: 133,
        text: "Comment publicly on the photo asking Sarah to take it down immediately.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 2,
        explanation: "Publicly shaming a colleague is unprofessional, though the intent is to protect the patient."
      },
      {
        id: 134,
        text: "Take a screenshot and email it to the Dean of the Medical School.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 1,
        explanation: "Escalation is necessary if patient safety/privacy is breached, but it is not the ideal first step."
      },
      {
        id: 135,
        text: "Speak to Sarah privately as soon as possible and suggest she delete the post.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Direct, private, and immediate resolution is the most professional first response."
      },
      {
        id: 136,
        text: "Report the incident to the lead surgeon once the procedure is finished.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 1,
        explanation: "Appropriate because the lead surgeon is responsible for theater conduct, but the post should be removed first."
      },
      {
        id: 137,
        text: "Ignore the post as the face is \"partially obscured.\"",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Any breach of confidentiality is a major professional failure."
      },
      {
        id: 138,
        text: "Accept the gift card graciously to avoid offending him.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Accepting substantial gifts (£100) is a breach of GMC guidelines and can compromise the relationship."
      },
      {
        id: 139,
        text: "Politely decline, explaining professional guidelines regarding gifts.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Clearly explains the boundary while maintaining professional rapport."
      },
      {
        id: 140,
        text: "Accept the gift but donate it anonymously to a hospital charity.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 2,
        explanation: "Well-meaning, but dishonest to the patient and bypasses the policy."
      },
      {
        id: 141,
        text: "Suggest he write a letter of appreciation to the Hospital Trust instead.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Redirects gratitude into a professional and acceptable channel."
      },
      {
        id: 142,
        text: "Directly ask Dr. Miller in front of the team if he has been drinking.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Humiliating a colleague publicly is unprofessional and escalates the situation poorly."
      },
      {
        id: 143,
        text: "Discreetly ask a senior nurse if they have noticed anything unusual.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 1,
        explanation: "Reasonable to seek corroboration before making a serious accusation."
      },
      {
        id: 144,
        text: "Pull Dr. Miller aside privately to express concern and suggest he steps away.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Prioritizes patient safety while maintaining professional courtesy and addressing wellbeing."
      },
      {
        id: 145,
        text: "Contact the Medical Director immediately, even if it leaves the ward temporarily without a senior.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Patient safety is the absolute priority; immediate escalation is required if a senior is impaired."
      },
      {
        id: 146,
        text: "Wait until the end of the shift to see if any clinical errors occur.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Waiting and seeing when a patient is at risk is a failure of duty."
      },
      {
        id: 147,
        text: "Follow your supervisor's advice and monitor the patient without disclosing the error.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Duty of Candour requires disclosure of errors, even if \"harmless.\""
      },
      {
        id: 148,
        text: "Inform the patient of the error immediately, apologize, and explain the plan for monitoring.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Openness and apology are the cornerstones of the Duty of Candour."
      },
      {
        id: 149,
        text: "File an internal incident report (Datix) but do not tell the patient.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 1,
        explanation: "Incident reporting is necessary, but failing to tell the patient is a breach of duty."
      },
      {
        id: 150,
        text: "Discuss the situation with another senior consultant to get a second opinion on disclosure.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 1,
        explanation: "Seeking advice is good, but the duty to disclose remains clear."
      },
      {
        id: 151,
        text: "Check the patient's vitals every hour but only disclose if a reaction occurs.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Reactive disclosure is dishonest and erodes patient trust."
      },
      {
        id: 152,
        text: "Reply to the message giving brief, supportive relationship advice.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Providing personal advice outside a clinical setting violates professional boundaries."
      },
      {
        id: 153,
        text: "Ignore the message and block the patient immediately.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 2,
        explanation: "Ignoring may cause distress; the boundary needs to be explained."
      },
      {
        id: 154,
        text: "At the next clinical appointment, explain the importance of professional boundaries and your inability to communicate via social media.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Standard professional response: setting boundaries in the clinical setting."
      },
      {
        id: 155,
        text: "Report the contact to your supervisor to ensure the patient’s clinical record reflects this interaction.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 0,
        explanation: "Essential for the safety of both the student and the patient’s clinical management."
      },
      {
        id: 156,
        text: "Accept the friend request to monitor the patient's mental state more closely.",
        options: APPROPRIATENESS_OPTIONS,
        category: 'APPROPRIATENESS',
        answerIndex: 3,
        explanation: "Highly inappropriate; blurs professional and personal lines dangerously."
      },
      {
        id: 157,
        text: "The professor’s status as a world-renowned expert.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 3,
        explanation: "Hierarchy never justifies dishonesty or data manipulation."
      },
      {
        id: 158,
        text: "The potential risk to future patients if the data is inaccurate.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 0,
        explanation: "The primary ethical concern in medical research."
      },
      {
        id: 159,
        text: "The impact reporting may have on your future career references.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 3,
        explanation: "Personal career impact is secondary to patient safety and integrity."
      },
      {
        id: 160,
        text: "The GMC's guidelines on integrity and honesty.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 0,
        explanation: "The governing framework for all medical conduct."
      },
      {
        id: 161,
        text: "Whether the adjustments change the final clinical recommendation.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 3,
        explanation: "Dishonesty is the issue, regardless of the clinical outcome."
      },
      {
        id: 162,
        text: "Mrs. Gable’s legal right to autonomy.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 0,
        explanation: "Autonomy is a core pillar of medical ethics."
      },
      {
        id: 163,
        text: "The son’s opinion on what is best for her.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 1,
        explanation: "Important for context, but cannot override the patient’s own capacity or rights."
      },
      {
        id: 164,
        text: "The fact that the surgery is routine and successful.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 2,
        explanation: "Routine status does not remove the need for valid informed consent."
      },
      {
        id: 165,
        text: "Mrs. Gable's current capacity to understand specific risks.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 0,
        explanation: "Capacity is task-specific and must be assessed at the time of the decision."
      },
      {
        id: 166,
        text: "The hospital’s schedule and theater waiting times.",
        options: IMPORTANCE_OPTIONS,
        category: 'IMPORTANCE',
        answerIndex: 3,
        explanation: "Efficiency never takes precedence over patient consent and safety."
      }
    ]
  }
];
