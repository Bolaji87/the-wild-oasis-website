import "@/app/_styles/globals.css";
import Header from "@/app/_components/Header";

import { Josefin_Sans } from "next/font/google";
import { ReservationProvider } from "./_components/ReservationContext";
import { NavModalProvider } from "./_components/NavModalContext";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${josefin.className} relative antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col`}
      >
        <NavModalProvider>
          <header>
            <Header />
          </header>
          <div className="flex-1 px-8 py-12 grid">
            <main className="max-w-7xl w-full mx-auto">
              <ReservationProvider>{children}</ReservationProvider>
            </main>
          </div>
        </NavModalProvider>
      </body>
    </html>
  );
}
