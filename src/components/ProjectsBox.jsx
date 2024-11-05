import React from "react";
 import com2 from "../assets/images/com2.webp";
 import com3 from "../assets/images/com3.webp";
 import com4 from "../assets/images/com4.webp";
 import com5 from "../assets/images/com5.webp";
 import com6 from "../assets/images/com6.webp";
 import com7 from "../assets/images/com7.webp";
 import com8 from "../assets/images/com8.webp";
 import com9 from "../assets/images/com9.webp";
 import com10 from "../assets/images/com10.webp";
const ProjectsBox = () => {
  return (
    <section className="section" id="projects">
      <div className="top-header">
        <h1>สินค้า ตั้งหวังเจ๊ง</h1>
      </div>
      <div className="project-container">
        <div className="project-box">
        <div className="image">
        <img src={com2} alt="com2" />
        <div className="nav-button">
                
                
              </div>

        </div>
          
          <h3>Notebook MSI Titan 18 HX A14VIG-031TH</h3>
          <label>ราคา 189,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button>
              </label>
         
        </div>



        <div className="project-box">
        <div className="image">
         <img src={com3} alt="com3" /> 

        </div>
          <h3>Notebook Asus ROG Flow X13 GV301QH-K5098TS</h3>
          <label>ราคา 49,990 บาท<button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>


        <div className="project-box">
        <div className="image">
        <img src={com4} alt="com4" /> 

        </div>
          <h3>Notebook Acer Swift AI 14 SF14-51-51TJ</h3>
          <label>ราคา 80,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>

        <div className="project-box">
        <div className="image">
        <img src={com5} alt="com5" /> 

        </div>
          <h3>Notebook MSI Stealth A16 AI+ A3XVGG-091TH</h3>
          <label>ราคา 94,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>
        <div className="project-box">
        <div className="image">
         <img src={com6} alt="com6" /> 

        </div>
          <h3>Notebook Lenovo IdeaPad Slim 3 15ABR8-82XM00HMTA
          </h3>
          <label>ราคา 18,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>
        <div className="project-box">
        <div className="image">
         <img src={com7} alt="com7" /> 

        </div>
          <h3>Notebook HP OmniBook X AI 14-fe1012QU</h3>
          <label>ราคา 44,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>
        
        <div className="project-box">
        <div className="image">
        <img src={com8} alt="com8" /> 

        </div>
          <h3>Notebook HP OmniBook Ultra Flip 14-fh0054TU</h3>
          <label>ราคา 65,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>
        <div className="project-box">
        <div className="image">
      <img src={com9} alt="com9" />

        </div>
          <h3>Notebook Lenovo IdeaPad 5 2-in1 14Q8X9-83GH001MTA
          </h3>
          <label>ราคา 29,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>
        <div className="project-box">
        <div className="image">
        <img src={com10} alt="com10" /> 

        </div>
          <h3>Notebook Lenovo IdeaPad Slim 5 14Q8X9-83HL001KTA</h3>
          <label>ราคา 39,990 บาท <button className="btn">
                    สั่งซื้อ <i class="fa-solid fa-cart-shopping"></i>
                  </button></label>
        </div>
        
        
      </div>
    </section>
  );
};
export default ProjectsBox;
