import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  async function fetchProducts() {
    const res = await axios.get("https://ecom-91-node.onrender.com/products");
    setProducts(res.data);
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  async function deleteProduct(id) {
    const data = await axios.delete(
      `https://ecom-91-node.onrender.com/products/${id}`,
    );
    const singleProduct = products.filter(
      (meriProduct) => meriProduct._id !== id,
    );
    setProducts(singleProduct);
    toast.success("Product deleted successfully");
  }
  return (
    <div className="container">
      <div className="products-header flex justify-between items-center">
        <h1>Products Data</h1>
        <Button variant="primary" onClick={() => navigate("/create-product")}>
          Create
        </Button>
      </div>
      <div className="products flex flex-wrap justify-between gap-4">
        {products.map((meriProduct) => {
          return (
            <Card style={{ width: "18rem" }} key={meriProduct._id}>
              <Card.Body>
                <Card.Title>{meriProduct.title}</Card.Title>
                <Card.Text>{meriProduct.desc}</Card.Text>
                <div className="flex justify-between">
                  <Button variant="primary">{meriProduct.price}</Button>
                  <Button
                    variant="secondary"
                    onClick={() => navigate(`/products/${meriProduct._id}`)}
                  >
                    Edit
                  </Button>
                  <Button
                    variant="danger"
                    onClick={() => deleteProduct(meriProduct._id)}
                  >
                    Remove
                  </Button>
                </div>
              </Card.Body>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
