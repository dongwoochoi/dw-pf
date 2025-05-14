/** @jsxImportSource @emotion/react */

import { MainImage } from "../../assets/img";
import TypeComponent from "../../components/TypeComponent";
import useMeasurement from "../../hooks/useMeasurement";
import useResponsive from "../../hooks/useResponsive";

export default function MainPage() {
  const { isMobile } = useResponsive();
  const { mainPictureSizeConverter, mainFontSizeConverter } = useMeasurement();
  return (
    <div css={wrapper}>
      <div css={contentStyle(mainPictureSizeConverter())}>
        <p
          css={{
            fontFamily: "agroL",
            fontSize: `${mainFontSizeConverter().hi}px`,
            textAlign: "start",
          }}
        >
          안녕하세요!
        </p>
        <span css={titleTextStyle(isMobile, mainFontSizeConverter().mainTitle)}>
          {isMobile ? (
            <>
              <pre>Front-End 개발자 </pre>
              <div css={{ display: "flex" }}>
                <pre css={{ fontFamily: "agro", scale: 1.1 }}> 최동우 </pre>
                <pre> 입니다.</pre>
              </div>
            </>
          ) : (
            <>
              <pre>Front-End 개발자 </pre>
              <pre css={{ fontFamily: "agro", scale: 1.1 }}> 최동우 </pre>
              <pre> 입니다.</pre>
            </>
          )}
        </span>

        <TypeComponent />
      </div>
      <img
        css={imageStyle(isMobile, mainPictureSizeConverter())}
        src={MainImage.MainPicture}
        alt="mainImage"
      />
    </div>
  );
}

const wrapper = {
  position: "sticky" as const,
  zIndex: "-1",
  width: "100vw",
  top: 0,
  // width: `calc(100vw - 18.5px)`,
  height: "100vh",
  display: " flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  backgroundImage: `url(${MainImage.MainBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
};

const titleTextStyle = (isMobile: boolean, fontSize: number) => ({
  display: "flex",
  flexDirection: isMobile ? ("column" as const) : ("row" as const),
  alignItems: "center",
  fontFamily: "agroL",
  color: "black",
  fontSize: `${fontSize}px`,
  fontWeight: "800",
});

const contentStyle = (size: number) => ({
  display: " flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  marginBottom: `${size}px`,
});

const imageStyle = (isMobile: boolean, size: number) => ({
  position: "absolute" as const,
  bottom: isMobile ? "15%" : "5%",
  width: `${size}px`,
  opacity: "0.5",
});
