import { atom } from "jotai";

export type Theme = "light" | "dark";

const STORAGE_KEY = "pf-theme";

const getInitialTheme = (): Theme => {
  if (typeof window === "undefined") return "dark";
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

const initialTheme = getInitialTheme();
if (typeof document !== "undefined") {
  document.documentElement.dataset.theme = initialTheme;
}

const baseThemeAtom = atom<Theme>(initialTheme);

export const themeAtom = atom(
  (get) => get(baseThemeAtom),
  (_get, set, next: Theme) => {
    set(baseThemeAtom, next);
    document.documentElement.dataset.theme = next;
    window.localStorage.setItem(STORAGE_KEY, next);
  }
);
