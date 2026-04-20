# Changelog: UCAT Sprint Test Web App

All notable changes to this project will be documented in this file.

## [1.9.0] - 2026-04-20
### Added
- **Advanced VR Sprints (B & C):** Added 44 new Verbal Reasoning questions (66 total VR items) across 10 complex new passages.
- **High-Complexity Stimuli:** New passages feature technical and academic themes including Quantum Cryptography, Neuroplasticity, Existential Philosophy, and Exoplanet Spectroscopy.
- **Nuanced Explanations:** Enhanced explanations focusing on inference and tone detection logic.

## [1.8.0] - 2026-04-20
...

- **Data Integrity Overhaul:** Systematically re-indexed all question IDs (1-168) and Sprint Set IDs (101-109) to eliminate collisions and ensure stable navigation.
- **Mathematical Logic Audit:** Verified every calculation across 6 QR sprints (108 items). Corrected errors in Sprint F (VC Valuation) and Sprint C (Shipping Fuel Costs).
- **Explanation Clarity:** Improved the pedagogical quality of explanations for Situational Judgement and Decision Making items.
- **Duplicate Removal:** Cleaned up the data layer by removing redundant sprint definitions that were causing UI inconsistencies.

## [1.7.0] - 2026-04-20
...

- **Strategic QR Sprints (E & F):** Added 36 additional Quantitative Reasoning questions (108 total QR items). New scenarios include Aerospace Manufacturing, Crypto Arbitrage, VC Equity Dilution, and Logistics Automation ROI.
- **Complex Multi-Data Scenarios:** Implementation of scenarios involving up to 4 distinct data sources per sprint, mirroring the highest difficulty tier of the UCAT.

## [1.6.0] - 2026-04-20
...

- **Advanced QR Sprints (C & D):** Added 36 new Quantitative Reasoning questions focused on multi-step calculations, unit conversions, and data-heavy interpretation (Shipping, Energy, E-commerce, Pharma).
- **Data Logic Validation:** Comprehensive audit of all 72 QR questions to ensure mathematical accuracy and clear pedagogical explanations.

## [1.5.0] - 2026-04-20
### Fixed
- **Calculator Form Behavior:** Added `type="button"` to all calculator buttons to prevent unexpected browser behavior (like page reloads or new tabs).
- **Keyboard Shortcuts:** Implemented standard UCAT `Alt+C` shortcut to toggle the calculator.

## [1.4.0] - 2026-04-15
### Added
- **Decision Making (DM) Sprint:** Standardized 18-question DM sprint featuring 6 core subtypes.
- **Partial Credit System:** Implementation of the UCAT-standard 2-point/1-point scoring system for Syllogisms and Situational Judgement.
- **Venn Diagram SVG Renderer:** New visual renderer for DM logical puzzles using SVG for precise intersection labels.
- **Verbal Reasoning (VR) Sprint:** Completed Sprint A (22 Qs / 11 Mins) with 5 diverse passages (Arctic, Telemedicine, Linguistics, Grid, Renaissance).
- **Passage Renderer:** Enhanced `DataSourceRenderer` with a typography-optimized passage view for reading comprehension.

## [1.3.0] - 2026-04-15
...

- **Decision Making (DM) Sprint:** Standardized 18-question DM sprint featuring 6 core subtypes.
- **Partial Credit System:** Implementation of the UCAT-standard 2-point/1-point scoring system for Syllogisms and Situational Judgement.
- **Venn Diagram SVG Renderer:** New visual renderer for DM logical puzzles using SVG for precise intersection labels.
- **Verbal Reasoning (VR) Sprint:** Completed Sprint A (22 Qs / 11 Mins) with 5 diverse passages (Arctic, Telemedicine, Linguistics, Grid, Renaissance).
- **Passage Renderer:** Enhanced `DataSourceRenderer` with a typography-optimized passage view for reading comprehension.

## [1.3.0] - 2026-04-15
### Added
- **Quantitative Reasoning (QR) Sprints:** Implemented 36 standardized QR questions across two 13-minute sprints (Sprint A & B).
- **Development Log:** Created `sprint_dev_log.md` to track mathematical logic and question mapping for all sprint tests.
- **Enhanced Renderers:** Added support for `BAR_CHART`, standalone `PIE_CHART`, and `PASSAGE` stimuli in `DataSourceRenderer`.
- **Sprint Logic Audit:** Completed a full verification of all 36 QR questions to ensure mathematical accuracy and clear explanations.

...
