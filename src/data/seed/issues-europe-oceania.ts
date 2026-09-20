import type { IssueSeed } from "./format.ts";

/** Issues for detailed locations in Europe, Oceania and the Arctic. */
export const europeOceaniaIssues: IssueSeed[] = [
  {
    location: "Great Barrier Reef",
    category: "oceans",
    title: "Marine heatwaves and coral bleaching on the Great Barrier Reef",
    severity: "critical",
    summary:
      "Repeated mass bleaching events driven by ocean warming are the greatest threat to the reef.",
    description:
      "When sea temperatures stay unusually high, corals expel the symbiotic algae that provide much of their energy and colour, and turn white. Prolonged or severe bleaching kills corals. The Great Barrier Reef Marine Park Authority has documented mass bleaching events in 2016, 2017, 2020, 2022 and 2024, with the shortening gap between events leaving less time for recovery. The Authority's 2024 Outlook Report identifies climate change as the greatest threat to the reef's long-term outlook. NOAA's Coral Reef Watch monitors heat stress globally.",
    causes: [
      [
        "Ocean warming",
        "Rising sea temperatures from greenhouse gas emissions increase marine heatwave frequency and intensity.",
      ],
      ["El Niño and regional variability", "Climate patterns can amplify summer heat on the reef."],
      [
        "Ocean acidification",
        "Absorbed carbon dioxide reduces the ability of corals to build skeletons.",
      ],
    ],
    impacts: [
      ["Coral mortality", "Severe bleaching kills corals across large areas of reef."],
      ["Biodiversity loss", "Fish and other species that depend on coral habitat decline."],
      ["Tourism and livelihoods", "Reef tourism supports many jobs in Queensland."],
      ["Cultural impacts", "Traditional Owners have deep cultural connections to Sea Country."],
    ],
    solutions: [
      [
        "Global emission reductions",
        "Limiting warming is the only way to reduce the underlying driver.",
        "Determines the long-term future of coral reefs worldwide.",
      ],
      [
        "Reef 2050 Long-Term Sustainability Plan",
        "Joint Australian and Queensland government plan for reef management.",
        "Coordinates action on water quality, protection and restoration.",
      ],
      [
        "Reef restoration and adaptation research",
        "Coral breeding, larval reseeding and heat-tolerance research.",
        "May help local recovery; cannot replace emission cuts.",
      ],
      [
        "Marine park zoning",
        "No-take zones across a significant share of the Marine Park.",
        "Supports fish populations and ecosystem resilience.",
      ],
    ],
    indicators: [
      {
        name: "Mass bleaching events",
        value: "2016, 2017, 2020, 2022, 2024",
        description: "Documented by the Great Barrier Reef Marine Park Authority.",
      },
    ],
    sources: [
      [
        "Great Barrier Reef Outlook Report 2024",
        "Great Barrier Reef Marine Park Authority",
        "https://www.gbrmpa.gov.au/",
        "2024-10-01",
      ],
      ["Australian Institute of Marine Science", "AIMS", "https://www.aims.gov.au/"],
      ["Coral Reef Watch", "NOAA", "https://coralreefwatch.noaa.gov/"],
    ],
  },
  {
    location: "Great Barrier Reef",
    category: "nature",
    title: "Water quality and crown-of-thorns starfish on the Great Barrier Reef",
    severity: "high",
    summary:
      "Runoff from farmland and outbreaks of coral-eating starfish add to the pressure from warming.",
    description:
      "Sediment, nutrients and pesticides from agricultural catchments flow onto inshore reefs, reducing light and promoting algae. Nutrient runoff is also linked to outbreaks of crown-of-thorns starfish, which eat coral and have caused significant coral loss. Governments have invested in improving farm practices and in a starfish control programme that culls outbreaks on high-value reefs.",
    causes: [
      [
        "Agricultural runoff",
        "Fertiliser, sediment and pesticides from sugarcane and grazing lands.",
      ],
      ["Land clearing and erosion", "Loss of vegetation increases sediment runoff."],
      ["Starfish outbreaks", "Crown-of-thorns starfish populations periodically explode."],
    ],
    impacts: [
      ["Reduced coral cover", "Starfish outbreaks and poor water quality reduce coral."],
      ["Slower recovery", "Degraded water quality slows recovery after bleaching or cyclones."],
      ["Seagrass loss", "Sediment reduces light for seagrass meadows."],
    ],
    solutions: [
      [
        "Improved farm practices",
        "Reducing fertiliser use, stabilising gullies and restoring wetlands.",
        "Reduces pollutant loads reaching the reef.",
      ],
      [
        "Crown-of-thorns control",
        "Targeted culling by trained divers.",
        "Protects coral on priority reefs.",
      ],
      [
        "Catchment monitoring",
        "Paddock-to-reef monitoring and reporting.",
        "Tracks progress toward water quality targets.",
      ],
    ],
    sources: [
      [
        "Great Barrier Reef Marine Park Authority",
        "Australian Government",
        "https://www.gbrmpa.gov.au/",
      ],
      [
        "Department of Climate Change, Energy, the Environment and Water",
        "Australian Government",
        "https://www.dcceew.gov.au/",
      ],
    ],
  },
  {
    location: "Sydney",
    category: "climate",
    title: "Bushfire smoke and heat in Sydney",
    severity: "high",
    summary:
      "The 2019–20 Black Summer fires blanketed Sydney in smoke, and Western Sydney faces much hotter conditions than the coast.",
    description:
      "During Australia's 2019–20 'Black Summer', bushfires burned vast areas of south-eastern Australia and smoke repeatedly pushed Sydney's air quality to hazardous levels. Research published afterwards estimated a substantial health burden from the smoke. Heat is also a growing concern: Western Sydney, further from the cooling sea breeze and with less tree canopy, experiences considerably hotter summer days than the eastern suburbs, and the Bureau of Meteorology has recorded extreme temperatures at Penrith.",
    causes: [
      ["Hotter, drier conditions", "Warming and drought increase fire weather danger."],
      ["Distance from the coast", "Western Sydney receives less sea breeze cooling."],
      [
        "Low canopy and dense development",
        "New suburbs with dark roofs and few trees amplify heat.",
      ],
    ],
    impacts: [
      [
        "Smoke-related health effects",
        "Hospital visits and deaths associated with bushfire smoke.",
      ],
      [
        "Heat-related illness",
        "Older people, outdoor workers and those without cooling are at risk.",
      ],
      ["Unequal exposure", "Western Sydney communities bear a greater heat burden."],
    ],
    solutions: [
      [
        "Air quality alerts",
        "NSW air quality forecasting and health advice.",
        "Helps people reduce smoke exposure.",
      ],
      [
        "Urban canopy targets",
        "Tree planting programmes for Greater Sydney.",
        "Adds shade and lowers local temperatures over time.",
      ],
      [
        "Cool roofs and design guidelines",
        "Lighter roof colours and heat-resilient design.",
        "Reduces indoor and outdoor temperatures.",
      ],
    ],
    indicators: [
      {
        name: "Notable season",
        value: "Black Summer bushfires",
        year: 2020,
        description: "The 2019–20 fire season in south-eastern Australia.",
      },
    ],
    sources: [
      ["NSW Environment Protection Authority", "NSW Government", "https://www.epa.nsw.gov.au/"],
      ["Bureau of Meteorology", "Australian Government", "http://www.bom.gov.au/"],
    ],
  },
  {
    location: "London",
    category: "air",
    title: "Traffic pollution and the Ultra Low Emission Zone in London",
    severity: "moderate",
    summary:
      "Nitrogen dioxide from traffic has been a long-standing problem, and London's low-emission zones have been extensively studied.",
    description:
      "After the Great Smog of 1952, the UK passed the Clean Air Act 1956, which reduced coal smoke. Modern pollution in London is dominated by road traffic, particularly diesel vehicles emitting nitrogen dioxide and particulates. London introduced the Ultra Low Emission Zone in central London in 2019, expanded it in 2021 and extended it London-wide in 2023. City Hall has reported large reductions in roadside nitrogen dioxide since the scheme began, although fine particulate levels remain above WHO guideline values.",
    causes: [
      ["Diesel vehicles", "Diesel engines are a major source of nitrogen dioxide."],
      ["Congestion", "Stop-start traffic increases emissions."],
      [
        "Wood burning and other sources",
        "Domestic wood burning and regional sources add particulates.",
      ],
    ],
    impacts: [
      ["Health effects", "Air pollution contributes to respiratory disease and premature deaths."],
      ["Inequality", "Deprived areas are often more exposed to traffic pollution."],
    ],
    solutions: [
      [
        "Ultra Low Emission Zone",
        "A daily charge for vehicles not meeting emissions standards.",
        "Reduced roadside NO2 in areas where it applies, per City Hall evaluations.",
      ],
      [
        "Cleaner buses and taxis",
        "Zero-emission buses and cleaner taxi requirements.",
        "Reduces emissions on busy corridors.",
      ],
      [
        "Walking and cycling investment",
        "Cycleways and low-traffic neighbourhoods.",
        "Supports low-emission travel.",
      ],
    ],
    indicators: [
      {
        name: "Policy milestone",
        value: "London-wide ULEZ",
        year: 2023,
        description: "Expansion of the Ultra Low Emission Zone to all London boroughs.",
      },
    ],
    sources: [
      [
        "Ultra Low Emission Zone",
        "Transport for London",
        "https://tfl.gov.uk/modes/driving/ultra-low-emission-zone",
      ],
      ["Greater London Authority", "Mayor of London", "https://www.london.gov.uk/"],
      [
        "WHO global air quality guidelines",
        "World Health Organization",
        "https://www.who.int/publications/i/item/9789240034228",
        "2021-09-22",
      ],
    ],
  },
  {
    location: "London",
    category: "water",
    title: "Tidal flood risk on the Thames",
    severity: "moderate",
    summary:
      "London is protected from North Sea surges by the Thames Barrier and a long-term adaptation plan.",
    description:
      "London's tidal Thames is exposed to storm surges from the North Sea, as the deadly 1953 North Sea flood showed. The Thames Barrier, operational since 1982, can close to protect the city. The Environment Agency's Thames Estuary 2100 plan sets out how flood defences will be maintained, raised and eventually replaced as sea levels rise, using an adaptive pathways approach that can respond to how quickly sea levels actually rise.",
    causes: [
      ["North Sea storm surges", "Low pressure and strong winds push water up the estuary."],
      ["Sea level rise", "Rising seas increase the frequency of barrier closures."],
      ["Land subsidence in south-east England", "Slow land sinking increases relative sea level."],
    ],
    impacts: [
      [
        "Risk to people and property",
        "Large numbers of homes and critical infrastructure lie in the tidal floodplain.",
      ],
      ["Rising maintenance and upgrade costs", "Defences must be raised over time."],
    ],
    solutions: [
      [
        "Thames Barrier",
        "A movable barrier that closes during high surge tides.",
        "Protects central London from tidal flooding.",
      ],
      [
        "Thames Estuary 2100",
        "An adaptive, long-term flood risk management plan.",
        "Allows investment to follow observed sea level change.",
      ],
      [
        "Riverside defence raising",
        "Raising walls and embankments as part of redevelopment.",
        "Maintains the standard of protection.",
      ],
    ],
    sources: [
      [
        "The Thames Barrier",
        "UK Environment Agency",
        "https://www.gov.uk/guidance/the-thames-barrier",
      ],
      [
        "Thames Estuary 2100",
        "UK Environment Agency",
        "https://www.gov.uk/government/publications/thames-estuary-2100-te2100",
      ],
    ],
  },
  {
    location: "Berlin",
    category: "climate",
    title: "Heat, drought and Berlin's sponge city approach",
    severity: "moderate",
    summary:
      "Hotter, drier summers and heavy downpours are prompting Berlin to keep rainwater in the city.",
    description:
      "Berlin has experienced several hot and dry summers in recent years, stressing street trees, urban forests and groundwater, while intense summer storms can overwhelm sewers. The city's rainwater management rules require new developments to manage rainwater on site where possible — through green roofs, infiltration and retention — rather than sending it to the sewer, an approach often described as the 'Schwammstadt' or sponge city. Berlin's Senate Department publishes an urban climate atlas mapping heat exposure across the city.",
    causes: [
      ["Warming climate", "Germany's average temperature has risen, with more hot days."],
      ["Sealed surfaces", "Built-up areas prevent infiltration and heat up."],
      [
        "Combined sewer system",
        "In the centre, stormwater and sewage share pipes that can overflow into the Spree.",
      ],
    ],
    impacts: [
      ["Heat stress", "Hot periods affect older and vulnerable residents."],
      ["Tree and forest stress", "Drought weakens urban trees and forests."],
      ["Combined sewer overflows", "Heavy rain sends untreated wastewater into rivers."],
    ],
    solutions: [
      [
        "Decentralised rainwater management",
        "Green roofs, swales and infiltration on development sites.",
        "Reduces runoff and supports cooling.",
      ],
      [
        "Urban greening",
        "Protecting parks and planting climate-resilient street trees.",
        "Moderates heat and improves liveability.",
      ],
      [
        "Stormwater storage",
        "Underground storage to reduce sewer overflows.",
        "Improves river water quality.",
      ],
    ],
    sources: [
      ["German Environment Agency", "Umweltbundesamt", "https://www.umweltbundesamt.de/en"],
      [
        "Senate Department for Urban Mobility, Transport, Climate Action and the Environment",
        "State of Berlin",
        "https://www.berlin.de/sen/uvk/",
      ],
      ["European Environment Agency", "EEA", "https://www.eea.europa.eu/"],
    ],
  },
  {
    location: "Berlin",
    category: "energy",
    title: "Decarbonising heat in Berlin",
    severity: "moderate",
    summary:
      "Heating buildings is a large share of Berlin's emissions, and the city is shifting district heating away from coal.",
    description:
      "Much of Berlin's building stock is heated by gas, oil or a large district heating network historically supplied by coal and gas power plants. The state of Berlin has legislated a coal phase-out for its heating plants and set a climate neutrality target. Germany's national energy transition (Energiewende) and building energy law shape the move toward heat pumps, renewable heat and more efficient buildings.",
    causes: [
      ["Fossil-fuelled heating", "Gas, oil and coal supply most building heat."],
      ["Older building stock", "Many buildings have limited insulation."],
    ],
    impacts: [
      ["Greenhouse gas emissions", "Heating is a major source of city emissions."],
      ["Energy cost exposure", "Households are exposed to fossil fuel price shocks."],
    ],
    solutions: [
      [
        "Coal exit for district heating",
        "Replacing coal plants with lower-carbon heat sources.",
        "Substantially reduces heat-related emissions.",
      ],
      [
        "Building retrofits",
        "Insulation, windows and heat pumps.",
        "Reduces energy demand and emissions.",
      ],
      [
        "Waste heat and large heat pumps",
        "Using heat from wastewater, rivers and industry.",
        "Diversifies the heat supply.",
      ],
    ],
    sources: [
      ["German Environment Agency", "Umweltbundesamt", "https://www.umweltbundesamt.de/en"],
      [
        "Senate Department for Urban Mobility, Transport, Climate Action and the Environment",
        "State of Berlin",
        "https://www.berlin.de/sen/uvk/",
      ],
    ],
  },
  {
    location: "Southern France",
    category: "climate",
    title: "Heatwaves, drought and wildfire in southern France",
    severity: "high",
    summary:
      "Mediterranean France is facing hotter summers, drier soils and a widening wildfire season.",
    description:
      "On 28 June 2019, Météo-France recorded France's highest temperature on record, 46.0°C, at Vérargues in Hérault. The 2003 heatwave caused a very large number of excess deaths in France and prompted a national heatwave plan. In 2022, a severe drought affected much of the country, and large wildfires burned in the Gironde and elsewhere. The IPCC identifies the Mediterranean as a region where warming and drying trends increase fire weather and water stress.",
    causes: [
      ["Mediterranean warming and drying", "Rising temperatures and reduced summer rainfall."],
      ["Heat domes", "Persistent high-pressure systems bring extreme heat."],
      [
        "Land abandonment",
        "Reduced grazing and farming allows flammable vegetation to accumulate.",
      ],
    ],
    impacts: [
      ["Heat-related deaths", "Heatwaves cause excess mortality, especially among older people."],
      ["Wildfires", "Fires threaten forests, homes and tourism."],
      [
        "Water restrictions and crop losses",
        "Drought triggers water use limits and harms agriculture.",
      ],
    ],
    solutions: [
      [
        "National heatwave plan",
        "Alerts, checks on vulnerable people and cooling measures introduced after 2003.",
        "Reduces heat mortality.",
      ],
      [
        "Wildfire prevention",
        "Brush clearance obligations and firefighting resources.",
        "Reduces fire spread near settlements.",
      ],
      [
        "Water management",
        "Drought plans, efficiency and reuse.",
        "Improves resilience to dry years.",
      ],
    ],
    indicators: [
      {
        name: "National temperature record",
        value: "46.0",
        unit: "°C",
        year: 2019,
        description: "Recorded at Vérargues (Hérault) on 28 June 2019 by Météo-France.",
      },
    ],
    sources: [
      ["Météo-France", "Météo-France", "https://meteofrance.com/"],
      [
        "Climate Change 2022: Impacts, Adaptation and Vulnerability",
        "Intergovernmental Panel on Climate Change",
        "https://www.ipcc.ch/report/ar6/wg2/",
        "2022-02-28",
      ],
      [
        "Copernicus Climate Change Service",
        "European Commission / ECMWF",
        "https://climate.copernicus.eu/",
      ],
    ],
  },
  {
    location: "Arctic",
    category: "climate",
    title: "Arctic amplification and sea ice loss",
    severity: "critical",
    summary:
      "The Arctic is warming much faster than the global average, and summer sea ice has declined markedly since satellite records began.",
    description:
      "A 2022 study in Communications Earth & Environment found that the Arctic has warmed nearly four times faster than the globe since 1979. Satellite records maintained by the US National Snow and Ice Data Center show a long-term decline in Arctic sea ice extent, especially at the September minimum. Loss of reflective ice and snow allows more solar energy to be absorbed, a feedback that amplifies warming. The Greenland ice sheet is losing mass and contributing to global sea level rise.",
    causes: [
      ["Greenhouse gas emissions", "Global warming drives Arctic change."],
      ["Albedo feedback", "Less ice and snow means more sunlight is absorbed."],
      ["Ocean and atmospheric heat transport", "Warm water and air moving north add heat."],
    ],
    impacts: [
      ["Sea ice decline", "Loss of habitat for polar bears, seals and walrus."],
      ["Global sea level rise", "Melting land ice from Greenland raises seas worldwide."],
      [
        "Impacts on Arctic peoples",
        "Changes to ice, weather and wildlife affect Indigenous livelihoods.",
      ],
      [
        "Possible effects on mid-latitude weather",
        "Scientists continue to research links between Arctic change and weather further south.",
      ],
    ],
    solutions: [
      [
        "Global emission reductions",
        "Limiting global warming is the principal way to slow Arctic change.",
        "Determines the extent of future ice loss.",
      ],
      [
        "Arctic Council cooperation",
        "Scientific assessment and cooperation among Arctic states and Indigenous organisations.",
        "Supports monitoring and shared policy responses.",
      ],
      [
        "Reducing black carbon and methane",
        "Cutting short-lived climate pollutants that affect the Arctic.",
        "Can slow near-term Arctic warming.",
      ],
    ],
    indicators: [
      {
        name: "Arctic warming since 1979",
        value: "Nearly four times the global rate",
        year: 2022,
        description: "Rantanen et al., Communications Earth & Environment (2022).",
      },
      {
        name: "Sea ice trend",
        value: "Long-term decline",
        description:
          "NSIDC satellite record since 1979; consult NSIDC for the latest annual minimum.",
      },
    ],
    sources: [
      [
        "The Arctic has warmed nearly four times faster than the globe since 1979",
        "Communications Earth & Environment (Rantanen et al.)",
        "https://doi.org/10.1038/s43247-022-00498-3",
        "2022-08-11",
      ],
      [
        "Arctic Sea Ice News and Analysis",
        "National Snow and Ice Data Center",
        "https://nsidc.org/arcticseaicenews/",
      ],
      ["Arctic Report Card", "NOAA", "https://arctic.noaa.gov/report-card/"],
      [
        "Arctic Monitoring and Assessment Programme",
        "AMAP / Arctic Council",
        "https://www.amap.no/",
      ],
    ],
  },
  {
    location: "Copenhagen",
    category: "climate",
    title: "Cloudburst flooding and Copenhagen's adaptation plan",
    severity: "moderate",
    summary:
      "A severe 2011 cloudburst led Copenhagen to redesign streets, parks and squares to handle extreme rain.",
    description:
      "On 2 July 2011, an extreme cloudburst flooded large parts of Copenhagen, causing extensive damage to basements, roads and infrastructure. In response, the city adopted a Cloudburst Management Plan in 2012, which combines conventional sewer upgrades with surface solutions: streets designed to channel water, parks that can temporarily store it, and green areas that absorb rainfall. Projects such as the climate-adapted Enghaveparken and Tåsinge Plads have become internationally referenced examples.",
    causes: [
      [
        "Intense short-duration rainfall",
        "Cloudbursts deliver large volumes of rain in a short time.",
      ],
      ["Sealed urban surfaces", "Paved surfaces send water rapidly to sewers."],
      ["Sewer capacity limits", "Pipes designed for past conditions cannot carry extreme volumes."],
    ],
    impacts: [
      ["Property damage", "Flooding damages basements, buildings and infrastructure."],
      ["Health risks", "Combined sewer overflow can expose people to contaminated water."],
    ],
    solutions: [
      [
        "Cloudburst Management Plan",
        "Citywide plan combining surface and underground water management.",
        "Designed to reduce damage from extreme rainfall events.",
      ],
      [
        "Multifunctional public spaces",
        "Parks and squares that store water during storms.",
        "Adds green space while managing floods.",
      ],
      [
        "Stormwater tunnels",
        "Large pipes that carry cloudburst water to the harbour.",
        "Increases drainage capacity.",
      ],
    ],
    indicators: [
      {
        name: "Trigger event",
        value: "Cloudburst of 2 July 2011",
        year: 2011,
        description: "Extreme rainfall that led to the city's Cloudburst Management Plan (2012).",
      },
    ],
    sources: [
      ["City of Copenhagen", "Københavns Kommune", "https://international.kk.dk/"],
      [
        "Climate-ADAPT",
        "European Environment Agency and European Commission",
        "https://climate-adapt.eea.europa.eu/",
      ],
    ],
  },
  {
    location: "Copenhagen",
    category: "energy",
    title: "Decarbonising Copenhagen",
    severity: "low",
    summary:
      "District heating, wind power and cycling form the core of Copenhagen's climate strategy.",
    description:
      "Copenhagen set a goal of becoming carbon neutral by 2025 in its CPH 2025 Climate Plan, and has publicly reported difficulty meeting that goal in full. Nearly all buildings are connected to district heating, which has been shifted from coal toward biomass and waste heat. The city is known for its cycling infrastructure, and the Amager Bakke waste-to-energy plant combines heat and power generation with a public ski slope. Denmark's large share of wind power supports the decarbonisation of electricity.",
    causes: [
      ["Legacy fossil energy", "Heating and electricity historically depended on coal and gas."],
      ["Transport emissions", "Cars and freight remain a significant source."],
    ],
    impacts: [
      [
        "Emissions from heat, power and transport",
        "Energy use is the main source of the city's emissions.",
      ],
    ],
    solutions: [
      [
        "District heating conversion",
        "Replacing coal with lower-carbon sources.",
        "Large reduction in heating emissions.",
      ],
      [
        "Cycling infrastructure",
        "Extensive protected cycle tracks and bridges.",
        "High cycling share reduces car trips.",
      ],
      ["Wind power", "Onshore and offshore wind supplying the grid.", "Decarbonises electricity."],
    ],
    sources: [
      ["City of Copenhagen", "Københavns Kommune", "https://international.kk.dk/"],
      ["Danish Energy Agency", "Government of Denmark", "https://ens.dk/en"],
    ],
  },
];
