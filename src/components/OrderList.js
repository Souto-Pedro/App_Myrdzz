import React, { useState, useEffect } from "react";
import { getOrders } from "../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const OrderList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders().then((response) => setOrders(response.data));
  }, []);

  return (
    <Paper>
      <Typography variant="h6" gutterBottom component="div">
        Orders
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Product</TableCell>
            <TableCell>Quantity</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.Customer.name}</TableCell>
              <TableCell>{order.Product.name}</TableCell>
              <TableCell>{order.quantity}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default OrderList;
