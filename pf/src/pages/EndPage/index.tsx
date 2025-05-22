/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { endPageImg, MainImage } from "../../assets/img";
import useMeasurement from "../../hooks/useMeasurement";
import FadeComponent from "../../components/FadeComponent";

export default function EndPage() {
  const { endSizeConverter } = useMeasurement();
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div css={wrapper}>
      <FadeComponent>
        <div css={layout}>
          <img
            css={imgStyle(endSizeConverter().width, endSizeConverter().height)}
            src={showFirst ? endPageImg.bye1 : endPageImg.bye2}
            alt="toggle"
          />
          <p css={titleTextStyle(endSizeConverter().fontSize)}>
            봐주셔서 감사합니다!
          </p>
        </div>
      </FadeComponent>
      <div css={btnWrapper}>
        <p css={textBtn(endSizeConverter().fontSize)}>Mail</p>
        <p css={textBtn(endSizeConverter().fontSize)}>GitHub</p>
      </div>
    </div>
  );
}

const wrapper = {
  width: "100%",
  height: "400vh",
  maxHeight: "100vh",
  display: "flex",
  flexDirection: "row" as const,
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${MainImage.MainBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const layout = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
};

const titleTextStyle = (fontSize: number) => ({
  fontFamily: "agroL",
  fontSize: `${fontSize}px`,
  fontWeight: "800",
  marginTop: "60px",
});

const imgStyle = (width: number, height: number) => ({
  width: `${width}px`,
  height: `${height}px`,
});

const btnWrapper = {
  display: "flex",
  flexDirection: "column" as const,
};

const textBtn = (fontSize: number) => ({
  fontSize: `${fontSize - 20}px`,
  fontFamily: "agroM",
  cursor: "pointer",
  position: "relative" as const,
  width: "auto",
  display: "inline-block",
  paddingBottom: "4px",
  "&::after": {
    content: '""',
    position: "absolute" as const,
    left: 0,
    bottom: 0,
    height: "5px",
    backgroundColor: "black",
    width: 0,
    transition: "width 0.3s ease",
  },

  "&:hover::after": {
    width: "100%",
  },
});
