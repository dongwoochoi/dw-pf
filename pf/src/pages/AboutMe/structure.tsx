/** @jsxImportSource @emotion/react */
const currentYear = new Date().getFullYear();
const highlight = {
  fontFamily: "agroM",
  fontSize: "inhirt",
  background: "var(--highlight-bg)",
  color: "var(--highlight-text)",
  padding: "2px 4px",
  borderRadius: "5px",
  margin: "0 4px",
};
export const ABOUTME_STRUCTURE = [
  {
    keyword: "인적 사항",
    question: "기본 인적사항을 알려주세요!",
    answer: (
      <p
        css={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" as const,
        }}
      >
        <p>생년월일| 99.07.02</p>
        <p>최종학력| 동의대학교 산업ICT기술공학과 학사 졸업</p>
        <p>거주지| 부산광역시</p>
      </p>
    ),
  },
  {
    keyword: "연차",
    question: "올해들어 몇년째 개발 경험을 가지고 있는가?",
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
          {currentYear}년 기준으로 {Number(currentYear) - 2022}년차
        </span>
        이며{" "}
        <span css={highlight}>
          여러 서비스의 핵심기능을 담당하며 설계부터 구현까지 주도적으로
          참여하며 리펙토링 및 재사용성 향상, 최적화 작업 경험
        </span>
        을 가지고 있습니다.
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
        <span css={highlight}>React, Next.js, TypeScript</span>를 기반으로
        진행하였고, 상태관리는{" "}
        <span css={highlight}>Jotai, Recoil, Zustand</span>를, 데이터
        페칭은 <span css={highlight}>React-Query, SWR</span>을 프로젝트
        특성에 맞게 선택해 사용했습니다. 최근에는{" "}
        <span css={highlight}>PHP 기반 백엔드 작업</span>도 함께 맡으며
        화면뿐 아니라 서비스 전체 흐름을 보는 시야를 넓혀가고 있습니다.
      </p>
    ),
  },
  {
    keyword: "AI 활용",
    question: "실무에서 AI 도구를 어떻게 활용하시나요?",
    answer: (
      <p
        css={{
          whiteSpace: "pre-wrap",
          wordBreak: "break-word" as const,
        }}
      >
        <span css={highlight}>Claude Code 같은 AI 코딩 도구를 실무에 적극 도입</span>
        해 레거시 코드 분석·리팩토링 속도를 끌어올려왔고, 최근에는 한 걸음 더
        나아가{" "}
        <span css={highlight}>
          팀 단위의 AI 에이전트 활용 체계(사용 거버넌스, 업무 자동화, 노하우의
          스킬화)
        </span>
        를 고민하며 팀 전체의 개발 생산성을 끌어올리는 일에 집중하고
        있습니다. 개인적으로는{" "}
        <span css={highlight}>
          LLM 기반 자동매매 프로그램(Maru)을 코드를 직접 작성하지 않고
          에이전트에게 전량 위임해 개발·운영
        </span>
        하며 에이전트 활용법을 실험하고 있습니다.
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
        <span css={highlight}>지금 당장 단순하고 명확한 코드를 작성하는 것</span>
        을 중요하게 생각합니다. 과도하게 미리 설계하기보다, 누가 보더라도(그게
        저 자신이든, 팀원이든, AI 도구든) 안전하게 이해하고 수정할 수 있는
        코드를 지향합니다.
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
