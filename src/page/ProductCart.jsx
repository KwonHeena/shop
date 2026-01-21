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
        {cart.length === 0 ? (
          <li
            style={{
              border: "none",
              padding: "15px 0 0 0",
              justifyContent: "center",
              fontSize: 18,
            }}
          >
            장바구니가 비어있습니다 🛒
          </li>
        ) : (
          cart.map((item, idx) => (
            <li key={idx}>
              <div className="img">
                <img src={item.img} alt="" />
              </div>
              <div className="info">
                <div className="text">
                  <p className="title">{item.title}</p>
                  <p className="size">사이즈 : {item.size}</p>
                  <p>수량 : {item.quantity}</p>
                </div>
                <p>금액 : {(item.quantity * item.price).toLocaleString()}원</p>
              </div>
            </li>
          ))
        )}
      </ul>
      <p style={{ textAlign: "right", marginTop: 25, fontSize: 23 }}>
        총 합계 : {total.toLocaleString()}원
      </p>
    </Container>
  );
};

export default ProductCart;
