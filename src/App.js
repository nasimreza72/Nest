import './App.scss';
import {Routes,Route} from "react-router-dom";
import {Houses, House, Login, HostingPage1} from "./pages";
import {Navbar} from "./components/General Components";
import {Messages} from "./pages/Messages/Messages.jsx";
import Home from "./pages/Home/index.jsx"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hostingPage1" element={<HostingPage1 />} />
        <Route path="houses" element={<Houses/>} />
        <Route path="house" element={<House/>} />
        <Route path="messages" element={<Messages/>} />
      </Routes>
    </div>
  );
}

export default App;
