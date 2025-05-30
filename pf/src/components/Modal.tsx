/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { incrementModal, decrementModal } from "./Modal/ModalManager";
import { createPortal } from "react-dom";
import useResponsive from "../hooks/useResponsive";

export interface PropTypes {
  open: boolean;
  children: React.ReactNode;
}

export default function Modal({ open, children }: PropTypes) {
  const { isMobile } = useResponsive();
  useEffect(() => {
    if (open) {
      incrementModal();
      return () => {
        decrementModal();
      };
    }
  }, [open]);

  if (!open) return null;

  return createPortal(
    <div css={modalWrapper}>
      <div css={contentWrapper(isMobile)}>{children}</div>
    </div>,
    document.body
  );
}

const modalWrapper = {
  position: "fixed" as const,
  top: "0",
  left: "0",
  zIndex: "999",
  display: "flex",
  width: "100%",
  height: "100%",
  backgroundColor: `rgba(0, 0, 0, 0.5)`,
};

const contentWrapper = (isMobile: boolean) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: isMobile ? "100vw" : "calc(100vw - 16px)",
});
