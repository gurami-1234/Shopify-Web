import React, { createContext, useState } from "react";

export const AuthModalContext = createContext();
const AuthModalContextComponent = ({ children }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  return (
    <AuthModalContext.Provider value={{ isAuthModalOpen, setIsAuthModalOpen }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export default AuthModalContextComponent;
