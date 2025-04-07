import Header from "./components/Header";
import About from "./pages/About";
import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import SkillsBanner from "./components/SkillsBanner";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <SkillsBanner />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
