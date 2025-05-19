/** @jsxImportSource @emotion/react */
import useMeasurement from "../hooks/useMeasurement";
import useSideBar from "../hooks/useSideBar";

export default function SideBar() {
  const {
    sideBarFontSizeTransfer,
    sideBarMarginTransfer,
    sideBarTopTransfer,
    sideBarWidth,
  } = useMeasurement();
  const { handleScrollTo, visibleSection, ref } = useSideBar();
  return (
    <div
      css={wrapper(
        sideBarWidth(),
        sideBarMarginTransfer(),
        sideBarTopTransfer()
      )}
    >
      <div css={menuBorder(visibleSection?.aboutMe, sideBarFontSizeTransfer())}>
        <p
          css={fontStyle(visibleSection?.aboutMe, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.aboutMeRef)}
        >
          About Me
        </p>
      </div>
      <div
        css={{
          ...menuBorder(visibleSection?.career, sideBarFontSizeTransfer()),
        }}
      >
        <p
          css={fontStyle(visibleSection?.career, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.careerRef)}
        >
          Career
        </p>
      </div>
      <div css={menuBorder(visibleSection?.skills, sideBarFontSizeTransfer())}>
        <p
          css={fontStyle(visibleSection?.skills, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.skillRef)}
        >
          Skills
        </p>
      </div>
      <div
        css={{
          ...menuBorder(visibleSection?.projects, sideBarFontSizeTransfer()),
        }}
      >
        <p
          css={fontStyle(visibleSection?.projects, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.projectRef)}
        >
          Projects
        </p>
      </div>
      <div
        css={{
          ...menuBorder(visibleSection?.board, sideBarFontSizeTransfer()),
        }}
      >
        <p
          css={fontStyle(visibleSection?.board, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.boardRef)}
        >
          Board
        </p>
      </div>
    </div>
  );
}

const wrapper = (width: number, margin: string, top: number) => ({
  width: `${width}px`,
  margin,
  position: "sticky" as const,
  top: `${top}px`,
  display: "flex",
  flexDirection: "column" as const,
  height: "100vh",
});

const menuBorder = (isVisible: boolean, paddingValue: number) => ({
  scale: isVisible ? 1.2 : 1,
  transition: "all 0.5s",
  // padding: `${paddingValue}px 0`,
});

const fontStyle = (isVisible: boolean, size: number) => ({
  color: isVisible ? "white" : "#9B9B9B",
  fontSize: `${size}px`,
  fontWeight: 800,
  cursor: "pointer",
  "&:hover": { color: "white" },
});
