/** @jsxImportSource @emotion/react */
import CustomLi from "../../../../components/Atom/CustomLi";
import useMeasurement from "../../../../hooks/useMeasurement";

export default function Deu() {
  const { careerFontSizeConverter, careerSizeConverter, isMobile } =
    useMeasurement();
  return (
    <div
      css={{ display: "flex", width: `${careerSizeConverter().boxWidth}px` }}
    >
      <div css={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div css={{ display: "flex", justifyContent: "space-between" }}>
          <p
            css={{
              ...fontStyle,
              marginBottom: isMobile ? "8px" : "16px",
              fontSize: `${careerFontSizeConverter().headFontSize}px`,
            }}
          >
            동의대학교
          </p>
          <div
            css={{
              ...fontStyle,
              fontSize: `${careerFontSizeConverter().periodFontSize}px`,
            }}
          >
            📌 2018.03 ~ 2024.02
          </div>
        </div>

        <p
          css={{
            ...fontStyle,
            marginBottom: isMobile ? "4px" : "8px",
            fontSize: `${careerFontSizeConverter().subFontSize}px`,
          }}
        >
          | 산업ICT기술공학과 학과 과정 진행
        </p>
        <div
          css={{
            marginLeft: "2rem",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          <CustomLi>
            C, Java, Python을 활용해 기초적인 프로그래밍과 자료구조, 알고리즘 등
            CS 기초 지식 학습
          </CustomLi>
          <CustomLi>SQL과 데이터 모델링을 통한 데이터 베이스 학습</CustomLi>
          <CustomLi>
            R과 Python을 이용한 데이터 분석, 텍스트 마이닝, 웹 크롤링 학습
          </CustomLi>
          <CustomLi>PyTorch를 활용한 딥러닝 모델 구현 학습</CustomLi>
          <CustomLi>UI/UX 디자인과 기초 디자인 이론 학습</CustomLi>
        </div>
        <p
          css={{
            ...fontStyle,
            marginTop: isMobile ? "4px" : "8px",
            marginBottom: isMobile ? "4px" : "8px",
            fontSize: `${careerFontSizeConverter().subFontSize}px`,
          }}
        >
          | 동아리 활동
        </p>
        <div
          css={{
            marginLeft: "2rem",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          <CustomLi>취업동아리 푸르미르 대표, 취업활동 및 공모전 진행</CustomLi>
          <CustomLi>
            Google Developer Student Clubs소속으로 다양한 프로젝트 경험
          </CustomLi>
          <CustomLi>창업동아리 Deu_dev 부대표, 다양한 프로젝트 경험</CustomLi>
        </div>
      </div>
    </div>
  );
}

const fontStyle = {
  fontFamily: "agroL",
  color: "var(--text-primary)",
};
