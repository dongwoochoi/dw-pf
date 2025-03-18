/** @jsxImportSource @emotion/react */

interface PropsType {
  children: React.ReactNode;
}

export default function MediumText({ children }: PropsType) {
  return <p css={textStyle}>{children}</p>;
}

const textStyle = {
  fontFamily: "agroL",
  fontSize: "24px",
  color: "white",
};
