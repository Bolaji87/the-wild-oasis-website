import React from "react";

import {
  HomeIcon,
  InformationCircleIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

const navModalLinks = [
  {
    name: "Cabins",
    icon: <HomeIcon className="text-primary-300 h-5 w-5" />,
    href: "/cabins",
  },
  {
    name: "About",
    icon: <InformationCircleIcon className="w-6 h-6 text-primary-300" />,
    href: "/about",
  },
  {
    name: "Guest area",
    icon: <UserIcon className="text-primary-300 h-5 w-5" />,
    href: "/account",
  },
];

function NavModal() {
  return (
    <nav className="sm:hidden block absolute z-50 top-28 bg-accent-700 rounded-sm p-6 right-4">
      <ul className="flex flex-col gap-8">
        {navModalLinks.map((link) => (
          <li key={link.name}>
            <Link
              className="flex text-2xl gap-4 hover:text-primary-200"
              href={link.href}
            >
              {link.icon}
              <span> {link.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavModal;
