import React from "react";
<<<<<<< HEAD

=======
import com1 from "../assets/images/com1.avif";
import com2 from "../assets/images/com2.avif";
import com4 from "../assets/images/com4.jpg";

//import cv_natthakan from "../assets/download/CV_NATTHAKAN.pdf";
>>>>>>> 7a3448719ffa5afae5d697da564196b315e765d8

const AboutBox = () => {
  return (
    <section className="section" id="about">
      <div className="top-header">
<<<<<<< HEAD
        <h1>About ตั้งหวังเจ๊ง</h1>
      </div>
=======
        <h1>คอมตั้งหวังเจ๋ง</h1>
      </div>

>>>>>>> 7a3448719ffa5afae5d697da564196b315e765d8
      <div className="row">
        {/**About Me */}
        <div className="col">
          <div className="about-info">
<<<<<<< HEAD
            <h3>By ตั้งหวังเจ๊ง</h3>
            <p>
            ยินดีต้อนรับสู่ ตั้งหวังเจ๊ง! เราคือแหล่งรวมโน๊ตบุ๊คคุณภาพสูงที่ตอบโจทย์ทุกความต้องการ ไม่ว่าคุณจะเป็นนักเรียน นักศึกษา มืออาชีพ หรือผู้ที่ชื่นชอบเทคโนโลยี โน๊ตบุ๊คของเราถูกคัดสรรมาเพื่อให้คุณสามารถทำงาน เรียนรู้ และสร้างสรรค์ผลงานได้อย่างมีประสิทธิภาพ

เรามีโน๊ตบุ๊คจากแบรนด์ชั้นนำมากมาย เช่น Dell , HP , Lenovo , Apple , Asus และอื่นๆอีกมากมาย โดยมุ่งเน้นที่คุณภาพ การออกแบบที่สวยงาม และฟังก์ชันการใช้งานที่หลากหลาย นอกจากนี้ เรายังมีทีมงานมืออาชีพพร้อมให้คำแนะนำและบริการหลังการขายเพื่อให้คุณมั่นใจในทุกการเลือกซื้อ

ที่ ตั้งหวังเจ๊ง เราเชื่อว่าการมีโน๊ตบุ๊คที่ดีจะช่วยเปลี่ยนแปลงชีวิตของคุณให้ดีขึ้น พร้อมให้คุณก้าวเข้าสู่ยุคดิจิทัลอย่างมั่นใจ มาร่วมค้นหาโน๊ตบุ๊คในฝันของคุณกับเราได้แล้ววันนี้!
            </p>
            <div className="about-btn">
            </div>
          </div>
        </div>
        {/**Skills */}
        <div className="col">
          <div className="skills-box">
            <div className="skills-header">
              <h3>ยี่ห้อที่ทางเราเเนะนำ🫶🏻</h3>
            </div>
            <div className="skills-list">
              <span>Acer - โน๊ตบุ๊ค Acer มีหลากหลายรุ่นในราคาที่เข้าถึงได้ เช่น Aspire และ Predator ที่เหมาะสำหรับการเล่นเกม</span>
              <span>Microsoft - Surface Series จาก Microsoft มีดีไซน์ที่พกพาสะดวกและระบบปฏิบัติการ Windows ที่ใช้งานง่าย</span>
              <span>Razer - Razer มีโน๊ตบุ๊คสำหรับเกมเมอร์ที่มีประสิทธิภาพสูง เช่น Razer Blade ซึ่งเหมาะสำหรับการเล่นเกมและการสร้างสรรค์</span>
              <span>Toshiba - โน๊ตบุ๊ค Toshiba มีความทนทานและราคาเหมาะสม เช่น Dynabook และ Satellite</span>
              <span>Samsung - โน๊ตบุ๊ค Samsung มีดีไซน์ที่ทันสมัยและคุณสมบัติที่ดี เช่น Galaxy Book Series</span>
              <span>LG - LG มีโน๊ตบุ๊คที่มีความบางเบาและน้ำหนักเบา เช่น LG Gram เหมาะสำหรับการพกพา</span>
            
            </div>
          </div>
          
         
          
        </div>
=======
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
>>>>>>> 7a3448719ffa5afae5d697da564196b315e765d8
      </div>
    </section>
  );
};

export default AboutBox;
