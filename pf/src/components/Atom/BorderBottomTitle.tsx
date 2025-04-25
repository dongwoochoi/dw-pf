/** @jsxImportSource @emotion/react */

interface PropsType {
  children: React.ReactNode;
  size: number;
}

export default function BorderBottomTitle({ children, size = 36 }: PropsType) {
  return <div css={textStyle(size)}>{children}</div>;
}

const textStyle = (size: number) => ({
  fontFamily: "agro",
  fontSize: `${size}px`,
  color: "white",
  width: "auto",
  paddingBottom: "16px",
  borderBottom: "1px solid #727272",
});
