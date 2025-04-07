/** @jsxImportSource @emotion/react */
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { Global, css } from "@emotion/react";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css";
import ProjectCard from "./ProjectCard";
import { MutableRefObject } from "react";

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
  return (
    <div css={wrapper}>
      <Swiper
        css={swiperContainer}
        onSwiper={(swiper: SwiperClass) => (swiperRef.current = swiper)}
        spaceBetween={0}
        slidesPerView={2.5} //반응형 도입할것
        direction="horizontal"
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {structure.map((item) => {
          return (
            <SwiperSlide key={item.title}>
              <ProjectCard
                title={item.title}
                team={item.team}
                text={item.text}
                tag={item.tag}
                img={item.img}
              />
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

const wrapper = {
  position: "relative" as const,
  display: "flex",
  overflow: "visible",
  flexDirection: "row" as const,
  alignItems: "center",
};

const swiperContainer = {
  width: "100%",
  height: "550px",
  maxWidth: "2400px",
};
