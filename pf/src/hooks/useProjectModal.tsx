import { useCallback, useEffect } from "react";
import { useSetAtom } from "jotai";
import { ProjectModalAtom } from "../jotai/Modal/ProjectModalAtom";
import { EmotionJSX } from "@emotion/react/dist/declarations/src/jsx-namespace";

export default function useProjectModal() {
  const handleModal = useSetAtom(ProjectModalAtom);

  const setProjectModal = useCallback((content: EmotionJSX.Element) => {
    handleModal(content);
  }, []);

  useEffect(() => () => handleModal(null), []);

  return { setProjectModal };
}
