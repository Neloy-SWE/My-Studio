import Navbar from "./component/Navbar";
import ScrollToTop from "./component/ScrollToTop";
import About from "./section/About";
import Contact from "./section/Contact";
import Experience from "./section/Experience";
import Home from "./section/Home";
import Project from "./section/Project";
import Service from "./section/Service";
import Skills from "./section/Skill";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Service />
      <Skills />
      <Experience />
      <Project />
      <Contact />
      <ScrollToTop />
    </>
  );
}

export default App;