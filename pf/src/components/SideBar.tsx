/** @jsxImportSource @emotion/react */
import useSideBar from "../hooks/useSideBar";

export default function SideBar() {
  const { handleScrollTo, visibleSection, ref } = useSideBar();
  return (
    <div css={wrapper}>
      <div css={menuBorder}>
        <p
          css={fontStyle(visibleSection?.aboutMe)}
          onClick={() => handleScrollTo(ref.aboutMeRef)}
        >
          About Me
        </p>
      </div>
      <div css={{ ...menuBorder }}>
        <p
          css={fontStyle(visibleSection?.career)}
          onClick={() => handleScrollTo(ref.careerRef)}
        >
          Career
        </p>
      </div>
      <div css={menuBorder}>
        <p
          css={fontStyle(visibleSection?.skills)}
          onClick={() => handleScrollTo(ref.skillRef)}
        >
          Skills
        </p>
      </div>
      <div css={{ ...menuBorder, borderBottom: "none" }}>
        <p
          css={fontStyle(visibleSection?.projects)}
          onClick={() => handleScrollTo(ref.projectRef)}
        >
          Projects
        </p>
      </div>
    </div>
  );
}

const wrapper = {
  width: "300px",
  margin: "200px 40px 0 -40px",
  position: "sticky" as const,
  top: "150px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  height: "100%",
  background: "#393939",
  borderRadius: "15px",
};

const menuBorder = {
  textAlign: "center" as const,
  borderBottom: "1px solid #CFCFCF",
  padding: "24px 0",
};

const fontStyle = (isVisible: boolean) => ({
  color: isVisible ? "white" : "#9B9B9B",
  fontSize: "24px",
  fontWeight: 800,
  cursor: "pointer",
  "&:hover": { color: "white" },
});
