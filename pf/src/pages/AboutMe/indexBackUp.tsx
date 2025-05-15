/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import { Image } from "../../assets/img";
import LightText from "../../components/Atom/LightText";
import useMeasurement from "../../hooks/useMeasurement";
import BoldText from "../../components/Atom/BoldText";
import FadeComponent from "../../components/FadeComponent";

export default function AboutMeBackUp() {
  const {
    myPictureSizeConverter,
    titleFontSizeTransfer,
    aboutMainGapSizeConverter,
  } = useMeasurement();
  const ref = useRef<HTMLDivElement>(null);
  const setAtom = useSetAtom(refAtom);
  setAtom((prev) => {
    return {
      ...prev,
      aboutMeRef: ref,
    };
  });

  return (
    <div css={wrapper} ref={ref} id="aboutMe">
      <BoldText css={titleTextStyle} size={titleFontSizeTransfer()}>
        About Me
      </BoldText>
      <FadeComponent>
        <div css={contentWrapper(aboutMainGapSizeConverter())}>
          <img
            css={picture(myPictureSizeConverter())}
            src={Image.Me}
            alt="me"
          />
          <div css={textContent}>
            <LightText>안녕하세요! 프론트엔드 개발자 최동우 입니다.</LightText>
            <br />
            <LightText>
              대학 전공과정을 공부하면서 동적인 구현과 사용자의 행동에
              즉각반응하는 프론트엔드에 매력을 느끼고 프론트엔드의 꿈을 가지고
              여러 프로젝트를 경험하였습니다.
            </LightText>
            <br />
            <LightText>
              저는 사용자 경험을 최우선으로 생각하며, 유지보수성 및 확장성을
              고려한 개발을 지향합니다.
            </LightText>
            <br />
            <LightText>
              또한 팀원 또는 구성원과 함께 일하는 것을 즐깁니다. 누군가와 함께
              힘을 합쳐 일을 하여 목적을 달성하고 성과를 이루어 내는것에 많은
              뿌듯함을 느끼며 다양한 성향의 사람들과 인간관계에 있어 합의점을
              맞추어 좋은 관계를 가지는 것에 자신있습니다!
            </LightText>
          </div>
        </div>
      </FadeComponent>
    </div>
  );
}

const wrapper = {
  display: "flex",
  flexDirection: "column" as const,
  justifyContent: "center",
  textAlign: "center" as const,
  width: "85%",
  height: "auto",
  minHeight: "100vh",
};

const titleTextStyle = {
  marginTop: "60px",
  marginBottom: "48px",
};

const contentWrapper = (gap: number) => ({
  display: "flex",
  gap: `${gap}px`,
  justifyContent: "center",
  alignItems: "center",
});

const picture = (myPictureSizeConverter: number) => ({
  width: `${myPictureSizeConverter}px`,
});

const textContent = {
  display: "flex",
  width: "50%",
  flexDirection: "column" as const,
  textAlign: "start" as const,
};
