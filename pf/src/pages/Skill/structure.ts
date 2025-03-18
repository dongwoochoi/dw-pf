import { logos } from "../../assets/img";

export const FRONT_SLIDE_STRUCTURE = [
  {
    id: "React",
    logo: logos.ReactLogo,
    percent: 85,
    speed: 5,
    needFit: true,
  },
  {
    id: "JavaScript",
    logo: logos.JavaScriptLogo,
    percent: 75,
    speed: 5,
    needFit: false,
  },
  {
    id: "TypeScript",
    logo: logos.TypeScriptLog,
    percent: 75,
    speed: 5,
    needFit: false,
  },
];

export const BACK_SLIDE_STRUCTURE = [
  {
    id: "Python",
    logo: logos.PythonLogo,
    percent: 30,
    speed: 5,
    needFit: false,
  },
  {
    id: "Django",
    logo: logos.DJangoLogo,
    percent: 15,
    speed: 5,
    needFit: false,
  },
];

export const TOOL_SLIDE_STRUCTURE = [
  {
    id: "GitHub",
    logo: logos.GitLogo,
    percent: 80,
    speed: 5,
    needFit: false,
  },
  {
    id: "Figma",
    logo: logos.FigmaLogo,
    percent: 80,
    speed: 5,
    needFit: false,
  },
  {
    id: "Discord",
    logo: logos.DiscordLogo,
    percent: 100,
    speed: 5,
    needFit: false,
  },
  {
    id: "Slack",
    logo: logos.SlackLogo,
    percent: 100,
    speed: 5,
    needFit: false,
  },
  {
    id: "Notion",
    logo: logos.NotionLogo,
    percent: 100,
    speed: 5,
    needFit: false,
  },
];

export const SKILL_EXPLAIN_STRUECTURE = [
  {
    id: "React",
    text: `
    - React의 기능을 사용할줄 알며 
      실제 서비스를 리엑트를 통해 개발/유지보수 한 경험이 있습니다.

    - Atomic 디자인 패턴에 익숙하며 
      해당 디자인 패턴으로 개발한 경험이 있습니다.

    - React-Query, jotai, recoil 를 다룬 경험이 있습니다.`,
  },
  {
    id: "JavaScript",
    text: `
    - 객체, 배열, 클래스, 프로토타입 등 JavaScript의 
      객체 지향적인 개념을 이해하고 클로저, 콜백 함수, 비동기 처리 등 
      JavaScript의 고급 개념을 이해하고 있습니다.

    - 프레임워크/라이브러리 활용 및 웹을 개발할 수 있습니다.`,
  },
  {
    id: "TypeScript",
    text: `
    - TypeScript의 개념을 이해하고 
      타입 시스템을 활용할 수 있습니다.

    - 기존 JavaScript로 개발된 프로젝트를 TypeScript로 
      변환해본 경험을 가지고 있습니다.
    `,
  },
  {
    id: "Python",
    text: `
    - Python의 기본 문법을 이해하고 
      실제로 개발에 활용할 수 있는 수준입니다.

    - NumPy, Pandas, Matplotlib, TensorFlow와 같은 
      데이터 분석 및 머신러닝 라이브러리를 다루었던 경험이 있습니다.
    `,
  },
  {
    id: "Django",
    text: `
    - Django의 기본 개념을 이해하고 Django의
      ORM을 이용하여 데이터를 다루고, 
      Django Form과 모델 폼을 이용하여 폼을 만들 수 있습니다.
      
    - Django 로그인 기본 기능 및 CRUD기능을 구현할 수 있습니다.

    - 웹 개발을 위한 Django와 같은 프레임워크를 이용하여 
      웹 애플리케이션을 클론코딩한 경험이 있습니다.
    `,
  },
  {
    id: "GitHub",
    text: `
    - Git의 개념을 이해하고 실제로 개발에 활용할 수 있습니다.

    - Git-Flow에 대하여 이해하고 있습니다.

    - Git-Graph를 보고 상황을 판단 할 수 있으며
      이에 문제가 발생했을 시 로그를 보고 해결 할 수 있습니다.
    `,
  },
  {
    id: "Figma",
    text: `
    - Figma를 통해 디자이너와 협엽한 경험이
      다수 있습니다.
    `,
  },
  {
    id: "Discord",
    text: `
    - Discord를 통한 일정관리 및
      소통을 하며 협업한 경헙이 있습니다.
    `,
  },
  {
    id: "Slack",
    text: `
    - Slack 통한 일정관리 및
      소통을 하며 협업한 경헙이 있습니다.
    `,
  },
  {
    id: "Notion",
    text: `
    - Notion을 통한 일정관리 경험이 있습니다.

    - Notion을 통한 현황판(이슈 / 진행상황등)를
      관리한 경험이 있습니다.

    - Notion을 통해 정보 공유 / 정리를
      진행한 경험이 있습니다.
    `,
  },
];
