import type { IssueSeed } from "./format.ts";

/**
 * Issues originally seeded in Supabase (migration 20260916175341).
 * Content is kept identical to the database rows.
 */
export const coreIssues: IssueSeed[] = [
  {
    location: "Lahore",
    category: "air",
    title: "Winter smog in Lahore",
    severity: "critical",
    summary: "Seasonal smog episodes sharply reduce air quality across the city each winter.",
    description:
      "Between roughly October and February, cool stable air traps pollution close to the ground over the Punjab plain. Traffic, brick kilns, industry, domestic burning and regional crop residue burning all contribute. Fine particulate matter (PM2.5) is the pollutant of greatest health concern because it penetrates deep into the lungs and bloodstream. Concentrations during episodes are documented by monitoring networks and by the World Health Organization as far above health-based guideline levels.",
    causes: [
      [
        "Temperature inversion",
        "Cool, stable winter air forms a lid over the Punjab plain, preventing pollutants from dispersing upward.",
      ],
      [
        "Road transport",
        "A large, ageing vehicle fleet with varying fuel and engine standards emits particulates and precursor gases.",
      ],
      [
        "Brick kilns and industry",
        "Traditional kilns and industrial combustion in and around the city release particulates, especially where cleaner technologies have not been adopted.",
      ],
      [
        "Regional crop residue burning",
        "Post-harvest burning across the wider Punjab region, on both sides of the border, adds smoke that travels into the airshed.",
      ],
      [
        "Domestic and waste burning",
        "Burning of solid fuel for heating and open burning of waste add localised particulate emissions.",
      ],
    ],
    impacts: [
      [
        "Respiratory and cardiovascular health",
        "Fine particulate exposure is associated with asthma, chronic obstructive pulmonary disease, heart disease and stroke; children and older people are most affected.",
      ],
      [
        "Disrupted schooling and work",
        "Authorities have closed schools and restricted activity during severe episodes, interrupting education and income.",
      ],
      [
        "Reduced visibility and transport disruption",
        "Dense smog reduces visibility on roads and at the airport, causing delays and accidents.",
      ],
      [
        "Agricultural and ecosystem effects",
        "Ground-level ozone and particulate deposition can reduce crop productivity in the surrounding agricultural region.",
      ],
    ],
    solutions: [
      [
        "Cleaner brick kiln technology",
        "Conversion of traditional kilns to zigzag firing, which burns fuel more completely, has been mandated and rolled out in Punjab.",
        "Reduces particulate emissions per brick produced; effect on city-wide concentrations depends on compliance and coverage.",
      ],
      [
        "Vehicle emission standards and fuel quality",
        "Tighter fuel sulphur limits, emissions testing and fleet renewal reduce transport-related particulates.",
        "Gradual reduction in a major local emission source as the fleet turns over.",
      ],
      [
        "Alternatives to crop residue burning",
        "Machinery such as the Happy Seeder, residue markets and enforcement reduce the need to burn stubble.",
        "Cuts a large seasonal regional contribution; requires cross-district and cross-border coordination.",
      ],
      [
        "Dense monitoring and public information",
        "Expanded reference-grade monitoring with public reporting enables targeted action and informed behaviour.",
        "Improves accountability and lets residents reduce exposure during peak episodes.",
      ],
      [
        "Public transport investment",
        "Mass transit capacity reduces the number of individual vehicle trips.",
        "Lowers transport emissions and congestion where ridership is high.",
      ],
    ],
    indicators: [
      {
        name: "WHO annual PM2.5 guideline",
        value: "5",
        unit: "µg/m³",
        year: 2021,
        description:
          "Health-based guideline level for annual mean fine particulate matter. Lahore's winter concentrations are documented as many times this level; use official monitoring for current values.",
      },
      {
        name: "Peak season",
        value: "October to February",
        description:
          "Qualitative indicator: smog episodes concentrate in the cool, stable winter months.",
      },
    ],
    sources: [
      [
        "WHO global air quality guidelines",
        "World Health Organization",
        "https://www.who.int/publications/i/item/9789240034228",
        "2021-09-22",
      ],
      [
        "Ambient (outdoor) air pollution fact sheet",
        "World Health Organization",
        "https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health",
      ],
      [
        "Punjab Environmental Protection Department",
        "Government of Punjab, Pakistan",
        "https://epd.punjab.gov.pk/",
      ],
    ],
  },
  {
    location: "Lahore",
    category: "nature",
    title: "Urban tree cover and heat in Lahore",
    severity: "moderate",
    summary: "Expanding built-up area and loss of green space intensify urban heat and dust.",
    description:
      "Rapid horizontal urban expansion has replaced vegetated land and agricultural plots with built surfaces. Tree canopy and open green space moderate surface temperature, retain dust and support infiltration of rainwater. Where canopy is lost, surfaces absorb and re-radiate more heat, and airborne dust is less readily captured. Restoring canopy is a recognised low-regret intervention, though its effect on regional particulate pollution is limited compared with controlling emission sources.",
    causes: [
      [
        "Horizontal urban expansion",
        "Low-density growth converts vegetated and agricultural land into built surfaces.",
      ],
      [
        "Road widening and construction",
        "Infrastructure projects frequently remove mature roadside trees, whose cooling benefit takes decades to replace.",
      ],
    ],
    impacts: [
      [
        "Higher daytime surface temperatures",
        "Built surfaces without shade absorb and re-emit more heat than vegetated ground.",
      ],
      [
        "Reduced dust capture and shade",
        "Tree canopy intercepts airborne dust and provides shade for pedestrians and street users.",
      ],
      [
        "Reduced rainfall infiltration",
        "Sealed surfaces send rainfall to drains rather than into the ground, increasing local flooding and reducing recharge.",
      ],
    ],
    solutions: [
      [
        "Native species urban forestry",
        "Planting and, critically, maintaining native, drought-tolerant trees along streets and in parks.",
        "Increases shade and dust capture over years to decades as canopy matures.",
      ],
      [
        "Protecting mature trees in road projects",
        "Design standards that retain existing canopy during infrastructure works.",
        "Preserves benefits that would take decades to re-establish.",
      ],
    ],
    indicators: [
      {
        name: "Canopy trend",
        description:
          "No verified city-wide canopy percentage is included here. Remote sensing studies report decline with urban expansion; consult a cited study for figures.",
      },
    ],
    sources: [
      [
        "Urban green spaces and health",
        "World Health Organization Regional Office for Europe",
        "https://www.who.int/europe/publications/i/item/WHO-EURO-2016-3352-43111-60341",
        "2016-01-01",
      ],
    ],
  },
  {
    location: "Karachi",
    category: "climate",
    title: "Extreme heat in Karachi",
    severity: "high",
    summary:
      "Humid heat events in a coastal megacity create serious health risk, especially during power interruptions.",
    description:
      "Karachi experiences high temperatures combined with coastal humidity, which limits the human body's ability to cool by sweating. The 2015 heatwave caused widespread heat-related illness and deaths, documented by Pakistani authorities and in peer-reviewed public health literature. Risk is concentrated among outdoor workers, people without reliable electricity for fans or cooling, and residents of dense, poorly ventilated housing with little shade.",
    causes: [
      [
        "Humid coastal climate",
        "High humidity limits evaporative cooling, so the body struggles to shed heat even at moderate air temperatures.",
      ],
      [
        "Urban heat island",
        "Dense construction, dark surfaces and limited vegetation keep built-up areas warmer than surroundings, especially at night.",
      ],
      [
        "Unreliable electricity supply",
        "Power interruptions during peak demand remove access to fans and cooling exactly when risk is highest.",
      ],
    ],
    impacts: [
      [
        "Heat-related illness and death",
        "The 2015 heatwave produced mass casualties, with hospitals overwhelmed by heatstroke and dehydration cases.",
      ],
      [
        "Occupational risk for outdoor workers",
        "Construction workers, street vendors and transport workers face sustained exposure with limited opportunity to rest or cool.",
      ],
      [
        "Strain on power and water systems",
        "Cooling demand peaks at the same time as water demand, stressing both networks simultaneously.",
      ],
    ],
    solutions: [
      [
        "Heat action plans",
        "Early warning, public advisories, cooling centres and pre-positioned medical response before forecast heat events.",
        "Reduces heat-related illness and death; the approach is proven in several South Asian cities.",
      ],
      [
        "Shade, water points and cool surfaces",
        "Shade structures, public drinking water and reflective or vegetated surfaces in high-exposure areas.",
        "Lowers exposure for outdoor workers and pedestrians at relatively low cost.",
      ],
      [
        "Reliable power during heat events",
        "Prioritising supply continuity for vulnerable areas and health facilities during heatwaves.",
        "Maintains access to cooling exactly when risk peaks.",
      ],
    ],
    indicators: [
      {
        name: "2015 heatwave",
        value: "Mass casualty event",
        year: 2015,
        description:
          "The June 2015 heatwave caused a documented surge in heat-related deaths in Karachi. Reported totals vary by source and counting method.",
      },
      {
        name: "WHO heat-health guidance",
        value: "Heat action plans recommended",
        year: 2021,
        description:
          "WHO and WMO recommend heat-health warning systems for cities exposed to dangerous heat.",
      },
    ],
    sources: [
      [
        "Heatwaves: health topic and heat-health warning guidance",
        "World Health Organization",
        "https://www.who.int/health-topics/heatwaves",
      ],
      [
        "Heat and health fact sheet",
        "World Health Organization",
        "https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health",
      ],
    ],
  },
  {
    location: "Karachi",
    category: "waste",
    title: "Solid waste and drainage blockage in Karachi",
    severity: "high",
    summary: "Uncollected waste blocks stormwater channels and worsens urban flooding.",
    description:
      "Collection coverage does not reach all neighbourhoods, and a significant share of municipal waste is dumped informally or burned. Plastic and mixed waste accumulate in natural and engineered drainage channels. During monsoon rainfall this reduces channel capacity and contributes to urban flooding. Open burning of waste also releases pollutants into local air.",
    causes: [
      [
        "Incomplete collection coverage",
        "Formal collection does not reach every neighbourhood, leaving waste to accumulate or be dumped informally.",
      ],
      [
        "Plastic in drainage channels",
        "Lightweight plastic waste migrates into stormwater drains and natural channels, reducing their capacity.",
      ],
      [
        "Encroachment on natural drains",
        "Construction on and alongside natural watercourses narrows the space available for flood flow.",
      ],
    ],
    impacts: [
      [
        "Urban flooding",
        "Blocked channels reduce drainage capacity, so monsoon rainfall pools in streets and homes.",
      ],
      [
        "Public health risk",
        "Standing water and accumulated waste support disease vectors and contaminate flood water.",
      ],
      [
        "Air pollution from open burning",
        "Burning mixed waste releases particulates and toxic compounds into neighbourhood air.",
      ],
      [
        "Marine and coastal litter",
        "Waste carried by drains and creeks reaches the coastline and the Arabian Sea.",
      ],
    ],
    solutions: [
      [
        "Extending collection coverage",
        "Expanding formal collection, including integration of informal waste workers, to underserved areas.",
        "Reduces the volume of waste reaching drains and open dumps.",
      ],
      [
        "Drain clearing before monsoon",
        "Systematic pre-season desilting and clearing of stormwater channels.",
        "Restores channel capacity ahead of peak rainfall.",
      ],
      [
        "Reducing single-use plastics",
        "Regulation and alternatives to reduce the lightweight plastics most likely to block drains.",
        "Cuts the material most responsible for blockage and coastal litter.",
      ],
    ],
    indicators: [
      {
        name: "Collection coverage",
        description:
          "Reliable city-wide collection coverage figures are contested; qualitative reporting consistently describes significant uncollected volumes.",
      },
    ],
    sources: [
      [
        "What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050",
        "World Bank",
        "https://openknowledge.worldbank.org/handle/10986/30317",
        "2018-09-20",
      ],
    ],
  },
  {
    location: "Jakarta",
    category: "water",
    title: "Land subsidence and flooding in Jakarta",
    severity: "critical",
    summary:
      "Parts of Jakarta are sinking, largely due to groundwater extraction, increasing flood exposure.",
    description:
      "Jakarta sits on a low-lying alluvial delta crossed by many rivers. Extensive extraction of groundwater for domestic and commercial supply compacts underlying sediments, causing the land surface to sink. Subsidence has been measured in northern Jakarta by geodetic surveys and satellite radar. As the ground drops relative to the sea, tidal flooding, river flooding and drainage failure all become harder to manage. Indonesia's response includes coastal defences, piped water expansion to reduce groundwater use, and the relocation of the national capital.",
    causes: [
      [
        "Groundwater extraction",
        "Pumping from shallow and deep aquifers compacts sediments and lowers the land surface.",
      ],
      [
        "Incomplete piped water coverage",
        "Where piped supply is unavailable or unreliable, households and businesses drill their own wells.",
      ],
      [
        "Delta geology and building loads",
        "Soft young alluvial sediments compact naturally and further under the weight of dense construction.",
      ],
      [
        "Upstream land use and river sedimentation",
        "Changes in the catchment increase runoff and sediment, reducing channel capacity downstream.",
      ],
    ],
    impacts: [
      [
        "Increased flood frequency and depth",
        "As the land sinks relative to the sea, the same rainfall or tide produces deeper, longer-lasting flooding.",
      ],
      [
        "Damage to buildings and infrastructure",
        "Differential settlement cracks structures, breaks pipes and damages roads and drainage.",
      ],
      [
        "Saltwater intrusion",
        "Lower land and depleted aquifers allow seawater to move into groundwater used for supply.",
      ],
      [
        "Displacement and economic loss",
        "Repeated flooding in northern districts disrupts livelihoods and can force relocation.",
      ],
    ],
    solutions: [
      [
        "Piped water expansion",
        "Extending reliable piped supply so users no longer need private wells.",
        "Directly addresses the main driver of subsidence, though the land does not rebound.",
      ],
      [
        "Groundwater extraction control",
        "Licensing, metering and restriction of extraction, particularly for large commercial users.",
        "Slows the rate of further sinking where enforced.",
      ],
      [
        "Coastal and river defences",
        "Sea walls, pumping stations and river normalisation to manage water levels.",
        "Buys time and reduces flood frequency, but requires continuous investment.",
      ],
      [
        "Relocation of capital functions",
        "Moving national government functions to Nusantara reduces future growth pressure on Jakarta.",
        "Reduces long-term demand growth; Jakarta remains the country's largest urban economy.",
      ],
    ],
    indicators: [
      {
        name: "Documented subsidence",
        value: "Measured in North Jakarta",
        description:
          "Geodetic and satellite studies document substantial subsidence in northern Jakarta, with rates varying strongly by district. Refer to the cited studies for site-specific rates.",
      },
      {
        name: "Primary driver",
        value: "Groundwater extraction",
        description:
          "Research consistently identifies groundwater extraction as the dominant cause, with sediment compaction and building loads as contributors.",
      },
    ],
    sources: [
      [
        "Land subsidence in coastal city of Semarang and Jakarta (research overview)",
        "Institut Teknologi Bandung geodesy research group",
        "https://www.itb.ac.id/",
      ],
      [
        "Indonesia: National Capital Integrated Coastal Development",
        "World Bank",
        "https://www.worldbank.org/en/country/indonesia",
      ],
    ],
  },
  {
    location: "Jakarta",
    category: "air",
    title: "Urban air pollution in Jakarta",
    severity: "high",
    summary:
      "Traffic, industry and power generation degrade air quality across the metropolitan area.",
    description:
      "The Jakarta metropolitan region combines heavy road traffic, industrial activity and nearby fossil-fuelled power generation. Air quality monitoring regularly records fine particulate concentrations above World Health Organization guideline levels, with the worst conditions in the dry season. Indonesian courts and government agencies have both addressed the issue, and emission controls, vehicle standards and public transport expansion are central responses.",
    causes: [
      [
        "Road traffic",
        "Large numbers of cars and motorcycles in a congested metropolitan area produce sustained emissions.",
      ],
      [
        "Industry and power generation",
        "Industrial facilities and fossil-fuelled power plants in the surrounding region contribute to the regional pollutant load.",
      ],
      [
        "Dry-season meteorology",
        "Reduced rainfall and weaker dispersion in the dry season allow pollutants to accumulate.",
      ],
    ],
    impacts: [
      [
        "Health burden",
        "Sustained fine particulate exposure raises rates of respiratory and cardiovascular disease across the metropolitan population.",
      ],
      [
        "Reduced productivity",
        "Illness and poor air quality days reduce working hours and school attendance.",
      ],
      [
        "Regional haze",
        "Pollution is not confined to city boundaries and affects surrounding settlements.",
      ],
    ],
    solutions: [
      [
        "Mass transit expansion",
        "MRT, LRT and bus rapid transit reduce dependence on private vehicles.",
        "Cuts transport emissions where networks connect origins and destinations well.",
      ],
      [
        "Emission standards and monitoring",
        "Vehicle emission testing, industrial standards and expanded monitoring with public reporting.",
        "Reduces emissions per source and improves enforcement.",
      ],
      [
        "Cleaner power generation",
        "Shifting regional generation away from coal toward lower-emission sources.",
        "Reduces a significant regional contribution to particulate pollution.",
      ],
    ],
    indicators: [
      {
        name: "WHO annual PM2.5 guideline",
        value: "5",
        unit: "µg/m³",
        year: 2021,
        description:
          "Jakarta's monitored annual averages are documented as well above this guideline; consult current monitoring for values.",
      },
    ],
    sources: [
      [
        "WHO Air Quality Database",
        "World Health Organization",
        "https://www.who.int/data/gho/data/themes/air-pollution",
        "2022-01-01",
      ],
    ],
  },
  {
    location: "Cape Town",
    category: "water",
    title: "Drought and municipal water security in Cape Town",
    severity: "high",
    summary: "The 2015-2018 drought brought the city close to shutting off its municipal supply.",
    description:
      'Cape Town depends on surface reservoirs filled by winter rainfall. Three consecutive poor rainfall years drew dam storage down to critical levels, and the city publicised a "Day Zero" at which municipal taps would largely be turned off. Severe restrictions, pressure management, leak repair and an extraordinary demand reduction by residents, together with returning rainfall, avoided that outcome. The episode is widely studied as a case of urban water crisis management, and the city has since diversified supply planning.',
    causes: [
      [
        "Consecutive low-rainfall years",
        "Three successive poor winter rainfall seasons reduced inflow to the supply dams.",
      ],
      [
        "Surface-water dependence",
        "A supply system built almost entirely on rainfall-fed reservoirs is highly sensitive to rainfall variability.",
      ],
      [
        "Demand growth and distribution losses",
        "Population growth and losses from ageing pipe networks raised baseline demand before the drought.",
      ],
    ],
    impacts: [
      [
        "Near shutdown of municipal supply",
        "The city planned for a day when most taps would be closed and residents would collect water from distribution points.",
      ],
      [
        "Economic disruption",
        "Agriculture in the surrounding region faced restrictions and job losses, and tourism messaging was affected.",
      ],
      [
        "Lasting behavioural change",
        "Household water use fell dramatically during the crisis and remained below pre-drought levels afterwards.",
      ],
    ],
    solutions: [
      [
        "Demand management and pressure control",
        "Tariffs, restrictions, leak repair and network pressure management to cut consumption and losses.",
        "Achieved a very large, sustained reduction in city water use during the crisis.",
      ],
      [
        "Supply diversification",
        "Groundwater schemes, water reuse and desalination to reduce reliance on rainfall alone.",
        "Lowers the risk that a single dry sequence threatens supply.",
      ],
      [
        "Catchment clearing of invasive species",
        "Removing thirsty invasive alien plants from supply catchments to increase runoff into dams.",
        "Recovers water at relatively low cost per unit compared with new infrastructure.",
      ],
    ],
    indicators: [
      {
        name: "Day Zero",
        value: "Announced, not reached",
        year: 2018,
        description:
          "The city publicly scheduled a date at which municipal supply would largely be shut off. Demand reduction and returning rainfall meant it was never reached.",
      },
      {
        name: "Drought period",
        value: "2015-2018",
        description:
          "Three consecutive below-average winter rainfall seasons drove reservoir storage to critical levels.",
      },
    ],
    sources: [
      [
        "Water Outlook and drought response reporting",
        "City of Cape Town",
        "https://www.capetown.gov.za/Family%20and%20home/residential-utility-services/residential-water-and-sanitation-services",
      ],
      [
        "Cape Town drought: lessons for urban water security (publisher site)",
        "World Resources Institute",
        "https://www.wri.org/",
        "2018-02-28",
      ],
    ],
  },
  {
    location: "Dubai",
    category: "energy",
    title: "Cooling demand and the energy transition in Dubai",
    severity: "moderate",
    summary: "Extreme heat drives very high cooling loads, shaping the city's energy system.",
    description:
      "In a desert climate, air conditioning is essential and represents a large share of building electricity demand, peaking in summer. Historically this demand has been met largely with natural gas generation. The emirate is deploying large-scale solar capacity, which aligns well with daytime cooling peaks, alongside building efficiency codes and district cooling. Full decarbonisation also requires evening and night-time supply, which is where storage and demand management matter.",
    causes: [
      [
        "Extreme summer temperatures",
        "Sustained high temperatures make mechanical cooling a necessity rather than a comfort choice.",
      ],
      [
        "Building stock and glazing",
        "Highly glazed towers gain heat rapidly unless shading, insulation and efficient systems are specified.",
      ],
      [
        "Gas-based generation legacy",
        "Electricity has historically been supplied largely by natural gas, tying cooling demand to fossil fuel use.",
      ],
    ],
    impacts: [
      [
        "High summer peak electricity demand",
        "Cooling produces a pronounced summer peak that shapes generation and grid investment.",
      ],
      [
        "Emissions from generation",
        "Where cooling electricity comes from gas, comfort and health needs translate directly into carbon emissions.",
      ],
      [
        "Vulnerability during outages",
        "Loss of power during extreme heat rapidly makes sealed, highly glazed buildings dangerous.",
      ],
    ],
    solutions: [
      [
        "Large-scale solar generation",
        "Utility-scale solar aligned with daytime cooling peaks.",
        "Displaces gas generation during the hours when cooling demand is highest.",
      ],
      [
        "Building efficiency codes",
        "Insulation, shading, glazing performance and efficient equipment requirements for new and retrofitted buildings.",
        "Reduces the cooling energy required for the same comfort level.",
      ],
      [
        "District cooling",
        "Centralised chilled-water systems serving many buildings more efficiently than individual units.",
        "Improves system efficiency and enables thermal storage.",
      ],
    ],
    indicators: [
      {
        name: "Demand pattern",
        value: "Summer peak",
        description: "Electricity demand peaks in summer, driven by air conditioning load.",
      },
    ],
    sources: [
      [
        "The Future of Cooling",
        "International Energy Agency",
        "https://www.iea.org/reports/the-future-of-cooling",
        "2018-05-15",
      ],
      [
        "Dubai Clean Energy Strategy",
        "Dubai Electricity and Water Authority",
        "https://www.dewa.gov.ae/",
      ],
    ],
  },
  {
    location: "Dubai",
    category: "water",
    title: "Desalination dependence in Dubai",
    severity: "moderate",
    summary: "Almost all potable water comes from energy-intensive desalination of seawater.",
    description:
      "The United Arab Emirates has very low natural renewable freshwater availability and relies on seawater desalination for most municipal supply. Desalination requires substantial energy and produces concentrated brine that is returned to the Gulf, a semi-enclosed and already saline sea. Efficiency improvements, a shift from thermal to membrane-based reverse osmosis, renewable-powered plants, treated wastewater reuse and demand management are the main levers.",
    causes: [
      [
        "Very low natural freshwater availability",
        "Rainfall is minimal and there are no significant perennial rivers or renewable aquifers.",
      ],
      [
        "High per-capita demand",
        "Landscaping, tourism and high living standards raise water use per person.",
      ],
      [
        "Brine discharge to a semi-enclosed sea",
        "Concentrated brine returned to the Gulf raises local salinity and temperature near outfalls.",
      ],
    ],
    impacts: [
      [
        "Energy use and emissions",
        "Producing potable water from seawater requires significant electricity or heat.",
      ],
      [
        "Brine and marine effects",
        "Concentrated, warm brine discharged near the coast can affect local marine ecosystems.",
      ],
      [
        "Supply chain dependency",
        "A water system dependent on continuously operating plant and power is sensitive to disruption.",
      ],
    ],
    solutions: [
      [
        "Reverse osmosis instead of thermal desalination",
        "Membrane-based plants use substantially less energy per cubic metre than older thermal processes.",
        "Lowers the energy and emissions intensity of water supply.",
      ],
      [
        "Renewable-powered desalination",
        "Coupling desalination with solar generation.",
        "Reduces the emissions associated with each unit of water produced.",
      ],
      [
        "Treated wastewater reuse",
        "Using recycled water for landscaping, cooling and industry instead of desalinated potable water.",
        "Reduces the volume that must be desalinated.",
      ],
    ],
    indicators: [
      {
        name: "Renewable freshwater availability",
        value: "Among the lowest globally",
        description:
          "The UAE is consistently classed by FAO and World Bank data as extremely water-scarce in natural renewable freshwater terms.",
      },
    ],
    sources: [
      [
        "AQUASTAT water resources database",
        "Food and Agriculture Organization of the United Nations",
        "https://www.fao.org/aquastat/en/",
      ],
      [
        "The State of Desalination and Brine Production: A Global Outlook",
        "UN University Institute for Water, Environment and Health",
        "https://inweh.unu.edu/",
        "2019-01-14",
      ],
    ],
  },
  {
    location: "Miami",
    category: "oceans",
    title: "Sea level rise and tidal flooding in Miami",
    severity: "critical",
    summary: "Rising seas cause recurrent sunny-day flooding and threaten freshwater supplies.",
    description:
      "South Florida sits at low elevation on highly porous limestone, so seawater moves through the bedrock as well as over the surface. Tide gauge and satellite records document sea level rise along the southeastern United States coast. The practical consequences include high-tide flooding of streets and stormwater systems that cannot drain by gravity, saltwater intrusion into the Biscayne aquifer that supplies drinking water, and greater storm surge reach during hurricanes.",
    causes: [
      [
        "Global sea level rise",
        "Thermal expansion of seawater and melting land ice raise mean sea level, documented by tide gauges and satellite altimetry.",
      ],
      [
        "Porous limestone bedrock",
        "Water moves through the underlying limestone, so seawalls alone cannot prevent water emerging inland.",
      ],
      [
        "Very low ground elevation",
        "Much of the metropolitan area sits only a few metres above mean sea level.",
      ],
      [
        "Gravity-based stormwater drainage",
        "Drainage designed to discharge by gravity loses capacity as sea level rises.",
      ],
    ],
    impacts: [
      [
        "Recurrent high-tide flooding",
        "Streets and low-lying property flood during seasonal high tides without any storm present.",
      ],
      [
        "Saltwater intrusion into drinking water",
        "Salt moving inland through the Biscayne aquifer threatens wellfields that supply the region.",
      ],
      [
        "Stormwater and septic system failure",
        "Higher groundwater reduces drainage capacity and can prevent septic systems from functioning.",
      ],
      [
        "Property and insurance pressure",
        "Repeated flooding affects insurance availability, cost and long-term property value.",
      ],
    ],
    solutions: [
      [
        "Stormwater pumps and one-way valves",
        "Installing pumping and backflow prevention where gravity drainage no longer works.",
        "Reduces recurrent tidal street flooding in treated areas.",
      ],
      [
        "Road and seawall elevation standards",
        "Raising roads and requiring minimum seawall heights and freeboard for new construction.",
        "Protects specific assets; requires coordination so water is not simply displaced.",
      ],
      [
        "Aquifer and wellfield protection",
        "Managing groundwater levels and relocating or protecting wellfields threatened by salt intrusion.",
        "Safeguards drinking water supply for the region.",
      ],
      [
        "Regional planning with shared projections",
        "Using common sea level rise projections across counties for infrastructure planning.",
        "Avoids inconsistent standards and poorly matched investment.",
      ],
    ],
    indicators: [
      {
        name: "Global mean sea level trend",
        value: "Rising",
        description:
          "NOAA and IPCC document ongoing global mean sea level rise. Consult the NOAA Virginia Key tide gauge record for the local trend.",
      },
      {
        name: "Local aquifer",
        value: "Biscayne aquifer",
        description:
          "The shallow, highly permeable Biscayne aquifer is the region's primary drinking water source and is vulnerable to saltwater intrusion.",
      },
    ],
    sources: [
      [
        "Sea Level Rise Technical Report (NOAA sea level rise portal)",
        "NOAA / US Interagency Sea Level Rise Task Force",
        "https://oceanservice.noaa.gov/hazards/sealevelrise/",
        "2022-02-15",
      ],
      [
        "Unified Sea Level Rise Projection",
        "Southeast Florida Regional Climate Change Compact",
        "https://southeastfloridaclimatecompact.org/",
        "2019-01-01",
      ],
      [
        "Saltwater intrusion in the Biscayne aquifer",
        "United States Geological Survey",
        "https://www.usgs.gov/centers/car-fl-water/science/saltwater-intrusion",
      ],
    ],
  },
  {
    location: "Miami",
    category: "climate",
    title: "Hurricane and storm surge exposure in Miami",
    severity: "high",
    summary:
      "Dense coastal development concentrates people and assets in the path of tropical cyclones.",
    description:
      "Southeast Florida is one of the most hurricane-exposed metropolitan areas in the United States. Risk is a combination of hazard, exposure and vulnerability: decades of coastal development have placed very large populations and property values close to the shoreline, while rising sea level raises the baseline from which storm surge acts. Building codes, evacuation planning, wetland and dune restoration and insurance reform all form part of the response.",
    causes: [
      [
        "Tropical cyclone climatology",
        "Southeast Florida lies within one of the Atlantic basin's most frequently affected regions.",
      ],
      [
        "Concentrated coastal development",
        "Decades of building close to the shoreline place very large populations and asset values in the surge zone.",
      ],
      [
        "Loss of natural coastal buffers",
        "Wetlands, dunes and mangroves that dissipate wave and surge energy have been reduced by development.",
      ],
    ],
    impacts: [
      [
        "Loss of life and injury",
        "Storm surge is historically the deadliest hazard associated with landfalling hurricanes.",
      ],
      [
        "Large economic losses",
        "Concentrated coastal assets mean a single severe storm can cause very large insured and uninsured losses.",
      ],
      [
        "Ecosystem and coastal damage",
        "Surge, waves and debris damage reefs, mangroves, beaches and coastal wetlands.",
      ],
    ],
    solutions: [
      [
        "Strong building codes",
        "Florida's post-Andrew building code requirements for wind resistance and openings.",
        "Demonstrably reduces structural damage in high-wind events.",
      ],
      [
        "Evacuation planning and warning",
        "Surge-zone based evacuation planning with National Hurricane Center forecasts and warnings.",
        "Saves lives; effectiveness depends on lead time and compliance.",
      ],
      [
        "Natural coastal buffers",
        "Restoring mangroves, dunes, reefs and wetlands that absorb wave and surge energy.",
        "Reduces surge and wave damage while providing habitat and recreation benefits.",
      ],
    ],
    indicators: [
      {
        name: "Building code baseline",
        value: "Florida Building Code",
        year: 2002,
        description:
          "Statewide code adopted after Hurricane Andrew, with high-velocity hurricane zone requirements for Miami-Dade and Broward counties.",
      },
    ],
    sources: [
      ["Storm surge overview", "NOAA National Hurricane Center", "https://www.nhc.noaa.gov/surge/"],
      ["Florida Building Code", "Florida Building Commission", "https://floridabuilding.org/"],
    ],
  },
  {
    location: "Manaus / Amazon",
    category: "nature",
    title: "Amazon deforestation and forest degradation",
    severity: "critical",
    summary:
      "Clearing and degradation reduce forest cover with global climate and biodiversity consequences.",
    description:
      "The Brazilian Amazon is monitored continuously by Brazil's National Institute for Space Research (INPE), whose PRODES and DETER systems publish annual and near-real-time deforestation data. Clearing is driven mainly by conversion to pasture and cropland, land speculation, road access and illegal logging and mining. Beyond outright clearing, fire and selective logging degrade forest that remains standing. Consequences include carbon emissions, biodiversity loss and disruption of the moisture recycling that sustains regional rainfall.",
    causes: [
      [
        "Conversion to pasture and cropland",
        "Clearing for cattle ranching and, subsequently, crops is the dominant direct driver of forest loss.",
      ],
      [
        "Road access and land speculation",
        "New and improved roads open previously remote forest to occupation and speculative land claims.",
      ],
      [
        "Illegal logging and mining",
        "Unauthorised timber extraction and gold mining damage forest and watercourses.",
      ],
      [
        "Fire",
        "Fire used to clear land escapes into standing forest, which is not naturally fire-adapted.",
      ],
    ],
    impacts: [
      [
        "Carbon emissions",
        "Clearing and burning release stored carbon and reduce the forest's capacity to absorb it.",
      ],
      [
        "Biodiversity loss",
        "The Amazon holds an exceptional concentration of species, many with restricted ranges, which are lost with their habitat.",
      ],
      [
        "Disrupted rainfall recycling",
        "The forest recycles moisture that sustains rainfall regionally and downwind; large-scale loss weakens that mechanism.",
      ],
      [
        "Impacts on Indigenous and local communities",
        "Forest loss, fire and mining affect territories, health, food systems and water quality of forest-dependent peoples.",
      ],
    ],
    solutions: [
      [
        "Satellite monitoring and enforcement",
        "INPE's DETER alerts enable rapid enforcement action against illegal clearing.",
        "Enforcement backed by near-real-time detection has historically coincided with sharp falls in clearing rates.",
      ],
      [
        "Protected areas and Indigenous territories",
        "Legally recognised protected and Indigenous lands consistently show lower deforestation than surrounding areas.",
        "Preserves large contiguous forest and the communities that steward it.",
      ],
      [
        "Deforestation-free supply chains",
        "Traceability and market agreements for beef, soy and timber that exclude recently cleared land.",
        "Removes the market incentive for clearing where monitoring is credible.",
      ],
      [
        "Restoration and bioeconomy",
        "Restoring degraded land and supporting forest-based livelihoods that depend on standing forest.",
        "Recovers ecosystem function over time and offers economic alternatives to clearing.",
      ],
    ],
    indicators: [
      {
        name: "Monitoring system",
        value: "PRODES / DETER",
        description:
          "Brazil's INPE publishes annual (PRODES) and near-real-time (DETER) deforestation data for the Legal Amazon. Use the official dashboard for current annual figures.",
      },
      {
        name: "Dominant direct driver",
        value: "Conversion to pasture",
        description:
          "Research consistently identifies cattle pasture as the largest single land use replacing cleared Amazon forest.",
      },
    ],
    sources: [
      [
        "PRODES and DETER Amazon deforestation monitoring",
        "Instituto Nacional de Pesquisas Espaciais (INPE), Brazil",
        "http://terrabrasilis.dpi.inpe.br/",
      ],
      [
        "Global Forest Review: Amazon",
        "World Resources Institute / Global Forest Watch",
        "https://www.globalforestwatch.org/",
      ],
      [
        "IPCC Special Report on Climate Change and Land",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/srccl/",
        "2019-08-08",
      ],
    ],
  },
  {
    location: "Manaus / Amazon",
    category: "water",
    title: "Extreme river drought in the Amazon basin",
    severity: "high",
    summary: "Severe low-water events disrupt river transport, supply and ecosystems.",
    description:
      "Amazonian communities depend on rivers for transport, food and water. In recent severe droughts, river levels at Manaus and across the basin fell far enough to strand vessels, isolate communities, interrupt supply chains and cause fish and river dolphin mortality. Brazilian hydrological services publish river level records for Manaus that span more than a century, allowing individual events to be placed in historical context.",
    causes: [
      [
        "Rainfall deficit in the basin",
        "Extended periods of below-normal rainfall reduce river discharge across the catchment.",
      ],
      [
        "Ocean temperature patterns",
        "El Nino conditions and unusually warm tropical Atlantic surface temperatures shift rainfall away from parts of the basin.",
      ],
      [
        "Forest loss and moisture recycling",
        "Reduced forest cover weakens the evapotranspiration that recycles moisture and sustains regional rainfall.",
      ],
    ],
    impacts: [
      [
        "Isolated communities",
        "When rivers are the only roads, low water cuts off access to food, fuel, medicine and markets.",
      ],
      [
        "Fish and wildlife mortality",
        "Shallow, unusually warm water has caused large fish die-offs and deaths of river dolphins.",
      ],
      [
        "Disrupted transport and energy",
        "Cargo and passenger vessels are stranded, and hydropower and supply chains are affected.",
      ],
      [
        "Increased fire risk",
        "Dry conditions make both cleared land and standing forest far more flammable.",
      ],
    ],
    solutions: [
      [
        "River level monitoring and early warning",
        "Hydrological monitoring that allows communities and logistics operators to prepare for low water.",
        "Reduces the impact of isolation by enabling pre-positioning of supplies.",
      ],
      [
        "Emergency supply logistics",
        "Pre-planned delivery of water, food, fuel and medicine to river communities during low-water periods.",
        "Limits humanitarian impact during severe events.",
      ],
      [
        "Forest protection as drought mitigation",
        "Maintaining forest cover to sustain the moisture recycling that supports regional rainfall.",
        "Addresses one contributing factor over the long term.",
      ],
    ],
    indicators: [
      {
        name: "Manaus river level record",
        value: "Recorded since 1902",
        description:
          "The Rio Negro gauge at Manaus provides one of the longest continuous river level records in the tropics, maintained by Brazilian hydrological services.",
      },
    ],
    sources: [
      [
        "Hydrological monitoring of the Rio Negro at Manaus",
        "Serviço Geológico do Brasil (CPRM/SGB)",
        "https://www.sgb.gov.br/",
      ],
      [
        "Drought monitoring and civil protection reporting",
        "Centro Nacional de Monitoramento e Alertas de Desastres Naturais (Cemaden), Brazil",
        "https://www.gov.br/cemaden/",
      ],
    ],
  },
  {
    location: "Singapore",
    category: "water",
    title: "Water security on a land-scarce island",
    severity: "moderate",
    summary:
      "A city-state with no natural freshwater reserves has engineered a diversified supply.",
    description:
      'Singapore has a small land area, high population density and no natural aquifers or large rivers. Its national water agency describes supply as "four national taps": local catchment water, imported water, reclaimed water (NEWater) and desalinated water. Rainfall is abundant but storage is limited by land, so catchment, reclamation and desalination are combined with strong demand management and leak control. The approach is internationally cited, but reclamation and desalination are energy intensive.',
    causes: [
      [
        "No natural freshwater reserves",
        "There are no significant aquifers or large rivers within the national territory.",
      ],
      [
        "Limited land for catchment and storage",
        "High population density restricts the area available for reservoirs and protected catchment.",
      ],
      [
        "Dense urban demand",
        "A concentrated population and significant industrial and commercial demand require a reliable year-round supply.",
      ],
    ],
    impacts: [
      [
        "Energy cost of supply",
        "Reclaimed and desalinated water require continuous energy input, linking water security to the power system.",
      ],
      [
        "Exposure to prolonged dry spells",
        "Local catchment yield falls during dry periods, increasing reliance on the other supply sources.",
      ],
      [
        "Land use trade-offs",
        "Reservoirs, catchment protection and treatment plant all compete with other uses for scarce land.",
      ],
    ],
    solutions: [
      [
        "Water reclamation (NEWater)",
        "High-grade reclaimed water produced from treated used water through advanced membrane treatment.",
        "Creates a supply source independent of rainfall.",
      ],
      [
        "Desalination",
        "Seawater desalination plants adding weather-independent capacity.",
        "Improves drought resilience at the cost of higher energy use.",
      ],
      [
        "Catchment expansion and demand management",
        "Maximising the island area used as water catchment, alongside pricing, education and leak control.",
        "Increases local yield and holds down per-capita demand.",
      ],
    ],
    indicators: [
      {
        name: "Supply sources",
        value: "Four national taps",
        description:
          "Singapore's national water agency describes supply as local catchment, imported water, NEWater and desalinated water.",
      },
    ],
    sources: [
      [
        "Singapore Water Story: the four national taps",
        "PUB, Singapore's National Water Agency",
        "https://www.pub.gov.sg/Public/WaterLoop/SingaporeWaterStory",
      ],
    ],
  },
  {
    location: "Singapore",
    category: "waste",
    title: "Waste and landfill capacity in Singapore",
    severity: "high",
    summary:
      "With almost no land for landfill, waste is incinerated and the ash sent to a single offshore site.",
    description:
      "Non-recycled waste is incinerated for energy recovery, and the resulting ash plus non-incinerable waste is deposited at Semakau Landfill, the country's only remaining landfill site. Because land is finite, extending the landfill's life depends directly on reducing waste generated and increasing material recovery. National policy has therefore focused on a circular economy approach, including packaging reporting and extended producer responsibility for electronics.",
    causes: [
      [
        "Severe land scarcity",
        "There is effectively no space for conventional landfill within the national territory.",
      ],
      [
        "High consumption and packaging volumes",
        "An affluent, dense, import-dependent economy generates substantial packaging and disposable material.",
      ],
      [
        "Low recovery rates for some materials",
        "Domestic recycling rates for materials such as plastics remain well below those for industrial metals and construction debris.",
      ],
    ],
    impacts: [
      [
        "Finite landfill life",
        "Semakau Landfill has a limited remaining capacity, and every tonne of ash shortens it.",
      ],
      [
        "Emissions from incineration",
        "Waste-to-energy recovers electricity but still releases carbon dioxide and requires emissions control.",
      ],
      [
        "Resource loss",
        "Materials that are incinerated rather than recovered are permanently lost from the economy.",
      ],
    ],
    solutions: [
      [
        "Waste-to-energy incineration",
        "Incineration reduces waste volume substantially while recovering electricity.",
        "Extends landfill life; does not remove the need to reduce waste at source.",
      ],
      [
        "Extended producer responsibility",
        "Obligations on producers for packaging and electronic waste, including reporting and take-back.",
        "Shifts the cost and design incentive toward recoverable products.",
      ],
      [
        "Circular economy measures",
        "Food waste segregation, materials recovery and reuse targets under national waste strategy.",
        "Reduces the volume requiring incineration and the ash sent to landfill.",
      ],
    ],
    indicators: [
      {
        name: "Landfill sites",
        value: "One",
        description:
          "Semakau Landfill is the country's only remaining landfill. Its projected closure year is published and updated by the national environment agency.",
      },
    ],
    sources: [
      [
        "Waste statistics and overall recycling",
        "National Environment Agency, Singapore",
        "https://www.nea.gov.sg/our-services/waste-management/waste-statistics-and-overall-recycling",
      ],
      [
        "Zero Waste Masterplan",
        "Ministry of Sustainability and the Environment, Singapore",
        "https://www.mse.gov.sg/",
        "2019-08-30",
      ],
    ],
  },
  {
    location: "Delhi",
    category: "air",
    title: "Delhi's winter air pollution",
    severity: "critical",
    summary:
      "Meteorology, regional burning and local emissions produce extreme seasonal particulate pollution.",
    description:
      "Each winter, cold stagnant air over the Indo-Gangetic Plain traps emissions near the surface. Transport, industry, construction dust, waste burning, domestic fuel use and post-monsoon crop residue burning in neighbouring states all contribute. The World Health Organization and Indian monitoring agencies document fine particulate concentrations far above health-based guidelines during these episodes. Responses include a graded emergency response plan, fuel and vehicle standards, and programmes to provide alternatives to crop residue burning.",
    causes: [
      [
        "Winter meteorology over the Indo-Gangetic Plain",
        "Cold, still air and shallow mixing depth trap emissions near ground level.",
      ],
      [
        "Crop residue burning in neighbouring states",
        "Post-monsoon stubble burning produces smoke that is transported into the region.",
      ],
      [
        "Transport emissions",
        "A very large vehicle fleet in a sprawling metropolitan region emits particulates and precursor gases.",
      ],
      [
        "Construction and road dust",
        "Continuous construction activity and unpaved surfaces contribute coarse and fine dust.",
      ],
      [
        "Industry, waste burning and domestic fuel",
        "Industrial combustion, open waste burning and solid fuel use for cooking and heating add to the load.",
      ],
    ],
    impacts: [
      [
        "Severe health burden",
        "Exposure to very high fine particulate concentrations is linked to respiratory disease, cardiovascular disease and premature mortality.",
      ],
      [
        "School closures and restricted activity",
        "Emergency measures during severe episodes include closing schools and halting construction.",
      ],
      [
        "Economic cost",
        "Health care costs, lost working days and reduced productivity accompany prolonged pollution episodes.",
      ],
      [
        "Reduced visibility",
        "Dense haze disrupts road, rail and air transport during peak episodes.",
      ],
    ],
    solutions: [
      [
        "Graded Response Action Plan",
        "A staged set of emergency measures triggered automatically as air quality deteriorates.",
        "Reduces some emissions during peak episodes; it is a response mechanism, not a structural fix.",
      ],
      [
        "Crop residue management",
        "Machinery, incentives and alternative uses to avoid burning stubble in neighbouring states.",
        "Addresses a major seasonal regional contribution; requires sustained inter-state programmes.",
      ],
      [
        "Fuel and vehicle standards",
        "Bharat Stage VI fuels and vehicles, CNG fleets and electrification of public transport.",
        "Structurally reduces transport emissions as the fleet turns over.",
      ],
      [
        "Dust control on construction and roads",
        "Site covering, water spraying, mechanised sweeping and paving of shoulders.",
        "Reduces the coarse and fine dust fraction of local pollution.",
      ],
      [
        "Airshed-level governance",
        "Coordinated management across the National Capital Region rather than city boundaries alone.",
        "Matches the scale of policy to the scale of the pollution problem.",
      ],
    ],
    indicators: [
      {
        name: "WHO annual PM2.5 guideline",
        value: "5",
        unit: "µg/m³",
        year: 2021,
        description:
          "Delhi's monitored winter concentrations are documented at many times this guideline; consult CPCB monitoring for current values.",
      },
      {
        name: "Emergency framework",
        value: "Graded Response Action Plan",
        description:
          "A staged response plan triggered by measured air quality index thresholds across the National Capital Region.",
      },
    ],
    sources: [
      [
        "Graded Response Action Plan",
        "Commission for Air Quality Management in the NCR, India",
        "https://caqm.nic.in/",
      ],
      [
        "National Air Quality Index and monitoring data",
        "Central Pollution Control Board, India",
        "https://cpcb.nic.in/",
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
    location: "Delhi",
    category: "water",
    title: "Groundwater depletion in the Delhi region",
    severity: "high",
    summary: "Extraction exceeds recharge across much of the National Capital Territory.",
    description:
      "India's Central Ground Water Board assesses groundwater extraction against recharge across the country and has repeatedly classed large parts of Delhi as over-exploited. Urban expansion has sealed recharge surfaces, while piped supply gaps push households and businesses to rely on borewells. Falling water tables raise pumping energy costs, can worsen water quality, and reduce resilience during dry years.",
    causes: [
      [
        "Extraction exceeding recharge",
        "Annual withdrawal from aquifers is greater than the volume naturally replenished.",
      ],
      [
        "Sealed recharge surfaces",
        "Paving and building over open ground prevents rainfall from infiltrating to the water table.",
      ],
      [
        "Gaps in piped supply",
        "Where the network is intermittent or absent, users install private borewells.",
      ],
    ],
    impacts: [
      [
        "Falling water tables",
        "Water must be pumped from greater depth, raising energy use and cost.",
      ],
      [
        "Water quality deterioration",
        "Deeper extraction can mobilise naturally occurring contaminants and increase salinity.",
      ],
      [
        "Reduced drought resilience",
        "A depleted aquifer provides less buffer when surface supplies are stressed.",
      ],
    ],
    solutions: [
      [
        "Managed aquifer recharge",
        "Engineered recharge structures, restored water bodies and rainwater harvesting.",
        "Returns water to the aquifer where geology and water quality allow.",
      ],
      [
        "Metering and extraction regulation",
        "Licensing and monitoring of borewells, particularly for commercial users.",
        "Slows depletion where enforcement is effective.",
      ],
      [
        "Reliable piped supply and leak reduction",
        "Improving network coverage and reducing distribution losses so users do not depend on private wells.",
        "Reduces the underlying demand for groundwater.",
      ],
    ],
    indicators: [
      {
        name: "Assessment category",
        value: "Over-exploited units",
        description:
          "India's Central Ground Water Board has repeatedly classified much of Delhi's assessment area as over-exploited, meaning extraction exceeds annual recharge.",
      },
    ],
    sources: [
      [
        "National Compilation on Dynamic Ground Water Resources of India",
        "Central Ground Water Board, India",
        "https://cgwb.gov.in/",
      ],
    ],
  },
  {
    location: "Rotterdam",
    category: "climate",
    title: "Living below sea level: Rotterdam's delta defence",
    severity: "moderate",
    summary:
      "Most of the city lies below sea level and depends on continuous engineered protection.",
    description:
      "Rotterdam sits in the Rhine-Meuse delta, with the majority of its area below sea level. Protection combines dikes, the Maeslant storm surge barrier, pumping and a national Delta Programme that plans decades ahead for sea level rise and changing river discharge. The city has also pioneered adaptation inside the flood defences, including water plazas, green roofs and water storage in public space to manage intense rainfall.",
    causes: [
      [
        "Low-lying delta geography",
        "Most of the city lies below sea level in the Rhine-Meuse delta.",
      ],
      [
        "Sea level rise",
        "Rising mean sea level increases the load on defences and the frequency of extreme water levels.",
      ],
      [
        "Intense rainfall and river discharge",
        "Heavy downpours and high river flows can overwhelm drainage inside the defences.",
      ],
    ],
    impacts: [
      [
        "Permanent dependence on defences",
        "Safety relies on continuously maintained dikes, barriers and pumps rather than natural elevation.",
      ],
      [
        "Rainfall flooding inside the defences",
        "Intense downpours can flood streets and basements even when the sea and rivers are held back.",
      ],
      [
        "Rising long-term adaptation cost",
        "Higher sea level means defences must be raised, strengthened and eventually rethought.",
      ],
    ],
    solutions: [
      [
        "Storm surge barriers and dikes",
        "The Maeslant barrier and the national dike system close off or hold back extreme water levels.",
        "Provides a very high standard of protection, maintained and upgraded over time.",
      ],
      [
        "Water plazas and green roofs",
        "Public squares designed to hold stormwater temporarily, plus roof-level retention.",
        "Reduces peak load on drainage during intense rainfall while adding public space.",
      ],
      [
        "Adaptive Delta Programme planning",
        "A national programme that revisits assumptions and measures regularly as conditions change.",
        "Avoids locking in decisions based on a single sea level scenario.",
      ],
    ],
    indicators: [
      {
        name: "Land below sea level",
        value: "Majority of city area",
        description:
          "Municipal and national sources describe the greater part of Rotterdam as lying below mean sea level.",
      },
      {
        name: "Storm surge barrier",
        value: "Maeslantkering",
        year: 1997,
        description:
          "Completed movable storm surge barrier protecting the Nieuwe Waterweg, closing automatically at defined water levels.",
      },
    ],
    sources: [
      ["Delta Programme", "Government of the Netherlands", "https://english.deltaprogramma.nl/"],
      ["Rotterdam Climate Adaptation Strategy", "Gemeente Rotterdam", "https://www.rotterdam.nl/"],
    ],
  },
  {
    location: "Rotterdam",
    category: "energy",
    title: "Port decarbonisation in Rotterdam",
    severity: "high",
    summary:
      "Europe's largest seaport is also a major industrial emissions cluster undergoing transition.",
    description:
      "The port hosts refineries, chemical plants and bulk fossil fuel handling, making it one of the largest single concentrations of industrial carbon emissions in the European Union. The Port of Rotterdam Authority and Dutch government have published a transition strategy built around electrification, hydrogen import and production, carbon capture and storage in depleted offshore gas fields, and circular feedstocks. Progress is measurable but the transition is long-term and capital intensive.",
    causes: [
      [
        "Refining and petrochemical cluster",
        "Refineries and chemical plants require high-temperature heat and fossil feedstocks.",
      ],
      [
        "Fossil fuel handling and shipping",
        "Bulk handling of coal and oil products and the fuelling of ships tie the port to fossil value chains.",
      ],
      [
        "Long asset lifetimes",
        "Industrial plant is capital intensive and replaced over decades, slowing the pace of change.",
      ],
    ],
    impacts: [
      [
        "Concentrated industrial emissions",
        "A large share of national industrial carbon emissions originates in the port area.",
      ],
      [
        "Local air quality and nitrogen deposition",
        "Industry and shipping affect local air quality and contribute to nitrogen deposition on nearby nature areas.",
      ],
      [
        "Economic transition risk",
        "Employment and revenue tied to fossil value chains must be transformed rather than simply removed.",
      ],
    ],
    solutions: [
      [
        "Carbon capture and storage",
        "The Porthos project transports captured industrial carbon dioxide to depleted offshore gas fields for permanent storage.",
        "Addresses emissions from processes that are hard to electrify in the near term.",
      ],
      [
        "Hydrogen import and production",
        "Electrolysis capacity and import terminals to supply hydrogen for industry and fuel.",
        "Enables substitution of fossil feedstocks and high-temperature heat over time.",
      ],
      [
        "Shore power and electrification",
        "Supplying berthed ships with electricity and electrifying industrial heat where feasible.",
        "Cuts emissions and local air pollution from vessels at berth.",
      ],
    ],
    indicators: [
      {
        name: "Emissions profile",
        value: "Largest Dutch industrial cluster",
        description:
          "The Rotterdam port-industrial complex is the largest single concentration of industrial carbon emissions in the Netherlands.",
      },
    ],
    sources: [
      [
        "Porthos carbon capture and storage project",
        "Porthos / Port of Rotterdam Authority",
        "https://www.porthosco2.nl/en/",
      ],
      [
        "Port of Rotterdam energy transition",
        "Port of Rotterdam Authority",
        "https://www.portofrotterdam.com/en/port-future/energy-transition",
      ],
    ],
  },
];
