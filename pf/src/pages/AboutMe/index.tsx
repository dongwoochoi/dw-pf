/** @jsxImportSource @emotion/react */
import { useRef, useState } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import { Image } from "../../assets/img";
import LightText from "../../components/Atom/LightText";
import useMeasurement from "../../hooks/useMeasurement";
import BoldText from "../../components/Atom/BoldText";
import FadeComponent from "../../components/FadeComponent";
import { ABOUTME_STRUCTURE } from "./structure";
import useResponsive from "../../hooks/useResponsive";

export default function AboutMe() {
  const {
    myPictureSizeConverter,
    titleFontSizeTransfer,
    aboutMainGapSizeConverter,
    QNAConverter,
  } = useMeasurement();
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      aboutMeRef: ref,
    };
  });

  const [isSelected, setIsSelected] = useState<string>("연차");
  const { isMobile } = useResponsive();
  return (
    <div css={wrapper(isMobile)} ref={ref} id="aboutMe">
      <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
        About Me
      </BoldText>
      <FadeComponent>
        <div css={contentWrapper(aboutMainGapSizeConverter())}>
          <div css={pictureContent}>
            <img
              css={picture(myPictureSizeConverter())}
              src={Image.Face}
              alt="me"
            />
            <LightText>
              👋  안녕하세요! 프론트엔드 개발자 최동우 입니다.
            </LightText>
          </div>
          <div css={textBox(QNAConverter().mainPadding, QNAConverter().gap)}>
            <div css={keywordBox(isMobile)}>
              {ABOUTME_STRUCTURE.map((item) => {
                return (
                  <div
                    css={keywordStyle(
                      QNAConverter().fontSize,
                      QNAConverter().subPadding,
                      isSelected === item.keyword,
                      isMobile
                    )}
                    onClick={() => {
                      setIsSelected(item.keyword);
                    }}
                  >
                    {item.keyword}
                  </div>
                );
              })}
            </div>
            <div
              css={questionStyle(
                QNAConverter().fontSize,
                QNAConverter().lineHeight,
                true
              )}
            >
              Q.
              {
                ABOUTME_STRUCTURE.find((item) => item.keyword === isSelected)
                  ?.question
              }
            </div>
            <div
              css={questionStyle(
                QNAConverter().fontSize,
                QNAConverter().lineHeight
              )}
            >
              {
                ABOUTME_STRUCTURE.find((item) => item.keyword === isSelected)
                  ?.answer
              }
            </div>
          </div>
        </div>
      </FadeComponent>
    </div>
  );
}

const wrapper = (isMobile: boolean) => ({
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  textAlign: "center" as const,
  width: "85%",
  height: "auto",
  minHeight: isMobile ? "80vh" : "100vh",
});

const titleTextStyle = {
  marginTop: "60px",
  marginBottom: "48px",
};

const contentWrapper = (gap: number) => ({
  display: "flex",
  gap: `${gap}px`,
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
});

const pictureContent = () => ({
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
});

const picture = (size: number) => ({
  width: `${size}px`,
  borderRadius: "50%",
  marginBottom: "3em",
});

const keywordBox = (isMobile: boolean) => ({
  display: "flex",
  flexWrap: "wrap" as const,
  gap: isMobile ? "4px" : "16px",
});

const keywordStyle = (
  fontSize: number,
  padding: string,
  isSelected: boolean,
  isMobile: boolean
) => ({
  color: isSelected ? "black" : "white",
  background: isSelected ? "#FCFCFC" : "#727272",
  fontFamily: "agroL",
  fontSize: `${fontSize}px`,
  padding: isMobile ? "4px 8px" : padding,
  borderRadius: "20px",
  cursor: "pointer",
  "&:hover": { background: "#9B9B9B" },
});

const questionStyle = (
  fontSize: number,
  lineHeight: number,
  isQ?: boolean
) => ({
  textAlign: "start" as const,
  color: "white",
  fontFamily: isQ ? "agroM" : "agroL",
  fontSize: isQ ? `${fontSize + 4}px` : `${fontSize}px`,
  // background: isQ ? "" : "#727272",
  borderRadius: "5px",
  width: "100%",
  lineHeight: `${lineHeight}px`,
});

const textBox = (padding: string, gap: number) => ({
  width: "70vw",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "flex-start",
  background: "#2C2C2C",
  borderRadius: "15px",
  padding,
  gap: `${gap}px`,
});
