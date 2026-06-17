import { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../theme/ThemeContext";
import { useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaMoon, FaSun, FaUser, FaCaretDown } from "react-icons/fa";

function Toggle() {
  const { toggleTheme, theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const handleLogout = () => {
    sessionStorage.removeItem("isVerified");
    navigate("/");
  };

  // Close dropdown when clicking outside
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
    <div>
      <main className="main-content toggle">
        <header className="dashboard-header">
          <div className="header-left"></div>
          <div className="header-right">
            <div className="profile-dropdown" ref={dropdownRef}>
              <button
                className="profile-icon-btn"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <FaUser />
                <FaCaretDown className={`caret-icon ${showDropdown ? 'open' : ''}`} />
              </button>

              {showDropdown && (
                <div className="dropdown-menu">
                  <button className="dropdown-item theme-btn" onClick={toggleTheme}>
                    {theme === 'light' ? <FaMoon /> : <FaSun />}
                    <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
                  </button>
                  <button className="dropdown-item logout-btn" onClick={handleLogout}>
                    <FaSignOutAlt />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </header>
      </main>
    </div>
  );
}

export default Toggle;