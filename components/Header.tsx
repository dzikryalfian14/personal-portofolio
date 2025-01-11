"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import logo from "../public/assets/logo.svg";
import logoDark from "../public/assets/logoDark.svg";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const darkModeButton = (
    <Button
      onClick={toggleDarkMode}
      className="text-sm lg:text-xl rounded-full p-4 h-6 md:h-[44px]"
    >
      {darkMode ? <MdLightMode /> : <MdDarkMode />}
    </Button>
  );

  return (
    <header className="py-8 xl:py-6 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src={darkMode ? logo : logoDark}
            className="w-28 md:w-[150px]"
            alt="logo"
          />
        </Link>

        {/* Dekstop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href={"/contact"}>
            <Button>Hire me</Button>
          </Link>
          {darkModeButton}
        </div>

        {/* Mobile Nav */}
        <div className="lg:hidden flex gap-2 md:gap-4">
          {darkModeButton}
        </div>
      </div>
    </header>
  );
};

export default Header;