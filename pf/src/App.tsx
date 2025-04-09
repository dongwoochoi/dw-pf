/** @jsxImportSource @emotion/react */
import FixedMenu from "./components/FixedMenu";
import ImageModal from "./components/Modal/ImageModal";
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
      <div>
        <div css={glassContent} />
        <ScrollLayout
          contentArray={[<AboutMe />, <Career />, <Skill />, <Projects />]}
        />
      </div>
      <EndPage />,
      <FixedMenu />
      <ProjectModal />
      <ImageModal />
    </div>
  );
}

const glassContent = {
  width: "100%",
  height: "100vh",
  backgroundColor: "transparent",
};

export default App;
