import React from "react";
import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to the CRUD App
      </Typography>
      <Typography variant="body1">
        Use the navigation bar to manage products, customers, and orders.
      </Typography>
    </Container>
  );
};

export default Home;
