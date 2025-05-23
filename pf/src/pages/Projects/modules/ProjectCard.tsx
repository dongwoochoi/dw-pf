/** @jsxImportSource @emotion/react */

import { useState } from "react";
import useProjectModal from "../../../hooks/useProjectModal";
import { PROJECT_MODAL_STRUCTURE } from "../structure";
import useMeasurement from "../../../hooks/useMeasurement";
import useResponsive from "../../../hooks/useResponsive";

interface PropsType {
  title: string;
  team: string;
  text: string;
  tag: string[];
  img: string;
}

export default function ProjectCard({
  title,
  team,
  text,
  tag,
  img,
}: PropsType) {
  const { isMobile } = useResponsive();
  const { projectSizeConverter, projectFontSizeConverter } = useMeasurement();
  const [isHover, setIsHover] = useState<boolean>(false);
  const { setProjectModal } = useProjectModal();

  const modalJSX = PROJECT_MODAL_STRUCTURE.find((item) => item.title === title)
    ?.jsx ?? <div>null</div>;

  return (
    <div
      css={{
        width: projectSizeConverter().width,
        height: projectSizeConverter().width,
      }}
      onMouseEnter={isMobile ? () => {} : () => setIsHover(true)}
      onPointerLeave={isMobile ? () => {} : () => setIsHover(false)}
    >
      <div
        css={hoverSection(
          isHover,
          projectSizeConverter().width,
          projectSizeConverter().hoverHeight + 5
        )}
      >
        <p css={hoverTitle(projectFontSizeConverter().title)}>{title}</p>
        <p css={hoverText(projectFontSizeConverter().text)}>자세히 보기</p>
      </div>

      <div css={wrapper(projectSizeConverter().width)}>
        <div
          css={imgSection(
            img,
            isHover,
            projectSizeConverter().width,
            projectSizeConverter().hoverHeight
          )}
          onClick={() => {
            setProjectModal(modalJSX);
          }}
        ></div>
        <div css={explainSection}>
          <div css={textSection}>
            <p css={titleStyle(projectFontSizeConverter().title)}>{title}</p>
            <p css={teamStyle(projectFontSizeConverter().text)}>
              at
              <p
                css={{
                  color: "#DCDBD1",
                  fontFamily: "agroM",
                  borderBottom: "1px solid white",
                  // fontSize: `${projectFontSizeConverter().text + 2}px`,
                }}
              >
                {team}
              </p>
            </p>
            <p
              css={textStyle(
                projectFontSizeConverter().text,
                projectFontSizeConverter().lineHeight
              )}
            >
              {text}
            </p>
          </div>
          <div css={tagBox}>
            {tag.map((item) => {
              return (
                <div
                  css={tagStyle(
                    projectFontSizeConverter().text,
                    projectFontSizeConverter().tagPadding
                  )}
                  key={item}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const wrapper = (width: number) => ({
  display: "flex",
  padding: "4px",
  flexDirection: "column" as const,
  width: `${width}px`,
  height: `${width}px`,
  borderRadius: "5px",
  background: "#4B4B4B",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
  boxSizing: "border-box" as const,
});

const imgSection = (
  img: string,
  isHover: boolean,
  width: number,
  height: number
) => ({
  width: `${width - 8}px`,
  minHeight: `${height}px`,
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  filter: isHover ? "blur(5px)" : "",
  cursor: "pointer",
});

const explainSection = {
  height: "50%",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-around",
  padding: "8px 16px",
};

const textSection = {
  color: "white",
};

const titleStyle = (fontSize: number) => ({
  fontFamily: "agro",
  fontSize: `${fontSize}px`,
});

const teamStyle = (fontSize: number) => ({
  display: "flex",
  gap: "8px",
  fontSize: `${fontSize}px`,
  marginBottom: "16px",
});

const tagBox = {
  display: "flex",
  gap: "8px",
  flexWrap: "wrap" as const,
};

const tagStyle = (fontSize: number, padding: string) => ({
  padding,
  background: "#6D6D6D",
  color: "#EAEAEA",
  borderRadius: "5px",
  fontSize: `${fontSize}px`,
  fontFamily: "agroL",
  boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
});

const hoverText = (fontSize: number) => ({
  fontFamily: "agro",
  fontSize: `${fontSize}px`,
  fontWeight: "600",
});

const hoverSection = (isHover: boolean, width: number, height: number) => ({
  width: `${width}px`,
  height: `${height}px`,
  padding: "8px",
  display: isHover ? "flex" : "none",
  color: "white",
  position: "absolute" as const,
  top: "0",
  zIndex: "1",
  pointerEvents: "none" as const,
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  gap: "16px",
  borderRadius: "5px",
  background: "rgba(0, 0, 0, 0.5)",
});

const hoverTitle = (fontSize: number) => ({
  color: "white",
  fontFamily: "agro",
  fontSize: `${fontSize}px`,
  fontWeight: "600",
  textAlign: "center" as const,
});

const textStyle = (fontSize: number, lineHeight: string) => ({
  fontSize: `${fontSize}px`,
  lineHeight,
});
