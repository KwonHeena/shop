import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form } from "react-bootstrap";
import {
  faRightToBracket,
  faRightFromBracket,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ auth, setAuth }) => {
  const menuList = ["전체", "아우터", "상의", "하의"];
  const navigate = useNavigate();

  // 로그인 화면으로 이동
  const goToLogin = () => {
    if (auth) {
      setAuth(false);
    } else {
      navigate("/login");
    }
  };

  // 장바구니로 이동
  const goToCart = () => {
    navigate("/cart");
  };

  // 검색어
  const search = (e) => {
    let keyword = e.target.value.trim();
    navigate(`/?q=${keyword}`);
    if (!keyword) {
      navigate("/");
    }
  };

  // 메뉴 클릭
  const searchCategory = (item) => {
    navigate(`/?q=${item}`);
    if (item === "전체") {
      navigate("/");
    }
  };
  return (
    <Container>
      <header>
        <div className="header_inner">
          <div className="hd_top">
            <div className="login_button">
              <button onClick={goToLogin}>
                {auth ? (
                  <p>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    로그아웃
                  </p>
                ) : (
                  <p>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    로그인
                  </p>
                )}
              </button>
            </div>
            <div className="cart_button">
              <button onClick={goToCart}>
                <FontAwesomeIcon icon={faCartShopping} />
                장바구니
              </button>
            </div>
          </div>
          <div className="logo">
            <Link to="/">Shop</Link>
          </div>
          <div className="nav">
            <nav>
              <ul>
                {menuList.map((item, idx) => (
                  <li key={idx}>
                    <button onClick={() => searchCategory(item)}>{item}</button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="search_box">
              <Form.Control
                type="text"
                placeholder="검색어 입력"
                onChange={search}
              />
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
