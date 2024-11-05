import React from "react";

const Header = () => {
  const menuFunction = () => {
    const menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <p className="nav-name">ตั้งหวังเจ๊ง</p>
      </div>

      <div className="button">
        <div className="button-search">
          <div className="icon-search">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
        </div>
      </div>

      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">หน้าแรก</a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">About</a>
          </li>
          <li className="nav_list">
            <a href="#projects" className="nav-link">Products</a>
          </li>
          <li className="nav_list">
            <a href="#contact" className="nav-link">Contact</a>
          </li>
        </ul>
      </div>

      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
