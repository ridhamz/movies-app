import React, { useContext } from "react";

import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";

import "react-toastify/dist/ReactToastify.css";
import "./App.css";

import { AuthContext } from "./shared/context/auth-context";
import Admin from "./components/admin";
import Students from "./components/admin/students";
import EditUser from "./components/admin/editUser";
import Teachers from "./components/admin/teachers";
import ListPFE from "./components/admin/pfes";
import Years from "./components/admin/years";
import EditYear from "./components/admin/editYear";

import Student from "./components/student/index";
import AddPFE from "./components/student/addPFE";
import EditPFE from "./components/student/editPFE";
import Profile from "./components/common/profile";
import EditProfile from "./components/common/editProfile";
import ChangePassword from "./components/common/changePassword";

import Teacher from "./components/teacher/index";

function App() {
  const auth = useContext(AuthContext);
  let routes;
  if (auth.token) {
    switch (auth.user?.role) {
      case "admin":
        routes = (
          <Switch>
            {/*Admin routes*/}
            <Route path="/" component={Admin} exact />
            <Route path="/admin" component={Admin} exact />
            <Route path="/students" component={Students} exact />
            <Route path="/teachers" component={Teachers} exact />
            <Route path="/list-pfe" component={ListPFE} exact />
            <Route path="/years" component={Years} exact />
            <Route path="/edit-user/:id" component={EditUser} exact />
            <Route path="/edit-year/:id" component={EditYear} exact />
            <Redirect to="/" />
          </Switch>
        );
        break;

      case "student":
        routes = (
          <Switch>
            {/*Student routes*/}
            <Route path="/" component={Student} exact />
            <Route path="/student" component={Student} exact />
            <Route path="/add-pfe" component={AddPFE} exact />
            <Route path="/edit-pfe/:id" component={EditPFE} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/edit-profile" component={EditProfile} exact />
            <Route path="/change-password" component={ChangePassword} exact />
            <Redirect to="/" />
          </Switch>
        );
        break;

      case "teacher":
        routes = (
          <Switch>
            {/*Student routes*/}
            <Route path="/" component={Teacher} exact />
            <Route path="/teacher" component={Teacher} exact />
            <Route path="/profile" component={Profile} exact />
            <Route path="/edit-profile" component={EditProfile} exact />
            <Route path="/change-password" component={ChangePassword} exact />
            <Redirect to="/" />
          </Switch>
        );
        break;
    }
  } else {
    routes = (
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/" component={LoginForm} />
        <Redirect to="/" />
      </Switch>
    );
  }
  return (
    <React.Fragment>
      <ToastContainer />
      <NavBar />
      <main className="container">{routes}</main>
    </React.Fragment>
  );
}

export default App;
