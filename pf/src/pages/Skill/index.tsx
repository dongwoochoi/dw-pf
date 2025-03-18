/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import TabSwiper from "./modules/TabSwiper";
import SkillExport from "./modules/SkillExplain";

export default function Skill() {
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      skillRef: ref,
    };
  });
  return (
    <div css={wrapper} ref={ref} id="skills">
      <div css={leftContent}>
        <p css={titleTextStyle}>Skills</p>
        <TabSwiper />
      </div>
      <SkillExport />
    </div>
  );
}

const wrapper = {
  paddingLeft: "40px",
  boxSizing: "border-box" as const,
  width: "85%",
  maxWidth: "1400px",
  height: "500px",
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
};

const leftContent = {
  display: "flex",
  flexDirection: "column" as const,
};

const titleTextStyle = {
  fontFamily: "agro",
  marginTop: "60px",
  color: "white",
  fontSize: "60px",
};
