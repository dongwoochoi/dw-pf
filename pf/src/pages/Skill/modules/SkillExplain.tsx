/** @jsxImportSource @emotion/react */
import { useAtomValue } from "jotai";
import { skillAtom } from "../../../jotai/skill";
import {
  BACK_SLIDE_STRUCTURE,
  FRONT_SLIDE_STRUCTURE,
  SKILL_EXPLAIN_STRUECTURE,
  TOOL_SLIDE_STRUCTURE,
} from "../structure";
import useMeasurement from "../../../hooks/useMeasurement";
import useResponsive from "../../../hooks/useResponsive";
import CustomLi from "../../../components/Atom/CustomLi";

const ALL_SKILLS = [
  ...FRONT_SLIDE_STRUCTURE,
  ...BACK_SLIDE_STRUCTURE,
  ...TOOL_SLIDE_STRUCTURE,
];

export default function SkillExport({ width }: { width: number }) {
  const { isMobile } = useResponsive();
  const { fontSizeTransfer, titleFontSizeTransfer } = useMeasurement();
  const selectedSkill = useAtomValue(skillAtom);
  const skillLogo = ALL_SKILLS.find((item) => item.id === selectedSkill)
    ?.logo;
  const skillExplain = SKILL_EXPLAIN_STRUECTURE.find(
    (item) => item.id === selectedSkill
  )?.text;

  return (
    <div css={wrapper(width, isMobile)}>
      <div css={header(isMobile)}>
        {skillLogo ? (
          <img css={logoStyle(isMobile)} src={skillLogo} alt={selectedSkill} />
        ) : null}
        <p css={titleStyle(isMobile ? 24 : titleFontSizeTransfer() - 20)}>
          {selectedSkill}
        </p>
      </div>
      <div css={textContent(isMobile, fontSizeTransfer(18))}>
        {skillExplain?.map((item) => {
          return <CustomLi key={item}>{item}</CustomLi>;
        })}
      </div>
    </div>
  );
}

const wrapper = (width: number, isMobile: boolean) => ({
  width: `${width}px`,
  maxWidth: "100%",
  height: "auto",
  boxSizing: "border-box" as const,
  background: "var(--bg-surface)",
  borderRadius: "16px",
  padding: isMobile ? "16px" : "24px",
  border: "1px solid var(--border-color)",
});

const header = (isMobile: boolean) => ({
  display: "flex",
  alignItems: "center",
  gap: "12px",
  paddingBottom: isMobile ? "8px" : "12px",
  marginBottom: isMobile ? "16px" : "24px",
  borderBottom: "1px solid var(--border-color)",
});

const titleStyle = (size: number) => ({
  fontFamily: "agro",
  color: "var(--text-primary)",
  fontSize: `${size}px`,
  fontWeight: 800,
});

const logoStyle = (isMobile: boolean) => ({
  width: isMobile ? "32px" : "44px",
  height: isMobile ? "32px" : "44px",
  borderRadius: "10px",
  flexShrink: 0,
  objectFit: "cover" as const,
});

const textContent = (isMobile: boolean, fontSize: number) => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: isMobile ? "10px" : "16px",
  fontFamily: "agroL",
  fontSize: `${fontSize}px`,
  lineHeight: 1.5,
});
