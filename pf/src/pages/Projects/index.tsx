/** @jsxImportSource @emotion/react */
import { useSetAtom } from "jotai";
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import ProjectTabSwiper from "./modules/ProjectTabSwiper";

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      projectRef: ref,
    };
  });

  return (
    <div css={wrapper} ref={ref} id="projects">
      <p css={titleTextStyle}>Projects</p>
      <ProjectTabSwiper />
    </div>
  );
}

const wrapper = {
  paddingLeft: "40px",
  boxSizing: "border-box" as const,
  width: "85%",
  maxWidth: "1400px",
  height: "800px",
};

const titleTextStyle = {
  fontFamily: "agro",
  marginBottom: "16px",
  marginTop: "60px",
  color: "white",
  fontSize: "60px",
  fontWeight: "800",
};
