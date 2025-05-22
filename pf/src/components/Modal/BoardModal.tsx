/* eslint-disable */
/** @jsxImportSource @emotion/react */
import { useAtom, useAtomValue } from "jotai";

import Modal from "../Modal";
import { icons } from "../../assets/icon";
import { useEffect, useRef } from "react";
import useResponsive from "../../hooks/useResponsive";
import useMeasurement from "../../hooks/useMeasurement";
import { boardModalAtom } from "../../jotai/Modal/BoardModalAtom";
import useBoard from "../../hooks/useBoard";
import { isPostFetchingAtom } from "../../jotai/isPostFetchingAtom";
import Spinner from "../Spinner";

export default function BoardModal() {
  const {
    board,
    onChangeWriter,
    onChangeContent,
    isWriterError,
    isContentError,
    writerIsNull,
    contentIsNull,
    submit,
  } = useBoard();
  const { fontSizeTransfer, BoardFontSizeConverter } = useMeasurement();
  const { isMobile } = useResponsive();
  const [alertContent, handleModal] = useAtom(boardModalAtom);
  const modalRef = useRef<any>(null);

  const isFetching = useAtomValue(isPostFetchingAtom);
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
      <section css={wrapper(isMobile)} ref={modalRef}>
        <div css={closeBackground(isMobile)}>
          <img src={icons.x} onClick={handleClose} alt="close" />
        </div>
        <div css={topWrapper}>
          <p css={{ fontSize: fontSizeTransfer(28), marginBottom: "16px" }}>
            코맨트 남기기
          </p>
          <div
            css={inputBoxStyle(
              isWriterError,
              BoardFontSizeConverter().modalFontSize
            )}
          >
            <p
              css={count(isWriterError, BoardFontSizeConverter().errorSize)}
            >{`${board.writer.length} / 20`}</p>
            <input
              type="text"
              required
              css={inputStyle(BoardFontSizeConverter().modalFontSize)}
              onChange={(e) => {
                onChangeWriter(e.target.value);
              }}
            />

            <label css={labelStyle(BoardFontSizeConverter().modalFontSize)}>
              작성자
            </label>
            {isWriterError && (
              <p css={errorText(BoardFontSizeConverter().errorSize)}>
                20자 이내로 작성해주세요.
              </p>
            )}
            {writerIsNull && board.writer.length === 0 && (
              <p css={errorText(BoardFontSizeConverter().errorSize)}>
                필수 입력란 입니다.
              </p>
            )}
          </div>

          <div
            css={inputBoxStyle(
              isContentError,
              BoardFontSizeConverter().modalFontSize
            )}
          >
            <p
              css={count(isContentError, BoardFontSizeConverter().errorSize)}
            >{`${board.content.length} / 100`}</p>
            <textarea
              required
              css={textAreaStyle(BoardFontSizeConverter().modalFontSize)}
              onChange={(e) => {
                onChangeContent(e.target.value);
              }}
            />

            <label css={labelStyle(BoardFontSizeConverter().modalFontSize)}>
              내용
            </label>
            {isContentError && (
              <p css={errorText(BoardFontSizeConverter().errorSize)}>
                100자 이내로 작성해주세요.
              </p>
            )}
            {contentIsNull && board.content.length === 0 && (
              <p css={errorText(BoardFontSizeConverter().errorSize)}>
                필수 입력란 입니다.
              </p>
            )}
          </div>
        </div>
        <div css={{ display: "flex", justifyContent: "center" }}>
          {isFetching ? (
            <Spinner />
          ) : (
            <div
              css={{
                display: "inline-block",
                padding: "4px 8px",
                color: "white",
                borderRadius: "5px",
                fontSize: `${BoardFontSizeConverter().modalFontSize}px`,
                background: "#727272",
                cursor: "pointer",
                "&:hover": { background: "#9B9B9B" },
              }}
              onClick={() => {
                submit(board);
              }}
            >
              등록하기
            </div>
          )}
        </div>
      </section>
    </Modal>
  );
}

const wrapper = (isMobile: boolean) => ({
  position: "relative" as const,
  width: isMobile ? "75%" : "30%",
  minHeight: "360px",
  height: "50%",
  padding: "40px",
  background: "#2B2B2B",
  borderRadius: "5px",
  boxShadow: "0px 2px 6px 2px #00000026",
});

const topWrapper = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "24px",
  marginBottom: "40px",
  color: "white",
  fontFamily: "agroL",
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

const inputStyle = (fontSize: number) => ({
  width: "100%",
  height: "35px",
  background: "transparent",
  border: "none",
  outline: "none",
  fontSize: `${fontSize}px`,
  lineHeight: "1.2em",
  padding: "8px 0",
  color: "white",
  "&:focus ~ label, &:valid ~ label": {
    top: "-10px",
    fontSize: `${fontSize - 2}px`,
  },
});

const textAreaStyle = (fontSize: number) => ({
  width: "100%",
  height: "35px",
  background: "transparent",
  border: "none",
  outline: "none",
  fontSize: `${fontSize}px`,
  lineHeight: "1.2em",
  padding: "8px 0",
  resize: "none" as const,
  color: "white",
  "&:focus ~ label, &:valid ~ label": {
    top: "-10px",
    fontSize: `${fontSize - 2}px`,
  },
  "::-webkit-scrollbar": {
    width: "1px",
  },
  "::-webkit-scrollbar-track": {
    background: "#2C2C2C",
  },
  "::-webkit-scrollbar-thumb": {
    borderRadius: "4px",
  },
});

const labelStyle = (fontSize: number) => ({
  position: "absolute" as const,
  top: "20px", // baseline 기준 위치
  left: "0px",
  transform: "translateY(-50%)",
  fontSize: `${fontSize}px`,
  pointerEvents: "none" as const,
  transition: "0.4s",
  color: "white",
});

const inputBoxStyle = (isError: boolean, fontSize: number) => ({
  position: "relative" as const,
  width: "100%",
  height: "auto",
  borderBottom: isError ? "2px solid #FF334B" : "2px solid white",
  marginTop: "30px",
  fontSize: `${fontSize}px`,
});

const count = (isError: boolean, fontSize: number) => ({
  position: "absolute" as const,
  top: "120%",
  right: "0px",
  color: isError ? "#FF334B" : "white",
  fontSize: `${fontSize}px`,
  fontFamily: "agorL",
});

const errorText = (fontSize: number) => ({
  position: "absolute" as const,
  top: "120%",
  color: "#FF334B",
  fontSize: `${fontSize}px`,
  fontFamily: "none",
});
