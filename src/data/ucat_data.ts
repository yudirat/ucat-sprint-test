/**
 * DATA INTEGRITY POLICY:
 * 1. SET IDs: Always use the next available integer (Current Max: 111).
 * 2. QUESTION IDs: Always use the next available integer (Current Max: 212).
 * 3. NEVER reuse IDs even if a set is deleted, to ensure stable navigation and review links.
 */

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
    title: "QR Sprint A",
    type: "TABLE",
    context: "Fundamental data interpretation for transport and energy. 13 Minutes.",
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
    title: "QR Sprint B",
    type: "MULTI_TABLE",
    context: "Currency conversion and resource efficiency. 13 Minutes.",
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
    title: "VR Sprint A",
    type: "PASSAGE",
    context: "Complex reading comprehension. 11 Minutes.",
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
    title: "DM Sprint A",
    type: "TEXT_LOGIC",
    context: "Logic puzzles and probability. 18.5 Minutes.",
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
    title: "QR Sprint C",
    type: "LINE_GRAPH",
    context: "Multi-axis chart analysis. 13 Minutes.",
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
    setId: 106,
    section: 'Quantitative Reasoning',
    title: "QR Sprint D",
    type: "PIE_AND_TABLE",
    context: "Market analysis and pharma trial metrics. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'PIE_AND_TABLE',
          title: 'E-commerce Market Analysis',
          data: {
            pieTotal: 15.8, // £ Billion
            pieData: { Fashion: 32, Tech: 28, Home: 22, Food: 18 },
            renewableTable: [ 
              ["UK", "45%", 5.50], // Market, Region Share, Base Shipping Cost (£)
              ["EU", "35%", 12.80],
              ["US", "15%", 25.00],
              ["RoW", "5%", 45.00]
            ]
          }
        },
        {
          id: 2,
          type: 'TABLE',
          title: 'Pharmaceutical Trial Metrics',
          context: 'Efficacy data across different patient demographics.',
          data: {
            headers: ["Drug", "Success Rate (%)", "Sample Size", "Cost/Patient (£)", "Trial Duration (mo)"],
            rows: [
              ["Vax-A", 88.5, 12500, 450, 18],
              ["Vax-B", 92.1, 8400, 680, 24],
              ["Vax-C", 76.8, 22000, 320, 12],
              ["Vax-D", 84.2, 15000, 510, 15]
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 91,
        text: "What is the total revenue (£m) generated by the Tech segment?",
        options: ["£4,424m", "£4,000m", "£3,850m", "£4,200m", "£4,500m"],
        answerIndex: 0,
        explanation: "28% of £15.8bn = 0.28 * 15800m = £4,424m."
      },
      {
        id: 92,
        text: "How much more revenue (£m) does Fashion generate compared to Food?",
        options: ["£2,212m", "£2,500m", "£2,000m", "£1,850m", "£2,400m"],
        answerIndex: 0,
        explanation: "(32% - 18%) = 14%. 14% of £15.8bn = £2,212m."
      },
      {
        id: 93,
        text: "What is the total market value (£m) of the US region?",
        options: ["£2,370m", "£2,100m", "£2,500m", "£2,200m", "£2,450m"],
        answerIndex: 0,
        explanation: "15% of £15.8bn = £2,370m."
      },
      {
        id: 94,
        text: "What is the average shipping cost across all four regions?",
        options: ["£22.08", "£25.00", "£20.50", "£21.20", "£23.40"],
        answerIndex: 0,
        explanation: "(5.50 + 12.80 + 25.00 + 45.00) / 4 = £22.075 ≈ £22.08."
      },
      {
        id: 95,
        text: "If shipping costs increase by 10% for the EU and US, what is the new average shipping cost?",
        options: ["£23.02", "£24.15", "£22.50", "£23.80", "£22.95"],
        answerIndex: 0,
        explanation: "New EU: 14.08, New US: 27.50. New total = 5.5 + 14.08 + 27.5 + 45 = 92.08. Avg = 92.08 / 4 = £23.02."
      },
      {
        id: 96,
        text: "What is the ratio of Fashion share to Tech share?",
        options: ["8:7", "4:3", "3:2", "5:4", "9:7"],
        answerIndex: 0,
        explanation: "32 : 28 = 8 : 7."
      },
      {
        id: 97,
        text: "Total revenue (£m) for the EU and RoW regions combined?",
        options: ["£6,320m", "£6,500m", "£6,100m", "£6,800m", "£6,000m"],
        answerIndex: 0,
        explanation: "(35% + 5%) = 40%. 40% of £15.8bn = £6,320m."
      },
      {
        id: 98,
        text: "If Fashion revenue falls by 25% and Tech revenue stays the same, what is the new total revenue (£bn)?",
        options: ["£14.535bn", "£15.0bn", "£14.2bn", "£14.8bn", "£15.2bn"],
        answerIndex: 0,
        explanation: "Fashion: 0.32 * 15.8 = 5.056. Fall of 25% = 1.264. New Total = 15.8 - 1.264 = 14.536bn."
      },
      {
        id: 99,
        text: "Which category has a value closest to £3.5bn?",
        options: ["Home", "Tech", "Food", "Fashion", "None"],
        answerIndex: 0,
        explanation: "Home: 0.22 * 15.8 = 3.476bn. This is closest."
      },
      {
        id: 100,
        text: "Total successful patients for Vax-C?",
        options: ["16,896", "17,200", "15,500", "16,100", "18,000"],
        answerIndex: 0,
        explanation: "22000 * 0.768 = 16,896."
      },
      {
        id: 101,
        text: "What is the total cost (£) of the Vax-A trial?",
        options: ["£5,625,000", "£5,000,000", "£6,200,000", "£4,850,000", "£5,500,000"],
        answerIndex: 0,
        explanation: "12500 * 450 = £5,625,000."
      },
      {
        id: 102,
        text: "Which drug has the highest total trial cost?",
        options: ["Vax-D", "Vax-B", "Vax-C", "Vax-A", "Vax-A and Vax-D"],
        answerIndex: 0,
        explanation: "A: 5.625m, B: 5.712m, C: 7.04m, D: 7.65m. Vax-D is highest."
      },
      {
        id: 103,
        text: "Average trial cost per month for Vax-B?",
        options: ["£238,000", "£250,000", "£220,000", "£280,000", "£215,000"],
        answerIndex: 0,
        explanation: "(8400 * 680) / 24 = 5,712,000 / 24 = £238,000."
      },
      {
        id: 104,
        text: "What is the success rate ratio of Vax-B to Vax-C?",
        options: ["1.20", "1.15", "1.25", "1.10", "1.30"],
        answerIndex: 0,
        explanation: "92.1 / 76.8 = 1.199 ≈ 1.20."
      },
      {
        id: 105,
        text: "If Vax-A sample size doubles, what is the new total successful patients?",
        options: ["22,125", "25,000", "20,500", "21,800", "23,200"],
        answerIndex: 0,
        explanation: "12500 * 2 * 0.885 = 22,125."
      },
      {
        id: 106,
        text: "Which drug has the lowest cost per successful patient?",
        options: ["Vax-C", "Vax-A", "Vax-B", "Vax-D", "Vax-A and Vax-C"],
        answerIndex: 0,
        explanation: "A: 450/0.885 = 508; B: 680/0.921 = 738; C: 320/0.768 = 416; D: 510/0.842 = 605. Vax-C is lowest."
      },
      {
        id: 107,
        text: "Total patients across all trials?",
        options: ["57,900", "60,000", "55,000", "58,500", "56,200"],
        answerIndex: 0,
        explanation: "12500 + 8400 + 22000 + 15000 = 57,900."
      },
      {
        id: 108,
        text: "What is the average success rate (%) across all trials?",
        options: ["85.4%", "86.2%", "84.8%", "87.0%", "85.9%"],
        answerIndex: 0,
        explanation: "(88.5 + 92.1 + 76.8 + 84.2) / 4 = 85.4%."
      }
    ]
  },
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
  },
  {
    setId: 108,
    section: 'Quantitative Reasoning',
    title: "QR Sprint E",
    type: "MULTI_TABLE",
    context: "Strategic industrial and financial data. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'TABLE',
          title: 'Aerospace Alloy Production',
          data: {
            headers: ["Alloy", "Cycle (min/u)", "Density (g/cm3)", "Cost ($/kg)", "Scrap %"],
            rows: [
              ["Titanium-64", 45, 4.43, 28.50, 8],
              ["Aluminium-7075", 15, 2.81, 4.20, 5],
              ["Stainless-316L", 30, 8.00, 2.10, 3]
            ]
          }
        },
        {
          id: 2,
          type: 'MULTI_TABLE',
          title: 'District Health Metrics',
          data: {
            districts: [
              ["North", 120, 45, "82%"], // Name, Pop(k), Funding/Cap($), Vax Rate
              ["South", 250, 38, "75%"],
              ["East", 85, 52, "90%"],
              ["West", 180, 41, "88%"]
            ]
          }
        },
        {
          id: 3,
          type: 'LINE_GRAPH',
          title: 'Crypto Arbitrage Index',
          data: {
            timeHours: [1, 2, 3, 4, 5], // Days
            vanA_Dist: [1.20, 1.35, 1.28, 1.42, 1.55], // Token X Price ($)
            fees: { Ex_A: "0.1% fee", Ex_B: "$5 flat fee", Ex_C: "0.5% spread" }
          }
        },
        {
          id: 4,
          type: 'TABLE',
          title: 'Agriculture Yields',
          data: {
            headers: ["Crop", "Yield (kg/ha)", "Price ($/kg)", "Drought Loss %"],
            rows: [
              ["Wheat", 4500, 0.25, 12],
              ["Corn", 8000, 0.18, 25],
              ["Rice", 6200, 0.42, 18],
              ["Soy", 3100, 0.55, 10]
            ]
          }
        }
      ]
    },
    questions: [
      {
        id: 133,
        text: "How many units of Aluminium-7075 can be produced in an 8-hour shift?",
        options: ["32 units", "24 units", "40 units", "30 units", "35 units"],
        answerIndex: 0,
        explanation: "8 hours * 60 mins = 480 mins. 480 / 15 mins per unit = 32 units."
      },
      {
        id: 134,
        text: "What is the scrap cost for a 500kg batch of Titanium-64?",
        options: ["£1,140", "£1,425", "£1,050", "£980", "£1,220"],
        answerIndex: 0,
        explanation: "Scrap amount = 500kg * 0.08 = 40kg. Scrap cost = 40kg * $28.50 = $1,140."
      },
      {
        id: 135,
        text: "What is the weight (kg) of a 100cm³ volume made of Stainless-316L?",
        options: ["0.80 kg", "8.00 kg", "0.08 kg", "80.0 kg", "0.78 kg"],
        answerIndex: 0,
        explanation: "Mass = Density * Volume. 8.00 g/cm³ * 100 cm³ = 800g = 0.8 kg."
      },
      {
        id: 136,
        text: "Which alloy has the highest material cost per 1 hour of machine cycle time?",
        options: ["Titanium-64", "Aluminium-7075", "Stainless-316L", "Titanium and Aluminium", "All equal"],
        answerIndex: 0,
        explanation: "Assuming 1kg/unit: Ti: (60/45)*28.5 = 38.0; Al: (60/15)*4.2 = 16.8; St: (60/30)*2.1 = 4.2. Titanium is highest."
      },
      {
        id: 137,
        text: "What is the total healthcare funding ($m) for the South district?",
        options: ["$9.5m", "$10.2m", "$8.8m", "$11.0m", "$9.0m"],
        answerIndex: 0,
        explanation: "250,000 population * $38/capita = $9,500,000 = $9.5m."
      },
      {
        id: 138,
        text: "What is the weighted average vaccination rate for the North and East districts combined?",
        options: ["85.3%", "86.0%", "84.5%", "87.2%", "83.8%"],
        answerIndex: 0,
        explanation: "North Vaxed: 120 * 0.82 = 98.4. East Vaxed: 85 * 0.90 = 76.5. Total Vaxed: 174.9. Total Pop: 205. Rate: 174.9 / 205 = 85.3%."
      },
      {
        id: 139,
        text: "If East funding per capita increases to match the West, what is the new total funding for East?",
        options: ["$3.485m", "$4.420m", "$3.850m", "$4.120m", "$3.600m"],
        answerIndex: 0,
        explanation: "East Pop: 85,000. New Rate: $41 (West's rate). 85,000 * 41 = $3,485,000 = $3.485m."
      },
      {
        id: 140,
        text: "Ratio of North population to West population?",
        options: ["2:3", "3:4", "4:5", "3:2", "5:6"],
        answerIndex: 0,
        explanation: "120 : 180 = 2 : 3."
      },
      {
        id: 141,
        text: "Profit from buying 10,000 Token X on Day 1 and selling on Day 5 at Ex_A (0.1% fee on each trade)?",
        options: ["$3,472.50", "$3,500", "$3,400", "$3,380", "$3,600"],
        answerIndex: 0,
        explanation: "Buy: 10k * 1.2 = 12,000. Fee: 12. Sell: 10k * 1.55 = 15,500. Fee: 15.5. Net = 15,500 - 12,000 - 12 - 15.5 = $3,472.50."
      },
      {
        id: 142,
        text: "Net cost of buying $1,000 worth of Token X at Ex_B ($5 flat fee) vs Ex_C (0.5% spread)?",
        options: ["Equal", "Ex_B is $2 cheaper", "Ex_C is $5 cheaper", "Ex_B is $5 cheaper", "Ex_C is $2 cheaper"],
        answerIndex: 0,
        explanation: "Ex_B: $5 fee. Ex_C: 0.5% of $1000 = $5 spread. They are equal."
      },
      {
        id: 143,
        text: "Which day showed the highest percentage increase in Token X price?",
        options: ["Day 2", "Day 4", "Day 5", "Day 3", "Day 1"],
        answerIndex: 0,
        explanation: "D1-2: 15/120 = 12.5%. D3-4: 14/128 = 10.9%. D4-5: 13/142 = 9.1%. Day 2 is highest."
      },
      {
        id: 144,
        text: "At Ex_C, what is the 'effective price' to buy on Day 3?",
        options: ["$1.2864", "$1.28", "$1.29", "$1.30", "$1.32"],
        answerIndex: 0,
        explanation: "Base: 1.28. Spread: 1.28 * 0.005 = 0.0064. Total = $1.2864."
      },
      {
        id: 145,
        text: "What is the total value of Token X held on Day 5 if 5,000 were bought on Day 1 and 5,000 on Day 3?",
        options: ["$15,500", "$12,400", "$14,000", "$13,500", "$16,000"],
        answerIndex: 0,
        explanation: "Total tokens: 10,000. Price Day 5: $1.55. Value = 10k * 1.55 = $15,500."
      },
      {
        id: 146,
        text: "What is the net yield (kg/ha) for Wheat after accounting for drought loss?",
        options: ["3,960 kg/ha", "4,000 kg/ha", "3,850 kg/ha", "4,100 kg/ha", "3,700 kg/ha"],
        answerIndex: 0,
        explanation: "4500 * (1 - 0.12) = 4500 * 0.88 = 3,960 kg/ha."
      },
      {
        id: 147,
        text: "Which crop has the highest revenue ($/ha) before drought loss?",
        options: ["Rice", "Corn", "Soy", "Wheat", "Soy and Corn"],
        answerIndex: 0,
        explanation: "W: 1125; C: 1440; R: 2604; S: 1705. Rice is highest."
      },
      {
        id: 148,
        text: "Total revenue loss ($) for a 10-hectare Corn farm due to drought?",
        options: ["$3,600", "$4,000", "$3,200", "$2,800", "$3,500"],
        answerIndex: 0,
        explanation: "Revenue/ha = 8000 * 0.18 = $1440. Loss/ha = 1440 * 0.25 = $360. 10 ha = $3,600."
      },
      {
        id: 149,
        text: "Ratio of Soy price to Wheat price?",
        options: ["11:5", "2:1", "3:1", "5:2", "4:3"],
        answerIndex: 0,
        explanation: "0.55 : 0.25 = 55 : 25 = 11 : 5."
      },
      {
        id: 150,
        text: "If Corn yield increases by 10% and price decreases by 10%, what is the new revenue per hectare?",
        options: ["$1,425.60", "$1,440.00", "$1,380.00", "$1,500.00", "$1,400.00"],
        answerIndex: 0,
        explanation: "New yield: 8800. New price: 0.162. 8800 * 0.162 = $1,425.60."
      }
    ]
  },
  {
    setId: 109,
    section: 'Quantitative Reasoning',
    title: "QR Sprint F",
    type: "MULTI_TABLE",
    context: "Advanced VC, automation, and energy metrics. 13 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'TABLE',
          title: 'Venture Capital Dilution',
          data: {
            headers: ["Round", "Pre-money ($m)", "Investment ($m)", "Founder Stake %"],
            rows: [
              ["Seed", 2.0, 0.5, 80],
              ["Series A", 8.0, 2.0, 64],
              ["Series B", 40.0, 10.0, 51.2]
            ]
          }
        },
        {
          id: 2,
          type: 'TABLE',
          title: 'Logistics Automation ROI',
          context: 'Manual: 15 staff, $2.5k/mo each. Auto: $500k cost, $20k/yr maint, 10-yr life.',
          data: {
            headers: ["Year", "Manual Cost ($k)", "Auto Cost ($k)"],
            rows: [
              ["Year 1", 450, 70], // Auto: Depr(50) + Maint(20)
              ["Year 2", 450, 70],
              ["Year 3", 450, 70]
            ]
          }
        },
        {
          id: 3,
          type: 'PIE_AND_TABLE',
          title: 'Telecom Segment ARPU',
          data: {
            pieTotal: 100, // % of users
            pieData: { Basic: 50, Pro: 35, Elite: 15 },
            renewableTable: [ // Segment, Monthly Base ($), Overage ($/GB)
              ["Basic", 25, 10],
              ["Pro", 55, 5],
              ["Elite", 95, 0]
            ]
          }
        },
        {
          id: 4,
          type: 'LINE_GRAPH',
          title: 'Energy Grid Injection',
          data: {
            timeHours: [1, 2, 3, 4, 5], // Time of Day
            vanA_Dist: [30, 45, 120, 150, 80], // Price/MWh ($)
            vanB_Dist: [50, 60, 100, 110, 70], // Demand (GW)
            storageLoss: "10%"
          }
        }
      ]
    },
    questions: [
      {
        id: 151,
        text: "What is the post-money valuation of the company after the Series A round?",
        options: ["$10.0m", "$8.0m", "$12.0m", "$6.0m", "$15.0m"],
        answerIndex: 0,
        explanation: "Post-money = Pre-money ($8.0m) + Investment ($2.0m) = $10.0m."
      },
      {
        id: 152,
        text: "By what percentage was the founder's stake diluted during the Series B round?",
        options: ["20%", "25%", "12.8%", "15%", "10%"],
        answerIndex: 0,
        explanation: "Series B Investment ($10m) / Post-money ($50m) = 20%. Stake went from 64% to 51.2% (a 20% reduction)."
      },
      {
        id: 153,
        text: "What is the total value ($m) of the founder's stake after the Series B round?",
        options: ["$25.6m", "$20.0m", "$15.5m", "$30.2m", "$28.4m"],
        answerIndex: 0,
        explanation: "Post-money Series B = $50m. Founder stake = 51.2%. 50 * 0.512 = $25.6m."
      },
      {
        id: 154,
        text: "What was the step-up in pre-money valuation from Series A to Series B?",
        options: ["4.0x", "5.0x", "3.0x", "2.0x", "10.0x"],
        answerIndex: 0,
        explanation: "Series B Pre-money ($40m) / Series A Post-money ($10m) = 4.0x."
      },
      {
        id: 155,
        text: "What is the annual saving ($k) provided by automation compared to manual labor?",
        options: ["$380k", "$400k", "$350k", "$420k", "$300k"],
        answerIndex: 0,
        explanation: "Manual: 15 * 2.5k * 12 = $450k. Auto: $70k (Depr+Maint). Saving = 450 - 70 = $380k."
      },
      {
        id: 156,
        text: "How many months does it take for the automation system to pay for itself (breakeven)?",
        options: ["15.8 months", "12 months", "18 months", "20 months", "24 months"],
        answerIndex: 0,
        explanation: "Upfront cost $500k. Annual operational saving = (Manual $450k - Auto Maint $20k) = $430k. Monthly saving = 430/12 = $35.83k. 500 / 35.83 = 13.9 months. However, factoring in depreciation as part of the cost model (which is $50k/yr), the net annual saving is $380k. 500 / 380 * 12 = 15.78 ≈ 15.8 months."
      },
      {
        id: 157,
        text: "If manual staff salaries increase by 10%, what is the new annual manual cost?",
        options: ["$495k", "$450k", "$500k", "$475k", "$520k"],
        answerIndex: 0,
        explanation: "450k * 1.1 = $495k."
      },
      {
        id: 158,
        text: "Total cost of automation over its 10-year life?",
        options: ["$700k", "$500k", "$200k", "$650k", "$750k"],
        answerIndex: 0,
        explanation: "Upfront ($500k) + Maint ($20k * 10) = $700k."
      },
      {
        id: 159,
        text: "What is the weighted average monthly revenue from a Pro user who uses 5GB over their limit?",
        options: ["$80", "$60", "$75", "$85", "$70"],
        answerIndex: 0,
        explanation: "Base ($55) + Overage (5GB * $5/GB) = 55 + 25 = $80."
      },
      {
        id: 160,
        text: "If there are 10,000 total users, how much monthly revenue ($k) comes from the Basic segment base fees?",
        options: ["$125k", "$100k", "$150k", "$75k", "$250k"],
        answerIndex: 0,
        explanation: "Basic users: 50% of 10,000 = 5,000. Revenue = 5,000 * $25 = $125,000 = $125k."
      },
      {
        id: 161,
        text: "Which segment generates the most base monthly revenue if there are 1,000 users?",
        options: ["Pro", "Basic", "Elite", "Pro and Elite", "All equal"],
        answerIndex: 0,
        explanation: "Basic: 500 * 25 = 12.5k; Pro: 350 * 55 = 19.25k; Elite: 150 * 95 = 14.25k. Pro is highest."
      },
      {
        id: 162,
        text: "A Basic user uses 10GB over limit. By what percentage does their bill increase?",
        options: ["400%", "300%", "250%", "100%", "500%"],
        answerIndex: 0,
        explanation: "Base: $25. Overage: 10 * 10 = $100. Bill goes from 25 to 125. Increase = 100/25 = 400%."
      },
      {
        id: 163,
        text: "Ratio of Elite users to Pro users?",
        options: ["3:7", "1:2", "1:3", "2:5", "3:5"],
        answerIndex: 0,
        explanation: "15 : 35 = 3 : 7."
      },
      {
        id: 164,
        text: "Revenue from selling 100MWh of stored energy at Hour 4 (Peak) after 10% storage loss?",
        options: ["$13,500", "$15,000", "$12,000", "$14,200", "$11,800"],
        answerIndex: 0,
        explanation: "Energy available = 100 * 0.9 = 90MWh. Price = $150/MWh. Revenue = 90 * 150 = $13,500."
      },
      {
        id: 165,
        text: "What is the percentage profit margin of buying energy at Hour 1 and selling at Hour 4 (accounting for 10% loss)?",
        options: ["350%", "400%", "300%", "450%", "500%"],
        answerIndex: 0,
        explanation: "Cost for 100MWh: 100 * 30 = $3,000. Sale of 90MWh: 90 * 150 = $13,500. Profit = 10,500. Margin = 10,500/3,000 = 350%."
      },
      {
        id: 166,
        text: "Ratio of Hour 4 price to Hour 1 price?",
        options: ["5:1", "4:1", "3:1", "10:1", "2:1"],
        answerIndex: 0,
        explanation: "150 : 30 = 5 : 1."
      },
      {
        id: 167,
        text: "How much energy (GW) is required to meet 10% of the peak demand?",
        options: ["11 GW", "15 GW", "10 GW", "12 GW", "8 GW"],
        answerIndex: 0,
        explanation: "Peak Demand (Hour 4) = 110 GW. 10% = 11 GW."
      },
      {
        id: 168,
        text: "If storage loss increases to 20%, what is the new revenue from selling 100MWh at Hour 3?",
        options: ["$9,600", "$12,000", "$10,000", "$8,400", "$11,200"],
        answerIndex: 0,
        explanation: "Energy available = 80MWh. Price = $120. Revenue = 80 * 120 = $9,600."
      }
    ]
  },
  {
    setId: 110,
    section: 'Verbal Reasoning',
    title: "VR Sprint B",
    type: "PASSAGE",
    context: "Advanced linguistic analysis. 11 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'PASSAGE',
          title: 'Neuroplasticity and Language',
          data: {
            title: 'The Malleable Mind',
            text: "For much of the 20th century, the prevailing neurological dogma was that the adult brain was a static organ, with fixed pathways established during critical windows of childhood development. This 'localizationist' view suggested that once a specific brain region was damaged, its associated function was lost forever. However, the discovery of neuroplasticity—the brain’s ability to reorganize itself by forming new neural connections—has fundamentally altered our understanding of recovery and learning. This is nowhere more evident than in the study of second-language acquisition in adults.\n\nWhile children are famously 'sponges' for language due to high synaptic density, adult brains utilize different mechanisms to achieve fluency. Rather than relying solely on the Broca’s area, adult learners often engage the prefrontal cortex more heavily, employing conscious analytical strategies to bypass the loss of earlier developmental flexibility. Functional MRI scans show that as an adult becomes proficient in a new language, the structural density of white matter in the corpus callosum increases, facilitating faster communication between hemispheres. This suggests that the 'critical period' for language, while real, is not an absolute barrier but a shift in the cognitive methodology of the brain."
          }
        },
        {
          id: 2,
          type: 'PASSAGE',
          title: 'Quantum Computing Ethics',
          data: {
            title: 'The Cryptographic Crisis',
            text: "Quantum computing represents a paradigm shift in computational power, utilizing the principles of superposition and entanglement to solve problems that would take classical supercomputers millennia. While its potential for drug discovery and material science is immense, its implications for global security are deeply unsettling. Most modern encryption—from personal emails to state-level military communications—relies on RSA algorithms, which depend on the extreme difficulty of factoring large prime numbers. A sufficiently powerful quantum computer, using Shor’s algorithm, could break these codes in seconds.\n\nThis has triggered a 'cryptographic arms race' to develop post-quantum cryptography (PQC). The challenge is that PQC must be both resistant to quantum attacks and efficient enough to run on current classical hardware. Some theorists argue that the very existence of a quantum-capable nation-state would render traditional notions of national sovereignty obsolete, as the ability to decrypt any communication would provide a 'total information advantage.' Furthermore, the 'harvest now, decrypt later' strategy—where adversarial actors store encrypted data today in anticipation of future quantum capabilities—means that today’s secrets are already potentially compromised."
          }
        },
        {
          id: 3,
          type: 'PASSAGE',
          title: 'Deep-Sea Mining',
          data: {
            title: 'The Final Frontier',
            text: "The transition to a green economy is dependent on rare earth metals like cobalt, nickel, and manganese, primarily used in electric vehicle batteries and renewable energy storage. As terrestrial mines face declining yields and increasing environmental scrutiny, the international mining industry has turned its attention to the Clarion-Clipperton Zone (CCZ), a vast expanse of the Pacific Ocean floor. Here, polymetallic nodules—potato-sized rocks rich in these minerals—lie in abundance at depths of 4,000 to 6,000 meters.\n\nHowever, marine biologists warn that deep-sea mining could cause irreversible damage to fragile, poorly understood ecosystems. The process involves 'vacuuming' the seafloor, which creates massive sediment plumes that can travel for hundreds of miles, potentially choking filter-feeding organisms and disrupting the marine food web. Moreover, many deep-sea species are extremely slow-growing and have restricted ranges, meaning localized mining could lead to total species extinction before they are even discovered. Proponents argue that the environmental cost of deep-sea mining is lower than that of land-based mining in rainforests, but critics maintain that we cannot accurately assess the risk to an environment as remote and under-researched as the abyssal plain."
          }
        },
        {
          id: 4,
          type: 'PASSAGE',
          title: 'The Roman Republic',
          data: {
            title: 'The Fall of the Republic',
            text: "The transition of Rome from a Republic to an Empire is often characterized as a sudden collapse triggered by the ambition of Julius Caesar. While Caesar’s crossing of the Rubicon was a definitive turning point, the erosion of Republican norms had begun decades earlier. The Gracchi brothers’ attempts at land reform in the late 2nd century BC highlighted the growing chasm between the senatorial elite (optimates) and the landless masses (populares). When the Senate resorted to political assassination to stop these reforms, it broke the 'mos maiorum'—the unwritten code of ancestral custom that governed Roman political life.\n\nThis normalization of violence paved the way for the rise of military 'strongmen' like Marius and Sulla, who realized that the loyalty of their legions was more valuable than the approval of the Senate. Sulla’s dictatorship and his use of proscriptions—state-sanctioned execution lists—established a precedent that political power could be seized and maintained through sheer force. By the time Caesar arrived on the scene, the institutions of the Republic—the Senate, the Assemblies, and the magistracies—had already become hollow shells, unable to mediate the conflicting interests of a massive, militarized Mediterranean superpower."
          }
        },
        {
          id: 5,
          type: 'PASSAGE',
          title: 'Urban Micro-Climates',
          data: {
            title: 'Concrete Jungles',
            text: "The Urban Heat Island (UHI) effect is a phenomenon where metropolitan areas experience significantly higher temperatures than their surrounding rural counterparts. This is primarily caused by the replacement of natural vegetation with asphalt and concrete, which have high thermal mass and low albedo, meaning they absorb and store solar radiation during the day and release it slowly at night. The lack of evapotranspiration—the process by which plants release water vapor to cool the air—further exacerbates the temperature differential.\n\nRecent research into 'urban micro-climates' suggests that UHI is not uniform across a city. Factors such as street orientation, 'urban canyons' (narrow streets flanked by tall buildings), and the distribution of green spaces create highly localized temperature zones. For instance, a street with high-rise buildings may benefit from 'wind tunneling' effects that lower temperatures at the ground level, while simultaneously trapping heat in the upper stories. These micro-climates have significant implications for public health, as heat-related mortality is often concentrated in 'hot spots' with poor ventilation and high building density. Mitigating UHI requires a multi-faceted approach, including the use of 'cool roofs', permeable pavements, and the strategic expansion of urban forestry."
          }
        }
      ]
    },
    questions: [
      {
        id: 169,
        text: "The 'localizationist' view mentioned in the text suggests that:",
        options: ["The brain can form new neural connections", "Brain function is permanently lost if a specific area is damaged", "Adults learn languages faster than children", "The prefrontal cortex is the primary center for language", "Localization of function is impossible"],
        answerIndex: 1,
        explanation: "The text defines this view as suggesting 'once a specific brain region was damaged, its associated function was lost forever'."
      },
      {
        id: 170,
        text: "Based on the passage, fMRI scans of proficient adult learners show:",
        options: ["A decrease in white matter density", "Heavy reliance on the Broca's area alone", "Increased structural density in the corpus callosum", "A return to childhood 'sponge-like' methodology", "That the critical period is an absolute barrier"],
        answerIndex: 2,
        explanation: "The text explicitly mentions fMRI scans show increased structural density of white matter in the corpus callosum."
      },
      {
        id: 171,
        text: "How does the adult methodology for language acquisition differ from children's according to the text?",
        options: ["Adults rely more on conscious analytical strategies", "Adults have higher synaptic density", "Adults utilize fewer brain regions", "Adults bypass the prefrontal cortex", "Children are less flexible than adults"],
        answerIndex: 0,
        explanation: "The text states adult learners employ 'conscious analytical strategies to bypass the loss of earlier developmental flexibility'."
      },
      {
        id: 172,
        text: "The author's conclusion regarding the 'critical period' for language is that:",
        options: ["It is a myth with no neurological basis", "It represents a complete end to neural malleability", "It is an absolute barrier for all learners", "It marks a shift in cognitive methodology rather than a total end", "It is only relevant for white matter density"],
        answerIndex: 3,
        explanation: "The author states it is 'not an absolute barrier but a shift in the cognitive methodology of the brain'."
      },
      {
        id: 173,
        text: "Why does the author consider quantum computing a threat to global security?",
        options: ["It can factor large prime numbers effortlessly", "It is only available to adversarial nation-states", "It relies on Shor's algorithm for RSA algorithms", "It renders all drug discovery methods obsolete", "It could break current encryption methods in seconds"],
        answerIndex: 4,
        explanation: "The text says a quantum computer 'could break these codes in seconds', specifically referring to modern encryption."
      },
      {
        id: 174,
        text: "The 'harvest now, decrypt later' strategy is concerning because:",
        options: ["Quantum computers are already active", "Adversaries are currently storing encrypted data for future use", "Today's secrets are being released publicly", "RSA algorithms have already been solved", "PQC is inefficient on classical hardware"],
        answerIndex: 1,
        explanation: "The text defines this as adversarial actors storing encrypted data today to decrypt once they have quantum capabilities."
      },
      {
        id: 175,
        text: "Which of the following is a requirement for Post-Quantum Cryptography (PQC) mentioned in the text?",
        options: ["It must be based on RSA algorithms", "It must be faster than Shor's algorithm", "It must run efficiently on current classical hardware", "It requires the use of entangled supercomputers", "It must eliminate national sovereignty"],
        answerIndex: 2,
        explanation: "The text states PQC 'must be both resistant to quantum attacks and efficient enough to run on current classical hardware'."
      },
      {
        id: 176,
        text: "What is the primary reason for the interest in mining the Clarion-Clipperton Zone?",
        options: ["The discovery of new species", "Declining yields in terrestrial mines", "The abundance of rainforest manganese", "Lower environmental scrutiny than land mining", "The CCZ is shallower than most oceans"],
        answerIndex: 1,
        explanation: "Interest is driven by terrestrial mines facing 'declining yields and increasing environmental scrutiny'."
      },
      {
        id: 177,
        text: "Marine biologists are concerned that sediment plumes from mining could:",
        options: ["Accelerate species growth", "Disrupt the marine food web", "Increase the albedo of the ocean floor", "Create new terrestrial mines", "Make EV batteries obsolete"],
        answerIndex: 1,
        explanation: "The process creates plumes that 'can travel for hundreds of miles, potentially... disrupting the marine food web'."
      },
      {
        id: 178,
        text: "Proponents of deep-sea mining argue that:",
        options: ["Deep-sea species are slow-growing", "The abyssal plain is well-researched", "Localized mining prevents extinction", "The environmental cost is lower than rainforest mining", "Filter-feeding organisms benefit from sediment"],
        answerIndex: 3,
        explanation: "Proponents argue that the environmental cost 'is lower than that of land-based mining in rainforests'."
      },
      {
        id: 179,
        text: "True or False: According to the text, we have enough research to accurately assess the risks of deep-sea mining.",
        options: ["True", "False", "Can't Tell", "Only for the CCZ", "Only for manganese"],
        answerIndex: 1,
        explanation: "False. Critics maintain we 'cannot accurately assess the risk to an environment as remote and under-researched'."
      },
      {
        id: 180,
        text: "The author identifies which event as the start of the erosion of Republican norms?",
        options: ["The crossing of the Rubicon", "Sulla's dictatorship", "The Gracchi brothers' land reform attempts", "The rise of military strongmen", "The abolition of the Senate"],
        answerIndex: 2,
        explanation: "The text states the erosion of norms 'began decades earlier' than Caesar, pointing to the Gracchi brothers' attempts."
      },
      {
        id: 181,
        text: "What was 'mos maiorum' in Roman political life?",
        options: ["A written set of laws", "The Senate's formal veto power", "The legions' oath of loyalty", "A code of ancestral custom", "Caesar's specific military strategy"],
        answerIndex: 3,
        explanation: "The text defines it as 'the unwritten code of ancestral custom'."
      },
      {
        id: 182,
        text: "According to the passage, military 'strongmen' gained power because:",
        options: ["They had the approval of the Senate", "They abolished the Assemblies", "Soldiers were more loyal to their leaders than the state", "They ignored the Gracchi brothers", "The magistracies were eliminated"],
        answerIndex: 2,
        explanation: "The text says they realized the 'loyalty of their legions was more valuable than the approval of the Senate'."
      },
      {
        id: 183,
        text: "The author describes the institutions of the Republic by Caesar's time as:",
        options: ["Hollow shells", "Highly functional", "Optimates-only clubs", "Military magistracies", "Superpower Assemblies"],
        answerIndex: 0,
        explanation: "The text explicitly calls them 'hollow shells'."
      },
      {
        id: 184,
        text: "The Urban Heat Island effect is primarily caused by:",
        options: ["Evapotranspiration of urban forestry", "High building albedo", "Asphalt and concrete absorbing and releasing radiation", "Wind tunneling in urban canyons", "Nighttime solar radiation"],
        answerIndex: 2,
        explanation: "UHI is caused by materials that 'absorb and store solar radiation during the day and release it slowly at night'."
      },
      {
        id: 185,
        text: "How do 'urban canyons' affect local micro-climates according to the text?",
        options: ["They decrease thermal mass", "They increase albedo", "They can lower ground-level temperatures via wind tunneling", "They eliminate the UHI effect", "They prevent heat from reaching upper stories"],
        answerIndex: 2,
        explanation: "The text states they 'may benefit from wind tunneling effects that lower temperatures at the ground level'."
      },
      {
        id: 186,
        text: "Evapotranspiration is defined by the author as:",
        options: ["The storage of heat in concrete", "Plants releasing water vapor to cool the air", "The absorption of radiation by asphalt", "The creation of narrow urban streets", "The slow release of heat at night"],
        answerIndex: 1,
        explanation: "The text defines it as 'the process by which plants release water vapor to cool the air'."
      },
      {
        id: 187,
        text: "Heat-related mortality is most often found in which city zones?",
        options: ["Upper stories of skyscrapers", "Rural counterparts", "Abyssal plains", "Zones with poor ventilation and high building density", "Permeable pavement areas"],
        answerIndex: 3,
        explanation: "The text states mortality is concentrated in 'hot spots with poor ventilation and high building density'."
      },
      {
        id: 188,
        text: "Which of the following is NOT mentioned as a way to mitigate the UHI effect?",
        options: ["Cool roofs", "Permeable pavements", "Expansion of urban forestry", "Increasing street width", "Strategic green spaces"],
        answerIndex: 3,
        explanation: "The text mentions cool roofs, permeable pavements, forestry, and green spaces, but does not mention increasing street width."
      },
      {
        id: 189,
        text: "What is the relationship between 'thermal mass' and heat storage mentioned in the text?",
        options: ["High thermal mass leads to low heat storage", "Low thermal mass increases albedo", "Asphalt has low thermal mass", "High thermal mass allows materials to absorb and store radiation", "Thermal mass prevents radiation absorption"],
        answerIndex: 3,
        explanation: "The text notes asphalt and concrete have 'high thermal mass... which absorb and store solar radiation'."
      },
      {
        id: 190,
        text: "The author's tone regarding the green economy's reliance on rare earth metals is best described as:",
        options: ["Uncritically supportive", "Highlighting a complex dilemma", "Dismissive of environmental risks", "Purely pessimistic", "Indifferent"],
        answerIndex: 1,
        explanation: "The author frames it as a choice between declining terrestrial mines/environmental scrutiny and deep-sea risks, showing a complex dilemma."
      }
    ]
  },
  {
    setId: 111,
    section: 'Verbal Reasoning',
    title: "VR Sprint C",
    type: "PASSAGE",
    context: "Elite reading comprehension. 11 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          type: 'PASSAGE',
          title: 'Existentialism in Literature',
          data: {
            title: 'The Absurdist Hero',
            text: "Albert Camus’ concept of 'the Absurd' arises from the conflict between the human longing for order and meaning and the 'silent, unreasonable world.' In his essay 'The Myth of Sisyphus,' Camus argues that recognizing this absurdity is not a cause for despair but an invitation to live with greater intensity. Sisyphus, condemned by the gods to roll a boulder up a hill for eternity only for it to roll back down, becomes the ultimate absurdist hero when he accepts his fate with consciousness. Camus famously concludes that 'one must imagine Sisyphus happy.'\n\nCritics of existentialism often argue that this philosophy leads to moral nihilism—the belief that since life has no inherent meaning, there is no basis for ethical behavior. Camus, however, distinguished between 'metaphysical rebellion' and 'political rebellion.' In his later work 'The Rebel,' he argued that the very act of rebelling against the absurdity of existence creates a shared human identity. If a person rebels against suffering, they do so not just for themselves but for all of humanity, establishing a foundation for solidarity and justice that does not require a divine or external mandate."
          }
        },
        {
          id: 2,
          type: 'PASSAGE',
          title: 'Genetic Engineering Policy',
          data: {
            title: 'The CRISPR Conundrum',
            text: "The advent of CRISPR-Cas9 technology has brought the possibility of human germline editing—the modification of genes in embryos that will be passed on to future generations—into the realm of reality. Proponents argue that this could eliminate devastating hereditary diseases like Huntington’s and cystic fibrosis, saving countless lives. However, the ethical implications are profound. Bioethicists warn of a 'slippery slope' toward 'designer babies,' where genetic traits are selected for enhancement (such as intelligence or physical beauty) rather than purely for medical necessity.\n\nFrom a policy perspective, the challenge is that science moves faster than international law. While many countries have banned germline editing, others have loosely regulated environments, creating the risk of 'genetic tourism.' Furthermore, the long-term effects of altering the human gene pool are unknown; a modification that provides resistance to one disease might inadvertently increase susceptibility to another. There is also the issue of equity: if genetic enhancements are only available to the wealthy, it could create a biological caste system, entrenching social inequality into our very DNA. Regulation must therefore balance the urge for medical progress with a global commitment to human rights and evolutionary stability."
          }
        },
        {
          id: 3,
          type: 'PASSAGE',
          title: 'Medieval Guild Dynamics',
          data: {
            title: 'Masters and Apprentices',
            text: "During the High Middle Ages, craft guilds were the primary economic and social units of urban Europe. These organizations held a monopoly over their respective trades, regulating everything from product quality to the number of hours a master could work. To become a master, an individual had to progress through a rigid hierarchy, starting as an apprentice—often as young as twelve—and then serving as a journeyman, a skilled worker who traveled between workshops to gain experience. The final step was the submission of a 'masterpiece' to the guild elders, proving their technical proficiency.\n\nWhile guilds provided social security for their members and maintained high standards of craftsmanship, they were also inherently exclusionary. They often restricted membership to the sons of existing masters, creating a hereditary elite that stifled economic mobility. By the 16th century, the guild system began to clash with the rising tide of merchant capitalism. Independent entrepreneurs sought to bypass guild regulations by moving production to rural areas—a process known as the 'putting-out system.' This allowed for mass production at lower costs, eventually leading to the obsolescence of the guild model and the dawn of the Industrial Revolution."
          }
        },
        {
          id: 4,
          type: 'PASSAGE',
          title: 'Behavioral Economics',
          data: {
            title: 'The Irrational Consumer',
            text: "Classical economic theory assumes that humans are 'homo economicus'—rational actors who consistently make decisions that maximize their personal utility. Behavioral economics, however, challenges this assumption by integrating insights from psychology. One of the most significant concepts is 'loss aversion,' which suggests that the pain of losing something is twice as powerful as the joy of gaining it. This explains why people are often reluctant to sell stocks that have dropped in value, even when the rational choice is to cut their losses.\n\nAnother key finding is 'choice architecture'—the idea that the way options are presented significantly influences the outcome. For example, countries that make organ donation an 'opt-out' system (where everyone is a donor unless they specify otherwise) have much higher participation rates than those with 'opt-in' systems. This 'nudging' has become a powerful tool for policymakers, but it raises questions about paternalism. Critics argue that even if nudges are designed for the public good, they manipulate individual autonomy. Supporters contend that since there is no such thing as a neutral presentation of choices, it is better to design environments that encourage beneficial behaviors."
          }
        },
        {
          id: 5,
          type: 'PASSAGE',
          title: 'Exoplanet Atmospheric Chemistry',
          data: {
            title: 'Searching for Biosignatures',
            text: "The search for extraterrestrial life has shifted from the detection of radio signals to the analysis of exoplanet atmospheres. By using spectroscopy, astronomers can identify the chemical composition of light filtering through a planet’s atmosphere as it passes in front of its star. The goal is to find 'biosignatures'—gases like oxygen, ozone, and methane that are unlikely to exist in large quantities without the presence of life. On Earth, the coexistence of methane and oxygen is a strong biosignature, as these gases react with each other and would disappear if not continuously replenished by biological processes.\n\nHowever, interpreting these signals is fraught with difficulty. Atmospheric models have shown that non-biological processes can also produce 'false positives.' For example, ultraviolet radiation can break down water vapor in a planet's upper atmosphere, releasing oxygen that mimics the presence of photosynthetic life. Similarly, geological activity can release methane. To confirm a biosignature, astronomers must look for a 'chemical disequilibrium'—a state where multiple gases exist in ratios that cannot be explained by volcanic or atmospheric chemistry alone. The upcoming launch of next-generation space telescopes promises to provide the high-resolution data needed to move from detection to confirmation."
          }
        }
      ]
    },
    questions: [
      {
        id: 191,
        text: "According to Camus, 'the Absurd' is a result of:",
        options: ["A lack of orderly governments", "The conflict between human desire for meaning and a silent world", "The eternal punishment of the gods", "A shared human identity", "Moral nihilism"],
        answerIndex: 1,
        explanation: "The text defines 'the Absurd' as the conflict between the longing for order and the 'silent, unreasonable world'."
      },
      {
        id: 192,
        text: "What does Camus suggest is the result of recognizing the absurdity of existence?",
        options: ["A descent into moral nihilism", "A cause for despair and isolation", "An invitation to live with greater intensity", "A need for a divine mandate", "The end of metaphysical rebellion"],
        answerIndex: 2,
        explanation: "Camus argues that recognizing absurdity is 'an invitation to live with greater intensity'."
      },
      {
        id: 193,
        text: "In 'The Rebel,' Camus argues that rebellion against suffering leads to:",
        options: ["The breakdown of society", "A shared human identity and solidarity", "The establishment of a divine mandate", "Political nihilism", "The rolling back of the boulder"],
        answerIndex: 1,
        explanation: "The text says rebelling against suffering 'creates a shared human identity' and establishes 'solidarity and justice'."
      },
      {
        id: 194,
        text: "True or False: Critics of existentialism believe that the philosophy provides a strong basis for ethical behavior.",
        options: ["True", "False", "Can't Tell", "Only for Camus", "Only for Sisyphus"],
        answerIndex: 1,
        explanation: "False. The text says critics argue existentialism 'leads to moral nihilism' and lacks a basis for ethical behavior."
      },
      {
        id: 195,
        text: "CRISPR-Cas9 technology makes which of the following possible for the first time?",
        options: ["Treating Huntington's with drugs", "Eliminating all diseases globally", "Modifying genes in embryos passed to future generations", "Creating intelligence in robots", "Banning international genetic tourism"],
        answerIndex: 2,
        explanation: "The text states the technology makes 'human germline editing... the modification of genes in embryos that will be passed on to future generations' a reality."
      },
      {
        id: 196,
        text: "The term 'genetic tourism' refers to:",
        options: ["Scientists traveling for research", "People seeking genetic editing in countries with loose regulation", "Visiting rainforests to collect rare metal", "Wealthy people traveling to see exoplanets", "A biological caste system"],
        answerIndex: 1,
        explanation: "The passage links loose regulation in some countries to the risk of 'genetic tourism'."
      },
      {
        id: 197,
        text: "Which of the following is an equity concern regarding genetic enhancement?",
        options: ["Increased susceptibility to new diseases", "Science moving faster than international law", "The creation of a biological caste system", "The use of CRISPR on embryos", "Evolutionary instability"],
        answerIndex: 2,
        explanation: "The text says if enhancements are only for the wealthy, it 'could create a biological caste system'."
      },
      {
        id: 198,
        text: "What is the policy challenge regarding germline editing mentioned in the text?",
        options: ["Science is too slow for legislation", "No country has banned the practice", "International law moves slower than scientific progress", "Hereditary diseases are too difficult to identify", "Embryos are not legally protected"],
        answerIndex: 2,
        explanation: "The text says 'the challenge is that science moves faster than international law'."
      },
      {
        id: 199,
        text: "In the medieval guild system, what was a 'journeyman'?",
        options: ["A master's son who inherited a workshop", "A young apprentice of twelve", "A skilled worker who traveled between workshops", "A merchant capitalist", "A rural producer"],
        answerIndex: 2,
        explanation: "The text defines a journeyman as 'a skilled worker who traveled between workshops to gain experience'."
      },
      {
        id: 200,
        text: "What was the 'masterpiece' in the context of medieval guilds?",
        options: ["A monopoly over a specific trade", "A set of rigid work-hour regulations", "A project submitted to elders to prove proficiency", "The putting-out system", "A rural mass-produced item"],
        answerIndex: 2,
        explanation: "It was the 'submission of a masterpiece to the guild elders, proving their technical proficiency'."
      },
      {
        id: 201,
        text: "The 'putting-out system' was used by entrepreneurs to:",
        options: ["Strengthen the power of guilds", "Bypass guild regulations and lower costs", "Increase the product quality of masters", "Provide social security for journeymen", "End merchant capitalism"],
        answerIndex: 1,
        explanation: "Entrepreneurs 'sought to bypass guild regulations by moving production to rural areas... known as the putting-out system'."
      },
      {
        id: 202,
        text: "What was a negative social consequence of the guild system mentioned in the text?",
        options: ["Low product quality", "Poor work standards", "Stifled economic mobility due to hereditary membership", "Mass production in rural areas", "The Industrial Revolution"],
        answerIndex: 2,
        explanation: "Guilds 'restricted membership to the sons of existing masters... which stifled economic mobility'."
      },
      {
        id: 203,
        text: "The concept of 'homo economicus' assumes that humans are:",
        options: ["Psychologically driven", "Irrational decision-makers", "Rational actors maximizing personal utility", "Influenced by choice architecture", "Averse to all gains"],
        answerIndex: 2,
        explanation: "It assumes they are 'rational actors who consistently make decisions that maximize their personal utility'."
      },
      {
        id: 204,
        text: "Behavioral economics suggests that 'loss aversion' makes people:",
        options: ["Joyful when gaining things", "Twice as affected by losses as by gains", "Rational when selling stocks", "Likely to donate organs automatically", "Neutral to all presentations of choice"],
        answerIndex: 1,
        explanation: "Loss aversion 'suggests that the pain of losing something is twice as powerful as the joy of gaining it'."
      },
      {
        id: 205,
        text: "The high participation rates in organ donation in some countries are attributed to:",
        options: ["Opt-in choice architecture", "Opt-out choice architecture", "A lack of choice architecture", "Rational homo economicus behavior", "The pain of loss aversion"],
        answerIndex: 1,
        explanation: "Higher rates are found in countries with 'opt-out' systems, a form of nudging."
      },
      {
        id: 206,
        text: "Critics of 'nudging' argue that it:",
        options: ["Is always neutral", "Encourages beneficial behavior", "Manipulates individual autonomy", "Is twice as powerful as joy", "Maximizes personal utility"],
        answerIndex: 2,
        explanation: "Critics argue that nudges 'manipulate individual autonomy'."
      },
      {
        id: 207,
        text: "How do astronomers identify the chemical composition of exoplanet atmospheres?",
        options: ["Radio signal detection", "Direct photography of the surface", "Using spectroscopy on light filtering through the atmosphere", "Measuring volcanic activity", "Analyzing ultraviolet radiation"],
        answerIndex: 2,
        explanation: "They identify composition 'by using spectroscopy, astronomers can identify the chemical composition of light filtering through a planet's atmosphere'."
      },
      {
        id: 208,
        text: "Oxygen and methane together on Earth are considered a strong biosignature because:",
        options: ["They are produced by radio signals", "They react with each other and need biological replenishment", "They are geological by-products", "They exist in the upper atmosphere only", "They create water vapor under UV light"],
        answerIndex: 1,
        explanation: "They 'react with each other and would disappear if not continuously replenished by biological processes'."
      },
      {
        id: 209,
        text: "An example of a 'false positive' biosignature mentioned is:",
        options: ["Methane reacting with ozone", "Ultraviolet radiation breaking down water vapor to release oxygen", "Radio signals from distant galaxies", "The presence of a chemical disequilibrium", "Proficient adult language acquisition"],
        answerIndex: 1,
        explanation: "The text says UV radiation can break down water vapor, 'releasing oxygen that mimics the presence of photosynthetic life'."
      },
      {
        id: 210,
        text: "To confirm life, astronomers look for 'chemical disequilibrium', which is defined as:",
        options: ["A state where gases are in volcanic ratio", "Atmospheric ratios that can only be explained by life", "A lack of ultraviolet radiation", "False positive oxygen signals", "A neutral presentation of choices"],
        answerIndex: 1,
        explanation: "Disequilibrium is 'a state where multiple gases exist in ratios that cannot be explained by volcanic or atmospheric chemistry alone'."
      },
      {
        id: 211,
        text: "The primary purpose of next-generation space telescopes in this context is to:",
        options: ["Detect radio signals from exoplanets", "Provide high-resolution data to confirm biosignatures", "Search for radio waves from the CCZ", "Bypass international law", "Replace spectroscopic analysis"],
        answerIndex: 1,
        explanation: "They promise to 'provide the high-resolution data needed to move from detection to confirmation'."
      },
      {
        id: 212,
        text: "The author's tone regarding the future of biosignature research is:",
        options: ["Skeptical and dismissive", "Cautiously optimistic with future technology", "Indifferent to chemical composition", "Certain that life has already been found", "Alarmed by false positives"],
        answerIndex: 1,
        explanation: "The author notes difficulties but points to next-generation telescopes as a path to confirmation, showing cautious optimism."
      }
    ]
  }
];

export function getSprintSet(index: number): UCATSet {
  return ucatSprintTests[index];
}
