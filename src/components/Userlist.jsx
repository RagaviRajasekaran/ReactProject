import React from 'react';

function UserList({ users, setEditingUser, deleteUser }) {
  const handleDelete = (userId) => {
      deleteUser(userId);
  };
  return (
    <div>
     
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            Name: {user.name}, Email: {user.email}
            <button onClick={() => setEditingUser(user)} className="m-3">Edit</button>
            <button onClick={() => handleDelete(user.id)}>Delete</button>
        
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UserList;
