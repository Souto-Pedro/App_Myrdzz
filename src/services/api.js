import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const getProducts = () => api.get("/products");
export const getCustomers = () => api.get("/customers");
export const getOrders = () => api.get("/orders");
export const createProduct = (data) => api.post("/products", data);
export const createCustomer = (data) => api.post("/customers", data);
export const createOrder = (data) => api.post("/orders", data);
// Adicione funções para update e delete conforme necessário

export default api;
