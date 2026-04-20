import type { UCATSet } from './types';

export const vrSprints: UCATSet[] = [
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
          questionRange: [37, 40],
          type: 'PASSAGE',
          title: 'Arctic Ecosystems',
          data: {
            title: 'The Thawing North',
            text: "Permafrost, ground that remains frozen for at least two consecutive years, covers nearly a quarter of the Northern Hemisphere’s land area. As global temperatures rise, this frozen foundation is beginning to thaw, with profound consequences for both local infrastructure and global climate systems. In regions like Siberia and Northern Canada, the sinking ground—a process known as thermokarst—has led to the structural failure of roads, pipelines, and housing, often necessitating the complete abandonment of remote settlements.\n\nMore concerning to climatologists is the release of greenhouse gases. Permafrost acts as a massive carbon sink, containing an estimated 1,400 billion tons of carbon—roughly double the amount currently in the atmosphere. When it thaws, microbial activity decomposes the newly accessible organic matter, releasing methane and carbon dioxide. This process creates a feedback loop: higher temperatures cause more thawing, which releases more gases, further driving global warming. Recent studies suggest that even a moderate increase in temperature could trigger a 'tipping point' where the release of these gases becomes self-sustaining and irreversible."
          }
        },
        {
          id: 2,
          questionRange: [41, 44],
          type: 'PASSAGE',
          title: 'Telemedicine Regulation',
          data: {
            title: 'Medicine Without Borders',
            text: "The rapid expansion of telemedicine has outpaced the regulatory frameworks designed to ensure patient safety and professional accountability. Traditionally, medical licensing has been jurisdiction-specific; a doctor licensed in London could not legally treat a patient in New York without an additional license. Telemedicine disrupts this model by allowing specialists to provide consultations across international borders at the click of a button. While this offers immense benefits for patients in underserved areas, it creates a 'legal grey zone' regarding malpractice and data protection.\n\nAdvocates for a unified international medical license argue that it would streamline care and allow for a more efficient distribution of medical expertise. However, critics point to the vast differences in training standards and ethical protocols between nations. For instance, what constitutes 'informed consent' varies significantly between European and Southeast Asian healthcare systems. Furthermore, the storage of sensitive patient data on cloud servers owned by multinational corporations raises significant privacy concerns, as these entities are often subject to different data-harvesting laws than the medical practitioners themselves."
          }
        },
        {
          id: 3,
          questionRange: [45, 48],
          type: 'PASSAGE',
          title: 'Cognitive Linguistics',
          data: {
            title: 'Language and Perception',
            text: "The Sapir-Whorf hypothesis, which suggests that the language we speak influences how we perceive the world, has long been a subject of debate in cognitive science. Early 20th-century linguists famously claimed that because certain Indigenous languages lacked specific words for 'time' or 'future', their speakers conceived of reality in a purely present-oriented way. While extreme versions of this linguistic determinism have been largely discredited, modern research into color perception suggests that language does, at the very least, sharpen our categorical boundaries.\n\nIn a landmark study, researchers compared English speakers with the Himba tribe of Namibia. The Himba language uses the same word for both blue and green, but has several distinct terms for different shades of green that look identical to an English speaker. When shown a circle of green squares with one slightly different shade, Himba speakers identified the outlier almost instantly, whereas English speakers struggled. Conversely, Himba speakers found it difficult to distinguish a blue square from a green one. This suggests that while the human eye sees the same physical spectrum, the brain’s ability to categorize and prioritize visual data is conditioned by the linguistic labels available to it."
          }
        },
        {
          id: 4,
          questionRange: [49, 53],
          type: 'PASSAGE',
          title: 'Renewable Grid Stability',
          data: {
            title: 'The Intermittency Challenge',
            text: "The transition to 100% renewable energy is frequently framed as a technological hurdle centered on generation capacity. However, for national grid operators, the primary challenge is not the amount of energy produced, but its reliability. Unlike traditional gas or coal-fired plants, which provide a steady 'baseload' supply, solar and wind power are intermittent. A sudden decrease in wind speed or a cloudy afternoon can lead to a rapid drop in frequency across the grid, which, if not compensated for within milliseconds, can trigger widespread blackouts.\n\nTo manage this, engineers are turning to large-scale Battery Energy Storage Systems (BESS) and 'demand-side response' strategies. BESS units can inject massive amounts of power into the grid almost instantly, acting as a buffer during frequency drops. Demand-side response, meanwhile, involves incentivizing large industrial consumers to temporarily reduce their power usage during peak demand. While these solutions are promising, they require a level of digital coordination and grid flexibility that many older national infrastructures lack. The cost of upgrading these grids is estimated to be in the trillions, leading some economists to argue that the 'last 10%' of the transition to renewables will be significantly more expensive than the first 90%."
          }
        },
        {
          id: 5,
          questionRange: [54, 58],
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
          questionRange: [169, 172],
          type: 'PASSAGE',
          title: 'Neuroplasticity and Language',
          data: {
            title: 'The Malleable Mind',
            text: "For much of the 20th century, the prevailing neurological dogma was that the adult brain was a static organ, with fixed pathways established during critical windows of childhood development. This 'localizationist' view suggested that once a specific brain region was damaged, its associated function was lost forever. However, the discovery of neuroplasticity—the brain’s ability to reorganize itself by forming new neural connections—has fundamentally altered our understanding of recovery and learning. This is nowhere more evident than in the study of second-language acquisition in adults.\n\nWhile children are famously 'sponges' for language due to high synaptic density, adult brains utilize different mechanisms to achieve fluency. Rather than relying solely on the Broca’s area, adult learners often engage the prefrontal cortex more heavily, employing conscious analytical strategies to bypass the loss of earlier developmental flexibility. Functional MRI scans show that as an adult becomes proficient in a new language, the structural density of white matter in the corpus callosum increases, facilitating faster communication between hemispheres. This suggests that the 'critical period' for language, while real, is not an absolute barrier but a shift in the cognitive methodology of the brain."
          }
        },
        {
          id: 2,
          questionRange: [173, 175],
          type: 'PASSAGE',
          title: 'Quantum Computing Ethics',
          data: {
            title: 'The Cryptographic Crisis',
            text: "Quantum computing represents a paradigm shift in computational power, utilizing the principles of superposition and entanglement to solve problems that would take classical supercomputers millennia. While its potential for drug discovery and material science is immense, its implications for global security are deeply unsettling. Most modern encryption—from personal emails to state-level military communications—relies on RSA algorithms, which depend on the extreme difficulty of factoring large prime numbers. A sufficiently powerful quantum computer, using Shor’s algorithm, could break these codes in seconds.\n\nThis has triggered a 'cryptographic arms race' to develop post-quantum cryptography (PQC). The challenge is that PQC must be both resistant to quantum attacks and efficient enough to run on classical hardware. Some theorists argue that the very existence of a quantum-capable nation-state would render traditional notions of national sovereignty obsolete, as the ability to decrypt any communication would provide a 'total information advantage.' Furthermore, the 'harvest now, decrypt later' strategy—where adversarial actors store encrypted data today in anticipation of future quantum capabilities—means that today’s secrets are already potentially compromised."
          }
        },
        {
          id: 3,
          questionRange: [176, 179],
          type: 'PASSAGE',
          title: 'Deep-Sea Mining',
          data: {
            title: 'The Final Frontier',
            text: "The transition to a green economy is dependent on rare earth metals like cobalt, nickel, and manganese, primarily used in electric vehicle batteries and renewable energy storage. As terrestrial mines face declining yields and increasing environmental scrutiny, the international mining industry has turned its attention to the Clarion-Clipperton Zone (CCZ), a vast expanse of the Pacific Ocean floor. Here, polymetallic nodules—potato-sized rocks rich in these minerals—lie in abundance at depths of 4,000 to 6,000 meters.\n\nHowever, marine biologists warn that deep-sea mining could cause irreversible damage to fragile, poorly understood ecosystems. The process involves 'vacuuming' the seafloor, which creates massive sediment plumes that can travel for hundreds of miles, potentially choking filter-feeding organisms and disrupting the marine food web. Moreover, many deep-sea species are extremely slow-growing and have restricted ranges, meaning localized mining could lead to total species extinction before they are even discovered. Proponents argue that the environmental cost of deep-sea mining is lower than that of land-based mining in rainforests, but critics maintain that we cannot accurately assess the risk to an environment as remote and under-researched as the abyssal plain."
          }
        },
        {
          id: 4,
          questionRange: [180, 183],
          type: 'PASSAGE',
          title: 'The Roman Republic',
          data: {
            title: 'The Fall of the Republic',
            text: "The transition of Rome from a Republic to an Empire is often characterized as a sudden collapse triggered by the ambition of Julius Caesar. While Caesar’s crossing of the Rubicon was a definitive turning point, the erosion of Republican norms had begun decades earlier. The Gracchi brothers’ attempts at land reform in the late 2nd century BC highlighted the growing chasm between the senatorial elite (optimates) and the landless masses (populares). When the Senate resorted to political assassination to stop these reforms, it broke the 'mos maiorum'—the unwritten code of ancestral custom that governed Roman political life.\n\nThis normalization of violence paved the way for the rise of military 'strongmen' like Marius and Sulla, who realized that the loyalty of their legions was more valuable than the approval of the Senate. Sulla’s dictatorship and his use of proscriptions—state-sanctioned execution lists—established a precedent that political power could be seized and maintained through sheer force. By the time Caesar arrived on the scene, the institutions of the Republic—the Senate, the Assemblies, and the magistracies—had already become hollow shells, unable to mediate the conflicting interests of a massive, militarized Mediterranean superpower."
          }
        },
        {
          id: 5,
          questionRange: [184, 190],
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
          questionRange: [191, 194],
          type: 'PASSAGE',
          title: 'Existentialism in Literature',
          data: {
            title: 'The Absurdist Hero',
            text: "Albert Camus’ concept of 'the Absurd' arises from the conflict between the human longing for order and meaning and the 'silent, unreasonable world.' In his essay 'The Myth of Sisyphus,' Camus argues that recognizing this absurdity is not a cause for despair but an invitation to live with greater intensity. Sisyphus, condemned by the gods to roll a boulder up a hill for eternity only for it to roll back down, becomes the ultimate absurdist hero when he accepts his fate with consciousness. Camus famously concludes that 'one must imagine Sisyphus happy.'\n\nCritics of existentialism often argue that this philosophy leads to moral nihilism—the belief that since life has no inherent meaning, there is no basis for ethical behavior. Camus, however, distinguished between 'metaphysical rebellion' and 'political rebellion.' In his later work 'The Rebel,' he argued that the very act of rebelling against the absurdity of existence creates a shared human identity. If a person rebels against suffering, they do so not just for themselves but for all of humanity, establishing a foundation for solidarity and justice that does not require a divine or external mandate."
          }
        },
        {
          id: 2,
          questionRange: [195, 198],
          type: 'PASSAGE',
          title: 'Genetic Engineering Policy',
          data: {
            title: 'The CRISPR Conundrum',
            text: "The advent of CRISPR-Cas9 technology has brought the possibility of human germline editing—the modification of genes in embryos that will be passed on to future generations—into the realm of reality. Proponents argue that this could eliminate devastating hereditary diseases like Huntington’s and cystic fibrosis, saving countless lives. However, the ethical implications are profound. Bioethicists warn of a 'slippery slope' toward 'designer babies,' where genetic traits are selected for enhancement (such as intelligence or physical beauty) rather than purely for medical necessity.\n\nFrom a policy perspective, the challenge is that science moves faster than international law. While many countries have banned germline editing, others have loosely regulated environments, creating the risk of 'genetic tourism.' Furthermore, the long-term effects of altering the human gene pool are unknown; a modification that provides resistance to one disease might inadvertently increase susceptibility to another. There is also the issue of equity: if genetic enhancements are only available to the wealthy, it could create a biological caste system, entrenching social inequality into our very DNA. Regulation must therefore balance the urge for medical progress with a global commitment to human rights and evolutionary stability."
          }
        },
        {
          id: 3,
          questionRange: [199, 202],
          type: 'PASSAGE',
          title: 'Medieval Guild Dynamics',
          data: {
            title: 'Masters and Apprentices',
            text: "During the High Middle Ages, craft guilds were the primary economic and social units of urban Europe. These organizations held a monopoly over their respective trades, regulating everything from product quality to the number of hours a master could work. To become a master, an individual had to progress through a rigid hierarchy, starting as an apprentice—often as young as twelve—and then serving as a journeyman, a skilled worker who traveled between workshops to gain experience. The final step was the submission of a 'masterpiece' to the guild elders, proving their technical proficiency.\n\nWhile guilds provided social security for their members and maintained high standards of craftsmanship, they were also inherently exclusionary. They often restricted membership to the sons of existing masters, creating a hereditary elite that stifled economic mobility. By the 16th century, the guild system began to clash with the rising tide of merchant capitalism. Independent entrepreneurs sought to bypass guild regulations by moving production to rural areas—a process known as the 'putting-out system.' This allowed for mass production at lower costs, eventually leading to the obsolescence of the guild model and the dawn of the Industrial Revolution."
          }
        },
        {
          id: 4,
          questionRange: [203, 206],
          type: 'PASSAGE',
          title: 'Behavioral Economics',
          data: {
            title: 'The Irrational Consumer',
            text: "Classical economic theory assumes that humans are 'homo economicus'—rational actors who consistently make decisions that maximize their personal utility. Behavioral economics, however, challenges this assumption by integrating insights from psychology. One of the most significant concepts is 'loss aversion,' which suggests that the pain of losing something is twice as powerful as the joy of gaining it. This explains why people are often reluctant to sell stocks that have dropped in value, even when the rational choice is to cut their losses.\n\nAnother key finding is 'choice architecture'—the idea that the way options are presented significantly influences the outcome. For example, countries that make organ donation an 'opt-out' system (where everyone is a donor unless they specify otherwise) have much higher participation rates than those with 'opt-in' systems. This 'nudging' has become a powerful tool for policymakers, but it raises questions about paternalism. Critics argue that even if nudges are designed for the public good, they manipulate individual autonomy. Supporters contend that since there is no such thing as a neutral presentation of choices, it is better to design environments that encourage beneficial behaviors."
          }
        },
        {
          id: 5,
          questionRange: [207, 212],
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
        options: ["Strengthen the power of guilds", "Bypass guild regulations and lower costs", "Increase the product quality of masters", "Provide social security for journeymen", "End merchant capitalist"],
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
  },
  {
    setId: 113,
    section: 'Verbal Reasoning',
    title: "VR Elite Sprint 1",
    type: "PASSAGE",
    context: "Elite reading comprehension and technical nuance. 10.5 Minutes.",
    dataSource: {
      isSprint: true,
      scenarios: [
        {
          id: 1,
          questionRange: [235, 238],
          type: 'PASSAGE',
          title: "The 'Liar’s Dividend' and the Evidentiary Crisis",
          data: {
            title: "Digital Deception in the Post-Truth Era",
            text: "The rapid proliferation of hyper-realistic generative adversarial networks (GANs) has introduced a phenomenon known as the 'Liar’s Dividend.' This occurs when the mere existence of deepfake technology allows bad actors to dismiss authentic, incriminating evidence as being 'AI-generated.' In legal contexts, this shifts the burden of proof in a way that the current 'Habeas Corpus' framework is ill-equipped to handle. Traditionally, the authenticity of video evidence was assumed unless a clear chain of custody breach was identified. However, in the 'Post-Truth' era of 2026, legal scholars argue that the 'Probative Value' of any digital recording has plummeted.\n\nCritics of current judicial reforms argue that implementing a mandatory 'Digital Watermark' for all recording devices—while technically feasible—creates a tiered justice system where those who cannot afford encrypted hardware are subject to higher levels of scrutiny. Furthermore, the 'Inference Gap' in a courtroom is widened when juries are instructed on the potential for AI manipulation. Research suggests that once a jury is told a video could be a deepfake, they tend to discount the evidence even if its metadata is verified. This cognitive 'skepticism-creep' undermines the prosecution’s ability to prove guilt 'beyond a reasonable doubt,' effectively granting a 'dividend' to those whose crimes are captured on camera but can be obfuscated by digital doubt."
          }
        },
        {
          id: 2,
          questionRange: [239, 242],
          type: 'PASSAGE',
          title: "Epigenetic Inheritance and the Lamarckian Revival",
          data: {
            title: "Soft Inheritance Mechanisms",
            text: "The central dogma of molecular biology—that information flows from DNA to RNA to protein—has long excluded the possibility of 'soft inheritance.' However, recent longitudinal studies into 'transgenerational epigenetic inheritance' (TEI) suggest that environmental stressors can leave chemical marks on the germline. This has led to a controversial revival of Lamarckian theory, which posits that acquired traits can be passed to offspring. While classical Darwinism emphasizes random mutation and natural selection, TEI focuses on 'DNA Methylation' and 'Histone Acetylation' as mechanisms that allow an organism to 'prime' its descendants for the specific environmental stressors it encountered.\n\nSkeptics, however, point to the 'Reprogramming Event' that occurs during early embryonic development, where the vast majority of epigenetic marks are 'erased' to ensure totipotency. For a trait to be truly transgenerational, it must escape this erasure process across at least three generations (F3) to rule out direct maternal-fetal exposure. Critics argue that much of what is labeled 'epigenetic' in human studies is actually 'cultural transmission' or 'niche construction'—where the parent’s behavior creates an environment that triggers the same epigenetic response in the child, rather than the mark being biologically inherited through the gametes. The distinction is crucial: the former is a biological 'hard-coding' of experience, while the latter is a sociological feedback loop."
          }
        },
        {
          id: 3,
          questionRange: [243, 246],
          type: 'PASSAGE',
          title: "The Ethics of Neural-Reality (NR) and the 'Experience Machine'",
          data: {
            title: "Simulated Achievement and the Hedonic Paradox",
            text: "Robert Nozick’s 'Experience Machine' was once a thought experiment designed to prove that humans value 'actually doing things' over 'the feeling of doing them.' In 2026, this experiment is no longer theoretical. Neural-Reality (NR) interfaces, which bypass sensory organs to stimulate the cortex directly, can now simulate a lifetime of achievement in a matter of objective hours. However, the 'Hedonic Paradox' of NR has emerged: as the 'Authenticity Quotient' of the simulation increases, users report a profound 'Post-Session Dysphoria.' This condition is characterized by a rejection of the physical world as 'drab' and 'biologically limited.'\n\nThe legal debate centers on 'Cognitive Liberty'—the right to alter one’s own mental state versus the state's interest in maintaining a productive citizenry. Proponents of NR argue that for individuals with chronic pain or terminal illnesses, the simulation provides a 'dignified exit.' Critics, however, warn of the 'Solipsistic Trap,' where the user’s internal reality becomes so customized that the shared objective reality (and the social contracts within it) becomes irrelevant. If a user can experience the 'Neural-Signature' of a hero without the 'Actus Reus' of bravery, does the virtue itself survive, or is it reduced to a neuro-chemical commodity?"
          }
        },
        {
          id: 4,
          questionRange: [247, 250],
          type: 'PASSAGE',
          title: "The Triffin Dilemma and Global Reserve Currencies",
          data: {
            title: "Liquidity, Confidence, and Digital Sovereignty",
            text: "In the post-WWII era, the 'Triffin Dilemma' identified a fundamental flaw in the Bretton Woods system: the conflict of interest between short-term domestic objectives and long-term international goals for countries whose currencies serve as global reserve assets. To provide the global economy with liquidity, the reserve-currency country (the US) must run a persistent trade deficit, as it needs to export more currency than it imports in goods. However, persistent deficits eventually undermine confidence in the currency’s value, leading to its collapse as a reserve asset. This 'Liquidity vs. Confidence' paradox remains the central friction of modern macroeconomics.\n\nAs of 2026, the rise of 'Decentralized Settlement Layers' (DSLs) has offered a theoretical escape from the Triffin Dilemma. By using a non-sovereign digital asset as the primary medium of exchange between central banks, no single nation is forced into a structural deficit. However, the 'Volatility Barrier' remains. Sovereign states are hesitant to peg their economic stability to assets that lack a 'Lender of Last Resort.' Furthermore, the transition to a DSL-based system would necessitate a 'Grand Revaluation' of all national debts, a process that historically has only occurred through conflict or systemic collapse. The dilemma is no longer just about liquidity; it is about the 'Sovereignty-Stability' trade-off."
          }
        },
        {
          id: 5,
          questionRange: [251, 256],
          type: 'PASSAGE',
          title: "Orbital Debris and the Kessler Syndrome",
          data: {
            title: "The Ablation Point of Low Earth Orbit",
            text: "Low Earth Orbit (LEO) is currently approaching a 'Critical Mass' of orbital debris. The 'Kessler Syndrome,' proposed in 1978, describes a scenario where the density of objects in LEO is high enough that a single collision triggers a cascade of further collisions. Each impact generates 'Fragmentary Shrapnel,' which travels at hyper-velocities, turning a single defunct satellite into a cloud of thousands of 'Lethal Projectiles.' In 2026, the 'Ablation Point' is estimated to be imminent. Once triggered, the cascade would render LEO unusable for generations, effectively 'grounding' humanity and destroying the global telecommunications infrastructure.\n\nThe legal challenge of 'Active Debris Removal' (ADR) is rooted in 'Space Sovereignty.' Under current international treaties, an object in space remains the property of the launching nation in perpetuity. Therefore, a private salvage company attempting to remove a piece of Russian or Chinese debris without explicit consent could be viewed as an 'Act of Aggression' or 'Orbital Espionage.' Furthermore, the technology required for ADR—such as robotic arms or high-powered lasers—is 'Dual-Use'; the same tool that captures a piece of junk can also disable a functional military satellite. This 'Security Dilemma' has stalled international cooperation, even as the 'Collision Probability' increases exponentially."
          }
        }
      ]
    },
    questions: [
      {
        id: 235,
        text: "According to the passage, the 'Liar’s Dividend' is a direct result of:",
        options: ["The inability of prosecutors to prove guilt beyond a reasonable doubt in the 2026 era.", "The tactical use of general skepticism toward digital media to discredit genuine evidence.", "A mandatory requirement for all recording devices to include digital watermarking.", "The shift of the 'Probative Value' of video evidence to the defense."],
        answerIndex: 1,
        explanation: "The passage states it 'occurs when the mere existence of deepfake technology allows bad actors to dismiss authentic, incriminating evidence'."
      },
      {
        id: 236,
        text: "The author suggests that instructing a jury on AI manipulation:",
        options: ["Is a necessary step to ensure the 'Probative Value' of metadata.", "Leads to a disproportionate dismissal of valid evidence.", "Helps to bridge the 'Inference Gap' created by GANs.", "Is only effective if the video’s chain of custody is broken."],
        answerIndex: 1,
        explanation: "The text says once instructed, juries 'tend to discount the evidence even if its metadata is verified', implying valid evidence is unfairly dismissed."
      },
      {
        id: 237,
        text: "Which of the following best describes the 'tiered justice system' mentioned in the text?",
        options: ["A system where deepfakes are only used by wealthy defendants to avoid prosecution.", "A disparity in evidentiary credibility based on the technological sophistication of the device used.", "The legal gap between those who understand GANs and those who do not.", "The difference in how juries treat video evidence vs. eyewitness testimony."],
        answerIndex: 1,
        explanation: "The passage notes that a mandatory watermark creates a system where 'those who cannot afford encrypted hardware are subject to higher levels of scrutiny'."
      },
      {
        id: 238,
        text: "True, False, or Can't Tell: Digital watermarking is currently a legal requirement for all consumer electronics in 2026.",
        options: ["True", "False", "Can't Tell"],
        answerIndex: 1,
        explanation: "The text mentions critics of judicial reforms argue against implementing it, suggesting it is not yet mandatory."
      },
      {
        id: 239,
        text: "Based on the passage, why is the 'F3 generation' significant in TEI research?",
        options: ["It is the generation where DNA Methylation is most likely to be erased.", "It allows researchers to eliminate the possibility that the fetus was directly exposed to the initial stressor.", "It represents the point where Lamarckian theory becomes more valid than Darwinism.", "It is the stage where 'niche construction' is replaced by 'hard-coding'."],
        answerIndex: 1,
        explanation: "The passage explicitly states F3 is needed to 'rule out direct maternal-fetal exposure'."
      },
      {
        id: 240,
        text: "The author implies that the 'Reprogramming Event':",
        options: ["Is a failure in the biological system that allows for Lamarckian inheritance.", "Acts as a barrier that prevents most acquired epigenetic marks from being inherited.", "Is the primary mechanism through which 'niche construction' occurs.", "Ensures that all chemical marks on the germline are preserved for the next generation."],
        answerIndex: 1,
        explanation: "The text describes it as a process where 'the vast majority of epigenetic marks are erased'."
      },
      {
        id: 241,
        text: "Which of the following, if true, would most weaken the 'Skeptics' argument mentioned in the second paragraph?",
        options: ["A study showing that cultural transmission is more influential than biological inheritance in humans.", "Evidence that certain loci in the genome are shielded from the 'Reprogramming Event' across multiple generations.", "Proof that 'niche construction' can trigger DNA Methylation in newborns.", "The discovery that Histone Acetylation is less stable than DNA Methylation."],
        answerIndex: 1,
        explanation: "Shielding from reprogramming would prove biological inheritance over niche construction, directly opposing the skeptics."
      },
      {
        id: 242,
        text: "The 'Lamarckian Revival' is described as controversial primarily because:",
        options: ["It suggests that natural selection is an invalid theory for modern biology.", "It challenges the long-held belief that only DNA sequences transmit hereditary information.", "It prioritizes 'niche construction' over 'soft inheritance'.", "It relies on chemical marks that are erased during every reproductive cycle."],
        answerIndex: 1,
        explanation: "It challenges the 'central dogma' that excludes 'soft inheritance' or information flow outside of the standard DNA sequence."
      },
      {
        id: 243,
        text: "The 'Hedonic Paradox' mentioned in the passage suggests that:",
        options: ["Users prefer the 'feeling' of doing things over the 'actual doing'.", "Higher-quality simulations lead to a decreased satisfaction with real life.", "Chronic pain patients are the only ones who can truly benefit from NR.", "The 'Authenticity Quotient' is impossible to measure in a subjective reality."],
        answerIndex: 1,
        explanation: "The text says as authenticity increases, users rejection of the physical world as 'drab' increases."
      },
      {
        id: 244,
        text: "According to the text, 'Post-Session Dysphoria' is caused by:",
        options: ["A biological rejection of the neural interface by the cortex.", "The realization that the user’s achievements in NR were not 'actually done'.", "A perceived lack of vibrancy in the physical world compared to the NR simulation.", "The state’s intervention in the user’s 'Cognitive Liberty'."],
        answerIndex: 2,
        explanation: "It is 'characterized by a rejection of the physical world as drab and biologically limited'."
      },
      {
        id: 245,
        text: "The 'Solipsistic Trap' refers to a state where:",
        options: ["Bravery is reduced to a neuro-chemical commodity.", "Users can no longer distinguish between their own mind and the NR interface.", "Individuals prioritize their customized internal reality over the shared social world.", "The 'Experience Machine' fails to bypass the sensory organs correctly."],
        answerIndex: 2,
        explanation: "It is where 'shared objective reality (and the social contracts within it) becomes irrelevant'."
      },
      {
        id: 246,
        text: "True, False, or Can't Tell: Robert Nozick’s original thought experiment predicted that humans would eventually prefer NR over reality.",
        options: ["True", "False", "Can't Tell"],
        answerIndex: 1,
        explanation: "The text says it was designed to prove humans value 'actually doing things', implying they would NOT prefer simulated feelings."
      },
      {
        id: 247,
        text: "The 'Triffin Dilemma' necessitates that a reserve-currency nation:",
        options: ["Maintain a consistent trade surplus to ensure global liquidity.", "Balance short-term international goals with long-term domestic stability.", "Run a trade deficit to supply the global market with its currency.", "Collapse its reserve asset status to avoid the 'Volatility Barrier'."],
        answerIndex: 2,
        explanation: "The nation 'must run a persistent trade deficit, as it needs to export more currency than it imports in goods'."
      },
      {
        id: 248,
        text: "Why are 'Decentralized Settlement Layers' (DSLs) considered a solution to the Dilemma?",
        options: ["They allow nations to avoid structural deficits by using a non-sovereign asset.", "They provide a 'Lender of Last Resort' for sovereign states.", "They eliminate the 'Volatility Barrier' in international trade.", "They prevent the 'Grand Revaluation' of national debts."],
        answerIndex: 0,
        explanation: "By using non-sovereign assets, 'no single nation is forced into a structural deficit'."
      },
      {
        id: 249,
        text: "The 'Liquidity vs. Confidence' paradox suggests that:",
        options: ["Too much liquidity in the global system inevitably leads to high volatility.", "The more currency a reserve nation exports, the less people trust its value.", "Confidence in a currency is only possible if the nation runs a trade surplus.", "Central banks must choose between domestic liquidity and international sovereignty."],
        answerIndex: 1,
        explanation: "Deficits provide liquidity but eventually 'undermine confidence in the currency’s value'."
      },
      {
        id: 250,
        text: "True, False, or Can't Tell: A 'Grand Revaluation' of national debts has never occurred without a war or systemic collapse.",
        options: ["True", "False", "Can't Tell"],
        answerIndex: 0,
        explanation: "The text states this process 'historically has only occurred through conflict or systemic collapse'."
      },
      {
        id: 251,
        text: "The 'Kessler Syndrome' is characterized by:",
        options: ["The inability of private companies to perform 'Active Debris Removal'.", "A self-sustaining chain reaction of collisions in space.", "The violation of 'Space Sovereignty' through 'Orbital Espionage'.", "The intentional destruction of telecommunications satellites by 'Fragmentary Shrapnel'."],
        answerIndex: 1,
        explanation: "It describes a scenario where 'a single collision triggers a cascade of further collisions'."
      },
      {
        id: 252,
        text: "Why is 'Active Debris Removal' (ADR) legally complicated?",
        options: ["Debris is technically no longer the property of the nation that launched it.", "The technology for removal is indistinguishable from anti-satellite weaponry.", "It is currently impossible to track 'Lethal Projectiles' at hyper-velocities.", "International treaties explicitly forbid the removal of debris from LEO."],
        answerIndex: 1,
        explanation: "The technology is 'dual-use'; tools for capturing junk can disable functional military satellites."
      },
      {
        id: 253,
        text: "The 'Security Dilemma' mentioned in the text refers to:",
        options: ["The fear that a collision cascade will destroy military satellites.", "The tension between the need for debris removal and the military risk of the technology used.", "The conflict between private salvage companies and national space agencies.", "The risk of 'Space Sovereignty' being ignored by rogue nations."],
        answerIndex: 1,
        explanation: "It is linked to the 'dual-use' nature of ADR technology and has stalled international cooperation."
      },
      {
        id: 254,
        text: "According to the passage, if the 'Ablation Point' is reached:",
        options: ["Private companies will be granted 'Cognitive Liberty' to clean the orbit.", "Humanity will be unable to use Low Earth Orbit for an extended period.", "Only military satellites with 'Dual-Use' technology will survive.", "The 'Lethal Projectiles' will be forced into a 'Grand Revaluation'."],
        answerIndex: 1,
        explanation: "The cascade would 'render LEO unusable for generations'."
      },
      {
        id: 255,
        text: "True, False, or Can't Tell: The Kessler Syndrome was first proven to have occurred in 2026.",
        options: ["True", "False", "Can't Tell"],
        answerIndex: 1,
        explanation: "The syndrome was proposed in 1978 and its 'Ablation Point' is 'estimated to be imminent' in 2026, but it hasn't necessarily occurred yet."
      },
      {
        id: 256,
        text: "Which of the following best summarizes the author's tone regarding the 'Kessler Syndrome'?",
        options: ["Optimistic that 'Decentralized Settlement Layers' will provide a solution.", "Concerned that geopolitical friction is preventing a necessary environmental intervention.", "Skeptical that the 'Ablation Point' is actually imminent.", "Indifferent to the 'Sovereignty-Stability' trade-off."],
        answerIndex: 1,
        explanation: "The author highlights how legal/security dilemmas and sovereignty stall 'necessary international cooperation'."
      }
    ]
  }
];
