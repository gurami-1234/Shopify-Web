import { loginUsingAccessToken } from "helper/api";
import React, { createContext, useEffect, useState } from "react";

export const IsAuthContext = createContext();

const IsAuthContextComponent = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    let accToken = localStorage.getItem("accessToken");
    if (accToken !== null) {
      loginUsingAccessToken(accToken).then((resp) => {
        resp.status === 200 && setIsAuth(true);
      });
    }
  }, []);
  return (
    <IsAuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </IsAuthContext.Provider>
  );
};

export default IsAuthContextComponent;
