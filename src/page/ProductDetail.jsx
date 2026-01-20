import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import useCartStore from "../store/useCartStore";

const ProductDetail = () => {
  const [item, setItem] = useState({});
  const [totalPrice, setTotalPrice] = useState("");
  const { id } = useParams();

  // 수량
  const [num, setNum] = useState(1);
  // 수량 버튼 disabeld
  const [plusDisabled, setPlusDisabled] = useState(false);
  const [minusDisabled, setMinusDisabled] = useState(true);

  // 사이즈 선택
  const [size, setSize] = useState();

  const getUrlFetch = async () => {
    const url = `https://my-json-server.typicode.com/KwonHeena/shop/products/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setItem(data);
  };

  useEffect(() => {
    getUrlFetch();
  }, []);

  useEffect(() => {
    setTotalPrice((num * item.price).toLocaleString());
  }, [num, item]);

  // 수량 플러스
  const plusBtn = () => {
    if (num >= 4) {
      setNum(5);
      setPlusDisabled(true);
    } else {
      setNum((prev) => prev + 1);
      setMinusDisabled(false);
    }
    setTotalPrice((num * item.price).toLocaleString());
  };
  // 수량 마이너스
  const minusBtn = () => {
    if (num <= 2) {
      setNum(1);
      setMinusDisabled(true);
    } else {
      setNum((prev) => prev - 1);
      setPlusDisabled(false);
    }
    setTotalPrice((num * item.price).toLocaleString());
  };

  // 장바구니 추가
  const addCartStore = useCartStore((state) => state.addToCart);

  const addToCart = () => {
    if (!size) {
      alert("사이즈를 선택하세요");
      return;
    } else {
      alert("장바구니에 추가되었습니다.");
    }
    addCartStore({
      id: item.id,
      title: item.title,
      price: item.price,
      img: item.img,
      size: size,
      quantity: num,
    });
  };

  return (
    <Container className="product_detail_wrap">
      <Row style={{ justifyContent: "flex-end" }}>
        <Col xs={6} className="product_img">
          <img src={item.img} alt="" />
        </Col>
        <Col xs={6}>
          <p className="title">{item.title}</p>
          <p className="price">&#92;{item?.price?.toLocaleString()}</p>
          {item.choice && <p className="choice">Consiouse choice</p>}
          <Form.Select
            className="size_select"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          >
            <option>사이즈 선택</option>
            {item?.size?.map((i, idx) => (
              <option key={idx} value={i}>
                {i}
              </option>
            ))}
          </Form.Select>
          <Col>
            <div className="box">
              <Button onClick={plusBtn} disabled={plusDisabled}>
                +
              </Button>
              <Form.Control
                type="number"
                id="num"
                value={num}
                onChange={(e) => setNum(e.target.value)}
              />
              <Button onClick={minusBtn} disabled={minusDisabled}>
                -
              </Button>
            </div>
          </Col>
          <Col className="totalPrice">총 금액 : {totalPrice}원</Col>
          <Button variant="dark" className="addCart" onClick={addToCart}>
            장바구니에 추가
          </Button>
          <Col></Col>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
