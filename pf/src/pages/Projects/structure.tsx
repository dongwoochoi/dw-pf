import { favicons, Projects } from "../../assets/img";
import SeoreuModal from "./modules/modals/SeoreuModal";
import KristagModal from "./modules/modals/KristagModal";
import SinpleModal from "./modules/modals/SinpleModal";
import LGModal from "./modules/modals/LGModal";
import ProtFolioModal from "./modules/modals/PortFolioModal";
import HackerTonModal from "./modules/modals/HackerTonModal";
import IdeaModal from "./modules/modals/IdeaModal";
import CapStoneModal from "./modules/modals/CapStoneModal";

export const MAIN_PROJECT_STRUCTURE = [
  {
    title: "KRISTAG",
    team: "Kristin Company",
    text: `사진을 보고 태깅 작업 / 사내 데이터를 관리하는 인하우스 라벨링 툴`,
    tag: ["React", "TypeScript", "Jotai", "React-Query"],
    img: Projects.kristag,
    favicon: favicons.kristagF,
  },
  {
    title: "SINPLE",
    team: "Kristin Company",
    text: `인공지능 기술기반 신발 제조 솔루션 플랫폼`,
    tag: ["React", "TypeScript", "Recoil", "React-Query", "KakaoMap API"],
    img: Projects.sinple,
    favicon: favicons.sinpleF,
  },
  {
    title: "(주)서르 홈페이지 제작",
    team: "Solo Project",
    text: `(주)서르 사의 의뢰를 받아 홈페이지 제작`,
    tag: ["React", "Email.Js"],
    img: Projects.seoreu,
    favicon: favicons.seoreuF,
  },
  {
    title: "LG Product Review Labeling Project",
    team: "Industry-Academia Cooperation Project",
    text: `LG사 산학과제 프로젝트 - 자사 제품 리뷰 라벨링 툴`,
    tag: ["Django"],
    img: Projects.lg,
    favicon: "",
  },
];

export const SUB_PROJECT_STRUCTURE = [
  {
    title: "PortFolio",
    team: "Solo Project",
    text: `개인 포트폴리오 페이지 제작`,
    tag: ["React"],
    img: "",
    favicon: "",
  },
  {
    title: "GDSC_DEU 2023 Winter HackerTon",
    team: "GDSC (Google Developer Student Club)",
    text: `GeoCoding API를 활용한 당근마켓 클론코딩`,
    tag: ["React", "Geocoding_API"],
    img: Projects.winterHack,
    favicon: "",
  },
  {
    title: "Idea Connection",
    team: "GDSC (Google Developer Student Club)",
    text: `"좋은 아이디어는 어디에서나 나올 수 있다” 라는 슬로건으로 
            누구나 만들어낸 아이디어를 등록해 여유있는 자본을 가진 기업/기관/사업가/투자자와 매칭해 
            실사용이 이루어 질 수 있게 하는 서비스`,
    tag: ["React", "GCP", "Google_oauth_API", "Google_transfet_API"],
    img: Projects.ideaConection,
    favicon: "",
  },
  {
    title: "CapStone",
    team: "Department of School Education",
    text: `유튜브 영상에 댓글이 달리면 자동으로 GPT가 답글을 생성해 달아주고 댓글을 관리하는 서비스`,
    tag: ["Django", "React", "Chat_GPT_API", "YouTube_API"],
    img: Projects.capStone,
    favicon: "",
  },
];

export const PROJECT_MODAL_STRUCTURE = [
  {
    title: "KRISTAG",
    jsx: <KristagModal />,
  },
  {
    title: "SINPLE",
    jsx: <SinpleModal />,
  },
  {
    title: "(주)서르 홈페이지 제작",
    jsx: <SeoreuModal />,
  },
  {
    title: "LG Product Review Labeling Project",
    jsx: <LGModal />,
  },
  {
    title: "PortFolio",
    jsx: <ProtFolioModal />,
  },
  {
    title: "GDSC_DEU 2023 Winter HackerTon",
    jsx: <HackerTonModal />,
  },
  {
    title: "Idea Connection",
    jsx: <IdeaModal />,
  },
  {
    title: "CapStone",
    jsx: <CapStoneModal />,
  },
];
