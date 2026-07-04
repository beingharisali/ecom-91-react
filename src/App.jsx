import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Products from "./pages/Products";
import CreateProduct from "./pages/CreateProduct";
import EditProduct from "./pages/EditProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/products/:id" element={<EditProduct />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
