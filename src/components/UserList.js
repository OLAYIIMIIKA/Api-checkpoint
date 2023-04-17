import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';


function UserList() {
  const [listOfUsers, setListOfUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <div className="user-list">
        {listOfUsers.map(user => (
          <div key={user.id} className="user">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
            <p>City: {user.address.city}</p>
            <p>Street: {user.address.street}</p>
            <p>Apartment: {user.address.suite}</p>
          </div>
        ))}
      </div>
    </div>
  );
  
  
}

export default UserList;