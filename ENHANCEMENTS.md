# UCAT Sprint Test: Future Enhancements & Roadmap

This document outlines the planned technical and pedagogical improvements for the UCAT Sprint Test platform.

## 1. Full-Length Mock Simulation (Exam Mode)
*   **Continuous Flow:** Implement a state machine to transition automatically through sections (QR -> VR -> DM -> SJT) without returning to the main menu.
*   **Instruction Screens:** Add 1-minute mandatory instruction screens between sections, mimicking the exact Pearson VUE transition logic.
*   **Global Mock State:** Track progress, flags, and answers across the entire 1-hour session for a final unified result screen.

## 2. Advanced Scoring Engine
*   **SJT Band Calculation:** Implement the algorithm to convert raw SJT scores (including partial credit) into the official **Band 1 to Band 4** rating based on current UCAT decile data.
*   **Standardized Scaling:** Map raw scores in QR, VR, and DM to the **300-900 point scale** using historical conversion tables to give students a realistic score expectation.
*   **Elite Tier Weighting:** Refine scoring for high-difficulty scenarios to ensure they accurately reflect the "distinction" level of candidate performance.

## 3. Analytics & Performance Tracking (Local-First)
*   **Thematic Weakness Identification:** Utilize the new `tags` and `category` metadata to identify specific conceptual weaknesses (e.g., "High accuracy in Syllogisms, low accuracy in Bayes' Theorem").
*   **Attempt History:** Implement `localStorage` or `IndexedDB` persistence to save past attempt data, allowing users to track their progress without a backend.
*   **Progress Dashboards:** Build simple visualizations (line charts) showing score trends across multiple sprints.

## 4. UI/UX Fidelity (Pearson VUE Simulation)
*   **Interface Hardening:** Transition the CSS to a higher-fidelity "sterile" look, matching the high-contrast, blue/grey/white palette of the official testing centers.
*   **Review Grid Refactor:** Update the "Review Screen" to the exact grid format used in the real exam, allowing for quick "Review All," "Review Flagged," or "Review Incomplete."
*   **Full Keyboard Navigation:** Implement standard UCAT shortcuts:
    *   `Alt + N`: Next
    *   `Alt + P`: Previous
    *   `Alt + F`: Flag for Review
    *   `Alt + C`: Toggle Calculator

## 5. Content & Logic Expansion
*   **Abstract Reasoning (AR):** Re-evaluating the inclusion of a 50% AR sprint (Pattern Recognition) for completeness of the 2026 format.
*   **Deep-Link Scenario Explanations:** Link explanations directly to GMC *Good Medical Practice* paragraphs or specific statistical theorem documentation.
