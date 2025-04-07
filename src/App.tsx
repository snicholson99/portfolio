import Header from "./components/Header";
import Homepage from "./sections/Homepage";
import Skills from "./sections/Skills";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Homepage />
      <Skills />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
