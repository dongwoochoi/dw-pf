/** @jsxImportSource @emotion/react */
import useMeasurement from "../../hooks/useMeasurement";
import FadeComponent from "../../components/FadeComponent";
import BoldText from "../../components/Atom/BoldText";
import { useAtom, useSetAtom } from "jotai";
import { boardModalAtom } from "../../jotai/Modal/BoardModalAtom";
import { useEffect, useRef, useState } from "react";
import useResponsive from "../../hooks/useResponsive";
import { toast } from "react-toastify";
import { refAtom } from "../../jotai/refAtom";
import { shouldRefetchAtom } from "../../jotai/shouldRefetchAtom";

export default function Board() {
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  const [needRefetch, setShouldRefetch] = useAtom(shouldRefetchAtom);
  setAtom((prev) => {
    return {
      ...prev,
      boardRef: ref,
    };
  });
  const { isMobile } = useResponsive();
  const { titleFontSizeTransfer, boardSizeConverter } = useMeasurement();
  const setBoardModal = useSetAtom(boardModalAtom);
  const [postList, setPostList] = useState<any>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [maxPage, setMaxPage] = useState<number>(1);
  const pageNumbers = Array.from({ length: maxPage }, (_, i) => i + 1);
  const { fixedMenuTransfer } = useMeasurement();
  const toastMessage = () => {
    toast(
      () => {
        return <div css={toastWrapper}>{"작성이 완료되었습니다."}</div>;
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
          fontSize: `${fixedMenuTransfer().toastFontSize}px`,
        },
      }
    );
  };

  useEffect(() => {
    if (localStorage.getItem("toast") === "true") {
      toastMessage();
      localStorage.setItem("toast", "false");
    }
  }, [needRefetch]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/api/posts/?page=${currentPage}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        setPostList(data.results);
        setMaxPage(data.count / 9 + 1);
        setShouldRefetch(false);
      })
      .catch((err) => console.error("에러:", err));
  }, [currentPage, needRefetch]);

  return (
    <div css={wrapper} ref={ref} id="board">
      <FadeComponent>
        <div>
          <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
            Board
          </BoldText>
          <div
            css={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <div
              css={writeBtn(boardSizeConverter().fontSize.defaultFont)}
              onClick={() => {
                setBoardModal(true);
              }}
            >
              글쓰기
            </div>
          </div>
          <div css={boardLayout(isMobile, boardSizeConverter().layout.gridGap)}>
            {postList?.map((post: any) => {
              return (
                <div css={contextBox}>
                  <p css={textBox(boardSizeConverter().fontSize.defaultFont)}>
                    {post.content}
                  </p>
                  <p
                    css={{
                      color: "#CFCFCF",
                      fontSize: `${boardSizeConverter().fontSize.littleFont}px`,
                    }}
                  >
                    {post.created_at.slice(0, 10).replace(/-/g, ".")}
                  </p>
                  <p
                    css={{
                      fontSize: `${boardSizeConverter().fontSize.littleFont}px`,
                    }}
                  >{`작성자: ${post.writer}`}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div css={pagenationBox}>
          {pageNumbers.map((pageNum, i) => (
            <button
              key={pageNum}
              onClick={() => setCurrentPage(pageNum)}
              css={pagenationBtn(
                currentPage === i + 1,
                boardSizeConverter().fontSize.littleFont,
                boardSizeConverter().layout.pagenationBtnWidth,
                boardSizeConverter().layout.pagenationBtnHeight
              )}
            >
              {pageNum}
            </button>
          ))}
        </div>
      </FadeComponent>
    </div>
  );
}

const wrapper = {
  width: "100%",
  height: "auto",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column" as const,
  alignItems: "center",
  justifyContent: "center",
  fontFamily: "agroL",
};

const titleTextStyle = {
  marginTop: "60px",
};

const writeBtn = (fontSize: number) => ({
  display: "inline-block",
  padding: "4px 8px",
  color: "white",
  borderRadius: "5px",
  marginBottom: "16px",
  // fontSize: `${BoardFontSizeConverter().modalFontSize}px`,
  background: "#727272",
  fontSize: `${fontSize}px`,
  cursor: "pointer",
  "&:hover": { background: "#9B9B9B" },
});

const textBox = (fontSize: number) => ({
  height: "80%",
  color: "white",
  display: "inline-block",
  marginBottom: "16px",
  fontSize: `${fontSize}px`,
});

const pagenationBtn = (
  isSelected: boolean,
  fontSize: number,
  width: number,
  height: number
) => ({
  width: `${width}px`,
  height: `${height}px`,
  borderRadius: "5px",
  color: isSelected ? "black" : "white",
  background: isSelected ? "#FCFCFC" : "#727272",
  fontSize: `${fontSize}px`,
  cursor: "pointer",
  "&:hover": { background: "#9B9B9B" },
});

const pagenationBox = () => ({
  display: "flex",
  justifyContent: "center",
  marginTop: "8px",
  gap: "8px",
});

const contextBox = {
  display: "flex",
  flexDirection: "column" as const,
  background: "#2C2C2C",
  marginBottom: "12px",
  borderRadius: "15px",
  padding: "16px 8px",
};

const boardLayout = (isMobile: boolean, gap: number) => ({
  display: "grid",
  gridTemplateColumns: isMobile ? "repeat(1, 9fr)" : "repeat(3, 1fr)",
  width: "70vw",
  color: "white",
  gap: `${gap}px`,
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
