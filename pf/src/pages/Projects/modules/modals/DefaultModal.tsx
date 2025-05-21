/** @jsxImportSource @emotion/react */
import { useSetAtom } from "jotai";
import BorderBottomTitle from "../../../../components/Atom/BorderBottomTitle";
import LightText from "../../../../components/Atom/LightText";
import MediumText from "../../../../components/Atom/MediumText";
import { ImageModalAtom } from "../../../../jotai/Modal/imageModalAtom";
import useMeasurement from "../../../../hooks/useMeasurement";
import useResponsive from "../../../../hooks/useResponsive";

interface PropsType {
  oneLineIntroduce: string;
  title: string;
  status: string;
  tags: string[];
  introducingText: string;
  introducingImg?: {
    title: string;
    img: string;
  }[];
  mainFunction: {
    workCategory: string;
    workedContend: string[];
    atTroubleShooting?: boolean;
  }[];
  troubleShooting?: {
    title: string;
    problem: string;
    solution: string;
  }[];
  learned: string;
}

export default function DefaultModal({
  title,
  oneLineIntroduce,
  status,
  tags,
  introducingText,
  introducingImg,
  mainFunction,
  troubleShooting,
  learned,
}: PropsType) {
  const colors = [
    "#D94F4F",
    "#E08A3C",
    "#D4AF37",
    "#319B42",
    "#1E9B7A",
    "#2A7DC6",
    "#4A5BB5",
    "#A54EB5",
    "#5A6168",
    "#3E4349",
  ];
  const { isMobile } = useResponsive();
  const { projectModalSizeConverter } = useMeasurement();
  const handleImgModalAtom = useSetAtom(ImageModalAtom);

  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const shuffledColors = shuffleArray(colors);

  const handleImgModal = (img: string) => {
    handleImgModalAtom(img);
  };

  return (
    <div css={wrapper}>
      <p css={titleStyle(projectModalSizeConverter().font.title)}>{title}</p>
      <div
        css={header(projectModalSizeConverter().headerMarginBottom, isMobile)}
      >
        <div css={leftHeader(projectModalSizeConverter().headerGap)}>
          <LightText css={{ whiteSpace: "nowrap" }}>한줄 소개</LightText>
          <LightText css={{ whiteSpace: "nowrap" }}>진행상태</LightText>
          <LightText css={{ whiteSpace: "nowrap" }}>기술 태그</LightText>
        </div>
        <div css={rightHeader(projectModalSizeConverter().headerGap)}>
          <LightText>{oneLineIntroduce}</LightText>
          <LightText> {status}</LightText>
          <div css={tagBox}>
            {tags?.map((item, index) => {
              return (
                <div
                  key={item}
                  css={tagStyle(
                    shuffledColors[index],
                    projectModalSizeConverter().tag,
                    isMobile
                  )}
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div css={content(isMobile)}>
        <div css={introduce}>
          <BorderBottomTitle size={projectModalSizeConverter().font.boldSize}>
            소개
          </BorderBottomTitle>
          <div css={contentTextBox(isMobile)}>
            <LightText>{introducingText}</LightText>
          </div>
        </div>
      </div>
      <div css={content(isMobile)}>
        <div css={introduce}>
          <BorderBottomTitle size={projectModalSizeConverter().font.boldSize}>
            주요 작업 내용
          </BorderBottomTitle>
          <div css={contentTextBox(isMobile)}>
            {mainFunction.map((item) => {
              return (
                <div key={item.workCategory}>
                  <div
                    css={categoryStyle(
                      projectModalSizeConverter().font.category,
                      isMobile
                    )}
                  >
                    <p>{item.workCategory}</p>
                    {item.atTroubleShooting ? (
                      <p
                        css={{
                          position: "absolute",
                          right: "1%",
                          bottom: "20%",
                          fontSize: `${
                            isMobile
                              ? 8
                              : projectModalSizeConverter().font.category - 8
                          }px`,
                        }}
                      >
                        * 자세한 내용 TroubleShooting에 작성
                      </p>
                    ) : null}
                  </div>
                  <ul
                    css={{
                      marginLeft: "40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: isMobile ? "4px" : "8px",
                    }}
                  >
                    {item.workedContend.map((text) => {
                      if (text === "") {
                        return (
                          <div
                            css={{ marginBottom: isMobile ? "8px" : "16px" }}
                          >
                            {text}
                          </div>
                        );
                      }
                      return (
                        <li>
                          <LightText>{text}</LightText>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
        {troubleShooting ? (
          <div css={introduce}>
            <BorderBottomTitle size={projectModalSizeConverter().font.boldSize}>
              트러블 슈팅
            </BorderBottomTitle>
            <div css={contentTextBox(isMobile)}>
              {troubleShooting?.map((item) => {
                return (
                  <div
                    css={{
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <div
                      css={categoryStyle(
                        projectModalSizeConverter().font.category,
                        isMobile
                      )}
                    >
                      {item.title}
                    </div>
                    <div css={{ marginLeft: "20px" }}>
                      <div css={troubleContent}>
                        <MediumText
                          css={{ whiteSpace: "nowrap", flexShrink: 0 }}
                        >
                          [문제 상황]
                        </MediumText>
                        <LightText>{item.problem}</LightText>
                      </div>
                      <div css={{ ...troubleContent, marginTop: "8px" }}>
                        <MediumText
                          css={{ whiteSpace: "nowrap", flexShrink: 0 }}
                        >
                          [해결 방법]
                        </MediumText>
                        <LightText>{item.solution}</LightText>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : null}

        {learned ? (
          <div css={introduce}>
            <BorderBottomTitle size={projectModalSizeConverter().font.boldSize}>
              느낀점
            </BorderBottomTitle>
            <ul
              css={{
                marginTop: "16px",
                marginLeft: "40px",
              }}
            >
              <li>
                <LightText>{learned}</LightText>
              </li>
            </ul>
          </div>
        ) : null}
        <div css={introduce}>
          <BorderBottomTitle size={projectModalSizeConverter().font.boldSize}>
            관련 사진
          </BorderBottomTitle>
          <div css={imgContainer}>
            {introducingImg?.map((item) => {
              return (
                <div css={imgContent}>
                  <img
                    css={imgStyle(isMobile)}
                    src={item.img}
                    onClick={() => {
                      handleImgModal(item.img);
                    }}
                    alt={item.title}
                  />
                  <p css={imgTitle(projectModalSizeConverter().font.imgTitle)}>
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

const wrapper = {
  lineHeight: 1.5,
};
const header = (marginBottom: number, isMobile: boolean) => ({
  display: "flex",
  flexDirection: "row" as const,
  gap: isMobile ? "24px" : "60px",
  paddingBottom: "16px",
  borderBottom: "1px solid #727272",
  marginBottom: `${marginBottom}px`,
});

const leftHeader = (gap: number) => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: `${gap}px`,
  fontFamily: "agro",
  fontSize: "24px",
  color: "white",
  justifyContent: "center",
});

const rightHeader = (gap: number) => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: `${gap}px`,
  fontFamily: "agro",
  fontSize: "24px",
  color: "white",
  justifyContent: "flex-start",
});

const titleStyle = (fontSize: number) => ({
  fontFamily: "agro",
  color: "white",
  fontSize: `${fontSize}px`,
  marginBottom: "16px",
  lineHeight: "36px",
});

const content = (isMobile: boolean) => ({
  display: "flex",
  flexDirection: "column" as const,
  gap: "40px",
  padding: isMobile ? "4px" : "16px",
});

const contentTextBox = (isMobile: boolean) => ({
  padding: isMobile ? "8px" : "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: isMobile ? "16px" : "40px",
});

const tagBox = {
  display: "flex",
  flexDirection: "row" as const,
  flexWrap: "wrap" as const,
  width: "73vw",
  gap: "8px",
};
const tagStyle = (
  color: string,
  tag: { fontSize: number; padding: number; height: number },
  isMobile: boolean
) => ({
  padding: `${tag.padding}px`,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: "auto",
  height: `${tag.height}px`,
  fontSize: `${tag.fontSize}px`,
  fontFamily: "agroM",
  background: color,
  borderRadius: isMobile ? "3px" : "5px",
});

const introduce = {};

const categoryStyle = (fontSize: number, isMobile: boolean) => ({
  display: "flex",
  flexDirection: "row" as const,
  position: "relative" as const,
  alignItems: "flex-end",
  color: "white",
  fontSize: `${fontSize}px`,
  fontWeight: "600",
  padding: "8px",
  background: "#717172",
  marginBottom: isMobile ? "8px" : "16px",
  fontFamily: "agroL",
});

const troubleContent = {
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
};

const imgContainer = {
  marginTop: "16px",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap" as const,
  gap: "16px",
};

const imgContent = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "8px",
};

const imgStyle = (isMobile: boolean) => ({
  width: isMobile ? "327px" : "400px",
  height: isMobile ? "155px" : "190px",
  cursor: "pointer",
  "&:hover": { filter: "brightness(1.2)" },
});

const imgTitle = (size: number) => ({
  color: "white",
  textAlign: "center" as const,
  fontSize: `${size}px`,
});
