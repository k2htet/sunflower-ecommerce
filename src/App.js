import React, { lazy, Suspense } from "react";
import { Container } from "@mui/material";
import { useSelector } from "react-redux";
import AnimatedRoutes from "./components/AnimatedRoute";

import Navbar from "./components/Navbar";
import Loader from "./components/Loader";

const Auth = lazy(() => import("./pages/Auth"));

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return token === null ? (
    <Suspense fallback={<Loader />}>
      <Auth />
    </Suspense>
  ) : (
    <Container sx={{ position: "relative" }}>
      <Navbar />
      <AnimatedRoutes />
    </Container>
  );
};

export default App;
