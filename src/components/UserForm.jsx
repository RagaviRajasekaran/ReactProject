import React, { useState } from 'react';

function UserForm({ addUser, editUser, userToEdit }) {
  const [user, setUser] = useState(userToEdit || { name: '', email: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userToEdit) {
      editUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: '', email: '' });
  };

  return (
    <div className="container">
      <h2>{userToEdit ? 'Edit User' : 'Add User'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <div className="col-2">
            <input
              className="form-control"
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              placeholder="Name"
            />
          </div>
          <div className="col-2">
            <input
              className="form-control"
              type="text"
              name="email"
              value={user.email}
              onChange={handleChange}
              placeholder="Email"
            />
          </div>
          <div className="col-2">
            <button type="submit">{userToEdit ? 'Update' : 'Add'}</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserForm;
