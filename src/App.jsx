import Navbar from "./component/Navbar";
import About from "./section/About";
import Home from "./section/Home";
import Service from "./section/Service";
import Skills from "./section/Skill";

const App = () => {
  return(
    <>
    <Navbar />
    <Home />
    <About />
    <Service />
    <Skills />
    </>
  );
}

export default App;