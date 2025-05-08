/** @jsxImportSource @emotion/react */
import { EmotionJSX } from "@emotion/react/dist/declarations/src/jsx-namespace";
import SideBar from "./SideBar";
import useMeasurement from "../hooks/useMeasurement";
import useResponsive from "../hooks/useResponsive";

interface PropsType {
  contentArray: Array<EmotionJSX.Element>;
}

export default function ScrollLayout({ contentArray }: PropsType) {
  const { isMobile } = useResponsive();
  const { sideBarWidth } = useMeasurement();
  return (
    <div css={wrapper}>
      <div css={content(sideBarWidth(), isMobile)}>
        {contentArray.map((item) => {
          return item;
        })}
      </div>
      {isMobile ? null : <SideBar />}
    </div>
  );
}

const wrapper = {
  position: "relative" as const,
  display: "flex",
  background: "#1D1D1D",
  height: "100%",
};

const content = (sidebarWidth: number, isMobile: boolean) => ({
  position: "relative" as const,
  width: isMobile ? "100vw" : `calc(100vw - ${sidebarWidth}px)`,
  padding: "40px 0",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center" as const,
  gap: isMobile ? "40px" : "100px",
});
