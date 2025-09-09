import React from "react";
import "./sidebar.css";
import logo from "./assets/logo.png";
import seclogo from "./assets/check.png";
import mic from "./assets/mic.png";
import fifthlogo from "./assets/fifthlogo.png";
import aligncenter from "./assets/align-center.png";
import thirdlogo from "./assets/thirdlogo.png";
import userlogo from "./assets/userlogo.png";

function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(false);

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
      <button className="burger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>
      <ul className={`menu ${isOpen ? "open" : ""}`}>
        <li id="top">
          <img src={seclogo} alt="" />
          მთავარი
        </li>
        <li className="active">
          <img src={thirdlogo} alt="" />
          ტექსტის შედარება
        </li>
        <li id="bottom">
          <img src={mic} alt="" />
          ხმა → ტექსტი
        </li>
        <li>
          <img src={aligncenter} alt="" />
          ტექსტი → ხმა
        </li>
        <li>
          <img src={fifthlogo} alt="" />
          PDF კონვერტაცია
        </li>
      </ul>
      <div className="user">
        <img src={userlogo} alt="" />
        თამარ ონიანი
      </div>
    </div>
  );
}

export default Sidebar;
