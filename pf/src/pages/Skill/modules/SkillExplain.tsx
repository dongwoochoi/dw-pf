/** @jsxImportSource @emotion/react */
import { useAtomValue } from "jotai";
import { skillAtom } from "../../../jotai/skill";
import { SKILL_EXPLAIN_STRUECTURE } from "../structure";
import useMeasurement from "../../../hooks/useMeasurement";
import useResponsive from "../../../hooks/useResponsive";

export default function SkillExport() {
  const { isMobile } = useResponsive();
  const { explainSizeConverter, fontSizeTransfer } = useMeasurement();
  const selectedSkill = useAtomValue(skillAtom);
  const skillName = SKILL_EXPLAIN_STRUECTURE.find(
    (item) => item.id === selectedSkill
  )?.id;
  const skillExplain = SKILL_EXPLAIN_STRUECTURE.find(
    (item) => item.id === selectedSkill
  )?.text;
  return (
    <div css={wrapper(explainSizeConverter().width, isMobile)}>
      <p css={titleStyle(isMobile)}>{skillName}</p>
      <ul css={textContent(isMobile)}>
        {skillExplain?.map((item) => {
          return (
            <div css={{ display: "flex" }}>
              <li></li>
              <p css={text(fontSizeTransfer(20))}>{item}</p>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

const wrapper = (width: number, isMobile: boolean) => ({
  width: `${width}px`,
  height: "auto",
  background: "#1D1D1D",
  borderRadius: "10px",
  padding: "16px",
  border: isMobile ? "1px solid white" : "",
  marginTop: isMobile ? "16px" : "0px",
});

const titleStyle = (isMobile: boolean) => ({
  fontFamily: "agro",
  color: "white",
  fontSize: isMobile ? "24px" : "40px",
  marginBottom: "40px",
});

const text = (fontSize: number) => ({
  fontFamily: "agroL",
  fontWeight: "100",
  color: "white",
  fontSize: `${fontSize}px`,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word" as const,
});

const textContent = (isMobile: boolean) => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: isMobile ? "8px" : "16px",
  marginLeft: isMobile ? "16px" : "0px",
});
