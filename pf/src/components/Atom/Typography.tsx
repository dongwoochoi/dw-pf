/** @jsxImportSource @emotion/react */
import useMeasurement from "../../hooks/useMeasurement";
import useResponsive from "../../hooks/useResponsive";
import { BaseTypes } from "../../types/common";

type Variant = "bold" | "light" | "medium";

interface PropsType extends BaseTypes {
  children: React.ReactNode;
  size?: number;
  variant: Variant;
}

export default function Typography({
  children,
  size = 20,
  variant,
  ...props
}: PropsType) {
  const { fontSizeTransfer } = useMeasurement();
  const { isPc, isMobile } = useResponsive();

  const fontSize =
    variant === "bold"
      ? size
      : variant === "light"
      ? fontSizeTransfer(size)
      : isPc
      ? size
      : isMobile
      ? size - 12
      : size - 4;

  return (
    <p css={textStyle(variant, fontSize)} {...props}>
      {children}
    </p>
  );
}

const textStyle = (variant: Variant, fontSize: number) => ({
  fontFamily: variant === "bold" ? "agro" : "agroL",
  fontSize: `${fontSize}px`,
  color: "var(--text-primary)",
});
