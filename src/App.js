import React, { Component } from "react";
import Movies from "./components/movies";
import { Route, Redirect, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/notFound";
import MovieForm from "./components/movieForm";
import NavBar from "./components/navBar";
import LoginForm from "./components/loginForm";
import RegistreForm from "./components/registerForm";
import Logout from "./components/logout";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { getCurrentUser } from "./services/authService";
import ProtectedRoute from "./components/common/protectedRoute";

class App extends Component {
  state = {};

  componentDidMount() {
    const user = getCurrentUser();
    console.log(user);
    this.setState({ user });
  }
  render() {
    const { user } = this.state;
    return (
      <React.Fragment>
        <ToastContainer />
        <NavBar user={this.state.user} />
        <main className="container">
          <Switch>
            <Route path="/movies-app" exact component={Movies} />
            <Route path="/register" component={RegistreForm} />
            <Route path="/login" component={LoginForm} />
            {/*
        this is first way to protect react router
       <Route 
            path="/movies/:id" 
            render={props => {
              if(!user) return <Redirect to="/login" />
              return <MovieForm {...props}  />
              }}
         />
         */}
            {/* this is second way : */}

            <ProtectedRoute path="/movies/:id" component={MovieForm} />
            <Route
              path="/movies"
              render={(props) => <Movies {...props} user={user} />}
            />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/logout" component={Logout} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/movies" />
            <Redirect to="/movies" />
          </Switch>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
