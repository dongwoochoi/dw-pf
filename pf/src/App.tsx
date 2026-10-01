/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import FixedMenu from "./components/FixedMenu";
import ImageModal from "./components/Modal/ImageModal";
import IntroduceModal from "./components/Modal/IntroduceModal";
import ProjectModal from "./components/Modal/ProjectModal";
import ScrollLayout from "./components/ScrollLayout";
import useResponsive from "./hooks/useResponsive";
import AboutMe from "./pages/AboutMe";
import Career from "./pages/Career";
import EndPage from "./pages/EndPage";
import MainPage from "./pages/Main";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import { toast, ToastContainer } from "react-toastify";

const UNSUPPORTED_VIEWPORT_TOAST_ID = "unsupported-viewport";

function App() {
  const { isUnable } = useResponsive();

  useEffect(() => {
    if (!isUnable) return;
    toast(
      "현재 화면 크기에서는 최적의 화면 구성이 제공되지 않습니다. 화면 해상도를 조정하면 더 나은 경험을 얻을 수 있습니다. (추천 화면 너비 360px ~ 2160px)",
      {
        toastId: UNSUPPORTED_VIEWPORT_TOAST_ID,
        autoClose: false,
        closeOnClick: true,
      }
    );
  }, [isUnable]);

  return (
    <div>
      <ToastContainer />
      <MainPage />

      <ScrollLayout
        contentArray={[<AboutMe />, <Career />, <Skill />, <Projects />]}
      />

      <EndPage />
      <FixedMenu />
      <ProjectModal />
      <ImageModal />
      <IntroduceModal />
    </div>
  );
}

export default App;
