import type { LocationSeed } from "./format.ts";

/**
 * All bundled locations. The first ten mirror the rows originally seeded in
 * Supabase; their summaries are kept identical to the database.
 *
 * Country entries aggregate issues from detailed locations in the same
 * country (see src/lib/data/selectors.ts); they carry no issues of their own
 * unless a national-scale issue is documented directly.
 */
export const locationSeeds: LocationSeed[] = [
  // — Originally seeded in Supabase —
  {
    name: "Lahore",
    country: "Pakistan",
    countryCode: "PK",
    type: "city",
    lat: 31.5204,
    lng: 74.3587,
    featured: true,
    summary:
      "A dense historic city on the Punjab plain where winter smog, vehicle and industrial emissions, and regional crop residue burning combine into one of the world's most persistent urban air quality crises.",
  },
  {
    name: "Karachi",
    country: "Pakistan",
    countryCode: "PK",
    type: "city",
    lat: 24.8607,
    lng: 67.0011,
    summary:
      "Pakistan's largest coastal megacity, facing severe summer heat, chronic water supply stress, and heavily strained solid waste and drainage systems.",
  },
  {
    name: "Jakarta",
    country: "Indonesia",
    countryCode: "ID",
    type: "city",
    lat: -6.2088,
    lng: 106.8456,
    featured: true,
    summary:
      "A low-lying coastal capital affected by land subsidence from groundwater extraction, tidal and river flooding, and dense urban air pollution.",
  },
  {
    name: "Cape Town",
    country: "South Africa",
    countryCode: "ZA",
    type: "city",
    lat: -33.9249,
    lng: 18.4241,
    featured: true,
    summary:
      "A Mediterranean-climate city that came close to running out of municipal water during the 2015-2018 drought, and now plans around long-term supply variability.",
  },
  {
    name: "Dubai",
    country: "United Arab Emirates",
    countryCode: "AE",
    type: "city",
    lat: 25.2048,
    lng: 55.2708,
    featured: true,
    summary:
      "A desert city built on desalinated water and energy-intensive cooling, now investing heavily in solar generation while managing extreme heat and dust.",
  },
  {
    name: "Miami",
    country: "United States",
    countryCode: "US",
    type: "city",
    lat: 25.7617,
    lng: -80.1918,
    featured: true,
    summary:
      "A low-elevation coastal city on porous limestone, exposed to sea level rise, tidal flooding, hurricanes and saltwater intrusion into freshwater supplies.",
  },
  {
    name: "Manaus / Amazon",
    country: "Brazil",
    countryCode: "BR",
    type: "region",
    lat: -3.119,
    lng: -60.0217,
    featured: true,
    summary:
      "The largest city of the Brazilian Amazon and gateway to the rainforest basin, where deforestation, fire and extreme river droughts intersect.",
  },
  {
    name: "Singapore",
    country: "Singapore",
    countryCode: "SG",
    type: "city",
    lat: 1.3521,
    lng: 103.8198,
    featured: true,
    summary:
      "A dense island city-state with limited land and no natural freshwater reserves, addressing water security, waste land scarcity and urban heat through planning and technology.",
  },
  {
    name: "Delhi",
    country: "India",
    countryCode: "IN",
    type: "city",
    lat: 28.6139,
    lng: 77.209,
    summary:
      "A vast northern Indian capital region where winter air pollution, water stress and extreme heat affect tens of millions of people.",
  },
  {
    name: "Rotterdam",
    country: "Netherlands",
    countryCode: "NL",
    type: "city",
    lat: 51.9244,
    lng: 4.4777,
    featured: true,
    summary:
      "A major European port city largely below sea level, internationally known for delta engineering, climate adaptation and port decarbonisation.",
  },

  // — Detailed locations —
  {
    name: "Northern Pakistan / Gilgit-Baltistan",
    country: "Pakistan",
    countryCode: "PK",
    type: "region",
    lat: 35.9208,
    lng: 74.3144,
    summary:
      "A high-mountain region where the Karakoram, Himalaya and Hindu Kush meet, holding some of the largest glacier systems outside the polar regions and feeding the Indus river.",
  },
  {
    name: "Mumbai",
    country: "India",
    countryCode: "IN",
    type: "city",
    lat: 19.076,
    lng: 72.8777,
    summary:
      "A coastal megacity built largely on reclaimed land between former islands, exposed to intense monsoon rainfall, coastal flooding and pressure on its remaining mangroves.",
  },
  {
    name: "Bengaluru",
    country: "India",
    countryCode: "IN",
    type: "city",
    lat: 12.9716,
    lng: 77.5946,
    summary:
      "A fast-growing technology hub on the Deccan plateau, far from any large river, where lake loss, groundwater dependence and urban flooding reflect rapid unplanned growth.",
  },
  {
    name: "Beijing",
    country: "China",
    countryCode: "CN",
    type: "city",
    lat: 39.9042,
    lng: 116.4074,
    summary:
      "China's capital, once synonymous with severe winter smog, now an often-cited case of large-scale air pollution control, while still facing water scarcity on the North China Plain.",
  },
  {
    name: "Shanghai",
    country: "China",
    countryCode: "CN",
    type: "city",
    lat: 31.2304,
    lng: 121.4737,
    summary:
      "A low-lying megacity on the Yangtze River delta, managing historical land subsidence, typhoon and storm surge exposure, and sea level rise.",
  },
  {
    name: "Dhaka",
    country: "Bangladesh",
    countryCode: "BD",
    type: "city",
    lat: 23.8103,
    lng: 90.4125,
    summary:
      "One of the world's densest megacities, where brick kiln and traffic emissions, polluted rivers and monsoon waterlogging shape daily life.",
  },
  {
    name: "Coastal Bangladesh / Khulna",
    country: "Bangladesh",
    countryCode: "BD",
    type: "region",
    lat: 22.8456,
    lng: 89.5403,
    summary:
      "The low-lying southwest delta around Khulna and the Sundarbans mangrove forest, facing cyclones, storm surges and increasing salinity in soil and water.",
  },
  {
    name: "Kalimantan / Indonesian Borneo",
    country: "Indonesia",
    countryCode: "ID",
    type: "region",
    lat: -1.68,
    lng: 113.38,
    summary:
      "The Indonesian part of Borneo, home to tropical rainforest and vast carbon-rich peatlands under pressure from plantations, mining, drainage and fire.",
  },
  {
    name: "Manila",
    country: "Philippines",
    countryCode: "PH",
    type: "city",
    lat: 14.5995,
    lng: 120.9842,
    summary:
      "The dense capital region on Manila Bay, exposed to typhoons and flooding, and a focus of research on river-borne plastic pollution.",
  },
  {
    name: "Palawan",
    country: "Philippines",
    countryCode: "PH",
    type: "region",
    lat: 9.8349,
    lng: 118.7384,
    summary:
      "A long island province often described as one of the Philippines' last ecological frontiers, with extensive forests, mangroves and coral reefs.",
  },
  {
    name: "Tokyo",
    country: "Japan",
    countryCode: "JP",
    type: "city",
    lat: 35.6762,
    lng: 139.6503,
    summary:
      "The world's largest metropolitan area, managing intense summer urban heat and river flood risk with large engineered infrastructure and city-level climate policy.",
  },
  {
    name: "Nairobi",
    country: "Kenya",
    countryCode: "KE",
    type: "city",
    lat: -1.2921,
    lng: 36.8219,
    summary:
      "East Africa's major hub and host city of the UN Environment Programme, facing river pollution, waste management and air quality challenges alongside rapid growth.",
  },
  {
    name: "Northern Kenya",
    country: "Kenya",
    countryCode: "KE",
    type: "region",
    lat: 2.9,
    lng: 37.3,
    summary:
      "Arid and semi-arid lands around Marsabit, Turkana and Lake Turkana, where pastoralist communities are highly exposed to recurring drought.",
  },
  {
    name: "Lagos",
    country: "Nigeria",
    countryCode: "NG",
    type: "city",
    lat: 6.5244,
    lng: 3.3792,
    summary:
      "Africa's largest urban agglomeration by many estimates, built around a lagoon system on a low coastline exposed to flooding, erosion and waste pressure.",
  },
  {
    name: "Niger Delta",
    country: "Nigeria",
    countryCode: "NG",
    type: "region",
    lat: 4.9,
    lng: 6.4,
    summary:
      "One of the world's largest wetlands and the centre of Nigeria's oil industry, where decades of oil spills and gas flaring have damaged ecosystems and livelihoods.",
  },
  {
    name: "Bogotá",
    country: "Colombia",
    countryCode: "CO",
    type: "city",
    lat: 4.711,
    lng: -74.0721,
    summary:
      "A high-altitude Andean capital that depends on páramo ecosystems for water, and is known for bus rapid transit and cycling policy.",
  },
  {
    name: "Colombian Amazon",
    country: "Colombia",
    countryCode: "CO",
    type: "region",
    lat: 0.8,
    lng: -72.7,
    summary:
      "The Amazonian departments of southern Colombia, including Chiribiquete National Park, where the forest frontier is under pressure from land grabbing and cattle ranching.",
  },
  {
    name: "Mexico City",
    country: "Mexico",
    countryCode: "MX",
    type: "city",
    lat: 19.4326,
    lng: -99.1332,
    summary:
      "A megacity built on a former lake bed in a high mountain basin, facing severe land subsidence, water supply stress and ozone pollution.",
  },
  {
    name: "Los Angeles",
    country: "United States",
    countryCode: "US",
    type: "city",
    lat: 34.0522,
    lng: -118.2437,
    summary:
      "A sprawling Southern California region with a long history of smog control, exposed to wildfire, drought and dependence on imported water.",
  },
  {
    name: "Phoenix",
    country: "United States",
    countryCode: "US",
    type: "city",
    lat: 33.4484,
    lng: -112.074,
    summary:
      "A fast-growing desert metropolis in the Sonoran Desert, facing dangerous extreme heat and long-term uncertainty over Colorado River supply.",
  },
  {
    name: "Western Canada",
    country: "Canada",
    countryCode: "CA",
    type: "region",
    lat: 52.5,
    lng: -121.5,
    summary:
      "British Columbia and Alberta, where forests, mountains and communities have experienced record heat and increasingly severe wildfire seasons.",
  },
  {
    name: "Arctic Canada",
    country: "Canada",
    countryCode: "CA",
    type: "region",
    lat: 69.5,
    lng: -95.0,
    summary:
      "Canada's northern territories, warming faster than the country as a whole, where permafrost thaw and sea ice change affect Inuit communities and infrastructure.",
  },
  {
    name: "Sydney",
    country: "Australia",
    countryCode: "AU",
    type: "city",
    lat: -33.8688,
    lng: 151.2093,
    summary:
      "Australia's largest city, framed by national parks and exposed to bushfire smoke, heatwaves and a pronounced heat gap between its coastal and western suburbs.",
  },
  {
    name: "Great Barrier Reef",
    country: "Australia",
    countryCode: "AU",
    type: "region",
    lat: -18.2871,
    lng: 147.6992,
    featured: true,
    summary:
      "The world's largest coral reef system, a UNESCO World Heritage Area repeatedly affected by marine heatwaves and mass coral bleaching.",
  },
  {
    name: "London",
    country: "United Kingdom",
    countryCode: "GB",
    type: "city",
    lat: 51.5074,
    lng: -0.1278,
    summary:
      "A tidal-river capital that pioneered clean air law after the 1952 smog, now managing traffic pollution and long-term Thames flood risk.",
  },
  {
    name: "Berlin",
    country: "Germany",
    countryCode: "DE",
    type: "city",
    lat: 52.52,
    lng: 13.405,
    summary:
      "A green, relatively flat capital adapting to hotter, drier summers and heavy rainfall through its 'sponge city' approach to rainwater.",
  },
  {
    name: "Southern France",
    country: "France",
    countryCode: "FR",
    type: "region",
    lat: 43.7,
    lng: 5.0,
    summary:
      "The Mediterranean south of France, including Provence and Occitanie, increasingly affected by heatwaves, drought and wildfire risk.",
  },
  {
    name: "Madagascar",
    country: "Madagascar",
    countryCode: "MG",
    type: "country",
    lat: -18.7669,
    lng: 46.8691,
    summary:
      "A large island nation with exceptionally high levels of endemic species, where forest loss and recurring drought in the south affect both biodiversity and people.",
  },
  {
    name: "Arctic",
    country: "International",
    countryCode: "INTL",
    type: "global",
    lat: 80.0,
    lng: -20.0,
    summary:
      "The region around the North Pole, warming several times faster than the global average, with declining sea ice and consequences that reach far beyond the polar north.",
  },
  {
    name: "Copenhagen",
    country: "Denmark",
    countryCode: "DK",
    type: "city",
    lat: 55.6761,
    lng: 12.5683,
    featured: true,
    summary:
      "Denmark's capital, internationally referenced for cycling infrastructure, district heating and a citywide cloudburst adaptation plan.",
  },

  // — Countries —
  {
    name: "Pakistan",
    country: "Pakistan",
    countryCode: "PK",
    type: "country",
    lat: 30.3753,
    lng: 69.3451,
    summary:
      "A country stretching from the Arabian Sea to some of the world's highest mountains, highly exposed to heat, flooding and air pollution, and dependent on the Indus river system.",
  },
  {
    name: "India",
    country: "India",
    countryCode: "IN",
    type: "country",
    lat: 20.5937,
    lng: 78.9629,
    summary:
      "The world's most populous country, where air quality, groundwater, heat and monsoon variability are central environmental concerns.",
  },
  {
    name: "China",
    country: "China",
    countryCode: "CN",
    type: "country",
    lat: 35.8617,
    lng: 104.1954,
    summary:
      "The world's largest energy consumer and emitter of greenhouse gases, and also the largest builder of renewable energy capacity, with major air and water pollution programmes.",
  },
  {
    name: "Bangladesh",
    country: "Bangladesh",
    countryCode: "BD",
    type: "country",
    lat: 23.685,
    lng: 90.3563,
    summary:
      "A densely populated, low-lying delta nation that is among the most exposed in the world to flooding, cyclones and sea level rise.",
  },
  {
    name: "Indonesia",
    country: "Indonesia",
    countryCode: "ID",
    type: "country",
    lat: -0.7893,
    lng: 113.9213,
    summary:
      "The world's largest archipelagic nation, holding extensive tropical forests, peatlands and coral reefs, with a rapidly growing urban population.",
  },
  {
    name: "Philippines",
    country: "Philippines",
    countryCode: "PH",
    type: "country",
    lat: 12.8797,
    lng: 121.774,
    summary:
      "An archipelago in the western Pacific typhoon belt, rich in marine biodiversity and facing plastic pollution, flooding and coastal hazards.",
  },
  {
    name: "Japan",
    country: "Japan",
    countryCode: "JP",
    type: "country",
    lat: 36.2048,
    lng: 138.2529,
    summary:
      "A mountainous island nation exposed to typhoons, heavy rainfall and heat, with long experience in disaster risk reduction.",
  },
  {
    name: "United Arab Emirates",
    country: "United Arab Emirates",
    countryCode: "AE",
    type: "country",
    lat: 23.4241,
    lng: 53.8478,
    summary:
      "A hyper-arid Gulf state relying on desalination for drinking water, with very high cooling demand and growing investment in solar energy.",
  },
  {
    name: "Kenya",
    country: "Kenya",
    countryCode: "KE",
    type: "country",
    lat: -0.0236,
    lng: 37.9062,
    summary:
      "An East African country with a largely renewable electricity grid, extensive arid lands vulnerable to drought, and globally important wildlife ecosystems.",
  },
  {
    name: "South Africa",
    country: "South Africa",
    countryCode: "ZA",
    type: "country",
    lat: -30.5595,
    lng: 22.9375,
    summary:
      "A water-scarce country with a coal-dominated power system and exceptional biodiversity, including the Cape Floristic Region.",
  },
  {
    name: "Nigeria",
    country: "Nigeria",
    countryCode: "NG",
    type: "country",
    lat: 9.082,
    lng: 8.6753,
    summary:
      "Africa's most populous country, facing oil pollution in the Niger Delta, rapid urbanisation, flooding and desertification pressures in the north.",
  },
  {
    name: "Brazil",
    country: "Brazil",
    countryCode: "BR",
    type: "country",
    lat: -14.235,
    lng: -51.9253,
    summary:
      "Home to the largest share of the Amazon rainforest, with a largely hydropower-based electricity system and globally significant biodiversity.",
  },
  {
    name: "Colombia",
    country: "Colombia",
    countryCode: "CO",
    type: "country",
    lat: 4.5709,
    lng: -74.2973,
    summary:
      "One of the most biodiverse countries on Earth, spanning Andean páramos, Amazon rainforest and two ocean coastlines.",
  },
  {
    name: "Mexico",
    country: "Mexico",
    countryCode: "MX",
    type: "country",
    lat: 23.6345,
    lng: -102.5528,
    summary:
      "A megadiverse country facing water stress in its central and northern regions, air pollution in major cities and coastal hurricane exposure.",
  },
  {
    name: "United States",
    country: "United States",
    countryCode: "US",
    type: "country",
    lat: 37.0902,
    lng: -95.7129,
    summary:
      "A large and climatically diverse country exposed to hurricanes, wildfire, drought, heat and coastal flooding.",
  },
  {
    name: "Canada",
    country: "Canada",
    countryCode: "CA",
    type: "country",
    lat: 56.1304,
    lng: -106.3468,
    summary:
      "The world's second-largest country by area, with vast boreal forests and Arctic territories that are warming faster than the global average.",
  },
  {
    name: "Australia",
    country: "Australia",
    countryCode: "AU",
    type: "country",
    lat: -25.2744,
    lng: 133.7751,
    summary:
      "A largely arid continent with highly variable rainfall, severe bushfire seasons and globally significant marine ecosystems.",
  },
  {
    name: "United Kingdom",
    country: "United Kingdom",
    countryCode: "GB",
    type: "country",
    lat: 55.3781,
    lng: -3.436,
    summary:
      "An island nation with a legally binding net zero target, managing flood risk, urban air quality and a rapidly decarbonising electricity grid.",
  },
  {
    name: "Germany",
    country: "Germany",
    countryCode: "DE",
    type: "country",
    lat: 51.1657,
    lng: 10.4515,
    summary:
      "Europe's largest economy, pursuing its Energiewende energy transition while adapting to heat, drought and heavy rainfall events.",
  },
  {
    name: "Netherlands",
    country: "Netherlands",
    countryCode: "NL",
    type: "country",
    lat: 52.1326,
    lng: 5.2913,
    summary:
      "A delta nation where a large share of land lies below sea level, protected by one of the world's most developed flood defence systems.",
  },
  {
    name: "Denmark",
    country: "Denmark",
    countryCode: "DK",
    type: "country",
    lat: 56.2639,
    lng: 9.5018,
    summary:
      "A low-lying Nordic country with a large share of wind power in its electricity supply and long-standing district heating networks.",
  },
  {
    name: "France",
    country: "France",
    countryCode: "FR",
    type: "country",
    lat: 46.2276,
    lng: 2.2137,
    summary:
      "A country with a low-carbon, largely nuclear electricity supply that is increasingly affected by heatwaves, drought and wildfire in the south.",
  },
];
