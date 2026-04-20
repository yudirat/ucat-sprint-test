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
          questionRange: [59, 63],
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
          questionRange: [64, 68],
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
          questionRange: [69, 72],
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
          id: 4,
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
        id: 65,
        text: "Which of the following MUST be true if E is in Office 3?",
        options: ["D is in Office 1", "D is in Office 3", "B is in Office 2", "A is in Office 3", "A and D are together"],
        answerIndex: 1,
        explanation: "If E is in 3, and Rule 4 says 'If D is in 2, then E is in 2', the contrapositive is 'If E is not in 2, D is not in 2'. Since D cannot be in 1 (C and F are in 1 and 2), D must be in 3 with E."
      },
      {
        id: 66,
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
        id: 67,
        text: "Five doctors (P, Q, R, S, T) work different shifts. P works before Q. R works after S. T works between P and S. If Q works last, who works the second shift?",
        options: ["P", "Q", "R", "S", "T"],
        answerIndex: 4,
        explanation: "Order: P - T - S - R - Q. T is second because P must be before Q, and T is between P and S, and R is after S."
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
  }
];
