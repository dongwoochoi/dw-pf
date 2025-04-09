/** @jsxImportSource @emotion/react */

import { useEffect, useState } from "react";
import { endPageImg } from "../../assets/img";

export default function EndPage() {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer); // 컴포넌트 언마운트 시 타이머 정리
  }, [1000]);

  return (
    <div css={wrapper}>
      <img
        css={imgStyle}
        src={showFirst ? endPageImg.bye1 : endPageImg.bye2}
        alt="toggle"
      />

      <p css={titleTextStyle}>Thank You!</p>
    </div>
  );
}

const wrapper = {
  display: "flex",
  flexDirection: "column" as const,
  width: "100%",
  height: "100vh",
  alignItems: "center",
  justifyContent: "center",
  background: "white",
};

const titleTextStyle = {
  fontFamily: "agro",
  fontSize: "60px",
  fontWeight: "800",
  marginTop: "60px",
};

const imgStyle = {
  width: "300px",
  height: "360px",
};
