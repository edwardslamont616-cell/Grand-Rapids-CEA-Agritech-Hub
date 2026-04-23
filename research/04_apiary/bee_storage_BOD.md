# Basis of Design: 4,000-Hive Indoor Winter Honey Bee Storage Facility
### CEA Campus Agritech Hub — Grand Rapids, Michigan
**Prepared by:** Amira Bloom, Apiary Specialist & Pollination Ecologist  
**Date:** 2026  
**Framework:** CARE + RACE  
**Status:** Draft for Design Council Review

---

## 1. Purpose and Scope

This Basis of Design (BOD) document establishes the engineering, operational, and biosecurity parameters for a 4,000-hive climate-controlled indoor winter honey bee storage facility at the Grand Rapids CEA Agritech Hub. The facility serves as a differentiating anchor service for Michigan's commercial beekeeper network — providing a state-of-the-art overwintering resource within the Great Lakes region, reducing beekeeper dependence on California holding yards or outdoor Michigan wintering during a period of record colony losses.

This BOD draws on published research from the [MSU Indoor Honey Bee Storage](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) facility (Milbrath & Wyns, 2023), the [Project Apis m. Indoor Storage Guide v2.0](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf), [USDA ARS early cold storage research](https://www.ars.usda.gov/news-events/news/research-news/2020/helping-honey-bees-make-it-through-winter-with-early-cold-storage/) (DeGrandi-Hoffman, Tucson), the [Alberta Beekeepers Commission Net-Zero OW Report (2019)](https://www.albertabeekeepers.ca/wp-content/uploads/2018/09/Net-Zero-OW-and-Renewables-Report-191108-1.pdf), and [WSU Indoor Storage Booklet](https://treefruitresearch.org/wp-content/uploads/2019/12/164656_indoor_bee_storage_booklet__1_.pdf).

**Key distinction:** The MSU facility holds approximately 40 colonies and serves as Michigan's state research reference. This facility targets 4,000 hives — 100× the research scale — representing the first dedicated commercial-scale indoor wintering service in Michigan and the Great Lakes region.

---

## 2. Facility Scale and Design Philosophy

| Parameter | Value | Notes |
|-----------|-------|-------|
| Target capacity | 4,000 hives | 15% of Michigan's ~67,500 commercial hives |
| Operating season | November 1 – March 15 (~135 days) | Intake begins Oct 15; release phase-out to March 31 |
| Revenue model | $100–$150/hive/season | $400,000–$600,000/year gross; differentiator + network draw |
| Facility philosophy | "Hotel, not a hospital" | Only strong, healthy, low-Varroa colonies accepted |
| MSU reference | 40 colonies at 40–45°F | [canr.msu.edu](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) |
| Commercial reference | 500,000 colonies in Idaho/adjacent states | [National Nut Grower, 2021](https://nationalnutgrower.com/article/indoor-storage-of-honeybees/) |

---

## 3. Environmental Control Parameters

### 3.1 Temperature

| Parameter | Target | Acceptable Range | Source |
|-----------|--------|-----------------|--------|
| Storage temperature | 40°F (4.4°C) | 38–42°F (3.3–5.6°C) | [Project Apis m. Guide v2.0](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf) |
| MSU facility | 40–45°F | 38–47°F | [canr.msu.edu](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) |
| Bees metabolically most efficient at | 40°F | — | Project Apis m. |
| Stress threshold (too cold) | <35°F | Colony cluster disruption | |
| Stress threshold (too warm) | >50°F | Bees break cluster, attempt flight, deplete stores |  |

**Rationale:** Bees maintained at 38–42°F remain in dormant cluster, consuming minimal honey stores (~20 lbs/hive for 135-day winter), generating approximately 20 watts of heat per hive metabolically. Above ~50°F (10°C), bees break cluster and attempt cleansing flights; those that exit do not return, reducing spring population. The 40°F optimum is strongly supported across commercial Idaho operations, USDA ARS research, and Alberta studies.

**Cooling system design:** Commercial operators target **20 watts/hive** as the design heat load for HVAC sizing. At 4,000 hives, total metabolic heat = **80 kW**. Cooling system must handle this continuous load plus envelope heat gains. [Project Apis m. Guide v2.0](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf).

**Cooling equipment reference:** MSU used a [KingTech Refer Unit](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) for their 40-colony facility, installed after HOBO weather monitoring station data analysis comparing inside/outside temperatures. The commercial equivalent would be a purpose-built multi-zone refrigeration system.

**Alert system:** Temperature alert texting system recommended (as implemented at MSU). Commercial PLC-based monitoring with dual-sensor redundancy and off-site notification for any reading outside ±2°F of setpoint.

**Generator backup:** Mandatory. [MSU facility is generator-backed](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage). At 4,000 hives, a power failure of >4 hours in winter could be catastrophic.

### 3.2 Relative Humidity (RH)

| Parameter | Target | Acceptable Range | Source |
|-----------|--------|-----------------|--------|
| Relative humidity | 50–60% | 45–65% | [Project Apis m. Guide v2.0](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf) |

**Rationale:** Excessive humidity (>70–80%) promotes mold growth on comb and equipment, causes dysentery in clustered bees, and accelerates wood decay. Very low humidity (<40%) causes bees to consume extra honey stores to maintain moisture balance within the cluster and can lead to desiccation of brood frames. [Project Apis m.](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf) testing across ranges 45–60%, 45–80%, and 60–80% showed little measurable difference in survival outcomes, but best practice centers on 50–60% for mold prevention.

**Dehumidification:** The cooling system will naturally dehumidify recirculated air; supplemental dehumidifiers should be specified in mechanical design if RH consistently exceeds 65%.

### 3.3 CO₂ Concentration

| Parameter | Target | Absolute Maximum | Source |
|-----------|--------|-----------------|--------|
| CO₂ concentration | <1,000 ppm | <1,500 ppm | Industry BOD consensus; adapted from [Alberta report](https://www.albertabeekeepers.ca/wp-content/uploads/2018/09/Net-Zero-OW-and-Renewables-Report-191108-1.pdf) |
| Alert threshold | 1,200 ppm | — | Trigger for ventilation increase |
| Human entry threshold | >1,000 ppm | OSHA: 5,000 ppm TWA max | OSHA 1910.1000 |

**Rationale:** Bees at rest produce CO₂ through respiration. At 4,000 hives × ~30,000 bees/hive × 1.8 µmol CO₂/bee/hr (at 5°C), the CO₂ load is substantial. Excessive CO₂ (>5,000 ppm) is documented to increase metabolic activity and can shorten bee lifespan; controlled CO₂ may actually suppress Varroa reproduction as a secondary benefit. MSU's facility uses a [small exhaust fan on a timer that "burps" every 10 minutes](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) to prevent CO₂ buildup; this research-scale approach is adequate for 40 hives but must be engineered to proportionally larger capacity at 4,000 hives.

**Alert system:** CO₂ sensor with text alert per MSU protocol. Commercial specification: continuous CO₂ monitoring at multiple heights (CO₂ is denser than air and pools at floor level), automated ventilation increase triggered at 1,200 ppm setpoint.

**Alberta Note:** The [Alberta Net-Zero report](https://www.albertabeekeepers.ca/wp-content/uploads/2018/09/Net-Zero-OW-and-Renewables-Report-191108-1.pdf) discusses allowing CO₂ to rise to 6,000–7,000 ppm to reduce heating load during warm outdoor periods (less fresh air exchanged). This is not recommended for the Michigan facility; maintaining <1,500 ppm provides comfortable human working conditions and aligns with best commercial practice.

### 3.4 Ventilation

| Parameter | Specification | Source |
|-----------|--------------|--------|
| Ventilation rate | 0.5–9 CFM variable per hive | [Project Apis m. Guide v2.0](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf) |
| Minimum fresh air fraction | ≥5% of total air volume | Project Apis m. |
| Air delivery system | Pressurized floor with air cup vents | Most effective; ensures equal airflow; cost-premium justified at 4,000 hives |
| Airflow pattern | One-way flow (dedicated intake + exhaust sides) | Biosecurity and uniform temperature distribution |
| Lighting during ventilation maintenance | Red-spectrum only (bees cannot see red) | [canr.msu.edu](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) — employees use red headlamps |

**Airflow design note:** A pressurized floor system delivers cooled, dehumidified air from below — working with the natural tendency of warm air to rise. This creates uniform climate conditions throughout stacked hive configurations and prevents hot spots that could prematurely break cluster.

### 3.5 Darkness

**Requirement: Complete darkness throughout the storage period.**

- All windows sealed or blocked; no light transmission from exterior ([MSU protocol](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) blocked all windows)
- Light-blocking media on all exhaust openings
- Well-sealed doors with light-trap vestibule at each entry
- **Working lights:** Red fluorescent tubes, red LED strips, or red LED headlamps **only** during any entry. [Bees cannot see red-spectrum light](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) and will remain calm in red-lit conditions
- Emergency exit lighting: Red-spectrum LED battery backup
- Signage at all entrances: "NO WHITE OR BRIGHT LIGHT INSIDE — RED LIGHTS ONLY"

---

## 4. Insulation Specification

| Component | Minimum R-Value | Notes | Reference |
|-----------|----------------|-------|-----------|
| Exterior walls | R-25 | MSU upgraded from R-13 to R-25 | [canr.msu.edu](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) |
| Ceiling/roof | R-30 or better | Commercial refrigerated building standard | [Project Apis m.](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf) |
| Overhead doors (truck entry) | Insulated; foam/gasket seals | High infiltration point | Project Apis m. |
| Service doors | Insulated; threshold seals | |  |
| Interior surfaces | Easy-clean surface (NRP or equivalent) | [MSU used NRP panel on walls](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage) for sanitation | |

---

## 5. Stocking Density and Space Requirements

| Building configuration | ft³ per hive | Source |
|----------------------|-------------|--------|
| Non-refrigerated | 30–35 ft³/hive | [Project Apis m.](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf) |
| Refrigerated (two deep boxes) | 18 ft³/hive | Project Apis m. |
| Target for this facility | 18–20 ft³/hive | Refrigerated; conservative margin |

**Calculation:** 4,000 hives × 20 ft³/hive = **80,000 ft³** minimum interior volume for bee storage. Additional volume required for truck lanes, staging areas, forklift aisles, and biosecurity vestibules. Estimated total building footprint: **120,000–140,000 ft³** gross (accounting for lanes and non-storage space).

**Floor layout:**
- Color-coded painted stripes delineating airflow zones and hive groupings (by beekeeper, by strength/weight)
- Grid system for inventory management and traceability
- Minimum 25" aisle spacing between stacked pallet rows (for sweeping dead bees)
- Industrial drains at regular intervals (condensation, cleaning)
- Perforated floor panels where air delivery is floor-based

---

## 6. Logistics: Intake and Release

### 6.1 Hive and Semi-Load Specifications

| Parameter | Specification | Notes |
|-----------|--------------|-------|
| Hive configuration | Two deep boxes (Langstroth) | 8–10 frames per box; 120–125 lbs per hive |
| Pallet configuration | 4-way pallet, 4 hives/pallet | Standard commercial; forklift-compatible |
| Semi-truck load | ~160 hives per semi | 40 pallets × 4 hives = 160 hives; standard flatbed or enclosed 53' trailer |
| Intake target (4,000 hives) | 25 semi loads in | 4,000 ÷ 160 = 25 semis |
| Release target | 25 semi loads out | Phased over 2–3 weeks at season end |
| Daily throughput (over 2-week intake) | ~285 hives/day | ~2 semis/day |

### 6.2 Intake Protocol (October 15 – November 15)

Intake timing aligns with USDA ARS research showing that **October cold storage achieves 82% survival** vs. 76% for November intake; October-stored colonies average **9.3 frames** at February release vs. 8 frames for November, and reach the premium pricing threshold of ≥9 frames more reliably ([USDA ARS, 2020](https://www.ars.usda.gov/news-events/news/research-news/2020/helping-honey-bees-make-it-through-winter-with-early-cold-storage/)).

**Pre-intake beekeeper checklist (completed before arrival):**
1. ✅ Varroa mite load <2% (alcohol wash — HBHC 2026 threshold) by September 15
2. ✅ Colony weight ≥8 frames of bees; adequate winter honey stores
3. ✅ Queen present and laying (not documented "queenless")
4. ✅ No visible AFB/EFB (foulbrood) — roped/scale/pepper appearance is disqualifying
5. ✅ Hive entrance screened or reduced for transport
6. ✅ Hive strapped for transport; no open supers

**Intake night operations:**
- Hives loaded during cold nights when all bees are in-hive and not flying ([MSU protocol](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage))
- MSUE or contract apiary inspector performs spot-inspection at truck arrival: visual AFB check on ≥10% of loads; Varroa alcohol wash on ≥3 hives per pallet group if documentation absent
- Reject hives: any with AFB signs immediately isolated in quarantine area; Varroa >3% on intake wash held in staging zone and returned to beekeeper
- Pallets positioned per floor grid map; beekeeper ID tagged to every pallet

### 6.3 Release Protocol (February 15 – March 31)

- Phase release by destination: Michigan-bound first; California-bound (almond pollination) by February 15 target
- Night release preferred; if daytime, hive entrances kept closed until truck is 10+ miles from facility to prevent re-entry drift
- Post-storage mortality sweep before pallet removal: 15,000 hives in commercial Idaho operations shed ~5–275-gallon totes of dead bees ([Project Apis m.](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf)); this facility at 4,000 hives should plan for industrial vacuum collection and composting
- Mouse control: bait trap program throughout season; target 1 trap per 4 pallets ([Project Apis m.](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf))

---

## 7. Biosecurity: One-Way Flow Protocol

**Core principle:** Once a hive enters the storage facility, it does not re-exit and re-enter. The facility uses directional flow to prevent cross-contamination between incoming and resident hives.

| Zone | Description | Access |
|------|-------------|--------|
| Intake staging (exterior) | Truck unloading, initial inspection, documentation | Beekeepers + inspectors |
| Biosecurity vestibule | Intermediate zone; staff don PPE; equipment cleaned | Staff only |
| Storage interior | Active storage zone; controlled environment | Staff only; red lights; booties + PPE |
| Quarantine bay | Isolated zone for suspect hives pending diagnosis | Restricted access |
| Release staging (exterior) | Outbound pallets; far side of building from intake | Beekeepers + staff |

**Overhead door layout:** Dedicated intake OH doors on one end; dedicated release OH doors on the opposite end of the building. This eliminates truck movement conflicts and enforces directional flow.

**Personal biosecurity:**
- Disposable boot covers required for all interior entry
- No equipment from other apiaries inside the storage building
- Hive tools, smokers, gloves cleaned and disinfected at entry vestibule (sodium hypochlorite 0.5% or Virkon-S)
- Separate staging area for any reject/quarantine hives; dedicated fork attachment for quarantine pallets

---

## 8. Survival Rate Expectations and Performance Benchmarks

| Scenario | Survival Rate | Colony Strength at Release | Source |
|----------|-------------|--------------------------|--------|
| October intake, controlled cold storage | 82% | 9.3 frames avg | [USDA ARS 2020](https://www.ars.usda.gov/news-events/news/research-news/2020/helping-honey-bees-make-it-through-winter-with-early-cold-storage/) |
| November intake, controlled cold storage | 76% | 8.0 frames avg | USDA ARS 2020 |
| Idaho commercial cold storage (DeGrandi-Hoffman) | 75% | 8.3 frames avg, 61% pollination-ready | [Project Apis m. Guide v2.0](https://static1.squarespace.com/static/650342507631075013d25a2c/t/664636c97fc2341121d317b8/1715877582458/Indoor+Storage+Guide+V+2.0+FINAL+WEBSITE_reduced_Optimized.pdf) |
| Outdoor Michigan winter (2024–2025 national avg) | ~59.3% | Variable | [Apiary Inspectors of America, 2025](https://apiaryinspectors.org/US-beekeeping-survey-24-25) |
| National commercial beekeeper winter loss 2024–25 | ~59.3% (40.7% loss) | — | AIA 2025 |

**Important honest distinction:** These survival figures come from research-scale and commercial Idaho/western US operations. Michigan-specific indoor storage survival data does not yet exist at commercial scale. The MSU facility ([canr.msu.edu](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage)) is actively building this dataset. This facility should commit to rigorous per-beekeeper mortality tracking and data sharing with MSU.

---

## 9. Supporting Infrastructure

| Element | Specification |
|---------|--------------|
| Electrical | Adequate for cooling, ventilation, monitoring, lighting (all red); full generator backup |
| Generator | Standby diesel; auto-transfer switch; ≥150 kW capacity |
| Drain system | Floor drains throughout; condensate from cooling system; dead bee washdown |
| Fork equipment | 1–2 dedicated indoor forklifts (propane or electric); right-angle mast for tight aisles |
| Monitoring network | Extended wireless signal for sensor system ([MSU approach](https://www.canr.msu.edu/resources/msu-indoor-honey-bee-storage)); commercial SCADA preferred at 4,000-hive scale |
| Inventory management | Barcode or RFID on each pallet for chain-of-custody; beekeeper portal for real-time status |
| Mouse abatement | Bait stations 1 per 4 pallets; no snap traps near hive entrances |
| Dead bee management | Industrial vacuums + composting system |

---

## 10. Scale Comparison: MSU Research vs. Proposed Commercial Facility

| Feature | MSU Facility | CEA Hub Facility |
|---------|-------------|-----------------|
| Capacity | ~40 colonies | 4,000 hives |
| Scale factor | 1× (reference) | 100× |
| Building type | Modified unheated stall building | Purpose-built refrigerated warehouse |
| Insulation | R-25 walls, insulated doors | R-25+ walls, R-30+ roof |
| Cooling | KingTech Refer Unit (single) | Multi-zone commercial refrigeration |
| CO₂ control | Timer-burp exhaust fan | Continuous monitoring + automated variable ventilation |
| Monitoring | HOBO sensors + text alerts | Commercial SCADA with PLC controls |
| Capacity | Research dataset (USDA ARS funded) | Commercial service + data partnership with MSU |
| Staff | Research personnel | Dedicated seasonal staff + apiary manager |

**Contact at MSU:** Dan Wyns, Farm Manager, wyns@msu.edu; Dr. Meghan Milbrath, Honey Bee & Pollinator Extension, mpi@msu.edu ([MSU Pollinator Performance Center](https://www.canr.msu.edu/pollinator-performance-center)).

---

## 11. Regulatory Considerations

- **Michigan Apiary Law, Act 412 of 1976:** MDARD conducts apiary inspections for shipment; no beekeeper registry maintained by state. Inspections available on request via Bryan Webster, 517-719-1693, WebsterB3@Michigan.gov ([MDARD Apiary Inspections](https://www.michigan.gov/mdard/plant-pest/plant-health/apiary-inspections))
- **Interstate shipment:** Bees entering Michigan from other states currently unrestricted; bees exiting Michigan for California almond pollination require MDARD health certificate
- **Food safety (facility):** If honey extraction occurs on-site, MDARD honey house licensing applies (>$15,000 sales requires license); storage-only operation may fall outside this requirement — confirm with MDARD
- **Zoning:** Confirm agricultural zoning supports commercial-scale beekeeping operation with semi-truck access at Grand Rapids site

---

*Document prepared by Amira Bloom, CEA Campus Design Council. All cited figures reflect published research; Michigan-scale commercial data pending MSU partnership studies and operational season tracking.*
