# Dynamic Lighting + Load-Flex Controls Philosophy
**Author:** Eng. Victor Ray, Controlled-Environment Lighting Engineer  
**Project:** Grand Rapids CEA Agritech Hub  
**Date:** 2025  
**Frameworks Applied:** Co-Star + TRACE + RTF

---

## 1. Overview and Design Intent

The Grand Rapids CEA Agritech Hub integrates a run-of-river hydroelectric power supply with a 100,000 SF six-layer controlled-environment facility. The lighting system — the facility's dominant load at ~61% of total annual kWh — must be designed not only for crop optimization but as an active dispatchable asset in the facility's microgrid energy management strategy.

This document establishes the operating philosophy for:
1. Continuous low-PPFD (24 L:0 D) lighting for Zone A leafy greens
2. Dynamic spectrum + photoperiod strategy for Zone B greenhouse tomato
3. Load-flex integration with hydro capacity factor by month
4. Spectral tuning protocols
5. Digital twin / TRNSYS-informed adaptive control

---

## 2. Primary Recommendation: Continuous 24 L:0 D at Low PPFD for Zone A

### 2.1 Scientific Basis

The 2026 Frontiers in Plant Science study ([Continuous lighting at low PPFD improves energy efficiency](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1783548/full)) provides direct experimental evidence for this recommendation:

- Three photoperiod/PPFD combinations tested at constant DLI = 14.4 mol/m²/day:
  - **16 L:8 D @ 250 µmol/m²/s**
  - **12 L:12 D @ 340 µmol/m²/s**
  - **24 L:0 D @ 170 µmol/m²/s** ← recommended
- All three regimes produced **statistically equivalent yield, morphology, and photosynthetic performance** (p > 0.05 for most parameters)
- 24 L:0 D produced:
  - EUE = 11.4 ± 1.4 g·kWh⁻¹ (21% better than 16 L:8 D)
  - LUE = 3.8 g·mol⁻¹ (12% better)
  - LED energy cost 16.5% lower vs. 12 L:12 D

A second 2026 Frontiers study ([Continuous light at fixed DLI enhances lettuce growth](https://pmc.ncbi.nlm.nih.gov/articles/PMC12910367/)) found continuous light at constant DLI:
- Increased shoot fresh mass **+15%**, shoot dry mass **+18%** vs. 18 h photoperiod
- EUE improved **16–18%**
- Total energy use reduced **6–7%** (accounting for LED photon efficacy improvement at lower drive current density in Scenario B)

### 2.2 Mechanism: Why Lower PPFD Improves Efficiency

1. **LED drive current and photon efficacy:** At lower drive currents, LEDs operate closer to their peak wall-plug efficiency. A fixture rated 2.7 µmol/J at full power may achieve 3.0–3.6 µmol/J at 67% power (170 µmol/m²/s vs. 250 µmol/m²/s). Per [Frontiers 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12910367/), Scenario B assumes 3.6 vs. 3.4 µmol/J for CL vs. 18 h, yielding 6% LED energy reduction.
2. **Plant PSII efficiency:** At lower PPFD, PSII quantum yield is higher — more CO₂ fixed per photon delivered.
3. **Reduced heat load → HVAC savings:** Lower instantaneous PPFD = lower sensible heat generation from fixtures = 4–11% HVAC energy reduction.
4. **Flatter demand curve:** 24 h constant load vs. 16/18 h peaked load reduces utility demand charges.

### 2.3 Caveat: Cultivar Selection Required

Not all leafy green species are tolerant of continuous lighting. Basil and some warm-season herbs exhibit tip-burn or excessive elongation under 24 L:0 D. **Zone A herb sub-zone should be maintained at 16–18 h photoperiod** with 200–250 µmol/m²/s for basil. Lettuce cultivars proven tolerant of CL include 'Falstaff', 'Copacabana', 'Jagger', 'Danstar', 'Rex', 'Rouxai'.

---

## 3. Zone B Tomato: 24 h Dynamic Lighting

### 3.1 Scientific Basis

[Frontiers in Plant Science 2026 — Dynamic lighting mitigates photoperiodic injury in greenhouse tomato](https://pmc.ncbi.nlm.nih.gov/articles/PMC12913140/):

- **24 h Dynamic regime:** White light 06:00–22:00 (day) at 212 µmol/m²/s; Blue-dominant light 22:00–06:00 (night) at 75 µmol/m²/s; total DLI = 14.4 mol/m²/day
- **Result:** 24 h dynamic matched 16 h control in fruit yield and visual quality; Fv/Fm maintained (no PSII stress); 24 h static (constant white) caused PSII damage
- **Economic benefit:** 24 h dynamic enables off-peak electricity rate capture (22:00–06:00) and reduces peak fixture power by ~30% → smaller installed kW → capital savings

**Important distinction:** 24 h *static* (constant high PPFD, constant spectrum) is harmful to tomato. 24 h *dynamic* (spectral shift + PPFD reduction at night) is the viable strategy.

### 3.2 Recommended Tomato Light Schedule (Zone B)

| Period | Start | End | Spectrum | PPFD (µmol/m²/s) | Notes |
|---|---|---|---|---|---|
| Day photoperiod | 06:00 | 22:00 | White (R:G:B ≈ 62:28:10) | 212 | Active growth period; supplemental to solar |
| Night period | 22:00 | 06:00 | Blue-dominant (100% blue) | 75 | Minimal demand; off-peak rate; photoperiod extension without injury |
| Dark period | None | — | Off | 0 | Not used in 24 h dynamic regime |

**Fruit yield optimization:** Target DLI 20–30 mol/m²/day for premium winter production. Michigan January–February solar DLI ≈ 3–6 mol/m²/day inside greenhouse. Supplemental target: 14–22 mol/m²/day (supplemental DLI to total ≥ 25 mol/m²/day peak months).

---

## 4. Load-Flex Integration with Hydro Capacity Factor

### 4.1 Run-of-River Capacity Factor — Monthly Profile

Michigan run-of-river hydro capacity factors follow snowmelt and precipitation patterns (coordination with Dr. Lena Watts):

| Month | Hydro CF (typical) | Hydro Available (kW @ 1 MW installed) | Lighting Load (kW) | Load-Flex Action |
|---|---|---|---|---|
| January | 0.55–0.70 | 550–700 | 1,163 baseload | Grid supplement; no dimming |
| February | 0.55–0.70 | 550–700 | 1,163 | Grid supplement |
| March | 0.70–0.90 | 700–900 | 1,163 | Reduced grid supplement; begin DLI increase |
| April | 0.85–1.00 | 850–1,000 | 1,163 | Near-full hydro; maximize production |
| May | 0.90–1.00 | 900–1,000 | 1,163 | Peak hydro; reduce tomato supplemental (solar DLI rising) |
| June | 0.60–0.80 | 600–800 | ~1,000 (tomato lights off) | Reduce Zone B; hydro matches reduced load |
| July | 0.50–0.65 | 500–650 | ~1,000 | Low hydro; may dim Zone A 5–10% |
| August | 0.45–0.60 | 450–600 | ~1,000 | Low hydro; consider peak shaving to 850 kW |
| September | 0.55–0.70 | 550–700 | ~1,000 | Transitional |
| October | 0.65–0.80 | 650–800 | ~1,163 (tomato resumes) | Resume supplemental; hydro rising |
| November | 0.70–0.90 | 700–900 | 1,163 | Shoulder; partial grid supplement |
| December | 0.55–0.75 | 550–750 | 1,163 | Low hydro; full grid supplement |

**Key insight:** Hydro capacity is weakest in July–August when Zone B lighting is off. Zone A 24 L:0 D creates a flat ~1,000 kW baseload that provides hydro a constant, predictable load — maximizing plant factor and minimizing grid tariff variability.

### 4.2 DLI Modulation as a Load-Flex Lever

Under 24 L:0 D, PPFD (and thus load) can be modulated ±15% around the 170 µmol/m²/s target without yield impact (within 14–17 mol/m²/day DLI range):

- **High hydro, low grid price (spring/fall):** Increase PPFD to 185–195 µmol/m²/s → higher DLI → faster crop cycle → increased revenue
- **Low hydro, high grid price (mid-summer, mid-winter):** Decrease PPFD to 155–160 µmol/m²/s → DLI = 13.4–13.8 mol/m²/day → slight cycle extension but acceptable yield
- **Load reduction magnitude:** 15% PPFD reduction on Zone A = ~80 kW demand reduction → ~700 MWh/yr saved at grid peak periods

**This load-flex range (±80 kW on Zone A lighting) should be formalized in the building's demand response agreement with Consumers Energy or Upper Michigan Energy Resources.**

### 4.3 Recommended Control System Architecture

```
BMS Layer (Siemens Desigo CC or equivalent)
  ├── Lighting Controller (DALI-2 master or 0–10V zone controller)
  │     ├── Zone A: Addressable per shelf/rack × 6 layers × aisles
  │     ├── Zone B: Per-row dimming, 4-channel spectral (Signify TLF)
  │     └── Zone C: Independent per microgreens table
  ├── Energy Management System (EMS) — receives hydro kW signal from Lena's SCADA
  │     ├── Real-time hydro output (kW)
  │     ├── Grid import/export meter
  │     └── Demand response controller (triggers PPFD modulation)
  ├── Crop Database Interface (Dr. Maya Green's crop management system)
  │     ├── Current crop stage per zone
  │     ├── DLI cumulative counter (reset daily)
  │     └── Target DLI per zone per day
  └── Digital Twin / TRNSYS model (offline simulation, updated weekly)
        ├── Predictive energy optimization
        └── Carbon footprint tracker
```

---

## 5. Spectral Tuning Protocols

### 5.1 Zone A — Leafy Greens Spectral Strategy

| Growth Stage | Spectrum | Rationale |
|---|---|---|
| Germination (Day 0–3) | White 5000K (blue-enriched) | Hypocotyl extension suppression |
| Transplant / early veg (Day 4–10) | Broad white R4 (65% red, 5% blue, 30% green) | Balanced photosynthesis; canopy establishment |
| Production phase (Day 10–harvest) | 24 L:0 D @ 170 µmol/m²/s, broad spectrum | Per 2026 Frontiers study regime |
| Pre-harvest (24–48 h) | Shift toward higher blue (10→20%) | Anthocyanin elevation in red varieties; antioxidant enhancement |

### 5.2 Zone B — Tomato Spectral Strategy

| Growth Stage | Spectrum | PPFD | Notes |
|---|---|---|---|
| Seedling / transplant | High blue (30%) + white | 150–200 µmol/m²/s | Compact internodes |
| Vegetative growth | White broadband R:G:B 62:28:10 | 212–250 µmol/m²/s | + solar DLI |
| Flower initiation | R:G:B with +FR (730 nm, 5–10%) | 250–300 µmol/m²/s | Far-red promotes phytochrome PFR, fruit set |
| Fruit development / fill | Maintain broadband + FR | 250–300 µmol/m²/s | Per Wageningen 2025 FR study |
| Night period (dynamic) | Blue-dominant (100% blue) | 75 µmol/m²/s | Off-peak; avoids photoperiodic injury |

**Source:** [Wageningen UR 2025 — Far-red dose response tomato](https://edepot.wur.nl/698915) — additional FR increases tomato fruit yield and dry matter partitioning to fruit in low-solar greenhouse.

---

## 6. TRNSYS / Digital Twin Energy Optimization

The Open Research Europe 2025 paper ("Dynamic Energy Optimization and Lighting Flexibility Classification") used TRNSYS 18 simulations of a pilot VF unit in Northern Greece to evaluate performance and carbon footprint under dynamic lighting regimes. Key methodology applicable to this facility:

- TRNSYS 18 models simultaneous heat-moisture-light-CO₂ interactions hourly
- Dynamic lighting flexibility reduces peak demand 20–35% vs. fixed-schedule lighting
- Carbon footprint reduction: up to 40% vs. grid average when paired with renewable supply

**Recommended actions for Grand Rapids hub:**
1. Build a TRNSYS 18 or EnergyPlus model of the facility shell + equipment loads
2. Input Michigan TMY (Typical Meteorological Year) weather data for Grand Rapids (KGRR)
3. Validate against initial measured data (first 6 months of operation)
4. Use model to optimize monthly DLI targets, zone-specific setpoints, and hydro dispatch schedule
5. Update model quarterly with actual performance data

**Source:** [Open Research Europe 2025 — Dynamic Energy Optimization and Lighting Flexibility Classification, TRNSYS 18](https://open-research-europe.ec.europa.eu/articles/5-316)

---

## 7. Staging / Dynamic Intensity During Crop Cycle

Per [Frontiers in Plant Science 2026 — Temporally increasing light intensity](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1763702/full):

- A staged approach of 250→250→350 µmol/m²/s (seedling → veg → late canopy) improved light use efficiency 23–31% vs. fixed 350 µmol/m²/s
- Mechanism: larger canopy at harvest intercepts higher PPFD more efficiently; supplying low PPFD during early growth avoids wasted photons on small leaf area

**Recommendation for Zone A production racks:**  
- Days 0–10 (germination/transplant): 100–130 µmol/m²/s
- Days 10–20 (early veg): 150–160 µmol/m²/s  
- Days 20–harvest (~30–35 d): 170 µmol/m²/s (24 L:0 D full target)

This staged approach saves an estimated 8–12% additional lighting energy vs. fixed 170 µmol/m²/s throughout the crop cycle.

---

## 8. Summary of Recommendations

| Recommendation | Estimated Impact | Source |
|---|---|---|
| 24 L:0 D @ 170 µmol/m²/s for Zone A lettuce (vs. 16 L:8 D @ 250) | −21% EUE improvement; −32% installed W/m²; flat demand curve | [Frontiers 2026](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1783548/full) |
| Continuous light (CL) at constant DLI for tolerant cultivars | +15–18% fresh mass; −6–7% total energy | [Frontiers 2026](https://pmc.ncbi.nlm.nih.gov/articles/PMC12910367/) |
| 24 h dynamic lighting for Zone B tomato (white day + blue night) | Maintains yield; enables off-peak rate capture; −~15% peak demand | [Frontiers 2026 tomato](https://pmc.ncbi.nlm.nih.gov/articles/PMC12913140/) |
| Staged intensity (lower early growth, ramp up at late canopy) | −8–12% lighting energy/cycle | [Frontiers 2026](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1763702/full) |
| DALI-2 or 0–10V dimming tied to hydro CF signal | Load flex ±80 kW; demand charge reduction | TRNSYS digital twin |
| PPFD modulation ±15% based on hydro availability | −700 MWh/yr at grid peak (est.) | Derived from model |

---

## Sources

1. [Frontiers in Plant Science 2026 — Continuous lighting at low PPFD](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1783548/full)
2. [Frontiers in Plant Science 2026 — Continuous light at fixed DLI enhances lettuce growth](https://pmc.ncbi.nlm.nih.gov/articles/PMC12910367/)
3. [Frontiers in Plant Science 2026 — Dynamic lighting mitigates photoperiodic injury in greenhouse tomato](https://pmc.ncbi.nlm.nih.gov/articles/PMC12913140/)
4. [Frontiers in Plant Science 2026 — Temporally increasing light intensity](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1763702/full)
5. [Open Research Europe 2025 — Dynamic Energy Optimization and Lighting Flexibility, TRNSYS 18](https://open-research-europe.ec.europa.eu/articles/5-316)
6. [Wageningen UR 2025 — Far-red dose response in tomato supplementary lighting](https://edepot.wur.nl/698915)
7. [ScienceDirect 2024 — Energy-yield-cost model for VF](https://www.sciencedirect.com/science/article/abs/pii/S016816992400200X)
