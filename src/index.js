import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./Context/LoginContext.jsx";
import NavbarContextProvider from "./Context/NavbarContext.jsx";
import TokenContextProvider from './Context/TokenContext.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <LoginContextProvider>
        <NavbarContextProvider>
          <TokenContextProvider>
            <App />
          </TokenContextProvider>
        </NavbarContextProvider>
      </LoginContextProvider>  
    </BrowserRouter>
);