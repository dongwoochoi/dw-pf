/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Global, css } from "@emotion/react";
import "swiper/css";
import ProjectSlide from "./ProjectSlide";
import { MAIN_PROJECT_STRUCTURE, SUB_PROJECT_STRUCTURE } from "../structure";

const ProjectTabSwiper = () => {
  const swiperRef = useRef<any>(null);
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
          Main
        </div>
        <div
          css={btnStyle(currentIndex === 1)}
          onClick={() => handleTabClick(1)}
        >
          Sub
        </div>
      </div>

      <Swiper
        css={swiperContainer}
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        allowTouchMove={false}
        spaceBetween={50}
        slidesPerView={1}
        direction="vertical"
      >
        <SwiperSlide>
          <ProjectSlide structure={MAIN_PROJECT_STRUCTURE} />
        </SwiperSlide>
        <SwiperSlide>
          <ProjectSlide structure={SUB_PROJECT_STRUCTURE} />
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
  width: "100%",
  height: "550px",
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

export default ProjectTabSwiper;
