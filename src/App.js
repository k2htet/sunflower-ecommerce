import React from "react";
import { Auth } from "./pages";
import Navbar from "./components/Navbar";
import { Container } from "@mui/material";

import { useSelector } from "react-redux";
import AnimatedRoutes from "./components/AnimatedRoute";

const App = () => {
  const token = useSelector((state) => state.auth.token);

  return token === null ? (
    <Auth />
  ) : (
    <Container sx={{ position: "relative" }}>
      <Navbar />
      <AnimatedRoutes />
    </Container>
  );
};

export default App;
