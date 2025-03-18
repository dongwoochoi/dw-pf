/** @jsxImportSource @emotion/react */
import { icons } from "../assets/icon";
import useFixedMenu from "../hooks/useFixedMenu";
import { Tooltip } from "react-tooltip";

export default function FixedMenu() {
  const { isOpen, handleOpen } = useFixedMenu();
  return (
    <div css={wrapper}>
      <div css={iconBox} onClick={handleOpen}>
        <img css={icon} src={icons.kebabMenu} alt="kebabMenu" />
      </div>
      <div
        css={iconButton(isOpen, 144, 0)}
        data-tooltip-id="dropdown-tooltip"
        data-tooltip-content="메일주소 복사하기"
        data-tooltip-variant="light"
      >
        <img css={icon} src={icons.mail} alt="mail" />
      </div>
      <div
        css={iconButton(isOpen, 72, 0)}
        data-tooltip-id="dropdown-tooltip"
        data-tooltip-content="페이지 정보"
        data-tooltip-variant="light"
      >
        <img css={icon} src={icons.spec} alt="spec" />
      </div>
      <div
        css={iconButton(isOpen, 0, 72)}
        data-tooltip-id="dropdown-tooltip"
        data-tooltip-content="최상단으로 이동"
        data-tooltip-variant="light"
      >
        <img css={icon} src={icons.arrowUp} alt="arrowUp" />
      </div>
      <Tooltip
        css={{ zIndex: 10, fontWeight: 600 }}
        id="dropdown-tooltip"
        place="right"
      />
    </div>
  );
}

const wrapper = {
  position: "fixed" as const,
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
  bottom: "40px",
  right: "40px",
};

const iconBox = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  width: "48px",
  height: "48px",
  borderRadius: "40px",
  padding: "8px",
  cursor: "pointer",
  "&:hover": { background: "#CFCFCF", scale: "1.1", transition: "0.3s" },
};

const icon = {
  width: "24px",
  height: "24px",
};

const iconButton = (isOpen: boolean, bottom: number, right: number) => ({
  ...iconBox,
  position: "absolute" as const,
  bottom: isOpen ? bottom : 0,
  right: isOpen ? right : 0,
  zIndex: -1,
  transition: "0.3s",
});
