import { CATEGORY_SLUGS, type EnvironmentalCategory } from "@/types/atlas";

export const optionalString = (v: unknown): string | undefined =>
  typeof v === "string" && v.length > 0 && v.length < 200 ? v : undefined;

export const optionalCategory = (v: unknown): EnvironmentalCategory | undefined =>
  typeof v === "string" && (CATEGORY_SLUGS as readonly string[]).includes(v)
    ? (v as EnvironmentalCategory)
    : undefined;

/** Search-param shapes. Keys are optional so links may omit them. */
export type ExploreSearch = {
  location?: string | undefined;
  category?: EnvironmentalCategory | undefined;
};
export type PulseSearch = { category?: EnvironmentalCategory | undefined };
export type CompareSearch = { a?: string | undefined; b?: string | undefined };
export type WhatIfSearch = {
  location?: string | undefined;
  issue?: string | undefined;
  intervention?: number | undefined;
  intensity?: 1 | 2 | 3 | undefined;
};
