"use client";

import { useContext, createContext, useState } from "react";

const NavModalContext = createContext();

function NavModalProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen((prev) => !prev);
  }
  return (
    <NavModalContext.Provider value={{ isOpen, setIsOpen, toggleModal }}>
      {children}
    </NavModalContext.Provider>
  );
}

function useNavModal() {
  const context = useContext(NavModalContext);
  if (!context) {
    throw new Error("useNavModal must be used within a NavModalProvider");
  }
  return context;
}

export { NavModalProvider, useNavModal };
