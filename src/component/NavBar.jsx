import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Form } from "react-bootstrap";
import {
  faRightToBracket,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = ({ auth, setAuth }) => {
  const menuList = ["아우터", "상의", "하의", "액세서리"];
  const navigate = useNavigate();
  const goToLogin = () => {
    if (auth) {
      setAuth(false);
    } else {
      navigate("/login");
    }
    navigate("/login");
  };
  return (
    <Container>
      <header>
        <div className="header_inner">
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
          <div className="logo">
            <Link to="/">LOGO</Link>
          </div>
          <div className="nav">
            <nav>
              <ul>
                {menuList.map((item, idx) => (
                  <li key={idx}>
                    <button>{item}</button>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="search_box">
              <Form.Control type="text" placeholder="검색어 입력" />
            </div>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default NavBar;
