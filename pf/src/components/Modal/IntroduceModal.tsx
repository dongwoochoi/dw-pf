/** @jsxImportSource @emotion/react */
import { useAtom } from "jotai";

import Modal from "../Modal";
import { icons } from "../../assets/icon";
import { useEffect, useRef } from "react";
import useResponsive from "../../hooks/useResponsive";
import { introduceAtom } from "../../jotai/Modal/introduceModalAtom";
import useMeasurement from "../../hooks/useMeasurement";

export default function IntroduceModal() {
  const { fontSizeTransfer } = useMeasurement();
  const { isMobile } = useResponsive();
  const [alertContent, handleModal] = useAtom(introduceAtom);
  const modalRef = useRef<any>(null);
  const handleClose = () => {
    handleModal(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!modalRef.current?.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Modal open={!!alertContent}>
      <section css={wrapper} ref={modalRef}>
        <div css={closeBackground(isMobile)}>
          <img src={icons.x} onClick={handleClose} alt="close" />
        </div>
        <div css={topWrapper}>
          <div css={styledContent}>
            <div css={explainWrapper}>
              <p css={{ fontSize: fontSizeTransfer(28), marginBottom: "16px" }}>
                페이지 정보
              </p>
              <p css={{ fontSize: fontSizeTransfer(20) }}>
                최종 수정일: 2025.05.14
              </p>
              <pre css={{ fontSize: fontSizeTransfer(20) }}>
                {`사용 기술 스택: 
                React
                TypeScript
                Emotion
                Jotai
                그외 리엑트 라이브러리`}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
}

const wrapper = {
  position: "relative" as const,
  width: "auto",
  minHeight: "360px",
  height: "auto",
  padding: "40px",
  background: "transparent",
  borderRadius: "5px",
  boxShadow: "0px 2px 6px 2px #00000026",
};

const topWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "24px",
  marginBottom: "40px",
};

const styledContent = {
  whiteSpace: "pre-wrap" as const,
  wordBreak: "keep-all" as const,
  color: "white",
  fontFamily: "agro",
};

const closeBackground = (isMobile: boolean) => ({
  position: "absolute" as const,
  cursor: "pointer",
  right: "36px",
  zIndex: "5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50px",
});

const explainWrapper = {
  width: "auto",
  height: "100%",
  borderRadius: "5px",
  padding: "32px",
  background: "#727272",
};
