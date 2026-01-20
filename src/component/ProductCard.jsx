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
      <p className="item_title">{item.title}</p>
      <p class="item_price">&#92;{item.price.toLocaleString()}</p>
      {item.choice ? <p className="item_choice">Consiouse choice</p> : ""}
    </div>
  );
};

export default ProductCard;
