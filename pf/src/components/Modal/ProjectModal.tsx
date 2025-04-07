/** @jsxImportSource @emotion/react */
import { useAtom } from "jotai";
import { ProjectModalAtom } from "../../jotai/Modal/ProjectModalAtom";
import Modal from "../Modal";
import { icons } from "../../assets/icon";
import { useEffect, useRef } from "react";

export default function ProjectModal() {
  const [alertContent, handleModal] = useAtom(ProjectModalAtom);
  const modalRef = useRef<any>(null);

  const handleClose = () => {
    handleModal(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (!modalRef.current?.contains(event.target)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Modal open={!!alertContent}>
      <section css={wrapper} ref={modalRef}>
        <img css={closeBtn} src={icons.x} onClick={handleClose} alt="close" />
        <div css={topWrapper}>
          <div css={styledContent}>
            <span>{alertContent}</span>
          </div>
        </div>
      </section>
    </Modal>
  );
}

const wrapper = {
  position: "relative" as const,
  width: "1400px",
  height: "800px",
  padding: "40px",
  background: "#2C2C2C",
  borderRadius: "5px",
  boxShadow: "0px 2px 6px 2px #00000026",
  overflowY: "scroll" as const,
};

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

const closeBtn = {
  width: "48px",
  height: "48px",
  position: "absolute" as const,
  right: "24px",
  cursor: "pointer",
};
