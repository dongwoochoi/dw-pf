/** @jsxImportSource @emotion/react */
import useMeasurement from "../../hooks/useMeasurement";
import { BaseTypes } from "../../types/common";
interface PropsType extends BaseTypes {
  children: React.ReactNode;
  size?: number;
}

export default function LightText({
  children,
  size = 20,
  ...props
}: PropsType) {
  const { fontSizeTransfer } = useMeasurement();
  return (
    <p css={textStyle(fontSizeTransfer(size))} {...props}>
      {children}
    </p>
  );
}

const textStyle = (size: number) => ({
  fontFamily: "agroL",
  fontSize: `${size}px`,
  color: "white",
});
