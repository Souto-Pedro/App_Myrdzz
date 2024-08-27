import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import OrderList from "../components/OrderList";

const Orders = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" gutterBottom>
          Orders
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-order"
        >
          Add Order
        </Button>
      </Box>
      <OrderList />
    </Container>
  );
};

export default Orders;
