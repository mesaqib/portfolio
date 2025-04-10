import React, { useEffect, useState } from "react";
// import "./home.scss";
import "./home.scss";
// import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Home = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  gsap.registerPlugin(useGSAP);
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    let tl = gsap.timeline();

    tl.from("nav .name", {
      duration: 1,
      opacity: 0,
    });
    tl.from("nav .dot", {
      duration: 1,
      opacity: 0,
      height: 1000,
      width: 1000,
      position: "absolute",
      x: 600,
      y: 400,
    });
    tl.from("nav .city", {
      duration: 1,
      opacity: 0,
    });
    tl.from("nav .line", {
      duration: 0.5,
      opacity: 0,
      width: 10,
    });
    tl.from("nav .time", {
      duration: 1.5,
      opacity: 0,
      width: 10,
    });

    tl.from(".content", {
      duration: 1,
      opacity: 0,
      // delay: 0.5,
    });

    tl.to(".banner", {
      scale: 0.5,
      filter: blur(10),
      duration: 1,
      zIndex: -1,
      y: -100,
      scrollTrigger: {
        trigger: ".banner",
        scroller: "body",
        markers: false,
        start: 0,
        end: "bottom",
        scrub: 3,
        pin: true,
      },
    });

    tl.to(".work", {
      // duration: 1,
      // scale: 0.5,
      zIndex: -1,
      scrollTrigger: {
        trigger: ".work",
        scroller: "body",
        markers: false,
        start: "-2%",
        end: "150%",
        scrub: 3,
        pin: true,
      },
    });

    tl.to(".item_list", {
      x: -600,
      duration: 2,
      scrollTrigger: {
        trigger: ".item_list",
        scroller: "body",
        markers: false,
        start: "-60%",
        end: "450%",
        scrub: 3,
        pin: true,
      },
    });
  });

  return (
    <>
      <div className="main">
        <section className="banner">
          <nav>
            <div className="logo">
              <span className="name">Saqib</span>
              <div className="dot"></div>
              <span className="city">Delhi, India</span>
              <span className="line"></span>
              <span className="time">{time}</span>
            </div>
            <div className="menu">
              {/* <span>Work</span>
              <span>About</span> */}
              <button className="btn">Let's Talk</button>
            </div>
          </nav>

          <div className="content">
            <h1>
              {" "}
              Hey! Saqib <span>here</span>{" "}
            </h1>
            <h3>
              — A frontend developer who loves clean code, smooth UX, and the
              details that matter.
            </h3>
          </div>
        </section>

        <section className="work">
          <div className="title">
            Things I’ve <span>Built</span> with Clean Code
          </div>
          <div className="item_list">
            <div className="item">
              <img src="/image/img.webp" />
              <h4>Catalyst - Digital Website</h4>
              <p>View Case Study</p>
            </div>

            <div className="item">
              <img src="/image/img.webp" />
              <h4>Catalyst - Digital Website</h4>
              <p>View Case Study</p>
            </div>
            <div className="item">
              <img src="/image/img.webp" />
              <h4>Catalyst - Digital Website</h4>
              <p>View Case Study</p>
            </div>
            <div className="item">
              <img src="/image/img.webp" />
              <h4>Catalyst - Digital Website</h4>
              <p>View Case Study</p>
            </div>
            <div className="item">
              <img src="/image/img.webp" />
              <h4>Catalyst - Digital Website</h4>
              <p>View Case Study</p>
            </div>
            <div className="item">
              <img src="/image/img.webp" />
              <h4>Catalyst - Digital Website</h4>
              <p>View Case Study →</p>
            </div>
          </div>
        </section>

        <section
          style={{ backgroundColor: "transparent", height: "139vh" }}
        ></section>

        <section className="about">
          <div className="about1">
            <h3>Professional Experience</h3>
            <ul>
              <li>
                <strong>In2IT Technologies</strong> <em>(2023 – Present)</em>
                <br />
                Currently working as a <strong>UI Developer</strong>, where I:
                <ul>
                  <li>
                    Build and maintain scalable web apps using{" "}
                    <strong>
                      HTML, CSS, SCSS, JavaScript, React, and GSAP
                    </strong>
                  </li>
                  <li>
                    <strong>Optimized and refactored</strong> existing code for
                    better performance
                  </li>
                  <li>
                    <strong>Implemented SCSS architecture</strong> for organized
                    and modular styling
                  </li>
                  <li>
                    Contributed to <strong>3+ major live projects</strong>
                  </li>
                </ul>
              </li>

              <li>
                <strong>BrightChamps</strong> <em>(Late 2022)</em>
                <br />
                Started my career as a <strong>Coding Educator</strong>, helping
                students understand programming fundamentals and logical
                thinking.
              </li>
            </ul>
          </div>
          <div className="about2">
            <h3>Intro</h3>
            <p>
              Hey, I’m Saqib — a frontend developer passionate about crafting
              clean, accessible, and user-friendly web interfaces. I love
              combining logic with creativity to bring ideas to life on the web.
            </p>
          </div>

          <div className="about3">
            <h3>Education</h3>
            <p>
              I completed my B.Tech in Computer Science in 2022, where I
              developed a strong interest in frontend development, UI/UX
              principles, and performance optimization.
            </p>
          </div>
          <div className="about4">
            <h3>Freelancing & Side Projects</h3>
            <p>
              During my college years, I worked on multiple freelancing
              projects, which helped me understand real-world development
              scenarios, client needs, and end-to-end project delivery.
            </p>
          </div>
          <div className="about5">
            <h3>What I’m Into</h3>
            <p>
              I’m constantly exploring new technologies and design patterns to
              improve my workflow. I enjoy working on micro-interactions,
              animations, and clean component-based architecture. Outside of
              coding, I like keeping up with UI trends, side-projects, and
              leveling up my frontend game.
            </p>
          </div>
          {/* <div className="about6">Contact</div> */}
        </section>
      </div>
    </>
  );
};

export default Home;
