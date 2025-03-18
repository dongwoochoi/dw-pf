/** @jsxImportSource @emotion/react */
import { useAtomValue } from "jotai";
import { skillAtom } from "../../../jotai/skill";
import { SKILL_EXPLAIN_STRUECTURE } from "../structure";

export default function SkillExport() {
  const selectedSkill = useAtomValue(skillAtom);
  const skillName = SKILL_EXPLAIN_STRUECTURE.find(
    (item) => item.id === selectedSkill
  )?.id;
  const skillExplain = SKILL_EXPLAIN_STRUECTURE.find(
    (item) => item.id === selectedSkill
  )?.text;
  return (
    <div css={wrapper}>
      <p css={titleStyle}>{skillName}</p>
      <pre css={text}>{skillExplain}</pre>
    </div>
  );
}

const wrapper = {
  width: "600px",
  height: "350px",
  background: "#1D1D1D",
  borderRadius: "10px",
  padding: "16px",
};

const titleStyle = {
  fontFamily: "agro",
  color: "white",
  fontSize: "40px",
  marginBottom: "40px",
};

const text = {
  fontFamily: "agroL",
  fontWeight: "100",
  color: "white",
  fontSize: "20px",
};
