import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router";

//Layout
import MainLayout from "@layouts/Main";

//Home
const Home = lazy(() => import("@pages/index"));

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <Home />
            </Suspense>
          }
        />
      </Route>
    </Routes>
  );
};

export default App;
