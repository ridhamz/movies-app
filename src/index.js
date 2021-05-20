import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import { useAuth } from "./shared/hooks/auth-hook";
import { AuthContext } from "./shared/context/auth-context";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

function MainApp(){
   const {
      token,
      login,
      logout,
      isLogIn,
      user
   } = useAuth();

  return <AuthContext.Provider
  value={{
     token,
     login,
     logout,
     user,
  }}>
     <App />
  </AuthContext.Provider>
}


ReactDOM.render(

    <BrowserRouter>
       <MainApp/>
    </BrowserRouter>, 
    document.getElementById("root"));
    registerServiceWorker();
