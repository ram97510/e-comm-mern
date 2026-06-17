import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaMoon, FaSun, FaUser, FaCaretDown } from "react-icons/fa";
import Sidebar from "./Sidebar";
import "../styles/layout.css";

function Layout({ children }) {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    sessionStorage.removeItem("isVerified");
    navigate("/");
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="app-layout-container">
      <Sidebar />
      <main className="app-layout-main">
        <header className="app-layout-header">
          <div className="app-layout-header-left">
            <h1></h1>
            <p></p>
          </div>
          <div className="app-layout-header-right">
            <div className="app-profile-dropdown" ref={dropdownRef}>
              <button
                className="app-profile-icon-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FaUser />
                <FaCaretDown className={`app-caret-icon ${showDropdown ? 'open' : ''}`} />
              </button>

              {showDropdown && (
                <div className="app-dropdown-menu">
                  <button className="app-dropdown-item app-theme-btn" onClick={toggleTheme}>
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                    <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                  </button>
                  <button className="app-dropdown-item app-logout-btn" onClick={handleLogout}>
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
        {children}
      </main>
    </div>
  );
}

export default Layout;