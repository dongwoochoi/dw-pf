/** @jsxImportSource @emotion/react */
import useResponsive from "../../hooks/useResponsive";

interface PropsType {
  children: React.ReactNode;
  size?: number;
}

export default function BoldText({ children, size = 20 }: PropsType) {
  const { isPc } = useResponsive();
  return <p css={textStyle(isPc, size)}>{children}</p>;
}

const textStyle = (isPc: boolean, size: number) => ({
  fontFamily: "agroL",
  fontSize: isPc ? `${size}px` : `${size - 4}px`,
  color: "white",
});
