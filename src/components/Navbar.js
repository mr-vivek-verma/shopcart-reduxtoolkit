import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  //with help of useSelector will get the data from store.
  const items = useSelector((state) => state.cart);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="logo">Logo</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
        <span className="cartCount">Cart Items:{items.length}</span>
      </div>
    </div>
  );
};

export default Navbar;
