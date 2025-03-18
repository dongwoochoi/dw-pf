/** @jsxImportSource @emotion/react */

interface PropsType {
  children: React.ReactNode;
}

export default function BorderBottomTitle({ children }: PropsType) {
  return <div css={textStyle}>{children}</div>;
}

const textStyle = {
  fontFamily: "agro",
  fontSize: "36px",
  color: "white",
  width: "auto",
  paddingBottom: "16px",
  borderBottom: "1px solid #727272",
};
