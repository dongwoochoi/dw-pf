/** @jsxImportSource @emotion/react */
import useMeasurement from "../../hooks/useMeasurement";
interface PropsType {
  children: React.ReactNode;
  size?: number;
}

export default function LightText({ children, size = 20 }: PropsType) {
  const { fontSizeTransfer } = useMeasurement();
  return <p css={textStyle(fontSizeTransfer(size))}>{children}</p>;
}

const textStyle = (size: number) => ({
  fontFamily: "agroL",
  fontSize: `${size}px`,
  color: "white",
});
