export interface Question {
  id: number;
  text: string;
  options: string[];
  answerIndex: number;
  explanation: string;
  image?: string; 
  type?: 'standard' | 'syllogism';
  multiPartCorrect?: number[]; // For syllogisms: [1, 0, 1, 1, 0] (1=Follows, 0=Doesn't)
  multiPartLabels?: string[]; // ["Conclusion 1", "Conclusion 2", ...]
}

export interface UCATSet {
  setId: number;
  section: 'Quantitative Reasoning' | 'Decision Making' | 'Verbal Reasoning' | 'Situational Judgement';
  title: string;
  type: 'TABLE' | 'PIE_CHART' | 'BAR_CHART' | 'LINE_GRAPH' | 'MULTI_TABLE' | 'PIE_AND_TABLE' | 'IMAGE_SET' | 'TEXT_LOGIC' | 'SCENARIO' | 'PASSAGE';
  context: string;
  dataSource: any; 
  questions: Question[];
}

export const ucatSprintTests: UCATSet[] = [
  {
    setId: 101,
    section: 'Quantitative Reasoning',
    title: "QR Sprint A (50% Length)",
    type: "TABLE",
    context: "This sprint contains 18 questions across 4 different data scenarios. You have 13 minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'TABLE',
          title: 'Train Logistics',
          context: 'Operational data for four major train routes.',
          data: {
            headers: ["Route", "Passengers", "Price (£)", "Op. Cost (%)"],
            rows: [
              ["North", 12500, 6.40, 65],
              ["East", 8200, 4.50, 70],
              ["South", 15000, 7.20, 55],
              ["West", 9800, 5.80, 60]
            ]
          }
        },
        {
          id: 2,
          type: 'PIE_CHART',
          title: 'Energy Production',
          context: 'National Energy Production breakdown.',
          data: {
            title: 'Energy Sources 2024',
            total: '2400 TWh',
            data: { Nuclear: 25, Gas: 35, Renewables: 30, Coal: 10 }
          }
        },
        {
          id: 3,
          type: 'BAR_CHART',
          title: 'Retail Performance',
          context: 'Annual revenue for five retail branches.',
          data: {
            title: 'Branch Revenue (£m)',
            labels: ['London', 'Manchester', 'Birmingham', 'Glasgow', 'Cardiff'],
            data: [45, 32, 28, 22, 18],
            unit: '£m'
          }
        },
        {
          id: 4,
          type: 'LINE_GRAPH',
          title: 'Stock Indices',
          context: 'Value of two indices over 5 months.',
          data: {
            timeHours: [1, 2, 3, 4, 5],
            vanA_Dist: [100, 110, 105, 120, 130],
            vanB_Dist: [90, 95, 100, 105, 110]
          }
        }
      ]
    },
    questions: [
      {
        id: 1,
        text: "What is the daily total profit for the North Line?",
        options: ["£28,000", "£52,000", "£80,000", "£34,500", "£24,800"],
        answerIndex: 0,
        explanation: "Revenue = 12,500 * 6.40 = £80,000. Profit = £80,000 * (1 - 0.65) = £28,000."
      },
      {
        id: 2,
        text: "Which route has the lowest operating cost in absolute terms?",
        options: ["North", "East", "South", "West", "East and West"],
        answerIndex: 1,
        explanation: "North: 52k, East: 25.8k, South: 59.4k, West: 34k. East is lowest."
      },
      {
        id: 3,
        text: "What is the average ticket price across all four routes?",
        options: ["£5.85", "£5.98", "£6.05", "£6.12", "£5.45"],
        answerIndex: 1,
        explanation: "(6.4 + 4.5 + 7.2 + 5.8) / 4 = £5.975 ≈ £5.98."
      },
      {
        id: 4,
        text: "If South route passengers increase by 10% next day, what is the new revenue?",
        options: ["£118,800", "£108,000", "£112,500", "£115,200", "£120,000"],
        answerIndex: 0,
        explanation: "New pax = 15,000 * 1.1 = 16,500. Revenue = 16,500 * 7.20 = £118,800."
      },
      {
        id: 5,
        text: "What is the ratio of North passengers to West passengers?",
        options: ["25:14", "125:98", "5:4", "3:2", "10:7"],
        answerIndex: 1,
        explanation: "12500 : 9800 = 125 : 98."
      },
      {
        id: 6,
        text: "How many TWh are produced by Gas?",
        options: ["840 TWh", "600 TWh", "720 TWh", "480 TWh", "960 TWh"],
        answerIndex: 0,
        explanation: "35% of 2400 = 840 TWh."
      },
      {
        id: 7,
        text: "Nuclear and Renewables combined make up what percentage of total production?",
        options: ["55%", "60%", "45%", "50%", "65%"],
        answerIndex: 0,
        explanation: "25% + 30% = 55%."
      },
      {
        id: 8,
        text: "If Coal is halved and added to Renewables, what is the new Renewables percentage?",
        options: ["35%", "40%", "32.5%", "37.5%", "45%"],
        answerIndex: 0,
        explanation: "Coal 10% / 2 = 5%. 30% + 5% = 35%."
      },
      {
        id: 9,
        text: "What is the ratio of Gas production to Nuclear production?",
        options: ["7:5", "3:2", "5:3", "4:3", "7:4"],
        answerIndex: 0,
        explanation: "35 : 25 = 7 : 5."
      },
      {
        id: 10,
        text: "Which branch has a revenue closest to the average revenue of all branches?",
        options: ["Manchester", "Birmingham", "London", "Glasgow", "Cardiff"],
        answerIndex: 1,
        explanation: "Total = 45+32+28+22+18 = 145. Avg = 145/5 = 29. Birmingham (28) is closest."
      },
      {
        id: 11,
        text: "What percentage of total revenue is generated by the London branch?",
        options: ["31%", "25%", "35%", "28%", "40%"],
        answerIndex: 0,
        explanation: "45 / 145 = 0.3103 ≈ 31%."
      },
      {
        id: 12,
        text: "If Glasgow revenue increases by 50%, which branch's current revenue will it be closest to?",
        options: ["Manchester", "Birmingham", "London", "Cardiff", "None"],
        answerIndex: 0,
        explanation: "Glasgow (22) * 1.5 = 33. This is closest to Manchester's current revenue of 32."
      },
      {
        id: 13,
        text: "What is the difference in revenue between the top two branches?",
        options: ["£13m", "£10m", "£15m", "£12m", "£8m"],
        answerIndex: 0,
        explanation: "45 - 32 = £13m."
      },
      {
        id: 14,
        text: "Cardiff branch aims for 25% growth. What is their target revenue?",
        options: ["£22.5m", "£20.0m", "£24.5m", "£19.5m", "£21.0m"],
        answerIndex: 0,
        explanation: "18 * 1.25 = £22.5m."
      },
      {
        id: 15,
        text: "At which month was the gap between Index A and Index B the largest?",
        options: ["Month 5", "Month 1", "Month 4", "Month 2", "Month 3"],
        answerIndex: 0,
        explanation: "M1:10, M2:15, M3:5, M4:15, M5:20. Month 5 is largest."
      },
      {
        id: 16,
        text: "What was the percentage increase for Index A from Month 1 to Month 5?",
        options: ["30%", "20%", "25%", "35%", "15%"],
        answerIndex: 0,
        explanation: "(130 - 100) / 100 = 30%."
      },
      {
        id: 17,
        text: "What was the average value of Index B over the 5 months?",
        options: ["100", "95", "105", "110", "98"],
        answerIndex: 0,
        explanation: "(90+95+100+105+110) / 5 = 100."
      },
      {
        id: 18,
        text: "Which index showed a more consistent monthly growth rate?",
        options: ["Index B", "Index A", "Equal", "Index B Month 1-3", "Index A Month 2-4"],
        answerIndex: 0,
        explanation: "Index B grew by exactly 5 units every month. Index A fluctuated (10, -5, 15, 10)."
      }
    ]
  },
  {
    setId: 102,
    section: 'Quantitative Reasoning',
    title: "QR Sprint B (50% Length)",
    type: "MULTI_TABLE",
    context: "Second 18-question sprint for QR. Focused on currency and multi-data sets. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'MULTI_TABLE',
          title: 'Healthcare Costs',
          context: 'Medical costs in local currency (Δ) and exchange rates.',
          data: {
            equipment: [
              ["MRI", 850000, "12%"],
              ["X-Ray", 120000, "8%"],
              ["Bed", 4500, "5%"]
            ],
            exchange: { GBP: 0.85, USD: 1.10 }
          }
        },
        {
          id: 2,
          type: 'TABLE',
          title: 'Flight Scheduling',
          context: 'Flight durations and fuel usage.',
          data: {
            headers: ["Flight", "Distance (km)", "Time (hr)", "Fuel (kg)"],
            rows: [
              ["LHR-JFK", 5500, 7.5, 42000],
              ["LHR-DXB", 5400, 7.0, 38000],
              ["LHR-SIN", 10800, 13.0, 85000],
              ["LHR-SYD", 17000, 22.0, 140000]
            ]
          }
        }
      ]
    },
    questions: [
       {
        id: 19,
        text: "Annual maintenance for MRI in GBP?",
        options: ["£86,700", "£102,000", "£72,250", "£120,000", "£91,500"],
        answerIndex: 0,
        explanation: "850,000 * 0.12 * 0.85 = £86,700."
      },
      {
        id: 20,
        text: "Cost of 10 Bed Units in USD?",
        options: ["$49,500", "$45,000", "$38,250", "$54,200", "$41,400"],
        answerIndex: 0,
        explanation: "4500 * 10 * 1.10 = $49,500."
      },
      {
        id: 21,
        text: "Maintenance for X-Ray in USD?",
        options: ["$10,560", "$9,600", "$12,400", "$8,800", "$11,200"],
        answerIndex: 0,
        explanation: "120,000 * 0.08 * 1.10 = $10,560."
      },
      {
        id: 22,
        text: "If GBP rate falls to 0.80, what is the new MRI cost in GBP?",
        options: ["£680,000", "£722,500", "£850,000", "£1,062,500", "£640,000"],
        answerIndex: 0,
        explanation: "850,000 * 0.80 = £680,000."
      },
      {
        id: 23,
        text: "What is the ratio of MRI cost to X-Ray cost?",
        options: ["85:12", "7:1", "12:85", "6:1", "4:1"],
        answerIndex: 0,
        explanation: "850000 : 120000 = 85 : 12."
      },
      {
        id: 24,
        text: "Total cost of 1 MRI and 2 X-Rays in Δ?",
        options: ["1,090,000", "970,000", "1,200,000", "1,150,000", "1,050,000"],
        answerIndex: 0,
        explanation: "850k + 240k = 1,090,000 Δ."
      },
      {
        id: 25,
        text: "Annual maint for 5 Bed Units in Δ?",
        options: ["1,125", "225", "2,250", "1,500", "900"],
        answerIndex: 0,
        explanation: "4500 * 5 * 0.05 = 1,125 Δ."
      },
      {
        id: 26,
        text: "Difference between USD and GBP cost for one MRI Scanner?",
        options: ["212,500 Δ", "250,000 Δ", "180,000 Δ", "150,000 Δ", "200,000 Δ"],
        answerIndex: 0,
        explanation: "850k * (1.1 - 0.85) = 212,500 Δ."
      },
      {
        id: 27,
        text: "Which is cheaper: 100 Beds or 1 X-Ray?",
        options: ["X-Ray by 330,000 Δ", "100 Beds by 330,000 Δ", "X-Ray by 250,000 Δ", "Equal", "100 Beds by 450,000 Δ"],
        answerIndex: 0,
        explanation: "100 Beds = 450,000. X-Ray = 120,000. X-Ray is cheaper by 330,000 Δ."
      },
      {
        id: 28,
        text: "Average speed (km/h) for LHR-JFK?",
        options: ["733", "800", "650", "700", "750"],
        answerIndex: 0,
        explanation: "5500 / 7.5 = 733.3 km/h."
      },
      {
        id: 29,
        text: "Fuel efficiency (kg/km) for LHR-SIN?",
        options: ["7.87", "8.50", "6.20", "9.10", "7.15"],
        answerIndex: 0,
        explanation: "85000 / 10800 = 7.87 kg/km."
      },
      {
        id: 30,
        text: "Which flight is the most fuel efficient (kg/km)?",
        options: ["LHR-DXB", "LHR-JFK", "LHR-SIN", "LHR-SYD", "LHR-SIN and DXB"],
        answerIndex: 0,
        explanation: "JFK: 7.63, DXB: 7.03, SIN: 7.87, SYD: 8.23. DXB is lowest."
      },
      {
        id: 31,
        text: "Total distance traveled if a plane does 2 round trips LHR-JFK?",
        options: ["22,000 km", "11,000 km", "33,000 km", "44,000 km", "15,000 km"],
        answerIndex: 0,
        explanation: "5500 * 2 (round) * 2 (trips) = 22,000 km."
      },
      {
        id: 32,
        text: "Average speed for the longest flight (km/h)?",
        options: ["773", "810", "750", "720", "790"],
        answerIndex: 0,
        explanation: "17000 / 22 = 772.7 km/h."
      },
      {
        id: 33,
        text: "How much more fuel is used for LHR-SIN than LHR-DXB?",
        options: ["47,000 kg", "45,000 kg", "50,000 kg", "42,000 kg", "48,000 kg"],
        answerIndex: 0,
        explanation: "85000 - 38000 = 47,000 kg."
      },
      {
        id: 34,
        text: "If fuel cost is £1.20/kg, total cost for LHR-SYD?",
        options: ["£168,000", "£140,000", "£182,000", "£155,000", "£170,000"],
        answerIndex: 0,
        explanation: "140,000 * 1.20 = £168,000."
      },
      {
        id: 35,
        text: "Ratio of flight time JFK to SYD?",
        options: ["15:44", "7.5:22", "1:3", "2:5", "3:8"],
        answerIndex: 0,
        explanation: "7.5 : 22 = 15 : 44."
      },
      {
        id: 36,
        text: "Average distance per hour for LHR-DXB?",
        options: ["771 km", "800 km", "750 km", "720 km", "790 km"],
        answerIndex: 0,
        explanation: "5400 / 7 = 771.4 km/h."
      }
    ]
  },
  {
    setId: 103,
    section: 'Verbal Reasoning',
    title: "VR Sprint A (50% Length)",
    type: "PASSAGE",
    context: "22 questions based on 5 reading passages. You have 11 minutes total.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'PASSAGE',
          title: 'Arctic Ecosystems',
          data: {
            title: 'The Thawing North',
            text: "Permafrost, ground that remains frozen for at least two consecutive years, covers nearly a quarter of the Northern Hemisphere’s land area. As global temperatures rise, this frozen foundation is beginning to thaw, with profound consequences for both local infrastructure and global climate systems. In regions like Siberia and Northern Canada, the sinking ground—a process known as thermokarst—has led to the structural failure of roads, pipelines, and housing, often necessitating the complete abandonment of remote settlements.\n\nMore concerning to climatologists is the release of greenhouse gases. Permafrost acts as a massive carbon sink, containing an estimated 1,400 billion tons of carbon—roughly double the amount currently in the atmosphere. When it thaws, microbial activity decomposes the newly accessible organic matter, releasing methane and carbon dioxide. This process creates a feedback loop: higher temperatures cause more thawing, which releases more gases, further driving global warming. Recent studies suggest that even a moderate increase in temperature could trigger a 'tipping point' where the release of these gases becomes self-sustaining and irreversible."
          }
        },
        {
          id: 2,
          type: 'PASSAGE',
          title: 'Telemedicine Regulation',
          data: {
            title: 'Medicine Without Borders',
            text: "The rapid expansion of telemedicine has outpaced the regulatory frameworks designed to ensure patient safety and professional accountability. Traditionally, medical licensing has been jurisdiction-specific; a doctor licensed in London could not legally treat a patient in New York without an additional license. Telemedicine disrupts this model by allowing specialists to provide consultations across international borders at the click of a button. While this offers immense benefits for patients in underserved areas, it creates a 'legal grey zone' regarding malpractice and data protection.\n\nAdvocates for a unified international medical license argue that it would streamline care and allow for a more efficient distribution of medical expertise. However, critics point to the vast differences in training standards and ethical protocols between nations. For instance, what constitutes 'informed consent' varies significantly between European and Southeast Asian healthcare systems. Furthermore, the storage of sensitive patient data on cloud servers owned by multinational corporations raises significant privacy concerns, as these entities are often subject to different data-harvesting laws than the medical practitioners themselves."
          }
        },
        {
          id: 3,
          type: 'PASSAGE',
          title: 'Cognitive Linguistics',
          data: {
            title: 'Language and Perception',
            text: "The Sapir-Whorf hypothesis, which suggests that the language we speak influences how we perceive the world, has long been a subject of debate in cognitive science. Early 20th-century linguists famously claimed that because certain Indigenous languages lacked specific words for 'time' or 'future', their speakers conceived of reality in a purely present-oriented way. While extreme versions of this linguistic determinism have been largely discredited, modern research into color perception suggests that language does, at the very least, sharpen our categorical boundaries.\n\nIn a landmark study, researchers compared English speakers with the Himba tribe of Namibia. The Himba language uses the same word for both blue and green, but has several distinct terms for different shades of green that look identical to an English speaker. When shown a circle of green squares with one slightly different shade, Himba speakers identified the outlier almost instantly, whereas English speakers struggled. Conversely, Himba speakers found it difficult to distinguish a blue square from a green one. This suggests that while the human eye sees the same physical spectrum, the brain’s ability to categorize and prioritize visual data is conditioned by the linguistic labels available to it."
          }
        },
        {
          id: 4,
          type: 'PASSAGE',
          title: 'Renewable Grid Stability',
          data: {
            title: 'The Intermittency Challenge',
            text: "The transition to 100% renewable energy is frequently framed as a technological hurdle centered on generation capacity. However, for national grid operators, the primary challenge is not the amount of energy produced, but its reliability. Unlike traditional gas or coal-fired plants, which provide a steady 'baseload' supply, solar and wind power are intermittent. A sudden decrease in wind speed or a cloudy afternoon can lead to a rapid drop in frequency across the grid, which, if not compensated for within milliseconds, can trigger widespread blackouts.\n\nTo manage this, engineers are turning to large-scale Battery Energy Storage Systems (BESS) and 'demand-side response' strategies. BESS units can inject massive amounts of power into the grid almost instantly, acting as a buffer during frequency drops. Demand-side response, meanwhile, involves incentivizing large industrial consumers to temporarily reduce their power usage during peak demand. While these solutions are promising, they require a level of digital coordination and grid flexibility that many older national infrastructures lack. The cost of upgrading these grids is estimated to be in the trillions, leading some economists to argue that the 'last 10%' of the transition to renewables will be significantly more expensive than the first 90%."
          }
        },
        {
          id: 5,
          type: 'PASSAGE',
          title: 'Renaissance Art Techniques',
          data: {
            title: 'From Tempera to Oil',
            text: "The 15th-century shift from egg tempera to oil paint represents one of the most significant technical revolutions in Western art history. Egg tempera, the dominant medium of the Middle Ages, consisted of ground pigments mixed with egg yolk. It was a fast-drying medium that required artists to apply paint in meticulous, cross-hatched strokes. Because it dried almost instantly, blending colors directly on the panel was impossible, resulting in a flat, highly stylized aesthetic that prioritized symbolic clarity over naturalistic depth.\n\nIn contrast, oil paint—popularized in Northern Europe by artists like Jan van Eyck—offered a much longer drying time. This allowed for 'sfumato', the subtle blending of tones to create lifelike shadows and textures. Oils could also be applied in thin, translucent glazes, allowing light to penetrate the layers and reflect off the white gesso primer below, giving the paintings an internal luminosity. By the time the technique reached the workshops of Venice in the late 1400s, it had transformed the goals of art from the depiction of divine icons to the mastery of light, space, and human anatomy. While tempera remained in use for several decades, its limitations eventually saw it relegated to minor works and decorative panels."
          }
        }
      ]
    },
    questions: [
      {
        id: 37,
        text: "According to the passage, the sinking of ground in the Arctic is caused by which process?",
        options: ["Microbial decomposition", "Linguistic determinism", "Thermokarst", "Greenhouse feedback loops", "Industrial consumer response"],
        answerIndex: 2,
        explanation: "The passage explicitly defines the sinking ground process as 'thermokarst'."
      },
      {
        id: 38,
        text: "Climatologists are primarily concerned about permafrost thaw because it:",
        options: ["Forces the abandonment of roads", "Releases sequestered methane and CO2", "Doubles the current atmospheric oxygen", "Reduces microbial activity in Siberia", "Makes microbial decomposition impossible"],
        answerIndex: 1,
        explanation: "The passage states that the release of greenhouse gases (methane and CO2) is 'more concerning' to climatologists."
      },
      {
        id: 39,
        text: "True or False: The amount of carbon in permafrost is approximately half of what is currently in the atmosphere.",
        options: ["True", "False", "Can't Tell", "Only true in Siberia", "Only true for methane"],
        answerIndex: 1,
        explanation: "False. The passage states it is 'roughly double' the amount in the atmosphere."
      },
      {
        id: 40,
        text: "Which of the following would be the most appropriate title for the feedback loop described?",
        options: ["The Thermokarst Cycle", "The Carbon Sink Sinkhole", "The Permafrost Warming Spiral", "Microbial Infrastructure Failure", "The Siberia-Canada Accord"],
        answerIndex: 2,
        explanation: "The feedback loop involves temperatures causing thawing, which releases gases, further driving warming."
      },
      {
        id: 41,
        text: "Why do critics oppose a unified international medical license?",
        options: ["It would streamline cross-border care", "Global training and ethics are inconsistent", "Malpractice insurance is too expensive", "Data protection is already perfect", "Multinational corporations refuse to participate"],
        answerIndex: 1,
        explanation: "Critics point to the 'vast differences in training standards and ethical protocols between nations'."
      },
      {
        id: 42,
        text: "The 'legal grey zone' mentioned in the text refers specifically to:",
        options: ["The speed of fiber-optic consultations", "Malpractice and data protection accountability", "Underserved areas in New York", "Informed consent in Europe", "Cloud server ownership"],
        answerIndex: 1,
        explanation: "The passage connects the benefits of cross-border care to a 'legal grey zone' regarding malpractice and data protection."
      },
      {
        id: 43,
        text: "Based on the passage, the definition of 'informed consent' is:",
        options: ["Identical across the developed world", "Culturally and nationally dependent", "Determined by cloud server laws", "Only relevant in Southeast Asia", "Obsolete in the age of telemedicine"],
        answerIndex: 1,
        explanation: "The passage notes that informed consent 'varies significantly between European and Southeast Asian healthcare systems'."
      },
      {
        id: 44,
        text: "Telemedicine is most beneficial for which group according to the author?",
        options: ["Multinational corporations", "Patients in underserved areas", "Doctors in New York", "European regulatory bodies", "Data harvesting entities"],
        answerIndex: 1,
        explanation: "The passage explicitly states telemedicine 'offers immense benefits for patients in underserved areas'."
      },
      {
        id: 45,
        text: "The study of the Himba tribe was used to demonstrate that:",
        options: ["Blue and green are physically the same color", "Language sharpens categorical boundaries", "Namibian tribes have superior vision", "English speakers are colorblind to green", "Linguistic determinism is 100% accurate"],
        answerIndex: 1,
        explanation: "The author uses the Himba study to show that 'language does... sharpen our categorical boundaries'."
      },
      {
        id: 46,
        text: "Himba speakers performed better than English speakers when:",
        options: ["Identifying a blue square among green ones", "Distinguishing between similar shades of green", "Conceiving of the future", "Learning the Sapir-Whorf hypothesis", "Categorizing the physical spectrum"],
        answerIndex: 1,
        explanation: "Himba speakers have several terms for shades of green and identified the green outlier 'almost instantly'."
      },
      {
        id: 47,
        text: "The Sapir-Whorf hypothesis suggests that:",
        options: ["Reality is purely present-oriented", "Language influences perception", "Color words are irrelevant to the brain", "Indigenous languages are superior", "Linguists are better at seeing color"],
        answerIndex: 1,
        explanation: "The hypothesis 'suggests that the language we speak influences how we perceive the world'."
      },
      {
        id: 48,
        text: "What was the 'extreme version' of the hypothesis that was discredited?",
        options: ["Language helps categorize color", "Himba speakers see green differently", "Lack of time-words means no concept of time", "English speakers struggle with green", "The Himba use one word for blue and green"],
        answerIndex: 2,
        explanation: "The text mentions that claims about languages lacking 'time' words causing speakers to lack a concept of time have been 'largely discredited'."
      },
      {
        id: 49,
        text: "What is the 'primary challenge' for grid operators according to the text?",
        options: ["Generating enough total power", "The reliability/intermittency of supply", "The high cost of solar panels", "Industrial consumer greed", "Trillions in battery manufacturing"],
        answerIndex: 1,
        explanation: "The text explicitly states the challenge is 'not the amount of energy produced, but its reliability'."
      },
      {
        id: 50,
        text: "How does a 'demand-side response' strategy work?",
        options: ["It increases frequency during peak times", "It asks consumers to reduce usage during peaks", "It builds more coal-fired plants", "It replaces BESS units with batteries", "It reduces the cost of grid upgrades"],
        answerIndex: 1,
        explanation: "It involves 'incentivizing large industrial consumers to temporarily reduce their power usage'."
      },
      {
        id: 51,
        text: "The 'last 10%' of the renewable transition is expected to be:",
        options: ["The easiest phase", "The cheapest phase", "Significantly more expensive", "Completed within milliseconds", "Dependent on gas-fired plants"],
        answerIndex: 2,
        explanation: "Economists argue the last 10% will be 'significantly more expensive than the first 90%'."
      },
      {
        id: 52,
        text: "Battery Energy Storage Systems (BESS) are compared to a:",
        options: ["Baseload supply", "Technological hurdle", "Buffer for frequency drops", "Frequency trigger", "Digital coordination lack"],
        answerIndex: 2,
        explanation: "The passage describes BESS units as 'acting as a buffer during frequency drops'."
      },
      {
        id: 53,
        text: "A rapid drop in grid frequency must be compensated for within:",
        options: ["Minutes", "Hours", "Milliseconds", "Days", "Years"],
        answerIndex: 2,
        explanation: "The text states compensation must happen 'within milliseconds' to prevent blackouts."
      },
      {
        id: 54,
        text: "The aesthetic of egg tempera is described by the author as:",
        options: ["Naturalistic and deep", "Luminous and translucent", "Flat and highly stylized", "Mastery of human anatomy", "Divine icons of Jan van Eyck"],
        answerIndex: 2,
        explanation: "The author describes tempera as having a 'flat, highly stylized aesthetic'."
      },
      {
        id: 55,
        text: "What technical feature of oil paint allowed for 'sfumato'?",
        options: ["Fast drying time", "Meticulous cross-hatching", "Mixing with egg yolk", "Longer drying time", "The use of divine icons"],
        answerIndex: 3,
        explanation: "Oil paint offered a 'much longer drying time', which allowed for sfumato."
      },
      {
        id: 56,
        text: "Jan van Eyck is mentioned as an artist who:",
        options: ["Meticulously cross-hatched with yolk", "Popularized oil paint in Northern Europe", "Discovered gesso primer", "Invented the Sapir-Whorf hypothesis", "Rejected the use of glazes"],
        answerIndex: 1,
        explanation: "The text states oil paint was 'popularized in Northern Europe by artists like Jan van Eyck'."
      },
      {
        id: 57,
        text: "What role did the white gesso primer play in oil painting?",
        options: ["It made the paint dry instantly", "It reflected light through glazes", "It was mixed with pigments directly", "It prevented the use of shadows", "It was only used for tempera"],
        answerIndex: 1,
        explanation: "Glazes allowed light to 'reflect off the white gesso primer below', giving internal luminosity."
      },
      {
        id: 58,
        text: "By the late 1400s, art in Venice had shifted toward:",
        options: ["Symbolic clarity", "The Middle Ages' Stylization", "Mastery of light, space, and anatomy", "Decorative egg yolk panels", "The use of fast-drying mediums"],
        answerIndex: 2,
        explanation: "Art transformed into the 'mastery of light, space, and human anatomy'."
      }
    ]
  },
  {
    setId: 104,
    section: 'Decision Making',
    title: "DM Sprint A (50% Length)",
    type: "TEXT_LOGIC",
    context: "18 questions testing logic, syllogisms, and Venn diagrams. 18.5 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
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
            ]
          }
        },
        {
          id: 2,
          type: 'TEXT_LOGIC',
          title: 'Health Claims',
          context: 'Evaluate the following conclusions based on the premises provided.',
          data: {
            premises: [
              "All organic vegetables are nutrient-dense.",
              "Some nutrient-dense foods are expensive.",
              "No expensive foods are subsidized by the government.",
              "Most subsidized foods are mass-produced."
            ]
          }
        },
        {
          id: 3,
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
            }
          }
        },
        {
          id: 4,
          type: 'TABLE',
          title: 'Product Reliability',
          context: 'Failure rates of three electronic components over 5 years.',
          data: {
            headers: ["Component", "Year 1", "Year 2", "Year 3", "Year 4", "Year 5"],
            rows: [
              ["Sensor A", "0.5%", "1.2%", "2.5%", "4.0%", "6.5%"],
              ["Processor B", "0.2%", "0.4%", "0.8%", "1.5%", "3.0%"],
              ["Battery C", "1.0%", "2.5%", "5.0%", "12.0%", "25.0%"]
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
        explanation: "1: No. 'Some nutrient-dense are expensive' and 'Organic are nutrient-dense' doesn't guarantee an organic-expensive overlap. 4: Yes. Expensive foods are nutrient-dense and not subsidized."
      },
      {
        id: 65,
        text: "Conclusion: 'If a food is not mass-produced, it is not subsidized.'",
        options: ["Yes", "No"],
        answerIndex: 1,
        explanation: "No. 'Most subsidized foods are mass-produced' implies some might not be."
      },
      {
        id: 66,
        text: "Conclusion: 'Organic vegetables are never subsidized.'",
        options: ["Yes", "No"],
        answerIndex: 1,
        explanation: "No. The premises don't link organic directly to subsidy exclusion, only expensive foods."
      },
      {
        id: 67,
        text: "Conclusion: 'Some expensive foods are nutrient-dense.'",
        options: ["Yes", "No"],
        answerIndex: 0,
        explanation: "Yes. 'Some nutrient-dense foods are expensive' is given, which is reversible."
      },
      {
        id: 68,
        text: "Conclusion: 'No organic vegetable is mass-produced.'",
        options: ["Yes", "No"],
        answerIndex: 1,
        explanation: "No. There is no information linking organic status to mass-production."
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
    setId: 105,
    section: 'Quantitative Reasoning',
    title: "QR Sprint C (Advanced)",
    type: "LINE_GRAPH",
    context: "Advanced data interpretation involving multi-axis charts and nested calculations. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'LINE_GRAPH',
          title: 'Global Shipping Logistics',
          context: 'Comparison of Fuel Index and Cargo Volume. Base rate is $1.20 per index point.',
          data: {
            months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            fuelIndex: [100, 115, 130, 125, 145, 160],
            volumeTons: [50000, 48000, 52000, 60000, 55000, 58000]
          }
        },
        {
          id: 2,
          type: 'MULTI_TABLE',
          title: 'Real Estate Portfolio',
          context: 'Investment yields across global cities (Tax: London 20%, NYC 25%, Tokyo 15%, Dubai 0%).',
          data: {
            assets: [
              ["Residential", "5.2%", "10%"],
              ["Commercial", "7.8%", "22%"]
            ]
          }
        },
        {
          id: 3,
          type: 'BAR_CHART',
          title: 'Machine Reliability',
          context: 'Defects per 1000 units based on machine age. Defect cost: $50.',
          data: {
            labels: ['1 Yr', '2 Yr', '3 Yr', '4 Yr', '5 Yr', '6 Yr'],
            data: [2, 5, 8, 15, 22, 35]
          }
        }
      ]
    },
    questions: [
      {
        id: 77,
        text: "What was the total fuel cost in January?",
        options: ["$6,000", "$60,000", "$50,000", "$120,000", "$72,000"],
        answerIndex: 1,
        explanation: "100 index * $1.20 * (50,000 / 1000) = 120 * 500 = $60,000."
      },
      {
        id: 78,
        text: "In which month was the fuel index per ton of cargo the highest?",
        options: ["June", "May", "March", "February", "January"],
        answerIndex: 0,
        explanation: "Ratio (Index/Vol): Jan:0.002, Feb:0.0024, Mar:0.0025, Apr:0.0021, May:0.0026, Jun:0.00276. June is highest."
      },
      {
        id: 79,
        text: "What is the percentage increase in the Fuel Index from January to June?",
        options: ["60%", "160%", "45%", "50%", "30%"],
        answerIndex: 0,
        explanation: "(160 - 100) / 100 = 60%."
      },
      {
        id: 80,
        text: "If January volume was 20% higher, but the index stayed the same, what would be the total fuel cost?",
        options: ["$72,000", "$60,000", "$75,000", "$66,000", "$80,000"],
        answerIndex: 0,
        explanation: "New Vol = 60,000. Cost = 100 * 1.2 * 600 = $72,000."
      },
      {
        id: 81,
        text: "What is the total cargo volume for the first quarter (Jan-Mar)?",
        options: ["150,000", "152,000", "148,000", "155,000", "160,000"],
        answerIndex: 0,
        explanation: "50k + 48k + 52k = 150,000."
      },
      {
        id: 82,
        text: "Annual net income for a $1M Residential property in London?",
        options: ["£37,440", "£41,600", "£52,000", "£33,280", "£39,000"],
        answerIndex: 0,
        explanation: "Gross Yield = 1M * 5.2% = 52,000. Maint = 10% of 52k = 5,200. Pre-tax = 46,800. Net (20% tax) = 46,800 * 0.8 = £37,440."
      },
      {
        id: 83,
        text: "Annual net income for a $2M Commercial property in Dubai?",
        options: ["$121,680", "$156,000", "$142,000", "$118,400", "$134,500"],
        answerIndex: 0,
        explanation: "Gross Yield = 2M * 7.8% = 156,000. Maint = 22% of 156k = 34,320. Pre-tax = 121,680. Net (0% tax) = $121,680."
      },
      {
        id: 84,
        text: "Which yields higher net income: $1M Residential NYC or $1M Residential Tokyo?",
        options: ["Tokyo by $4,680", "NYC by $500", "Tokyo by $2,450", "Equal", "NYC by $1,200"],
        answerIndex: 0,
        explanation: "NYC: 46800*0.75=35100. Tokyo: 46800*0.85=39780. Tokyo higher by 4680."
      },
      {
        id: 85,
        text: "What is the maintenance cost for a $5M Commercial portfolio in London?",
        options: ["£85,800", "£78,000", "£92,400", "£64,000", "£110,000"],
        answerIndex: 0,
        explanation: "Gross Yield = 5M * 7.8% = 390,000. Maint = 22% of 390k = £85,800."
      },
      {
        id: 86,
        text: "Total annual tax paid on a $10M Residential portfolio in NYC?",
        options: ["$117,000", "$130,000", "$150,000", "$105,000", "$125,000"],
        answerIndex: 0,
        explanation: "Gross = 520,000. Maint = 52,000. Taxable = 468,000. Tax (25%) = $117,000."
      },
      {
        id: 87,
        text: "Total cost of defects for a 5-year-old machine producing 10,000 units?",
        options: ["$11,000", "$1,100", "$5,500", "$22,000", "$8,500"],
        answerIndex: 0,
        explanation: "Defects per 1k = 22. Total defects = 22 * 10 = 220. Cost = 220 * $50 = $11,000."
      },
      {
        id: 88,
        text: "Percentage increase in defects from Year 5 to Year 6?",
        options: ["59%", "65%", "40%", "75%", "50%"],
        answerIndex: 0,
        explanation: "(35 - 22) / 22 = 13 / 22 = 59.1%."
      },
      {
        id: 89,
        text: "At which machine age does the defect cost per 1000 units first exceed $500?",
        options: ["Year 4", "Year 3", "Year 5", "Year 2", "Year 6"],
        answerIndex: 0,
        explanation: "Cost = Defects * 50. Y3: 8*50=400. Y4: 15*50=750. So Year 4."
      },
      {
        id: 90,
        text: "Average defects per 1000 units over the first 4 years?",
        options: ["7.5", "8.0", "6.5", "9.2", "10.0"],
        answerIndex: 0,
        explanation: "(2 + 5 + 8 + 15) / 4 = 30 / 4 = 7.5."
      }
    ]
  },
  {
    setId: 109,
    section: 'Quantitative Reasoning',
    title: "QR Sprint D (Elite)",
    type: "MULTI_TABLE",
    context: "Highest difficulty QR sprint involving manufacturing waste, financial arbitrage, and VC ROI. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'TABLE',
          title: 'Manufacturing Waste Flow',
          context: 'Three-stage production process for 10,000 raw units.',
          data: {
            headers: ["Stage", "Failure Rate", "Sunk Cost/Unit"],
            rows: [
              ["Stage 1", "4%", "$10"],
              ["Stage 2", "7%", "$25"],
              ["Stage 3", "2%", "$40"]
            ]
          }
        },
        {
          id: 2,
          type: 'MULTI_TABLE',
          title: 'Financial Arbitrage',
          context: 'Currency exchange rates for a circular trade (Base: 1000 GBP).',
          data: {
            rates: [
              ["GBP to USD", 1.25],
              ["USD to EUR", 0.92],
              ["EUR to GBP", 0.88]
            ]
          }
        },
        {
          id: 3,
          type: 'PIE_CHART',
          title: 'VC Portfolio ROI',
          context: 'Allocation and Expected Performance of a $100M Fund.',
          data: {
            allocation: { Fintech: 35, Healthtech: 25, AI: 30, GreenEnergy: 10 },
            multipliers: { Fintech: 12, Healthtech: 8, AI: 50, GreenEnergy: 5 },
            successRate: { Fintech: 0.2, Healthtech: 0.33, AI: 0.1, GreenEnergy: 0.5 }
          }
        }
      ]
    },
    questions: [
      {
        id: 159,
        text: "How many units successfully pass through all three stages?",
        options: ["8,749", "9,000", "8,500", "8,820", "9,150"],
        answerIndex: 0,
        explanation: "10,000 * 0.96 * 0.93 * 0.98 = 8,749.44 ≈ 8,749."
      },
      {
        id: 160,
        text: "What is the total sunk cost from units failing at Stage 1?",
        options: ["$4,000", "$400", "$40,000", "$1,000", "$10,000"],
        answerIndex: 0,
        explanation: "10,000 * 0.04 * $10 = 400 * 10 = $4,000."
      },
      {
        id: 161,
        text: "How many units fail at Stage 2?",
        options: ["672", "700", "644", "725", "680"],
        answerIndex: 0,
        explanation: "9,600 units enter S2. 9,600 * 0.07 = 672 failed units."
      },
      {
        id: 162,
        text: "What is the total sunk cost from units failing at Stage 3?",
        options: ["$7,142", "$8,000", "$6,500", "$5,800", "$7,500"],
        answerIndex: 0,
        explanation: "Entering S3 = 8928. Failed S3 = 8928 * 0.02 = 178.56. Sunk Cost = 178.56 * $40 = $7,142.40."
      },
      {
        id: 163,
        text: "What is the total waste cost for the entire process?",
        options: ["$27,942", "$32,000", "$25,000", "$21,500", "$35,000"],
        answerIndex: 0,
        explanation: "S1 Waste: 4000. S2 Waste: 16800. S3 Waste: 7142. Total = $27,942."
      },
      {
        id: 164,
        text: "Converting 1000 GBP to USD gives how much?",
        options: ["$1,250", "$800", "$1,150", "$1,000", "$1,320"],
        answerIndex: 0,
        explanation: "1000 * 1.25 = $1,250."
      },
      {
        id: 165,
        text: "Converting the USD result (from 1000 GBP) into EUR gives how much?",
        options: ["1,150 EUR", "1,250 EUR", "1,000 EUR", "1,100 EUR", "1,200 EUR"],
        answerIndex: 0,
        explanation: "1250 * 0.92 = 1,150 EUR."
      },
      {
        id: 166,
        text: "Converting the EUR result (from previous step) back to GBP gives how much?",
        options: ["1,012 GBP", "1,000 GBP", "980 GBP", "1,050 GBP", "1,025 GBP"],
        answerIndex: 0,
        explanation: "1150 * 0.88 = 1,012 GBP."
      },
      {
        id: 167,
        text: "What is the percentage profit from this circular trade?",
        options: ["1.2%", "1.0%", "0.8%", "1.5%", "2.0%"],
        answerIndex: 0,
        explanation: "(1012 - 1000) / 1000 = 0.012 = 1.2%."
      },
      {
        id: 168,
        text: "If the EUR to GBP rate was 0.86, would the trade be profitable?",
        options: ["No, 1.1% loss", "Yes, 0.5% profit", "No, 0.2% loss", "Equal", "Yes, 1.0% profit"],
        answerIndex: 0,
        explanation: "1150 * 0.86 = 989 GBP. This is a loss of 11 GBP (1.1%)."
      },
      {
        id: 169,
        text: "What is the expected value of the AI portion of the fund?",
        options: ["$150M", "$300M", "$100M", "$50M", "$450M"],
        answerIndex: 0,
        explanation: "Invested: $30M (30%). Expected = $30M * 50x * 0.1 = $150M."
      },
      {
        id: 170,
        text: "What is the expected value of the Fintech portion?",
        options: ["$84M", "$70M", "$100M", "$120M", "$95M"],
        answerIndex: 0,
        explanation: "Invested: $35M. Expected = $35M * 12x * 0.2 = $84M."
      },
      {
        id: 171,
        text: "What is the expected value of the Green Energy portion?",
        options: ["$25M", "$50M", "$10M", "$35M", "$15M"],
        answerIndex: 0,
        explanation: "Invested: $10M. Expected = $10M * 5x * 0.5 = $25M."
      },
      {
        id: 172,
        text: "What is the expected total value of the $100M fund?",
        options: ["$325M", "$400M", "$250M", "$300M", "$350M"],
        answerIndex: 0,
        explanation: "AI(150) + Fintech(84) + Health(66) + Green(25) = $325M."
      },
      {
        id: 173,
        text: "Which sector has the highest success probability?",
        options: ["GreenEnergy", "Healthtech", "Fintech", "AI", "AI and Fintech"],
        answerIndex: 0,
        explanation: "GreenEnergy (0.5) is highest."
      },
      {
        id: 174,
        text: "What is the ratio of AI investment to Green Energy investment?",
        options: ["3:1", "4:1", "2:1", "5:1", "10:1"],
        answerIndex: 0,
        explanation: "30% : 10% = 3 : 1."
      },
      {
        id: 175,
        text: "If the AI success rate doubled, what would be the AI expected value?",
        options: ["$300M", "$150M", "$450M", "$600M", "$200M"],
        answerIndex: 0,
        explanation: "30M * 50 * 0.2 = $300M."
      },
      {
        id: 176,
        text: "What percentage of the total fund is invested in Healthtech?",
        options: ["25%", "35%", "30%", "10%", "20%"],
        answerIndex: 0,
        explanation: "Given as 25%."
      }
    ]
  },
  {
    setId: 108,
    section: 'Situational Judgement',
    title: "SJT Sprint A (50% Length)",
    type: "SCENARIO",
    context: "34 questions based on medical professionalism and ethics. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'TEXT',
          title: 'Medical Ethics: Confidentiality',
          context: "A medical student, Sarah, is in a public elevator at the hospital. She witnesses a senior consultant, Dr. Smith, discussing a specific patient's rare condition and personal history with another colleague, using the patient's full name. There are several members of the public in the elevator."
        },
        {
          id: 2,
          type: 'TEXT',
          title: 'Teamwork: Task Management',
          context: "You are a junior doctor on a busy surgical ward. Your colleague, James, has been spending a lot of time on his phone in the staff room while you have a long list of patient discharges and blood tests to complete before the end of your shift."
        },
        {
          id: 3,
          type: 'TEXT',
          title: 'Professionalism: Social Media',
          context: "A group of medical students are planning to start a TikTok channel where they film themselves performing 'funny' dances in the hospital corridors during their lunch break. They plan to keep the patients in the background to show the 'real hospital vibe'."
        }
      ]
    },
    questions: [
      {
        id: 135,
        text: "How appropriate is it for Sarah to: Politely remind Dr. Smith that they are in a public space.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Directly addressing the breach of confidentiality in a polite manner is the most effective way to stop the immediate issue."
      },
      {
        id: 136,
        text: "How appropriate is it for Sarah to: Wait until they leave the elevator and then report Dr. Smith to the Medical School immediately.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 1,
        explanation: "Reporting is necessary, but failing to stop the immediate breach in the elevator is less ideal than intervening."
      },
      {
        id: 137,
        text: "How appropriate is it for Sarah to: Join in the conversation to show her knowledge of the rare condition.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "This actively contributes to the breach of confidentiality and is highly unprofessional."
      },
      {
        id: 138,
        text: "How appropriate is it for Sarah to: Ignore the situation as Dr. Smith is a senior consultant and she is just a student.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Patient confidentiality is a collective responsibility; hierarchy does not excuse silence in the face of a breach."
      },
      {
        id: 139,
        text: "How important is the following factor: The fact that the public in the elevator may not know the patient personally.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 3,
        explanation: "A breach of confidentiality is a breach regardless of whether the listeners know the patient; the principle is absolute."
      },
      {
        id: 140,
        text: "How important is the following factor: Dr. Smith's seniority and reputation in the hospital.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 3,
        explanation: "Seniority does not change the ethical requirement to maintain patient confidentiality."
      },
      {
        id: 141,
        text: "How appropriate is it for Sarah to: Mention the incident to her clinical supervisor for advice on how to handle similar situations in the future.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Seeking guidance on professional conduct and how to navigate hierarchy is very appropriate for a student."
      },
      {
        id: 142,
        text: "How appropriate is it for Sarah to: Post about the incident on an anonymous forum for medical students to complain about the consultant's behavior.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Venting on social media or forums about professional issues is inappropriate; formal channels should be used."
      },
      {
        id: 143,
        text: "How appropriate is it to: Politely ask James if he can help with the discharge summaries as you are feeling overwhelmed.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Direct, professional communication is the first step in resolving teamwork issues."
      },
      {
        id: 144,
        text: "How appropriate is it to: Do all the work yourself and then report James's laziness to the consultant at the end of the shift.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 2,
        explanation: "Reporting without first attempting to resolve the issue with the colleague is generally inappropriate unless it's a recurring pattern."
      },
      {
        id: 145,
        text: "How appropriate is it to: Take a break yourself and leave the work unfinished until James starts helping.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Leaving patient care tasks unfinished directly compromises patient safety."
      },
      {
        id: 146,
        text: "How appropriate is it to: Mention to other colleagues that James is always on his phone and never helps.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Gossiping about colleagues is unprofessional and damages team morale."
      },
      {
        id: 147,
        text: "How important is the following factor: The urgency of the patient discharges and blood tests.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 0,
        explanation: "Patient safety and timely care are the highest priorities in a clinical setting."
      },
      {
        id: 148,
        text: "How important is the following factor: Whether James has already completed his own assigned tasks for the day.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 2,
        explanation: "Even if he finished his tasks, clinical work is a team effort, especially when a colleague is overwhelmed, but it's less critical than the work itself."
      },
      {
        id: 149,
        text: "How appropriate is it to: Suggest to James that you split the remaining tasks so that you can both finish on time.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Proposing a collaborative solution is proactive and professional."
      },
      {
        id: 150,
        text: "How appropriate is it to: Shout at James in front of other staff so he realizes how stressed you are.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Aggressive behavior and public confrontation are highly unprofessional."
      },
      {
        id: 151,
        text: "How appropriate is it to: Advise your friends that filming in the hospital is inappropriate, even if patients are 'just in the background'.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 0,
        explanation: "Patients have a right to privacy, and hospitals are not playgrounds; advising peers on professional boundaries is very appropriate."
      },
      {
        id: 152,
        text: "How appropriate is it to: Participate in the dance but make sure no patients are visible in your specific shots.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "The act itself is unprofessional in a clinical environment and still risks accidental privacy breaches."
      },
      {
        id: 153,
        text: "How appropriate is it to: Inform the hospital's communications team or your supervisor about the students' plan.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 1,
        explanation: "Escalating is appropriate if the peers refuse to listen to advice, but trying to resolve it internally first is often preferred."
      },
      {
        id: 154,
        text: "How appropriate is it to: Post a 'disclaimer' on the video saying the hospital does not endorse the content.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "A disclaimer does not excuse unprofessional behavior or potential privacy violations."
      },
      {
        id: 155,
        text: "How important is the following factor: The risk of patients or their families feeling uncomfortable or disrespected.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 0,
        explanation: "Maintaining public trust and patient dignity is a core tenet of medical professionalism."
      },
      {
        id: 156,
        text: "How important is the following factor: The students' intention to show the 'real hospital vibe' and humanize doctors.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 3,
        explanation: "Good intentions do not override professional standards and patient privacy."
      },
      {
        id: 157,
        text: "How important is the following factor: Whether the students are filming during their lunch break or during clinical hours.",
        options: ["Very Important", "Important", "Of minor importance", "Not at all important"],
        answerIndex: 2,
        explanation: "While filming during clinical hours is worse, the location (hospital) makes it unprofessional even during breaks."
      },
      {
        id: 158,
        text: "How appropriate is it to: Take no action as it is their personal TikTok account and not yours.",
        options: ["Very Appropriate", "Appropriate, but not ideal", "Inappropriate, but not awful", "Very Inappropriate"],
        answerIndex: 3,
        explanation: "Medical students have a duty to uphold the reputation of the profession and protect patient privacy."
      }
    ]
  }
];

export function getSprintSet(index: number): UCATSet {
  return ucatSprintTests[index];
}
