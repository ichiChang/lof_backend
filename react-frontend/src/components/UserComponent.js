import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";
const UserComponent = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    UserService.getUsers()
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <div>
      <h1 className="text-center">Users List</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>User Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Line ID</th>
            <th>Create Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.uid}>
              <td>{user.uid}</td>
              <td>{user.name}</td>
              <td>{user.contact.email}</td>
              <td>{user.contact.phone_number}</td>
              <td>{user.contact.line_id}</td>
              <td>{user.createDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserComponent;
