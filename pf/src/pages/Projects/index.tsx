/** @jsxImportSource @emotion/react */
import { useSetAtom } from "jotai";
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import ProjectTabSwiper from "./modules/ProjectTabSwiper";
import BoldText from "../../components/Atom/BoldText";
import useMeasurement from "../../hooks/useMeasurement";
import FadeComponent from "../../components/FadeComponent";

export default function Projects() {
  const { titleFontSizeTransfer } = useMeasurement();
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
      <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
        Projects
      </BoldText>
      <FadeComponent>
        <ProjectTabSwiper />
      </FadeComponent>
    </div>
  );
}

const wrapper = {
  paddingLeft: "40px",
  boxSizing: "border-box" as const,
  width: "85%",
  maxWidth: "1400px",
  height: "auto",
};

const titleTextStyle = {
  marginBottom: "16px",
  marginTop: "60px",
};
