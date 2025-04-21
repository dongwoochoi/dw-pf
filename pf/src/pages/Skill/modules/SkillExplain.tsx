/** @jsxImportSource @emotion/react */
import { useAtomValue } from "jotai";
import { skillAtom } from "../../../jotai/skill";
import { SKILL_EXPLAIN_STRUECTURE } from "../structure";
import useMeasurement from "../../../hooks/useMeasurement";

export default function SkillExport() {
  const { explainSizeConverter, fontSizeTransfer } = useMeasurement();
  const selectedSkill = useAtomValue(skillAtom);
  const skillName = SKILL_EXPLAIN_STRUECTURE.find(
    (item) => item.id === selectedSkill
  )?.id;
  const skillExplain = SKILL_EXPLAIN_STRUECTURE.find(
    (item) => item.id === selectedSkill
  )?.text;
  return (
    <div css={wrapper(explainSizeConverter().width)}>
      <p css={titleStyle}>{skillName}</p>
      <ul css={textContent}>
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

const wrapper = (width: number) => ({
  width: `${width}px`,
  height: "auto",
  background: "#1D1D1D",
  borderRadius: "10px",
  padding: "16px",
});

const titleStyle = {
  fontFamily: "agro",
  color: "white",
  fontSize: "40px",
  marginBottom: "40px",
};

const text = (fontSize: number) => ({
  fontFamily: "agroL",
  fontWeight: "100",
  color: "white",
  fontSize: `${fontSize}px`,
  whiteSpace: "pre-wrap",
  wordBreak: "break-word" as const,
});

const textContent = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "16px",
};
