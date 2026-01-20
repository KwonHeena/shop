import React from "react";
import { Container } from "react-bootstrap";
import useCartStore from "../store/useCartStore";
import { useState } from "react";

const ProductCart = () => {
  const cart = useCartStore((state) => state.cart);
  let total = 0;
  cart.forEach((e) => {
    total = total + e.price * e.quantity;
  });
  return (
    <Container>
      <h2 style={{ fontSize: 25, textAlign: "center", marginBottom: 30 }}>
        장바구니
      </h2>
      <ul className="cartItem">
        {cart.map((item, idx) => (
          <li key={idx}>
            <div className="img">
              <img src={item.img} alt="" />
            </div>
            <div className="info">
              <p className="title">{item.title}</p>
              <p>수량 : {item.quantity}</p>
              <p>금액 : {(item.quantity * item.price).toLocaleString()}원</p>
            </div>
          </li>
        ))}
      </ul>
      <p style={{ textAlign: "right", marginTop: 25, fontSize: 23 }}>
        총 합계 : {total.toLocaleString()}원
      </p>
    </Container>
  );
};

export default ProductCart;
