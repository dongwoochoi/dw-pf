/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import { CAREER_STRUCTURE, YEARS_STRUCTURE } from "./structure";
import useCareer from "./useCareer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { css, Global } from "@emotion/react";
import useMeasurement from "../../hooks/useMeasurement";
import BoldText from "../../components/Atom/BoldText";

export default function Career() {
  const { careerSizeConverter, titleFontSizeTransfer, fontSizeTransfer } =
    useMeasurement();
  const convertValue = careerSizeConverter();
  const { selectedYear, clickedCareer, handleYear, handleClick } = useCareer();
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
    <div css={wrapper} ref={ref} id="career">
      <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
        Career
      </BoldText>
      <div css={row}>
        <div css={yearTab}>
          {YEARS_STRUCTURE.map((item, i) => {
            return (
              <div
                css={yearStyle(
                  selectedYear === item,
                  careerSizeConverter().yearFontSize
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
        <div css={careerBox}>
          <Swiper
            onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
            spaceBetween={50}
            slidesPerView={1}
            direction="vertical"
            allowTouchMove={false}
          >
            {YEARS_STRUCTURE.map((item) => {
              return (
                <SwiperSlide>
                  {CAREER_STRUCTURE.filter(
                    (item) => item.year === selectedYear
                  ).map((value) => {
                    const isOpen = clickedCareer.includes(value.title);
                    const { width, height } = convertValue;
                    return (
                      <div key={value.title}>
                        <div
                          css={careerStyle(width, height)}
                          onClick={() => {
                            handleClick(value.title);
                          }}
                        >
                          <BoldText
                            size={fontSizeTransfer(20)}
                          >{`${value.period}  |  ${value.title}`}</BoldText>
                          <BoldText size={fontSizeTransfer(20)}>
                            {value.category}
                          </BoldText>
                        </div>
                        <div
                          css={{
                            display: isOpen ? "flex" : "none",
                            alignItems: "center",
                            margin: "4px 0",
                          }}
                        >
                          <li
                            css={{
                              color: "white",
                              fontSize: `${fontSizeTransfer(20)}px`,
                            }}
                          ></li>
                          <div
                            css={explainStyle(
                              isOpen,
                              fontSizeTransfer(20),
                              width,
                              height
                            )}
                          >
                            {value.explain}
                          </div>
                        </div>
                        <div
                          css={{
                            marginBottom: "16px",
                            width: "1px",
                            height: "1px",
                          }}
                        ></div>
                      </div>
                    );
                  })}
                </SwiperSlide>
              );
            })}
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
  );
}

const wrapper = {
  display: "flex",
  flexDirection: "column" as const,
  width: "85%",
  maxWidth: "1400px",
  height: "auto",
  alignItems: "center",
  justifyContent: "center",
};

const titleTextStyle = {
  marginTop: "60px",
};

const row = {
  width: "100%",
  height: "600px",
  marginTop: "40px",
  display: "flex",
  justifyContent: "space-around",
};

const yearStyle = (isSelected: boolean, size: number) => ({
  paddingLeft: "16px",
  borderLeft: isSelected ? "3px solid white" : "none",
  color: isSelected ? "white" : "#9B9B9B",
  fontSize: isSelected ? `${size}px` : `${size - 4}px`,
  fontWeight: "600",
  cursor: "pointer",
  "&: hover": {
    color: "#CFCFCF",
  },
});

const yearTab = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
};

const careerBox = {
  display: "flex",
  width: "auto",
};

const careerStyle = (width: number, height: number) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: `${width}px`,
  height: `${height}px`,
  background: "#4B4B4B",
  padding: "8px 16px",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": { background: "#727272" },
});

const explainStyle = (
  isOpen: boolean,
  size: number,
  width: number,
  height: number
) => ({
  width: `${width}px`,
  minHeight: `${height}px`,
  background: "#4B4B4B",
  padding: "8px 16px",
  color: "white",
  fontSize: `${size}px`,
  borderRadius: "5px",
  fontFamily: "agroL",
  marginTop: "8px",
});
