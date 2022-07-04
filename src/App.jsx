import {Routes,Route} from "react-router-dom";
import {Houses, House, HostingPage1, HostingPage2, HostingPage3, HostingPage4, HostingPage5, HostingPage6,  HostingPage7, HostingPage8, HostingPage9} from "./pages";
import {Navbar} from "./components/General_Components";
import Footer from "./pages/Footer/Footer.jsx";
import {Messages} from "./pages/Messages/Messages.jsx";
import Home from "./pages/Home/index.jsx"
import HostProfile from "./pages/PersonalinfoHost/PersonalinfoHost.jsx"
import NavbarContextProvider from "./Context/NavbarContext.jsx";
import './App.scss';

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App" onScroll={()=>console.log("onScroll")} >
      <NavbarContextProvider>
        <Navbar/>
      </NavbarContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="hostingPage1" element={<HostingPage1 />} />
        <Route path="hostingPage2" element={<HostingPage2 />} />
        <Route path="hostingPage3" element={<HostingPage3 />} />
        <Route path="hostingPage4" element={<HostingPage4 />} />
        <Route path="hostingPage5" element={<HostingPage5 />} />
        <Route path="hostingPage6" element={<HostingPage6 />} />
        <Route path="hostingPage7" element={<HostingPage7 />} />
        <Route path="hostingPage8" element={<HostingPage8 />} />
        <Route path="hostingPage9" element={<HostingPage9 />} />
        <Route path="houses" element={<Houses/>} />
        <Route path="house" element={<House/>} />
        <Route path="messages" element={<Messages/>} />
        <Route path="hostaccount" element={<HostProfile/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
