import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {Home, Hauses, Hause} from "./pages";
import {Navbar} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hauses" element={<Hauses />} />
        <Route path="hause" element={<Hause />} />
      </Routes>
    </div>
  );
}

export default App;
