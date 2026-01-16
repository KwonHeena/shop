import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container } from "react-bootstrap";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  const getProducts = async () => {
    const url = "http://localhost:5000/products";
    const res = await fetch(url);
    const data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <section>
      <Container className="item_list">
        {productList.map((item) => (
          <ProductCard key={item.id} item={item} id={item.id} />
        ))}
      </Container>
    </section>
  );
};

export default ProductAll;
