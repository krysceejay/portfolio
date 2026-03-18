import { Outlet, Link } from "react-router";

const MainLayout = () => {
  return (
    <>
      <header className="bg-red-500 p-0 sticky top-0 z-50 w-full px-6 h-7">
        header
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
