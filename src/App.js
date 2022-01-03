import Landing from './components/page-sections/Landing';
import Navbar from './components/Navbar';
import ComingSoon from './components/page-sections/ComingSoon';
import Highlights from './components/page-sections/Highlights';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Landing />
      <Navbar />
      <Highlights />
      <ComingSoon />
    </div>
  );
}

export default App;
