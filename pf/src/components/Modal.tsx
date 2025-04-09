/** @jsxImportSource @emotion/react */
import React, { useEffect } from "react";
import { incrementModal, decrementModal } from "./Modal/ModalManager";
import { createPortal } from "react-dom";

export interface PropTypes {
  open: boolean;
  children: React.ReactNode;
}

export default function Modal({ open, children }: PropTypes) {
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
      <div css={contentWrapper}>{children}</div>
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

const contentWrapper = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "calc(100vw - 16px)",
};
