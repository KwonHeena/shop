import React, { useState } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import ProductAll from "./page/ProductAll";
import ProductDetail from "./page/ProductDetail";
import Login from "./page/Login";
import NavBar from "./component/NavBar";
import PrivateRoute from "./route/PrivateRoute";

// 전체상품페이지, 로그인, 상품상세페이지
// 전체 상품페이지에서 전체상품 보기
// 로그인 버튼 누르면 로그인  페이지 이동
// 상품 디테일 눌렀을 때 로그인 안돼있으면 로그인페이지로 이동
// 로그인 되어 있으면 상품 디테일 페이지 표출
// 로그아웃 버튼 클릭하면 로그아웃됨
// 로그인 하면 로그아웃이 보이고, 로그아웃 하면 로그인 글자바뀜
// 상품 검색 가능
const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <div>
      <NavBar auth={auth} setAuth={setAuth} />
      <Routes>
        <Route path="/" element={<ProductAll />} />
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/products/:id" element={<PrivateRoute auth={auth} />} />
      </Routes>
    </div>
  );
};

export default App;
