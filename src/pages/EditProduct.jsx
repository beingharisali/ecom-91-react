import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";

function EditProduct() {
  const [product, setProduct] = useState({
    title: "",
    desc: "",
    price: "",
    rating: "",
    review: "",
  });
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);
  function changeHandler(e) {
    const name = e.target.name;
    const value = e.target.value;
    setProduct({ ...product, [name]: value });
  }
  async function submitHandler(e) {
    e.preventDefault();
    const res = await axios.patch(
      `${process.env.VITE_PUBLIC_BACKEND_URL}/products/${params.id}`,
      product,
    );
    console.log(res);
    toast.success("Product updated successfully");
    setProduct({
      title: "",
      desc: "",
      price: "",
      rating: "",
      review: "",
    });
    navigate("/products");
  }
  async function getProductById() {
    const res = await axios.get(
      `${process.env.VITE_PUBLIC_BACKEND_URL}/products/${params.id}`,
    );
    console.log(res.data);
    setProduct(res.data);
  }
  useEffect(() => {
    getProductById();
  }, []);
  return (
    <div className="container">
      <div className="w-1/2 mx-auto">
        <h1>Edit Product</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Furniture"
              value={product.title}
              name="title"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              placeholder="best product"
              value={product.desc}
              name="desc"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput3">
            <Form.Label>Price</Form.Label>
            <Form.Control
              type="number"
              placeholder="$10"
              value={product.price}
              name="price"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Rating</Form.Label>
            <Form.Control
              type="number"
              placeholder="*****"
              value={product.rating}
              name="password"
              onChange={changeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput4">
            <Form.Label>Review</Form.Label>
            <Form.Control
              type="text"
              placeholder="best"
              value={product.review}
              name="review"
              onChange={changeHandler}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Update
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default EditProduct;
