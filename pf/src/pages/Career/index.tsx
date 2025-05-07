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
import useResponsive from "../../hooks/useResponsive";

export default function Career() {
  const { isMobile } = useResponsive();
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
    <div css={wrapper} ref={ref} id="career" key="career">
      <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
        Career
      </BoldText>
      <div css={row}>
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
        <div css={careerBox(careerSizeConverter().boxHeight, isMobile)}>
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
                        {isMobile ? (
                          <div
                            css={careerStyle(width, height, isMobile)}
                            onClick={() => {
                              handleClick(value.title);
                            }}
                          >
                            <div>
                              {/* <BoldText size={fontSizeTransfer(20)}>
                                {value.period}
                              </BoldText> */}
                              <BoldText size={fontSizeTransfer(18)}>
                                {`${value.title}`}
                              </BoldText>
                            </div>
                            <BoldText size={fontSizeTransfer(18)}>
                              {value.category}
                            </BoldText>
                          </div>
                        ) : (
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
                        )}

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
                              fontSizeTransfer(18),
                              width,
                              height
                            )}
                          >
                            <p>{isMobile ? value.period : ""}</p>
                            <p>
                              {isMobile ? `| ${value.explain}` : value.explain}
                            </p>
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
  // height: "600px",
  marginTop: "40px",
  display: "flex",
  justifyContent: "space-around",
};

const yearStyle = (isSelected: boolean, size: number, isMobile: boolean) => ({
  paddingLeft: isMobile ? "4px" : "16px",
  borderLeft: isSelected ? "3px solid white" : "none",
  color: isSelected ? "white" : "#9B9B9B",
  fontSize: isSelected ? `${size}px` : `${size - 4}px`,
  fontWeight: "600",
  cursor: "pointer",
  "&: hover": {
    color: "#CFCFCF",
  },
});

const yearTab = (isMobile: boolean) => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: isMobile ? "8px" : "8px",
});

const careerBox = (height: number, isMobile: boolean) => ({
  display: "flex",
  width: isMobile ? "200px" : "auto",
  height: `${height}px`,
});

const careerStyle = (
  width: number,
  height: string | number,
  isMobile?: boolean
) => ({
  display: "flex",
  flexDirection: isMobile ? ("row" as const) : ("row" as const),
  justifyContent: "space-between",
  alignItems: "center",
  width: `${width}px`,
  height: typeof height === "string" ? height : `${height}px`,
  background: "#4B4B4B",
  padding: "8px 16px",
  color: "white",
  borderRadius: "5px",
  cursor: "pointer",
  "&:hover": { background: "#727272" },
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.5)",
});

const explainStyle = (
  isOpen: boolean,
  size: number,
  width: number,
  height: number | string
) => ({
  width: `${width}px`,
  minHeight: typeof height === "string" ? height : `${height}px`,
  background: "#4B4B4B",
  padding: "8px 16px",
  color: "white",
  fontSize: `${size}px`,
  borderRadius: "5px",
  fontFamily: "agroL",
  marginTop: "8px",
});
