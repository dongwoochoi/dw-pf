import { logos } from "../../assets/img";

export const FRONT_SLIDE_STRUCTURE = [
  {
    id: "React",
    logo: logos.ReactLogo,
    percent: 90,
    needFit: false,
  },
  {
    id: "TypeScript",
    logo: logos.TypeScriptLog,
    percent: 85,
    needFit: false,
  },
  {
    id: "JavaScript",
    logo: logos.JavaScriptLogo,
    percent: 85,
    needFit: false,
  },
  {
    id: "Next.js",
    logo: logos.NextJsLogo,
    percent: 70,
    needFit: false,
  },
  {
    id: "Recoil",
    logo: logos.RecoilLogo,
    percent: 80,
    needFit: false,
  },
  {
    id: "Jotai",
    logo: logos.JotaiLogo,
    percent: 80,
    needFit: false,
  },
  {
    id: "Zustand",
    logo: logos.ZustandLogo,
    percent: 70,
    needFit: false,
  },
  {
    id: "React-Query",
    logo: logos.ReactQueryLogo,
    percent: 70,
    needFit: false,
  },
  {
    id: "SWR",
    logo: logos.SwrLogo,
    percent: 65,
    needFit: false,
  },
];

export const BACK_SLIDE_STRUCTURE = [
  {
    id: "PHP",
    logo: logos.PhpLogo,
    percent: 55,
    needFit: false,
  },
  {
    id: "Python",
    logo: logos.PythonLogo,
    percent: 40,
    needFit: false,
  },
  {
    id: "Django",
    logo: logos.DJangoLogo,
    percent: 30,
    needFit: false,
  },
];

export const TOOL_SLIDE_STRUCTURE = [
  {
    id: "GitHub",
    logo: logos.GitHubLogo,
    percent: 85,
    needFit: false,
  },
  {
    id: "AWS",
    logo: logos.AwsLogo,
    percent: 40,
    needFit: false,
  },
  {
    id: "MySQL",
    logo: logos.MySqlLogo,
    percent: 45,
    needFit: false,
  },
  {
    id: "Redis",
    logo: logos.RedisLogo,
    percent: 35,
    needFit: false,
  },
  {
    id: "Figma",
    logo: logos.FigmaLogo,
    percent: 70,
    needFit: false,
  },
  {
    id: "Notion",
    logo: logos.NotionLogo,
    percent: 90,
    needFit: false,
  },
  {
    id: "Slack",
    logo: logos.SlackLogo,
    percent: 90,
    needFit: false,
  },
  {
    id: "Discord",
    logo: logos.DiscordLogo,
    percent: 90,
    needFit: false,
  },
];

export const SKILL_EXPLAIN_STRUECTURE = [
  {
    id: "React",
    text: [
      "4년째 여러 실무 서비스의 프론트엔드를 React로 설계·개발하며 컴포넌트 구조 설계 경험을 쌓아왔습니다.",
      "5단계 Atomic Design Pattern으로 폴더 구조를 설계해 컴포넌트 재사용성을 높이는 방식에 익숙합니다.",
      "Jotai, Recoil, Zustand, React-Query, SWR 등 서비스 특성에 맞는 상태관리·데이터 페칭 조합을 선택해 적용해왔습니다.",
    ],
  },
  {
    id: "TypeScript",
    text: [
      "실무 전반에 TypeScript를 도입해 타입 안정성과 유지보수성을 높여왔습니다.",
      "기존 JavaScript 코드베이스를 TypeScript로 전환해본 경험이 있습니다.",
    ],
  },
  {
    id: "JavaScript",
    text: [
      "클로저, 프로토타입, 비동기 처리 등 JavaScript의 핵심 개념을 기반으로 실무 로직을 구현합니다.",
      "프레임워크 없이도 DOM 조작과 이벤트 처리로 동적 기능을 만들 수 있습니다.",
    ],
  },
  {
    id: "Next.js",
    text: [
      "레거시 서버 렌더링 화면을 Next.js 기반으로 마이그레이션해본 경험이 있습니다.",
      "라우팅·렌더링 전략을 이해하고 실제 서비스에 적용했습니다.",
    ],
  },
  {
    id: "Recoil",
    text: [
      "Context API/Reducer 기반 전역 상태의 리렌더링 문제를 Recoil 도입으로 개선해, React Profiler 기준 리렌더링을 81% 줄인 경험이 있습니다.",
      "atom 단위로 상태를 세분화해 컴포넌트 간 의존성을 낮췄습니다.",
    ],
  },
  {
    id: "Jotai",
    text: [
      "여러 서비스에서 Jotai로 컴포넌트 단위의 세분화된 전역 상태를 설계·관리해왔습니다.",
    ],
  },
  {
    id: "Zustand",
    text: ["Next.js 기반 서비스에서 Zustand로 클라이언트 상태를 관리한 경험이 있습니다."],
  },
  {
    id: "React-Query",
    text: [
      "React Query v5의 onError 제거에 대응해 로컬/글로벌 에러 처리 구조를 재설계했습니다.",
      "캐싱·재요청 옵션을 조정해 불필요한 API 호출을 줄였습니다.",
    ],
  },
  {
    id: "SWR",
    text: ["Next.js 서비스에서 SWR로 데이터 페칭을 구현한 경험이 있습니다."],
  },
  {
    id: "PHP",
    text: [
      "PHP 기반 백엔드 서비스의 결제·SNS 연동 등 서버 API를 개발·유지보수해왔습니다.",
      "화면뿐 아니라 서비스 전체 흐름을 보는 시야로 프론트/백엔드를 함께 다룹니다.",
    ],
  },
  {
    id: "Python",
    text: [
      "Python 기초 문법을 이해하고 실무·학습 과정에 활용할 수 있습니다.",
      "NumPy, Pandas, Matplotlib 등 데이터 분석 라이브러리를 다뤄본 경험이 있습니다.",
    ],
  },
  {
    id: "Django",
    text: [
      "Django 기반 데이터 관리 툴을 개발해본 경험이 있습니다.",
      "ORM과 모델 폼을 활용해 로그인, CRUD 기능을 구현할 수 있습니다.",
    ],
  },
  {
    id: "GitHub",
    text: [
      "GitHub 기반으로 Git-Flow 브랜치 전략을 적용해 협업해왔습니다.",
      "충돌이나 이력 문제를 Git 로그·그래프로 직접 추적해 해결한 경험이 있습니다.",
    ],
  },
  {
    id: "AWS",
    text: ["EC2, S3, CloudFront를 활용해 서비스 배포·운영을 경험했습니다."],
  },
  {
    id: "MySQL",
    text: ["서비스 요구사항에 맞춘 데이터 모델링과 쿼리 작성 경험이 있습니다."],
  },
  {
    id: "Redis",
    text: ["캐싱 용도로 Redis를 연동해본 경험이 있습니다."],
  },
  {
    id: "Figma",
    text: ["Figma로 디자이너와 시안을 협의하며 화면을 구현한 경험이 다수 있습니다."],
  },
  {
    id: "Discord",
    text: ["Discord로 일정 공유 및 팀 협업을 진행한 경험이 있습니다."],
  },
  {
    id: "Slack",
    text: ["Slack으로 업무 소통과 일정 관리를 병행한 경험이 있습니다."],
  },
  {
    id: "Notion",
    text: [
      "Notion으로 회의록과 일정을 관리한 경험이 있습니다.",
      "이슈·진행상황을 정리한 현황판을 만들어 팀과 정보를 공유했습니다.",
    ],
  },
];
