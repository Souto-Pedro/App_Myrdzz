import React, { useState, useEffect } from "react";
import { getCustomers } from "../services/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const CustomerList = () => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    getCustomers().then((response) => setCustomers(response.data));
  }, []);

  return (
    <Paper>
      <Typography variant="h6" gutterBottom component="div">
        Customers
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer) => (
            <TableRow key={customer.id}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CustomerList;
