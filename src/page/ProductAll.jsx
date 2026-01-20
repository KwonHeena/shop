import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Container } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

const ProductAll = () => {
  const [productList, setProductList] = useState([]);
  let [query] = useSearchParams();
  const getProducts = async () => {
    let searchQuery = query.get("q") || "";
    let url = "https://my-json-server.typicode.com/KwonHeena/shop/products";

    if (["아우터", "상의", "하의", "액세서리"].includes(searchQuery)) {
      url += `?type=${searchQuery}`;
    } else {
      url += `?q=${searchQuery}`;
    }

    let res = await fetch(url);
    let data = await res.json();
    setProductList(data);
  };
  useEffect(() => {
    getProducts();
  }, [query]);
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
