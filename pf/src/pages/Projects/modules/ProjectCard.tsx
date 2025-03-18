/** @jsxImportSource @emotion/react */

import { useState } from "react";
import useProjectModal from "../../../hooks/useProjectModal";
import { PROJECT_MODAL_STRUCTURE } from "../structure";

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
  const [isHover, setIsHover] = useState<boolean>(false);
  const { setProjectModal } = useProjectModal();

  const modalJSX = PROJECT_MODAL_STRUCTURE.find((item) => item.title === title)
    ?.jsx ?? <div>null</div>;

  return (
    <div
      onMouseEnter={() => setIsHover(true)}
      onPointerLeave={() => setIsHover(false)}
    >
      <div css={hoverSection(isHover)}>
        <p css={hoverTitle}>{title}</p>
        <p css={hoverText}>자세히 보기</p>
      </div>

      <div css={wrapper}>
        <div
          css={imgSection(img, isHover)}
          onClick={() => {
            setProjectModal(modalJSX);
          }}
        ></div>
        <div css={explainSection}>
          <div css={textSection}>
            <p css={titleStyle}>{title}</p>
            <p css={teamStyle}>{`at ${team}`}</p>
            <p>{text}</p>
          </div>
          <div css={tagBox}>
            {tag.map((item) => {
              return (
                <div css={tagStyle} key={item}>
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

const wrapper = {
  display: "flex",
  flexDirection: "column" as const,
  width: "500px",
  height: "500px",
  borderRadius: "5px",
  background: "#4B4B4B",
};

const imgSection = (img: string, isHover: boolean) => ({
  width: "500px",
  height: "250px",
  backgroundImage: `url(${img})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  filter: isHover ? "blur(5px)" : "",
  cursor: "pointer",
});

const explainSection = {
  height: "250px",
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "space-around",
  padding: "8px 16px",
};

const textSection = {
  color: "white",
};

const titleStyle = {
  fontFamily: "agro",
  fontSize: "32px",
};

const teamStyle = {
  marginBottom: "16px",
};

const tagBox = {
  display: "flex",
  gap: "8px",
};

const tagStyle = {
  padding: "4px",
  background: "#5E5E5E",
  color: "white",
  border: "1px solid white",
  borderRadius: "5px",
};

const hoverText = {
  fontFamily: "agro",
  fontSize: "16px",
  fontWeight: "600",
};

const hoverSection = (isHover: boolean) => ({
  width: "500px",
  height: "250px",
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

const hoverTitle = {
  color: "white",
  fontFamily: "agro",
  fontSize: "32px",
  fontWeight: "600",
  textAlign: "center" as const,
};
