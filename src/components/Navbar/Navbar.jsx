import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import "./Navbar.css";
import { ThemeContext } from "contexts/ThemeContext/ThemeContext";
const Navbar = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
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
          <div className="login">
            <span className="user-icon">
              <FaUser />
            </span>
            Login
          </div>
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
