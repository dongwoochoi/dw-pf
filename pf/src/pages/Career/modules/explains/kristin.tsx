/** @jsxImportSource @emotion/react */
import CustomLi from "../../../../components/Atom/CustomLi";
import useMeasurement from "../../../../hooks/useMeasurement";

export default function Kristin() {
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
            크리스틴 컴퍼니
          </p>
          <div
            css={{
              ...fontStyle,
              fontSize: `${careerFontSizeConverter().periodFontSize}px`,
            }}
          >
            📌 2023.07 ~ 2025.03
          </div>
        </div>

        <p
          css={{
            ...fontStyle,
            marginBottom: isMobile ? "4px" : "8px",
            fontSize: `${careerFontSizeConverter().subFontSize}px`,
          }}
        >
          | 개발팀의 프론트엔드 포지션 업무 담당
        </p>
        <div
          css={{
            marginLeft: "2rem",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          <CustomLi>SINPLE 프로젝트 유지보수 및 고도화 작업 진행</CustomLi>
          <CustomLi>KrisTag 프로젝트 개발 진행</CustomLi>
        </div>
      </div>
    </div>
  );
}

const fontStyle = {
  fontFamily: "agroL",
  color: "white",
};
