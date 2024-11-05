import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import ProjectsBox from "./components/ProjectsBox";
import AboutBox from "./components/AboutBox";
import FeaturedBox from "./components/FeaturedBox";
import ContactBox from "./components/ContactBox";
import Footer from "./components/Footer";
import Typed from "typed.js";
import ScrollReveal from "scrollreveal";

function App() {
  useEffect(() => {
    /** ScrollReveal */
    const sections = document.querySelectorAll("section[id]");

    function scrollActive() {
      const scrollY = window.scrollY;
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
          sectionTop = current.offsetTop - 50,
          sectionId = current.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.add("active-link");
        } else {
          document
            .querySelector(".nav-menu a[href*=" + sectionId + "]")
            .classList.remove("active-link");
        }
      });
    }

    window.addEventListener("scroll", scrollActive);

    // Initialize ScrollReveal
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    // Reveal animations
    sr.reveal(".featured-text-card", {});
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 200 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    // Left-right animations
    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 200 });
    srLeft.reveal(".contact-info", { delay: 200 });
    srLeft.reveal(".form-control", { delay: 100 });

    const srRight = ScrollReveal({
      origin: "right",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srRight.reveal(".skills-box", { delay: 100 });

    /** Type Effect */
    const typingEffect = new Typed(".typedText", {
      strings: ["Lecturer", "Developer", "Researcher"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 2000,
    });

    // Cleanup function
    return () => {
      typingEffect.destroy();
      window.removeEventListener("scroll", scrollActive);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="wrapper">
        <div className="typedText"></div>
        <FeaturedBox />
        <AboutBox />
        <ProjectsBox />
        <ContactBox />
      </main>
      <Footer />
    </div>
  );
}

export default App;
