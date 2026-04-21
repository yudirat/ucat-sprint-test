import type { UCATSet } from './types';

export const dmSprints: UCATSet[] = [
  {
    setId: 104,
    section: 'Decision Making',
    title: "DM Sprint A",
    type: "TEXT_LOGIC",
    context: "Logic puzzles and probability. 18.5 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          questionRange: [59, 64],
          type: 'TEXT_LOGIC',
          title: 'Office Assignments',
          context: 'Six employees (A, B, C, D, E, F) are being assigned to three offices (1, 2, 3).',
          data: {
            premises: [
              "Each office must have exactly two employees.",
              "A and B cannot be in the same office.",
              "C must be in Office 1.",
              "If D is in Office 2, then E must also be in Office 2.",
              "F cannot be in Office 1 or Office 3."
            ],
            notes: [
              "Rule 1: Office Capacity = 2 individuals per room.",
              "Rule 2: Mutually exclusive pairs (e.g., A & B) must be split.",
              "Rule 3: Conditional assignments (If X then Y) must be strictly followed."
            ]
          }
        },
        {
          id: 2,
          questionRange: [65, 65],
          type: 'TEXT_LOGIC',
          title: 'Health Claims',
          context: 'Evaluate the following conclusions based on the premises provided.',
          data: {
            premises: [
              "All organic vegetables are nutrient-dense.",
              "Some nutrient-dense foods are expensive.",
              "No expensive foods are subsidized by the government.",
              "Most subsidized foods are mass-produced."
            ],
            notes: [
              "Assumptions outside these premises should not be used.",
              "'Some' implies at least one.",
              "'Most' implies >50%."
            ]
          }
        },
        {
          id: 3,
          questionRange: [66, 66],
          type: 'TEXT_LOGIC',
          title: 'Hospital Shifts',
          context: 'Five doctors (P, Q, R, S, T) work different shifts.',
          data: {
            text: "P works before Q. R works after S. T works between P and S. Q works last.",
            notes: ["Determine the relative order based on the temporal constraints."]
          }
        },
        {
          id: 4,
          questionRange: [67, 67],
          type: 'TEXT_LOGIC',
          title: 'Drug Prioritization',
          context: 'Should hospitals prioritize generic over brand-name drugs?',
          data: {
            text: "Evaluate the strength of the following arguments regarding drug prioritization in healthcare settings.",
            notes: ["A strong argument must be both relevant and logically sound."]
          }
        },
        {
          id: 5,
          questionRange: [68, 72],
          type: 'VENN_DIAGRAM',
          title: 'Club Memberships',
          context: 'A survey of 100 students regarding three clubs: Coding (C), Chess (H), and Art (A).',
          data: {
            labels: ["Coding", "Chess", "Art"],
            values: {
              onlyA: 15,
              onlyB: 12,
              onlyC: 20,
              ab: 8,
              bc: 10,
              ac: 5,
              abc: 7,
              none: 23
            },
            notes: [
              "abc: Students belonging to all three clubs.",
              "ab, bc, ac: Students belonging to exactly two clubs.",
              "none: Students not participating in any of the listed clubs."
            ]
          }
        },
        {
          id: 6,
          questionRange: [73, 76],
          type: 'TABLE',
          title: 'Product Reliability Analysis',
          context: 'Cumulative failure rates of three electronic components over a 5-year operating window.',
          data: {
            headers: ["Component", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5", "Cost (£)"],
            rows: [
              ["Sensor A", "0.5%", "1.2%", "2.5%", "4.0%", "6.5%", 15],
              ["Processor B", "0.2%", "0.4%", "0.8%", "1.5%", "3.0%", 120],
              ["Battery C", "1.0%", "2.5%", "5.0%", "12.0%", "25.0%", 45]
            ],
            notes: [
              "Failure rates are cumulative (total failure probability by end of year).",
              "Costs represent the unit price for a single replacement.",
              "Failure of one component is independent of others."
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 59,
        text: "Which of the following MUST be true about F's office assignment?",
        options: ["F is in Office 1", "F is in Office 2", "F is in Office 3", "F is with A", "F is with C"],
        answerIndex: 1,
        explanation: "Rule 5 states F cannot be in 1 or 3, so F must be in Office 2."
      },
      {
        id: 60,
        text: "Which of the following must be true about Office 2 based on the rule 'exactly two employees per office'?",
        options: ["D can be in Office 2", "E can be in Office 2", "D and E cannot both be in Office 2", "C is in Office 2", "A is in Office 2"],
        answerIndex: 2,
        explanation: "Rule 5: F is in Office 2. Rule 4: If D is in 2, then E is in 2. This would mean 3 people in Office 2 (D, E, F), violating Rule 1. Thus, D and E cannot both be in Office 2."
      },
      {
        id: 61,
        text: "If A and C are in the same office, which office are they in?",
        options: ["Office 1", "Office 2", "Office 3", "Office 1 or 2", "Cannot be determined"],
        answerIndex: 0,
        explanation: "C is in Office 1 (Rule 3). If A is with C, they are in Office 1."
      },
      {
        id: 62,
        text: "If A and C are in Office 1, and D is in Office 3, where is B?",
        options: ["Office 1", "Office 2", "Office 3", "Office 1 or 3", "Office 2 or 3"],
        answerIndex: 1,
        explanation: "Office 1: A, C. Office 2: F, B. Office 3: D, E. B cannot be with A, so B is not in 1. If D is in 3, then for E to also be in an office with exactly two people, B must be in Office 2 with F."
      },
      {
        id: 63,
        text: "Which employee cannot be in Office 1?",
        options: ["A", "B", "D", "E", "F"],
        answerIndex: 4,
        explanation: "Rule 5 explicitly states F cannot be in Office 1."
      },
      {
        id: 64,
        text: "Which of the following MUST be true if E is in Office 3?",
        options: ["D is in Office 1", "D is in Office 3", "B is in Office 2", "A is in Office 3", "A and D are together"],
        answerIndex: 1,
        explanation: "If E is in 3, and Rule 4 says 'If D is in 2, then E is in 2', the contrapositive is 'If E is not in 2, D is not in 2'. Since D cannot be in 1 (C and F are in 1 and 2), D must be in 3 with E."
      },
      {
        id: 65,
        text: "Does the conclusion follow from the premises?",
        type: 'syllogism',
        multiPartLabels: [
          "Some organic vegetables are expensive.",
          "All mass-produced foods are subsidized.",
          "No organic vegetable is subsidized by the government.",
          "Some nutrient-dense foods are not subsidized.",
          "All nutrient-dense foods are organic vegetables."
        ],
        multiPartCorrect: [0, 0, 0, 1, 0],
        answerIndex: -1,
        options: ["Yes", "No"],
        explanation: "1: No. 'Some nutrient-dense are expensive' and 'Organic are nutrient-dense' doesn't guarantee an organic-expensive overlap. 4: Yes. Expensive foods are nutrient-dense and not subsidized (Rule 3)."
      },
      {
        id: 66,
        text: "Five doctors (P, Q, R, S, T) work different shifts. P works before Q. R works after S. T works between P and S. If Q works last, who works the second shift?",
        options: ["P", "Q", "R", "S", "T"],
        answerIndex: 4,
        explanation: "Order: P - T - S - R - Q. T is second because P must be before Q, and T is between P and S, and R is after S."
      },
      {
        id: 67,
        text: "Which of the following arguments best strengthens the claim that hospitals should prioritize generic over brand-name drugs?",
        options: [
          "Generic drugs have the same active ingredients and safety profiles as brand-name drugs but cost significantly less.",
          "Many patients prefer the packaging and familiarity of brand-name drugs.",
          "Brand-name drugs are often the only ones available for rare and complex conditions.",
          "Reducing hospital costs allows for more investment in life-saving equipment and staff training.",
          "Brand-name drugs are developed through expensive research that generic manufacturers do not have to perform."
        ],
        answerIndex: 0,
        explanation: "Option A directly supports the switch by proving clinical equivalence while highlighting the cost benefit, which is the primary driver for prioritizing generics."
      },
      {
        id: 68,
        text: "Which of the following is true regarding the Art club members?",
        options: [
          "Exactly 7 members belong to all three clubs.",
          "The number of members in only the Art club is 20.",
          "There are 35 total members in the Art club.",
          "Every Art club member is also in the Coding club.",
          "Most Art club members are not in the Chess club."
        ],
        answerIndex: 0,
        explanation: "The Venn data explicitly states 'abc: 7', meaning 7 students are in all three clubs."
      },
      {
        id: 69,
        text: "How many students are in the Coding club but not the Art club?",
        options: ["28", "20", "27", "35", "15"],
        answerIndex: 2,
        explanation: "Coding but not Art = 20 + 8 = 28."
      },
      {
        id: 70,
        text: "How many students belong to exactly two clubs?",
        options: ["23", "25", "18", "15", "30"],
        answerIndex: 0,
        explanation: "ab + bc + ac = 8 + 10 + 5 = 23."
      },
      {
        id: 71,
        text: "What is the total number of students in the Art club?",
        options: ["37", "42", "30", "25", "15"],
        answerIndex: 0,
        explanation: "Only Art (15) + ac (5) + bc (10) + abc (7) = 37."
      },
      {
        id: 72,
        text: "How many students belong to at least one club?",
        options: ["77", "100", "23", "60", "85"],
        answerIndex: 0,
        explanation: "Total (100) - None (23) = 77."
      },
      {
        id: 73,
        text: "Which component is most likely to fail in the first 2 years?",
        options: ["Sensor A", "Processor B", "Battery C", "A and C equal", "All equal"],
        answerIndex: 2,
        explanation: "Battery C total failure at 2 yrs = 1.0 + 2.5 = 3.5%. Sensor A = 1.7%. Processor B = 0.6%."
      },
      {
        id: 74,
        text: "By Year 5, what is the probability that a Battery C has NOT failed?",
        options: ["75%", "25%", "85%", "93.5%", "50%"],
        answerIndex: 0,
        explanation: "Failure rate is 25%. So non-failure is 75%."
      },
      {
        id: 75,
        text: "Which component shows the most consistent increase in failure rate?",
        options: ["Sensor A", "Processor B", "Battery C", "A and B", "B and C"],
        answerIndex: 1,
        explanation: "Processor B roughly doubles each year (0.2, 0.4, 0.8, 1.5, 3.0)."
      },
      {
        id: 76,
        text: "If a device uses two Sensor A components, what is the probability both fail in Year 1?",
        options: ["0.25%", "0.0025%", "1.0%", "0.5%", "0.1%"],
        answerIndex: 1,
        explanation: "0.5% * 0.5% = 0.005 * 0.005 = 0.000025 = 0.0025%."
      }
    ]
  },
  {
    setId: 114,
    section: 'Decision Making',
    title: "DM Elite Sprint 1",
    type: "TEXT_LOGIC",
    context: "Complex syllogisms and multi-variable logic. 15.5 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          questionRange: [257, 259],
          type: 'TEXT_LOGIC',
          title: 'Advanced Syllogisms',
          context: 'Decide whether each conclusion follows from the statements provided.',
          data: {
            premises: [
              "257: All Protocol X facilities must adopt Standard Y. Some Standard Y are not eligible for Subsidy. No ineligible facility has specialized trauma.",
              "258: Only Class 3 certified tools are permitted in Neurosurgery. All Class 3 tools are calibrated annually. Most tools calibrated annually are compatible with Nexus-9.",
              "259: If registrar is assigned to Ward A, they cannot be on Emergency Roster. Every registrar not on Emergency Roster has completed Advanced Triage."
            ],
            notes: [
              "Yes: The conclusion logically follows from the premises.",
              "No: The conclusion does not necessarily follow.",
              "Consider the 'contrapositive' for conditional logic chain."
            ]
          }
        },
        {
          id: 2,
          questionRange: [260, 261],
          type: 'SCENARIO',
          title: 'Clinical Research Committee',
          context: 'Five researchers presenting five studies in five consecutive slots.',
          data: {
            text: "Researchers: Dr. Aris, Dr. Bell, Dr. Chen, Dr. Deng, Dr. Ellis. Studies: Oncology, Virology, Genetics, Neurology, Cardiology. Slots: 10:00, 10:30, 11:00, 11:30, 12:00.\n\n1. Dr. Chen is at 10:00.\n2. Dr. Bell (Oncology) is at 11:30.\n3. Dr. Deng is in Neurology.\n4. Genetics is immediately before Neurology.\n5. Dr. Aris is exactly 1 hour after Dr. Deng.\n6. Dr. Ellis is not in Cardiology.",
            notes: [
              "Logic Grid recommended for multi-variable puzzles.",
              "Fixed point: Chen (10:00), Bell (11:30).",
              "Chain: Genetics -> Deng (Neuro) -> [30m] -> Bell (Onco) -> [30m] -> Aris."
            ]
          }
        },
        {
          id: 3,
          questionRange: [262, 264],
          type: 'SCENARIO',
          title: 'Evaluative Argumentation',
          context: 'Select the strongest argument for or against the provided proposition.',
          data: {
            text: "262: Proposition regarding compulsory 'Rural Placement' for medical graduates.\n263: Proposition regarding 'Final Decision Authority' for AI in radiology.\n264: Proposition regarding prohibiting patents for 'Life-Saving' medications.",
            notes: [
              "Strong Argument: Addresses the core of the issue with evidence or direct logic.",
              "Weak Argument: Relies on assumptions, secondary factors (cost), or pure speculation."
            ]
          }
        },
        {
          id: 4,
          questionRange: [265, 267],
          type: 'VENN_DIAGRAM',
          title: 'Hospital Staffing Audit',
          context: 'Training intersections for 240 hospital staff members.',
          data: {
            labels: ["Neonatal (N)", "Emergency (E)", "Radiology (R)"],
            values: {
              onlyA: 65, // N only (calculated: 110 - 25 - 10 - 10 = 65)
              onlyB: 45, // E only (calculated: 95 - 25 - 15 - 10 = 45)
              onlyC: 45, // R only (calculated: 80 - 15 - 10 - 10 = 45)
              ab: 25, // N & E (35 total - 10 all)
              bc: 15, // E & R (25 total - 10 all)
              ac: 10, // N & R (20 total - 10 all)
              abc: 10, // All three
              none: 25 // 240 - sum(others)
            },
            notes: [
              "Total Staff (N) = 240.",
              "Values represent the number of unique staff in each intersection (disjoint regions).",
              "267 concerns the relationship between Emergency, Administration, and Neonatal."
            ]
          }
        },
        {
          id: 5,
          questionRange: [268, 271],
          type: 'SCENARIO',
          title: 'Rare Mutation Screening',
          context: 'Statistical performance of a screening test for a rare mutation (M).',
          data: {
            text: "• Prevalence: 1 in 500 individuals (0.2%).\n• Sensitivity: 99% (True Positive Rate).\n• False Positive Rate: 5% (1 - Specificity).",
            notes: [
              "PPV (Positive Predictive Value) = True Positives / (True Positives + False Positives).",
              "Base Rate Fallacy: In rare conditions, false positives often outnumber true positives.",
              "Calculate expected values per 1,000 or 10,000 individuals for clarity."
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 257,
        text: "At least some medical facilities that implement 'Protocol X' do not have a specialized trauma unit.",
        options: ["Yes", "No"],
        answerIndex: 0,
        explanation: "All Protocol X must adopt Standard Y. Some Standard Y are ineligible for subsidy. No ineligible has trauma. Therefore, those specific Protocol X facilities that adopt Standard Y but are ineligible for subsidy cannot have a trauma unit."
      },
      {
        id: 258,
        text: "Some tools compatible with the 'Nexus-9' operating system are permitted in the Neurosurgery wing.",
        options: ["Yes", "No"],
        answerIndex: 1,
        explanation: "Only Class 3 are permitted. All Class 3 are calibrated annually. Most calibrated annually are Nexus-9 compatible. However, we cannot guarantee that the specific Class 3 tools are among those compatible with Nexus-9."
      },
      {
        id: 259,
        text: "All registrars assigned to 'Ward A' have completed the 'Advanced Triage' module.",
        options: ["Yes", "No"],
        answerIndex: 0,
        explanation: "Ward A implies NOT on Emergency Roster. Every registrar NOT on Emergency Roster has completed the module. Therefore, Ward A registrars must have completed the module."
      },
      {
        id: 260,
        text: "Which researcher is presenting the Virology study?",
        options: ["Dr. Aris", "Dr. Bell", "Dr. Chen", "Dr. Deng"],
        answerIndex: 0,
        explanation: "Logic Grid: 10:00 Chen (Cardio), 10:30 Ellis (Genetics), 11:00 Deng (Neuro), 11:30 Bell (Onco), 12:00 Aris (Virology). Aris is Virology."
      },
      {
        id: 261,
        text: "What time is Dr. Ellis presenting, and what is her field?",
        options: ["10:30, Genetics", "10:00, Cardiology", "11:00, Neurology", "10:30, Cardiology"],
        answerIndex: 0,
        explanation: "Ellis is Genetics at 10:30."
      },
      {
        id: 262,
        text: "Should the UK government mandate that all medical students undergo a compulsory two-year 'Rural Placement' to address GP shortages?",
        options: [
          "Yes, because rural areas have significantly higher mortality rates than urban areas.",
          "No, because forcing graduates into specific locations may discourage high-achieving students.",
          "Yes, because similar mandates in other countries have shown a 15% increase in long-term retention.",
          "No, because the cost of providing housing would exceed the current healthcare budget."
        ],
        answerIndex: 2,
        explanation: "Option C provides concrete, evidence-based support for the policy's efficacy, which is a hallmark of a strong UCAT argument."
      },
      {
        id: 263,
        text: "Should AI-driven diagnostic software be given 'Final Decision Authority' in radiology to eliminate human fatigue?",
        options: [
          "Yes, as recent studies show AI outperforms senior radiologists in identifying 98% of carcinomas.",
          "No, because the 'Black Box' nature of AI means there is no clear legal framework for negligence.",
          "Yes, because it would allow radiologists to focus on patient interaction.",
          "No, because AI software requires constant electricity and high-speed internet."
        ],
        answerIndex: 1,
        explanation: "Option B addresses a fundamental legal and ethical barrier (accountability) which is a critical consideration for granting authority."
      },
      {
        id: 264,
        text: "Should pharmaceutical companies be prohibited from patenting 'Life-Saving' medications?",
        options: [
          "Yes, because the right to health is a fundamental human right.",
          "No, because without exclusivity, companies would have no financial incentive to invest in R&D.",
          "Yes, as historical data indicates that the price of medicine drops by 80% in the generic market.",
          "No, because patents are the primary way the government tracks safety and efficacy."
        ],
        answerIndex: 1,
        explanation: "Option B presents a strong, logical consequence (loss of R&D incentive) that directly counters the feasibility of the proposal."
      },
      {
        id: 265,
        text: "How many staff members are trained in Neonatal Care but neither Emergency Surgery nor Radiology?",
        options: ["55", "65", "75", "85"],
        answerIndex: 1,
        explanation: "Total Neonatal (110) - (N&E 25) - (N&R 10) - (All Three 10) = 65."
      },
      {
        id: 266,
        text: "What is the total number of staff members who are trained in at least two of these specialties?",
        options: ["60", "70", "80", "90"],
        answerIndex: 0,
        explanation: "(N&E: 25) + (E&R: 15) + (N&R: 10) + (All 10) = 60."
      },
      {
        id: 267,
        text: "Which diagram correctly represents: 'All Emergency Surgeons are trained in Radiology, and some Radiology-trained staff are also in Neonatal care, but no Emergency Surgeon is in Neonatal care'?",
        options: [
          "Radiology circle contains Emergency; Neonatal circle overlaps Radiology but does not touch Emergency.",
          "Neonatal overlaps both Radiology and Emergency, and Radiology also contains Emergency.",
          "Radiology and Neonatal are separate circles, and Emergency is inside Radiology.",
          "All three circles overlap such that there is a central intersection of all three."
        ],
        answerIndex: 0,
        explanation: "Emergency is a subset of Radiology (inside). Neonatal overlaps Radiology (some) but must stay separate from Emergency (no intersection)."
      },
      {
        id: 268,
        text: "If a person tests positive, what is the probability (to the nearest whole percent) that they actually have the mutation?",
        options: ["1%", "4%", "20%", "99%"],
        answerIndex: 1,
        explanation: "PPV = (Sensitivity * Prevalence) / [(Sensitivity * Prevalence) + (FPR * (1-Prevalence))] = (0.99 * 0.002) / (0.00198 + 0.0499) ≈ 3.8%."
      },
      {
        id: 269,
        text: "In a group of 10,000 individuals, how many are expected to receive a 'False Positive' result?",
        options: ["50", "499", "500", "990"],
        answerIndex: 2,
        explanation: "Healthy individuals = 10,000 * 0.998 = 9,980. False Positives = 9,980 * 0.05 = 499 (approx 500)."
      },
      {
        id: 270,
        text: "A patient is told the test is 'highly accurate.' Which statement most accurately reflects the limitation of this screening?",
        options: [
          "The test is unreliable because the False Positive rate is higher than the prevalence.",
          "The test is perfect for high-risk individuals but useless for the general population.",
          "The True Positive rate is too low to be used in a clinical setting.",
          "The test will fail to identify 5% of the people who actually have the mutation."
        ],
        answerIndex: 0,
        explanation: "Low prevalence means FPR (5%) creates many more false positives than true positives (0.2%)."
      },
      {
        id: 271,
        text: "If the population size doubles but the prevalence remains the same, what happens to the number of True Positives?",
        options: ["It stays the same.", "It doubles.", "It increases by 5%.", "It decreases by half."],
        answerIndex: 1,
        explanation: "Prevalence is constant, so doubling the population doubles the number of cases and thus True Positives."
      }
    ]
  }
];
