import React from "react";
import com1 from "../assets/images/com1.avif";
const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">
        <div className="featured-text-card">
          <span>Computer</span>
        </div>
        <div className="featured-name">ตั้งหวังเจ๋งภูมิใจเสนอ</div>
        <div className="featured-text-info"></div>
      </div>
      <div className="featured-image">
        <div className="image">
          <img src={com1} alt="com1" />
        </div>
      </div>
      <div className="scroll-icon-box">
        <a href="#about" className="scroll-btn">
          <i className="uil uil-mouse-alt"></i>
          <p>Scroll Down</p>
        </a>
      </div>
    </section>
  );
};

export default FeaturedBox;
