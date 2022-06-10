import './App.scss';
import {Routes,Route} from "react-router-dom";
import {Houses, House, Login, HostingPage1, HostingPage2, HostingPage3} from "./pages";
import {Navbar} from "./components/General Components";
import {Messages} from "./pages/Messages/Messages.jsx";
import Home from "./pages/Home/index.jsx"
// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hostingPage1" element={<HostingPage1 />} />
        <Route path="hostingPage2" element={<HostingPage2 />} />
        <Route path="hostingPage3" element={<HostingPage3 />} />
        <Route path="houses" element={<Houses/>} />
        <Route path="house" element={<House/>} />
        <Route path="messages" element={<Messages/>} />
      </Routes>
    </div>
  );
}

export default App;
