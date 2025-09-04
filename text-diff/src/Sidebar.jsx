import React from "react";
import "./Sidebar.css";
import logo from "./assets/logo.png";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "70px",
            height: "70px",
            borderRadius: "8px",
            marginRight: "10px",
          }}
        />
        <span>ENAGRAM</span>
      </div>
      <ul className="menu">
        <li id="top">მთავარი</li>
        <li className="active">ტექსტის შედარება</li>
        <li id="bottom">ხმა → ტექსტი</li>
        <li>ტექსტი → ხმა</li>
        <li>PDF კონვერტაცია</li>
      </ul>
      <div className="user">თამარ ონიანი</div>
    </div>
  );
}

export default Sidebar;
