/** @jsxImportSource @emotion/react */
import CustomLi from "../../../../components/Atom/CustomLi";
import useMeasurement from "../../../../hooks/useMeasurement";

export default function WithUs() {
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
            위더스 콘텐츠
          </p>
          <div
            css={{
              ...fontStyle,
              fontSize: `${careerFontSizeConverter().periodFontSize}px`,
            }}
          >
            📌 2025.07 ~ 재직중
          </div>
        </div>

        <p
          css={{
            ...fontStyle,
            marginBottom: isMobile ? "4px" : "8px",
            fontSize: `${careerFontSizeConverter().subFontSize}px`,
          }}
        >
          | 플랫폼 사업부 개발2팀 주임, 포포몬(Popomon) 프론트엔드 담당
        </p>
        <div
          css={{
            marginLeft: "2rem",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          <CustomLi>
            조건 기반 인플루언서 자동 매칭·선정 시스템(커넥트) 프론트엔드 전체
            설계 및 구현
          </CustomLi>
          <CustomLi>
            메인페이지 API 호출 구조 개선으로 Lighthouse 성능 점수 20점대 →
            60점대로 향상
          </CustomLi>
          <CustomLi>레거시 PHP 시스템을 Next.js 기반으로 마이그레이션</CustomLi>
          <CustomLi>
            Chart.js 기반 선형 + 중첩 바형 복합 차트, 일정 관리(스케줄러)
            페이지 신규 구축
          </CustomLi>
          <CustomLi>
            다국어(한/영/일/중) 자동 번역 기능, 카카오 SDK 통합 관리 및
            하이브리드 앱(Cordova) 대응
          </CustomLi>
        </div>
      </div>
    </div>
  );
}

const fontStyle = {
  fontFamily: "agroL",
  color: "var(--text-primary)",
};
