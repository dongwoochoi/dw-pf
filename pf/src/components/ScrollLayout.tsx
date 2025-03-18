/** @jsxImportSource @emotion/react */
import { EmotionJSX } from "@emotion/react/dist/declarations/src/jsx-namespace";
import SideBar from "./SideBar";

interface PropsType {
  contentArray: Array<EmotionJSX.Element>;
}

export default function ScrollLayout({ contentArray }: PropsType) {
  return (
    <div css={wrapper}>
      <div css={content}>
        {contentArray.map((item) => {
          return item;
        })}
      </div>
      <SideBar />
    </div>
  );
}

const wrapper = {
  position: "relative" as const,
  display: "flex",
  flexDirection: "row" as const,
  background: "#1D1D1D",
  height: "100%",
};

const content = {
  width: "100vw",
  padding: "40px 0",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  gap: "40px",
};
