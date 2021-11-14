import Navbar from './components/Navbar';
import Highlights from './components/page-sections/Highlights';
import Landing from './components/page-sections/Landing';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <Landing />
      <Navbar />
      <Highlights />
    </div>
  );
}

export default App;
