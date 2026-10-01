/** @jsxImportSource @emotion/react */
import { toast } from "react-toastify";
import { icons } from "../assets/icon";
import useFixedMenu from "../hooks/useFixedMenu";
import { Tooltip } from "react-tooltip";
import useMeasurement from "../hooks/useMeasurement";
import useResponsive from "../hooks/useResponsive";
import { useAtom, useAtomValue } from "jotai";
import { introduceAtom } from "../jotai/Modal/introduceModalAtom";
import { isEndPageAtom } from "../jotai/isEndPageAtom";
import { CONTACT_EMAIL } from "../constants/contact";
import { themeAtom } from "../jotai/themeAtom";

export default function FixedMenu() {
  const { isMobile } = useResponsive();
  const isEnd = useAtomValue(isEndPageAtom);
  const { fixedMenuTransfer } = useMeasurement();
  const responsiveValue = fixedMenuTransfer();
  const [isModalOpen, handleModalOpen] = useAtom(introduceAtom);
  const { isOpen, handleOpen } = useFixedMenu();
  const [theme, setTheme] = useAtom(themeAtom);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
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
      await navigator.clipboard.writeText(CONTACT_EMAIL);
      toastMessage();
    } catch (err) {
      toast.error("복사에 실패했습니다.");
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div css={wrapper(isMobile, isEnd)}>
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
        onClick={() => {
          handleModalOpen(!isModalOpen);
        }}
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
      <div
        css={iconButton(
          isOpen,
          0,
          responsiveValue.gap * 2,
          responsiveValue.size
        )}
        onClick={toggleTheme}
        data-tooltip-id="dropdown-tooltip"
        data-tooltip-content={
          theme === "dark" ? "라이트 모드로 전환" : "다크 모드로 전환"
        }
        data-tooltip-variant="light"
      >
        <span css={themeIcon(responsiveValue.icon)}>
          {theme === "dark" ? "☀️" : "🌙"}
        </span>
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

const wrapper = (isMobile: boolean, isEnd: boolean) => ({
  position: "fixed" as const,
  display: isEnd ? "none" : "flex",
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
  background: "var(--fab-bg)",
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "40px",
  cursor: "pointer",
  "&:hover": {
    background: "var(--fab-bg-hover)",
    scale: "1.1",
    transition: "0.3s",
  },
  boxShadow: "0px 2px 6px 2px var(--shadow-color)",
});

const icon = (size: number) => ({
  width: `${size}px`,
  height: `${size}px`,
});

const themeIcon = (size: number) => ({
  fontSize: `${size * 0.7}px`,
  lineHeight: 1,
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
