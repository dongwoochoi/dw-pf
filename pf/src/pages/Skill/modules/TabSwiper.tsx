/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
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
import { useSetAtom } from "jotai";
import { skillAtom } from "../../../jotai/skill";

const TabSwiper = () => {
  const swiperRef = useRef<any>(null);
  const setSelectedSkill = useSetAtom(skillAtom);
  const handleClick = (id: string) => {
    setSelectedSkill(id);
  };
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const handleTabClick = (index: number) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
      setCurrentIndex(index);
    }
  };

  return (
    <div css={wrapper}>
      <div css={btnBox}>
        <div
          css={btnStyle(currentIndex === 0)}
          onClick={() => handleTabClick(0)}
        >
          FE
        </div>
        <div
          css={btnStyle(currentIndex === 1)}
          onClick={() => handleTabClick(1)}
        >
          BE
        </div>
        <div
          css={btnStyle(currentIndex === 2)}
          onClick={() => handleTabClick(2)}
        >
          Tool
        </div>
      </div>

      <Swiper
        css={swiperContainer}
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        allowTouchMove={false}
        spaceBetween={50}
        slidesPerView={1}
      >
        <SwiperSlide>
          <div css={{ display: "flex", gap: "36px" }}>
            {FRONT_SLIDE_STRUCTURE.map((item) => {
              return (
                <GaugeComponent
                  key={item.logo}
                  logo={item.logo}
                  percent={item.percent}
                  speed={item.speed}
                  currentIndex={currentIndex}
                  needFit={item.needFit}
                  handleClick={() => handleClick(item.id)}
                />
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={{ display: "flex", gap: "36px" }}>
            {BACK_SLIDE_STRUCTURE.map((item) => {
              return (
                <GaugeComponent
                  key={item.logo}
                  logo={item.logo}
                  percent={item.percent}
                  speed={item.speed}
                  currentIndex={currentIndex}
                  needFit={item.needFit}
                  handleClick={() => handleClick(item.id)}
                />
              );
            })}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div css={{ display: "flex", gap: "36px" }}>
            {TOOL_SLIDE_STRUCTURE.map((item) => {
              return (
                <GaugeComponent
                  key={item.logo}
                  logo={item.logo}
                  percent={item.percent}
                  currentIndex={currentIndex}
                  speed={item.speed}
                  needFit={item.needFit}
                  handleClick={() => handleClick(item.id)}
                />
              );
            })}
          </div>
        </SwiperSlide>
      </Swiper>
      <Global
        styles={css`
          .swiper {
            margin-left: 0 !important;
          }
          .css-s2udyd {
            flex-wrap: wrap;
            height: 100%;
            align-items: center;
            justify-content: center;
          }
        `}
      />
    </div>
  );
};

const wrapper = {
  width: "100%",
};

const swiperContainer = {
  width: "400px",
  height: "250px",
  minWidth: "400px",
};

const btnBox = {
  display: "flex",
  gap: "8px",
  marginBottom: "32px",
};

const btnStyle = (isClicked: boolean) => ({
  fontFamily: "agro",
  fontSize: "20px",
  color: isClicked ? "black" : "white",
  padding: "6px 10px",
  borderRadius: "5px",
  background: isClicked ? "#FCFCFC" : "#727272",
  cursor: "pointer",
  "&:hover": { background: "#9B9B9B" },
});

export default TabSwiper;
