import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Assign = () => {
  let history = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    teachername: ""
  });

  const { teachername } = user;
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
        <h2 className="text-center mb-4">Assign A Teacher</h2>
        <h1 className="display-4">User Id: {id}</h1>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter the teacher Name"
              name="teachername"
              value={teachername}
              onChange={e => onInputChange(e)}
              required
            />
          </div>
          
          <button className="btn btn-warning btn-block"> Assign </button>
        </form>
      </div>
    </div>
  );
};

export default Assign;