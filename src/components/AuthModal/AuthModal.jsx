import React, { useContext, useEffect, useState } from "react";
import { FaUnlock, FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import "./AuthModal.css";
import { AuthModalContext } from "contexts/AuthModalContext/AuthModalContext";
import { getAccessTokenFromAPI, loginUsingAccessToken } from "helper/api";
import { IsAuthContext } from "contexts/IsAuthContext/IsAuthContext";
const AuthModal = () => {
  const { setIsAuthModalOpen } = useContext(AuthModalContext);
  const { setIsAuth } = useContext(IsAuthContext);
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });
  const getAccessToken = () => {
    getAccessTokenFromAPI(userData).then((resp) => {
      localStorage.setItem("accessToken", resp);
      loginUsingAccessToken(resp).then(() => setIsAuth(true));
      setIsAuthModalOpen(false);
    });
  };

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
            onChange={(e) =>
              setUserData({ ...userData, username: e.target.value })
            }
            value={userData.username}
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
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            value={userData.password}
            placeholder="Your password here..."
          />
        </div>
        <div className="button-place size">
          <button className="button" onClick={getAccessToken}>
            Submit
          </button>
        </div>
        <p>
          No Account? <a href="#">Register</a>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
