import React, { useState, useEffect } from "react";
import { getProducts } from "../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then((response) => setProducts(response.data));
  }, []);

  return (
    <Paper>
      <Typography variant="h6" gutterBottom component="div">
        Products
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.description}</TableCell>
              <TableCell>{product.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default ProductList;
