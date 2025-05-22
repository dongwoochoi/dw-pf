/** @jsxImportSource @emotion/react */

import { useEffect, useRef, useState } from "react";
import { endPageImg, MainImage } from "../../assets/img";
import useMeasurement from "../../hooks/useMeasurement";
import FadeComponent from "../../components/FadeComponent";
import { useAtom, useSetAtom } from "jotai";
import { isEndPageAtom } from "../../jotai/isEndPageAtom";
import { Tooltip } from "react-tooltip";
import { icons } from "../../assets/icon";
import { toast } from "react-toastify";
import { introduceAtom } from "../../jotai/Modal/introduceModalAtom";
import useResponsive from "../../hooks/useResponsive";

export default function EndPage() {
  const { isMobile } = useResponsive();
  const { endSizeConverter } = useMeasurement();
  const [showFirst, setShowFirst] = useState(true);
  const { fixedMenuTransfer } = useMeasurement();
  const responsiveValue = fixedMenuTransfer();
  const [isModalOpen, handleModalOpen] = useAtom(introduceAtom);
  const endRef = useRef<HTMLDivElement | null>(null);
  const setIsEndVisible = useSetAtom(isEndPageAtom);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      await navigator.clipboard.writeText("dong99woo@gmail.com");
      toastMessage();
    } catch (err) {
      toast.error("복사에 실패했습니다.");
    }
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsEndVisible(entry.intersectionRatio >= 0.4);
      },
      {
        threshold: [0, 0.4, 1.0],
      }
    );

    if (endRef.current) {
      observer.observe(endRef.current);
    }

    return () => {
      if (endRef.current) {
        observer.unobserve(endRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div css={wrapper(isMobile)} ref={endRef}>
      <FadeComponent>
        <div css={layout}>
          <img
            css={imgStyle(endSizeConverter().width, endSizeConverter().height)}
            src={showFirst ? endPageImg.bye1 : endPageImg.bye2}
            alt="toggle"
          />
          <p css={titleTextStyle(endSizeConverter().fontSize)}>
            봐주셔서 감사합니다!
          </p>
        </div>
      </FadeComponent>

      <div css={btnWrapper(endSizeConverter().height, isMobile)}>
        <div css={isMobile ? mobileExplain : {}}>
          <div
            css={iconBox(responsiveValue.size)}
            onClick={() => {
              window.open("https://github.com/dongwoochoi");
            }}
            data-tooltip-id="dropdown-tooltip"
            data-tooltip-content="깃허브 바로가기"
            data-tooltip-variant="light"
          >
            <img
              css={icon(responsiveValue.icon)}
              src={icons.github}
              alt="github"
            />
          </div>
          {isMobile && (
            <p css={{ color: "black", fontSize: "8px", fontFamily: "agroL" }}>
              깃허브 바로가기
            </p>
          )}
        </div>
        <div css={isMobile ? mobileExplain : {}}>
          <div
            css={iconBox(responsiveValue.size)}
            onClick={copyToClipboard}
            data-tooltip-id="dropdown-tooltip"
            data-tooltip-content="메일주소 복사하기"
            data-tooltip-variant="light"
          >
            <img css={icon(responsiveValue.icon)} src={icons.mail} alt="main" />
          </div>
          {isMobile && (
            <p css={{ color: "black", fontSize: "8px", fontFamily: "agroL" }}>
              메일주소 복사
            </p>
          )}
        </div>
        <div css={isMobile ? mobileExplain : {}}>
          <div
            css={iconBox(responsiveValue.size)}
            onClick={() => {
              handleModalOpen(!isModalOpen);
            }}
            data-tooltip-id="dropdown-tooltip"
            data-tooltip-content="페이지 정보"
            data-tooltip-variant="light"
          >
            <img css={icon(responsiveValue.icon)} src={icons.spec} alt="spec" />
          </div>
          {isMobile && (
            <p css={{ color: "black", fontSize: "8px", fontFamily: "agroL" }}>
              페이지 정보
            </p>
          )}
        </div>

        <div css={isMobile ? mobileExplain : {}}>
          <div
            css={iconBox(responsiveValue.size)}
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
          {isMobile && (
            <p css={{ color: "black", fontSize: "8px", fontFamily: "agroL" }}>
              최상단으로 이동
            </p>
          )}
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
      <p
        css={{
          position: "absolute",
          bottom: "0",
          color: "#727272",
          fontFamily: "agroL",
          marginBottom: "8px",
        }}
      >
        © 2025. 최동우 All rights reserved
      </p>
    </div>
  );
}

const wrapper = (isMobile: boolean) => ({
  position: "relative" as const,
  width: "100%",
  minHeight: "100vh",
  height: "auto",
  maxHeight: "150vh",
  gap: "40px",
  display: "flex",
  flexDirection: isMobile ? ("column" as const) : ("row" as const),
  alignItems: "center",
  justifyContent: "center",
  backgroundImage: `url(${MainImage.MainBackground})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
});

const layout = {
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
};

const titleTextStyle = (fontSize: number) => ({
  fontFamily: "agroL",
  fontSize: `${fontSize}px`,
  fontWeight: "800",
  marginTop: "60px",
});

const imgStyle = (width: number, height: number) => ({
  width: `${width}px`,
  height: `${height}px`,
});

const icon = (size: number) => ({
  width: `${size}px`,
  height: `${size}px`,
});

const iconBox = (size: number) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  background: "white",
  width: `${size}px`,
  height: `${size}px`,
  borderRadius: "40px",
  cursor: "pointer",
  "&:hover": { background: "#CFCFCF", scale: "1.1", transition: "0.3s" },
  boxShadow: "0px 2px 6px 2px #00000026",
});

const btnWrapper = (height: number, isMobile: boolean) => ({
  position: isMobile ? ("relative" as const) : ("absolute" as const),
  right: isMobile ? "" : "10%",
  bottom: isMobile ? "" : "30%",
  height: `${height}px`,
  display: "flex",
  flexDirection: isMobile ? ("row" as const) : ("column" as const),
  justifyContent: "space-around",
  gap: "16px",
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

const mobileExplain = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
};
