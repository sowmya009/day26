import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Navbar from "./components/layout/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter
} from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddUser from "./components/users/AddUser";
import AddUser1 from "./components/userteacher/AddUser1";
import EditUser from "./components/users/EditUser";
import Assign from "./components/users/Assign";
import EditUser1 from "./components/userteacher/EditUser1"
import User from "./components/users/User";
import User1 from "./components/userteacher/User1";


function App(props) {
  return (
    <Router>
      <div className="App">
        <h1 style={{color:'red'}}>School Management System</h1>
        <Navbar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/users/add" component={AddUser} />
          <Route exact path="/userteacher/add" component={AddUser1} />
          <Route exact path="/users/edit/:id" component={EditUser} />
          <Route exact path="/users/assign/:id" component={Assign} />
          <Route exact path="/userteacher/edit/:id" component={EditUser1} />
          <Route exact path="/users/:id" component={User} />
          <Route exact path="/userteacher/:id" component={User1} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;