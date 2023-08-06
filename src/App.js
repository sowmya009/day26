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
  Routes
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
        <h1 style={{color:'black'}}>School Management System</h1>
        <Navbar />

        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/users/add' element={<AddUser/>} />
          <Route path='/userteacher/:AddUser1' element={<AddUser1/>} />
          <Route path='/users/edit/:id' element={<EditUser/>} />
          <Route path='/users/assign/:id' element={<Assign/>} />
          <Route path='/userteacher/edit/:id' element={<EditUser1/>} />
          <Route path='/users/:id' element={<User/>} />
          <Route path='/userteacher/:id' element={<User1/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;