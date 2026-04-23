# USGS FLOW ANALYSIS — GRAND RIVER AT GRAND RAPIDS
## USGS Gage 04119000 (Grand Rapids) and 04118500 (Ionia)
### CEA Campus Design Council / Dr. Lena Watts
### April 2026

---

## 1. GAGE 04119000 — GRAND RIVER AT GRAND RAPIDS, MI

**Source:** [USGS Water Data for the Nation — USGS 04119000](https://waterdata.usgs.gov/nwis/uv?site_no=04119000&legacy=1)

### Site Information

| Parameter | Value |
|---|---|
| Gage ID | USGS 04119000 |
| River | Grand River |
| Location | Grand Rapids, Kent County, MI |
| Latitude | 42.9630° N |
| Longitude | -85.6773° W |
| Drainage Area | **4,900 square miles** |
| Gage Elevation | 585.24 ft NAVD88 |
| Period of Record | 1901–present (with gaps) |
| Hydrologic Unit | Lower Grand (04050006) |

This is one of the longest-running USGS streamgages in Michigan, providing over 120 years of flow data. The 4,900 sq mi drainage area represents approximately 94% of the Grand River's total watershed, making this gage the most representative measure of flow at the CEA project site.

### Summary Flow Statistics (All Available Years)

| Statistic | Flow (cfs) | Notes |
|---|---|---|
| **Historical Minimum** | **1,000 cfs** | Recorded 1963 |
| **25th Percentile** | **1,980 cfs** | Exceeded 75% of the time |
| **Median (50th Percentile)** | **3,020 cfs** | Exceeded 50% of the time |
| **Mean Annual Flow** | **4,110 cfs** | Long-term arithmetic mean |
| **75th Percentile** | **5,390 cfs** | Exceeded 25% of the time |
| **Historical Maximum** | **15,900 cfs** | Recorded 1974 |

### Seasonal Patterns

The Grand River follows a strongly seasonal pattern driven by snowmelt, spring rainfall, and summer evapotranspiration. Based on long-term monthly means and MSU Extension data:

| Season | Typical Flow Range | Notes |
|---|---|---|
| **Winter (Dec–Feb)** | 2,000–4,500 cfs | Ice formation possible; some operational shutdown risk |
| **Spring (Mar–Apr)** | 5,000–10,000+ cfs | Snowmelt; spring freshets; March median ~7,000 cfs |
| **Late Spring (May–Jun)** | 3,000–6,000 cfs | Declining from spring peak |
| **Summer (Jul–Sep)** | **1,500–2,500 cfs** | **Lowest flows; highest risk of falling below design** |
| **Fall (Oct–Nov)** | 2,000–3,500 cfs | Recovery begins; highly variable |

*Source: [MSU Extension — Low Water in Grand River, October 2012](https://www.canr.msu.edu/news/low_water_offers_a_better_look_at_the_grand_river) (historical seasonal pattern; flagged as older reference); supplemented by USGS monthly mean data.*

---

## 2. GAGE 04118500 — GRAND RIVER AT IONIA, MI

**Status note:** USGS gage 04118500 is located at Ionia, approximately 35 miles upstream of Grand Rapids. This gage captures approximately 3,600–3,800 sq mi of drainage area (compared to 4,900 sq mi at Grand Rapids), representing the upstream portion of the watershed without the contribution of several major tributaries that enter between Ionia and Grand Rapids (including the Flat River and Thornapple River).

The Ionia gage provides useful context for upstream flow regime but will consistently show lower absolute flows than Grand Rapids. Interpolation between Ionia and Grand Rapids is appropriate for flood routing analysis and dam-removal modeling. For turbine sizing at the CEA site, **the Grand Rapids gage (04119000) is the controlling datum.**

---

## 3. FLOW DURATION ANALYSIS AND CAPACITY FACTOR DERIVATION

### Design Flow Calculation

For a run-of-river turbine producing 400 kW at a given head:

$$P_{kW} = Q_{cfs} \times H_{ft} \times \eta \times 0.0843$$

where η = 0.82 (overall efficiency, turbine × generator).

| Available Head (ft) | Design Flow for 400 kW (cfs) | % of Mean Flow | Approx. Flow Exceedance |
|---|---|---|---|
| 3 ft (minimum from grade control) | 1,929 cfs | 47% | ~65% of time |
| 5 ft (typical grade control) | 1,157 cfs | 28% | ~80% of time |
| 6 ft (optimistic side-channel) | 964 cfs | 23% | ~83% of time |
| 8 ft (best case, pre-dam-removal) | 723 cfs | 18% | ~88% of time |

At 5 ft head, the design flow of ~1,157 cfs is between the 25th percentile (1,980 cfs) and the historical minimum (1,000 cfs). However, note that the actual percentile at ~1,157 cfs requires a full flow duration curve, which is not directly available from the published statistics. The estimates above are interpolated.

### Capacity Factor Derivation

Raw flow exceedance does not equal capacity factor. The following adjustments must be applied:

| Reduction Factor | Estimated Impact on CF | Rationale |
|---|---|---|
| Raw flow exceedance at design flow | ~80–83% (baseline, 5 ft head) | Based on flow statistics interpolation |
| Summer low-flow curtailments | –10 to –15% | July–October flows frequently near or below 1,157 cfs |
| Winter ice shutdowns | –3 to –5% | Grand River freezes partially; operational risk Dec–Feb |
| Flood curtailment (Q > 10× design) | –2 to –3% | High flows (>10,000 cfs) may require shutdown for debris/safety |
| Maintenance and planned outages | –3 to –5% | Typical for small hydro: 2–4 weeks/year |
| Head loss post-dam removal | –5 to –10% | Grade control structures yield 2–5 ft vs. 6–10 ft at dams |

**Net realistic CF range: 42–60%** (see scenario table in [hydro_feasibility_memo.md](hydro_feasibility_memo.md))

This range is consistent with documented CF values for comparable Michigan run-of-river projects:
- Ada Dam (Thornapple): 40.8%
- Cascade Dam (Thornapple): 50.0%
- Croton Dam (Muskegon): 46.6%
- Tippy Dam (Manistee, ROR mode): 34.8%

### Why 100% Capacity Factor Is Impossible

The claimed 3.504 GWh/yr from a 400 kW unit requires:

$$CF = \frac{3{,}504{,}000 \text{ kWh}}{400 \text{ kW} \times 8{,}760 \text{ hr}} = 1.00 = 100\%$$

This means the turbine must produce 400 kW continuously, 24 hours a day, 365 days a year, with zero downtime, zero curtailment, and flows never below design. This is not achievable by any run-of-river turbine anywhere on Earth. It would require a dispatchable reservoir (not a run-of-river configuration) with complete flow regulation — precisely what the restoration project is eliminating.

---

## 4. POST-RESTORATION HYDRAULIC CONDITIONS

**Critical uncertainty:** The hydraulic conditions at the CEA site will change materially once the four low-head dams are removed (summer 2026–2028). Key expected changes:

| Condition | Before Restoration | After Restoration |
|---|---|---|
| Available head | ~6–12 ft (at existing dams) | **2–5 ft** (at grade control structures only) |
| Water surface elevation | Impounded (flat pool) | Restored riffle/run character |
| Flow velocity | Slow, impounded | Faster, natural channel gradient |
| Sediment regime | Trapped behind dams | Restored sediment transport |
| Turbulence | Low | Moderate–high (rapids/riffles) |

The grade control structures are designed to replicate natural rapids, not create hydraulic impoundment. A turbine engineer cannot assume any head greater than the differential elevation across these structures, which is designed to be minimal (natural riffle profile).

**Site hydraulic modeling is required** before any turbine sizing for Phase 2 design. The Taplin Group construction plans, once finalized, should be obtained from the City of Grand Rapids Engineering Department to extract grade control structure profiles.

---

## 5. ENERGY PRODUCTION SUMMARY TABLE

| Configuration | CF | Annual Output | Notes |
|---|---|---|---|
| As claimed | 100% | 3.504 GWh | Impossible; do not use |
| In-channel, 5 ft head | 52% | 1.822 GWh | Conflicts with restoration project |
| Side-channel bypass, 6 ft head | 60% | 2.102 GWh | Phase 2 option; requires GRWW coordination |
| Post-dam removal, reduced head | 42% | 1.472 GWh | Conservative floor estimate |

---

## SOURCES

1. [USGS 04119000 — Grand River at Grand Rapids, MI (Statistics)](https://waterdata.usgs.gov/nwis/uv?site_no=04119000&legacy=1)
2. [USGS 04119000 — Gage Inventory Page](https://waterdata.usgs.gov/nwis/inventory?agency_code=USGS&site_no=04119000)
3. [MSU Extension — Low Water in Grand River and Flow Seasonality, October 2012 (flagged: older source)](https://www.canr.msu.edu/news/low_water_offers_a_better_look_at_the_grand_river)
4. [Grand River Annual Statistics — USGS NWIS (monthly means 1901–2026)](https://waterdata.usgs.gov/nwis/annual?referred_module=sw&site_no=04119000)
5. [Eagle Creek Renewable Energy — Ada and Cascade Dam generation data](https://www.eaglecreekre.com/facilities/operating-facilities/thornapple-river-hydro-facilities)
6. [Hydropower Reform Coalition — Croton Dam capacity factor](https://hydroreform.org/hydro-project/croton-p-2468/)
7. [U.S. DOE Hydropower Market Report 2021 — National run-of-river CF averages](https://www.energy.gov/sites/prod/files/2021/01/f82/us-hydropower-market-report-full-2021.pdf)
8. [Consumers Energy — Tippy Dam production data, July 2023](https://www.consumersenergy.com/-/media/CE/Documents/company/electric-generation/renewables/hydro-future/tippy-dam/tippy-dam-economic-contribution-report.pdf)
