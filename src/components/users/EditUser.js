import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    teachername: "",
   
  });

  const { name, username, email, teachername } = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`https://621394c689fad53b1ff9c4b9.mockapi.io/user/${id}`, user);
    history.push("/");
  };

  const loadUser = async () => {
    const result = await axios.get(`https://621394c689fad53b1ff9c4b9.mockapi.io/user/${id}`);
    setUser(result.data);
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit A student</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Name"
              name="name"
              value={name}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Username"
              name="username"
              value={username}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the teacher name"
              name="teachername"
              value={teachername}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          
          <button className="btn btn-warning btn-block">Update student</button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;