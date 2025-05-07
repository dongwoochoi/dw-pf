import { atom } from "jotai";
import { createRef } from "react";

type RefAtomType = {
  aboutMeRef: React.RefObject<HTMLDivElement | null>;
  careerRef: React.RefObject<HTMLDivElement | null>;
  skillRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
};

export const refAtom = atom<RefAtomType>({
  aboutMeRef: createRef<HTMLDivElement>(),
  careerRef: createRef<HTMLDivElement>(),
  skillRef: createRef<HTMLDivElement>(),
  projectRef: createRef<HTMLDivElement>(),
});
