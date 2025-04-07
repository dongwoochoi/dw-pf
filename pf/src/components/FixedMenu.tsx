/** @jsxImportSource @emotion/react */
import { toast } from "react-toastify";
import { icons } from "../assets/icon";
import useFixedMenu from "../hooks/useFixedMenu";
import { Tooltip } from "react-tooltip";

export default function FixedMenu() {
  const { isOpen, handleOpen } = useFixedMenu();
  const toastMessage = () => {
    toast(
      () => {
        return <div css={toastWrapper}>{"메일주소가 복사되었습니다."}</div>;
      },
      {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: true,
        closeOnClick: true,
        closeButton: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        style: {
          width: "250px",
          height: "10px",
          backgroundColor: "#727272",
          color: "#fff",
          fontSize: "16px",
          // padding: "12px 8px",
        },
      }
    );
  };
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText("dong99woo@gmail.com");
      toastMessage();
    } catch (err) {
      toast.error("복사에 실패했습니다.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div css={wrapper}>
      <div css={iconBox} onClick={handleOpen}>
        <img css={icon} src={icons.kebabMenu} alt="kebabMenu" />
      </div>
      <div
        css={iconButton(isOpen, 144, 0)}
        onClick={copyToClipboard}
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
        onClick={scrollToTop}
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
  width: "60px",
  height: "60px",
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

const toastWrapper = {
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center" as const,
  gap: "8px",
};
