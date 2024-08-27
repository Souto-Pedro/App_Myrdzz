import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import CustomerList from "../components/CustomerList";

const Customers = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" gutterBottom>
          Customers
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-customer"
        >
          Add Customer
        </Button>
      </Box>
      <CustomerList />
    </Container>
  );
};

export default Customers;
