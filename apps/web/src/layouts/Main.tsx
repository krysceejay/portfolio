import { useState } from "react";
import { Link, Outlet } from "react-router";

import ThemeToggle from "@repo/ui/ThemeToggle";

const navLinks = [
  { name: "Brands", id: "brands" },
  { name: "Services", id: "services" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

const MainLayout = () => {
  // const [copy, setCopy] = useState("Copy");

  // const handleCopy = async (text: string) => {
  //   try {
  //     await navigator.clipboard.writeText(text);
  //     setCopy("Copied");
  //     setTimeout(function () {
  //       setCopy("Copy");
  //     }, 4000);
  //   } catch (error) {
  //     null;
  //   }
  // };

  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth" });
    setOpen(false); // close drawer on mobile
  };

  return (
    <>
      {/* <header className="bg-pearl-white p-0 sticky top-0 z-50 w-full">
        <div className="container">
          <nav className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <span className="no-underline">chijiokechrys@gmail.com</span>
              <button
                className="bg-white py-1.5 px-4 rounded-full cursor-pointer text-sm focus-visible:outline-transparent"
                onClick={() => handleCopy("chijiokechrys@gmail.com")}
              >
                {copy}
              </button>
            </div>
            <div className="flex items-center">
              <Link
                to="https://www.linkedin.com/in/christopher-chijioke-b1b457131/"
                target="_blank"
                className="cursor-pointer"
              >
                LinkedIn
              </Link>
              &ensp;/&ensp;
              <Link
                to="https://github.com/krysceejay"
                target="_blank"
                className="cursor-pointer"
              >
                GitHub
              </Link>
            </div>
          </nav>
        </div>
      </header> */}
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-(--bg) text-(--text) backdrop-blur border-b border-(--bg-border)/10">
        <div className="container">
          <div className="mx-auto flex items-center justify-between py-5">
            {/* Logo */}
            <div className="w-10 h-10">
              <img
                src="/assets/images/logo.png"
                alt="Logo"
                className="h-full w-full object-contain"
              />
            </div>
            {/* Desktop Nav */}
            <nav className="hidden md:flex gap-8">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="hover:text-black transition cursor-pointer font-medium"
                >
                  {link.name}
                </button>
              ))}
            </nav>
            <div className="flex items-center">
              <Link
                to="https://www.linkedin.com/in/christopher-chijioke-b1b457131/"
                target="_blank"
                className="cursor-pointer"
              >
                LinkedIn
              </Link>
              &ensp;/&ensp;
              <Link
                to="https://github.com/krysceejay"
                target="_blank"
                className="cursor-pointer"
              >
                GitHub
              </Link>
            </div>
            <div className="flex items-center space-x-6">
              <ThemeToggle />
              {/* Mobile Menu Button */}
              <button onClick={() => setOpen(true)} className="md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 font-extrabold"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible md:invisible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/40 transition-opacity ${
            open ? "opacity-100 md:opacity-0" : "opacity-0"
          }`}
        />

        {/* Drawer Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-[75%] max-w-sm bg-off-white shadow-xl transform transition-transform ${
            open ? "translate-x-0 md:translate-x-full" : "translate-x-full"
          }`}
        >
          <div className="py-6 px-7 flex flex-col gap-6">
            {/* Close */}
            <button onClick={() => setOpen(false)} className="self-end text-xl">
              ✕
            </button>

            {/* Links */}
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg hover:text-black transition font-medium"
              >
                {link.name}
              </button>
            ))}
          </div>
        </div>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
