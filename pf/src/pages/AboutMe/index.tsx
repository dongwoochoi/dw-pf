/** @jsxImportSource @emotion/react */
import { useRef } from "react";
import { refAtom } from "../../jotai/refAtom";
import { useSetAtom } from "jotai";
import { Image } from "../../assets/img";

export default function AboutMe() {
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
      <p css={titleTextStyle}>About Me</p>
      <div css={contentWrapper}>
        <img css={picture} src={Image.Me} alt="me" />
        <div css={textContent}>
          <p css={textStyle}>안녕하세요! 프론트엔드 개발자 최동우 입니다.</p>
          <br />
          <p css={textStyle}>
            대학 전공과정을 공부하면서 동적인 구현과 사용자의 행동에
            즉각반응하는 프론트엔드에 매력을 느끼고 프론트엔드의 꿈을 가지고
            여러 프로젝트를 경험하였습니다.
          </p>
          <br />
          <p css={textStyle}>
            저는 사용자 경험을 최우선으로 생각하며, 유지보수성 및 확장성을
            고려한 개발을 지향합니다.
          </p>
          <br />
          <p css={textStyle}>
            또한 팀원 또는 구성원과 함께 일하는 것을 즐깁니다. 누군가와 함께
            힘을 합쳐 일을 하여 목적을 달성하고 성과를 이루어 내는것에 많은
            뿌듯함을 느끼며 다양한 성향의 사람들과 인간관계에 있어 합의점을
            맞추어 좋은 관계를 가지는 것에 자신있습니다!
          </p>
        </div>
      </div>
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
};

const titleTextStyle = {
  fontFamily: "agro",
  color: "white",
  fontSize: "60px",
  fontWeight: "800",
  marginTop: "60px",
  marginBottom: "48px",
};

const contentWrapper = {
  display: "flex",
  gap: "100px",
  justifyContent: "center",
  alignItems: "center",
};

const picture = {
  width: "400px",
};

const textContent = {
  display: "flex",
  width: "50%",
  flexDirection: "column" as const,
  textAlign: "start" as const,
};

const textStyle = {
  color: "white",
  fontSize: "26px",
  fontFamily: "agroL",
};
