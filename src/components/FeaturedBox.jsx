import React from "react";

// import com1 from "../assets/images/com1.webp";

// import com1 from "../assets/images/com1.avif";

const FeaturedBox = () => {
  return (
    <section className="featured-box" id="home">
      <div className="featured-text">

        <div className="featured-name">
        ตั้งหวังเจ๊งยินดีต้อนรับ
        </div>
        <div className="featured-text-info">
          <p>
          "สำรวจโลกของเทคโนโลยีที่ทันสมัยและดีไซน์ที่โดดเด่นซึ่งจะทำให้คุณโดดเด่นในทุกการใช้งาน ด้วยฟังก์ชันการทำงานที่ครบครันและประสิทธิภาพที่เหนือชั้น เรามั่นใจว่าโน๊ตบุ๊คของเราจะช่วยให้คุณทำงานได้อย่างราบรื่นและสนุกสนาน ไม่ว่าจะอยู่ที่บ้าน ที่ทำงาน หรือระหว่างเดินทาง"
          </p>
        </div>
        <div className="featured-text-btn">
          <button className="btn">
            ช่องทางติดต่อตั้งหวังเจ๊ง <i className="uil uil-import"></i>
          </button>
        </div>
        <div className="social_icons">
          <div className="icon">
            <a href="https://www.instagram.com/nabnoeyy">
              <i className="uil uil-instagram-alt"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://www.facebook.com/profile.php?id=100027080432483">
              <i className="uil uil-facebook"></i>
            </a>
          </div>
          <div className="icon">
            <a href="https://github.com/nabnoeyy">
              <i className="uil uil-github"></i>
            </a>
          </div>
        </div>

       
        <div className="featured-name"></div>
        <div className="featured-text-info"></div>

      </div>
      <div className="featured-image">
        <div className="image">
          {/* <img src={com1} alt="com1" /> */}
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
