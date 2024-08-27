import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import CustomerList from "./components/CustomerList";
import OrderList from "./components/OrderList";
import CRUDOperations from "./components/CRUDOperations";
import Home from "./pages/Home";
import theme from "./theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/customers" element={<CustomerList />} />
          <Route path="/orders" element={<OrderList />} />
          <Route
            path="/create-product"
            element={<CRUDOperations type="product" />}
          />
          <Route
            path="/create-customer"
            element={<CRUDOperations type="customer" />}
          />
          <Route
            path="/create-order"
            element={<CRUDOperations type="order" />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
