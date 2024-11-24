import React, { useContext } from "react";
import { FaUnlock, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import "./AuthModal.css";
import { AuthModalContext } from "contexts/AuthModalContext/AuthModalContext";
const AuthModal = () => {
  const { setIsAuthModalOpen } = useContext(AuthModalContext);
  return (
    <div className="auth-modal-back">
      <div className="auth-modal">
        <button className="close-btn" onClick={() => setIsAuthModalOpen(false)}>
          <IoMdClose />
        </button>
        <div className="title size">
          <FaUnlock />
          <p>Login</p>
          <FaUnlock />
        </div>
        <div className="info-input size">
          <span className="icon">
            <FaUser />
          </span>
          <input
            type="text"
            className="input"
            placeholder="Your username here..."
          />
        </div>
        <div className="info-input size">
          <span className="icon">
            <RiLockPasswordFill />
          </span>
          <input
            type="text"
            className="input"
            placeholder="Your password here..."
          />
        </div>
        <div className="button-place size">
          <button className="button">Submit</button>
        </div>
        <p>
          No Account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
