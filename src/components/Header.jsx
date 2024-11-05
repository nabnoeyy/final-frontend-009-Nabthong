import React from "react";
<<<<<<< HEAD

=======
//import cv_natthakan from "../assets/download/CV_NATTHAKAN.pdf";
>>>>>>> 7a3448719ffa5afae5d697da564196b315e765d8

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
<<<<<<< HEAD
        <p className="nav-name">ตั้งหวังเจ๊ง</p>  
      </div>

      <div className="botton">
          <div className="botton-search">
            <div className="icon-search">
            <i class="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search"></input>
          </div>
        </div>
        </div>


      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <a href="#home" className="nav-link active-link">
             หน้าแรก
            </a>
          </li>
          <li className="nav_list">
            <a href="#about" className="nav-link">
            About 
            </a>
          </li>
        </ul>
        <li className="nav-list">
          <a href="#projects" className="nav-link">
            Products
          </a>
        </li>
        <li className="nav-list">
          <a href="#contact" className="nav-link">
            Contact
          </a>
        </li>
      </div>
      
=======
        <p className="nav-name">คอมตั้งหวังเจ๋ง</p>
      </div>
      <div className="nav-menu" id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <div className="input">
              <input type="text" placeholder="Seaech"></input>

              <i1 class="fa-solid fa-magnifying-glass"></i1>
            </div>
          </li>

          <li className="nav_list">
            <a href="#Home" className="nav-link">
              หน้าแรก
            </a>
          </li>
        </ul>

        <li className="nav-list">
          <a href="#contact" className="nav-link">
            ติดตอเรา
          </a>
        </li>
      </div>
      <div className="nav-button">
        {/*<a href={cv_natthakan} target="_blank">*/}
        <button className="btn">
          Download CV <i className="uil uil-import"></i>
        </button>
        {/* </a>*/}
      </div>
>>>>>>> 7a3448719ffa5afae5d697da564196b315e765d8
      <div className="nav-menu-btn">
        <i className="uil uil-bars" onClick={menuFunction}></i>
      </div>
    </nav>
  );
};

export default Header;
