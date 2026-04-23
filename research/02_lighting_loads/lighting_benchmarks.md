# CEA Lighting Benchmarks
**Author:** Eng. Victor Ray, Controlled-Environment Lighting Engineer  
**Project:** Grand Rapids CEA Agritech Hub  
**Date:** 2025  
**Frameworks Applied:** Co-Star + TRACE + CARE + RTF + RISE

---

## Executive Summary

Artificial lighting in vertical farms (VFs) is the dominant energy sink, accounting for **65–85% of total electrical consumption** with installed intensities of 150–250 W/m² for leafy greens and 250–400 W/m² for fruiting crops. A literature-based specific electricity consumption (SEC) of 7–11.34 kWh/kg for lettuce, combined with realistic installed loads across this facility's six-layer canopy, produces a modeled annual demand of approximately **24–30 GWh/yr** — materially higher than the pro-forma estimate of 4.205 GWh/yr. The 2026 Frontiers in Plant Science continuous-lighting study validates that 24 L:0 D at 170 µmol/m²/s improves energy-use efficiency (EUE) by 21% vs. 16 L:8 D at equivalent DLI — the single most actionable finding for load reduction in this facility.

---

## 1. PPFD and DLI Targets by Crop Type

### 1.1 Leafy Greens (Lettuce, Arugula, Spinach, Chard)

| Parameter | Range | Optimal Target | Notes |
|---|---|---|---|
| PPFD (µmol/m²/s) | 150–300 | 170–250 | Upper limit avoids photoprotection / light-saturation response |
| DLI (mol/m²/day) | 12–20 | 14–17 | 14.4 mol/m²/day used as reference DLI in 2026 study |
| Photoperiod | 12–24 h | 24 h (24 L:0 D) | Equivalent yield at lower instantaneous PPFD |
| Optimal PPFD at 24 h | 170 µmol/m²/s | 170 ± 8 | DLI = 14.4 mol/m²/day |
| EUE (g·kWh⁻¹) at 24 L:0 D | 11.4 ± 1.4 | — | 21% better than 16 L:8 D regime |

**Key source:** [Frontiers in Plant Science 2026 — Continuous lighting at low PPFD](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1783548/full) — study used DLI = 14.4 mol/m²/day across three photoperiod/PPFD combos; 24 L:0 D at 170 µmol/m²/s yielded equivalent biomass with 16.5% lower LED energy cost vs. 12 L:12 D.

**Secondary source:** [Frontiers in Plant Science 2026 — Continuous light at fixed DLI enhances lettuce growth](https://pmc.ncbi.nlm.nih.gov/articles/PMC12910367/) — continuous lighting at 196 µmol/m²/s (18 h reference: 258 µmol/m²/s) increased shoot fresh mass by 15%, EUE by 16–18%, with 6–7% total energy reduction when LED photon efficacy improvement at lower drive current is accounted.

### 1.2 Herbs (Basil, Cilantro, Mint, Chives)

| Parameter | Range | Target |
|---|---|---|
| PPFD (µmol/m²/s) | 200–400 | 250–300 |
| DLI (mol/m²/day) | 14–22 | 17–20 |
| Photoperiod | 14–18 h | 16–18 h |

**Note:** Basil is sensitive to continuous lighting; 16–18 h photoperiods recommended. Continuous lighting strategies for leafy greens should not be applied uniformly to basil without cultivar-specific validation.

### 1.3 Microgreens (Sunflower, Radish, Pea Shoot, Broccoli)

| Parameter | Range | Target |
|---|---|---|
| PPFD (µmol/m²/s) | 100–250 | 150–200 |
| DLI (mol/m²/day) | 8–16 | 12–14 |
| Photoperiod | 12–18 h | 16 h |

**Key source:** [ScienceDirect 2024 — Continuous light promotes growth of baby greens](https://www.sciencedirect.com/science/article/pii/S0098847224000534) — decreasing PPFD while extending photoperiod (12→24 h) under higher DLI increased biomass of lettuce and kale; PSII efficiency was higher under lower PPFD/extended photoperiod regime.

### 1.4 Greenhouse Tomato (Fruiting)

| Parameter | Range | Target | Notes |
|---|---|---|---|
| PPFD supplemental (µmol/m²/s) | 200–520 | 250–300 | Supplemental only; depends on ambient solar DLI |
| DLI total target (mol/m²/day) | 20–35 | 25–30 | 20–30 per OMAFRA 2025 guidance |
| Photoperiod supplemental | 12–16 h | 16 h standard; 24 h dynamic feasible | See tomato dynamic lighting study |
| Installed watts for supplemental | 250–400 W/m² | ~300 W/m² | Michigan low-solar winter condition; supplemental DLI ~14.4 mol/m²/day |

**Key source:** [Frontiers in Plant Science 2026 — Dynamic lighting mitigates photoperiodic injury in greenhouse tomato](https://pmc.ncbi.nlm.nih.gov/articles/PMC12913140/) — 24 h dynamic lighting (white day + low-PPFD blue night) maintained fruit yield vs. 16 h control while enabling off-peak electricity rate capture. Optimal DLI for tomato 20–30 mol/m²/day per [OMAFRA 2025].

**Wageningen UR source:** [Wageningen edepot — Far-red fraction in tomato supplementary lighting](https://edepot.wur.nl/698915) — supplementary LED with added far-red (FR) increases tomato fruit yield in low-solar compartments; FR addition improves dry matter partitioning to fruit.

---

## 2. Installed Intensity Benchmarks (W/m² Canopy)

| Crop | Published Range (W/m²) | Notes |
|---|---|---|
| Lettuce / leafy greens (VF sole-source) | 150–250 W/m² | Based on fixture installed at 170–250 µmol/m²/s, LED efficacy 2.7–3.5 µmol/J → 49–93 W per µmol target × 1 m² |
| Herbs | 200–300 W/m² | Higher DLI requirement |
| Microgreens | 100–200 W/m² | Lower DLI, short cycle |
| Greenhouse tomato supplemental | 250–400 W/m² | High-bay HPS replacement; LED toplighting |

**Derivation check (leafy greens, 170 µmol/m²/s target, 3.0 µmol/J fixture):**  
170 µmol/m²/s ÷ 3.0 µmol/J = **56.7 W/m²** installed (fixture level, not accounting for uniformity margin)  
With 15% uniformity margin and driver overhead: ~**65 W/m²** design value at 24 L:0 D strategy  
At 250 µmol/m²/s (16 L:8 D): 250 ÷ 3.0 = 83 W/m² + margin = ~**96 W/m²**

The continuous-lighting strategy (24 L:0 D) reduces installed W/m² by ~32% for the same DLI — directly reducing capital cost of fixtures and cooling load.

---

## 3. Energy Use Efficiency (EUE) and Specific Electricity Consumption (SEC)

| Metric | Range | Notes |
|---|---|---|
| SEC (kWh/kg lettuce) | 7–11.34 | Literature range; Iran model 11.34 kWh/kg; general range 7–10 |
| Lighting share of total VF energy | 65–90% | Typical 78%; dehumidification 19%; other 3% |
| EUE at 16 L:8 D (g/kWh) | ~9.0 ± 1.0 | From 2026 study |
| EUE at 24 L:0 D (g/kWh) | ~11.4 ± 1.4 | 21% improvement over 16 L:8 D; 12% improvement in LUE |
| LED energy cost reduction at 24 L:0 D | 16.5% lower | vs. 12 L:12 D at same DLI |

**Key source:** [ScienceDirect 2024 — Energy-yield-cost model for VF lettuce](https://www.sciencedirect.com/science/article/abs/pii/S016816992400200X) — SEC = 11.34 kWh/kg; lighting + dehumidification = 78% + 19% of total electrical consumption; sensitivity shows SEC drops with CO₂ enrichment to 1000 ppm.

**Key source:** [ScienceDirect 2024 — Benchmarking energy efficiency in VF](https://www.sciencedirect.com/science/article/pii/S2451904924007832) — lighting share ranges from slightly below 50% to nearly 100%, with **typical values 65–90%**; HVAC estimated at 25% additional load above lighting.

---

## 4. Energy Use in Context of the Pro-Forma

The pro-forma claim of **4.205 GWh/yr** is inconsistent with published benchmarks for a facility of this scale and intensity. A simplified lighting-only check:

**Leafy greens zone (22,300 m² canopy):**  
- At 65 W/m² installed, 24 L:0 D = 24 h/day × 365 days × 65 W/m² × 22,300 m²  
- = 8,760 h/yr × 65 W/m² × 22,300 m²  
- = **12.69 GWh/yr** (lighting only, leafy greens)

**Tomato zone (2,000 m²):**  
- 300 W/m² × 4,200 h/yr (supplemental season) × 2,000 m² = **2.52 GWh/yr**

**Lighting subtotal alone ≈ 15+ GWh/yr** before accounting for HVAC, dehumidification, pumps, processing, or visitor center loads.

**Conclusion:** The pro-forma 4.205 GWh/yr figure is off by a factor of ~6–7x relative to realistic full-build lighting demand. Realistic total facility demand at full ramp: **24–30 GWh/yr** (see load schedule v01).

---

## 5. Continuous Lighting at Low PPFD — Summary Evidence

| Study | Finding | Relevance |
|---|---|---|
| [Frontiers 2026 — continuous 24 L:0 D](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1783548/full) | 24 L:0 D at 170 µmol/m²/s matches 16 L:8 D at 250 µmol/m²/s (same DLI 14.4); EUE 21% better | Primary basis for 24 L:0 D recommendation |
| [Frontiers 2026 — CL enhances lettuce growth](https://pmc.ncbi.nlm.nih.gov/articles/PMC12910367/) | CL at 196 µmol/m²/s vs. 18 h at 258 µmol/m²/s: +15% fresh mass, +16–18% EUE, −6–7% total energy | Supports CL adoption; cultivar-dependent |
| [ScienceDirect 2024 — continuous light baby greens](https://www.sciencedirect.com/science/article/pii/S0098847224000534) | Extended photoperiod at same PPFD increases biomass; PSII efficiency higher | Supports CL for baby greens / microgreens |
| [Frontiers 2026 — dynamic increasing light intensity](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1763702/full) | 250→250→350 µmol/m²/s staged approach improves LUE 23–31% vs. fixed 350 µmol/m²/s | Supports staged/dynamic lighting |
| [Frontiers 2026 — dynamic lighting greenhouse tomato](https://pmc.ncbi.nlm.nih.gov/articles/PMC12913140/) | 24 h dynamic (white day + low-PPFD blue night) matches 16 h yield; enables off-peak rate capture | Applies to Zone B tomato |

**Critical caveat:** Continuous lighting at *fixed PPFD* (i.e., same intensity extended to 24 h, resulting in higher DLI) can decrease fresh mass in some cultivars and cause photoperiodic injury in tomato. The benefit is only realized when **DLI is held constant** while PPFD is reduced proportionally to extend the photoperiod.

---

## Sources

1. [Frontiers in Plant Science 2026 — Continuous lighting at low PPFD improves energy efficiency](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1783548/full) (PubMed: https://pubmed.ncbi.nlm.nih.gov/41858668/)
2. [Frontiers in Plant Science 2026 — Continuous light at fixed DLI enhances lettuce growth](https://pmc.ncbi.nlm.nih.gov/articles/PMC12910367/)
3. [ScienceDirect 2024 — Energy-yield-cost model for vertical farms (Arcasi et al.)](https://www.sciencedirect.com/science/article/abs/pii/S016816992400200X)
4. [ScienceDirect 2024 — Benchmarking energy efficiency in vertical farming](https://www.sciencedirect.com/science/article/pii/S2451904924007832)
5. [ScienceDirect 2024 — Continuous light promotes growth of baby greens](https://www.sciencedirect.com/science/article/pii/S0098847224000534)
6. [Frontiers in Plant Science 2026 — Temporally increasing light intensity](https://www.frontiersin.org/journals/plant-science/articles/10.3389/fpls.2026.1763702/full)
7. [Frontiers in Plant Science 2026 — Dynamic lighting mitigates photoperiodic injury in greenhouse tomato](https://pmc.ncbi.nlm.nih.gov/articles/PMC12913140/)
8. [Wageningen UR 2025 — Dose-response of tomato fruit yield to far-red](https://edepot.wur.nl/698915)
9. [Open Research Europe 2025 — Dynamic Energy Optimization and Lighting Flexibility Classification (TRNSYS 18)](https://open-research-europe.ec.europa.eu/articles/5-316)
10. [Danfoss — Energy-efficient climate control in vertical farms](https://www.danfoss.com/en/industries/food-and-beverage/dcs/vertical-farming/energy-efficient-climate-control-in-vertical-farms/)
