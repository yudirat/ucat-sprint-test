import type { UCATSet } from './types';

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
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Directly addressing the breach of confidentiality in a polite manner is the most effective way to stop the immediate issue."
      },
      {
        id: 110,
        text: "How appropriate is it for Sarah to: Wait until they leave the elevator and then report Dr. Smith to the Medical School immediately.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 1,
        explanation: "Reporting is necessary, but failing to stop the immediate breach in the elevator is less ideal than intervening."
      },
      {
        id: 111,
        text: "How appropriate is it for Sarah to: Join in the conversation to show her knowledge of the rare condition.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "This actively contributes to the breach of confidentiality and is highly unprofessional."
      },
      {
        id: 112,
        text: "How appropriate is it for Sarah to: Ignore the situation as Dr. Smith is a senior consultant and she is just a student.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Patient confidentiality is a collective responsibility; hierarchy does not excuse silence in the face of a breach."
      },
      {
        id: 113,
        text: "How important is the following factor: The fact that the public in the elevator may not know the patient personally.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 3,
        explanation: "A breach of confidentiality is a breach regardless of whether the listeners know the patient; the principle is absolute."
      },
      {
        id: 114,
        text: "How important is the following factor: Dr. Smith's seniority and reputation in the hospital.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 3,
        explanation: "Seniority does not change the ethical requirement to maintain patient confidentiality."
      },
      {
        id: 115,
        text: "How appropriate is it for Sarah to: Mention the incident to her clinical supervisor for advice on how to handle similar situations in the future.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Seeking guidance on professional conduct and how to navigate hierarchy is very appropriate for a student."
      },
      {
        id: 116,
        text: "How appropriate is it for Sarah to: Post about the incident on an anonymous forum for medical students to complain about the consultant's behavior.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Venting on social media or forums about professional issues is inappropriate; formal channels should be used."
      },
      {
        id: 117,
        text: "How appropriate is it to: Politely ask James if he can help with the discharge summaries as you are feeling overwhelmed.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Direct, professional communication is the first step in resolving teamwork issues."
      },
      {
        id: 118,
        text: "How appropriate is it to: Do all the work yourself and then report James's laziness to the consultant at the end of the shift.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 2,
        explanation: "Reporting without first attempting to resolve the issue with the colleague is generally inappropriate unless it's a recurring pattern."
      },
      {
        id: 119,
        text: "How appropriate is it to: Take a break yourself and leave the work unfinished until James starts helping.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Leaving patient care tasks unfinished directly compromises patient safety."
      },
      {
        id: 120,
        text: "How appropriate is it to: Mention to other colleagues that James is always on his phone and never helps.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Gossiping about colleagues is unprofessional and damages team morale."
      },
      {
        id: 121,
        text: "How important is the following factor: The urgency of the patient discharges and blood tests.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 0,
        explanation: "Patient safety and timely care are the highest priorities in a clinical setting."
      },
      {
        id: 122,
        text: "How important is the following factor: Whether James has already completed his own assigned tasks for the day.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 2,
        explanation: "Even if he finished his tasks, clinical work is a team effort, especially when a colleague is overwhelmed, but it's less critical than the work itself."
      },
      {
        id: 123,
        text: "How appropriate is it to: Suggest to James that you split the remaining tasks so that you can both finish on time.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Proposing a collaborative solution is proactive and professional."
      },
      {
        id: 124,
        text: "How appropriate is it to: Shout at James in front of other staff so he realizes how stressed you are.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Aggressive behavior and public confrontation are highly unprofessional."
      },
      {
        id: 125,
        text: "How appropriate is it to: Advise your friends that filming in the hospital is inappropriate, even if patients are 'just in the background'.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Patients have a right to privacy, and hospitals are not playgrounds; advising peers on professional boundaries is very appropriate."
      },
      {
        id: 126,
        text: "How appropriate is it to: Participate in the dance but make sure no patients are visible in your specific shots.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "The act itself is unprofessional in a clinical environment and still risks accidental privacy breaches."
      },
      {
        id: 127,
        text: "How appropriate is it to: Inform the hospital's communications team or your supervisor about the students' plan.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 1,
        explanation: "Escalating is appropriate if the peers refuse to listen to advice, but trying to resolve it internally first is often preferred."
      },
      {
        id: 128,
        text: "How appropriate is it to: Post a 'disclaimer' on the video saying the hospital does not endorse the content.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "A disclaimer does not excuse unprofessional behavior or potential privacy violations."
      },
      {
        id: 129,
        text: "How important is the following factor: The risk of patients or their families feeling uncomfortable or disrespected.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 0,
        explanation: "Maintaining public trust and patient dignity is a core tenet of medical professionalism."
      },
      {
        id: 130,
        text: "How important is the following factor: The students' intention to show the 'real hospital vibe' and humanize doctors.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 3,
        explanation: "Good intentions do not override professional standards and patient privacy."
      },
      {
        id: 131,
        text: "How important is the following factor: Whether the students are filming during their lunch break or during clinical hours.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 2,
        explanation: "While filming during clinical hours is worse, the location (hospital) makes it unprofessional even during breaks."
      },
      {
        id: 132,
        text: "How appropriate is it to: Take no action as it is their personal TikTok account and not yours.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Medical students have a duty to uphold the reputation of the profession and protect patient privacy."
      }
    ]
  }
];
