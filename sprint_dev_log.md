# UCAT Sprint Development Log

This log tracks the logic, variables, and question mapping for all standardized 50% length sprints.

## [Section: Quantitative Reasoning] - 2025 Standard (18 Qs / 13 Mins)

### Sprint ID: 101 (QR Sprint A)
**Scenario 1: Train Logistics (TABLE)** - Questions 1-5
- **Variables:** North(12.5k, £6.40, 65%), East(8.2k, £4.50, 70%), South(15k, £7.20, 55%), West(9.8k, £5.80, 60%)
- **Logic:** 
  - Profit = Pax * Price * (1 - Cost%)
  - Abs Cost = Pax * Price * Cost%
  - Average Price = Sum(Price) / 4

**Scenario 2: Energy Production (PIE_CHART)** - Questions 6-9
- **Variables:** Total=2400 TWh. Nuclear=25%, Gas=35%, Renewables=30%, Coal=10%
- **Logic:**
  - Value = Total * Percentage
  - Combined = %A + %B
  - Ratio = %A : %B

**Scenario 3: Retail Performance (BAR_CHART)** - Questions 10-14
- **Variables:** London(45), Manchester(32), Birmingham(28), Glasgow(22), Cardiff(18). Total=145.
- **Logic:**
  - Average = Total / 5 (29)
  - % of Total = Value / Total
  - Growth = Value * (1 + Growth%)

**Scenario 4: Stock Indices (LINE_GRAPH)** - Questions 15-18
- **Variables:** Index A [100, 110, 105, 120, 130], Index B [90, 95, 100, 105, 110]
- **Logic:**
  - Gap = ValueA - ValueB
  - % Increase = (New - Old) / Old
  - Growth Rate = Constant for Index B

---

### Sprint ID: 102 (QR Sprint B)
**Scenario 1: Healthcare Costs (MULTI_TABLE)** - Questions 19-27
- **Variables:** MRI(850k, 12%), X-Ray(120k, 8%), Bed(4.5k, 5%). GBP=0.85, USD=1.10
- **Logic:**
  - Maintenance = Cost * Maint% * ExRate
  - Conversion = Value * ExRate

**Scenario 2: Flight Scheduling (TABLE)** - Questions 28-36
- **Variables:** LHR-JFK(5.5k km, 7.5h, 42k kg), DXB(5.4k, 7h, 38k), SIN(10.8k, 13h, 85k), SYD(17k, 22h, 140k)
- **Logic:**
  - Speed = Distance / Time
  - Efficiency = Fuel / Distance
  - Cost = Fuel * PricePerKg

---

### Sprint ID: 105 (QR Sprint C)
**Scenario 1: Global Shipping (LINE_GRAPH)** - Questions 77-81
- **Variables:** Jan Index 100, Vol 50k. Base $1.20.
- **Logic:** Cost = Index * Rate * (Vol/1000).

**Scenario 2: Real Estate (MULTI_TABLE)** - Questions 82-86
- **Variables:** Res(5.2%, 10%), Com(7.8%, 22%). Tax: LON(20%), NYC(25%), TYO(15%), DXB(0%).
- **Logic:** Net = (Gross - Maint) * (1 - Tax).

**Scenario 3: Machine Reliability (BAR_CHART)** - Questions 87-90
- **Variables:** Defects/1k: [2, 5, 8, 15, 22, 35]. Cost $50.
- **Logic:** Total Cost = Defects * (TotalUnits/1000) * UnitDefectCost.

**Scenario 4: Renewable Energy (TABLE)** - Questions 213-216
- **Variables:** EcoPower(4.5k Wind, 3.2k Solar, £12.50), GreenGrid(3.8k, 5.1k, £10), WindWard(7.2k, 1.5k, £15), SolarSun(1.2k, 8.5k, £8.50).
- **Logic:** Total = Wind + Solar. Subsidy = Energy * Rate.

---

### Sprint ID: 106 (QR Sprint D)
**Scenario 1: E-commerce (PIE_AND_TABLE)** - Questions 91-99
- **Variables:** Total £15.8bn. Fashion(32%), Tech(28%). UK(45%), EU(35%), US(15%).
- **Logic:** Segment = Total * %. Shipping Avg = Sum(Costs)/4.

**Scenario 2: Pharma Trials (TABLE)** - Questions 100-108
- **Variables:** Vax-A(88.5%, 12.5k, £450), B(92.1%, 8.4k, £680), C(76.8%, 22k, £320), D(84.2%, 15k, £510).
- **Logic:** Successes = Sample * Rate. Cost/Success = Cost / Rate.

---

### Sprint ID: 108 (QR Sprint E)
**Scenario 1: Aerospace Alloys (TABLE)** - Questions 133-136
- **Variables:** Ti-64(45m, 4.43g, $28.5, 8%), Al-7075(15m, 2.81g, $4.2, 5%), St-316L(30m, 8g, $2.1, 3%).
- **Logic:** Units/Shift = Mins/Cycle. Scrap = Mass * % * Cost.

**Scenario 2: District Health (MULTI_TABLE)** - Questions 137-140
- **Variables:** North(120k, $45, 82%), South(250k, $38, 75%), East(85k, $52, 90%), West(180k, $41, 88%).
- **Logic:** Weighted Avg = Sum(Pop*Rate)/Sum(Pop).

**Scenario 3: Crypto Arbitrage (LINE_GRAPH)** - Questions 141-145
- **Variables:** Prices: [1.2, 1.35, 1.28, 1.42, 1.55]. Fees: 0.1%, $5, 0.5% spread.
- **Logic:** Net = (Sale - Buy) - Fees.

**Scenario 4: Agriculture Yields (TABLE)** - Questions 146-150
- **Variables:** Wheat(4500, 0.25, 12%), Corn(8000, 0.18, 25%), Rice(6200, 0.42, 18%), Soy(3100, 0.55, 10%).
- **Logic:** Revenue = Yield * Price * (1 - Loss).

---

### Sprint ID: 109 (QR Sprint F)
**Scenario 1: VC Dilution (TABLE)** - Questions 151-154
- **Variables:** Seed(2 pre, 0.5 inv), A(8 pre, 2 inv), B(40 pre, 10 inv).
- **Logic:** Post = Pre + Inv. Dilution = Inv / Post.

**Scenario 2: Automation ROI (TABLE)** - Questions 155-158
- **Variables:** Manual($450k/yr), Auto($500k cost, $20k/yr maint, 10yr life).
- **Logic:** Breakeven = Cost / (Manual - Auto_Op_Cost).

**Scenario 3: Telecom ARPU (PIE_AND_TABLE)** - Questions 159-163
- **Variables:** Basic(50%, $25, $10), Pro(35%, $55, $5), Elite(15%, $95, $0).
- **Logic:** ARPU = Base + (Overage * Rate).

**Scenario 4: Grid Storage (LINE_GRAPH)** - Questions 164-168
- **Variables:** Prices: [30, 45, 120, 150, 80]. Loss 10% or 20%.
- **Logic:** Available = Stored * (1 - Loss). Profit = (Sale - Buy) / Buy.

---

## [Section: Verbal Reasoning] - 2025 Standard (22 Qs / 11 Mins)

### Sprint ID: 103 (VR Sprint A)
**Questions 37-58**
- **Themes:** Arctic Permafrost, Telemedicine, Himba Linguistics, Grid Stability, Renaissance Oil Paint.
- **Logic:** Reading comprehension (Facts, Inference, True/False/Can't Tell).

### Sprint ID: 110 (VR Sprint B - Advanced)
**Questions 169-190**
- **Themes:** Neuroplasticity (Language), Quantum Ethics (Cryptography), Deep-Sea Mining (Pacific CCZ), Roman Republic Fall (Political Norms), Urban Micro-Climates (Heat Islands).
- **Logic:** Complex inference, vocabulary-in-context, and multi-paragraph synthesis.

### Sprint ID: 111 (VR Sprint C - Elite)
**Questions 191-212**
- **Themes:** Albert Camus (Existentialism), CRISPR Policy (Genetic Editing), Medieval Guilds (Economic History), Behavioral Economics (Loss Aversion), Exoplanet Biosignatures (Spectroscopy).
- **Logic:** Nuanced tone detection, identification of logical fallacies, and scientific data interpretation.

---

## [Section: Decision Making] - 2025 Standard (18 Qs / 18.5 Mins)

### Sprint ID: 104 (DM Sprint A)
**Questions 59-76**
- **Themes:** Office Assignments (Deduction), Health Claims (Syllogisms), Hospital Shifts (Sequencing), Generic Drugs (Arguments), Club Survey (Venn).
- **Logic:** Multi-part syllogism scoring (2/1/0), logical sequencing, strengthening arguments, and Venn data extraction.

---

## [Section: Situational Judgement] - 2025 Standard (24 Qs / 13 Mins)

### Sprint ID: 107 (SJT Sprint A)
**Questions 109-132**
- **Themes:** Confidentiality in Elevators, Teamwork on Wards, Social Media Professionalism.
- **Logic:** Medical ethics, peer communication, and professional accountability.
