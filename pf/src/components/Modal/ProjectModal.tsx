/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { useAtom } from "jotai";
import { ProjectModalAtom } from "../../jotai/Modal/ProjectModalAtom";
import Modal from "../Modal";
import { icons } from "../../assets/icon";
import { useEffect, useRef } from "react";
import { modalDepthAtom } from "../../jotai/modalDepthAtom";
import useResponsive from "../../hooks/useResponsive";

export default function ProjectModal() {
  const { isMobile } = useResponsive();
  const [alertContent, handleModal] = useAtom(ProjectModalAtom);
  const modalRef = useRef<any>(null);
  const [depth, setDepth] = useAtom(modalDepthAtom);
  const handleClose = () => {
    handleModal(null);
  };

  useEffect(() => {
    setDepth(1);
  }, [alertContent]);

  const handleClickOutside = (e: MouseEvent) => {
    if (depth !== 1) return;
    if (!modalRef.current?.contains(e.target)) {
      handleClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [depth]);

  return (
    <Modal open={!!alertContent}>
      <section css={wrapper(isMobile)} ref={modalRef}>
        <img
          css={closeBtn(isMobile)}
          src={icons.x}
          onClick={handleClose}
          alt="close"
        />
        <div css={topWrapper}>
          <div css={styledContent}>
            <span>{alertContent}</span>
          </div>
        </div>
      </section>
    </Modal>
  );
}

const wrapper = (isMobile: boolean) => ({
  position: "relative" as const,
  width: isMobile ? "100vw" : `80vw`,
  height: isMobile ? "100vh" : `80vh`,
  padding: isMobile ? "16px" : "40px",
  background: "#2c2c2c",
  borderRadius: "5px",
  boxShadow: "0px 2px 6px 2px #00000026",
  overflowY: "scroll" as const,

  /* 스크롤바 커스텀 */
  "&::-webkit-scrollbar": {
    width: "8px",
  },

  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#888",
    borderRadius: "4px",
  },

  "&::-webkit-scrollbar-track:": {
    backgroundColor: "transparent",
  },
});

const topWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "24px",
  marginBottom: "40px",
};

// const styledTitle = {};

const styledContent = {
  whiteSpace: "pre-wrap" as const,
  wordBreak: "keep-all" as const,
};

const closeBtn = (isMobile: boolean) => ({
  width: isMobile ? "24px" : "48px",
  height: isMobile ? "24px" : "48px",
  position: "sticky" as const,
  top: "0%",
  left: "95%",
  cursor: "pointer",
  background: "#BFBFBF",
  borderRadius: "24px",
  zIndex: 999,
});
