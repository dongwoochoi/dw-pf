/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import { YEARS_STRUCTURE } from "./structure";
import useCareer from "./useCareer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { css, Global } from "@emotion/react";
import useMeasurement from "../../hooks/useMeasurement";
import BoldText from "../../components/Atom/BoldText";
import useResponsive from "../../hooks/useResponsive";
import FadeComponent from "../../components/FadeComponent";
import Deu from "./modules/explains/deu";
import Kristin from "./modules/explains/kristin";
import DeuOther from "./modules/explains/deuOther";
import Others from "./modules/explains/others";

export default function Career() {
  const { isMobile } = useResponsive();
  const { careerSizeConverter, titleFontSizeTransfer } = useMeasurement();
  const { selectedYear, handleYear } = useCareer();
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      careerRef: ref,
    };
  });

  const handleTabClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  const swiperRef = useRef<any>(null);
  return (
    <FadeComponent>
      <div css={wrapper(isMobile)} ref={ref} id="career" key="career">
        <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
          Career
        </BoldText>
        <div css={row(isMobile)}>
          <div css={yearTab(isMobile)}>
            {YEARS_STRUCTURE.map((item, i) => {
              return (
                <div
                  css={yearStyle(
                    selectedYear === item,
                    careerSizeConverter().yearFontSize,
                    isMobile
                  )}
                  key={item}
                  onClick={() => {
                    handleYear(item);
                    handleTabClick(i);
                  }}
                >
                  {item}
                </div>
              );
            })}
          </div>

          <div
            css={careerBox(
              careerSizeConverter().boxWidth,
              careerSizeConverter().boxHeight,
              isMobile
            )}
          >
            <Swiper
              onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
              spaceBetween={50}
              slidesPerView={1}
              allowTouchMove={false}
            >
              <SwiperSlide>
                <div
                  css={{
                    display: "flex",
                    width: "auto",
                    flexDirection: "column",
                    alignItems: isMobile ? "center" : "",
                    gap: `${careerSizeConverter().gap}px`,
                  }}
                >
                  <Kristin />
                  <Deu />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  css={{
                    display: "flex",
                    width: "auto",
                    flexDirection: "column",
                    alignItems: isMobile ? "center" : "",
                    gap: `${careerSizeConverter().gap}px`,
                  }}
                >
                  <DeuOther />
                  <Others />
                </div>
              </SwiperSlide>
            </Swiper>
            <Global
              styles={css`
                .swiper {
                  list-style: disc;
                }
              `}
            />
          </div>
        </div>
      </div>
    </FadeComponent>
  );
}

const wrapper = (isMobile: boolean) => ({
  display: "flex",
  flexDirection: "column" as const,
  width: "75vw",
  maxWidth: "1400px",
  height: "auto",
  alignItems: "center",
  justifyContent: "center",
  minHeight: isMobile ? "80vh" : "100vh",
});

const titleTextStyle = {
  marginTop: "60px",
};

const row = (isMobile: boolean) => ({
  width: "100%",
  marginTop: "40px",
  display: "flex",
  flexDirection: isMobile ? ("column" as const) : ("row" as const),
  justifyContent: "space-around",
});

const yearStyle = (isSelected: boolean, size: number, isMobile: boolean) => ({
  padding: isMobile ? "4px 6px" : " 0 0 0 16px",
  borderLeft: isMobile ? "none" : isSelected ? "3px solid white" : "none",
  color: isMobile
    ? isSelected
      ? "black"
      : "white"
    : isSelected
    ? "white"
    : "#9B9B9B",
  fontSize: isMobile ? "16px" : isSelected ? `${size}px` : `${size - 4}px`,
  fontWeight: "600",
  background: isMobile ? (isSelected ? "#FCFCFC" : "#727272") : "none",
  cursor: "pointer",
  borderRadius: isMobile ? "5px" : "none",
  "&: hover": {
    color: "#CFCFCF",
  },
});

const yearTab = (isMobile: boolean) => ({
  display: "flex",
  flexDirection: isMobile ? ("row" as const) : ("column" as const),
  justifyContent: isMobile ? "flex-start" : "",
  marginBottom: isMobile ? "16px" : "",
  gap: isMobile ? "8px" : "8px",
});

const careerBox = (width: number, height: number, isMobile: boolean) => ({
  display: "flex",
  width: isMobile ? "" : `${width}px`,
  height: `${height}px`,
});
