/** @jsxImportSource @emotion/react */

interface PropsType {
  children: React.ReactNode;
  size?: number;
}

export default function LightText({ children, size = 20 }: PropsType) {
  return <p css={textStyle(size)}>{children}</p>;
}

const textStyle = (size: number) => ({
  fontFamily: "agroL",
  fontSize: `${size}px`,
  color: "white",
  lineHeight: "36px",
});
