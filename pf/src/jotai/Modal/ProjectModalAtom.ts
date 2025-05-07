import { EmotionJSX } from "@emotion/react/dist/declarations/src/jsx-namespace";
import { atom } from "jotai";

export const ProjectModalAtom = atom<EmotionJSX.Element | null>();
