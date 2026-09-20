import type { IssueSeed } from "./format.ts";

/** Issues for detailed locations in Africa and the Middle East. */
export const africaMiddleEastIssues: IssueSeed[] = [
  {
    location: "Dubai",
    category: "climate",
    title: "Extreme heat in Dubai",
    severity: "high",
    summary:
      "Summer heat and humidity in the Gulf reach levels that are dangerous for outdoor work and daily life.",
    description:
      "Dubai's summers combine very high air temperatures with humidity from the warm waters of the Gulf. The IPCC identifies the region as one where extreme heat is projected to intensify further. Rapid urban growth, dark surfaces and waste heat from air conditioning add to local heat. The UAE applies a mandatory midday work break for outdoor labourers during the hottest summer months, and the city's design increasingly emphasises shading, cooling and indoor connectivity.",
    causes: [
      [
        "Desert climate in a warming world",
        "The region's already extreme temperatures are rising with global warming.",
      ],
      [
        "Gulf humidity",
        "Warm, shallow seas increase humidity, raising the heat stress felt by the body.",
      ],
      [
        "Urban heat island",
        "Paved surfaces, buildings and waste heat from cooling systems warm the city further.",
      ],
    ],
    impacts: [
      [
        "Risk to outdoor workers",
        "Construction and other outdoor workers face heat exhaustion and heatstroke.",
      ],
      [
        "Very high cooling demand",
        "Air conditioning is essential, driving electricity use and peak demand.",
      ],
      [
        "Limits on outdoor activity",
        "Public life shifts indoors and to cooler hours during summer.",
      ],
    ],
    solutions: [
      [
        "Midday work ban",
        "A seasonal ban on outdoor work during the hottest midday hours.",
        "Reduces heat exposure for outdoor labourers when enforced.",
      ],
      [
        "Shaded, walkable design",
        "Shaded walkways, cooled transit stations and traditional design principles such as narrow lanes and wind towers.",
        "Improves comfort and reduces heat exposure in public space.",
      ],
      [
        "Efficient cooling",
        "District cooling and building efficiency standards.",
        "Reduces electricity required for cooling.",
      ],
    ],
    sources: [
      [
        "Climate Change 2021: The Physical Science Basis",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/wg1/",
        "2021-08-09",
      ],
      ["National Center of Meteorology", "United Arab Emirates", "https://www.ncm.gov.ae/"],
      [
        "Heat and health fact sheet",
        "World Health Organization",
        "https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health",
      ],
    ],
  },
  {
    location: "Nairobi",
    category: "waste",
    title: "Waste management and the Dandora dumpsite in Nairobi",
    severity: "high",
    summary:
      "Much of Nairobi's waste ends up at a large, long-overfilled open dumpsite in the east of the city.",
    description:
      "The Dandora dumpsite has served as Nairobi's main disposal site for decades and has long exceeded its intended capacity. Open burning, leachate and uncontrolled scavenging create health and environmental risks for surrounding communities, while informal waste pickers recover recyclable materials. Kenya introduced one of the world's strictest bans on plastic carrier bags in 2017, and passed the Sustainable Waste Management Act in 2022 to move toward segregation, recycling and extended producer responsibility.",
    causes: [
      [
        "Rapid urban growth",
        "Waste generation has grown faster than collection and disposal capacity.",
      ],
      [
        "Limited sanitary landfill capacity",
        "Without an engineered landfill, waste is dumped in the open.",
      ],
      [
        "Low source segregation",
        "Mixed waste reduces recycling rates and increases volumes sent to dumpsites.",
      ],
    ],
    impacts: [
      ["Air pollution from burning", "Fires at the dumpsite release smoke and toxic compounds."],
      [
        "Health risks to nearby residents",
        "Communities near the dumpsite face respiratory and other health risks.",
      ],
      ["Water contamination", "Leachate can pollute the nearby Nairobi River."],
    ],
    solutions: [
      [
        "Plastic carrier bag ban",
        "A 2017 ban on the manufacture, sale and use of plastic carrier bags.",
        "Reduced a highly visible form of plastic litter.",
      ],
      [
        "Sustainable Waste Management Act",
        "A 2022 law requiring segregation at source and producer responsibility.",
        "Provides a framework for reducing waste sent to dumpsites.",
      ],
      [
        "Supporting waste pickers and recyclers",
        "Integrating informal recyclers into formal systems with safer conditions.",
        "Increases material recovery while protecting livelihoods.",
      ],
    ],
    indicators: [
      {
        name: "Policy milestone",
        value: "Plastic carrier bag ban",
        year: 2017,
        description:
          "Kenya's national ban enforced by the National Environment Management Authority.",
      },
    ],
    sources: [
      [
        "National Environment Management Authority",
        "Government of Kenya",
        "https://www.nema.go.ke/",
      ],
      [
        "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        "World Bank",
        "https://openknowledge.worldbank.org/handle/10986/30317",
        "2018-09-20",
      ],
      ["UN Environment Programme", "United Nations Environment Programme", "https://www.unep.org/"],
    ],
  },
  {
    location: "Nairobi",
    category: "water",
    title: "Nairobi River pollution",
    severity: "high",
    summary:
      "The Nairobi River and its tributaries carry sewage, industrial effluent and solid waste through the city.",
    description:
      "The Nairobi River system flows through informal settlements and industrial areas where sanitation coverage is incomplete. Untreated sewage, industrial discharges and dumped waste have severely degraded water quality. Repeated restoration efforts, including a government-led regeneration programme, have focused on clearing waste, relocating structures from riparian land and building sewer infrastructure.",
    causes: [
      ["Inadequate sanitation", "Many households in informal settlements lack sewer connections."],
      ["Industrial discharge", "Some factories discharge effluent without adequate treatment."],
      ["Solid waste dumping", "Waste is dumped along riverbanks and in channels."],
    ],
    impacts: [
      [
        "Health risks",
        "Contaminated water poses risks of waterborne disease to people who use or live near it.",
      ],
      ["Ecological degradation", "Pollution reduces aquatic biodiversity."],
      ["Downstream effects", "Polluted water flows on to communities and farms downstream."],
    ],
    solutions: [
      [
        "Sewer expansion and treatment",
        "Extending sewer networks and upgrading wastewater treatment.",
        "Reduces pathogen and nutrient loads.",
      ],
      [
        "Riparian restoration",
        "Clearing waste and restoring vegetation along riverbanks.",
        "Improves habitat and public space.",
      ],
      [
        "Enforcement of discharge standards",
        "Monitoring and penalising unlicensed industrial discharges.",
        "Reduces industrial pollution.",
      ],
    ],
    sources: [
      [
        "National Environment Management Authority",
        "Government of Kenya",
        "https://www.nema.go.ke/",
      ],
      [
        "Drinking-water fact sheet",
        "World Health Organization",
        "https://www.who.int/news-room/fact-sheets/detail/drinking-water",
      ],
    ],
  },
  {
    location: "Northern Kenya",
    category: "water",
    title: "Recurring drought in northern Kenya",
    severity: "critical",
    summary:
      "Successive failed rainy seasons have caused severe livestock losses and food insecurity among pastoralist communities.",
    description:
      "Northern Kenya's arid and semi-arid counties, including Turkana, Marsabit and Mandera, depend on two short rainy seasons for pasture and water. Between late 2020 and early 2023, the Horn of Africa experienced five consecutive failed rainy seasons, described by the World Meteorological Organization and humanitarian agencies as the region's worst drought in decades. Millions of livestock died and food insecurity rose sharply. Kenya's National Drought Management Authority monitors conditions and coordinates early action.",
    causes: [
      [
        "Rainfall variability",
        "The region's rainfall is highly variable and influenced by ocean-atmosphere patterns such as La Niña and the Indian Ocean Dipole.",
      ],
      [
        "Warming temperatures",
        "Higher temperatures increase evaporation and water stress for pasture and livestock.",
      ],
      [
        "Land degradation",
        "Overgrazing and loss of vegetation reduce the land's capacity to retain water.",
      ],
    ],
    impacts: [
      [
        "Livestock deaths",
        "Loss of livestock destroys the main asset and income source of pastoralist households.",
      ],
      [
        "Food insecurity and malnutrition",
        "Reduced milk and income lead to hunger, particularly for children.",
      ],
      [
        "Conflict over resources",
        "Scarce water and pasture can increase tensions between communities.",
      ],
      [
        "School dropout and migration",
        "Families move in search of water and pasture, disrupting education.",
      ],
    ],
    solutions: [
      [
        "Drought early warning and early action",
        "Monthly drought bulletins and contingency funds that trigger support before crisis.",
        "Reduces losses when action is taken early.",
      ],
      [
        "Hunger Safety Net Programme",
        "Regular cash transfers to vulnerable households in arid counties, scalable during drought.",
        "Protects household consumption and assets during shocks.",
      ],
      [
        "Index-based livestock insurance",
        "Insurance payouts triggered by satellite-measured pasture conditions.",
        "Helps pastoralists keep animals alive and recover faster.",
      ],
      [
        "Water harvesting and rangeland management",
        "Water pans, boreholes and community grazing plans.",
        "Improves water access and pasture resilience.",
      ],
    ],
    indicators: [
      {
        name: "Drought period",
        value: "Five consecutive failed rainy seasons",
        year: 2023,
        description: "Late 2020 to early 2023 across the Horn of Africa.",
      },
    ],
    sources: [
      ["National Drought Management Authority", "Government of Kenya", "https://www.ndma.go.ke/"],
      ["World Meteorological Organization", "WMO", "https://wmo.int/"],
      ["Kenya Meteorological Department", "Government of Kenya", "https://meteo.go.ke/"],
    ],
  },
  {
    location: "Northern Kenya",
    category: "nature",
    title: "Lake Turkana under pressure",
    severity: "high",
    summary:
      "The world's largest desert lake depends on inflow from Ethiopia's Omo River, which has been altered by dams and irrigation.",
    description:
      "Lake Turkana is fed mainly by the Omo River from Ethiopia. The construction of the Gibe III dam and associated irrigated agriculture in the lower Omo valley changed the river's flow regime. UNESCO's World Heritage Committee added the Lake Turkana National Parks to the List of World Heritage in Danger in 2018, citing the potential effects of upstream development on the lake's water levels and ecosystem, which support fisheries and pastoralist communities.",
    causes: [
      [
        "Upstream dams",
        "Regulation of the Omo River alters the seasonal flood pulse that sustains the lake.",
      ],
      ["Irrigation abstraction", "Large-scale plantations in the lower Omo valley withdraw water."],
      ["Climate variability", "High evaporation and variable rainfall affect lake levels."],
    ],
    impacts: [
      [
        "Fisheries livelihoods at risk",
        "Changes in flow and salinity can affect fish breeding and catches.",
      ],
      [
        "Pressure on World Heritage values",
        "Habitat for crocodiles, hippos and birds may be affected.",
      ],
      [
        "Livelihood and resource conflict",
        "Reduced resources can heighten tensions among communities.",
      ],
    ],
    solutions: [
      [
        "Transboundary water cooperation",
        "Joint monitoring and agreements between Kenya and Ethiopia.",
        "Could help maintain environmental flows to the lake.",
      ],
      [
        "Environmental flow releases",
        "Planned dam releases that mimic natural flooding.",
        "Supports ecological processes downstream.",
      ],
      [
        "Protected area management",
        "Management of Sibiloi, Central Island and South Island national parks.",
        "Protects key habitats.",
      ],
    ],
    sources: [
      [
        "Lake Turkana National Parks — World Heritage List",
        "UNESCO World Heritage Centre",
        "https://whc.unesco.org/en/list/801/",
      ],
      ["Kenya Wildlife Service", "Government of Kenya", "https://www.kws.go.ke/"],
    ],
  },
  {
    location: "Lagos",
    category: "water",
    title: "Flooding and coastal erosion in Lagos",
    severity: "high",
    summary:
      "A low-lying lagoon city faces recurrent rainfall flooding, coastal erosion and rising seas.",
    description:
      "Lagos is built around a lagoon system on a low, sandy coastline. Heavy rainfall during the wet season regularly floods streets, particularly where drains are blocked by waste or wetlands have been filled. The Atlantic shoreline has experienced significant erosion, and large coastal projects, including the Eko Atlantic development built on reclaimed land with a protective sea wall, have become part of the debate about how to manage the coast. The IPCC identifies West African coastal cities as highly exposed to sea level rise.",
    causes: [
      ["Heavy rainfall", "Intense tropical downpours overwhelm drainage."],
      ["Blocked drains", "Solid waste reduces drainage capacity."],
      ["Loss of wetlands", "Reclamation of wetlands and lagoon margins removes natural storage."],
      [
        "Coastal erosion and sea level rise",
        "Wave action, altered sediment supply and rising seas threaten the shoreline.",
      ],
    ],
    impacts: [
      ["Damage to homes and roads", "Flooding damages property and paralyses traffic."],
      ["Health risks", "Floodwater spreads waterborne disease."],
      ["Loss of coastal land", "Erosion threatens coastal communities and infrastructure."],
    ],
    solutions: [
      [
        "Drainage clearing and upgrades",
        "Regular clearing of drains and canals ahead of the rainy season.",
        "Reduces local flooding.",
      ],
      [
        "Wetland protection",
        "Protecting remaining wetlands and lagoon margins from reclamation.",
        "Preserves natural flood storage.",
      ],
      [
        "Coastal protection",
        "Groynes, sea walls and beach nourishment along vulnerable shoreline.",
        "Reduces erosion locally; may shift erosion elsewhere.",
      ],
    ],
    sources: [
      [
        "Climate Change 2022: Impacts, Adaptation and Vulnerability",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/wg2/",
        "2022-02-28",
      ],
      ["Lagos State Government", "Lagos State Government", "https://lagosstate.gov.ng/"],
      ["World Bank in Nigeria", "World Bank", "https://www.worldbank.org/en/country/nigeria"],
    ],
  },
  {
    location: "Lagos",
    category: "waste",
    title: "Solid waste in Lagos",
    severity: "high",
    summary:
      "Waste volumes in one of Africa's largest cities strain collection systems and dumpsites.",
    description:
      "Lagos generates very large volumes of solid waste. Much is taken to dumpsites such as Olusosun, one of the largest in Africa, which experienced a major fire in 2018. Waste that is not collected often ends up in drains, canals and the lagoon, worsening flooding and pollution. The state has worked with private sector participation operators and informal collectors, and has piloted recycling and materials recovery initiatives.",
    causes: [
      ["Population growth", "Rapid growth increases waste generation."],
      [
        "Collection gaps",
        "Irregular collection in many neighbourhoods leads to dumping and burning.",
      ],
      ["Limited engineered disposal", "Dumpsites lack liners and gas management."],
    ],
    impacts: [
      ["Dumpsite fires and air pollution", "Burning waste releases smoke and toxic substances."],
      ["Flooding", "Waste blocks drainage channels."],
      ["Marine and lagoon pollution", "Plastic waste reaches the lagoon and ocean."],
    ],
    solutions: [
      [
        "Formalised collection",
        "Private sector participation in collection with service standards.",
        "Increases collection coverage.",
      ],
      [
        "Recycling and material recovery",
        "Buy-back and recycling programmes for plastics and other materials.",
        "Reduces waste to dumpsites and supports livelihoods.",
      ],
      [
        "Landfill upgrades",
        "Transition from open dumps to engineered sanitary landfills.",
        "Reduces fires, leachate and methane emissions.",
      ],
    ],
    sources: [
      [
        "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        "World Bank",
        "https://openknowledge.worldbank.org/handle/10986/30317",
        "2018-09-20",
      ],
      ["Lagos State Government", "Lagos State Government", "https://lagosstate.gov.ng/"],
    ],
  },
  {
    location: "Niger Delta",
    category: "nature",
    title: "Oil pollution in the Niger Delta",
    severity: "critical",
    summary:
      "Decades of oil spills have contaminated land, creeks and groundwater in one of the world's great wetlands.",
    description:
      "The Niger Delta holds extensive mangroves and freshwater swamp forests and supports fishing and farming communities. Since oil production began in the 1950s, spills from operational failures, ageing pipelines, sabotage and illegal refining have contaminated soil, water and mangroves. The UN Environment Programme's 2011 Environmental Assessment of Ogoniland found widespread and severe contamination, including drinking water contaminated with hydrocarbons, and recommended a clean-up that could take decades. Nigeria established the Hydrocarbon Pollution Remediation Project (HYPREP) to implement the recommendations.",
    causes: [
      [
        "Pipeline failures and ageing infrastructure",
        "Corrosion and equipment failure cause spills.",
      ],
      [
        "Sabotage, theft and illegal refining",
        "Crude oil theft and artisanal refining release oil and smoke.",
      ],
      ["Inadequate clean-up", "Past spills were often not fully remediated."],
    ],
    impacts: [
      [
        "Contaminated drinking water",
        "UNEP found hydrocarbon contamination in water used by communities in Ogoniland.",
      ],
      ["Mangrove and fisheries damage", "Oil smothers mangroves and harms fish and shellfish."],
      ["Loss of livelihoods", "Farmers and fishers lose productive land and water."],
      ["Health concerns", "Exposure to hydrocarbons and smoke poses health risks."],
    ],
    solutions: [
      [
        "Ogoniland clean-up",
        "Remediation of contaminated sites under HYPREP.",
        "Aims to restore land and water over the long term.",
      ],
      [
        "Emergency water supply",
        "Providing safe drinking water to affected communities.",
        "Reduces immediate health risks.",
      ],
      [
        "Spill detection and response",
        "Oversight by the National Oil Spill Detection and Response Agency.",
        "Improves response times and accountability.",
      ],
      [
        "Pipeline maintenance and decommissioning",
        "Replacing ageing infrastructure and decommissioning unused lines.",
        "Reduces operational spills.",
      ],
    ],
    indicators: [
      {
        name: "Key assessment",
        value: "UNEP Environmental Assessment of Ogoniland",
        year: 2011,
        description:
          "Found widespread hydrocarbon contamination and recommended long-term remediation.",
      },
    ],
    sources: [
      [
        "Environmental Assessment of Ogoniland (publisher site)",
        "UN Environment Programme",
        "https://www.unep.org/",
        "2011-08-04",
      ],
      [
        "Hydrocarbon Pollution Remediation Project",
        "Federal Government of Nigeria",
        "https://hyprep.gov.ng/",
      ],
      [
        "National Oil Spill Detection and Response Agency",
        "Federal Government of Nigeria",
        "https://nosdra.gov.ng/",
      ],
    ],
  },
  {
    location: "Niger Delta",
    category: "energy",
    title: "Gas flaring in the Niger Delta",
    severity: "high",
    summary:
      "Associated gas burned off at oil facilities wastes energy and releases pollutants and greenhouse gases.",
    description:
      "When crude oil is extracted, natural gas often comes up with it. Where infrastructure to use or capture it is lacking, this associated gas is burned in flares. Nigeria has been among the countries with the highest flaring volumes, according to the World Bank's Global Gas Flaring Tracker. Flaring releases carbon dioxide, black carbon and other pollutants, and communities near flare sites report noise, heat and health concerns. Nigeria has committed to reducing routine flaring and launched a programme to commercialise flare gas.",
    causes: [
      [
        "Lack of gas capture infrastructure",
        "Without pipelines or processing, associated gas is flared.",
      ],
      [
        "Economics of gas utilisation",
        "Low prices and high costs discourage investment in capture.",
      ],
      ["Weak enforcement", "Penalties have not always been sufficient to end routine flaring."],
    ],
    impacts: [
      ["Greenhouse gas and black carbon emissions", "Flaring contributes to climate change."],
      ["Local air pollution", "Pollutants affect nearby communities."],
      ["Wasted energy resource", "Gas that could supply power or cooking fuel is burned."],
    ],
    solutions: [
      [
        "Flare gas commercialisation",
        "Auctioning flare sites to investors who capture and use the gas.",
        "Converts waste into a resource while reducing emissions.",
      ],
      [
        "Zero Routine Flaring by 2030",
        "A World Bank-led initiative that Nigeria has endorsed.",
        "Sets a target for ending routine flaring.",
      ],
      [
        "Higher penalties and monitoring",
        "Satellite-based monitoring and increased flaring fees.",
        "Improves incentives for capture.",
      ],
    ],
    sources: [
      [
        "Global Gas Flaring Reduction Partnership and Gas Flaring Tracker",
        "World Bank",
        "https://www.worldbank.org/en/programs/gasflaringreduction",
      ],
      [
        "Nigerian Upstream Petroleum Regulatory Commission",
        "Federal Government of Nigeria",
        "https://www.nuprc.gov.ng/",
      ],
    ],
  },
  {
    location: "Madagascar",
    category: "nature",
    title: "Forest loss and endemic species in Madagascar",
    severity: "critical",
    summary: "Madagascar's unique wildlife depends on forests that have been extensively cleared.",
    description:
      "Madagascar split from other landmasses tens of millions of years ago, and a very high proportion of its plants and animals occur nowhere else — including all of the world's wild lemurs. Forest clearance for shifting agriculture (tavy), charcoal and fuelwood production, logging and mining has removed much of the island's original forest cover. The IUCN Red List assesses the large majority of lemur species as threatened. The Rainforests of the Atsinanana World Heritage Site has been on the List of World Heritage in Danger since 2010, following illegal logging of rosewood and other precious timber.",
    causes: [
      [
        "Shifting cultivation",
        "Slash-and-burn agriculture clears forest for rice and other crops.",
      ],
      ["Charcoal and fuelwood", "Most households rely on wood fuels for cooking."],
      ["Illegal logging", "Precious hardwoods such as rosewood have been illegally harvested."],
      [
        "Poverty and insecure tenure",
        "Limited livelihood alternatives drive reliance on forest resources.",
      ],
    ],
    impacts: [
      ["Extinction risk", "Many lemurs and other endemic species face a high risk of extinction."],
      ["Soil erosion", "Cleared hillsides lose soil, silting rivers and coastal waters."],
      ["Reduced ecosystem services", "Forest loss affects water supply and local climate."],
    ],
    solutions: [
      [
        "Protected area expansion",
        "Madagascar significantly expanded its protected area network in the 2000s and 2010s.",
        "Secures key habitats where management is effective.",
      ],
      [
        "Community-based forest management",
        "Transferring management rights to local communities.",
        "Can reduce clearing while supporting livelihoods.",
      ],
      [
        "Alternative livelihoods and fuels",
        "Improved cookstoves, sustainable charcoal and agricultural intensification.",
        "Reduces pressure on remaining forests.",
      ],
    ],
    indicators: [
      {
        name: "World Heritage status",
        value: "Rainforests of the Atsinanana — in danger",
        year: 2010,
        description: "Added to the List of World Heritage in Danger following illegal logging.",
      },
    ],
    sources: [
      [
        "Rainforests of the Atsinanana — World Heritage List",
        "UNESCO World Heritage Centre",
        "https://whc.unesco.org/en/list/1257/",
      ],
      [
        "IUCN Red List of Threatened Species",
        "International Union for Conservation of Nature",
        "https://www.iucnredlist.org/",
      ],
      ["Global Forest Watch", "World Resources Institute", "https://www.globalforestwatch.org/"],
    ],
  },
  {
    location: "Madagascar",
    category: "water",
    title: "Drought and food insecurity in southern Madagascar",
    severity: "critical",
    summary: "Repeated drought in the Grand Sud has caused severe food insecurity.",
    description:
      "Southern Madagascar is semi-arid and prone to drought. Consecutive poor rainy seasons around 2019–2021 led to severe food insecurity, with the World Food Programme and partners scaling up emergency assistance. A World Weather Attribution study found that rainfall variability was the main driver and that the role of human-induced climate change in that drought was small, highlighting underlying vulnerability — poverty, limited infrastructure and land degradation — as key factors in the crisis.",
    causes: [
      ["Rainfall variability", "The south experiences highly variable and often low rainfall."],
      [
        "Land degradation and sandstorms",
        "Loss of vegetation exposes soil to erosion and sand encroachment.",
      ],
      [
        "Structural vulnerability",
        "Poverty, limited irrigation and poor infrastructure reduce resilience.",
      ],
    ],
    impacts: [
      ["Acute food insecurity", "Crop failures leave households without enough food."],
      ["Malnutrition", "Children are particularly affected by acute malnutrition."],
      ["Migration", "Families move in search of food and work."],
    ],
    solutions: [
      [
        "Humanitarian food assistance",
        "Emergency food and nutrition support.",
        "Prevents loss of life during crises.",
      ],
      [
        "Water infrastructure",
        "Pipelines, boreholes and water storage for the south.",
        "Improves water access for households and farms.",
      ],
      [
        "Drought-resilient agriculture",
        "Drought-tolerant crops, soil restoration and anticipatory action.",
        "Reduces vulnerability to future droughts.",
      ],
    ],
    sources: [
      ["WFP in Madagascar", "World Food Programme", "https://www.wfp.org/countries/madagascar"],
      [
        "World Weather Attribution",
        "World Weather Attribution",
        "https://www.worldweatherattribution.org/",
      ],
    ],
  },
];
