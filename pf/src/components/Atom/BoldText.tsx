/** @jsxImportSource @emotion/react */
import { BaseTypes } from "../../types/common";

interface PropsType extends BaseTypes {
  children: React.ReactNode;
  size?: number;
}

export default function BoldText({ children, size = 20, ...props }: PropsType) {
  return (
    <p css={textStyle(size)} {...props}>
      {children}
    </p>
  );
}

const textStyle = (size: number) => ({
  fontFamily: "agro",
  fontSize: `${size}px`,
  color: "white",
});
