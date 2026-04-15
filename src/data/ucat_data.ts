export interface Question {
  id: number;
  text: string;
  options: string[];
  answerIndex: number;
  explanation: string;
}

export interface UCATSet {
  setId: number;
  title: string;
  type: string;
  context: string;
  dataSource: any; // Flexible for different types (Table, Pie, etc.)
  questions: Question[];
}

export const ucatSprintTests: UCATSet[] = [
  {
    setId: 1,
    title: "Public Transport Logistics",
    type: "TABLE",
    context: "Daily operational data for four major train routes in a UK city.",
    dataSource: {
      headers: ["Route", "Daily Passengers", "Ticket Price (£)", "Op. Cost (% of Rev)", "Delay Rate"],
      rows: [
        ["North Line", 12500, 6.40, 65, "12%"],
        ["East Link", 8200, 4.50, 70, "5%"],
        ["South Way", 15000, 7.20, 55, "18%"],
        ["West Rail", 9800, 5.80, 60, "8%"]
      ]
    },
    questions: [
      {
        id: 1,
        text: "What is the daily total profit for the North Line?",
        options: ["£28,000", "£52,000", "£80,000", "£34,500", "£24,800"],
        answerIndex: 0,
        explanation: "Revenue = 12,500 * 6.40 = £80,000. Profit Margin = 100% - 65% = 35%. Profit = £80,000 * 0.35 = £28,000."
      },
      {
        id: 2,
        text: "Which route has the highest number of delayed passengers per day?",
        options: ["North Line", "East Link", "South Way", "West Rail", "Equal: North and South"],
        answerIndex: 2,
        explanation: "North: 12,500 * 0.12 = 1,500. East: 8,200 * 0.05 = 410. South: 15,000 * 0.18 = 2,700. West: 9,800 * 0.08 = 784. South Way is highest."
      },
      {
        id: 3,
        text: "If East Link increases ticket price by 20% and passenger numbers drop by 10%, what is the new daily revenue?",
        options: ["£39,852", "£44,280", "£36,900", "£40,240", "£35,424"],
        answerIndex: 0,
        explanation: "New Price = 4.50 * 1.2 = £5.40. New Passengers = 8,200 * 0.9 = 7,380. New Revenue = 7,380 * 5.40 = £39,852."
      },
      {
        id: 4,
        text: "What is the ratio of Daily Passengers on the South Way to the West Rail, in simplest form?",
        options: ["15:9", "75:49", "3:2", "5:3", "25:14"],
        answerIndex: 1,
        explanation: "Ratio = 15,000 : 9,800. Divide by 100 -> 150 : 98. Divide by 2 -> 75 : 49."
      }
    ]
  },
  {
    setId: 2,
    title: "Energy Portfolio",
    type: "PIE_AND_TABLE",
    context: "National Energy Production (Total: 2,400 TWh) and Renewable Breakdown.",
    dataSource: {
      pieTotal: 2400,
      pieData: { Nuclear: 25, Gas: 35, Renewables: 30, Coal: 10 },
      renewableTable: [
        ["Wind", "50%", 1.2],
        ["Solar", "30%", 2.5],
        ["Hydro", "20%", 0.8]
      ]
    },
    questions: [
      {
        id: 5,
        text: "How many Terawatt-hours (TWh) are produced specifically by Wind energy?",
        options: ["360 TWh", "720 TWh", "1,200 TWh", "150 TWh", "480 TWh"],
        answerIndex: 0,
        explanation: "Total Renewables = 30% of 2,400 = 720 TWh. Wind = 50% of 720 = 360 TWh."
      },
      {
        id: 6,
        text: "What is the total production cost (in £ millions) for the Solar energy sector?",
        options: ["£450m", "£540m", "£600m", "£216m", "£1,800m"],
        answerIndex: 1,
        explanation: "Solar TWh = 30% of 720 = 216 TWh. Cost = 216 * 2.5 = £540m."
      },
      {
        id: 7,
        text: "If Coal production is phased out and replaced entirely by Hydro, by what percentage must Hydro production increase?",
        options: ["10%", "33.3%", "50%", "66.7%", "166.7%"],
        answerIndex: 4,
        explanation: "Coal = 10% of 2400 = 240. Hydro = 20% of 720 = 144. To add 240 to 144: 240 / 144 = 1.666 = 166.7%."
      },
      {
        id: 8,
        text: "The government doubles Nuclear production while Gas remains same. What is the new total national production?",
        options: ["2,400 TWh", "3,000 TWh", "4,800 TWh", "3,600 TWh", "2,750 TWh"],
        answerIndex: 1,
        explanation: "Nuclear = 25% of 2,400 = 600. Doubling adds another 600. 2,400 + 600 = 3,000 TWh."
      }
    ]
  },
  {
    setId: 3,
    title: "Logistics & Speed",
    type: "LINE_GRAPH",
    context: "Distance traveled (km) by two delivery vans over a 5-hour window.",
    dataSource: {
      timeHours: [0, 1, 2, 3, 4, 5],
      vanA_Dist: [0, 60, 120, 150, 220, 300],
      vanB_Dist: [0, 40, 100, 170, 260, 300]
    },
    questions: [
      {
        id: 9,
        text: "During which hour-long interval did Van B have the highest average speed?",
        options: ["Hour 0-1", "Hour 1-2", "Hour 2-3", "Hour 3-4", "Hour 4-5"],
        answerIndex: 3,
        explanation: "Distances for Van B: H1:40, H2:60, H3:70, H4:90, H5:40. 90km/h is the max speed."
      },
      {
        id: 10,
        text: "At the 3.5-hour mark, assuming constant speed between hours 3 and 4, how much further had Van B traveled than Van A?",
        options: ["30 km", "35 km", "40 km", "45 km", "50 km"],
        answerIndex: 0,
        explanation: "At 3.5h: Van A = 185km (midpoint 150-220). Van B = 215km (midpoint 170-260). Diff = 30km."
      },
      {
        id: 11,
        text: "If Van A uses 1 litre of fuel for every 12 km at £1.45/litre, what was the total fuel cost for the 300km journey?",
        options: ["£25.00", "£36.25", "£42.50", "£30.00", "£38.75"],
        answerIndex: 1,
        explanation: "Litres = 300 / 12 = 25. Cost = 25 * 1.45 = £36.25."
      },
      {
        id: 12,
        text: "What was the difference in average speed between the two vans over the first 3 hours?",
        options: ["5.5 km/h", "6.7 km/h", "15 km/h", "20 km/h", "0 km/h"],
        answerIndex: 1,
        explanation: "Van A Avg = 150/3 = 50. Van B Avg = 170/3 = 56.7. Difference = 6.7 km/h."
      }
    ]
  },
  {
    setId: 4,
    title: "Healthcare Economics",
    type: "MULTI_TABLE",
    context: "Medical equipment costs in local currency (Δ) and exchange rates.",
    dataSource: {
      equipment: [
        ["MRI Scanner", 850000, "12%"],
        ["X-Ray Machine", 120000, "8%"],
        ["Bed Unit", 4500, "5%"]
      ],
      exchange: { GBP: 0.85, USD: 1.10 }
    },
    questions: [
      {
        id: 13,
        text: "What is the annual maintenance cost in GBP (£) for one MRI Scanner?",
        options: ["£86,700", "£102,000", "£722,500", "£120,000", "£91,500"],
        answerIndex: 0,
        explanation: "Maint in Δ = 850,000 * 0.12 = 102,000. Conversion = 102,000 * 0.85 = £86,700."
      },
      {
        id: 14,
        text: "A clinic buys 10 Bed Units. What is the total cost in US Dollars ($)?",
        options: ["$45,000", "$38,250", "$49,500", "$54,200", "$41,400"],
        answerIndex: 2,
        explanation: "Cost in Δ = 10 * 4,500 = 45,000. Conversion = 45,000 * 1.10 = $49,500."
      },
      {
        id: 15,
        text: "If the maintenance cost of an X-Ray machine increases by 25%, what is the new maintenance cost in Δ?",
        options: ["9,600 Δ", "12,000 Δ", "15,000 Δ", "10,800 Δ", "13,200 Δ"],
        answerIndex: 1,
        explanation: "Original Maint = 120,000 * 0.08 = 9,600 Δ. New = 9,600 * 1.25 = 12,000 Δ."
      },
      {
        id: 16,
        text: "Which is more expensive: 2 X-Ray machines or 1/4 of an MRI Scanner’s cost?",
        options: ["2 X-Rays by 27,500 Δ", "1/4 MRI by 27,500 Δ", "2 X-Rays by 35,000 Δ", "Equal", "1/4 MRI by 12,500 Δ"],
        answerIndex: 0,
        explanation: "2 X-Rays = 240,000 Δ. 1/4 MRI = 850,000 / 4 = 212,500 Δ. Difference = 27,500 Δ."
      }
    ]
  }
];

export function getSprintSet(index: number): UCATSet {
  return ucatSprintTests[index];
}
