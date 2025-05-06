/** @jsxImportSource @emotion/react */
import { toast } from "react-toastify";
import { icons } from "../assets/icon";
import useFixedMenu from "../hooks/useFixedMenu";
import { Tooltip } from "react-tooltip";
import useMeasurement from "../hooks/useMeasurement";
import useResponsive from "../hooks/useResponsive";

export default function FixedMenu() {
  const { isMobile } = useResponsive();
  const { fixedMenuTransfer } = useMeasurement();
  const responsiveValue = fixedMenuTransfer();

  const { isOpen, handleOpen } = useFixedMenu();
  const toastMessage = () => {
    toast(
      () => {
        return <div css={toastWrapper}>{"메일 주소가 복사되었습니다."}</div>;
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
          width: "auto",
          minHeight: "5vh",
          backgroundColor: "#727272",
          color: "#fff",
          fontSize: `${responsiveValue.toastFontSize}px`,
          // padding: "0 12px",
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
    <div css={wrapper(isMobile)}>
      <div css={iconBox(responsiveValue.size)} onClick={handleOpen}>
        <img
          css={icon(responsiveValue.icon)}
          src={icons.kebabMenu}
          alt="kebabMenu"
        />
      </div>
      <div
        css={iconButton(
          isOpen,
          responsiveValue.gap * 2,
          0,
          responsiveValue.size
        )}
        onClick={copyToClipboard}
        data-tooltip-id="dropdown-tooltip"
        data-tooltip-content="메일주소 복사하기"
        data-tooltip-variant="light"
      >
        <img css={icon(responsiveValue.icon)} src={icons.mail} alt="mail" />
      </div>
      <div
        css={iconButton(isOpen, responsiveValue.gap, 0, responsiveValue.size)}
        data-tooltip-id="dropdown-tooltip"
        data-tooltip-content="페이지 정보"
        data-tooltip-variant="light"
      >
        <img css={icon(responsiveValue.icon)} src={icons.spec} alt="spec" />
      </div>
      <div
        css={iconButton(isOpen, 0, responsiveValue.gap, responsiveValue.size)}
        onClick={scrollToTop}
        data-tooltip-id="dropdown-tooltip"
        data-tooltip-content="최상단으로 이동"
        data-tooltip-variant="light"
      >
        <img
          css={icon(responsiveValue.icon)}
          src={icons.arrowUp}
          alt="arrowUp"
        />
      </div>
      <Tooltip
        css={{ zIndex: 10, fontWeight: 600 }}
        id="dropdown-tooltip"
        place="right"
        style={{
          fontSize: `${responsiveValue.toastFontSize}px`,
          padding: "10px 14px",
          maxWidth: "180px",
        }}
      />
    </div>
  );
}

const wrapper = (isMobile: boolean) => ({
  position: "fixed" as const,
  display: "flex",
  flexDirection: "column" as const,
  gap: "12px",
  bottom: isMobile ? "16px" : "40px",
  right: isMobile ? "16px" : "40px",
  zIndex: "999",
});

const iconBox = (size: number) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "40px",
  padding: "8px",
  cursor: "pointer",
  "&:hover": { background: "#CFCFCF", scale: "1.1", transition: "0.3s" },
  boxShadow: "0px 2px 6px 2px #00000026",
});

const icon = (size: number) => ({
  width: `${size}px`,
  height: `${size}px`,
});

const iconButton = (
  isOpen: boolean,
  bottom: number,
  right: number,
  size: number
) => ({
  ...iconBox(size),
  position: "absolute" as const,
  bottom: isOpen ? bottom : 0,
  right: isOpen ? right : 0,
  zIndex: -1,
  transition: "0.3s",
});

const toastWrapper = {
  fontFamily: "agroL",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center" as const,
  gap: "8px",
  padding: "8px 16px",
};
