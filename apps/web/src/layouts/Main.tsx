import { useState } from "react";
import { Outlet, Link } from "react-router";

const MainLayout = () => {
  const [copy, setCopy] = useState("Copy");

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopy("Copied");
      setTimeout(function () {
        setCopy("Copy");
      }, 4000);
    } catch (error) {
      null;
    }
  };
  return (
    <>
      <header className="bg-pearl-white p-0 sticky top-0 z-50 w-full">
        <div className="container">
          <nav className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 items-center justify-between py-6">
            <div className="flex items-center space-x-4">
              <span>chijiokechrys@gmail.com</span>
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
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
