# Compliance Checklist — Electrical + Energy Codes
**Author:** Eng. Victor Ray, Controlled-Environment Lighting Engineer  
**Project:** Grand Rapids CEA Agritech Hub  
**Date:** 2025  
**Applicable Codes:** NEC 2023 (NFPA 70), NFPA 70E, IEEE 1547-2018, ASHRAE 90.1-2022, Michigan Uniform Energy Code (MUEC), Michigan Building Code (MBC), Local AHJ (Grand Rapids / Kent County)

> **Status legend:** ✅ = Requirement identified, action defined | ⚠️ = Requires AHJ/design team confirmation | 🔴 = High-priority; cannot proceed to permit without resolution

---

## Section 1 — NEC 2023 (NFPA 70): Horticultural Lighting

### Article 410, Part XVI — Special Provisions for Horticultural Lighting Equipment

| # | Code Section | Requirement | Action Required | Status |
|---|---|---|---|---|
| 1.1 | NEC 2023 §410.172 | All horticultural lighting equipment **must be listed** (UL 8800 / ETL / equivalent category IFAU) | Verify DLC QPL listing and UL 8800 for all selected fixtures; no unlisted fixtures permitted | ✅ |
| 1.2 | §410.174 | Equipment installed and used **per manufacturer's installation instructions and listing markings** | Include fixture installation instructions in construction documents; field inspector will check | ✅ |
| 1.3 | §410.176(A) | Horticultural lighting **cannot serve as general illumination** unless specifically listed for dual use | Designate separate general illumination circuits in all grow zones; do not use grow lights for walkway/task lighting | ✅ |
| 1.4 | §410.176(B) | Equipment not permitted where **likely subject to physical damage** or **concealed** | Mount fixtures per manufacturer guidance; provide physical protection guards where required by rack design | ✅ |
| 1.5 | §410.178 | Flexible cord only permitted **as part of listed horticultural lighting equipment**; cord-and-plug permitted for direct branch circuit connection, interconnection, or remote power source connection | Specify cord/connector type in fixture RFI; avoid non-listed field-wired flex connections | ✅ |
| 1.6 | §410.180 | Fittings and connectors on flexible cords **must be part of listed horticultural lighting equipment** | Ensure connectors are in listed system package (not sourced separately) | ✅ |
| 1.7 | §410.182 | Grounding per **Article 250** and Part V of Article 410 | Ensure all metal parts of fixture systems bonded per Art. 250; specify on drawing notes | ✅ |
| 1.8 | §410.184 | **GFCI protection required** for all horticultural lighting outlets supplying equipment with flexible cords | Specify GFCI circuit breakers or GFCI receptacles at all lighting branch circuits in VF zones; hardwired connections exempt from §410.184 but must comply with grounding | ✅ |
| 1.9 | §410.186 | Special fittings for **support** must be designed specifically for the lighting system | Specify mounting hardware as part of fixture system; do not use generic conduit straps or unistrut without manufacturer-listed mounting | ✅ |
| 1.10 | §410.188 | Where installed in **hazardous (classified) locations** per Arts. 500–517, must comply with those articles additionally | Soy processing area: evaluate for Class II dust classification (soybean dust); apiary area: evaluate for ordinary (Class 0) classification; get AHJ determination | ⚠️ |

### Article 411 — Low-Voltage Lighting Systems (≤30 VAC / ≤60 VDC)

| # | Code Section | Requirement | Action Required | Status |
|---|---|---|---|---|
| 1.11 | NEC 2023 §411.3 | Operating voltage ≤ 30 VAC or ≤ 60 VDC | If any LED bar systems operate at ≤30 VAC (some horticultural strip lights): list as Art. 411 system | ⚠️ |
| 1.12 | §411.3 wet contact | If wet contact likely: ≤ 15 VAC or ≤ 30 VDC | VF environment has high humidity; confirm voltage classification with fixture vendor | ⚠️ |
| 1.13 | §411.4 | Low-voltage system must be **listed** (complete system or assembly of listed parts) | Same as §410.172 above | ✅ |

### Article 547 — Agricultural Buildings

| # | Code Section | Requirement | Action Required | Status |
|---|---|---|---|---|
| 1.14 | NEC 2023 Art. 547 | Applies to **agricultural buildings** (livestock, poultry, etc.) — does **NOT** exempt greenhouses/CEA from §410.184 GFCI | Do not apply Art. 547 exemptions to VF/greenhouse zones; GFCI required in all wet locations | ✅ |

---

## Section 2 — NFPA 70E: Electrical Safety in the Workplace

| # | Requirement | Action Required | Status |
|---|---|---|---|
| 2.1 | Arc flash hazard analysis for MCC, switchgear, and 480V distribution panels serving lighting zones | Commission arc flash study; label all equipment per NFPA 70E §130.5 | ✅ |
| 2.2 | Energized work permit policy for any work on energized conductors > 50V | Include in facility safety management plan | ✅ |
| 2.3 | PPE program for electricians working in wet VF zones | FR/arc-rated clothing + insulated tools for all VF electrical work | ✅ |

---

## Section 3 — ASHRAE 90.1-2022: Energy Standard

### CEA / Horticultural Lighting (Addendum AR and related)

| # | Code Section | Requirement | Action Required | Status |
|---|---|---|---|---|
| 3.1 | ASHRAE 90.1-2022 CEA Addendum (AR) | Minimum **Photosynthetic Photon Efficacy (PPE) ≥ 1.9 µmol/J** for indoor CEA luminaires (aggregate load > 40 kW) | All specified fixtures (2.5–3.9 µmol/J) exceed requirement; document in energy compliance submittal | ✅ |
| 3.2 | ASHRAE 90.1-2022 | **Time-switch controls** required for greenhouse horticultural lighting systems | Zone B tomato lighting must have astronomical time-switch or EMS-controlled schedule; document | ✅ |
| 3.3 | ASHRAE 90.1-2022 | **Daylight availability controls** required for greenhouse lighting | Zone B: install photoperiod sensor (PAR sensor) to prevent supplemental lighting when ambient solar DLI already meets target; specify on controls drawings | ✅ |
| 3.4 | ASHRAE 90.1-2022 §6 (HVAC) | Mechanical systems must meet minimum COP/IPLV requirements | Dehumidification units, DX cooling: specify equipment meeting 90.1 Table 6.8.1 minimums | ✅ |
| 3.5 | ASHRAE 90.1-2022 §5 (Envelope) | Greenhouse envelope: meeting thermal requirements (or greenhouse exemption path per IECC) | Engage envelope engineer; greenhouse exemption may apply if ≥50% glazed | ⚠️ |

---

## Section 4 — Michigan Uniform Energy Code (MUEC) and Michigan Building Code

| # | Requirement | Action Required | Status |
|---|---|---|---|
| 4.1 | Michigan is currently based on **ASHRAE 90.1-2013** (2015 MEC); update to 2021 IECC / ASHRAE 90.1-2022 under review | Monitor Michigan DEQ/EGLE for MEC update status; design to **ASHRAE 90.1-2022 minimum** now to avoid retrofit compliance | ⚠️ |
| 4.2 | Michigan Building Code (MBC 2021) references IBC 2021 with Michigan amendments | Confirm occupancy classification for VF: likely F-1 (Factory Industrial), A-2 (Assembly, visitor center), B (office/admin) with mixed occupancy analysis | ⚠️ |
| 4.3 | Michigan Rule 408.30524 (MBC §524) | Buildings designed per Michigan Uniform Energy Code Part 10 Rules R 408.31059–408.31071a | Confirm with AHJ whether CEA facility falls under commercial energy code path; note greenhouse exemption | ⚠️ |
| 4.4 | Michigan electrical code adoption: NEC 2023 | Michigan adopted NEC 2023 effective August 29, 2025 per Michigan Admin Code R 408.30524 | Design and specifications must comply with NEC 2023; confirm with Kent County AHJ | ✅ |

---

## Section 5 — IEEE 1547-2018: DER Grid Interconnection

Applicable to hydroelectric generation system (Dr. Lena Watts' scope) but with direct interface to lighting load management system:

| # | Requirement | Action Required | Status |
|---|---|---|---|
| 5.1 | IEEE 1547-2018: Interconnection requirements for DER ≥ 1 kVA connected to distribution grid | Hydro DER interconnection application to Consumers Energy / UMERC; obtain interconnection agreement | ✅ (Lena's scope) |
| 5.2 | IEEE 1547-2018 §7: Voltage and frequency ride-through requirements for inverter-based DER | If hydro uses synchronous generator: SG design standards per C50.12/C50.13 take precedence for units ≥ 10 MVA; under 10 MVA: ride-through per Table 12 of IEEE 1547-2018 | ✅ (Lena's scope) |
| 5.3 | IEEE 1547-2018 §10: Interoperability; information exchange between DER and facility BMS | Hydro SCADA must export real-time kW signal to facility EMS; standardize on Modbus TCP or DNP3 protocol | ✅ |
| 5.4 | IEEE 1547-2018: Islanding capability | Facility may qualify for intentional islanding under UMERC agreement (microgrid); coordinate with utility | ⚠️ |
| 5.5 | IEEE 1547.9-2022: Guide for applying 1547 to energy storage | If battery storage added: 1547.9 governs | Future scope |

---

## Section 6 — NFPA 72 / Life Safety

| # | Requirement | Action Required | Status |
|---|---|---|---|
| 6.1 | Fire detection in electrical rooms, MCC rooms, lighting control rooms | Specify ionization/photoelectric detectors per NFPA 72; coordinate with fire protection engineer | ✅ |
| 6.2 | CO₂ enrichment systems: asphyxiation hazard | VF zones with CO₂ >1,000 ppm require CO₂ monitoring + alarm system; automatic ventilation interlock | ✅ |
| 6.3 | Apiary zone: ensure electrical equipment rated for humidity levels present | IP65+ minimum in apiary cold storage; verify with mechanical engineer | ✅ |

---

## Section 7 — Local AHJ Coordination (Grand Rapids / Kent County)

| # | Action Item | Responsible Party | Status |
|---|---|---|---|
| 7.1 | Pre-application meeting with City of Grand Rapids Building Safety Department | Project Manager + EOR | ⚠️ |
| 7.2 | Determine AHJ jurisdiction (city vs. county) for each facility component | Project Manager | ⚠️ |
| 7.3 | Confirm adopted NEC edition and any local amendments | EOR | NEC 2023 per state; confirm local amendments |
| 7.4 | Confirm Michigan EGLE permit requirements for agricultural water discharge | Civil Engineer + Legal | ⚠️ |
| 7.5 | Utility interconnection pre-application: Consumers Energy or UMERC | Lena Watts + Legal | ⚠️ |
| 7.6 | DLC QPL verification for rebate eligibility (Michigan utility conservation programs) | Victor Ray + Finance | ✅ |

---

## Section 8 — Summary Risk Matrix

| Risk Item | Severity | Likelihood | Mitigation |
|---|---|---|---|
| Unlisted fixture used in VF environment | High | Low | RFI requires UL 8800 + DLC listing; verify at submittal |
| GFCI omitted from flex-cord lighting circuits | High | Medium | Standard drawing note; inspector check-in at rough-in |
| Pro-forma energy (4.205 GWh) used for utility interconnection sizing | High | High | Correct to 12.2–24 GWh before utility application |
| Michigan MEC update changes compliance path during design | Medium | Medium | Design to ASHRAE 90.1-2022 now; future-proof |
| CO₂ enrichment without proper O₂/CO₂ monitoring | High | Medium | Specify monitors + interlocks in mechanical spec |
| Hazardous location classification in soy processing (dust) | High | Unknown | Request NEC Art. 500 evaluation from electrical EOR |
| IEEE 1547 interconnection timeline with utility | High | Medium | Begin pre-application immediately; timeline 6–18 months |

---

## Sources

1. [NEC 2023 §410 Part XVI — Horticultural Lighting (JADE Learning summary)](https://www.jadelearning.com/blog/horticultural-lighting-2/)
2. [NEC 2023 §410.184 GFCI for horticultural lighting (VoltServer)](https://voltserver.com/blog/2024/06/18/gfci-requirements-for-horticulture-leds-in-greenhouses-and-indoor-farms/)
3. [NEC 2023 §411 Low-Voltage Lighting](https://captaincode2023.leviton.com/node/343)
4. [ASHRAE 90.1 CEA addendum AR — Urban Ag News](https://urbanagnews.com/blog/news/new-energy-requirements-for-greenhouses-and-indoor-controlled-environment-horticulture-in-ashrae-90-1-model-code-updates/)
5. [ASHRAE Standard 90.1 (2025 edition)](https://www.ashrae.org/technical-resources/bookstore/standard-90-1)
6. [Michigan Uniform Energy Code — Law.Cornell.edu (effective 8/29/2025)](https://www.law.cornell.edu/regulations/michigan/Mich-Admin-Code-R-408.30524)
7. [Michigan Energy Code Compliance Aid (EGLE)](https://www.michigan.gov/egle/-/media/Project/Websites/egle/Documents/Programs/MMD/Energy/MEO-Compliance-Aid-Commercial-Comparison-Highlights-202212.pdf)
8. [IEEE 1547-2018 overview (Sandia/DOE 2024)](https://www.sandia.gov/app/uploads/sites/256/2024/09/IEEE-1547-for-2024-LDES-Workshop-final.pdf)
9. [NEC 2023 Art. 410 Part XVI Captain Code portal](https://captaincode2020.leviton.com/node/260)
