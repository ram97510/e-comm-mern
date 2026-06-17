import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaBox,
  FaUserPlus,
  FaList,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "../styles/sidebar.css";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeSidebar = () => setIsOpen(false);

  return (
    <>
      {/* Mobile Menu Button */}

      <button
        className="mobile-toggle"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Overlay */}

      {isOpen && (
        <div
          className="sidebar-overlay"
          onClick={closeSidebar}
        ></div>
      )}

      {/* Sidebar */}

      <aside className={`app-sidebar ${isOpen ? "show" : ""}`}>
        <div className="sidebar-logo">
          <div className="logo-box">
            A
          </div>

          <div>
            <h4>App</h4>
            <small>Admin</small>
          </div>
        </div>

        {/* <p className="menu-title">
          MENU
        </p> */}

        <nav className="sidebar-menu">
          <NavLink
            to="/dashboard"
            onClick={closeSidebar}
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeSidebar}
          >
            <FaBox />
            <span>Products</span>
          </NavLink>

          <NavLink
            to="/register"
            onClick={closeSidebar}
          >
            <FaUserPlus />
            <span>Registration</span>
          </NavLink>

          <NavLink
            to="/list"
            onClick={closeSidebar}
          >
            <FaList />
            <span>List</span>
          </NavLink>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;