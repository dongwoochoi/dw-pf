/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Global, css } from "@emotion/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import ProjectCard from "./ProjectCard";
import { MutableRefObject } from "react";
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
  const { isMobile } = useResponsive();
  return (
    <div css={wrapper(isMobile)}>
      <Swiper
        css={swiperContainer(isMobile)}
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        spaceBetween={16}
        direction="horizontal"
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          300: { slidesPerView: 1 },
          600: { slidesPerView: 1 },
          900: { slidesPerView: 1.7 },
          1100: { slidesPerView: 2.2 },
          1200: { slidesPerView: 1.6 },
          1400: { slidesPerView: 1.8 },
          1610: { slidesPerView: 2.2 },
          1800: { slidesPerView: 2.2 },
        }}
        modules={[Pagination]}
      >
        {structure.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <div
                css={{
                  width: "1005",
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
});

const swiperContainer = (isMobile: boolean) => ({
  width: "100%",
  height: isMobile ? "310px" : "550px",
  maxWidth: "2400px",
});
