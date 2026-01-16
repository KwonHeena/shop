import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, id }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div onClick={showDetail} style={{ cursor: "pointer" }}>
      <div>
        <img src={item.img} alt="" />
      </div>
      {item.choice ? <p>Consiouse choice</p> : ""}
      <p>{item.title}</p>
      <p>&#92;{item.price.toLocaleString()}</p>
      {item.new ? <span>New</span> : ""}
    </div>
  );
};

export default ProductCard;
