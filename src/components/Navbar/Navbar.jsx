import React from "react";
import { FaUser } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FiMoon } from "react-icons/fi";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">Shopify</div>

        <div className="search-container">
          <input type="text" placeholder="Search for a product..." />
          <button>
            <CiSearch />
          </button>
        </div>
        <div className="navigation">
          <div>
            <a href="#">Products</a>
          </div>
          <div>
            <a href="#">Categories</a>
          </div>
          <div>
            <span className="user-icon"><FaUser /></span>
            Login
          </div>
          <button className="icon">
            <AiOutlineShoppingCart />
          </button>
          <button className="icon">
            <FiMoon />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
