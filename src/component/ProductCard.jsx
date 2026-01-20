import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, id }) => {
  const navigate = useNavigate();
  const showDetail = () => {
    navigate(`/products/${id}`);
  };
  return (
    <div onClick={showDetail} style={{ cursor: "pointer" }}>
      <div className="img_wrap">
        <img src={item.img} alt="" />
        {item.new ? <span className="new">New</span> : ""}
      </div>
      {item.choice ? <p>Consiouse choice</p> : ""}
      <p>{item.title}</p>
      <p>&#92;{item.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
