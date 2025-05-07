/** @jsxImportSource @emotion/react */

import useResponsive from "../../hooks/useResponsive";

interface PropsType {
  children: React.ReactNode;
  size: number;
}

export default function BorderBottomTitle({ children, size = 36 }: PropsType) {
  const { isMobile } = useResponsive();
  return <div css={textStyle(size, isMobile)}>{children}</div>;
}

const textStyle = (size: number, isMobile: boolean) => ({
  fontFamily: "agro",
  fontSize: `${size}px`,
  color: "white",
  width: "auto",
  paddingBottom: isMobile ? "8px" : "16px",
  borderBottom: "1px solid #727272",
});
