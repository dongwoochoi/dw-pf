/** @jsxImportSource @emotion/react */
import BorderBottomTitle from "../../../../components/Atom/BorderBottomTitle";
import LightText from "../../../../components/Atom/LightText";
import MediumText from "../../../../components/Atom/MediumText";

interface PropsType {
  oneLineIntroduce: string;
  title: string;
  status: string;
  tags: string[];
  introducingText: string;
  introducingImg?: string[];
  mainFunction: {
    workCategory: string;
    workedContend: string[];
  }[];
  troubleShooting: {
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

  const shuffleArray = (array: string[]) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  const shuffledColors = shuffleArray(colors);

  return (
    <div css={wrapper}>
      <p css={titleStyle}>{title}</p>
      <div css={header}>
        <div css={leftHeader}>
          <LightText>한줄 소개</LightText>
          <LightText>진행상태</LightText>
          <LightText>기술 태그</LightText>
        </div>
        <div css={rightHeader}>
          <LightText>{oneLineIntroduce}</LightText>
          <LightText> {status}</LightText>
          <div css={tagBox}>
            {tags?.map((item, index) => {
              return (
                <div key={item} css={tagStyle(shuffledColors[index])}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div css={content}>
        <div css={introduce}>
          <BorderBottomTitle>소개</BorderBottomTitle>
          <div css={contentTextBox}>
            <MediumText>{introducingText}</MediumText>
          </div>
        </div>
      </div>
      <div css={content}>
        <div css={introduce}>
          <BorderBottomTitle>주요 작업 내용</BorderBottomTitle>
          <div css={contentTextBox}>
            {mainFunction.map((item) => {
              return (
                <div>
                  <div css={categoryStyle}>{item.workCategory}</div>
                  <ul
                    css={{
                      marginLeft: "40px",
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {item.workedContend.map((text) => {
                      if (text === "") {
                        return <div css={{ marginBottom: "16px" }}>{text}</div>;
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
        <div css={introduce}>
          <BorderBottomTitle>트러블 슈팅</BorderBottomTitle>
          <div css={contentTextBox}>
            {troubleShooting.map((item) => {
              return (
                <div
                  css={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div css={categoryStyle}>{item.title}</div>
                  <div css={{ marginLeft: "20px" }}>
                    <div css={troubleContent}>
                      <MediumText css={{ whiteSpace: "nowrap", flexShrink: 0 }}>
                        [문제 상황]
                      </MediumText>
                      <LightText>{item.problem}</LightText>
                    </div>
                    <div css={{ ...troubleContent, marginTop: "8px" }}>
                      <MediumText css={{ whiteSpace: "nowrap", flexShrink: 0 }}>
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
        <div css={introduce}>
          <BorderBottomTitle>느낀점</BorderBottomTitle>
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
        <div css={introduce}>
          <BorderBottomTitle>관련 사진</BorderBottomTitle>
        </div>
      </div>
    </div>
  );
}

const wrapper = {};
const header = {
  display: "flex",
  flexDirection: "row" as const,
  gap: "60px",
  paddingBottom: "16px",
  borderBottom: "1px solid #727272",
  marginBottom: "60px",
};

const leftHeader = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "24px",
  fontFamily: "agro",
  fontSize: "24px",
  color: "white",
  justifyContent: "center",
};

const rightHeader = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "24px",
  fontFamily: "agro",
  fontSize: "24px",
  color: "white",
  justifyContent: "center",
};
const titleStyle = {
  fontFamily: "agro",
  color: "white",
  fontSize: "60px",
  marginBottom: "16px",
};

const content = {
  display: "flex",
  flexDirection: "column" as const,
  gap: "40px",
  padding: "16px",
};

const contentTextBox = {
  padding: "16px",
  display: "flex",
  flexDirection: "column" as const,
  gap: "40px",
};

const tagBox = {
  display: "flex",
  flexDirection: "row" as const,
  gap: "8px",
};
const tagStyle = (color: string) => ({
  padding: "8px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  width: "auto",
  height: "30px",
  fontFamily: "agroM",
  background: color,
  borderRadius: "5px",
});

const introduce = {};

const categoryStyle = {
  color: "white",
  fontSize: "24px",
  fontWeight: "600",
  padding: "8px",
  background: "#717172",
  marginBottom: "16px",
  fontFamily: "agroL",
};

const troubleContent = {
  display: "flex",
  alignItems: "flex-start",
  gap: "16px",
};
