import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import ProductList from "../components/ProductList";

const Products = () => {
  return (
    <Container>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h4" gutterBottom>
          Products
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/create-product"
        >
          Add Product
        </Button>
      </Box>
      <ProductList />
    </Container>
  );
};

export default Products;
