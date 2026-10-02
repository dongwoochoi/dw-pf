/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Global, css } from "@emotion/react";
import "swiper/css";
import GaugeComponent from "./GaugeComponent";
import {
  BACK_SLIDE_STRUCTURE,
  FRONT_SLIDE_STRUCTURE,
  TOOL_SLIDE_STRUCTURE,
} from "../structure";
import { useAtomValue, useSetAtom } from "jotai";
import { skillAtom } from "../../../jotai/skill";
import { visibleSectionAtom } from "../../../jotai/visibleSection";
import { icons } from "../../../assets/icon";
import useMeasurement from "../../../hooks/useMeasurement";
import useResponsive from "../../../hooks/useResponsive";

const TabSwiper = () => {
  const { isMobile } = useResponsive();
  const { swiperSizeConverter } = useMeasurement();
  const swiperRef = useRef<any>(null);
  const rowRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];
  const setSelectedSkill = useSetAtom(skillAtom);
  const handleClick = (id: string) => {
    setSelectedSkill(id);
  };
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const resetRowScrollPositions = () => {
    rowRefs.forEach((ref) => {
      if (ref.current) ref.current.scrollLeft = 0;
    });
  };
  const handleTabClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setCurrentIndex(index);
    }
    resetRowScrollPositions();
  };
  const handleRowScroll = (direction: 1 | -1) => {
    const el = rowRefs[currentIndex].current;
    if (!el) return;
    const step =
      (swiperSizeConverter().circleSize + swiperSizeConverter().swiperGap) *
      3;
    el.scrollBy({ left: direction * step, behavior: "smooth" });
  };

  // reset every row's scroll position once the Skills section itself
  // scrolls out of view, so returning to it (or switching back to a
  // tab) always starts from the beginning.
  const isSectionVisible = useAtomValue(visibleSectionAtom);
  useEffect(() => {
    if (!isSectionVisible) {
      resetRowScrollPositions();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSectionVisible]);

  return (
    <div css={wrapper}>
      <div css={btnBox(isMobile)}>
        <div
          css={btnStyle(currentIndex === 0, swiperSizeConverter().tapFontSize)}
          onClick={() => handleTabClick(0)}
        >
          FE
        </div>
        <div
          css={btnStyle(currentIndex === 1, swiperSizeConverter().tapFontSize)}
          onClick={() => handleTabClick(1)}
        >
          BE
        </div>
        <div
          css={btnStyle(currentIndex === 2, swiperSizeConverter().tapFontSize)}
          onClick={() => handleTabClick(2)}
        >
          Tool/Infra
        </div>
      </div>

      <div css={rowWithArrows}>
        <img
          css={arrowStyle}
          src={icons.arrowLeft}
          onClick={() => handleRowScroll(-1)}
          alt="이전"
        />
        <Swiper
          css={swiperContainer}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          allowTouchMove={false}
          spaceBetween={50}
          slidesPerView={1}
        >
          <SwiperSlide>
            <div
              ref={rowRefs[0]}
              css={scrollRow(
                swiperSizeConverter().swiperGap,
                swiperSizeConverter().circleSize
              )}
            >
              {FRONT_SLIDE_STRUCTURE.map((item) => {
                return (
                  <GaugeComponent
                    key={item.id}
                    logo={item.logo}
                    percent={item.percent}
                    currentIndex={currentIndex}
                    needFit={item.needFit}
                    handleClick={() => handleClick(item.id)}
                  />
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              ref={rowRefs[1]}
              css={scrollRow(
                swiperSizeConverter().swiperGap,
                swiperSizeConverter().circleSize
              )}
            >
              {BACK_SLIDE_STRUCTURE.map((item) => {
                return (
                  <GaugeComponent
                    key={item.id}
                    logo={item.logo}
                    percent={item.percent}
                    currentIndex={currentIndex}
                    needFit={item.needFit}
                    handleClick={() => handleClick(item.id)}
                  />
                );
              })}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              ref={rowRefs[2]}
              css={scrollRow(
                swiperSizeConverter().swiperGap,
                swiperSizeConverter().circleSize
              )}
            >
              {TOOL_SLIDE_STRUCTURE.map((item) => {
                return (
                  <GaugeComponent
                    key={item.id}
                    logo={item.logo}
                    percent={item.percent}
                    currentIndex={currentIndex}
                    needFit={item.needFit}
                    handleClick={() => handleClick(item.id)}
                  />
                );
              })}
            </div>
          </SwiperSlide>
        </Swiper>
        <img
          css={arrowStyle}
          src={icons.arrowRight}
          onClick={() => handleRowScroll(1)}
          alt="다음"
        />
      </div>
      <Global
        styles={css`
          .swiper {
            margin-left: 0 !important;
          }
        `}
      />
    </div>
  );
};

const wrapper = {
  width: "100%",
  minWidth: 0,
};

const rowWithArrows = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  minWidth: 0,
};

const arrowStyle = {
  width: "28px",
  height: "28px",
  flexShrink: 0,
  cursor: "pointer",
  padding: "5px",
  borderRadius: "50%",
  background: "var(--bg-muted)",
  boxSizing: "border-box" as const,
  opacity: 1,
  transition: "background 0.2s",
  "&:hover": { background: "var(--bg-muted-hover)" },
};

const swiperContainer = {
  position: "relative" as const,
  width: "100%",
  minWidth: 0,
};

const scrollRow = (gap: number, circleSize: number) => ({
  display: "flex" as const,
  flexWrap: "nowrap" as const,
  overflowX: "auto" as const,
  // setting overflow-x forces overflow-y to also clip, so the row needs
  // enough headroom that the hover-scaled (1.2x) icon never touches the
  // top/bottom edge.
  overflowY: "hidden" as const,
  gap: `${gap}px`,
  // enough side padding that the first/last icon's 1.2x hover-scale has
  // room to grow without being clipped by the scroll container's edge;
  // extra bottom padding keeps the scrollbar from sitting flush against
  // the icons.
  padding: `4px ${Math.ceil(circleSize * 0.15)}px 12px`,
  height: `${Math.ceil(circleSize * 1.3) + 8}px`,
  alignItems: "center",
  scrollbarWidth: "thin" as const,
  scrollbarColor: "var(--bg-muted-hover) transparent",
  "&::-webkit-scrollbar": {
    height: "6px",
  },
  "&::-webkit-scrollbar-track": {
    background: "transparent",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "var(--bg-muted-hover)",
    borderRadius: "3px",
  },
  // belt-and-suspenders: explicit margin in case flex `gap` isn't
  // honored in some rendering context.
  "& > *:not(:last-child)": {
    marginRight: `${gap}px`,
  },
});

const btnBox = (isMobile: boolean) => ({
  display: "flex",
  gap: "8px",
  marginBottom: isMobile ? "8px" : "20px",
});

const btnStyle = (isClicked: boolean, fontSize: number) => ({
  fontFamily: "agro",
  fontSize: `${fontSize}px`,
  color: isClicked ? "var(--chip-selected-text)" : "var(--text-primary)",
  padding: "6px 10px",
  borderRadius: "5px",
  background: isClicked ? "var(--chip-selected-bg)" : "var(--bg-muted)",
  cursor: "pointer",
  "&:hover": { background: "var(--bg-muted-hover)" },
});

export default TabSwiper;
