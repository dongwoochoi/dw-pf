/** @jsxImportSource @emotion/react */
import useResponsive from "../../hooks/useResponsive";
import { BaseTypes } from "../../types/common";

interface PropsType extends BaseTypes {
  children: React.ReactNode;
  size?: number;
}

export default function MediumText({
  children,
  size = 20,
  ...props
}: PropsType) {
  const { isPc, isMobile } = useResponsive();
  return (
    <p css={textStyle(isPc, size, isMobile)} {...props}>
      {children}
    </p>
  );
}

const textStyle = (isPc: boolean, size: number, isMobile: boolean) => ({
  fontFamily: "agroL",
  fontSize: isPc ? `${size}px` : isMobile ? `${size - 12}px` : `${size - 4}px`,
  color: "white",
});
