import React from "react";
import ProductDetail from "../page/ProductDetail";
import Login from "../page/Login";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ auth }) => {
  return auth ? <ProductDetail /> : <Navigate to="/login" />;
};

export default PrivateRoute;
