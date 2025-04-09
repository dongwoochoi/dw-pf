/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import { CAREER_STRUCTURE, YEARS_STRUCTURE } from "./structure";
import useCareer from "./useCareer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperClass } from "swiper";
import { css, Global } from "@emotion/react";

export default function Career() {
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
      <p css={titleTextStyle}>Career</p>
      <div css={row}>
        <div css={yearTab}>
          {YEARS_STRUCTURE.map((item, i) => {
            return (
              <div
                css={yearStyle(selectedYear === item)}
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
                    return (
                      <div key={value.title}>
                        <div
                          css={careerStyle}
                          onClick={() => {
                            handleClick(value.title);
                          }}
                        >
                          <p>{`${value.period}  |  ${value.title}`}</p>
                          <p css={categoryStyle}>{value.category}</p>
                        </div>
                        <div
                          css={{
                            display: isOpen ? "flex" : "none",
                            alignItems: "center",
                            margin: "4px 0",
                          }}
                        >
                          <li css={{ color: "white" }}></li>
                          <div css={explainStyle(isOpen)}>{value.explain}</div>
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
  fontFamily: "agro",
  color: "white",
  fontSize: "60px",
  fontWeight: "800",
  marginTop: "60px",
};

const row = {
  width: "100%",
  height: "600px",
  marginTop: "40px",
  display: "flex",
  gap: "160px",

  justifyContent: "center",
};

const yearStyle = (isSelected: boolean) => ({
  paddingLeft: "16px",
  borderLeft: isSelected ? "3px solid white" : "none",
  color: isSelected ? "white" : "#9B9B9B",
  fontSize: isSelected ? "40px" : "36px",
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
  width: "800px",
};

const careerStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "800px",
  height: "60px",
  background: "#4B4B4B",
  padding: "8px 16px",
  color: "white",
  fontSize: "20px",
  borderRadius: "5px",
  fontFamily: "agro",
  cursor: "pointer",
  "&:hover": { background: "#727272" },
};

const explainStyle = (isOpen: boolean) => ({
  width: "100%",
  background: "#4B4B4B",
  padding: "8px 16px",
  color: "white",
  fontSize: "20px",
  borderRadius: "5px",
  fontFamily: "agroL",
  marginTop: "8px",
  lineHeight: "28px",
});

const categoryStyle = {
  fontSize: "16px",
};
