/** @jsxImportSource @emotion/react */
import { useSetAtom } from "jotai";
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import ProjectTabSwiper from "./modules/ProjectTabSwiper";
import BoldText from "../../components/Atom/BoldText";
import useMeasurement from "../../hooks/useMeasurement";
import FadeComponent from "../../components/FadeComponent";
import useResponsive from "../../hooks/useResponsive";

export default function Projects() {
  const { isMobile } = useResponsive();
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
    <div css={wrapper(isMobile)} ref={ref} id="projects">
      <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
        Projects
      </BoldText>
      <FadeComponent>
        <ProjectTabSwiper />
      </FadeComponent>
    </div>
  );
}

const wrapper = (isMobile: boolean) => ({
  paddingLeft: isMobile ? "0px" : "40px",
  boxSizing: "border-box" as const,
  width: isMobile ? "280px" : "75%",
  maxWidth: "1200px",
  height: "auto",
  minHeight: "100vh",
});

const titleTextStyle = {
  marginBottom: "16px",
  marginTop: "60px",
};
