import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import Header from "./common/Header";
import PageNotFound from "./PageNotFound";
import Register from "./register/Register";
import { BrowserRouter as Router } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/course" component={Register} />
        <Route path="/register" component={Register} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <ToastContainer autoClose={3000} hideProgressBar /> */}
    </Router>
  );
}

export default App;
