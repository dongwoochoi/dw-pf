/** @jsxImportSource @emotion/react */
const currentYear = new Date().getFullYear();
const highlight = {
  fontFamily: "agroM",
  fontSize: "inhirt",
  background: "#2B3E50",
  padding: "2px 4px",
  borderRadius: "5px",
  margin: "0 4px",
};
export const ABOUTME_STRUCTURE = [
  {
    keyword: "연차",
    question: "올해들어 몇년째 개발 겸험을 가지고 있는가?",
    answer: (
      <p
        css={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" as const,
        }}
      >
        2018년도 대학입학 후 개발경험을 쌓기 시작하여 군 복무 기간 제외 꾸준히
        개발경험을 쌓았으며 실무경력은
        <span css={highlight}>
          {currentYear}년 기준으로 {Number(currentYear) - 2023}년차{" "}
        </span>{" "}
        입니다!
      </p>
    ),
  },
  {
    keyword: "주요 스택",
    question: "작업시 주로 사용해왔던 기술 스택은?",
    answer: (
      <p
        css={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" as const,
        }}
      >
        프론트 작업시
        <span css={highlight}>React와 TypeScript, Emotion</span>을 기반 으로
        진행하였습니다. 컴포넌트 기반의 구조를 유지하며, 타입 안정성과 코드
        유지보수를 위해 TypeScript를 적극 활용하였고, 스타일링은 Emotion을
        사용하여 CSS-in-JS 방식으로 구성해 유지보수성과 재사용성을 높였습니다.
      </p>
    ),
  },
  {
    keyword: "개발 철학",
    question: "보통 코드를 작성하실때 무엇을 중점으로 작성하는지?",
    answer: (
      <p
        css={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" as const,
        }}
      >
        저는 <span css={highlight}>사용자 경험을 최우선으로 고려</span>하며,
        사용자가 서비스를 이용하는 과정에서 불편함 없이 자연스럽게 인터랙션할 수
        있도록 신경 씁니다. 또한,{" "}
        <span css={highlight}>유지보수성과 확장성을 염두에 두고 개발</span>하여,
        향후 있을 수 있는 기능 수정이나 고도화에도 유연하게 대응할 수 있도록
        설계하는 것을 지향합니다.,
      </p>
    ),
  },
  {
    keyword: "협업",
    question: "협업을 어떻게 생각하는지?",
    answer: (
      <p
        css={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" as const,
        }}
      >
        팀원 또는 구성원과 함께 일하는 것을 즐깁니다.
        <span css={highlight}>
          누군가와 함께 힘을 합쳐 일을 하여 목적을 달성하고 성과를 이루어
          내는것에 많은 뿌듯함을 느끼며
        </span>
        다양한 성향의 사람들과 인간관계에 있어
        <span css={highlight}>
          합의점을 맞추어 좋은 관계를 가지는 것에 자신있습니다.
        </span>
      </p>
    ),
  },
  {
    keyword: "나의 강점",
    question: "자신의 강점은 무엇인가",
    answer: (
      <p
        css={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" as const,
        }}
      >
        저는<span css={highlight}> 끊임없이 성장하는 개발자</span>를 지향하며,
        주어진 일에{" "}
        <span css={highlight}>
          {" "}
          책임감을 가지고 끝까지 완수하는 것을 중요하게 생각
        </span>
        합니다. 또한{" "}
        <span css={highlight}>
          문제를 마주했을 때 다양한 시각에서 접근하며 해결책을 찾으려
          노력합니다.
        </span>
        그리고{" "}
        <span css={highlight}>
          쉽게 꺾이지 않는 마음과 끈기를 바탕으로 어려운 상황에서도 끝까지
          포기하지 않고 해결하는 자세
        </span>
        를 갖추고 있으며, 이런 태도는 협업 과정에서도 큰 강점으로 작용한다고
        생각합니다.
      </p>
    ),
  },
];
