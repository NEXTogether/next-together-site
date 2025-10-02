"use client";

import { useState } from "react";
import Image from "next/image";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { redirect } from "next/navigation";

type PagesItem = {
  href: string;
  mobileOnly?: boolean;
};

type Pages = Record<string, PagesItem>;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pages: Pages = {
    Home: {
      href: "/",
    },
    "Chi Siamo": {
      href: "/pag-1#team",
    },
    "I nostri Supporters": {
      href: "/pag-1#supporters",
    },
    "Richiedi la Demo": {
      href: "/demo-form",
      mobileOnly: true,
    },
  };

  return (
    <div className="fixed flex flex-row justify-between w-full p-2 z-100 bg-[#111216]">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src="/loghis.png"
          alt="NEXT:Together"
          className="h-8 w-auto cursor-pointer"
          onClick={() => redirect("/")}
        />
      </div>

      {/* Right side: Links + Button grouped together */}
      <div className="flex items-center space-x-2">
        {/* Buttons */}
        <div className="text-2xl h-fit self-center hidden lg:block">
          <ul className="flex flex-row overflow-x-auto">
            {Object.entries(pages).map(([pag, vars], idx) => (
              <li key={idx} className="flex">
                <a
                  className={`flex ${
                    vars.mobileOnly ? "lg:hidden" : ""
                  } w-full px-4 py-2 whitespace-nowrap truncate hover:cursor-pointer text-white`}
                  onClick={() => {
                    setMenuOpen(false);
                    redirect(vars.href);
                  }}
                >
                  {pag}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <a
          className="hidden lg:flex text-base shrink-0 self-center px-4 py-2 bg-white rounded-full text-black font-semibold border-2 border-yellow-400 hover:cursor-pointer"
        onClick={() => {
          setMenuOpen(false);
          redirect("/demo-form");
        }}
      >
        Richiedi la Demo
      </a>
      </div>

      {/* Mobile Hamburgher button */}
      <button
        className="text-4xl aspect-square block lg:hidden w-fit z-100"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
      </button>
      {menuOpen ? (
        <div className="absolute flex top-0 left-0 text-2xl min-h-screen w-full bg-black/75 justify-center items-center z-75 backdrop-blur-sm">
          <ul className="space-y-4">
            {Object.entries(pages).map(([pag, vars], idx) => (
              <li key={idx} className="flex">
                <a
                  onClick={() => {
                    setMenuOpen(false);
                    redirect(vars.href);
                  }}
                >
                  {pag}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}
