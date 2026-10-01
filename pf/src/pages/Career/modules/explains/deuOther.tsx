/** @jsxImportSource @emotion/react */
import CustomLi from "../../../../components/Atom/CustomLi";
import useMeasurement from "../../../../hooks/useMeasurement";

export default function DeuOther() {
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
        </div>

        <div
          css={{
            ...fontStyle,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p css={{ fontSize: `${careerFontSizeConverter().liFontSize}px` }}>
            | 학과 사무부장
          </p>
          <p
            css={{
              ...fontStyle,
              fontSize: `${careerFontSizeConverter().liFontSize}px`,
            }}
          >
            📌 2021.03 ~ 2021.11
          </p>
        </div>
        <CustomLi
          css={{
            marginLeft: "1rem",
            marginBottom: isMobile ? "4px" : "8px",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          한 학년간 학과 사무부장 직책을 수행하며 금전관리및 장부작성등 업무를
          수행.
        </CustomLi>

        <div
          css={{
            ...fontStyle,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p css={{ fontSize: `${careerFontSizeConverter().liFontSize}px` }}>
            | 학과 학생회장
          </p>
          <p
            css={{
              ...fontStyle,
              fontSize: `${careerFontSizeConverter().liFontSize}px`,
            }}
          >
            📌 2022.03 ~ 2022.12
          </p>
        </div>
        <CustomLi
          css={{
            marginLeft: "1rem",
            marginBottom: isMobile ? "4px" : "8px",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          한 학년간 학과 학생회장 직책을 수행하며 리더쉽 및 인원관리 능력,
          책임감을 기르게 됨.
        </CustomLi>

        <div
          css={{
            ...fontStyle,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p css={{ fontSize: `${careerFontSizeConverter().liFontSize}px` }}>
            | 단과대학교 비상대책 위원장
          </p>
          <p
            css={{
              ...fontStyle,
              fontSize: `${careerFontSizeConverter().liFontSize}px`,
            }}
          >
            📌 2022.10 ~ 2022.12
          </p>
        </div>
        <CustomLi
          css={{
            marginLeft: "1rem",
            marginBottom: isMobile ? "6px" : "12px",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          2개월간 단과대학교 비상대책 위원장 직책을 수행하며 단과 대학교 행사 및
          투표를 총괄.
        </CustomLi>
      </div>
    </div>
  );
}

const fontStyle = {
  fontFamily: "agroL",
  color: "var(--text-primary)",
};
