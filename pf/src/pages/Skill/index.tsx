/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
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
  const { titleFontSizeTransfer } = useMeasurement();
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      skillRef: ref,
    };
  });

  // Swiper mis-measures its width when its container is sized with a CSS
  // percentage (it reads a stale/partial layout and can end up with a
  // multi-million-pixel slide width). Measuring the real pixel width
  // ourselves and feeding Swiper a concrete number avoids that entirely.
  const [wrapperWidth, setWrapperWidth] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const updateWidth = () => setWrapperWidth(el.clientWidth);
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  const cardWidth = Math.round(wrapperWidth * 0.85);

  return (
    <div css={wrapper(isMobile)} ref={ref} id="skills">
      <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
        Skills
      </BoldText>
      <FadeComponent>
        <div css={tabCard(cardWidth)}>
          {cardWidth > 0 ? (
            <TabSwiper key={Math.round(cardWidth / 20)} />
          ) : null}
        </div>
      </FadeComponent>
      <FadeComponent>
        {cardWidth > 0 ? <SkillExport width={cardWidth} /> : null}
      </FadeComponent>
    </div>
  );
}

const wrapper = (isMobile: boolean) => ({
  boxSizing: "border-box" as const,
  width: "85%",
  maxWidth: "1400px",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  gap: isMobile ? "20px" : "24px",
  padding: isMobile ? "60px 0" : "80px 0",
});

const tabCard = (width: number) => ({
  width: `${width}px`,
  minHeight: "120px",
  background: "var(--bg-surface)",
  border: "1px solid var(--border-color)",
  borderRadius: "16px",
  padding: "24px",
  boxSizing: "border-box" as const,
});

const titleTextStyle = {};
