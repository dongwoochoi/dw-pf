/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import TabSwiper from "./modules/TabSwiper";
import SkillExport from "./modules/SkillExplain";
import BoldText from "../../components/Atom/BoldText";
import useMeasurement from "../../hooks/useMeasurement";
import useResponsive from "../../hooks/useResponsive";
import FadeComponent from "../../components/FadeComponent";

export default function Skill() {
  const { isMobile } = useResponsive();
  const { titleFontSizeTransfer, swiperSizeConverter, skillSizeConverter } =
    useMeasurement();
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      skillRef: ref,
    };
  });
  return (
    <div
      css={wrapper(skillSizeConverter().height, isMobile)}
      ref={ref}
      id="skills"
    >
      <div css={leftContent(swiperSizeConverter().width)}>
        <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
          Skills
        </BoldText>
        <FadeComponent>
          <TabSwiper />
        </FadeComponent>
      </div>
      <FadeComponent>
        <SkillExport />
      </FadeComponent>
    </div>
  );
}

const wrapper = (height: number, isMobile: boolean) => ({
  paddingLeft: isMobile ? "0px" : "40px",
  boxSizing: "border-box" as const,
  width: "85%",
  height: `${height}px`,
  maxWidth: "1400px",
  display: "flex",
  flexDirection: isMobile ? ("column" as const) : ("row" as const),
  justifyContent: "space-around",
  alignItems: "center",
});

const leftContent = (width: number) => ({
  display: "flex",
  flexDirection: "column" as const,
  width: `${width}px`,
  gap: "16px",
});

const titleTextStyle = {};
