/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { endPageImg } from "../../assets/img";
import useMeasurement from "../../hooks/useMeasurement";
import FadeComponent from "../../components/FadeComponent";

export default function EndPage() {
  const { endSizeConverter } = useMeasurement();
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
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
          <p css={titleTextStyle(endSizeConverter().fontSize)}>Thank You!</p>
        </div>
      </FadeComponent>
    </div>
  );
}

const wrapper = {
  width: "100%",

  background: "white",
};

const layout = {
  display: "flex",
  flexDirection: "column" as const,
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
};

const titleTextStyle = (fontSize: number) => ({
  fontFamily: "agro",
  fontSize: `${fontSize}px`,
  fontWeight: "800",
  marginTop: "60px",
});

const imgStyle = (width: number, height: number) => ({
  width: `${width}px`,
  height: `${height}px8`,
});
