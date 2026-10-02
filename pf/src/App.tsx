/** @jsxImportSource @emotion/react */
import FixedMenu from "./components/FixedMenu";
import ImageModal from "./components/Modal/ImageModal";
import IntroduceModal from "./components/Modal/IntroduceModal";
import ProjectModal from "./components/Modal/ProjectModal";
import ScrollLayout from "./components/ScrollLayout";
import AboutMe from "./pages/AboutMe";
import Career from "./pages/Career";
import EndPage from "./pages/EndPage";
import MainPage from "./pages/Main";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import { ToastContainer } from "react-toastify";

function App() {
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
