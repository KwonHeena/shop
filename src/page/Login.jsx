import React, { useState } from "react";
import { Button, Form, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuth }) => {
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const navigate = useNavigate();
  const loginUser = (e) => {
    e.preventDefault();
    if (!email.trim() || !pw.trim()) {
      alert("로그인 정보를 입력하세요.");
    } else {
      setAuth(true);
      navigate("/");
    }
  };
  return (
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>이메일 주소</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>비밀번호</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" type="submit" size="md" className="loginBtn">
          로그인
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
