/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Global, css } from "@emotion/react";
import "swiper/css";
import ProjectSlide from "./ProjectSlide";
import { MAIN_PROJECT_STRUCTURE, SUB_PROJECT_STRUCTURE } from "../structure";
import { icons } from "../../../assets/icon";

const ProjectTabSwiper = () => {
  const swiperRef = useRef<any>(null);
  const projectSwiperRef1 = useRef<any>(null);
  const projectSwiperRef2 = useRef<any>(null);
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
      <div
        css={{
          display: "flex",
          position: "relative",
          alignItems: "center",
        }}
      >
        <img
          css={sliderNavigationLeft}
          src={icons.arrowLeft}
          onClick={() =>
            currentIndex === 0
              ? projectSwiperRef1.current?.slidePrev()
              : projectSwiperRef2.current?.slidePrev()
          }
          alt="leftArrow"
        />
        <Swiper
          css={swiperContainer}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          allowTouchMove={false}
          spaceBetween={50}
          slidesPerView={1}
          direction="vertical"
        >
          <SwiperSlide>
            <ProjectSlide
              swiperRef={projectSwiperRef1}
              structure={MAIN_PROJECT_STRUCTURE}
            />
          </SwiperSlide>
          <SwiperSlide>
            <ProjectSlide
              swiperRef={projectSwiperRef2}
              structure={SUB_PROJECT_STRUCTURE}
            />
          </SwiperSlide>
        </Swiper>
        <img
          css={sliderNavigationRight}
          src={icons.arrowRight}
          onClick={() =>
            currentIndex === 0
              ? projectSwiperRef1.current?.slideNext()
              : projectSwiperRef2.current?.slideNext()
          }
          alt="rightArrow"
        />
      </div>
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

const sliderNavigationLeft = {
  position: "absolute" as const,
  left: "-120px",
  height: "80px",
  cursor: "pointer",
};

const sliderNavigationRight = {
  position: "absolute" as const,
  height: "80px",
  right: "-120px",
  cursor: "pointer",
};

export default ProjectTabSwiper;
