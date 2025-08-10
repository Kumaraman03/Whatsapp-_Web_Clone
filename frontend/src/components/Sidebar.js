import React from 'react';
import './Sidebar.css';

const Sidebar = ({ users, selectUser }) => (
  <div className="sidebar">
    {users.map((u, i) => (
      <div
        key={i}
        className="sidebar-user"
        onClick={() => selectUser(u)}
      >
        <h3>{u.name || u.wa_id}</h3>
        <p>{u.lastMessage}</p>
      </div>
    ))}
  </div>
);

export default Sidebar;
