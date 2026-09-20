
CREATE TYPE public.location_type AS ENUM ('country','city','region','global');
CREATE TYPE public.severity_level AS ENUM ('low','moderate','high','critical');

CREATE TABLE public.locations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  country text NOT NULL,
  country_code text NOT NULL,
  type public.location_type NOT NULL DEFAULT 'city',
  latitude double precision NOT NULL,
  longitude double precision NOT NULL,
  summary text NOT NULL DEFAULT '',
  featured boolean NOT NULL DEFAULT false,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE (name, country)
);

CREATE TABLE public.categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text NOT NULL UNIQUE,
  description text NOT NULL DEFAULT ''
);

CREATE TABLE public.issues (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  location_id uuid NOT NULL REFERENCES public.locations(id) ON DELETE CASCADE,
  category_id uuid NOT NULL REFERENCES public.categories(id) ON DELETE RESTRICT,
  title text NOT NULL UNIQUE,
  severity public.severity_level NOT NULL DEFAULT 'moderate',
  summary text NOT NULL DEFAULT '',
  description text NOT NULL DEFAULT '',
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);
CREATE INDEX idx_issues_location ON public.issues(location_id);
CREATE INDEX idx_issues_category ON public.issues(category_id);

CREATE TABLE public.causes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id uuid NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL DEFAULT ''
);
CREATE INDEX idx_causes_issue ON public.causes(issue_id);

CREATE TABLE public.impacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id uuid NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL DEFAULT ''
);
CREATE INDEX idx_impacts_issue ON public.impacts(issue_id);

CREATE TABLE public.solutions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id uuid NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  title text NOT NULL,
  description text NOT NULL DEFAULT '',
  expected_impact text NOT NULL DEFAULT ''
);
CREATE INDEX idx_solutions_issue ON public.solutions(issue_id);

CREATE TABLE public.indicators (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id uuid NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  name text NOT NULL,
  value text,
  unit text,
  year integer,
  description text NOT NULL DEFAULT ''
);
CREATE INDEX idx_indicators_issue ON public.indicators(issue_id);

CREATE TABLE public.sources (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  issue_id uuid NOT NULL REFERENCES public.issues(id) ON DELETE CASCADE,
  title text NOT NULL,
  organization text NOT NULL,
  url text,
  publication_date date,
  accessed_date date DEFAULT now()
);
CREATE INDEX idx_sources_issue ON public.sources(issue_id);

GRANT SELECT ON public.locations, public.categories, public.issues, public.causes, public.impacts, public.solutions, public.indicators, public.sources TO anon, authenticated;
GRANT ALL ON public.locations, public.categories, public.issues, public.causes, public.impacts, public.solutions, public.indicators, public.sources TO service_role;

ALTER TABLE public.locations ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.issues ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.causes ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.impacts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.indicators ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sources ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Public read locations" ON public.locations FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read categories" ON public.categories FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read issues" ON public.issues FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read causes" ON public.causes FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read impacts" ON public.impacts FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read solutions" ON public.solutions FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read indicators" ON public.indicators FOR SELECT TO anon, authenticated USING (true);
CREATE POLICY "Public read sources" ON public.sources FOR SELECT TO anon, authenticated USING (true);

CREATE OR REPLACE FUNCTION public.set_updated_at() RETURNS TRIGGER AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$ LANGUAGE plpgsql SET search_path = public;
CREATE TRIGGER trg_locations_updated BEFORE UPDATE ON public.locations FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
CREATE TRIGGER trg_issues_updated BEFORE UPDATE ON public.issues FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.categories (name, slug, description) VALUES
 ('Air','air','Air quality, particulate pollution and atmospheric emissions affecting human health.'),
 ('Water','water','Freshwater availability, drought, flooding, groundwater and water quality.'),
 ('Climate','climate','Heat, sea level rise, extreme weather and long-term climatic change.'),
 ('Nature','nature','Forests, biodiversity, habitats, land use and ecosystem integrity.'),
 ('Oceans','oceans','Coastal systems, marine ecosystems, coral reefs and ocean pollution.'),
 ('Waste','waste','Solid waste, plastics, landfill and material flows.'),
 ('Energy','energy','Energy systems, fuel use, emissions intensity and the transition to low-carbon supply.');

INSERT INTO public.locations (name, country, country_code, type, latitude, longitude, summary, featured) VALUES
 ('Lahore','Pakistan','PK','city',31.5204,74.3587,'A dense historic city on the Punjab plain where winter smog, vehicle and industrial emissions, and regional crop residue burning combine into one of the world''s most persistent urban air quality crises.',true),
 ('Karachi','Pakistan','PK','city',24.8607,67.0011,'Pakistan''s largest coastal megacity, facing severe summer heat, chronic water supply stress, and heavily strained solid waste and drainage systems.',true),
 ('Jakarta','Indonesia','ID','city',-6.2088,106.8456,'A low-lying coastal capital affected by land subsidence from groundwater extraction, tidal and river flooding, and dense urban air pollution.',true),
 ('Cape Town','South Africa','ZA','city',-33.9249,18.4241,'A Mediterranean-climate city that came close to running out of municipal water during the 2015-2018 drought, and now plans around long-term supply variability.',true),
 ('Dubai','United Arab Emirates','AE','city',25.2048,55.2708,'A desert city built on desalinated water and energy-intensive cooling, now investing heavily in solar generation while managing extreme heat and dust.',true),
 ('Miami','United States','US','city',25.7617,-80.1918,'A low-elevation coastal city on porous limestone, exposed to sea level rise, tidal flooding, hurricanes and saltwater intrusion into freshwater supplies.',true),
 ('Manaus / Amazon','Brazil','BR','region',-3.1190,-60.0217,'The largest city of the Brazilian Amazon and gateway to the rainforest basin, where deforestation, fire and extreme river droughts intersect.',true),
 ('Singapore','Singapore','SG','city',1.3521,103.8198,'A dense island city-state with limited land and no natural freshwater reserves, addressing water security, waste land scarcity and urban heat through planning and technology.',true),
 ('Delhi','India','IN','city',28.6139,77.2090,'A vast northern Indian capital region where winter air pollution, water stress and extreme heat affect tens of millions of people.',true),
 ('Rotterdam','Netherlands','NL','city',51.9244,4.4777,'A major European port city largely below sea level, internationally known for delta engineering, climate adaptation and port decarbonisation.',true);

WITH c AS (SELECT id, slug FROM public.categories), l AS (SELECT id, name FROM public.locations)
INSERT INTO public.issues (location_id, category_id, title, severity, summary, description)
SELECT l.id, c.id, v.title, v.severity::public.severity_level, v.summary, v.description
FROM (VALUES
 ('Lahore','air','Winter smog in Lahore','critical','Seasonal smog episodes sharply reduce air quality across the city each winter.','Between roughly October and February, cool stable air traps pollution close to the ground over the Punjab plain. Traffic, brick kilns, industry, domestic burning and regional crop residue burning all contribute. Fine particulate matter (PM2.5) is the pollutant of greatest health concern because it penetrates deep into the lungs and bloodstream. Concentrations during episodes are documented by monitoring networks and by the World Health Organization as far above health-based guideline levels.'),
 ('Lahore','nature','Urban tree cover and heat in Lahore','moderate','Expanding built-up area and loss of green space intensify urban heat and dust.','Rapid horizontal urban expansion has replaced vegetated land and agricultural plots with built surfaces. Tree canopy and open green space moderate surface temperature, retain dust and support infiltration of rainwater. Where canopy is lost, surfaces absorb and re-radiate more heat, and airborne dust is less readily captured. Restoring canopy is a recognised low-regret intervention, though its effect on regional particulate pollution is limited compared with controlling emission sources.'),
 ('Karachi','climate','Extreme heat in Karachi','high','Humid heat events in a coastal megacity create serious health risk, especially during power interruptions.','Karachi experiences high temperatures combined with coastal humidity, which limits the human body''s ability to cool by sweating. The 2015 heatwave caused widespread heat-related illness and deaths, documented by Pakistani authorities and in peer-reviewed public health literature. Risk is concentrated among outdoor workers, people without reliable electricity for fans or cooling, and residents of dense, poorly ventilated housing with little shade.'),
 ('Karachi','waste','Solid waste and drainage blockage in Karachi','high','Uncollected waste blocks stormwater channels and worsens urban flooding.','Collection coverage does not reach all neighbourhoods, and a significant share of municipal waste is dumped informally or burned. Plastic and mixed waste accumulate in natural and engineered drainage channels. During monsoon rainfall this reduces channel capacity and contributes to urban flooding. Open burning of waste also releases pollutants into local air.'),
 ('Jakarta','water','Land subsidence and flooding in Jakarta','critical','Parts of Jakarta are sinking, largely due to groundwater extraction, increasing flood exposure.','Jakarta sits on a low-lying alluvial delta crossed by many rivers. Extensive extraction of groundwater for domestic and commercial supply compacts underlying sediments, causing the land surface to sink. Subsidence has been measured in northern Jakarta by geodetic surveys and satellite radar. As the ground drops relative to the sea, tidal flooding, river flooding and drainage failure all become harder to manage. Indonesia''s response includes coastal defences, piped water expansion to reduce groundwater use, and the relocation of the national capital.'),
 ('Jakarta','air','Urban air pollution in Jakarta','high','Traffic, industry and power generation degrade air quality across the metropolitan area.','The Jakarta metropolitan region combines heavy road traffic, industrial activity and nearby fossil-fuelled power generation. Air quality monitoring regularly records fine particulate concentrations above World Health Organization guideline levels, with the worst conditions in the dry season. Indonesian courts and government agencies have both addressed the issue, and emission controls, vehicle standards and public transport expansion are central responses.'),
 ('Cape Town','water','Drought and municipal water security in Cape Town','high','The 2015-2018 drought brought the city close to shutting off its municipal supply.','Cape Town depends on surface reservoirs filled by winter rainfall. Three consecutive poor rainfall years drew dam storage down to critical levels, and the city publicised a "Day Zero" at which municipal taps would largely be turned off. Severe restrictions, pressure management, leak repair and an extraordinary demand reduction by residents, together with returning rainfall, avoided that outcome. The episode is widely studied as a case of urban water crisis management, and the city has since diversified supply planning.'),
 ('Dubai','energy','Cooling demand and the energy transition in Dubai','moderate','Extreme heat drives very high cooling loads, shaping the city''s energy system.','In a desert climate, air conditioning is essential and represents a large share of building electricity demand, peaking in summer. Historically this demand has been met largely with natural gas generation. The emirate is deploying large-scale solar capacity, which aligns well with daytime cooling peaks, alongside building efficiency codes and district cooling. Full decarbonisation also requires evening and night-time supply, which is where storage and demand management matter.'),
 ('Dubai','water','Desalination dependence in Dubai','moderate','Almost all potable water comes from energy-intensive desalination of seawater.','The United Arab Emirates has very low natural renewable freshwater availability and relies on seawater desalination for most municipal supply. Desalination requires substantial energy and produces concentrated brine that is returned to the Gulf, a semi-enclosed and already saline sea. Efficiency improvements, a shift from thermal to membrane-based reverse osmosis, renewable-powered plants, treated wastewater reuse and demand management are the main levers.'),
 ('Miami','oceans','Sea level rise and tidal flooding in Miami','critical','Rising seas cause recurrent sunny-day flooding and threaten freshwater supplies.','South Florida sits at low elevation on highly porous limestone, so seawater moves through the bedrock as well as over the surface. Tide gauge and satellite records document sea level rise along the southeastern United States coast. The practical consequences include high-tide flooding of streets and stormwater systems that cannot drain by gravity, saltwater intrusion into the Biscayne aquifer that supplies drinking water, and greater storm surge reach during hurricanes.'),
 ('Miami','climate','Hurricane and storm surge exposure in Miami','high','Dense coastal development concentrates people and assets in the path of tropical cyclones.','Southeast Florida is one of the most hurricane-exposed metropolitan areas in the United States. Risk is a combination of hazard, exposure and vulnerability: decades of coastal development have placed very large populations and property values close to the shoreline, while rising sea level raises the baseline from which storm surge acts. Building codes, evacuation planning, wetland and dune restoration and insurance reform all form part of the response.'),
 ('Manaus / Amazon','nature','Amazon deforestation and forest degradation','critical','Clearing and degradation reduce forest cover with global climate and biodiversity consequences.','The Brazilian Amazon is monitored continuously by Brazil''s National Institute for Space Research (INPE), whose PRODES and DETER systems publish annual and near-real-time deforestation data. Clearing is driven mainly by conversion to pasture and cropland, land speculation, road access and illegal logging and mining. Beyond outright clearing, fire and selective logging degrade forest that remains standing. Consequences include carbon emissions, biodiversity loss and disruption of the moisture recycling that sustains regional rainfall.'),
 ('Manaus / Amazon','water','Extreme river drought in the Amazon basin','high','Severe low-water events disrupt river transport, supply and ecosystems.','Amazonian communities depend on rivers for transport, food and water. In recent severe droughts, river levels at Manaus and across the basin fell far enough to strand vessels, isolate communities, interrupt supply chains and cause fish and river dolphin mortality. Brazilian hydrological services publish river level records for Manaus that span more than a century, allowing individual events to be placed in historical context.'),
 ('Singapore','water','Water security on a land-scarce island','moderate','A city-state with no natural freshwater reserves has engineered a diversified supply.','Singapore has a small land area, high population density and no natural aquifers or large rivers. Its national water agency describes supply as "four national taps": local catchment water, imported water, reclaimed water (NEWater) and desalinated water. Rainfall is abundant but storage is limited by land, so catchment, reclamation and desalination are combined with strong demand management and leak control. The approach is internationally cited, but reclamation and desalination are energy intensive.'),
 ('Singapore','waste','Waste and landfill capacity in Singapore','high','With almost no land for landfill, waste is incinerated and the ash sent to a single offshore site.','Non-recycled waste is incinerated for energy recovery, and the resulting ash plus non-incinerable waste is deposited at Semakau Landfill, the country''s only remaining landfill site. Because land is finite, extending the landfill''s life depends directly on reducing waste generated and increasing material recovery. National policy has therefore focused on a circular economy approach, including packaging reporting and extended producer responsibility for electronics.'),
 ('Delhi','air','Delhi''s winter air pollution','critical','Meteorology, regional burning and local emissions produce extreme seasonal particulate pollution.','Each winter, cold stagnant air over the Indo-Gangetic Plain traps emissions near the surface. Transport, industry, construction dust, waste burning, domestic fuel use and post-monsoon crop residue burning in neighbouring states all contribute. The World Health Organization and Indian monitoring agencies document fine particulate concentrations far above health-based guidelines during these episodes. Responses include a graded emergency response plan, fuel and vehicle standards, and programmes to provide alternatives to crop residue burning.'),
 ('Delhi','water','Groundwater depletion in the Delhi region','high','Extraction exceeds recharge across much of the National Capital Territory.','India''s Central Ground Water Board assesses groundwater extraction against recharge across the country and has repeatedly classed large parts of Delhi as over-exploited. Urban expansion has sealed recharge surfaces, while piped supply gaps push households and businesses to rely on borewells. Falling water tables raise pumping energy costs, can worsen water quality, and reduce resilience during dry years.'),
 ('Rotterdam','climate','Living below sea level: Rotterdam''s delta defence','moderate','Most of the city lies below sea level and depends on continuous engineered protection.','Rotterdam sits in the Rhine-Meuse delta, with the majority of its area below sea level. Protection combines dikes, the Maeslant storm surge barrier, pumping and a national Delta Programme that plans decades ahead for sea level rise and changing river discharge. The city has also pioneered adaptation inside the flood defences, including water plazas, green roofs and water storage in public space to manage intense rainfall.'),
 ('Rotterdam','energy','Port decarbonisation in Rotterdam','high','Europe''s largest seaport is also a major industrial emissions cluster undergoing transition.','The port hosts refineries, chemical plants and bulk fossil fuel handling, making it one of the largest single concentrations of industrial carbon emissions in the European Union. The Port of Rotterdam Authority and Dutch government have published a transition strategy built around electrification, hydrogen import and production, carbon capture and storage in depleted offshore gas fields, and circular feedstocks. Progress is measurable but the transition is long-term and capital intensive.')
) AS v(loc, cat, title, severity, summary, description)
JOIN l ON l.name = v.loc JOIN c ON c.slug = v.cat;

WITH i AS (SELECT id, title FROM public.issues)
INSERT INTO public.causes (issue_id, title, description)
SELECT i.id, v.title, v.description FROM (VALUES
 ('Winter smog in Lahore','Temperature inversion','Cool, stable winter air forms a lid over the Punjab plain, preventing pollutants from dispersing upward.'),
 ('Winter smog in Lahore','Road transport','A large, ageing vehicle fleet with varying fuel and engine standards emits particulates and precursor gases.'),
 ('Winter smog in Lahore','Brick kilns and industry','Traditional kilns and industrial combustion in and around the city release particulates, especially where cleaner technologies have not been adopted.'),
 ('Winter smog in Lahore','Regional crop residue burning','Post-harvest burning across the wider Punjab region, on both sides of the border, adds smoke that travels into the airshed.'),
 ('Winter smog in Lahore','Domestic and waste burning','Burning of solid fuel for heating and open burning of waste add localised particulate emissions.'),
 ('Urban tree cover and heat in Lahore','Horizontal urban expansion','Low-density growth converts vegetated and agricultural land into built surfaces.'),
 ('Urban tree cover and heat in Lahore','Road widening and construction','Infrastructure projects frequently remove mature roadside trees, whose cooling benefit takes decades to replace.'),
 ('Extreme heat in Karachi','Humid coastal climate','High humidity limits evaporative cooling, so the body struggles to shed heat even at moderate air temperatures.'),
 ('Extreme heat in Karachi','Urban heat island','Dense construction, dark surfaces and limited vegetation keep built-up areas warmer than surroundings, especially at night.'),
 ('Extreme heat in Karachi','Unreliable electricity supply','Power interruptions during peak demand remove access to fans and cooling exactly when risk is highest.'),
 ('Solid waste and drainage blockage in Karachi','Incomplete collection coverage','Formal collection does not reach every neighbourhood, leaving waste to accumulate or be dumped informally.'),
 ('Solid waste and drainage blockage in Karachi','Plastic in drainage channels','Lightweight plastic waste migrates into stormwater drains and natural channels, reducing their capacity.'),
 ('Solid waste and drainage blockage in Karachi','Encroachment on natural drains','Construction on and alongside natural watercourses narrows the space available for flood flow.'),
 ('Land subsidence and flooding in Jakarta','Groundwater extraction','Pumping from shallow and deep aquifers compacts sediments and lowers the land surface.'),
 ('Land subsidence and flooding in Jakarta','Incomplete piped water coverage','Where piped supply is unavailable or unreliable, households and businesses drill their own wells.'),
 ('Land subsidence and flooding in Jakarta','Delta geology and building loads','Soft young alluvial sediments compact naturally and further under the weight of dense construction.'),
 ('Land subsidence and flooding in Jakarta','Upstream land use and river sedimentation','Changes in the catchment increase runoff and sediment, reducing channel capacity downstream.'),
 ('Urban air pollution in Jakarta','Road traffic','Large numbers of cars and motorcycles in a congested metropolitan area produce sustained emissions.'),
 ('Urban air pollution in Jakarta','Industry and power generation','Industrial facilities and fossil-fuelled power plants in the surrounding region contribute to the regional pollutant load.'),
 ('Urban air pollution in Jakarta','Dry-season meteorology','Reduced rainfall and weaker dispersion in the dry season allow pollutants to accumulate.'),
 ('Drought and municipal water security in Cape Town','Consecutive low-rainfall years','Three successive poor winter rainfall seasons reduced inflow to the supply dams.'),
 ('Drought and municipal water security in Cape Town','Surface-water dependence','A supply system built almost entirely on rainfall-fed reservoirs is highly sensitive to rainfall variability.'),
 ('Drought and municipal water security in Cape Town','Demand growth and distribution losses','Population growth and losses from ageing pipe networks raised baseline demand before the drought.'),
 ('Cooling demand and the energy transition in Dubai','Extreme summer temperatures','Sustained high temperatures make mechanical cooling a necessity rather than a comfort choice.'),
 ('Cooling demand and the energy transition in Dubai','Building stock and glazing','Highly glazed towers gain heat rapidly unless shading, insulation and efficient systems are specified.'),
 ('Cooling demand and the energy transition in Dubai','Gas-based generation legacy','Electricity has historically been supplied largely by natural gas, tying cooling demand to fossil fuel use.'),
 ('Desalination dependence in Dubai','Very low natural freshwater availability','Rainfall is minimal and there are no significant perennial rivers or renewable aquifers.'),
 ('Desalination dependence in Dubai','High per-capita demand','Landscaping, tourism and high living standards raise water use per person.'),
 ('Desalination dependence in Dubai','Brine discharge to a semi-enclosed sea','Concentrated brine returned to the Gulf raises local salinity and temperature near outfalls.'),
 ('Sea level rise and tidal flooding in Miami','Global sea level rise','Thermal expansion of seawater and melting land ice raise mean sea level, documented by tide gauges and satellite altimetry.'),
 ('Sea level rise and tidal flooding in Miami','Porous limestone bedrock','Water moves through the underlying limestone, so seawalls alone cannot prevent water emerging inland.'),
 ('Sea level rise and tidal flooding in Miami','Very low ground elevation','Much of the metropolitan area sits only a few metres above mean sea level.'),
 ('Sea level rise and tidal flooding in Miami','Gravity-based stormwater drainage','Drainage designed to discharge by gravity loses capacity as sea level rises.'),
 ('Hurricane and storm surge exposure in Miami','Tropical cyclone climatology','Southeast Florida lies within one of the Atlantic basin''s most frequently affected regions.'),
 ('Hurricane and storm surge exposure in Miami','Concentrated coastal development','Decades of building close to the shoreline place very large populations and asset values in the surge zone.'),
 ('Hurricane and storm surge exposure in Miami','Loss of natural coastal buffers','Wetlands, dunes and mangroves that dissipate wave and surge energy have been reduced by development.'),
 ('Amazon deforestation and forest degradation','Conversion to pasture and cropland','Clearing for cattle ranching and, subsequently, crops is the dominant direct driver of forest loss.'),
 ('Amazon deforestation and forest degradation','Road access and land speculation','New and improved roads open previously remote forest to occupation and speculative land claims.'),
 ('Amazon deforestation and forest degradation','Illegal logging and mining','Unauthorised timber extraction and gold mining damage forest and watercourses.'),
 ('Amazon deforestation and forest degradation','Fire','Fire used to clear land escapes into standing forest, which is not naturally fire-adapted.'),
 ('Extreme river drought in the Amazon basin','Rainfall deficit in the basin','Extended periods of below-normal rainfall reduce river discharge across the catchment.'),
 ('Extreme river drought in the Amazon basin','Ocean temperature patterns','El Nino conditions and unusually warm tropical Atlantic surface temperatures shift rainfall away from parts of the basin.'),
 ('Extreme river drought in the Amazon basin','Forest loss and moisture recycling','Reduced forest cover weakens the evapotranspiration that recycles moisture and sustains regional rainfall.'),
 ('Water security on a land-scarce island','No natural freshwater reserves','There are no significant aquifers or large rivers within the national territory.'),
 ('Water security on a land-scarce island','Limited land for catchment and storage','High population density restricts the area available for reservoirs and protected catchment.'),
 ('Water security on a land-scarce island','Dense urban demand','A concentrated population and significant industrial and commercial demand require a reliable year-round supply.'),
 ('Waste and landfill capacity in Singapore','Severe land scarcity','There is effectively no space for conventional landfill within the national territory.'),
 ('Waste and landfill capacity in Singapore','High consumption and packaging volumes','An affluent, dense, import-dependent economy generates substantial packaging and disposable material.'),
 ('Waste and landfill capacity in Singapore','Low recovery rates for some materials','Domestic recycling rates for materials such as plastics remain well below those for industrial metals and construction debris.'),
 ('Delhi''s winter air pollution','Winter meteorology over the Indo-Gangetic Plain','Cold, still air and shallow mixing depth trap emissions near ground level.'),
 ('Delhi''s winter air pollution','Crop residue burning in neighbouring states','Post-monsoon stubble burning produces smoke that is transported into the region.'),
 ('Delhi''s winter air pollution','Transport emissions','A very large vehicle fleet in a sprawling metropolitan region emits particulates and precursor gases.'),
 ('Delhi''s winter air pollution','Construction and road dust','Continuous construction activity and unpaved surfaces contribute coarse and fine dust.'),
 ('Delhi''s winter air pollution','Industry, waste burning and domestic fuel','Industrial combustion, open waste burning and solid fuel use for cooking and heating add to the load.'),
 ('Groundwater depletion in the Delhi region','Extraction exceeding recharge','Annual withdrawal from aquifers is greater than the volume naturally replenished.'),
 ('Groundwater depletion in the Delhi region','Sealed recharge surfaces','Paving and building over open ground prevents rainfall from infiltrating to the water table.'),
 ('Groundwater depletion in the Delhi region','Gaps in piped supply','Where the network is intermittent or absent, users install private borewells.'),
 ('Living below sea level: Rotterdam''s delta defence','Low-lying delta geography','Most of the city lies below sea level in the Rhine-Meuse delta.'),
 ('Living below sea level: Rotterdam''s delta defence','Sea level rise','Rising mean sea level increases the load on defences and the frequency of extreme water levels.'),
 ('Living below sea level: Rotterdam''s delta defence','Intense rainfall and river discharge','Heavy downpours and high river flows can overwhelm drainage inside the defences.'),
 ('Port decarbonisation in Rotterdam','Refining and petrochemical cluster','Refineries and chemical plants require high-temperature heat and fossil feedstocks.'),
 ('Port decarbonisation in Rotterdam','Fossil fuel handling and shipping','Bulk handling of coal and oil products and the fuelling of ships tie the port to fossil value chains.'),
 ('Port decarbonisation in Rotterdam','Long asset lifetimes','Industrial plant is capital intensive and replaced over decades, slowing the pace of change.')
) AS v(issue, title, description) JOIN i ON i.title = v.issue;

WITH i AS (SELECT id, title FROM public.issues)
INSERT INTO public.impacts (issue_id, title, description)
SELECT i.id, v.title, v.description FROM (VALUES
 ('Winter smog in Lahore','Respiratory and cardiovascular health','Fine particulate exposure is associated with asthma, chronic obstructive pulmonary disease, heart disease and stroke; children and older people are most affected.'),
 ('Winter smog in Lahore','Disrupted schooling and work','Authorities have closed schools and restricted activity during severe episodes, interrupting education and income.'),
 ('Winter smog in Lahore','Reduced visibility and transport disruption','Dense smog reduces visibility on roads and at the airport, causing delays and accidents.'),
 ('Winter smog in Lahore','Agricultural and ecosystem effects','Ground-level ozone and particulate deposition can reduce crop productivity in the surrounding agricultural region.'),
 ('Urban tree cover and heat in Lahore','Higher daytime surface temperatures','Built surfaces without shade absorb and re-emit more heat than vegetated ground.'),
 ('Urban tree cover and heat in Lahore','Reduced dust capture and shade','Tree canopy intercepts airborne dust and provides shade for pedestrians and street users.'),
 ('Urban tree cover and heat in Lahore','Reduced rainfall infiltration','Sealed surfaces send rainfall to drains rather than into the ground, increasing local flooding and reducing recharge.'),
 ('Extreme heat in Karachi','Heat-related illness and death','The 2015 heatwave produced mass casualties, with hospitals overwhelmed by heatstroke and dehydration cases.'),
 ('Extreme heat in Karachi','Occupational risk for outdoor workers','Construction workers, street vendors and transport workers face sustained exposure with limited opportunity to rest or cool.'),
 ('Extreme heat in Karachi','Strain on power and water systems','Cooling demand peaks at the same time as water demand, stressing both networks simultaneously.'),
 ('Solid waste and drainage blockage in Karachi','Urban flooding','Blocked channels reduce drainage capacity, so monsoon rainfall pools in streets and homes.'),
 ('Solid waste and drainage blockage in Karachi','Public health risk','Standing water and accumulated waste support disease vectors and contaminate flood water.'),
 ('Solid waste and drainage blockage in Karachi','Air pollution from open burning','Burning mixed waste releases particulates and toxic compounds into neighbourhood air.'),
 ('Solid waste and drainage blockage in Karachi','Marine and coastal litter','Waste carried by drains and creeks reaches the coastline and the Arabian Sea.'),
 ('Land subsidence and flooding in Jakarta','Increased flood frequency and depth','As the land sinks relative to the sea, the same rainfall or tide produces deeper, longer-lasting flooding.'),
 ('Land subsidence and flooding in Jakarta','Damage to buildings and infrastructure','Differential settlement cracks structures, breaks pipes and damages roads and drainage.'),
 ('Land subsidence and flooding in Jakarta','Saltwater intrusion','Lower land and depleted aquifers allow seawater to move into groundwater used for supply.'),
 ('Land subsidence and flooding in Jakarta','Displacement and economic loss','Repeated flooding in northern districts disrupts livelihoods and can force relocation.'),
 ('Urban air pollution in Jakarta','Health burden','Sustained fine particulate exposure raises rates of respiratory and cardiovascular disease across the metropolitan population.'),
 ('Urban air pollution in Jakarta','Reduced productivity','Illness and poor air quality days reduce working hours and school attendance.'),
 ('Urban air pollution in Jakarta','Regional haze','Pollution is not confined to city boundaries and affects surrounding settlements.'),
 ('Drought and municipal water security in Cape Town','Near shutdown of municipal supply','The city planned for a day when most taps would be closed and residents would collect water from distribution points.'),
 ('Drought and municipal water security in Cape Town','Economic disruption','Agriculture in the surrounding region faced restrictions and job losses, and tourism messaging was affected.'),
 ('Drought and municipal water security in Cape Town','Lasting behavioural change','Household water use fell dramatically during the crisis and remained below pre-drought levels afterwards.'),
 ('Cooling demand and the energy transition in Dubai','High summer peak electricity demand','Cooling produces a pronounced summer peak that shapes generation and grid investment.'),
 ('Cooling demand and the energy transition in Dubai','Emissions from generation','Where cooling electricity comes from gas, comfort and health needs translate directly into carbon emissions.'),
 ('Cooling demand and the energy transition in Dubai','Vulnerability during outages','Loss of power during extreme heat rapidly makes sealed, highly glazed buildings dangerous.'),
 ('Desalination dependence in Dubai','Energy use and emissions','Producing potable water from seawater requires significant electricity or heat.'),
 ('Desalination dependence in Dubai','Brine and marine effects','Concentrated, warm brine discharged near the coast can affect local marine ecosystems.'),
 ('Desalination dependence in Dubai','Supply chain dependency','A water system dependent on continuously operating plant and power is sensitive to disruption.'),
 ('Sea level rise and tidal flooding in Miami','Recurrent high-tide flooding','Streets and low-lying property flood during seasonal high tides without any storm present.'),
 ('Sea level rise and tidal flooding in Miami','Saltwater intrusion into drinking water','Salt moving inland through the Biscayne aquifer threatens wellfields that supply the region.'),
 ('Sea level rise and tidal flooding in Miami','Stormwater and septic system failure','Higher groundwater reduces drainage capacity and can prevent septic systems from functioning.'),
 ('Sea level rise and tidal flooding in Miami','Property and insurance pressure','Repeated flooding affects insurance availability, cost and long-term property value.'),
 ('Hurricane and storm surge exposure in Miami','Loss of life and injury','Storm surge is historically the deadliest hazard associated with landfalling hurricanes.'),
 ('Hurricane and storm surge exposure in Miami','Large economic losses','Concentrated coastal assets mean a single severe storm can cause very large insured and uninsured losses.'),
 ('Hurricane and storm surge exposure in Miami','Ecosystem and coastal damage','Surge, waves and debris damage reefs, mangroves, beaches and coastal wetlands.'),
 ('Amazon deforestation and forest degradation','Carbon emissions','Clearing and burning release stored carbon and reduce the forest''s capacity to absorb it.'),
 ('Amazon deforestation and forest degradation','Biodiversity loss','The Amazon holds an exceptional concentration of species, many with restricted ranges, which are lost with their habitat.'),
 ('Amazon deforestation and forest degradation','Disrupted rainfall recycling','The forest recycles moisture that sustains rainfall regionally and downwind; large-scale loss weakens that mechanism.'),
 ('Amazon deforestation and forest degradation','Impacts on Indigenous and local communities','Forest loss, fire and mining affect territories, health, food systems and water quality of forest-dependent peoples.'),
 ('Extreme river drought in the Amazon basin','Isolated communities','When rivers are the only roads, low water cuts off access to food, fuel, medicine and markets.'),
 ('Extreme river drought in the Amazon basin','Fish and wildlife mortality','Shallow, unusually warm water has caused large fish die-offs and deaths of river dolphins.'),
 ('Extreme river drought in the Amazon basin','Disrupted transport and energy','Cargo and passenger vessels are stranded, and hydropower and supply chains are affected.'),
 ('Extreme river drought in the Amazon basin','Increased fire risk','Dry conditions make both cleared land and standing forest far more flammable.'),
 ('Water security on a land-scarce island','Energy cost of supply','Reclaimed and desalinated water require continuous energy input, linking water security to the power system.'),
 ('Water security on a land-scarce island','Exposure to prolonged dry spells','Local catchment yield falls during dry periods, increasing reliance on the other supply sources.'),
 ('Water security on a land-scarce island','Land use trade-offs','Reservoirs, catchment protection and treatment plant all compete with other uses for scarce land.'),
 ('Waste and landfill capacity in Singapore','Finite landfill life','Semakau Landfill has a limited remaining capacity, and every tonne of ash shortens it.'),
 ('Waste and landfill capacity in Singapore','Emissions from incineration','Waste-to-energy recovers electricity but still releases carbon dioxide and requires emissions control.'),
 ('Waste and landfill capacity in Singapore','Resource loss','Materials that are incinerated rather than recovered are permanently lost from the economy.'),
 ('Delhi''s winter air pollution','Severe health burden','Exposure to very high fine particulate concentrations is linked to respiratory disease, cardiovascular disease and premature mortality.'),
 ('Delhi''s winter air pollution','School closures and restricted activity','Emergency measures during severe episodes include closing schools and halting construction.'),
 ('Delhi''s winter air pollution','Economic cost','Health care costs, lost working days and reduced productivity accompany prolonged pollution episodes.'),
 ('Delhi''s winter air pollution','Reduced visibility','Dense haze disrupts road, rail and air transport during peak episodes.'),
 ('Groundwater depletion in the Delhi region','Falling water tables','Water must be pumped from greater depth, raising energy use and cost.'),
 ('Groundwater depletion in the Delhi region','Water quality deterioration','Deeper extraction can mobilise naturally occurring contaminants and increase salinity.'),
 ('Groundwater depletion in the Delhi region','Reduced drought resilience','A depleted aquifer provides less buffer when surface supplies are stressed.'),
 ('Living below sea level: Rotterdam''s delta defence','Permanent dependence on defences','Safety relies on continuously maintained dikes, barriers and pumps rather than natural elevation.'),
 ('Living below sea level: Rotterdam''s delta defence','Rainfall flooding inside the defences','Intense downpours can flood streets and basements even when the sea and rivers are held back.'),
 ('Living below sea level: Rotterdam''s delta defence','Rising long-term adaptation cost','Higher sea level means defences must be raised, strengthened and eventually rethought.'),
 ('Port decarbonisation in Rotterdam','Concentrated industrial emissions','A large share of national industrial carbon emissions originates in the port area.'),
 ('Port decarbonisation in Rotterdam','Local air quality and nitrogen deposition','Industry and shipping affect local air quality and contribute to nitrogen deposition on nearby nature areas.'),
 ('Port decarbonisation in Rotterdam','Economic transition risk','Employment and revenue tied to fossil value chains must be transformed rather than simply removed.')
) AS v(issue, title, description) JOIN i ON i.title = v.issue;

WITH i AS (SELECT id, title FROM public.issues)
INSERT INTO public.solutions (issue_id, title, description, expected_impact)
SELECT i.id, v.title, v.description, v.exp FROM (VALUES
 ('Winter smog in Lahore','Cleaner brick kiln technology','Conversion of traditional kilns to zigzag firing, which burns fuel more completely, has been mandated and rolled out in Punjab.','Reduces particulate emissions per brick produced; effect on city-wide concentrations depends on compliance and coverage.'),
 ('Winter smog in Lahore','Vehicle emission standards and fuel quality','Tighter fuel sulphur limits, emissions testing and fleet renewal reduce transport-related particulates.','Gradual reduction in a major local emission source as the fleet turns over.'),
 ('Winter smog in Lahore','Alternatives to crop residue burning','Machinery such as the Happy Seeder, residue markets and enforcement reduce the need to burn stubble.','Cuts a large seasonal regional contribution; requires cross-district and cross-border coordination.'),
 ('Winter smog in Lahore','Dense monitoring and public information','Expanded reference-grade monitoring with public reporting enables targeted action and informed behaviour.','Improves accountability and lets residents reduce exposure during peak episodes.'),
 ('Winter smog in Lahore','Public transport investment','Mass transit capacity reduces the number of individual vehicle trips.','Lowers transport emissions and congestion where ridership is high.'),
 ('Urban tree cover and heat in Lahore','Native species urban forestry','Planting and, critically, maintaining native, drought-tolerant trees along streets and in parks.','Increases shade and dust capture over years to decades as canopy matures.'),
 ('Urban tree cover and heat in Lahore','Protecting mature trees in road projects','Design standards that retain existing canopy during infrastructure works.','Preserves benefits that would take decades to re-establish.'),
 ('Extreme heat in Karachi','Heat action plans','Early warning, public advisories, cooling centres and pre-positioned medical response before forecast heat events.','Reduces heat-related illness and death; the approach is proven in several South Asian cities.'),
 ('Extreme heat in Karachi','Shade, water points and cool surfaces','Shade structures, public drinking water and reflective or vegetated surfaces in high-exposure areas.','Lowers exposure for outdoor workers and pedestrians at relatively low cost.'),
 ('Extreme heat in Karachi','Reliable power during heat events','Prioritising supply continuity for vulnerable areas and health facilities during heatwaves.','Maintains access to cooling exactly when risk peaks.'),
 ('Solid waste and drainage blockage in Karachi','Extending collection coverage','Expanding formal collection, including integration of informal waste workers, to underserved areas.','Reduces the volume of waste reaching drains and open dumps.'),
 ('Solid waste and drainage blockage in Karachi','Drain clearing before monsoon','Systematic pre-season desilting and clearing of stormwater channels.','Restores channel capacity ahead of peak rainfall.'),
 ('Solid waste and drainage blockage in Karachi','Reducing single-use plastics','Regulation and alternatives to reduce the lightweight plastics most likely to block drains.','Cuts the material most responsible for blockage and coastal litter.'),
 ('Land subsidence and flooding in Jakarta','Piped water expansion','Extending reliable piped supply so users no longer need private wells.','Directly addresses the main driver of subsidence, though the land does not rebound.'),
 ('Land subsidence and flooding in Jakarta','Groundwater extraction control','Licensing, metering and restriction of extraction, particularly for large commercial users.','Slows the rate of further sinking where enforced.'),
 ('Land subsidence and flooding in Jakarta','Coastal and river defences','Sea walls, pumping stations and river normalisation to manage water levels.','Buys time and reduces flood frequency, but requires continuous investment.'),
 ('Land subsidence and flooding in Jakarta','Relocation of capital functions','Moving national government functions to Nusantara reduces future growth pressure on Jakarta.','Reduces long-term demand growth; Jakarta remains the country''s largest urban economy.'),
 ('Urban air pollution in Jakarta','Mass transit expansion','MRT, LRT and bus rapid transit reduce dependence on private vehicles.','Cuts transport emissions where networks connect origins and destinations well.'),
 ('Urban air pollution in Jakarta','Emission standards and monitoring','Vehicle emission testing, industrial standards and expanded monitoring with public reporting.','Reduces emissions per source and improves enforcement.'),
 ('Urban air pollution in Jakarta','Cleaner power generation','Shifting regional generation away from coal toward lower-emission sources.','Reduces a significant regional contribution to particulate pollution.'),
 ('Drought and municipal water security in Cape Town','Demand management and pressure control','Tariffs, restrictions, leak repair and network pressure management to cut consumption and losses.','Achieved a very large, sustained reduction in city water use during the crisis.'),
 ('Drought and municipal water security in Cape Town','Supply diversification','Groundwater schemes, water reuse and desalination to reduce reliance on rainfall alone.','Lowers the risk that a single dry sequence threatens supply.'),
 ('Drought and municipal water security in Cape Town','Catchment clearing of invasive species','Removing thirsty invasive alien plants from supply catchments to increase runoff into dams.','Recovers water at relatively low cost per unit compared with new infrastructure.'),
 ('Cooling demand and the energy transition in Dubai','Large-scale solar generation','Utility-scale solar aligned with daytime cooling peaks.','Displaces gas generation during the hours when cooling demand is highest.'),
 ('Cooling demand and the energy transition in Dubai','Building efficiency codes','Insulation, shading, glazing performance and efficient equipment requirements for new and retrofitted buildings.','Reduces the cooling energy required for the same comfort level.'),
 ('Cooling demand and the energy transition in Dubai','District cooling','Centralised chilled-water systems serving many buildings more efficiently than individual units.','Improves system efficiency and enables thermal storage.'),
 ('Desalination dependence in Dubai','Reverse osmosis instead of thermal desalination','Membrane-based plants use substantially less energy per cubic metre than older thermal processes.','Lowers the energy and emissions intensity of water supply.'),
 ('Desalination dependence in Dubai','Renewable-powered desalination','Coupling desalination with solar generation.','Reduces the emissions associated with each unit of water produced.'),
 ('Desalination dependence in Dubai','Treated wastewater reuse','Using recycled water for landscaping, cooling and industry instead of desalinated potable water.','Reduces the volume that must be desalinated.'),
 ('Sea level rise and tidal flooding in Miami','Stormwater pumps and one-way valves','Installing pumping and backflow prevention where gravity drainage no longer works.','Reduces recurrent tidal street flooding in treated areas.'),
 ('Sea level rise and tidal flooding in Miami','Road and seawall elevation standards','Raising roads and requiring minimum seawall heights and freeboard for new construction.','Protects specific assets; requires coordination so water is not simply displaced.'),
 ('Sea level rise and tidal flooding in Miami','Aquifer and wellfield protection','Managing groundwater levels and relocating or protecting wellfields threatened by salt intrusion.','Safeguards drinking water supply for the region.'),
 ('Sea level rise and tidal flooding in Miami','Regional planning with shared projections','Using common sea level rise projections across counties for infrastructure planning.','Avoids inconsistent standards and poorly matched investment.'),
 ('Hurricane and storm surge exposure in Miami','Strong building codes','Florida''s post-Andrew building code requirements for wind resistance and openings.','Demonstrably reduces structural damage in high-wind events.'),
 ('Hurricane and storm surge exposure in Miami','Evacuation planning and warning','Surge-zone based evacuation planning with National Hurricane Center forecasts and warnings.','Saves lives; effectiveness depends on lead time and compliance.'),
 ('Hurricane and storm surge exposure in Miami','Natural coastal buffers','Restoring mangroves, dunes, reefs and wetlands that absorb wave and surge energy.','Reduces surge and wave damage while providing habitat and recreation benefits.'),
 ('Amazon deforestation and forest degradation','Satellite monitoring and enforcement','INPE''s DETER alerts enable rapid enforcement action against illegal clearing.','Enforcement backed by near-real-time detection has historically coincided with sharp falls in clearing rates.'),
 ('Amazon deforestation and forest degradation','Protected areas and Indigenous territories','Legally recognised protected and Indigenous lands consistently show lower deforestation than surrounding areas.','Preserves large contiguous forest and the communities that steward it.'),
 ('Amazon deforestation and forest degradation','Deforestation-free supply chains','Traceability and market agreements for beef, soy and timber that exclude recently cleared land.','Removes the market incentive for clearing where monitoring is credible.'),
 ('Amazon deforestation and forest degradation','Restoration and bioeconomy','Restoring degraded land and supporting forest-based livelihoods that depend on standing forest.','Recovers ecosystem function over time and offers economic alternatives to clearing.'),
 ('Extreme river drought in the Amazon basin','River level monitoring and early warning','Hydrological monitoring that allows communities and logistics operators to prepare for low water.','Reduces the impact of isolation by enabling pre-positioning of supplies.'),
 ('Extreme river drought in the Amazon basin','Emergency supply logistics','Pre-planned delivery of water, food, fuel and medicine to river communities during low-water periods.','Limits humanitarian impact during severe events.'),
 ('Extreme river drought in the Amazon basin','Forest protection as drought mitigation','Maintaining forest cover to sustain the moisture recycling that supports regional rainfall.','Addresses one contributing factor over the long term.'),
 ('Water security on a land-scarce island','Water reclamation (NEWater)','High-grade reclaimed water produced from treated used water through advanced membrane treatment.','Creates a supply source independent of rainfall.'),
 ('Water security on a land-scarce island','Desalination','Seawater desalination plants adding weather-independent capacity.','Improves drought resilience at the cost of higher energy use.'),
 ('Water security on a land-scarce island','Catchment expansion and demand management','Maximising the island area used as water catchment, alongside pricing, education and leak control.','Increases local yield and holds down per-capita demand.'),
 ('Waste and landfill capacity in Singapore','Waste-to-energy incineration','Incineration reduces waste volume substantially while recovering electricity.','Extends landfill life; does not remove the need to reduce waste at source.'),
 ('Waste and landfill capacity in Singapore','Extended producer responsibility','Obligations on producers for packaging and electronic waste, including reporting and take-back.','Shifts the cost and design incentive toward recoverable products.'),
 ('Waste and landfill capacity in Singapore','Circular economy measures','Food waste segregation, materials recovery and reuse targets under national waste strategy.','Reduces the volume requiring incineration and the ash sent to landfill.'),
 ('Delhi''s winter air pollution','Graded Response Action Plan','A staged set of emergency measures triggered automatically as air quality deteriorates.','Reduces some emissions during peak episodes; it is a response mechanism, not a structural fix.'),
 ('Delhi''s winter air pollution','Crop residue management','Machinery, incentives and alternative uses to avoid burning stubble in neighbouring states.','Addresses a major seasonal regional contribution; requires sustained inter-state programmes.'),
 ('Delhi''s winter air pollution','Fuel and vehicle standards','Bharat Stage VI fuels and vehicles, CNG fleets and electrification of public transport.','Structurally reduces transport emissions as the fleet turns over.'),
 ('Delhi''s winter air pollution','Dust control on construction and roads','Site covering, water spraying, mechanised sweeping and paving of shoulders.','Reduces the coarse and fine dust fraction of local pollution.'),
 ('Delhi''s winter air pollution','Airshed-level governance','Coordinated management across the National Capital Region rather than city boundaries alone.','Matches the scale of policy to the scale of the pollution problem.'),
 ('Groundwater depletion in the Delhi region','Managed aquifer recharge','Engineered recharge structures, restored water bodies and rainwater harvesting.','Returns water to the aquifer where geology and water quality allow.'),
 ('Groundwater depletion in the Delhi region','Metering and extraction regulation','Licensing and monitoring of borewells, particularly for commercial users.','Slows depletion where enforcement is effective.'),
 ('Groundwater depletion in the Delhi region','Reliable piped supply and leak reduction','Improving network coverage and reducing distribution losses so users do not depend on private wells.','Reduces the underlying demand for groundwater.'),
 ('Living below sea level: Rotterdam''s delta defence','Storm surge barriers and dikes','The Maeslant barrier and the national dike system close off or hold back extreme water levels.','Provides a very high standard of protection, maintained and upgraded over time.'),
 ('Living below sea level: Rotterdam''s delta defence','Water plazas and green roofs','Public squares designed to hold stormwater temporarily, plus roof-level retention.','Reduces peak load on drainage during intense rainfall while adding public space.'),
 ('Living below sea level: Rotterdam''s delta defence','Adaptive Delta Programme planning','A national programme that revisits assumptions and measures regularly as conditions change.','Avoids locking in decisions based on a single sea level scenario.'),
 ('Port decarbonisation in Rotterdam','Carbon capture and storage','The Porthos project transports captured industrial carbon dioxide to depleted offshore gas fields for permanent storage.','Addresses emissions from processes that are hard to electrify in the near term.'),
 ('Port decarbonisation in Rotterdam','Hydrogen import and production','Electrolysis capacity and import terminals to supply hydrogen for industry and fuel.','Enables substitution of fossil feedstocks and high-temperature heat over time.'),
 ('Port decarbonisation in Rotterdam','Shore power and electrification','Supplying berthed ships with electricity and electrifying industrial heat where feasible.','Cuts emissions and local air pollution from vessels at berth.')
) AS v(issue, title, description, exp) JOIN i ON i.title = v.issue;

WITH i AS (SELECT id, title FROM public.issues)
INSERT INTO public.indicators (issue_id, name, value, unit, year, description)
SELECT i.id, v.name, v.val, v.unit, v.yr, v.description FROM (VALUES
 ('Winter smog in Lahore','WHO annual PM2.5 guideline','5','µg/m³',2021,'Health-based guideline level for annual mean fine particulate matter. Lahore''s winter concentrations are documented as many times this level; use official monitoring for current values.'),
 ('Winter smog in Lahore','Peak season','October to February',NULL,NULL,'Qualitative indicator: smog episodes concentrate in the cool, stable winter months.'),
 ('Urban tree cover and heat in Lahore','Canopy trend',NULL,NULL,NULL,'No verified city-wide canopy percentage is included here. Remote sensing studies report decline with urban expansion; consult a cited study for figures.'),
 ('Extreme heat in Karachi','2015 heatwave','Mass casualty event',NULL,2015,'The June 2015 heatwave caused a documented surge in heat-related deaths in Karachi. Reported totals vary by source and counting method.'),
 ('Extreme heat in Karachi','WHO heat-health guidance','Heat action plans recommended',NULL,2021,'WHO and WMO recommend heat-health warning systems for cities exposed to dangerous heat.'),
 ('Solid waste and drainage blockage in Karachi','Collection coverage',NULL,NULL,NULL,'Reliable city-wide collection coverage figures are contested; qualitative reporting consistently describes significant uncollected volumes.'),
 ('Land subsidence and flooding in Jakarta','Documented subsidence','Measured in North Jakarta',NULL,NULL,'Geodetic and satellite studies document substantial subsidence in northern Jakarta, with rates varying strongly by district. Refer to the cited studies for site-specific rates.'),
 ('Land subsidence and flooding in Jakarta','Primary driver','Groundwater extraction',NULL,NULL,'Research consistently identifies groundwater extraction as the dominant cause, with sediment compaction and building loads as contributors.'),
 ('Urban air pollution in Jakarta','WHO annual PM2.5 guideline','5','µg/m³',2021,'Jakarta''s monitored annual averages are documented as well above this guideline; consult current monitoring for values.'),
 ('Drought and municipal water security in Cape Town','Day Zero','Announced, not reached',NULL,2018,'The city publicly scheduled a date at which municipal supply would largely be shut off. Demand reduction and returning rainfall meant it was never reached.'),
 ('Drought and municipal water security in Cape Town','Drought period','2015-2018',NULL,NULL,'Three consecutive below-average winter rainfall seasons drove reservoir storage to critical levels.'),
 ('Cooling demand and the energy transition in Dubai','Demand pattern','Summer peak',NULL,NULL,'Electricity demand peaks in summer, driven by air conditioning load.'),
 ('Desalination dependence in Dubai','Renewable freshwater availability','Among the lowest globally',NULL,NULL,'The UAE is consistently classed by FAO and World Bank data as extremely water-scarce in natural renewable freshwater terms.'),
 ('Sea level rise and tidal flooding in Miami','Global mean sea level trend','Rising',NULL,NULL,'NOAA and IPCC document ongoing global mean sea level rise. Consult the NOAA Virginia Key tide gauge record for the local trend.'),
 ('Sea level rise and tidal flooding in Miami','Local aquifer','Biscayne aquifer',NULL,NULL,'The shallow, highly permeable Biscayne aquifer is the region''s primary drinking water source and is vulnerable to saltwater intrusion.'),
 ('Hurricane and storm surge exposure in Miami','Building code baseline','Florida Building Code',NULL,2002,'Statewide code adopted after Hurricane Andrew, with high-velocity hurricane zone requirements for Miami-Dade and Broward counties.'),
 ('Amazon deforestation and forest degradation','Monitoring system','PRODES / DETER',NULL,NULL,'Brazil''s INPE publishes annual (PRODES) and near-real-time (DETER) deforestation data for the Legal Amazon. Use the official dashboard for current annual figures.'),
 ('Amazon deforestation and forest degradation','Dominant direct driver','Conversion to pasture',NULL,NULL,'Research consistently identifies cattle pasture as the largest single land use replacing cleared Amazon forest.'),
 ('Extreme river drought in the Amazon basin','Manaus river level record','Recorded since 1902',NULL,NULL,'The Rio Negro gauge at Manaus provides one of the longest continuous river level records in the tropics, maintained by Brazilian hydrological services.'),
 ('Water security on a land-scarce island','Supply sources','Four national taps',NULL,NULL,'Singapore''s national water agency describes supply as local catchment, imported water, NEWater and desalinated water.'),
 ('Waste and landfill capacity in Singapore','Landfill sites','One',NULL,NULL,'Semakau Landfill is the country''s only remaining landfill. Its projected closure year is published and updated by the national environment agency.'),
 ('Delhi''s winter air pollution','WHO annual PM2.5 guideline','5','µg/m³',2021,'Delhi''s monitored winter concentrations are documented at many times this guideline; consult CPCB monitoring for current values.'),
 ('Delhi''s winter air pollution','Emergency framework','Graded Response Action Plan',NULL,NULL,'A staged response plan triggered by measured air quality index thresholds across the National Capital Region.'),
 ('Groundwater depletion in the Delhi region','Assessment category','Over-exploited units',NULL,NULL,'India''s Central Ground Water Board has repeatedly classified much of Delhi''s assessment area as over-exploited, meaning extraction exceeds annual recharge.'),
 ('Living below sea level: Rotterdam''s delta defence','Land below sea level','Majority of city area',NULL,NULL,'Municipal and national sources describe the greater part of Rotterdam as lying below mean sea level.'),
 ('Living below sea level: Rotterdam''s delta defence','Storm surge barrier','Maeslantkering',NULL,1997,'Completed movable storm surge barrier protecting the Nieuwe Waterweg, closing automatically at defined water levels.'),
 ('Port decarbonisation in Rotterdam','Emissions profile','Largest Dutch industrial cluster',NULL,NULL,'The Rotterdam port-industrial complex is the largest single concentration of industrial carbon emissions in the Netherlands.')
) AS v(issue, name, val, unit, yr, description) JOIN i ON i.title = v.issue;

WITH i AS (SELECT id, title FROM public.issues)
INSERT INTO public.sources (issue_id, title, organization, url, publication_date)
SELECT i.id, v.title, v.org, v.url, v.pub::date FROM (VALUES
 ('Winter smog in Lahore','WHO global air quality guidelines','World Health Organization','https://www.who.int/publications/i/item/9789240034228','2021-09-22'),
 ('Winter smog in Lahore','Ambient (outdoor) air pollution fact sheet','World Health Organization','https://www.who.int/news-room/fact-sheets/detail/ambient-(outdoor)-air-quality-and-health',NULL),
 ('Winter smog in Lahore','Punjab Environmental Protection Department','Government of Punjab, Pakistan','https://epd.punjab.gov.pk/',NULL),
 ('Urban tree cover and heat in Lahore','Urban green spaces and health','World Health Organization Regional Office for Europe','https://www.who.int/europe/publications/i/item/WHO-EURO-2016-3352-43111-60341','2016-01-01'),
 ('Extreme heat in Karachi','Heatwaves and health: guidance on warning system development','World Meteorological Organization and WHO','https://www.who.int/publications/m/item/heatwaves-and-health-guidance-on-warning-system-development','2015-01-01'),
 ('Extreme heat in Karachi','Heat and health fact sheet','World Health Organization','https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health',NULL),
 ('Solid waste and drainage blockage in Karachi','What a Waste 2.0: A Global Snapshot of Solid Waste Management to 2050','World Bank','https://openknowledge.worldbank.org/handle/10986/30317','2018-09-20'),
 ('Land subsidence and flooding in Jakarta','Land subsidence in coastal city of Semarang and Jakarta (research overview)','Institut Teknologi Bandung geodesy research group','https://www.itb.ac.id/',NULL),
 ('Land subsidence and flooding in Jakarta','Indonesia: National Capital Integrated Coastal Development','World Bank','https://www.worldbank.org/en/country/indonesia',NULL),
 ('Urban air pollution in Jakarta','WHO Air Quality Database','World Health Organization','https://www.who.int/data/gho/data/themes/air-pollution','2022-01-01'),
 ('Drought and municipal water security in Cape Town','Water Outlook and drought response reporting','City of Cape Town','https://www.capetown.gov.za/Family%20and%20home/residential-utility-services/residential-water-and-sanitation-services',NULL),
 ('Drought and municipal water security in Cape Town','Cape Town drought: lessons for urban water security','World Resources Institute','https://www.wri.org/insights/cape-towns-water-crisis','2018-02-28'),
 ('Cooling demand and the energy transition in Dubai','The Future of Cooling','International Energy Agency','https://www.iea.org/reports/the-future-of-cooling','2018-05-15'),
 ('Cooling demand and the energy transition in Dubai','Dubai Clean Energy Strategy','Dubai Electricity and Water Authority','https://www.dewa.gov.ae/',NULL),
 ('Desalination dependence in Dubai','AQUASTAT water resources database','Food and Agriculture Organization of the United Nations','https://www.fao.org/aquastat/en/',NULL),
 ('Desalination dependence in Dubai','The State of Desalination and Brine Production: A Global Outlook','UN University Institute for Water, Environment and Health','https://inweh.unu.edu/the-states-of-desalination-and-brine-production-a-global-outlook/','2019-01-14'),
 ('Sea level rise and tidal flooding in Miami','Sea Level Rise Technical Report','NOAA / US Interagency Sea Level Rise Task Force','https://oceanservice.noaa.gov/hazards/sealevelrise/sealevelrise-tech-report.html','2022-02-15'),
 ('Sea level rise and tidal flooding in Miami','Unified Sea Level Rise Projection','Southeast Florida Regional Climate Change Compact','https://southeastfloridaclimatecompact.org/','2019-01-01'),
 ('Sea level rise and tidal flooding in Miami','Saltwater intrusion in the Biscayne aquifer','United States Geological Survey','https://www.usgs.gov/centers/car-fl-water/science/saltwater-intrusion',NULL),
 ('Hurricane and storm surge exposure in Miami','Storm surge overview','NOAA National Hurricane Center','https://www.nhc.noaa.gov/surge/',NULL),
 ('Hurricane and storm surge exposure in Miami','Florida Building Code','Florida Building Commission','https://floridabuilding.org/',NULL),
 ('Amazon deforestation and forest degradation','PRODES and DETER Amazon deforestation monitoring','Instituto Nacional de Pesquisas Espaciais (INPE), Brazil','http://terrabrasilis.dpi.inpe.br/',NULL),
 ('Amazon deforestation and forest degradation','Global Forest Review: Amazon','World Resources Institute / Global Forest Watch','https://www.globalforestwatch.org/',NULL),
 ('Amazon deforestation and forest degradation','IPCC Special Report on Climate Change and Land','Intergovernmental Panel on Climate Change','https://www.ipcc.ch/srccl/','2019-08-08'),
 ('Extreme river drought in the Amazon basin','Hydrological monitoring of the Rio Negro at Manaus','Serviço Geológico do Brasil (CPRM/SGB)','https://www.sgb.gov.br/',NULL),
 ('Extreme river drought in the Amazon basin','Drought monitoring and civil protection reporting','Centro Nacional de Monitoramento e Alertas de Desastres Naturais (Cemaden), Brazil','https://www.gov.br/cemaden/',NULL),
 ('Water security on a land-scarce island','Singapore Water Story: the four national taps','PUB, Singapore''s National Water Agency','https://www.pub.gov.sg/Public/WaterLoop/SingaporeWaterStory',NULL),
 ('Waste and landfill capacity in Singapore','Waste statistics and overall recycling','National Environment Agency, Singapore','https://www.nea.gov.sg/our-services/waste-management/waste-statistics-and-overall-recycling',NULL),
 ('Waste and landfill capacity in Singapore','Zero Waste Masterplan','Ministry of Sustainability and the Environment, Singapore','https://www.mse.gov.sg/resource-room/category/2019-08-29-zero-waste-masterplan/','2019-08-30'),
 ('Delhi''s winter air pollution','National Air Quality Index and monitoring data','Central Pollution Control Board, India','https://cpcb.nic.in/',NULL),
 ('Delhi''s winter air pollution','WHO global air quality guidelines','World Health Organization','https://www.who.int/publications/i/item/9789240034228','2021-09-22'),
 ('Delhi''s winter air pollution','Graded Response Action Plan','Commission for Air Quality Management in the NCR, India','https://caqm.nic.in/',NULL),
 ('Groundwater depletion in the Delhi region','National Compilation on Dynamic Ground Water Resources of India','Central Ground Water Board, India','https://cgwb.gov.in/',NULL),
 ('Living below sea level: Rotterdam''s delta defence','Delta Programme','Government of the Netherlands','https://english.deltaprogramma.nl/',NULL),
 ('Living below sea level: Rotterdam''s delta defence','Rotterdam Climate Adaptation Strategy','Gemeente Rotterdam','https://www.rotterdam.nl/',NULL),
 ('Port decarbonisation in Rotterdam','Porthos carbon capture and storage project','Porthos / Port of Rotterdam Authority','https://www.porthosco2.nl/en/',NULL),
 ('Port decarbonisation in Rotterdam','Port of Rotterdam energy transition','Port of Rotterdam Authority','https://www.portofrotterdam.com/en/port-future/energy-transition',NULL)
) AS v(issue, title, org, url, pub) JOIN i ON i.title = v.issue;
