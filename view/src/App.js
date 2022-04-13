import logo from './logo.svg';
import './App.css';
import {Routes,Route} from "react-router-dom";
import {Home, Houses, House} from "./pages";
import {Navbar} from "./components";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="houses" element={<Houses />} />
        <Route path="house" element={<House />} />
      </Routes>
    </div>
  );
}

export default App;
