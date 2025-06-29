"use client";
import React from "react";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";
import { useNavModal } from "./NavModalContext";

function HamburgerMenu() {
  const { toggleModal, isOpen } = useNavModal();
  return (
    <div className="text-3xl z-10 sm:hidden hover:text-accent-400 transition-colors ease-in-out font-bold">
      {isOpen ? (
        <FaTimes onClick={toggleModal} />
      ) : (
        <HiMenu onClick={toggleModal} />
      )}
    </div>
  );
}

export default HamburgerMenu;
