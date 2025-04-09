/** @jsxImportSource @emotion/react */
import { useAtom } from "jotai";
import { ImageModalAtom } from "../../jotai/Modal/imageModalAtom";
import Modal from "../Modal";
import { icons } from "../../assets/icon";
import { useEffect, useRef } from "react";
import { modalDepthAtom } from "../../jotai/modalDepthAtom";

export default function ImageModal() {
  const [alertContent, handleModal] = useAtom(ImageModalAtom);
  const imgModalRef = useRef<any>(null);
  const [depth, setDepth] = useAtom(modalDepthAtom);

  const handleClose = () => {
    handleModal(null);
  };

  useEffect(() => {
    alertContent ? setDepth(2) : setDepth(1);
  }, [alertContent]);

  const handleClickOutside = (e: MouseEvent) => {
    if (depth !== 2) return;
    if (!imgModalRef.current?.contains(e.target)) {
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
      <section css={wrapper} ref={imgModalRef}>
        <div css={closeBackground}>
          <img css={closeBtn} src={icons.x} onClick={handleClose} alt="close" />
        </div>
        <div css={topWrapper}>
          <div css={styledContent}>
            <img src={alertContent as string} alt="modalImg" />
          </div>
        </div>
      </section>
    </Modal>
  );
}

const wrapper = {
  position: "relative" as const,
  width: "1400px",
  height: "auto",
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

const styledContent = {
  whiteSpace: "pre-wrap" as const,
  wordBreak: "keep-all" as const,
};

const closeBtn = {
  width: "48px",
  height: "48px",
};

const closeBackground = {
  position: "absolute" as const,
  cursor: "pointer",
  top: "60px",
  right: "60px",
  zIndex: "5",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "52px",
  height: "52px",
  background: "#6B6B6B",
  borderRadius: "50px",
};
