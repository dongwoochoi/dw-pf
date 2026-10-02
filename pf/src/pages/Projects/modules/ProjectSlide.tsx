/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Global, css } from "@emotion/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import ProjectCard from "./ProjectCard";
import { MutableRefObject } from "react";
import useMeasurement from "../../../hooks/useMeasurement";
import useResponsive from "../../../hooks/useResponsive";

export default function ProjectSlide({
  structure,
  swiperRef,
}: {
  swiperRef: MutableRefObject<SwiperClass | null>;
  structure: {
    title: string;
    team: string;
    text: string;
    tag: string[];
    img: string;
    favicon: string;
  }[];
}) {
  const { isMobile, isLaptop } = useResponsive();
  const { projectSizeConverter } = useMeasurement();
  const gap = isMobile ? 12 : 20;
  const cardWidth = projectSizeConverter().width;

  // Swiper's own `slidesPerView: "auto"` measurement has proven unreliable
  // in this layout (it ended up rendering zero slides). Instead, measure
  // the real available width ourselves and hand Swiper a concrete slide
  // count — robust regardless of how many ancestors use percentage
  // widths, and it naturally adapts to the page's own 1125px content cap.
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const updateWidth = () => setContainerWidth(el.clientWidth);
    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const slidesPerView =
    containerWidth > 0
      ? Math.max(1, Math.floor((containerWidth + gap) / (cardWidth + gap)))
      : 1;

  return (
    <div css={wrapper(isMobile)} ref={containerRef}>
      {containerWidth > 0 ? (
        <Swiper
          key={`${slidesPerView}-${cardWidth}`}
          css={swiperContainer(isMobile, isLaptop)}
          onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
          spaceBetween={gap}
          slidesPerView={slidesPerView}
          direction="horizontal"
          pagination={{
            clickable: true,
          }}
          nested={true}
          passiveListeners={false}
          touchStartPreventDefault={false}
          modules={[Pagination]}
        >
          {structure.map((item) => {
            return (
              <SwiperSlide key={item.title}>
                <div
                  css={{
                    width: "100%",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <ProjectCard
                    title={item.title}
                    team={item.team}
                    text={item.text}
                    tag={item.tag}
                    img={item.img}
                  />
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : null}

      <Global
        styles={css`
          .swiper {
            width: 100%;
          }
          .swiper-pagination {
            bottom: -24px;
          }
          .swiper-pagination-bullet {
            background: white;
          }
        `}
      />
    </div>
  );
}

const wrapper = (isMobile: boolean) => ({
  position: "relative" as const,
  display: "flex",
  overflow: "visible",
  flexDirection: "row" as const,
  alignItems: "center",
  justifyContent: isMobile ? "center" : "",
  width: "100%",
});

const swiperContainer = (isMobile: boolean, isLaptop: boolean) => ({
  width: "100%",
  height: isMobile ? "310px" : isLaptop ? "550px" : "400px",
  maxWidth: "2400px",
});
