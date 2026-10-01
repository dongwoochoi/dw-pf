/** @jsxImportSource @emotion/react */
import CustomLi from "../../../../components/Atom/CustomLi";
import useMeasurement from "../../../../hooks/useMeasurement";

export default function Others() {
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
            그 외
          </p>
        </div>

        <div
          css={{
            ...fontStyle,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p
            css={{ fontSize: `${careerFontSizeConverter().periodFontSize}px` }}
          >
            | 전문하사
          </p>
          <p
            css={{
              ...fontStyle,
              fontSize: `${careerFontSizeConverter().liFontSize}px`,
            }}
          >
            📌 2020.08 ~ 2021.02
          </p>
        </div>
        <CustomLi
          css={{
            marginLeft: "1rem",
            marginBottom: isMobile ? "6px" : "12px",
            fontSize: `${careerFontSizeConverter().liFontSize}px`,
          }}
        >
          병사생활 이후 전문하사로 임관하여 복무하며 리더쉽, 책임감을 가지게 됨.
        </CustomLi>
      </div>
    </div>
  );
}

const fontStyle = {
  fontFamily: "agroL",
  color: "var(--text-primary)",
};
