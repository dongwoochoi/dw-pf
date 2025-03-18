import { useAtomValue, useSetAtom } from "jotai";

import { refAtom } from "../jotai/refAtom";
import { useEffect, useState } from "react";
import { visibleSectionAtom } from "../jotai/visibleSection";

export default function useSideBar() {
  const handleScrollTo = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  const ref = useAtomValue(refAtom);
  const setVisivleAtom = useSetAtom(visibleSectionAtom);
  const [visibleSection, setVisibleSection] = useState<{
    aboutMe: boolean;
    career: boolean;
    skills: boolean;
    projects: boolean;
  }>({
    aboutMe: false,
    career: false,
    skills: false,
    projects: false,
  });

  useEffect(() => {
    setVisivleAtom(visibleSection.skills);
  }, [visibleSection.skills]);

  useEffect(() => {
    const sections = [
      { id: "aboutMe", ref: ref.aboutMeRef },
      { id: "career", ref: ref.careerRef },
      { id: "skills", ref: ref.skillRef },
      { id: "projects", ref: ref.projectRef },
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        setVisibleSection((prev) => {
          const newState = { ...prev };
          entries.forEach((entry) => {
            newState[entry.target.id as keyof typeof visibleSection] =
              entry.isIntersecting;
          });
          return newState;
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach(({ ref }) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);
  return {
    handleScrollTo,
    visibleSection,
    ref,
  };
}
