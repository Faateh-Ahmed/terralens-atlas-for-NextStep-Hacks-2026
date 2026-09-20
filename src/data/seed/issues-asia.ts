import type { IssueSeed } from "./format.ts";

/** Issues for detailed locations in South, East and Southeast Asia. */
export const asiaIssues: IssueSeed[] = [
  {
    location: "Northern Pakistan / Gilgit-Baltistan",
    category: "climate",
    title: "Glacier change and outburst floods in Gilgit-Baltistan",
    severity: "high",
    summary:
      "Warming is changing high-mountain glaciers and increasing the hazard from glacial lake outburst floods.",
    description:
      "Gilgit-Baltistan holds thousands of glaciers that supply meltwater to the Indus river system. Across the wider Hindu Kush Himalaya, scientific assessments document widespread glacier mass loss as temperatures rise, although parts of the Karakoram have shown comparatively stable or anomalous glacier behaviour. As glaciers retreat, meltwater can pool behind unstable moraine or ice dams. A sudden failure — a glacial lake outburst flood (GLOF) — can send a destructive surge down narrow valleys where villages, roads, bridges and farmland are concentrated. Landslides and surging glaciers add further hazards, as the 2010 Attabad landslide, which dammed the Hunza River and created a lake, demonstrated.",
    causes: [
      [
        "Rising temperatures in high mountains",
        "Assessments by ICIMOD and the IPCC indicate that high-mountain regions are warming, accelerating ice loss in many basins.",
      ],
      [
        "Formation and growth of glacial lakes",
        "Retreating ice leaves depressions and moraine-dammed lakes that can grow and become unstable.",
      ],
      [
        "Heatwaves and intense rainfall",
        "Spring and summer heat spikes accelerate melt, while intense rain can trigger debris flows and lake overtopping.",
      ],
      [
        "Settlement in exposed valley floors",
        "Limited flat land concentrates homes, roads and fields along rivers in the flood path.",
      ],
    ],
    impacts: [
      [
        "Loss of homes, bridges and roads",
        "Outburst floods and debris flows can cut off remote communities, including sections of the Karakoram Highway.",
      ],
      [
        "Threats to lives and livelihoods",
        "Farmland, orchards, irrigation channels and livestock in valley floors are vulnerable to sudden floods.",
      ],
      [
        "Long-term water security for the Indus basin",
        "Changes in glacier melt affect the timing and reliability of flows that downstream agriculture and hydropower depend on.",
      ],
      [
        "Displacement",
        "Communities may be temporarily or permanently displaced after major hazard events.",
      ],
    ],
    solutions: [
      [
        "Community-based early warning systems",
        "Monitoring stations, sirens and trained local volunteers give downstream villages time to evacuate, as supported by the UNDP-backed GLOF projects in Pakistan.",
        "Reduces loss of life when a flood occurs; does not reduce the hazard itself.",
      ],
      [
        "Glacial lake monitoring",
        "Satellite and field monitoring identifies growing or potentially dangerous lakes for closer attention.",
        "Improves anticipation and prioritisation of risk-reduction work.",
      ],
      [
        "Protective infrastructure and safer siting",
        "Gabion walls, check dams, spillways and hazard mapping for new construction.",
        "Lowers damage in exposed locations and steers development away from the highest-risk ground.",
      ],
      [
        "Regional data sharing",
        "Cooperation across the Hindu Kush Himalaya on glacier and hydrological data.",
        "Supports better long-term water planning for downstream populations.",
      ],
    ],
    indicators: [
      {
        name: "Hazard type",
        value: "Glacial lake outburst floods (GLOFs)",
        description:
          "Qualitative indicator: sudden releases of water from glacial lakes are a recognised and monitored hazard in the region.",
      },
      {
        name: "Notable event",
        value: "Attabad landslide and lake",
        year: 2010,
        description:
          "A landslide dammed the Hunza River, forming a lake that submerged villages and a stretch of the Karakoram Highway.",
      },
    ],
    sources: [
      [
        "The Hindu Kush Himalaya Assessment and cryosphere research",
        "International Centre for Integrated Mountain Development (ICIMOD)",
        "https://www.icimod.org/",
      ],
      [
        "Special Report on the Ocean and Cryosphere in a Changing Climate",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/srocc/",
        "2019-09-25",
      ],
      [
        "UNDP in Pakistan (GLOF risk reduction projects)",
        "United Nations Development Programme",
        "https://www.undp.org/pakistan",
      ],
      [
        "Ministry of Climate Change and Environmental Coordination",
        "Government of Pakistan",
        "https://www.mocc.gov.pk/",
      ],
    ],
  },
  {
    location: "Mumbai",
    category: "water",
    title: "Monsoon flooding in Mumbai",
    severity: "high",
    summary:
      "Intense monsoon rainfall, high tides and constrained drainage cause recurrent flooding across the city.",
    description:
      "Mumbai receives most of its annual rainfall during the southwest monsoon. When very heavy rain coincides with high tide, outfalls into the sea can be blocked, and water backs up through an ageing drainage network. Much of the city sits on land reclaimed from the sea and from the channels that once separated its islands, and natural drainage paths such as creeks, rivers and mangrove areas have been narrowed or built over. The extreme rainfall of 26 July 2005 caused catastrophic flooding and loss of life, and prompted major reviews of drainage and flood preparedness.",
    causes: [
      [
        "Extreme monsoon rainfall",
        "Short, intense bursts of rain can exceed the capacity of storm drains designed for lower intensities.",
      ],
      [
        "Tidal backwater effects",
        "High tides reduce or block discharge from drains into the Arabian Sea.",
      ],
      [
        "Encroachment on rivers and creeks",
        "Construction along the Mithi River and other channels reduces their capacity to carry floodwater.",
      ],
      [
        "Solid waste in drains",
        "Plastic and other waste block drains and culverts, worsening local waterlogging.",
      ],
    ],
    impacts: [
      [
        "Disruption to transport and work",
        "Suburban rail and road networks can be halted, affecting millions of daily commuters.",
      ],
      [
        "Risk to life and property",
        "Flooding, building collapses and landslides during heavy rain cause deaths and damage, especially in informal settlements.",
      ],
      [
        "Waterborne and vector-borne disease",
        "Floodwater contact and standing water are associated with leptospirosis and other disease risks after heavy rain.",
      ],
      [
        "Economic losses",
        "Business closures and damaged goods impose costs on households and firms.",
      ],
    ],
    solutions: [
      [
        "Storm drain upgrades and pumping stations",
        "Widening drains and building large pumping stations at outfalls to discharge water during high tide.",
        "Reduces the duration and extent of waterlogging in served areas.",
      ],
      [
        "Protecting mangroves and river corridors",
        "Legal protection and restoration of mangroves and clearing encroachments along the Mithi River.",
        "Restores natural drainage and storage capacity and buffers coastal flooding.",
      ],
      [
        "Climate action planning and early warning",
        "The city's climate action plan and automated weather stations support forecasting and targeted response.",
        "Improves preparedness and prioritisation of investment.",
      ],
    ],
    indicators: [
      {
        name: "Landmark event",
        value: "26 July 2005 flood",
        year: 2005,
        description:
          "Record rainfall caused severe flooding across the metropolitan region and led to a major review of drainage infrastructure.",
      },
    ],
    sources: [
      [
        "Municipal Corporation of Greater Mumbai",
        "Brihanmumbai Municipal Corporation",
        "https://www.mcgm.gov.in/",
      ],
      ["India Meteorological Department", "Government of India", "https://mausam.imd.gov.in/"],
      [
        "Climate Change 2022: Impacts, Adaptation and Vulnerability",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/wg2/",
        "2022-02-28",
      ],
    ],
  },
  {
    location: "Mumbai",
    category: "nature",
    title: "Mangrove loss and protection in Mumbai",
    severity: "moderate",
    summary:
      "Mangroves that buffer the coast and creeks have been reduced by reclamation, but are now legally protected.",
    description:
      "Mangrove forests line Mumbai's creeks, including Thane Creek, and provide flood buffering, nursery habitat for fish and roosting and feeding areas for birds, including migratory flamingos. Historic land reclamation and infrastructure development reduced mangrove extent. Court orders and state protection have since restricted clearing, and Maharashtra established a dedicated mangrove conservation unit. Pressures remain from infrastructure projects, dumping of debris and waste, and pollution from untreated sewage.",
    causes: [
      [
        "Land reclamation",
        "Filling of intertidal land for housing, roads and industry removed mangrove habitat.",
      ],
      [
        "Debris dumping and encroachment",
        "Construction debris and waste are dumped into mangrove areas, smothering roots.",
      ],
      ["Water pollution", "Untreated sewage and industrial effluent degrade creek water quality."],
    ],
    impacts: [
      [
        "Reduced flood buffering",
        "Loss of mangroves removes a natural barrier that slows tidal water and stores floodwater.",
      ],
      [
        "Habitat loss",
        "Fish nurseries and bird habitats shrink, affecting biodiversity and small-scale fisheries.",
      ],
      [
        "Loss of carbon storage",
        "Mangrove soils store significant amounts of carbon, which can be released when they are cleared.",
      ],
    ],
    solutions: [
      [
        "Legal protection of mangrove land",
        "Court-mandated protection and transfer of mangrove land to the forest department.",
        "Slows or halts clearing where enforcement is effective.",
      ],
      [
        "Mangrove restoration and monitoring",
        "Replanting, debris removal and satellite monitoring by the state mangrove unit.",
        "Recovers habitat and flood-buffering capacity over time.",
      ],
      [
        "Protected sanctuaries",
        "The Thane Creek Flamingo Sanctuary protects a significant area of creek habitat.",
        "Secures biodiversity and supports public awareness and ecotourism.",
      ],
    ],
    sources: [
      [
        "Mangrove Cell, Maharashtra Forest Department",
        "Government of Maharashtra",
        "https://mangroves.maharashtra.gov.in/",
      ],
      [
        "Mangroves: Ocean and climate",
        "International Union for Conservation of Nature",
        "https://www.iucn.org/",
      ],
    ],
  },
  {
    location: "Bengaluru",
    category: "water",
    title: "Lake loss and water stress in Bengaluru",
    severity: "high",
    summary:
      "A city far from major rivers depends on distant pumped water and depleted groundwater, while many of its historic lakes have been lost or polluted.",
    description:
      "Bengaluru historically relied on a network of interconnected man-made lakes (tanks) that stored monsoon rainfall. Rapid urban growth has seen many lakes encroached on, disconnected or filled, while others receive untreated sewage — Bellandur Lake became widely known for toxic foam and fires. Municipal supply is pumped from the Cauvery River, far away and at a much lower elevation, and does not reach all parts of the city, so many households and businesses rely on borewells and private water tankers. A weak monsoon preceding 2024 led to acute shortages across parts of the city in early 2024.",
    causes: [
      [
        "Rapid and unplanned urban expansion",
        "Growth outpaced water, sewerage and drainage infrastructure, especially in peripheral areas.",
      ],
      [
        "Encroachment on lakes and their channels",
        "Building on lake beds and stormwater channels breaks the cascade that once connected the lakes.",
      ],
      ["Untreated sewage", "Wastewater entering lakes causes eutrophication, foaming and odour."],
      [
        "Groundwater over-extraction",
        "Heavy reliance on borewells lowers water tables where recharge is limited.",
      ],
    ],
    impacts: [
      [
        "Water shortages and costs",
        "Households dependent on tankers face higher costs and unreliable supply during dry periods.",
      ],
      [
        "Urban flooding",
        "Loss of lakes and blocked channels reduces the city's capacity to absorb heavy rainfall.",
      ],
      [
        "Degraded ecosystems and public health risks",
        "Polluted lakes lose biodiversity and create health and nuisance risks for nearby residents.",
      ],
    ],
    solutions: [
      [
        "Lake rejuvenation",
        "Desilting, sewage diversion, restored inlets and outlets and community stewardship of lakes.",
        "Can restore storage, recharge and ecological function where sustained.",
      ],
      [
        "Treated wastewater reuse",
        "Using treated wastewater to fill lakes and recharge groundwater in surrounding districts.",
        "Reduces pressure on freshwater and supports groundwater levels.",
      ],
      [
        "Rainwater harvesting requirements",
        "Mandatory rooftop rainwater harvesting for buildings above a certain size.",
        "Increases local recharge and reduces peak runoff.",
      ],
    ],
    sources: [
      [
        "Bangalore Water Supply and Sewerage Board",
        "Government of Karnataka",
        "https://bwssb.karnataka.gov.in/",
      ],
      ["Central Ground Water Board", "Government of India", "https://cgwb.gov.in/"],
      ["Bruhat Bengaluru Mahanagara Palike", "Government of Karnataka", "https://bbmp.gov.in/"],
    ],
  },
  {
    location: "Beijing",
    category: "air",
    title: "Beijing's air pollution control",
    severity: "moderate",
    summary:
      "Severe winter smog prompted sustained national and regional action, and fine particulate levels have fallen substantially since 2013.",
    description:
      "In the early 2010s Beijing experienced extreme winter smog episodes driven by coal heating, industry, traffic and regional pollution across the North China Plain. China's 2013 Air Pollution Prevention and Control Action Plan and subsequent measures targeted coal use, industrial emissions and vehicles across Beijing, Tianjin and Hebei. The UN Environment Programme's 2019 review of two decades of air pollution control in Beijing documented significant reductions in fine particulate concentrations. Levels remain above the World Health Organization's health-based guideline, and regional coordination remains essential.",
    causes: [
      [
        "Coal combustion for heating and industry",
        "Coal boilers and household coal stoves were major winter emission sources.",
      ],
      [
        "Regional industrial emissions",
        "Heavy industry in surrounding provinces contributed pollution transported into the city.",
      ],
      [
        "Vehicle emissions",
        "A rapidly growing vehicle fleet emitted particulates and ozone precursors.",
      ],
      [
        "Winter meteorology",
        "Stagnant air and inversions trap pollutants over the North China Plain.",
      ],
    ],
    impacts: [
      [
        "Public health burden",
        "Long-term exposure to fine particulate matter is linked to heart and lung disease and premature death.",
      ],
      [
        "Disruption and emergency measures",
        "Red alerts triggered school closures, traffic restrictions and factory shutdowns.",
      ],
      [
        "Ozone remains a concern",
        "As particulate levels fell, summertime ground-level ozone became a growing focus.",
      ],
    ],
    solutions: [
      [
        "Coal-to-gas and coal-to-electricity conversion",
        "Replacing coal boilers and household stoves with gas and electric heating.",
        "Large reductions in winter particulate and sulphur dioxide emissions.",
      ],
      [
        "Regional joint control",
        "Coordinated standards and enforcement across Beijing, Tianjin and Hebei.",
        "Addresses the regional share of pollution that local action alone cannot reach.",
      ],
      [
        "Vehicle standards and electrification",
        "Stricter emissions standards, licence plate controls and support for electric vehicles and public transport.",
        "Reduces transport-related emissions over time.",
      ],
      [
        "Industrial relocation and upgrading",
        "Closing or relocating heavy polluting facilities and upgrading emission controls.",
        "Cuts a major source category; may shift some impacts elsewhere.",
      ],
    ],
    indicators: [
      {
        name: "Policy milestone",
        value: "Air Pollution Prevention and Control Action Plan",
        year: 2013,
        description:
          "National action plan that set targets for particulate reductions in key regions including Beijing-Tianjin-Hebei.",
      },
      {
        name: "WHO annual PM2.5 guideline",
        value: "5",
        unit: "µg/m³",
        year: 2021,
        description:
          "Beijing's annual concentrations have declined substantially but remain above this guideline; consult official monitoring for current values.",
      },
    ],
    sources: [
      [
        "A Review of 20 Years' Air Pollution Control in Beijing (publisher site)",
        "UN Environment Programme",
        "https://www.unep.org/",
        "2019-03-01",
      ],
      [
        "Ministry of Ecology and Environment",
        "People's Republic of China",
        "https://english.mee.gov.cn/",
      ],
      [
        "WHO global air quality guidelines",
        "World Health Organization",
        "https://www.who.int/publications/i/item/9789240034228",
        "2021-09-22",
      ],
    ],
  },
  {
    location: "Beijing",
    category: "water",
    title: "Water scarcity on the North China Plain",
    severity: "high",
    summary:
      "Beijing sits in one of the world's most water-stressed regions, with long-term groundwater decline and reliance on water transfers.",
    description:
      "The North China Plain supports a very large population and intensive agriculture with limited renewable water. Decades of groundwater pumping caused water tables to fall and land to subside in parts of the region. To supplement supply, China built the South-to-North Water Diversion Project, whose central route began delivering water from the Danjiangkou Reservoir to Beijing in 2014. Groundwater management and water pricing reforms aim to reduce over-extraction.",
    causes: [
      [
        "Low renewable water per person",
        "The region's rainfall and river flows are small relative to its population and economic activity.",
      ],
      [
        "Irrigated agriculture",
        "Wheat and maize irrigation has been a major driver of groundwater extraction across the plain.",
      ],
      [
        "Urban and industrial growth",
        "Rising demand from cities and industry adds to pressure on limited supplies.",
      ],
    ],
    impacts: [
      [
        "Groundwater decline",
        "Falling water tables increase pumping costs and threaten long-term availability.",
      ],
      [
        "Land subsidence",
        "Over-extraction contributes to ground sinking in parts of the region, damaging infrastructure.",
      ],
      [
        "Ecological stress on rivers and wetlands",
        "Reduced flows degrade river and wetland ecosystems.",
      ],
    ],
    solutions: [
      [
        "Inter-basin water transfer",
        "The South-to-North Water Diversion Project supplements Beijing's supply.",
        "Increases available supply and allows some groundwater recovery; involves large costs and impacts in source regions.",
      ],
      [
        "Groundwater extraction controls",
        "Well closures, extraction limits and recharge programmes.",
        "Helps stabilise water tables where enforced.",
      ],
      [
        "Water pricing and efficiency",
        "Tiered pricing, water-saving appliances and reclaimed water use for industry and landscaping.",
        "Reduces per-capita demand and freshwater use.",
      ],
    ],
    sources: [
      [
        "Water resources and AQUASTAT data",
        "Food and Agriculture Organization of the United Nations",
        "https://www.fao.org/aquastat/en/",
      ],
      ["Ministry of Water Resources", "People's Republic of China", "http://www.mwr.gov.cn/"],
    ],
  },
  {
    location: "Shanghai",
    category: "climate",
    title: "Subsidence, storm surge and sea level rise in Shanghai",
    severity: "high",
    summary:
      "A low-lying delta megacity faces compounding risk from typhoons, storm surge, river floods and rising seas.",
    description:
      "Shanghai lies on the flat alluvial plain of the Yangtze River delta, with much of the city only a few metres above sea level. Heavy groundwater extraction in the twentieth century caused significant land subsidence; the city has since restricted pumping and reinjected water into aquifers to slow sinking. Typhoons can combine storm surge, high astronomical tides and heavy rainfall, and the IPCC identifies large delta cities as particularly exposed to sea level rise. The city relies on extensive floodwalls along the Huangpu River and coastal seawalls, alongside a national 'sponge city' programme to manage rainfall.",
    causes: [
      [
        "Historical groundwater extraction",
        "Pumping compacted sediments beneath the city, lowering ground levels.",
      ],
      [
        "Delta setting and low elevation",
        "Soft, compressible sediments and low elevation increase exposure to water from sea and rivers.",
      ],
      [
        "Typhoons and extreme rainfall",
        "Tropical cyclones bring surge and heavy rain, sometimes coinciding with high tides.",
      ],
      [
        "Global sea level rise",
        "Rising mean sea level raises the baseline from which storm surges occur.",
      ],
    ],
    impacts: [
      [
        "Flood risk to dense infrastructure",
        "Metro systems, ports and high-value districts are exposed to flooding.",
      ],
      [
        "Salt intrusion into water supply",
        "Low river flows and high tides can push saltwater up the Yangtze estuary toward water intakes.",
      ],
      [
        "Rising costs of defence",
        "Floodwalls and pumping capacity must be raised and maintained over time.",
      ],
    ],
    solutions: [
      [
        "Groundwater controls and artificial recharge",
        "Strict limits on pumping and reinjection of water into aquifers.",
        "Has substantially slowed subsidence rates compared with the mid-twentieth century.",
      ],
      [
        "Flood defence upgrades",
        "Raising and strengthening floodwalls and seawalls along the Huangpu and coast.",
        "Maintains protection standards as risks change.",
      ],
      [
        "Sponge city measures",
        "Permeable surfaces, green space and storage to absorb and slow rainfall.",
        "Reduces surface flooding from intense rainfall.",
      ],
      [
        "Reservoirs in the estuary",
        "Estuarine reservoirs such as Qingcaosha store freshwater and protect supply from saltwater intrusion.",
        "Improves water supply resilience during salt tide events.",
      ],
    ],
    sources: [
      [
        "Special Report on the Ocean and Cryosphere in a Changing Climate",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/srocc/",
        "2019-09-25",
      ],
      [
        "Shanghai Municipal People's Government",
        "Shanghai Municipal Government",
        "https://english.shanghai.gov.cn/",
      ],
    ],
  },
  {
    location: "Dhaka",
    category: "air",
    title: "Air pollution in Dhaka",
    severity: "critical",
    summary:
      "Brick kilns, traffic, construction dust and regional pollution make dry-season air quality in Dhaka among the poorest of any major city.",
    description:
      "Dhaka's air quality deteriorates sharply during the dry season, roughly November to March, when brick kilns around the city operate and rainfall no longer washes particles from the air. The World Bank and Bangladesh's Department of Environment identify brick kilns, vehicles, construction and road dust, and industrial emissions as major sources, with transboundary pollution across the Indo-Gangetic Plain also contributing. Fine particulate concentrations are documented far above WHO guideline levels.",
    causes: [
      [
        "Brick kilns",
        "Thousands of kilns around Dhaka burn coal and other fuels, particularly in older, less efficient designs.",
      ],
      [
        "Vehicle emissions",
        "Congested traffic and older diesel vehicles emit particulates and nitrogen oxides.",
      ],
      [
        "Construction and road dust",
        "Large-scale construction and unpaved or poorly maintained roads generate coarse and fine dust.",
      ],
      [
        "Transboundary pollution",
        "Regional pollution across the Indo-Gangetic Plain is carried into Bangladesh in winter.",
      ],
    ],
    impacts: [
      [
        "Respiratory and cardiovascular disease",
        "Exposure to fine particulates is a leading environmental health risk in Bangladesh.",
      ],
      [
        "Health risks to children",
        "Children are particularly vulnerable to impaired lung development and respiratory infection.",
      ],
      [
        "Economic costs",
        "Illness and premature deaths reduce productivity and increase health spending.",
      ],
    ],
    solutions: [
      [
        "Kiln modernisation",
        "Replacing traditional kilns with cleaner technologies and promoting alternative building materials such as hollow blocks.",
        "Reduces a leading dry-season emission source.",
      ],
      [
        "Dust control on construction sites",
        "Covering materials, water spraying and enforcement of site rules.",
        "Lowers local particulate levels near construction.",
      ],
      [
        "Vehicle and fuel standards",
        "Phasing out older vehicles, improving fuel quality and expanding mass transit such as the Dhaka Metro Rail.",
        "Reduces transport emissions over time.",
      ],
      [
        "Regional cooperation",
        "Collaboration across South Asian airsheds on emissions and monitoring.",
        "Addresses the transboundary share of pollution.",
      ],
    ],
    indicators: [
      {
        name: "Peak season",
        value: "Dry season (roughly November to March)",
        description:
          "Qualitative indicator: brick kiln operation and lack of rain drive seasonal peaks.",
      },
      {
        name: "WHO annual PM2.5 guideline",
        value: "5",
        unit: "µg/m³",
        year: 2021,
        description:
          "Dhaka's monitored concentrations are documented as many times this guideline; consult official monitoring for current values.",
      },
    ],
    sources: [
      [
        "Striving for Clean Air: Air Pollution and Public Health in South Asia (publisher site)",
        "World Bank",
        "https://www.worldbank.org/en/region/sar",
        "2022-12-14",
      ],
      ["Department of Environment", "Government of Bangladesh", "https://doe.gov.bd/"],
      [
        "Ambient (outdoor) air pollution fact sheet",
        "World Health Organization",
        "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health",
      ],
    ],
  },
  {
    location: "Dhaka",
    category: "water",
    title: "River pollution and waterlogging in Dhaka",
    severity: "high",
    summary:
      "The rivers around Dhaka are heavily polluted, and monsoon rain regularly floods streets where canals and wetlands have been lost.",
    description:
      "Dhaka is encircled by rivers including the Buriganga, Turag, Shitalakshya and Balu. Industrial effluent — historically from the Hazaribagh tannery district — together with untreated sewage and solid waste, has severely degraded water quality. Tanneries were relocated to an industrial estate at Savar from 2017, but pollution concerns there and in the rivers persist. Within the city, the loss of canals, ponds and low-lying wetlands to development reduces drainage, so heavy monsoon rain causes widespread waterlogging.",
    causes: [
      [
        "Industrial effluent",
        "Tanneries, dyeing and textile factories discharge chemically loaded wastewater, not all of which is treated.",
      ],
      [
        "Untreated sewage",
        "Much of the city's wastewater reaches rivers without adequate treatment.",
      ],
      [
        "Loss of canals and wetlands",
        "Filling and encroachment of drainage canals and retention areas reduce the city's capacity to drain rainwater.",
      ],
    ],
    impacts: [
      ["Degraded river ecosystems", "Low dissolved oxygen and toxic pollutants harm aquatic life."],
      ["Health risks", "Communities using river water face exposure to pathogens and chemicals."],
      ["Monsoon disruption", "Waterlogging disrupts transport and damages homes and businesses."],
    ],
    solutions: [
      [
        "Central effluent treatment",
        "Operating and enforcing effective central effluent treatment at industrial estates.",
        "Reduces industrial pollution loads when properly run.",
      ],
      [
        "Canal recovery and drainage upgrades",
        "Removing encroachments and restoring canals, with improved pumping.",
        "Restores drainage capacity and reduces waterlogging.",
      ],
      [
        "Sewage treatment expansion",
        "New wastewater treatment plants serving the city.",
        "Lowers organic and pathogen loads entering rivers.",
      ],
    ],
    sources: [
      ["Department of Environment", "Government of Bangladesh", "https://doe.gov.bd/"],
      [
        "Bangladesh Water Development Board",
        "Government of Bangladesh",
        "https://www.bwdb.gov.bd/",
      ],
      ["World Bank in Bangladesh", "World Bank", "https://www.worldbank.org/en/country/bangladesh"],
    ],
  },
  {
    location: "Coastal Bangladesh / Khulna",
    category: "climate",
    title: "Cyclones, storm surge and salinity in coastal Bangladesh",
    severity: "critical",
    summary:
      "The southwest coast faces repeated cyclones and creeping salinity that affect farming, drinking water and health.",
    description:
      "The low-lying southwest of Bangladesh lies at the head of the Bay of Bengal, where tropical cyclones such as Sidr (2007), Aila (2009) and Amphan (2020) have brought destructive storm surges. Salinity in soil, rivers and groundwater has increased across much of the coastal zone, influenced by storm surges, reduced upstream freshwater flows in the dry season, shrimp aquaculture and sea level rise. Bangladesh has also become internationally recognised for reducing cyclone deaths dramatically through its early warning and shelter programme.",
    causes: [
      [
        "Tropical cyclones in the Bay of Bengal",
        "The funnel shape and shallow shelf of the northern Bay amplify storm surges.",
      ],
      [
        "Reduced dry-season freshwater flow",
        "Lower upstream flows allow saltwater to intrude further inland.",
      ],
      [
        "Sea level rise and subsidence",
        "Relative sea level rise increases the reach of tides and surges.",
      ],
      [
        "Land use change",
        "Brackish-water shrimp farming can introduce salt into formerly freshwater land.",
      ],
    ],
    impacts: [
      [
        "Loss of crops and livelihoods",
        "Saline soils reduce rice yields and limit the crops that can be grown.",
      ],
      [
        "Drinking water scarcity",
        "Saline groundwater and ponds leave many households dependent on rainwater, filtration or distant sources.",
      ],
      [
        "Health effects",
        "Research links high salt intake from drinking water to health risks, including during pregnancy.",
      ],
      [
        "Damage and displacement",
        "Cyclones destroy homes and embankments and can trigger migration.",
      ],
    ],
    solutions: [
      [
        "Cyclone Preparedness Programme",
        "Volunteer-led early warnings and a network of cyclone shelters.",
        "Has contributed to large reductions in cyclone mortality compared with past decades.",
      ],
      [
        "Salt-tolerant crops and adaptive farming",
        "Salt-tolerant rice varieties, crop switching and floating gardens.",
        "Maintains food production on affected land.",
      ],
      [
        "Drinking water solutions",
        "Rainwater harvesting, pond sand filters and managed aquifer recharge.",
        "Improves access to safe drinking water.",
      ],
      [
        "Embankment and polder management",
        "Maintaining embankments and managing sediment through tidal river management.",
        "Protects land from flooding and can help raise land levels.",
      ],
    ],
    indicators: [
      {
        name: "Notable cyclones",
        value: "Sidr (2007), Aila (2009), Amphan (2020)",
        description: "Major cyclones that caused significant damage in the southwest coastal zone.",
      },
    ],
    sources: [
      [
        "Climate Change 2022: Impacts, Adaptation and Vulnerability",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/wg2/",
        "2022-02-28",
      ],
      [
        "Bangladesh Water Development Board",
        "Government of Bangladesh",
        "https://www.bwdb.gov.bd/",
      ],
      ["World Bank in Bangladesh", "World Bank", "https://www.worldbank.org/en/country/bangladesh"],
    ],
  },
  {
    location: "Coastal Bangladesh / Khulna",
    category: "nature",
    title: "Pressure on the Sundarbans mangrove forest",
    severity: "high",
    summary:
      "The world's largest continuous mangrove forest faces salinity change, industrial pressure and extreme storms.",
    description:
      "The Sundarbans, shared by Bangladesh and India, is the largest contiguous mangrove forest in the world and a UNESCO World Heritage Site. It is habitat for the Bengal tiger and many other species and shields inland communities from cyclones. Changes in freshwater flow and salinity, cyclone damage, shipping accidents including oil spills, and industrial development nearby have raised conservation concerns, which UNESCO's World Heritage Committee has examined.",
    causes: [
      [
        "Salinity changes",
        "Reduced freshwater inflow alters the conditions mangrove species depend on.",
      ],
      ["Shipping and spills", "Vessel traffic through the forest has led to oil and cargo spills."],
      [
        "Nearby industrial development",
        "Power generation and industry near the forest raise pollution concerns.",
      ],
      ["Cyclone damage", "Strong storms damage large areas of forest."],
    ],
    impacts: [
      [
        "Biodiversity loss",
        "Species including the Bengal tiger and river dolphins are affected by habitat change.",
      ],
      [
        "Reduced coastal protection",
        "Degraded mangroves offer less buffering against storm surges.",
      ],
      [
        "Livelihood effects",
        "Fishers, honey collectors and others who depend on the forest face reduced resources.",
      ],
    ],
    solutions: [
      [
        "Protected area management",
        "Management under national law and World Heritage status, including anti-poaching work.",
        "Maintains core habitat and tiger populations.",
      ],
      [
        "Shipping controls",
        "Restricting and regulating vessel routes through the forest.",
        "Reduces spill and disturbance risk.",
      ],
      [
        "Community co-management",
        "Involving forest-dependent communities in management and alternative livelihoods.",
        "Reduces pressure while supporting incomes.",
      ],
    ],
    sources: [
      [
        "The Sundarbans — World Heritage List",
        "UNESCO World Heritage Centre",
        "https://whc.unesco.org/en/list/798/",
      ],
      ["Bangladesh Forest Department", "Government of Bangladesh", "https://bforest.gov.bd/"],
    ],
  },
  {
    location: "Kalimantan / Indonesian Borneo",
    category: "nature",
    title: "Deforestation and peatland fires in Kalimantan",
    severity: "critical",
    summary:
      "Forest conversion and drained peatlands have made Kalimantan a hotspot for biodiversity loss and fire-driven emissions.",
    description:
      "Kalimantan's lowland rainforests and deep tropical peat swamps store large amounts of carbon and support species such as the critically endangered Bornean orangutan. Conversion to oil palm and pulpwood plantations, mining and logging has cleared large areas. Draining peatlands dries them out, and in dry years, especially El Niño years such as 2015 and 2019, peat fires have burned extensively, producing transboundary haze across Southeast Asia and large carbon emissions. Indonesia has since introduced a moratorium on new permits in primary forest and peatland and established a peatland restoration agency.",
    causes: [
      ["Plantation expansion", "Conversion of forest for oil palm and pulpwood plantations."],
      ["Peatland drainage", "Canals lower the water table, leaving peat dry and flammable."],
      [
        "Fire used for land clearing",
        "Fire is used as a cheap way to clear land and can spread uncontrollably into peat.",
      ],
      [
        "Mining and logging",
        "Coal and mineral mining and timber extraction fragment and degrade forests.",
      ],
    ],
    impacts: [
      [
        "Habitat loss for orangutans and other species",
        "Fragmentation reduces populations of endangered wildlife.",
      ],
      [
        "Transboundary haze",
        "Smoke from peat fires affects air quality across Indonesia, Malaysia and Singapore.",
      ],
      [
        "Large carbon emissions",
        "Burning and decomposing peat releases carbon stored over thousands of years.",
      ],
      [
        "Impacts on Indigenous communities",
        "Dayak and other communities lose access to forests they rely on.",
      ],
    ],
    solutions: [
      [
        "Moratorium on new clearing permits",
        "A permanent moratorium on new licences in primary forest and peatland.",
        "Limits further legal conversion of the most carbon-rich areas.",
      ],
      [
        "Peatland rewetting and restoration",
        "Canal blocking, revegetation and fire prevention led by Indonesia's restoration agency.",
        "Reduces fire risk and emissions when water tables are raised.",
      ],
      [
        "Deforestation-free supply chains",
        "Company and market commitments and certification for palm oil.",
        "Reduces demand for products linked to new clearing.",
      ],
      [
        "Recognising community land rights",
        "Social forestry permits and customary forest recognition.",
        "Supports community-led forest protection.",
      ],
    ],
    indicators: [
      {
        name: "Major fire years",
        value: "2015 and 2019",
        description: "El Niño-related drought years with extensive peat fires and regional haze.",
      },
      {
        name: "Bornean orangutan status",
        value: "Critically Endangered",
        description: "IUCN Red List assessment for Pongo pygmaeus.",
      },
    ],
    sources: [
      ["Global Forest Watch", "World Resources Institute", "https://www.globalforestwatch.org/"],
      [
        "IUCN Red List of Threatened Species",
        "International Union for Conservation of Nature",
        "https://www.iucnredlist.org/",
      ],
      [
        "Center for International Forestry Research and World Agroforestry",
        "CIFOR-ICRAF",
        "https://www.cifor-icraf.org/",
      ],
      [
        "Ministry of Environment and Forestry",
        "Republic of Indonesia",
        "https://www.menlhk.go.id/",
      ],
    ],
  },
  {
    location: "Manila",
    category: "waste",
    title: "Plastic pollution in Manila's rivers and bay",
    severity: "high",
    summary:
      "Rivers flowing through Metro Manila carry large volumes of plastic waste into Manila Bay.",
    description:
      "A 2021 study in Science Advances estimated that a large share of global riverine plastic emissions come from many small and medium urban rivers, and identified the Philippines — and rivers in Metro Manila, including the Pasig — as major contributors. Single-use sachets, widely used for small quantities of household goods, are hard to collect and recycle. Gaps in waste collection, especially in informal settlements along waterways, mean waste enters rivers and drainage channels, worsening flooding and marine pollution.",
    causes: [
      [
        "Gaps in waste collection",
        "Informal settlements and dense neighbourhoods may lack regular collection.",
      ],
      [
        "Single-use sachets and packaging",
        "Low-value, multilayer packaging has little recycling value.",
      ],
      [
        "Proximity of settlements to waterways",
        "Homes built along rivers and creeks make direct discharge more likely.",
      ],
      ["Heavy rainfall", "Monsoon and typhoon rains flush waste from streets into rivers."],
    ],
    impacts: [
      ["Marine pollution", "Plastic entering Manila Bay harms marine life and fisheries."],
      ["Worsened urban flooding", "Waste clogs waterways and drains."],
      ["Health risks", "Waste accumulation creates breeding sites for disease vectors."],
    ],
    solutions: [
      [
        "Ecological Solid Waste Management Act implementation",
        "Segregation at source, barangay-level materials recovery facilities and collection.",
        "Increases capture of waste before it reaches waterways.",
      ],
      [
        "Extended producer responsibility",
        "The Philippines' 2022 EPR law requires large companies to recover plastic packaging.",
        "Shifts responsibility for packaging waste to producers.",
      ],
      [
        "River rehabilitation",
        "Clearing waterways, relocating at-risk settlements and building esplanades along the Pasig River.",
        "Reduces direct dumping and improves water quality.",
      ],
    ],
    indicators: [
      {
        name: "Research finding",
        value: "Philippines identified as a major source of riverine plastic emissions",
        year: 2021,
        description:
          "Meijer et al., Science Advances. Model-based estimates carry significant uncertainty.",
      },
    ],
    sources: [
      [
        "More than 1000 rivers account for 80% of global riverine plastic emissions into the ocean",
        "Science Advances (Meijer et al.)",
        "https://doi.org/10.1126/sciadv.aaz5803",
        "2021-04-30",
      ],
      [
        "Department of Environment and Natural Resources",
        "Republic of the Philippines",
        "https://www.denr.gov.ph/",
      ],
      [
        "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        "World Bank",
        "https://openknowledge.worldbank.org/handle/10986/30317",
        "2018-09-20",
      ],
    ],
  },
  {
    location: "Manila",
    category: "climate",
    title: "Typhoons and flooding in Metro Manila",
    severity: "high",
    summary:
      "Metro Manila is regularly affected by typhoons and monsoon rains that cause severe flooding.",
    description:
      "The Philippines lies in one of the most active tropical cyclone basins in the world. Metro Manila is built on low-lying land between Manila Bay and Laguna de Bay, and extreme rainfall events such as Tropical Storm Ketsana (Ondoy) in 2009 caused extensive flooding. Land subsidence in parts of the metropolitan area, linked to groundwater extraction, and waterway encroachment add to flood risk.",
    causes: [
      [
        "Tropical cyclones and monsoon rain",
        "Typhoons and enhanced southwest monsoon rains can deliver extreme rainfall.",
      ],
      [
        "Low-lying terrain",
        "Parts of the metro area lie close to sea level and around a large lake.",
      ],
      [
        "Encroachment and blocked drainage",
        "Settlements and waste in waterways reduce drainage capacity.",
      ],
      [
        "Land subsidence",
        "Groundwater extraction has contributed to sinking in some coastal areas.",
      ],
    ],
    impacts: [
      [
        "Loss of life and displacement",
        "Major floods displace large numbers of residents, especially in informal settlements.",
      ],
      ["Economic disruption", "Businesses, transport and schools are disrupted during floods."],
      ["Post-flood disease", "Leptospirosis and other diseases increase after flood exposure."],
    ],
    solutions: [
      [
        "Metro Manila Flood Management Project",
        "Modernising pumping stations and improving drainage with World Bank support.",
        "Reduces flood duration and depth in served areas.",
      ],
      [
        "Forecasting and early warning",
        "PAGASA forecasts and warning systems with local disaster response.",
        "Improves evacuation and preparedness.",
      ],
      [
        "Resettlement from high-risk waterways",
        "Relocating families from danger zones with attention to livelihoods.",
        "Reduces exposure when done with community participation.",
      ],
    ],
    sources: [
      [
        "Philippine Atmospheric, Geophysical and Astronomical Services Administration",
        "PAGASA",
        "https://www.pagasa.dost.gov.ph/",
      ],
      [
        "World Bank in the Philippines",
        "World Bank",
        "https://www.worldbank.org/en/country/philippines",
      ],
    ],
  },
  {
    location: "Palawan",
    category: "oceans",
    title: "Coral reefs and marine biodiversity in Palawan",
    severity: "moderate",
    summary:
      "Palawan's reefs and mangroves are rich in biodiversity but face pressure from warming, destructive fishing and tourism.",
    description:
      "Palawan lies at the edge of the Coral Triangle, the global centre of marine biodiversity. The Tubbataha Reefs Natural Park, a UNESCO World Heritage Site in the Sulu Sea, is a well-studied example of a well-protected, no-take reef. Elsewhere, reefs face pressure from marine heatwaves that cause coral bleaching, destructive fishing practices, sedimentation from land clearing and mining, and rapid tourism growth in destinations such as El Nido and Coron.",
    causes: [
      ["Marine heatwaves", "Elevated sea temperatures cause coral bleaching."],
      ["Destructive fishing", "Blast and cyanide fishing damage reef structure and wildlife."],
      ["Sediment and runoff", "Land clearing and mining send sediment onto nearshore reefs."],
      ["Tourism pressure", "Boat traffic, anchoring and wastewater affect popular sites."],
    ],
    impacts: [
      [
        "Coral bleaching and mortality",
        "Repeated heat stress can kill corals and reduce reef complexity.",
      ],
      ["Fisheries decline", "Damaged reefs support fewer fish, affecting food security."],
      [
        "Loss of tourism value",
        "Degraded reefs reduce the attraction of dive and island destinations.",
      ],
    ],
    solutions: [
      [
        "Marine protected areas",
        "Well-enforced no-take zones such as Tubbataha.",
        "Supports fish biomass and reef resilience.",
      ],
      [
        "Palawan's Strategic Environmental Plan",
        "A province-wide law establishing an environmentally critical areas network.",
        "Provides a framework for zoning and conservation.",
      ],
      [
        "Tourism carrying capacity limits",
        "Visitor caps, wastewater rules and managed access at popular sites.",
        "Reduces local pressure on reefs and lagoons.",
      ],
    ],
    sources: [
      [
        "Tubbataha Reefs Natural Park — World Heritage List",
        "UNESCO World Heritage Centre",
        "https://whc.unesco.org/en/list/653/",
      ],
      [
        "Palawan Council for Sustainable Development",
        "Government of the Philippines",
        "https://pcsd.gov.ph/",
      ],
      ["Coral Reef Watch", "NOAA", "https://coralreefwatch.noaa.gov/"],
    ],
  },
  {
    location: "Tokyo",
    category: "climate",
    title: "Urban heat in Tokyo",
    severity: "high",
    summary:
      "The combination of global warming and a strong urban heat island makes Tokyo's summers increasingly dangerous.",
    description:
      "The Japan Meteorological Agency documents a long-term rise in Tokyo's mean temperature that is larger than the national average rise, reflecting both global warming and the urban heat island effect. Hot, humid summers bring increased emergency transport for heatstroke, especially among older people. The city has promoted heat countermeasures including cool pavements, green roofs and misting, and Japan's national heatstroke alert system warns the public of dangerous conditions.",
    causes: [
      [
        "Global warming",
        "Rising background temperatures increase the frequency of extremely hot days.",
      ],
      [
        "Urban heat island",
        "Dense buildings, paved surfaces and waste heat from air conditioning and traffic warm the city.",
      ],
      ["High humidity", "Humid air limits the body's ability to cool through sweating."],
    ],
    impacts: [
      ["Heatstroke", "Emergency hospital transport for heatstroke rises during hot spells."],
      [
        "Risk to older people",
        "An ageing population increases the number of people vulnerable to heat.",
      ],
      ["Energy demand", "Cooling demand peaks during heatwaves, stressing electricity supply."],
    ],
    solutions: [
      [
        "Heatstroke alerts",
        "National alerts issued by the Ministry of the Environment and JMA.",
        "Supports timely protective behaviour and cooling shelters.",
      ],
      [
        "Green and cool surfaces",
        "Rooftop greening requirements, heat-reflective pavements and street trees.",
        "Lowers surface temperatures locally.",
      ],
      [
        "Tokyo Cap-and-Trade Program",
        "Since 2010, large buildings in Tokyo have faced mandatory emissions caps.",
        "Reduces emissions from large facilities and drives efficiency upgrades.",
      ],
    ],
    sources: [
      [
        "Japan Meteorological Agency",
        "Government of Japan",
        "https://www.jma.go.jp/jma/indexe.html",
      ],
      ["Ministry of the Environment", "Government of Japan", "https://www.env.go.jp/en/"],
      [
        "Bureau of Environment",
        "Tokyo Metropolitan Government",
        "https://www.kankyo.metro.tokyo.lg.jp/en/index.html",
      ],
    ],
  },
  {
    location: "Tokyo",
    category: "water",
    title: "River flood defence in Tokyo",
    severity: "moderate",
    summary:
      "Large parts of eastern Tokyo lie below high-water levels and depend on levees and massive underground infrastructure.",
    description:
      "Eastern Tokyo's lowlands between the Arakawa and Edogawa rivers include zero-metre areas lying at or below sea level, partly due to historical subsidence from groundwater pumping. Typhoons such as Hagibis in 2019 brought heavy rainfall that tested the region's defences. Infrastructure such as the Metropolitan Area Outer Underground Discharge Channel in Saitama, with its vast underground tunnels and tanks, diverts floodwater from smaller rivers into the Edogawa.",
    causes: [
      [
        "Low-lying zero-metre areas",
        "Parts of the city lie below the water level of nearby rivers during floods.",
      ],
      ["Typhoon rainfall", "Tropical cyclones can bring intense rainfall across river catchments."],
      [
        "Historical subsidence",
        "Groundwater pumping in the twentieth century lowered land levels before restrictions were imposed.",
      ],
    ],
    impacts: [
      [
        "Potential for widespread inundation",
        "A major levee failure could flood large residential areas for extended periods.",
      ],
      [
        "Evacuation challenges",
        "Evacuating millions of residents from lowlands is a major planning challenge.",
      ],
    ],
    solutions: [
      [
        "Underground discharge channels and reservoirs",
        "Large tunnels and storage beneath the city divert and hold floodwater.",
        "Reduces flooding along smaller rivers during heavy rain.",
      ],
      [
        "Super levees",
        "Very wide levees designed to resist overtopping and breaching.",
        "Improves resilience of the highest-risk river sections.",
      ],
      [
        "Groundwater controls",
        "Restrictions on pumping have largely halted subsidence.",
        "Prevents further lowering of the land.",
      ],
    ],
    sources: [
      [
        "Ministry of Land, Infrastructure, Transport and Tourism",
        "Government of Japan",
        "https://www.mlit.go.jp/en/",
      ],
      [
        "Japan Meteorological Agency",
        "Government of Japan",
        "https://www.jma.go.jp/jma/indexe.html",
      ],
    ],
  },
  {
    location: "Singapore",
    category: "climate",
    title: "Urban heat and greening in Singapore",
    severity: "moderate",
    summary:
      "A hot, humid city-state is warming, and uses urban greenery and planning to keep neighbourhoods cooler.",
    description:
      "Singapore's Meteorological Service documents a long-term warming trend, and the dense built environment intensifies heat through the urban heat island effect. The city has built its identity as a 'City in Nature' with extensive parks, park connectors, skyrise greenery requirements and street trees. Research programmes such as Cooling Singapore study how building layout, materials and greenery affect outdoor thermal comfort, and the government has set out plans to expand nature parks and plant more trees.",
    causes: [
      [
        "Tropical climate and global warming",
        "High baseline temperature and humidity leave little margin as the climate warms.",
      ],
      [
        "Dense urban form",
        "High-rise buildings and paved surfaces store heat and reduce night-time cooling.",
      ],
      [
        "Waste heat",
        "Air conditioning, vehicles and industry release heat into the urban environment.",
      ],
    ],
    impacts: [
      ["Heat stress", "Outdoor workers and older residents face increased heat stress."],
      ["Rising cooling demand", "Air conditioning use increases energy consumption and emissions."],
      ["Reduced outdoor comfort", "Hot conditions reduce the usability of public space."],
    ],
    solutions: [
      [
        "Planting more trees",
        "A national programme to plant one million more trees across the island.",
        "Increases shade and evaporative cooling over time.",
      ],
      [
        "Skyrise greenery",
        "Incentives and requirements for green roofs and vertical greenery.",
        "Reduces building surface temperatures and supports biodiversity.",
      ],
      [
        "District cooling",
        "Centralised cooling systems such as the one serving Marina Bay.",
        "Improves cooling efficiency compared with individual chillers.",
      ],
    ],
    sources: [
      [
        "Meteorological Service Singapore",
        "Government of Singapore",
        "https://www.weather.gov.sg/",
      ],
      ["National Parks Board", "Government of Singapore", "https://www.nparks.gov.sg/"],
      ["Urban Redevelopment Authority", "Government of Singapore", "https://www.ura.gov.sg/"],
    ],
  },
];
