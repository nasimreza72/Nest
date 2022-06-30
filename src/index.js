import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./Context/LoginContext.jsx";
// import TokenContextProvider from './Context/TokenContext.jsx';
import ProfileContextProvider from "./Context/ProfileContext.jsx"
import HousesContextProvider from './Context/HousesContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <LoginContextProvider>
           <ProfileContextProvider>
              <HousesContextProvider>
                <App />
              </HousesContextProvider>
           </ProfileContextProvider>
      </LoginContextProvider>  
    </BrowserRouter>
);