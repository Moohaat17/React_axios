import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navStyle = {
    backgroundColor: "#007bff",
    padding: "12px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  };

  const navLinkStyle = {
    fontSize: "1.1rem",
    marginRight: "15px",
    color: "white",
  };

  const navLinkHover = {
    color: "#ffd700",
  };

  return (
    <header>
      <nav className="navbar navbar-expand-lg" style={navStyle}>
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/" style={navLinkStyle}>
            User Manager
          </NavLink>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/" style={navLinkStyle}>
                  📋 User List
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link"
                  to="/CreateUser"
                  style={navLinkStyle}
                >
                  ➕ Create User
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
