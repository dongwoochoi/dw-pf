/** @jsxImportSource @emotion/react */
// import { Image } from "../../assets/img";

export default function MainPage() {
  return (
    <div css={wrapper}>
      <p css={titleTextStyle}>Main</p>
    </div>
  );
}

const wrapper = {
  position: "fixed" as const,
  zIndex: "-1",
  width: `calc(100vw - 18.5px)`,
  height: "100vh",
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
  // backgroundImage: `url(${Image.background})`,
  // backgroundSize: "cover",
  // backgroundPosition: "center",
  // backgroundRepeat: "no-repeat",
};

const titleTextStyle = {
  fontFamily: "agro",
  color: "black",
  fontSize: "60px",
  fontWeight: "800",
};
