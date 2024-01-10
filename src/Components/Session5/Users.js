import React, { useEffect, useState } from "react";
import "./Users.css";
import axios from "axios";
import { Link } from "react-router-dom";
const Users = () => {
  const [users, setusers] = useState([]);
  const api_url = "https://dummyjson.com/users";
  useEffect(() => {
    axios
      .get(api_url)
      .then((res) => setusers(res.data.users))
      .catch((err) => console.log(err));
  });
  return (
    <>
      <div className="container">
        {users.map((el_usr) => (
          <div key={el_usr.id} className="user">
            <img src={el_usr.image} alt={el_usr.title} />
            <h4>
              {el_usr.firstName} {el_usr.maidenName} {el_usr.lastName}
            </h4>
            <p>{el_usr.email}</p>
            <Link to={`${el_usr.id}`}>Read More</Link>
          </div>
        ))}
      </div>
    </>
  );
};
export default Users;
