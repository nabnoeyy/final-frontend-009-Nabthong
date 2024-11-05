import React from "react";
import com1 from "../assets/images/com1.avif";
import com2 from "../assets/images/com2.avif";
import com4 from "../assets/images/com4.jpg";

//import cv_natthakan from "../assets/download/CV_NATTHAKAN.pdf";

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
        <h1>คอมตั้งหวังเจ๋ง</h1>
      </div>

      <div className="row">
        {/**About Me */}
        <div className="col">
          <div className="about-info">
            <h3>Product</h3>
            <div className="image">
              <img src={com1} alt="com1" />
            </div>
            <p1>IdeaPad 3i (15", Gen 7)</p1>
            <p>ราคา ฿17,002.03 </p>
            <div className="about-btn">
              <div className="nav-button">
                {/*<a href={cv_natthakan} target="_blank">*/}
                <button className="btn">
                  เพิ่มไปยังตะกร้า <i class="fa-solid fa-cart-shopping"></i>
                </button>
                {/*</a>*/}
              </div>
            </div>
          </div>

          <div className="about-info">
            <h3>Product</h3>
            <div className="image">
              <img src={com2} alt="com2" />
            </div>
            <p1>Yoga Slim 7i (14", Gen 9)</p1>
            <p>ราคา ฿28,878.34 </p>
            <div className="about-btn">
              <div className="nav-button">
                {/*<a href={cv_natthakan} target="_blank">*/}
                <button className="btn">
                  เพิ่มไปยังตะกร้า <i class="fa-solid fa-cart-shopping"></i>
                </button>
                {/*</a>*/}
              </div>
            </div>
          </div>
        </div>

        <div className="about-info">
          <h3>Product</h3>
          <div className="image">
            <img src={com4} alt="com4" />
          </div>
          <p1>HP Probook 255 G10 Standard SET</p1>
          <p>ราคา ฿14,587</p>
          <div className="about-btn">
            <div className="nav-button">
              {/*<a href={cv_natthakan} target="_blank">*/}
              <button className="btn">
                เพิ่มไปยังตะกร้า <i class="fa-solid fa-cart-shopping"></i>
              </button>
              {/*</a>*/}
            </div>
          </div>
        </div>

        {/**Skills */}
        {/* <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>FrontEnd</h3>
            </div>
            <div className="skills-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
              <span>Bootstrap</span>
              <span>Tailwind</span>
              <span>React</span>
              <span>Figma</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>BackEnd</h3>
            </div>
            <div className="skills-list">
              <span>PHP</span>
              <span>Javascript</span>
            </div>
          </div>
          <div className="skills-box">
            <div className="skills-header">
              <h3>Database</h3>
            </div>
            <div className="skills-list">
              <span>MYSQL</span>
              <span>PostgreSQL</span>
              <span>MongoSQL</span>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutBox;
