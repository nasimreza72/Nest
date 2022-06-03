import './App.scss';
import {Routes,Route} from "react-router-dom";
import {Houses, House} from "./pages";
import {Navbar} from "./components/General Components";
import Home from "./pages/Home/index.jsx"

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
