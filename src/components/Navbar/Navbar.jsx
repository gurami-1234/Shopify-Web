import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";

import "./Navbar.css";
import { ThemeContext } from "contexts/ThemeContext/ThemeContext";
import { AuthModalContext } from "contexts/AuthModalContext/AuthModalContext";
import { IsAuthContext } from "contexts/IsAuthContext/IsAuthContext";
const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const { setIsAuthModalOpen } = useContext(AuthModalContext);
  const { isAuth, setIsAuth } = useContext(IsAuthContext);
  const logOut = () => {
    setIsAuth(false);
    localStorage.removeItem("accessToken");
  };
  return (
    <nav className={isDark ? "navbar dark" : "navbar"}>
      <div className="nav-container">
        <div className="logo">
          <Link to="/">Shopify</Link>
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search for a product..." />
          <button>
            <CiSearch />
          </button>
        </div>
        <div className="navigation">
          <div>
            <Link to="/products">Products</Link>
          </div>
          <div>
            <a href="/categories">Categories</a>
          </div>
          {isAuth ? (
            <button className="log-out-btn" onClick={logOut}>
              <IoLogOutOutline /> Logout
            </button>
          ) : (
            <div className="login" onClick={() => setIsAuthModalOpen(true)}>
              <span className="user-icon">
                <FaUser />
              </span>
              <span>Login</span>
            </div>
          )}
          <button className="icon">
            <AiOutlineShoppingCart />
          </button>
          <button className="icon" onClick={() => setIsDark(!isDark)}>
            {isDark ? <IoSunnyOutline size={25} /> : <FiMoon />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
