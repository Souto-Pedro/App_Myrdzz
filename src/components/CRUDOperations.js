import React, { useState } from "react";
import { TextField, Button, Paper, Typography } from "@mui/material";
import { createProduct, createCustomer, createOrder } from "../services/api";

const CRUDOperations = ({ type }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (type === "product") {
      createProduct(formData).then(() => alert("Product created!"));
    } else if (type === "customer") {
      createCustomer(formData).then(() => alert("Customer created!"));
    } else if (type === "order") {
      createOrder(formData).then(() => alert("Order created!"));
    }
  };

  return (
    <Paper>
      <Typography variant="h6" gutterBottom>
        Create {type}
      </Typography>
      <form>
        {type === "product" && (
          <>
            <TextField
              label="Name"
              name="name"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Description"
              name="description"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Price"
              name="price"
              onChange={handleChange}
              fullWidth
            />
          </>
        )}
        {type === "customer" && (
          <>
            <TextField
              label="Name"
              name="name"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Email"
              name="email"
              onChange={handleChange}
              fullWidth
            />
          </>
        )}
        {type === "order" && (
          <>
            <TextField
              label="Customer ID"
              name="CustomerId"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Product ID"
              name="ProductId"
              onChange={handleChange}
              fullWidth
            />
            <TextField
              label="Quantity"
              name="quantity"
              onChange={handleChange}
              fullWidth
            />
          </>
        )}
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </Paper>
  );
};

export default CRUDOperations;
