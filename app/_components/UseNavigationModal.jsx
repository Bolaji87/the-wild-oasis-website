"use client";
import React from "react";
import { useNavModal } from "./NavModalContext";
import NavModal from "./NavModal";

function UseNavigationModal() {
  const { isOpen } = useNavModal();
  return <>{isOpen && <NavModal />}</>;
}

export default UseNavigationModal;
