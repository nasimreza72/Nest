import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import LoginContextProvider from "./Context/LoginContext.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>  
    </BrowserRouter>
);