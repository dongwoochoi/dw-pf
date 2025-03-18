/** @jsxImportSource @emotion/react */

interface PropsTpye {
  children: React.ReactNode;
}

export default function BoldText({ children }: PropsTpye) {
  return <p css={textStyle}>{children}</p>;
}

const textStyle = {
  fontFamily: "agro",
  fontSize: "24px",
  color: "white",
};
