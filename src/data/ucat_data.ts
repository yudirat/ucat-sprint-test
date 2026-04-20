import type { UCATSet, Question } from './types';
import { qrSprints } from './qr_data';
import { vrSprints } from './vr_data';
import { dmSprints } from './dm_data';
import { sjtSprints } from './sjt_data';

export type { UCATSet, Question };

/**
 * DATA INTEGRITY POLICY:
 * 1. SET IDs: Always use the next available integer (Current Max: 113).
 * 2. QUESTION IDs: Always use the next available integer (Current Max: 256).
 * 3. NEVER reuse IDs even if a set is deleted, to ensure stable navigation and review links.
 */

export const ucatSprintTests: UCATSet[] = [
  ...qrSprints,
  ...vrSprints,
  ...dmSprints,
  ...sjtSprints
].sort((a, b) => a.setId - b.setId);

export function getSprintSet(index: number): UCATSet {
  return ucatSprintTests[index];
}
