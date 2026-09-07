import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

import Loader from "@repo/ui/Loader";

//Layout
import AppLayout from "@layouts/Layout";
import MainLayout from "@layouts/Main";

//Home
const Home = lazy(() => import("@pages/index"));
const Resume = lazy(() => import("@pages/Resume"));

const App = () => {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
        <Route
          path="resume"
          element={
            <Suspense fallback={<Loader />}>
              <Resume />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="*"
        element={
          <div className="h-dvh flex justify-center items-center text-lg">
            Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default App;
