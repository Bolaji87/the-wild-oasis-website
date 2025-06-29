"use client";

import { NavModalProvider } from "./NavModalContext";
import { ReservationProvider } from "./ReservationContext";

export default function ClientProviders({ children }) {
  return (
    <NavModalProvider>
      <ReservationProvider>{children}</ReservationProvider>
    </NavModalProvider>
  );
}
