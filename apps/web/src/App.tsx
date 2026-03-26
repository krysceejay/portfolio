import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import Loader from "@repo/ui/Loader";

//Layout
import MainLayout from "@layouts/Main";

//Home
const Home = lazy(() => import("@pages/index"));
const Scroll = lazy(() => import("@pages/scroll"));

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path="/scroll"
          element={
            <Suspense fallback={<Loader />}>
              <Scroll />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
