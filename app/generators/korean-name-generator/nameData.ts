export type Style = "modern" | "traditional" | "cute" | "neutral";
export type Usage = "common" | "trendy" | "rare" | "unisex";
export type Gender = "any" | "male" | "female";
export type SurnameKey = "none" | "kim" | "lee" | "park" | "choi" | "jung";

export type NameEntry = {
  name: string;
  tags: string[];
  naturalness: number;
  vibe: Style;
  usage: Usage;
};

export const surnameMap: Record<SurnameKey, string> = {
  none: "",
  kim: "Kim",
  lee: "Lee",
  park: "Park",
  choi: "Choi",
  jung: "Jung",
};

export const femaleNameEntries: NameEntry[] = [
  { name: "Seo-a", tags: ["popular", "bright", "soft", "trendy"], naturalness: 95, vibe: "cute", usage: "common" },
  { name: "Seo-yoon", tags: ["popular", "smooth", "soft", "modern"], naturalness: 97, vibe: "modern", usage: "common" },
  { name: "Ha-rin", tags: ["cute", "light", "trendy"], naturalness: 93, vibe: "cute", usage: "trendy" },
  { name: "I-seo", tags: ["modern", "clean", "soft"], naturalness: 94, vibe: "modern", usage: "trendy" },
  { name: "Ha-yoon", tags: ["popular", "smooth", "soft"], naturalness: 97, vibe: "modern", usage: "common" },
  { name: "Ji-an", tags: ["neutral", "clean", "modern"], naturalness: 94, vibe: "neutral", usage: "unisex" },
  { name: "A-rin", tags: ["cute", "soft", "bright"], naturalness: 91, vibe: "cute", usage: "trendy" },
  { name: "Ji-yoo", tags: ["soft", "popular", "modern"], naturalness: 93, vibe: "modern", usage: "trendy" },
  { name: "A-yoon", tags: ["soft", "bright", "trendy"], naturalness: 90, vibe: "cute", usage: "trendy" },
  { name: "Si-a", tags: ["cute", "bright", "modern"], naturalness: 92, vibe: "cute", usage: "trendy" },
  { name: "Yoon-seo", tags: ["popular", "smooth", "elegant"], naturalness: 96, vibe: "modern", usage: "common" },
  { name: "Ji-a", tags: ["short", "bright", "soft"], naturalness: 92, vibe: "cute", usage: "trendy" },
  { name: "Ji-woo", tags: ["popular", "neutral", "smooth"], naturalness: 95, vibe: "neutral", usage: "unisex" },
  { name: "Chae-i", tags: ["cute", "light", "rare"], naturalness: 86, vibe: "cute", usage: "rare" },
  { name: "Yu-na", tags: ["soft", "popular", "classic"], naturalness: 94, vibe: "neutral", usage: "common" },
  { name: "Su-a", tags: ["bright", "cute", "popular"], naturalness: 94, vibe: "cute", usage: "common" },
  { name: "Chae-a", tags: ["cute", "modern", "trendy"], naturalness: 90, vibe: "cute", usage: "trendy" },
  { name: "Do-a", tags: ["short", "bright", "modern"], naturalness: 91, vibe: "cute", usage: "trendy" },
  { name: "Ye-rin", tags: ["elegant", "soft", "smooth"], naturalness: 93, vibe: "modern", usage: "trendy" },
  { name: "Yu-ha", tags: ["soft", "light", "trendy"], naturalness: 91, vibe: "cute", usage: "trendy" },
  { name: "Seo-ha", tags: ["modern", "bright", "soft"], naturalness: 94, vibe: "modern", usage: "trendy" },
  { name: "I-sol", tags: ["clean", "rare", "modern"], naturalness: 84, vibe: "neutral", usage: "rare" },
  { name: "I-na", tags: ["soft", "simple", "bright"], naturalness: 89, vibe: "cute", usage: "trendy" },
  { name: "Yoon-seul", tags: ["poetic", "rare", "elegant"], naturalness: 85, vibe: "neutral", usage: "rare" },
  { name: "Yu-joo", tags: ["cute", "light", "modern"], naturalness: 90, vibe: "cute", usage: "trendy" },
  { name: "Jae-i", tags: ["modern", "short", "neutral"], naturalness: 87, vibe: "neutral", usage: "unisex" },
  { name: "So-i", tags: ["cute", "short", "rare"], naturalness: 84, vibe: "cute", usage: "rare" },
  { name: "Seo-yeon", tags: ["popular", "smooth", "elegant", "classic"], naturalness: 98, vibe: "modern", usage: "common" },
  { name: "Na-eun", tags: ["soft", "classic", "warm"], naturalness: 95, vibe: "neutral", usage: "common" },
  { name: "Chae-won", tags: ["popular", "smooth", "modern"], naturalness: 94, vibe: "modern", usage: "common" },
  { name: "Ri-a", tags: ["cute", "bright", "stylish"], naturalness: 86, vibe: "cute", usage: "rare" },
  { name: "I-hyun", tags: ["neutral", "clean", "modern"], naturalness: 90, vibe: "neutral", usage: "unisex" },
  { name: "Ye-na", tags: ["bright", "soft", "trendy"], naturalness: 91, vibe: "cute", usage: "trendy" },
  { name: "Ha-yul", tags: ["soft", "modern", "bright"], naturalness: 92, vibe: "modern", usage: "trendy" },
  { name: "Chae-yoon", tags: ["elegant", "soft", "popular"], naturalness: 93, vibe: "modern", usage: "trendy" },
  { name: "Ha-eun", tags: ["soft", "warm", "popular"], naturalness: 95, vibe: "modern", usage: "common" },
  { name: "Chae-eun", tags: ["soft", "modern", "elegant"], naturalness: 92, vibe: "modern", usage: "trendy" },
  { name: "Ro-a", tags: ["cute", "stylish", "rare"], naturalness: 86, vibe: "cute", usage: "rare" },
  { name: "Se-a", tags: ["bright", "clean", "trendy"], naturalness: 89, vibe: "cute", usage: "trendy" },
  { name: "Ye-seo", tags: ["modern", "soft", "elegant"], naturalness: 94, vibe: "modern", usage: "trendy" },
  { name: "Tae-ri", tags: ["stylish", "rare", "bright"], naturalness: 85, vibe: "neutral", usage: "rare" },
  { name: "Yoon-a", tags: ["popular", "classic", "soft"], naturalness: 96, vibe: "modern", usage: "common" },
  { name: "Si-eun", tags: ["soft", "modern", "popular"], naturalness: 94, vibe: "modern", usage: "common" },
  { name: "Yeon-seo", tags: ["elegant", "smooth", "modern"], naturalness: 95, vibe: "modern", usage: "trendy" },
  { name: "Seo-yul", tags: ["soft", "trendy", "bright"], naturalness: 93, vibe: "modern", usage: "trendy" },
  { name: "Eun-chae", tags: ["elegant", "soft", "modern"], naturalness: 92, vibe: "modern", usage: "trendy" },
  { name: "Seo-hyun", tags: ["popular", "smooth", "classic"], naturalness: 96, vibe: "modern", usage: "common" },
  { name: "So-yoon", tags: ["soft", "elegant", "modern"], naturalness: 92, vibe: "modern", usage: "trendy" },
  { name: "Da-in", tags: ["neutral", "clean", "modern"], naturalness: 90, vibe: "neutral", usage: "unisex" },
  { name: "A-hyun", tags: ["soft", "elegant", "trendy"], naturalness: 89, vibe: "modern", usage: "trendy" },
];

export const maleNameEntries: NameEntry[] = [
  { name: "Do-yoon", tags: ["popular", "smooth", "soft", "modern"], naturalness: 97, vibe: "modern", usage: "common" },
  { name: "I-jun", tags: ["popular", "clean", "modern"], naturalness: 95, vibe: "modern", usage: "common" },
  { name: "Ha-jun", tags: ["popular", "bright", "modern"], naturalness: 97, vibe: "modern", usage: "common" },
  { name: "Si-woo", tags: ["popular", "smooth", "modern"], naturalness: 96, vibe: "modern", usage: "common" },
  { name: "Do-hyun", tags: ["popular", "clean", "classic"], naturalness: 96, vibe: "modern", usage: "common" },
  { name: "Tae-oh", tags: ["stylish", "strong", "modern"], naturalness: 91, vibe: "modern", usage: "trendy" },
  { name: "I-an", tags: ["modern", "soft", "trendy"], naturalness: 90, vibe: "neutral", usage: "trendy" },
  { name: "Seo-jun", tags: ["very popular", "smooth", "modern"], naturalness: 98, vibe: "modern", usage: "common" },
  { name: "Seon-woo", tags: ["popular", "soft", "warm"], naturalness: 95, vibe: "modern", usage: "common" },
  { name: "Eun-woo", tags: ["popular", "soft", "gentle"], naturalness: 97, vibe: "modern", usage: "common" },
  { name: "Su-ho", tags: ["clean", "strong", "classic"], naturalness: 94, vibe: "neutral", usage: "common" },
  { name: "Do-ha", tags: ["modern", "light", "trendy"], naturalness: 91, vibe: "neutral", usage: "trendy" },
  { name: "I-hyun", tags: ["neutral", "clean", "modern"], naturalness: 91, vibe: "neutral", usage: "unisex" },
  { name: "Ji-ho", tags: ["classic", "clean", "strong"], naturalness: 95, vibe: "neutral", usage: "common" },
  { name: "Woo-joo", tags: ["bright", "rare", "stylish"], naturalness: 84, vibe: "cute", usage: "rare" },
  { name: "Eun-ho", tags: ["soft", "classic", "popular"], naturalness: 95, vibe: "modern", usage: "common" },
  { name: "Yu-jun", tags: ["smooth", "modern", "trendy"], naturalness: 91, vibe: "modern", usage: "trendy" },
  { name: "Yoon-woo", tags: ["soft", "popular", "modern"], naturalness: 95, vibe: "modern", usage: "common" },
  { name: "Joo-won", tags: ["popular", "smooth", "neutral"], naturalness: 95, vibe: "neutral", usage: "common" },
  { name: "Si-yoon", tags: ["soft", "modern", "trendy"], naturalness: 91, vibe: "neutral", usage: "trendy" },
  { name: "Yeon-woo", tags: ["soft", "smooth", "modern"], naturalness: 94, vibe: "modern", usage: "trendy" },
  { name: "Woo-jin", tags: ["classic", "clean", "popular"], naturalness: 95, vibe: "neutral", usage: "common" },
  { name: "I-do", tags: ["rare", "clean", "short"], naturalness: 84, vibe: "neutral", usage: "rare" },
  { name: "Ji-han", tags: ["modern", "clean", "strong"], naturalness: 92, vibe: "modern", usage: "trendy" },
  { name: "Ye-jun", tags: ["popular", "smooth", "modern"], naturalness: 95, vibe: "modern", usage: "common" },
  { name: "Ha-jin", tags: ["soft", "stylish", "trendy"], naturalness: 89, vibe: "neutral", usage: "trendy" },
  { name: "Do-jun", tags: ["popular", "strong", "modern"], naturalness: 96, vibe: "modern", usage: "common" },
  { name: "I-han", tags: ["clean", "modern", "stylish"], naturalness: 89, vibe: "neutral", usage: "trendy" },
  { name: "Ji-hoo", tags: ["popular", "soft", "modern"], naturalness: 94, vibe: "modern", usage: "common" },
  { name: "Jun-woo", tags: ["popular", "classic", "smooth"], naturalness: 96, vibe: "modern", usage: "common" },
  { name: "Min-jun", tags: ["very popular", "strong", "modern"], naturalness: 98, vibe: "modern", usage: "common" },
  { name: "Ro-woon", tags: ["stylish", "rare", "soft"], naturalness: 84, vibe: "neutral", usage: "rare" },
  { name: "I-deun", tags: ["rare", "clean", "modern"], naturalness: 82, vibe: "neutral", usage: "rare" },
  { name: "Tae-i", tags: ["stylish", "rare", "short"], naturalness: 80, vibe: "neutral", usage: "rare" },
  { name: "Yu-an", tags: ["soft", "neutral", "modern"], naturalness: 87, vibe: "neutral", usage: "unisex" },
  { name: "Tae-ha", tags: ["strong", "modern", "trendy"], naturalness: 89, vibe: "modern", usage: "trendy" },
  { name: "Yu-chan", tags: ["bright", "soft", "trendy"], naturalness: 87, vibe: "neutral", usage: "trendy" },
  { name: "Ji-woo", tags: ["popular", "neutral", "smooth"], naturalness: 94, vibe: "neutral", usage: "unisex" },
  { name: "Hyun-woo", tags: ["popular", "classic", "strong"], naturalness: 97, vibe: "modern", usage: "common" },
  { name: "Geon-woo", tags: ["strong", "modern", "popular"], naturalness: 95, vibe: "modern", usage: "common" },
  { name: "Si-on", tags: ["gentle", "modern", "neutral"], naturalness: 89, vibe: "neutral", usage: "unisex" },
  { name: "Do-young", tags: ["classic", "clean", "popular"], naturalness: 95, vibe: "neutral", usage: "common" },
  { name: "Seo-jin", tags: ["modern", "neutral", "smooth"], naturalness: 92, vibe: "neutral", usage: "unisex" },
  { name: "Seo-woo", tags: ["soft", "modern", "trendy"], naturalness: 92, vibe: "neutral", usage: "trendy" },
  { name: "Si-an", tags: ["stylish", "neutral", "modern"], naturalness: 88, vibe: "neutral", usage: "unisex" },
  { name: "Jung-woo", tags: ["classic", "clean", "strong"], naturalness: 94, vibe: "neutral", usage: "common" },
  { name: "Ha-on", tags: ["trendy", "stylish", "modern"], naturalness: 87, vibe: "modern", usage: "trendy" },
  { name: "Yoon-jae", tags: ["elegant", "classic", "modern"], naturalness: 93, vibe: "modern", usage: "common" },
  { name: "Jun-seo", tags: ["soft", "modern", "trendy"], naturalness: 91, vibe: "modern", usage: "trendy" },
  { name: "Tae-yoon", tags: ["strong", "smooth", "modern"], naturalness: 93, vibe: "modern", usage: "common" },
];

export function buildPool(gender: Gender, style: Style) {
  const femalePool = femaleNameEntries.filter((entry) => entry.vibe === style);
  const malePool = maleNameEntries.filter((entry) => entry.vibe === style);

  if (gender === "female") return femalePool;
  if (gender === "male") return malePool;
  return [...femalePool, ...malePool];
}

export function getSurnameBonus(surname: SurnameKey, name: string) {
  const first = name.split("-")[0]?.toLowerCase() ?? "";

  if (surname === "none") return 0;

  if (surname === "lee" && ["seo", "ji", "ha", "ye"].includes(first)) return 4;
  if (surname === "kim" && ["min", "seo", "do", "ha"].includes(first)) return 4;
  if (surname === "park" && ["ha", "seo", "ji", "chae"].includes(first)) return 3;
  if (surname === "choi" && ["ye", "do", "seo", "su"].includes(first)) return 3;
  if (surname === "jung" && ["si", "yun", "ji", "seo"].includes(first)) return 3;

  return 1;
}

export function getStyleBonus(selectedStyle: Style, entry: NameEntry) {
  return entry.vibe === selectedStyle ? 8 : 0;
}

export function getUsageBonus(entry: NameEntry) {
  if (entry.usage === "common") return 5;
  if (entry.usage === "trendy") return 4;
  if (entry.usage === "unisex") return 2;
  return 0;
}

export function getTagBonus(entry: NameEntry) {
  let bonus = 0;
  if (entry.tags.includes("smooth")) bonus += 3;
  if (entry.tags.includes("soft")) bonus += 2;
  if (entry.tags.includes("popular")) bonus += 3;
  if (entry.tags.includes("very popular")) bonus += 4;
  if (entry.tags.includes("rare")) bonus -= 2;
  return bonus;
}

export function scoreName(
  entry: NameEntry,
  selectedStyle: Style,
  surname: SurnameKey
) {
  return (
    entry.naturalness +
    getStyleBonus(selectedStyle, entry) +
    getSurnameBonus(surname, entry.name) +
    getUsageBonus(entry) +
    getTagBonus(entry)
  );
}

export function pickBestNames(
  pool: NameEntry[],
  selectedStyle: Style,
  surname: SurnameKey,
  count = 8
) {
  const scored = pool.map((entry) => ({
    ...entry,
    finalScore: scoreName(entry, selectedStyle, surname) + Math.random() * 4,
  }));

  scored.sort((a, b) => b.finalScore - a.finalScore);
  return scored.slice(0, count);
}
