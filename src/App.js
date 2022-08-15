import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/Homepage";
import { AboutMe } from "./pages/AboutMe";
import { Projects } from "./pages/Projects";
import { Header } from "./components/Header";
// import { More } from "./pages/More";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/*" element={<InnerRouter />} />
      </Routes>
    </div>
  );
};

export default App;

const InnerRouter = () => (
  <>
    <Header />
    <Routes>
      <Route path="/about-me" element={<AboutMe />} />
      <Route path="/projects" element={<Projects />} />
      {/* <Route path="/more" element={<More />} /> */}
    </Routes>
  </>
);
