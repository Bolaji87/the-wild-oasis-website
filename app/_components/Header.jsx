import Navigation from "@/app/_components/Navigation";
import Logo from "@/app/_components/Logo";
import HamburgerMenu from "@/app/_components/HamburgerMenu";
import NavModal from "./NavModal";
import { useNavModal } from "./NavModalContext";
import UseNavigationModal from "./UseNavigationModal";

function Header() {
  return (
    <header className="border-b relative border-primary-900 px-8 py-5">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
        <HamburgerMenu />
        <UseNavigationModal />
      </div>
    </header>
  );
}

export default Header;
