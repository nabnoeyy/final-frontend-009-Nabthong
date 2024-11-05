import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <p>ตั้งหวังเจ๊ง</p>
        <p>ช้อปสินค้าไอทีได้ง่าย ตลอด 24 ชั่วโมง</p>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">หน้าแรก</a>
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Products</a>
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <a href="https://www.instagram.com/nabnoeyy" aria-label="Instagram">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/profile.php?id=100027080432483" aria-label="Facebook">
            <i className="uil uil-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/nabnoeyy" aria-label="GitHub">
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            ตั้งหวังเจ๊ง ร้านตั้งหวังเจ๋ง
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
