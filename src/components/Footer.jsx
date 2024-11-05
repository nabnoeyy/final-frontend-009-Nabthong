import React from "react";
import logo from "../assets/images/logo.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="top-footer">
        <p5>ช้อปสินค้าไอทีได้ง่าย ตลอด 24 ชั่วโมง</p5>
      </div>
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className="footer-social-icons">
        <div className="icon">
          <a href="https://www.instagram.com/">
            <i className="uil uil-instagram-alt"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://www.facebook.com/?locale=th_TH">
            <i className="uil uil-facebook"></i>
          </a>
        </div>
        <div className="icon">
          <a href="https://github.com/FAYRESU">
            <i className="uil uil-github"></i>
          </a>
        </div>
      </div>
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            ร้านตั้งหวังเจ๋ง
          </a>{" "}
          - All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
