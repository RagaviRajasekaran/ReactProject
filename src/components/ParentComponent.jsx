import React, { useState, useEffect } from 'react';
import UserForm from './UserForm';
import UserList from './UserList';
import axios from 'axios';
import '../App.css'

function ParentComponent() {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  useEffect(() => {
    // Fetch default users from an API when the component mounts
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching user data:', error);
      });
  }, []);

  const addUser = (newUser) => {
    
    newUser.id = users.length + 1; 
    setUsers([...users, newUser]);
  };

  const editUser = (editedUser) => {
    
    const updatedUsers = users.map((user) =>
      user.id === editedUser.id ? editedUser : user
    );
    setUsers(updatedUsers);
    setEditingUser(null); 
  };
  const deleteUser = (userId) => {
     const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
  };
  return (
    <div>
      <div>
        <h2>Add User</h2>
        <UserForm addUser={addUser} />
      </div>

      <div>
        <h2>Edit User</h2>
        {editingUser ? (
          <UserForm editUser={editUser} userToEdit={editingUser} />
        ) : (
          <p>Select a user to edit.</p>
        )}
      </div>

      <h2>User List</h2>
      <UserList users={users} setEditingUser={setEditingUser} deleteUser={deleteUser} />
  
  
    </div>
  );
}

export default ParentComponent;
