// libraries
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// components
import Home from "./components/home";
import NavBar from "./components/navbar";
import Search from "./components/search";
import MovieDetails from "./components/detail";

// styles
import "./App.css";
import { Provider } from "react-redux";
import store from "redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <NavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/detail/:id" component={MovieDetails} />
            <Route path="/" render={() => <Redirect to="/home" />} />
          </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
