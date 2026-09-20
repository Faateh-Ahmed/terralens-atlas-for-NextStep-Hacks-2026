import type { IssueSeed } from "./format.ts";

/** Issues for detailed locations in the Americas. */
export const americasIssues: IssueSeed[] = [
  {
    location: "Bogotá",
    category: "water",
    title: "Páramo ecosystems and Bogotá's water supply",
    severity: "moderate",
    summary:
      "Most of Bogotá's drinking water originates in high-Andean páramo ecosystems that are sensitive to land use and climate change.",
    description:
      "Páramos are high-altitude Andean grasslands and wetlands whose mosses, soils and plants such as frailejones store and slowly release water. Bogotá draws much of its supply from páramo areas including Chingaza. Colombia has delimited páramos and restricted mining and agriculture within them by law, but they remain vulnerable to cattle grazing, potato farming, fire and warming temperatures. A drought linked to El Niño led Bogotá to introduce water rationing in 2024.",
    causes: [
      ["Agricultural expansion", "Potato farming and cattle grazing encroach on páramo land."],
      ["Mining pressure", "Mining interests have historically targeted páramo areas."],
      [
        "Warming and changing rainfall",
        "Higher temperatures and altered rainfall stress high-mountain ecosystems.",
      ],
    ],
    impacts: [
      [
        "Water supply risk",
        "Degraded páramos regulate water less effectively, especially in dry periods.",
      ],
      ["Biodiversity loss", "Páramos host many endemic plant species."],
      [
        "Rationing during drought",
        "Low reservoir levels can force supply restrictions for millions of residents.",
      ],
    ],
    solutions: [
      [
        "Legal protection of páramos",
        "Colombian law restricts mining and certain agriculture within delimited páramos.",
        "Limits the most damaging land uses.",
      ],
      [
        "Water funds and payment for ecosystem services",
        "Water users fund conservation by upstream communities.",
        "Aligns downstream water security with upstream stewardship.",
      ],
      [
        "Demand management",
        "Tariffs, awareness campaigns and rationing during drought.",
        "Reduces consumption when supply is stressed.",
      ],
    ],
    sources: [
      [
        "Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM)",
        "Government of Colombia",
        "http://www.ideam.gov.co/",
      ],
      [
        "Parques Nacionales Naturales de Colombia",
        "Government of Colombia",
        "https://www.parquesnacionales.gov.co/",
      ],
      [
        "Acueducto de Bogotá (EAAB)",
        "Empresa de Acueducto y Alcantarillado de Bogotá",
        "https://www.acueducto.com.co/",
      ],
    ],
  },
  {
    location: "Bogotá",
    category: "air",
    title: "Air quality and transport in Bogotá",
    severity: "moderate",
    summary:
      "Diesel vehicles and industry affect air quality, while bus rapid transit and cycling policy offer internationally studied responses.",
    description:
      "Bogotá's air quality is affected by diesel buses and trucks, industry and resuspended dust, with pollution often worse in the southwest of the city. Bogotá is known for TransMilenio, a large bus rapid transit system opened in 2000, its Ciclovía — weekly car-free streets — and an extensive cycle network. The city has been adding electric buses to its fleet, which has become one of the largest electric bus fleets outside China.",
    causes: [
      ["Diesel vehicles", "Older buses and freight trucks emit fine particulate matter."],
      ["Industrial emissions", "Industry in the southwest contributes to local pollution."],
      ["Road dust", "Unpaved and poorly maintained roads resuspend dust."],
    ],
    impacts: [
      [
        "Health effects",
        "Particulate exposure is associated with respiratory and cardiovascular disease.",
      ],
      ["Unequal exposure", "Pollution is often concentrated in lower-income districts."],
    ],
    solutions: [
      [
        "Electric bus fleet",
        "Replacing diesel buses with electric buses.",
        "Reduces tailpipe emissions along bus corridors.",
      ],
      [
        "Cycling infrastructure and Ciclovía",
        "Protected cycle lanes and weekly car-free streets.",
        "Supports low-emission travel and active lifestyles.",
      ],
      [
        "Monitoring and alerts",
        "The city's air quality monitoring network with public alerts.",
        "Informs action during pollution episodes.",
      ],
    ],
    sources: [
      [
        "Secretaría Distrital de Ambiente",
        "Alcaldía de Bogotá",
        "https://www.ambientebogota.gov.co/",
      ],
      ["TransMilenio", "TransMilenio S.A.", "https://www.transmilenio.gov.co/"],
      [
        "Ambient (outdoor) air pollution fact sheet",
        "World Health Organization",
        "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health",
      ],
    ],
  },
  {
    location: "Colombian Amazon",
    category: "nature",
    title: "Deforestation in the Colombian Amazon",
    severity: "critical",
    summary:
      "Forest clearing concentrated in an arc of deforestation threatens connectivity between the Andes and the Amazon.",
    description:
      "Colombia's official forest monitoring by IDEAM identifies the Amazon region as the country's main deforestation hotspot, concentrated in departments such as Caquetá, Guaviare and Meta. Land grabbing, conversion to cattle pasture, illicit crops and road building are major drivers. The shifting security situation following the 2016 peace agreement changed control over remote forest areas. Chiribiquete National Park, a UNESCO World Heritage Site, has been expanded and is a focus for protection. Colombia has reported declines in deforestation in some recent years, though trends vary.",
    causes: [
      [
        "Land grabbing and cattle ranching",
        "Forest is cleared to claim land and establish pasture.",
      ],
      ["Illicit crops", "Coca cultivation contributes to clearing in some areas."],
      ["Road construction", "New roads open forests to settlement and clearing."],
      ["Governance gaps", "Weak state presence in remote areas limits enforcement."],
    ],
    impacts: [
      ["Biodiversity loss", "The region is one of the most biodiverse on Earth."],
      ["Loss of Andes–Amazon connectivity", "Fragmentation disrupts ecological corridors."],
      [
        "Impacts on Indigenous peoples",
        "Indigenous territories and uncontacted peoples face pressure.",
      ],
      ["Carbon emissions", "Clearing releases carbon stored in forests."],
    ],
    solutions: [
      [
        "Protected areas and Indigenous reserves",
        "Expanding and enforcing protected areas and resguardos.",
        "Indigenous lands and protected areas are associated with lower deforestation.",
      ],
      [
        "Forest monitoring and early warnings",
        "IDEAM's quarterly deforestation early warning bulletins.",
        "Enables targeted enforcement.",
      ],
      [
        "Sustainable livelihoods",
        "Payments for conservation and support for forest-compatible production.",
        "Provides alternatives to clearing.",
      ],
    ],
    sources: [
      [
        "Instituto de Hidrología, Meteorología y Estudios Ambientales (IDEAM)",
        "Government of Colombia",
        "http://www.ideam.gov.co/",
      ],
      [
        "Chiribiquete National Park — World Heritage List",
        "UNESCO World Heritage Centre",
        "https://whc.unesco.org/en/list/1174/",
      ],
      ["Global Forest Watch", "World Resources Institute", "https://www.globalforestwatch.org/"],
    ],
  },
  {
    location: "Mexico City",
    category: "water",
    title: "Subsidence and water stress in Mexico City",
    severity: "critical",
    summary:
      "Pumping from the aquifer beneath a former lake bed causes some of the fastest urban subsidence in the world, while supply remains unreliable.",
    description:
      "Mexico City was built on the bed of Lake Texcoco. Heavy extraction from the underlying aquifer, which supplies a large share of the city's water, has caused the soft clay to compact, and parts of the city are sinking rapidly, as documented by satellite radar studies. Subsidence damages pipes, buildings and drainage, increasing leaks and flooding. The city also imports water from the Cutzamala System, whose reservoirs fell to very low levels during recent droughts, leading to supply restrictions.",
    causes: [
      ["Aquifer over-extraction", "Pumping greatly exceeds natural recharge."],
      ["Lacustrine clay soils", "Compressible former lake sediments compact as water is removed."],
      [
        "Leaky distribution network",
        "Subsidence damages pipes, and a large share of water is lost to leaks.",
      ],
      ["Drought", "Low rainfall reduces storage in the Cutzamala reservoirs."],
    ],
    impacts: [
      [
        "Infrastructure damage",
        "Buildings, the metro and drainage systems are damaged by uneven sinking.",
      ],
      ["Flooding", "Subsidence reverses drainage gradients, making flooding worse."],
      ["Unequal water access", "Some neighbourhoods rely on intermittent supply and water trucks."],
    ],
    solutions: [
      [
        "Leak reduction",
        "Sectorising the network and repairing leaks.",
        "Makes more water available without additional extraction.",
      ],
      [
        "Rainwater harvesting",
        "Programmes installing rainwater systems in homes.",
        "Supplements supply during the rainy season.",
      ],
      [
        "Aquifer recharge and wastewater reuse",
        "Treating wastewater and recharging the aquifer.",
        "Could slow depletion and subsidence over time.",
      ],
    ],
    sources: [
      [
        "Comisión Nacional del Agua (CONAGUA)",
        "Government of Mexico",
        "https://www.gob.mx/conagua",
      ],
      [
        "Secretaría del Medio Ambiente de la Ciudad de México",
        "Gobierno de la Ciudad de México",
        "https://www.sedema.cdmx.gob.mx/",
      ],
    ],
  },
  {
    location: "Mexico City",
    category: "air",
    title: "Ozone pollution in Mexico City",
    severity: "high",
    summary:
      "A high-altitude basin traps pollution, and ozone episodes still trigger emergency restrictions.",
    description:
      "Mexico City sits in a high basin surrounded by mountains, where intense sunlight and weak ventilation favour ozone formation from vehicle and industrial emissions. Once considered one of the most polluted cities in the world, it made significant progress from the 1990s through fuel reformulation, catalytic converters and driving restrictions (Hoy No Circula). Ozone remains a persistent problem, and the metropolitan environmental commission activates environmental contingency phases during severe episodes.",
    causes: [
      ["Vehicle emissions", "A large vehicle fleet emits ozone precursors."],
      [
        "Basin topography and altitude",
        "Mountains and inversions limit dispersion; strong sunlight drives photochemistry.",
      ],
      [
        "Industry and solvents",
        "Industrial and household solvents emit volatile organic compounds.",
      ],
    ],
    impacts: [
      ["Respiratory health effects", "Ozone irritates airways and aggravates asthma."],
      ["Activity restrictions", "Contingency phases restrict driving and outdoor activity."],
    ],
    solutions: [
      [
        "Hoy No Circula",
        "Driving restrictions based on licence plate and vehicle emissions.",
        "Reduces traffic emissions, particularly from older vehicles.",
      ],
      [
        "Public transport expansion",
        "Metrobús, cable cars and cycling infrastructure.",
        "Provides alternatives to private cars.",
      ],
      [
        "Regional environmental commission",
        "Coordination through the Comisión Ambiental de la Megalópolis.",
        "Addresses pollution across the wider region.",
      ],
    ],
    sources: [
      [
        "Secretaría del Medio Ambiente de la Ciudad de México",
        "Gobierno de la Ciudad de México",
        "https://www.sedema.cdmx.gob.mx/",
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
    location: "Los Angeles",
    category: "climate",
    title: "Wildfire risk in Los Angeles",
    severity: "critical",
    summary:
      "Dry vegetation, strong winds and homes built into fire-prone landscapes create severe wildfire risk.",
    description:
      "Southern California's Mediterranean climate and native chaparral vegetation are naturally fire-prone. Santa Ana winds in autumn and winter can drive fires rapidly into communities at the wildland–urban interface. In January 2025, the Palisades and Eaton fires destroyed thousands of structures in the Los Angeles area. The IPCC describes how warming increases the dryness of fuels and lengthens fire seasons in the western United States.",
    causes: [
      ["Hot, dry conditions", "Warming and drought dry out vegetation."],
      ["Santa Ana winds", "Strong, dry downslope winds spread fires rapidly."],
      [
        "Development in fire-prone areas",
        "Homes built in and near wildlands increase exposure and ignition sources.",
      ],
      ["Ignitions", "Power lines, equipment and human activity can start fires."],
    ],
    impacts: [
      ["Loss of life and homes", "Fast-moving fires destroy neighbourhoods."],
      ["Smoke exposure", "Wildfire smoke affects air quality across the region."],
      ["Post-fire hazards", "Burned slopes can produce debris flows during rain."],
      ["Insurance and housing pressure", "Rising risk affects insurance availability and costs."],
    ],
    solutions: [
      [
        "Defensible space and home hardening",
        "Clearing vegetation near homes and using fire-resistant materials.",
        "Improves the chance that homes survive fires.",
      ],
      [
        "Fire hazard mapping and building codes",
        "CAL FIRE hazard severity zones inform building requirements.",
        "Reduces vulnerability of new construction.",
      ],
      [
        "Utility safety measures",
        "Undergrounding lines and power shutoffs during extreme wind.",
        "Reduces utility-caused ignitions.",
      ],
      [
        "Warning and evacuation systems",
        "Alerts and evacuation planning.",
        "Reduces loss of life.",
      ],
    ],
    indicators: [
      {
        name: "Notable event",
        value: "Palisades and Eaton fires",
        year: 2025,
        description:
          "January 2025 wildfires that destroyed thousands of structures in Los Angeles County.",
      },
    ],
    sources: [
      [
        "CAL FIRE",
        "California Department of Forestry and Fire Protection",
        "https://www.fire.ca.gov/",
      ],
      [
        "Climate Change 2021: The Physical Science Basis",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/wg1/",
        "2021-08-09",
      ],
    ],
  },
  {
    location: "Los Angeles",
    category: "air",
    title: "Smog in the Los Angeles basin",
    severity: "high",
    summary:
      "Decades of regulation have greatly improved air quality, but the region still records some of the highest ozone levels in the United States.",
    description:
      "Los Angeles gave its name to photochemical smog. Since the mid-twentieth century, California's regulations — from vehicle emission standards to the creation of the California Air Resources Board — have significantly reduced pollution. The South Coast Air Basin still frequently exceeds federal ozone standards because of its geography, sunshine and large emissions from vehicles, ports and goods movement.",
    causes: [
      [
        "Vehicles and goods movement",
        "Cars, trucks and the ports emit ozone precursors and particulates.",
      ],
      ["Geography and sunshine", "Mountains trap air, and strong sunlight drives ozone formation."],
      ["Wildfire smoke", "Fires add episodic particulate pollution."],
    ],
    impacts: [
      [
        "Health effects",
        "Ozone and particulate matter aggravate respiratory and cardiovascular disease.",
      ],
      [
        "Environmental justice concerns",
        "Communities near freeways and ports face higher exposure.",
      ],
    ],
    solutions: [
      [
        "Vehicle emission standards",
        "California's stringent standards and zero-emission vehicle requirements.",
        "Reduces emissions as the fleet turns over.",
      ],
      [
        "Port clean air programmes",
        "Cleaner trucks, shore power and equipment electrification at the ports.",
        "Reduces emissions in nearby communities.",
      ],
      [
        "Community air monitoring",
        "Community-focused monitoring and emission reduction plans.",
        "Targets the most affected neighbourhoods.",
      ],
    ],
    sources: [
      ["California Air Resources Board", "State of California", "https://ww2.arb.ca.gov/"],
      ["South Coast Air Quality Management District", "South Coast AQMD", "https://www.aqmd.gov/"],
      ["U.S. Environmental Protection Agency", "U.S. EPA", "https://www.epa.gov/"],
    ],
  },
  {
    location: "Phoenix",
    category: "climate",
    title: "Extreme heat in Phoenix",
    severity: "critical",
    summary:
      "Phoenix experiences some of the most dangerous heat of any large US city, with heat-related deaths tracked closely by the county.",
    description:
      "Phoenix sits in the Sonoran Desert, and its summers are long and extremely hot. In July 2023, the city recorded an unprecedented run of consecutive days at or above 110°F (43.3°C), according to the National Weather Service. Maricopa County's public health department publishes annual heat death reports, which have documented rising heat-related deaths, with people experiencing homelessness disproportionately affected. The city created a dedicated Office of Heat Response and Mitigation in 2021.",
    causes: [
      ["Desert climate and warming", "Global warming raises already extreme summer temperatures."],
      ["Urban heat island", "Asphalt and buildings retain heat, keeping nights hot."],
      ["Rapid growth", "Expanding development increases heat-absorbing surfaces."],
    ],
    impacts: [
      ["Heat-related deaths", "Heat is a leading weather-related cause of death in the county."],
      ["Risk to unsheltered people", "People experiencing homelessness face the highest exposure."],
      ["Energy dependence", "Loss of air conditioning during heat can be life-threatening."],
    ],
    solutions: [
      [
        "Office of Heat Response and Mitigation",
        "A dedicated city office coordinating heat response.",
        "Improves planning, cooling centres and outreach.",
      ],
      [
        "Cool pavement and shade",
        "Reflective pavement coatings and tree and shade programmes.",
        "Lowers surface temperatures locally.",
      ],
      [
        "Cooling centres and outreach",
        "Heat relief network and outreach to vulnerable residents.",
        "Reduces heat exposure during extreme events.",
      ],
    ],
    indicators: [
      {
        name: "Notable event",
        value: "Consecutive days at or above 110°F",
        year: 2023,
        description:
          "July 2023 set a record for consecutive days at or above 110°F, per the National Weather Service.",
      },
    ],
    sources: [
      [
        "National Weather Service Phoenix",
        "NOAA National Weather Service",
        "https://www.weather.gov/psr/",
      ],
      [
        "Maricopa County Department of Public Health",
        "Maricopa County",
        "https://www.maricopa.gov/",
      ],
      ["Office of Heat Response and Mitigation", "City of Phoenix", "https://www.phoenix.gov/"],
    ],
  },
  {
    location: "Phoenix",
    category: "water",
    title: "Colorado River supply and groundwater in Phoenix",
    severity: "high",
    summary:
      "Long-term drought on the Colorado River has led to cuts in Arizona's allocation, increasing focus on groundwater and conservation.",
    description:
      "The Phoenix area draws water from the Colorado River via the Central Arizona Project, from the Salt and Verde rivers, and from groundwater. A multi-decade drought and overallocation on the Colorado River lowered Lake Mead, leading the US Bureau of Reclamation to declare shortage conditions and reduce Arizona's allocation. Arizona's 1980 Groundwater Management Act requires new developments in active management areas to demonstrate an assured water supply.",
    causes: [
      ["Long-term drought", "Reduced snowpack and runoff in the Colorado River basin."],
      ["Overallocation", "Legal allocations exceed the river's reliable flow."],
      ["Population growth", "Rising demand in a fast-growing region."],
    ],
    impacts: [
      [
        "Reduced supply",
        "Shortage declarations cut Colorado River deliveries, especially to agriculture.",
      ],
      ["Limits on development", "Groundwater modelling has constrained some new subdivisions."],
    ],
    solutions: [
      [
        "Assured water supply rules",
        "Requirements that new development demonstrate long-term supply.",
        "Aligns growth with available water.",
      ],
      [
        "Water recycling and banking",
        "Recycled wastewater and underground storage of surplus water.",
        "Builds reserves for dry years.",
      ],
      [
        "Conservation",
        "Landscape conversion, efficient fixtures and pricing.",
        "Reduces per-capita use.",
      ],
    ],
    sources: [
      ["Lower Colorado Basin Region", "U.S. Bureau of Reclamation", "https://www.usbr.gov/lc/"],
      ["Arizona Department of Water Resources", "State of Arizona", "https://www.azwater.gov/"],
    ],
  },
  {
    location: "Western Canada",
    category: "climate",
    title: "Wildfire and heat in Western Canada",
    severity: "critical",
    summary:
      "Record-breaking heat and wildfire seasons have affected communities, forests and air quality across British Columbia and Alberta.",
    description:
      "In late June 2021, a heat dome brought unprecedented temperatures to British Columbia; the village of Lytton set a Canadian national temperature record and was destroyed by fire the next day. The BC Coroners Service reported hundreds of heat-related deaths. Canada's 2023 wildfire season was the most extensive on record nationally, forcing large evacuations, including in British Columbia and Alberta, and sending smoke across North America. Earlier, the 2016 Fort McMurray fire forced the evacuation of the entire city.",
    causes: [
      [
        "Warming climate",
        "Canada is warming faster than the global average, increasing heat extremes.",
      ],
      ["Drought and dry fuels", "Hot, dry conditions increase fire spread."],
      ["Lightning and human ignitions", "Both natural and human-caused ignitions start fires."],
      [
        "Forest conditions",
        "Insect outbreaks such as mountain pine beetle and fire suppression history affect fuel loads.",
      ],
    ],
    impacts: [
      ["Loss of life and homes", "Heat and fire have caused deaths and destroyed communities."],
      ["Smoke across the continent", "Wildfire smoke degrades air quality far from the fires."],
      [
        "Impacts on Indigenous communities",
        "Many First Nations communities have been evacuated repeatedly.",
      ],
      ["Forest carbon loss", "Large fires release substantial carbon."],
    ],
    solutions: [
      [
        "FireSmart programmes",
        "Community and home-level wildfire risk reduction.",
        "Reduces structure losses.",
      ],
      [
        "Cultural and prescribed burning",
        "Indigenous-led and prescribed burning to reduce fuel loads.",
        "Lowers the intensity of future fires.",
      ],
      [
        "Heat alert and response systems",
        "Provincial heat alerts, cooling centres and checks on vulnerable people.",
        "Reduces heat deaths.",
      ],
    ],
    indicators: [
      {
        name: "Notable event",
        value: "2021 western North America heat dome",
        year: 2021,
        description: "Set Canada's national temperature record at Lytton, British Columbia.",
      },
      {
        name: "Notable season",
        value: "Record national area burned",
        year: 2023,
        description: "Canada's most extensive wildfire season on record.",
      },
    ],
    sources: [
      [
        "Canadian Wildland Fire Information System",
        "Natural Resources Canada",
        "https://cwfis.cfs.nrcan.gc.ca/",
      ],
      ["Canadian Interagency Forest Fire Centre", "CIFFC", "https://ciffc.ca/"],
      [
        "Environment and Climate Change Canada",
        "Government of Canada",
        "https://www.canada.ca/en/environment-climate-change.html",
      ],
    ],
  },
  {
    location: "Arctic Canada",
    category: "climate",
    title: "Permafrost thaw in Arctic Canada",
    severity: "high",
    summary:
      "Warming is thawing permanently frozen ground, damaging infrastructure and changing northern landscapes and ways of life.",
    description:
      "Canada's Changing Climate Report (2019) found that northern Canada has warmed at about three times the global rate. Permafrost — ground that stays frozen for at least two consecutive years — underlies much of the territories. As it thaws, the ground can slump, damaging buildings, roads, airstrips and pipelines, and releasing carbon. Changes in sea ice, snow and weather also affect Inuit hunting, travel and food security.",
    causes: [
      ["Rapid Arctic warming", "Northern Canada is warming much faster than the global average."],
      ["Loss of snow and ice cover", "Reduced reflective cover amplifies warming."],
    ],
    impacts: [
      ["Infrastructure damage", "Thaw settlement damages foundations, roads and airstrips."],
      [
        "Risk to traditional travel and food",
        "Unpredictable ice conditions make travel and hunting more dangerous.",
      ],
      ["Carbon release", "Thawing permafrost can release carbon dioxide and methane."],
      ["Coastal erosion", "Reduced sea ice exposes coasts to wave erosion."],
    ],
    solutions: [
      [
        "Permafrost-aware engineering",
        "Thermosyphons, adjustable foundations and site-specific design.",
        "Extends the life of northern infrastructure.",
      ],
      [
        "Community-based monitoring",
        "Inuit-led monitoring of ice, land and wildlife, such as SmartICE.",
        "Improves safety and informs decisions.",
      ],
      [
        "Adaptation planning",
        "Territorial and community adaptation plans.",
        "Prioritises investment in at-risk infrastructure.",
      ],
    ],
    indicators: [
      {
        name: "Warming rate",
        value: "About three times the global rate",
        description: "Northern Canada, per Canada's Changing Climate Report (2019).",
      },
    ],
    sources: [
      [
        "Canada's Changing Climate Report",
        "Government of Canada",
        "https://changingclimate.ca/CCCR2019/",
        "2019-04-02",
      ],
      ["Natural Resources Canada", "Government of Canada", "https://natural-resources.canada.ca/"],
      ["Arctic Report Card", "NOAA", "https://arctic.noaa.gov/report-card/"],
    ],
  },
];
