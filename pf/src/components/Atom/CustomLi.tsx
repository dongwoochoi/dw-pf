/** @jsxImportSource @emotion/react */

import useMeasurement from "../../hooks/useMeasurement";
import { BaseTypes } from "../../types/common";

interface PropsType extends BaseTypes {
  children: React.ReactNode;
}

function CustomLi({ children, ...props }: PropsType) {
  const { careerFontSizeConverter } = useMeasurement();
  return (
    <div css={listItem} {...props}>
      <span css={bullet(careerFontSizeConverter().liFontSize)} />
      <div css={text}>{children}</div>
    </div>
  );
}

const listItem = {
  display: "flex",
  alignItems: "flex-start",
  gap: "0.5rem",
  lineHeight: 1.6,
  marginBottom: "0.5rem",
} as const;

const bullet = (size: number) =>
  ({
    width: `${size / 3}px`,
    height: `${size / 3}px`,
    backgroundColor: "white",
    borderRadius: "50%",
    marginTop: "0.4em",
    flexShrink: 0,
  } as const);

const text = {
  flex: 1,
  color: "white",
  fontSize: "inherit",
} as const;

export default CustomLi;
