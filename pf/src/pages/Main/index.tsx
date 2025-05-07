/** @jsxImportSource @emotion/react */

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
  width: "100vw",
  // width: `calc(100vw - 18.5px)`,
  height: "100vh",
  display: " flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
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
