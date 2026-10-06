# Microgrid Reconciliation Memo (Oct 6, 2026)

Status: pre-feasibility. Reconciles the 52.8 GWh/yr hydro + waste-to-energy (WTE) hybrid proposal with this repo's research (01_hydro_energy, 02_lighting_loads, 07_integration).

## 1. Where the hybrid proposal conflicts with repo findings

| Item | Hybrid proposal | Repo finding | Resolution |
|---|---|---|---|
| Campus load | 52.8 GWh/yr | 12.2 GWh (24L:0D) to 14.7 GWh (16L:8D) in load_schedule_v01; 24-30 GWh in lighting_benchmarks | Treat load as the key open input; size to a 12-27 GWh range until engineering resolves it |
| Hydro size and CF | 4.4 MW at 85% CF | 400 kW at 42-60% CF = 1.47-2.10 GWh/yr; Michigan comparables 34.8-50.0% | Cap hydro at side-channel research; do not count on it for base supply |
| Hydro siting | New head structure | In-channel concept abandoned; four low-head dams removed by restoration project; 2-4 ft head only via side-channel bypass | No in-channel structure |
| Permitting | Not addressed | 5-7 years: FERC, EGLE Part 301/303, USACE 404, ESA Section 7 (snuffbox mussel) | Hydro is a Phase 2+ research track |
| Phase 1 power | Hydro + WTE | Council recommendation: PV + BESS | Keep PV + BESS as Phase 1; add AD/CHP once organics supply is contracted |
| Revenue basis | $18.5M Year 1 | $3.2-4.5M Phase-1 blended (INTEGRATION_MEMO) | Use phased revenue in all external materials |

## 2. Key modeling findings

- Hydro: with the Grand River at about 3,775-4,110 cfs mean flow, hydro-only supply of 52.8 GWh is physically impossible; even a 15 ft head using all mean flow gives about 35.7 GWh.
- Grid exposure: at 10.5 cents/kWh, an all-grid bill is $1.28M (12.2 GWh), $2.83M (27 GWh) or $5.54M (52.8 GWh) per year.
- AD/CHP economics are driven by tipping fees. At a 12.2 GWh load, zero tipping fees give roughly -$0.2M year-1 EBITDA and an NPV of about -$10M.
- The model's side-channel hydro output (about 2.7 GWh from 325 kW) is optimistic relative to the repo's 42-60% CF range; use 1.4-2.1 GWh.

## 3. Recommended path

1. Resolve the load: reconcile the 12.2 / 24-30 / 52.8 GWh figures with the lighting engineer.
2. Phase 1: PV + BESS and efficiency (continuous low-PPFD lighting).
3. Phase 2: AD/CHP sized to signed organics contracts; secure tipping-fee agreements before design.
4. Phase 3 option: side-channel hydro research after river restoration completes.
5. Correct the pro-forma energy figure (4.205 GWh) before any utility interconnection application.

## 4. Assumptions (model: 555_Monroe_Microgrid_Financial_Engineering_Model.xlsx)

Environmental flow 400 cfs; turbine efficiency 0.80; hydro $4,000/kW; AD/CHP $6,250/kW (likely low); 15% soft costs; electricity $0.105/kWh with 3% escalation; tipping fee $50/t with 60% paying; ITC 30% on 90% of capex (eligibility to be confirmed); 50% debt at 7%/20 yr. Monthly flow profile is synthetic, scaled to the historical mean; replace with USGS gage 04119000 data.
