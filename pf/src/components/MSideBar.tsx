/** @jsxImportSource @emotion/react */
import useMeasurement from "../hooks/useMeasurement";
import useSideBar from "../hooks/useSideBar";

export default function SideBar() {
  const { sideBarFontSizeTransfer, sideBarMarginTransfer, sideBarTopTransfer } =
    useMeasurement();
  const { handleScrollTo, visibleSection, ref } = useSideBar();
  return (
    <div css={wrapper(sideBarMarginTransfer(), sideBarTopTransfer())}>
      <div css={menuBorder(sideBarFontSizeTransfer())}>
        <p
          css={fontStyle(visibleSection?.aboutMe, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.aboutMeRef)}
        >
          About Me
        </p>
      </div>
      <div css={{ ...menuBorder(sideBarFontSizeTransfer()) }}>
        <p
          css={fontStyle(visibleSection?.career, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.careerRef)}
        >
          Career
        </p>
      </div>
      <div css={menuBorder(sideBarFontSizeTransfer())}>
        <p
          css={fontStyle(visibleSection?.skills, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.skillRef)}
        >
          Skills
        </p>
      </div>
      <div
        css={{ ...menuBorder(sideBarFontSizeTransfer()), borderBottom: "none" }}
      >
        <p
          css={fontStyle(visibleSection?.projects, sideBarFontSizeTransfer())}
          onClick={() => handleScrollTo(ref.projectRef)}
        >
          Projects
        </p>
      </div>
    </div>
  );
}

const wrapper = (margin: string, top: number) => ({
  width: "260px",
  margin,
  position: "sticky" as const,
  top: `${top}px`,
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  background: "#393939",
  borderRadius: "15px",
});

const menuBorder = (paddingValue: number) => ({
  textAlign: "center" as const,
  borderBottom: "1px solid #CFCFCF",
  padding: `${paddingValue}px 0`,
});

const fontStyle = (isVisible: boolean, size: number) => ({
  color: isVisible ? "white" : "#9B9B9B",
  fontSize: `${size}px`,
  fontWeight: 800,
  cursor: "pointer",
  "&:hover": { color: "white" },
});
