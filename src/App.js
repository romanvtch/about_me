import { React, useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import { Form } from "./Components/Form";
import { Case } from "./Components/Case";
import { ProgressBar } from "./Components/ProgressBar";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [isSwitchColor, setISwitchColor] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [isOpenAbout, setIsOpenAbout] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const handleSwitch = () => {
    setISwitchColor(!isSwitchColor);
  };

  const handleOpenMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  const handleoOpenAbout = () => {
    setIsOpenAbout(!isOpenAbout);
  };

  const skills = [
    { title: "HTML", level: "Advanced", progressLength: "85%" },
    { title: "CSS, SCSS", level: "Advanced", progressLength: "85%" },
    { title: "JavaScript", level: "Regular", progressLength: "65%" },
    { title: "React, React Hooks", level: "Regular", progressLength: "50%" },
    { title: "UI design in Figma", level: "Regular", progressLength: "65%" },
  ];

  const caseList = [
    {
      dataAos: "fade-right",
      link: "https://romanvtch.github.io/onShop/",
      image: "https://i.ibb.co/28yQp1Y/sneakers.jpg",
      title: "React Shop",
      subtitle: "Online shoe store",
      number: "01",
    },
    {
      dataAos: "fade-left",
      link: "https://bestcars.rent/",
      image: "https://i.ibb.co/RHnsWnk/best-cars.png",
      title: "BestCars",
      subtitle: "Rent car and drivers",
      number: "02",
    },
    {
      dataAos: "fade-right",
      link: '"https://pozniakova.shop/papir.html',
      image: "https://i.ibb.co/CVZPSbG/wq.jpg",
      title: "Pozniakova Catalog",
      subtitle: "Cookies and sweet paper",
      number: "03",
    },
  ];

  return (
    <div className={"wrapper " + (isSwitchColor ? "light" : "")}>
      <div data-aos="fade-left" data-aos-duration="500">
        <header className={"header " + (isOpenAbout ? "active" : "")}>
          <svg
            className="header__logo"
            xmlns="http://www.w3.org/2000/svg"
            id="my-svg"
            width="60"
            height="60"
            viewBox="0 0 256 256"
          >
            <path
              fill="#FFF"
              d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"
            ></path>
            <g fill="#FFF">
              <path d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"></path>
              <path d="M252.8 236.9h-39.6l-.5-.4-104.4-91.3 37.1-33 12.5-10.6c3.5-2.9 7.5-6.3 8.1-7 5-6 7.6-13.3 7.6-21.1 0-18.2-14.8-33.1-33.1-33.1H3L28.6 14h115.8l-.1.1c31 2 55.6 27.8 55.6 59.3 0 13.6-4.9 27.1-13.7 37.8-.5.6-2.2 2.3-2.6 2.6-.3.3-1.2 1-1.2 1l-.5.4-34 29.8 104.9 91.9zm-38.3-3.5h29l-100.9-88.3 34.1-29.9h-2.2l3.6-3.5h1v1.5l1.6-1.4c.2-.2.4-.4.6-.5.4-.3 1.9-1.9 2.2-2.2 8.3-10.1 12.9-22.8 12.9-35.6 0-30.8-25.1-55.9-55.9-55.9h-3.9l-106.5-.1-18.8 19.4 109-.1h20.1c20.2 0 36.6 16.4 36.6 36.6 0 8.6-2.9 16.6-8.4 23.3-1 1.3-7.3 6.5-8.5 7.5l-12.4 10.6-34.1 30.3 100.9 88.3z"></path>
              <g>
                <path d="M249.3 235.5h-35.5l-.1-.1-103.2-90.3.3-.3 35.6-31.7 12.4-10.6c2.5-2.1 7.5-6.2 8.3-7.2 5.1-6.2 7.9-13.8 7.9-21.9 0-19-15.4-34.4-34.4-34.4H6.2l23-23.7h.2l112.1-.1c31.6.5 57.1 26.4 57.1 58.1 0 13.3-4.8 26.5-13.4 37-.4.5-2.1 2.2-2.4 2.5-.3.3-1.1 1-1.1 1l-.1.1-35.5 31.2 103.2 90.4zm-35.3-.8h33l-102.4-89.6 36.4-32c.2-.2.7-.6 1-.9.3-.3 2-1.9 2.4-2.4 8.5-10.3 13.2-23.3 13.2-36.4 0-31.5-25.7-57.2-57.2-57.3h-1l-110 .1L8 38.2l111-.1h21.5c19.4 0 35.2 15.8 35.2 35.2 0 8.3-2.8 16-8 22.4-1 1.3-8.1 7.1-8.4 7.3l-12.4 10.6-35.2 31.4L214 234.7zm-35-120.9h-1.4l1-.8h.4V113.8z"></path>
                <path d="M253.9 237.3H213l-.5-.4-104.8-91.7 1.8-1.6 35.6-31.7 12.5-10.6c4-3.3 7.5-6.4 8-7 4.9-5.9 7.5-13.1 7.5-20.8 0-18-14.7-32.7-32.7-32.7H2l26.4-27.2 117.2-.1-.2.2c30.6 2.6 54.8 28.5 54.8 59.6 0 13.7-4.9 27.3-13.8 38.1-.5.6-2.3 2.4-2.6 2.7-.3.3-1.2 1-1.2 1l-.5.4-33.6 29.5 105.4 92.3zm-39.2-4.3h27.7L142 145.1l33.6-29.5h-3.1l4.7-3.8.1-2.6 1.8 2 1.4.1c.2-.1.3-.3.4-.4.4-.3 1.9-1.9 2.2-2.2 8.3-10 12.8-22.6 12.8-35.3 0-30.6-24.9-55.5-55.5-55.5H30.3l-18 18.5 108.4-.1h19.7c20.4 0 37 16.6 37 37 0 8.7-2.9 16.8-8.4 23.5-.7.9-3.5 3.4-8.5 7.5L148 115.1l-33.7 30L214.7 233z"></path>
              </g>
            </g>
          </svg>

          <ul className={"header__links " + (isOpenMenu ? "active" : "")}>
            <Link to="sectionTwo" smooth={true} duration={700}>
              <li className="link">
                <p>Case Studies</p>
              </li>
            </Link>
            <Link to="sectionThree" smooth={true} duration={700}>
              <li className="link">
                <p>Technologies</p>
              </li>
            </Link>
            <li className="link">
              <p onClick={handleoOpenAbout}>Contact</p>
            </li>
            <li className="header__switch">
              <div
                onClick={handleSwitch}
                className={
                  "header__switch__box " + (isSwitchColor ? "active" : "")
                }
              >
                <div className="header__switch__round"></div>
              </div>
            </li>
          </ul>

          <div
            onClick={handleOpenMenu}
            className={"header__menu " + (isOpenMenu ? "change active" : "")}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>

          <div
            className={"header__overlayRed " + (isOpenMenu ? "active" : "")}
          ></div>
          <div
            className={"header__overlayBlue " + (isOpenMenu ? "active" : "")}
          ></div>
        </header>
      </div>

      <main>
        <article>
          <section className="section__one">
            <div className="section__container">
              <div className="one__hero">
                <div className="one__svgBox">
                  <svg
                    className="one__logo"
                    xmlns="http://www.w3.org/2000/svg"
                    id="my-svg"
                    width="100%"
                    height="100%"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="#213b6d"
                      d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"
                    ></path>
                    <g fill="#1f4474">
                      <path d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"></path>
                      <path d="M252.8 236.9h-39.6l-.5-.4-104.4-91.3 37.1-33 12.5-10.6c3.5-2.9 7.5-6.3 8.1-7 5-6 7.6-13.3 7.6-21.1 0-18.2-14.8-33.1-33.1-33.1H3L28.6 14h115.8l-.1.1c31 2 55.6 27.8 55.6 59.3 0 13.6-4.9 27.1-13.7 37.8-.5.6-2.2 2.3-2.6 2.6-.3.3-1.2 1-1.2 1l-.5.4-34 29.8 104.9 91.9zm-38.3-3.5h29l-100.9-88.3 34.1-29.9h-2.2l3.6-3.5h1v1.5l1.6-1.4c.2-.2.4-.4.6-.5.4-.3 1.9-1.9 2.2-2.2 8.3-10.1 12.9-22.8 12.9-35.6 0-30.8-25.1-55.9-55.9-55.9h-3.9l-106.5-.1-18.8 19.4 109-.1h20.1c20.2 0 36.6 16.4 36.6 36.6 0 8.6-2.9 16.6-8.4 23.3-1 1.3-7.3 6.5-8.5 7.5l-12.4 10.6-34.1 30.3 100.9 88.3z"></path>
                      <g>
                        <path d="M249.3 235.5h-35.5l-.1-.1-103.2-90.3.3-.3 35.6-31.7 12.4-10.6c2.5-2.1 7.5-6.2 8.3-7.2 5.1-6.2 7.9-13.8 7.9-21.9 0-19-15.4-34.4-34.4-34.4H6.2l23-23.7h.2l112.1-.1c31.6.5 57.1 26.4 57.1 58.1 0 13.3-4.8 26.5-13.4 37-.4.5-2.1 2.2-2.4 2.5-.3.3-1.1 1-1.1 1l-.1.1-35.5 31.2 103.2 90.4zm-35.3-.8h33l-102.4-89.6 36.4-32c.2-.2.7-.6 1-.9.3-.3 2-1.9 2.4-2.4 8.5-10.3 13.2-23.3 13.2-36.4 0-31.5-25.7-57.2-57.2-57.3h-1l-110 .1L8 38.2l111-.1h21.5c19.4 0 35.2 15.8 35.2 35.2 0 8.3-2.8 16-8 22.4-1 1.3-8.1 7.1-8.4 7.3l-12.4 10.6-35.2 31.4L214 234.7zm-35-120.9h-1.4l1-.8h.4V113.8z"></path>
                        <path d="M253.9 237.3H213l-.5-.4-104.8-91.7 1.8-1.6 35.6-31.7 12.5-10.6c4-3.3 7.5-6.4 8-7 4.9-5.9 7.5-13.1 7.5-20.8 0-18-14.7-32.7-32.7-32.7H2l26.4-27.2 117.2-.1-.2.2c30.6 2.6 54.8 28.5 54.8 59.6 0 13.7-4.9 27.3-13.8 38.1-.5.6-2.3 2.4-2.6 2.7-.3.3-1.2 1-1.2 1l-.5.4-33.6 29.5 105.4 92.3zm-39.2-4.3h27.7L142 145.1l33.6-29.5h-3.1l4.7-3.8.1-2.6 1.8 2 1.4.1c.2-.1.3-.3.4-.4.4-.3 1.9-1.9 2.2-2.2 8.3-10 12.8-22.6 12.8-35.3 0-30.6-24.9-55.5-55.5-55.5H30.3l-18 18.5 108.4-.1h19.7c20.4 0 37 16.6 37 37 0 8.7-2.9 16.8-8.4 23.5-.7.9-3.5 3.4-8.5 7.5L148 115.1l-33.7 30L214.7 233z"></path>
                      </g>
                    </g>
                  </svg>
                </div>
                <div data-aos="fade-right" data-aos-duration="500">
                  <h1>Roman Viitovych</h1>
                  <p>Interactive Front-end Developer</p>
                  <button className="one__button" onClick={handleoOpenAbout}>
                    About Me
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 476.213 476.213"
                    >
                      <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className={"one__about " + (isOpenAbout ? "active" : "")}>
                <i
                  onClick={handleoOpenAbout}
                  className="fa-solid fa-xmark about__button"
                ></i>

                <div className="about__me">
                  <h3>About</h3>
                  <div className="about__meContainer">
                    <div className="about__meContainerInside">
                      <h2>About Me.</h2>
                      <p>Interactive Front-end developer.</p>
                      <div className="about__meText">
                        I'm Roman Viitovych, a 21-year-old Ukranian{" "}
                        <span>Freelance Front-end developer</span>. I'm a guy
                        who likes making interesting things with web
                        technologies. I like to <span>resolve</span> design
                        problems, <span>create</span> smart user interface and
                        imagine useful interaction, developing rich web
                        experiences & <span>web applications</span>.
                      </div>

                      <div className="about__tech">
                        <div className="react">
                          <svg width="60" height="60" viewBox="0 0 128 128">
                            <path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3-12.5 4.8-19.3 11.4-19.3 18.8s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zm-14.8-30.5c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zm-11.2 59.3c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zm-25.6 27.1c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zm25.6-27.1c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zm-54.5-16.2c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zm-24.7 29c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5-13.8-4-22.1-10-22.1-15.6zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zm60.8-20.3c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"></path>
                          </svg>
                          <p>React.js</p>
                        </div>
                        <div className="html">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fill="#444"
                              d="M16.017 21.044zM4.743 3.519L6.792 26.5l9.194 2.552 9.22-2.556 2.051-22.977H4.743zM23 8.775l-.693 7.767-.48 5.359-.042.476-5.781 1.603-5.773-1.603-.395-4.426h2.829l.201 2.248 3.142.847.008-.002h.002l3.134-.846.329-3.655h-6.579l-.056-.633-.129-1.429-.067-.756h7.081l.258-2.886H9.203l-.056-.634-.129-1.429-.067-.756h14.118l-.068.756z"
                            ></path>
                          </svg>
                          <p>ㅤHtml</p>
                        </div>
                        <div className="javascript">
                          <svg
                            className="js"
                            xmlns="http://www.w3.org/2000/svg"
                            width="60"
                            height="60"
                            viewBox="0 0 32 32"
                          >
                            <path
                              fill="#444"
                              d="M.384.67v31.296H31.68V.67H.384zm16.334 26.772c-.461.937-1.342 1.553-2.362 1.85-1.568.36-3.067.155-4.183-.515-.747-.458-1.33-1.163-1.725-1.975.794-.485 1.586-.973 2.38-1.458.021.009.083.122.167.268.303.509.565.869 1.08 1.121.506.172 1.615.283 2.044-.607.262-.452.178-1.936.178-3.545 0-2.529.012-5.016.012-7.576h2.927c0 2.688.015 5.383 0 8.067.006 1.645.149 3.14-.518 4.369zm12.144-.827c-1.017 3.481-6.691 3.594-8.957 1.294-.479-.541-.779-.824-1.065-1.449 1.205-.693 1.205-.693 2.377-1.371.637.979 1.226 1.517 2.285 1.737 1.437.175 2.883-.318 2.559-1.844-.333-1.247-2.942-1.55-4.718-2.883-1.803-1.211-2.225-4.153-.744-5.834.494-.622 1.336-1.086 2.219-1.309l.922-.119c1.77-.036 2.877.431 3.689 1.339.226.229.41.476.756 1.012-.943.601-.94.595-2.291 1.47-.289-.622-.767-1.012-1.273-1.181-.785-.238-1.776.021-1.981.851-.071.256-.056.494.057.916.318.726 1.386 1.041 2.344 1.481 2.758 1.119 3.689 2.317 3.918 3.745.22 1.229-.054 2.026-.095 2.145z"
                            ></path>
                          </svg>
                          <p>JavaScript</p>
                        </div>
                        <div className="ui">
                          <svg
                            className="ui"
                            xmlns="http://www.w3.org/2000/svg"
                            width="64"
                            height="64"
                            viewBox="0 0 128 128"
                          >
                            <path d="M74.6 96.7c1 0 1.9-.8 1.9-1.9s-.9-1.8-1.9-1.8H50.4c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9h24.2zM83.9 100.4H41.1c-1 0-1.9.8-1.9 1.9s.8 1.9 1.9 1.9H84c1 0 1.9-.8 1.9-1.9s-.9-1.9-2-1.9zM20.6 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7 3.7 1.7 3.7 3.7-1.7 3.7-3.7 3.7zM37.3 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S39.4 24 37.3 24zM54.1 12.8c-4.1 0-7.5 3.3-7.5 7.5s3.3 7.5 7.5 7.5 7.5-3.3 7.5-7.5-3.4-7.5-7.5-7.5zm0 11.2c-2.1 0-3.7-1.7-3.7-3.7s1.7-3.7 3.7-3.7c2.1 0 3.7 1.7 3.7 3.7S56.2 24 54.1 24z"></path>
                            <path d="M7.5 7.2V119h111.8V7.2H7.5zm3.7 3.8h104.4v18.6H11.2V11zm104.4 104.3H11.2v-82h104.4v82z"></path>
                            <path d="M47.5 81.4l1.7 1.4c.1 0 .1.1.2.1.4.3.7.5 1.1.7.2.1.5.3.7.4.4.2.7.4 1.1.6.3.2.6.3.9.5.3.1.6.3.9.4.6.3 1.3.5 1.9.7.2.1.5.1.7.2.5.1 1 .3 1.5.4.3.1.5.1.8.2.5.1 1 .2 1.5.2.2 0 .5.1.7.1.7.1 1.5.1 2.2.1s1.5 0 2.2-.1c.2 0 .5-.1.7-.1.5-.1 1-.1 1.5-.2.3 0 .5-.1.8-.1.5-.1 1-.2 1.5-.4.2-.1.4-.1.7-.2.6-.2 1.3-.4 1.9-.7.3-.1.6-.3.9-.4.3-.2.7-.3 1-.5.4-.2.7-.4 1-.6.2-.1.5-.3.7-.4.4-.2.7-.5 1.1-.7.1 0 .1-.1.2-.1l1.9-1.4-.1-.1c5.1-4.4 8.3-10.9 8.3-18.2C87.7 49.8 76.8 39 63.5 39S39.2 49.8 39.2 63.1c0 7.3 3.2 13.8 8.3 18.3zM58.4 83c-.7-.2-1.5-.4-2.2-.7-.1 0-.2-.1-.2-.1-.7-.3-1.5-.6-2.2-1l4.5-2.5c1.4-.8 2.3-2.2 2.3-3.8v-3.1l-.4-.5s-1.5-1.8-2.1-4.3l-.2-.9-.6-.4.1-2.8.6-.6v-4.9c0-.1-.1-1.4.8-2.5.9-1 2.5-1.5 4.8-1.5s3.9.5 4.8 1.5c1 1.1.8 2.4.8 2.5v4.1l.1.9.6.6v2.7c0 .1-.1.1-.1.1l-.9.3-.3.9c-.4 1.3-1 2.5-1.8 3.5-.2.2-.3.5-.5.6l-.5.5V75c0 1.6.9 3.1 2.4 3.9l4.8 2.4h-.1c-.7.3-1.3.6-2 .9-.1 0-.2.1-.3.1-.7.3-1.4.5-2.2.7-3.4.8-6.7.8-10 0 .1 0 0 0 0 0zm5-40.4c11.3 0 20.5 9.2 20.5 20.5 0 6.4-2.9 12.1-7.5 15.8-.1-.1-.2-.1-.3-.2l-6.5-3.2c-.2-.1-.3-.3-.3-.5v-1.9c.1-.1.2-.2.3-.4.8-1.1 1.5-2.4 2-3.8 1.1-.7 1.8-1.9 1.8-3.3v-2.7c0-.8-.2-1.5-.7-2.2v-3.1c.1-.7.1-3.1-1.7-5.2-1.6-1.8-4.2-2.8-7.6-2.8s-6 .9-7.6 2.8C54 54.5 54 57 54.1 57.6v3.1c-.4.6-.7 1.4-.7 2.2v2.7c0 1 .4 2 1.1 2.7.6 2.1 1.6 3.8 2.2 4.6V75c0 .2-.1.4-.3.5l-6 3.3c-.1 0-.1.1-.2.1-4.5-3.8-7.4-9.4-7.4-15.8.1-11.3 9.3-20.5 20.6-20.5z"></path>
                          </svg>
                          <p>ㅤUi/Ux</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="contact__me">
                  <h3>Contact</h3>
                  <div className="contact__meContainer">
                    <div className="contact__meContainerInside">
                      <h2>Let's talk</h2>
                      <p>New projects, freelance inquiry or even a coffee.</p>
                      <Form />
                    </div>
                  </div>
                </div>
              </div>

              <div
                className={
                  "one__social " +
                  (isOpenMenu ? "active" : "") +
                  (isOpenAbout ? "hidden" : "")
                }
              >
                <a href="https://www.linkedin.com/in/roman-viitovych-947871271/">
                  <i className="fa-brands fa-linkedin-in fa-2xl social"></i>
                </a>
                <a href="https://github.com/romanvtch">
                  <i className="fa-brands fa-github fa-2xl social"></i>
                </a>
                <a href="https://www.instagram.com/romanvtch/">
                  <i className="fa-brands fa-instagram fa-2xl social"></i>
                </a>
                <a href="https://t.me/romanvtch">
                  <i className="fa-brands fa-telegram fa-2xl social"></i>
                </a>
              </div>

              <Link to="sectionTwo" smooth={true} duration={700}>
                <div className={"one__goNext " + (isOpenAbout ? "opacity" : "")}>
                  <p className="one__nextLabel">Works</p>
                  <div className="one__arrowNext"></div>
                </div>
              </Link>
            </div>
          </section>

          <section id="sectionTwo" className="section__two">
            <div className="section__container">
              <div className="case__text">
                <p>CASE STUDIES</p>
                <h1>Latest Works</h1>
              </div>

              <ul className="case__studies">
                {caseList.map((caseItem) => (
                  <li key={caseItem.title} className="case__list">
                    <div data-aos={caseItem.dataAos} data-aos-duration="500">
                      <Case {...caseItem} />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section id="sectionThree" className="section__three">
            <div className="section__container">
              <div className="case__text">
                <p>MY STACK</p>
                <h1>Technologies</h1>
              </div>

              <ul className="progress__container">
                {skills.map((skill) => (
                  <li key={skill.title}>
                    <ProgressBar {...skill} />
                  </li>
                ))}
              </ul>

              <div className="tech__container">
                <h2>Additional technologies and skills</h2>

                <div className="tech__list">
                  <div className="list">
                    <p>Scss Modules,</p>
                    <p>Web design,</p>
                    <p>Npm/Yarn,</p>

                    <p>Git,</p>
                    <p>Semantic HTML,</p>
                    <p>Figma,</p>

                    <p>Photoshop,</p>
                    <p>PhpMyAdmin,</p>
                    <p>Bem,</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </article>
      </main>

      <footer>
        <div className="footer__container">
          <div onClick={scrollToTop} className="footer__logo">
            <svg
              className="header__logo"
              xmlns="http://www.w3.org/2000/svg"
              id="my-svg"
              width="70"
              height="70"
              viewBox="0 0 256 256"
            >
              <path
                fill="#FFF"
                d="M53.2 145.1l81.9-71.7h-34.3L19 145.1l102.8 90h34.3l-102.9-90"
              ></path>
              <g fill="#FFF">
                <path d="M145.3 145.1l36-31.6s.8-.7 1.1-1l2.4-2.4c8.5-10.3 13.3-23.3 13.3-36.7 0-31.8-25.8-57.7-57.6-57.7l-111.1.1L7.2 38.6l111.4-.1h21.9c19.2 0 34.8 15.6 34.8 34.8 0 8.2-2.7 15.8-8 22.2-1 1.3-8.3 7.3-8.3 7.3l-12.4 10.6-35.6 31.7 102.9 90h34.3l-102.9-90zm33.4-31.7h.2-.2z"></path>
                <path d="M252.8 236.9h-39.6l-.5-.4-104.4-91.3 37.1-33 12.5-10.6c3.5-2.9 7.5-6.3 8.1-7 5-6 7.6-13.3 7.6-21.1 0-18.2-14.8-33.1-33.1-33.1H3L28.6 14h115.8l-.1.1c31 2 55.6 27.8 55.6 59.3 0 13.6-4.9 27.1-13.7 37.8-.5.6-2.2 2.3-2.6 2.6-.3.3-1.2 1-1.2 1l-.5.4-34 29.8 104.9 91.9zm-38.3-3.5h29l-100.9-88.3 34.1-29.9h-2.2l3.6-3.5h1v1.5l1.6-1.4c.2-.2.4-.4.6-.5.4-.3 1.9-1.9 2.2-2.2 8.3-10.1 12.9-22.8 12.9-35.6 0-30.8-25.1-55.9-55.9-55.9h-3.9l-106.5-.1-18.8 19.4 109-.1h20.1c20.2 0 36.6 16.4 36.6 36.6 0 8.6-2.9 16.6-8.4 23.3-1 1.3-7.3 6.5-8.5 7.5l-12.4 10.6-34.1 30.3 100.9 88.3z"></path>
                <g>
                  <path d="M249.3 235.5h-35.5l-.1-.1-103.2-90.3.3-.3 35.6-31.7 12.4-10.6c2.5-2.1 7.5-6.2 8.3-7.2 5.1-6.2 7.9-13.8 7.9-21.9 0-19-15.4-34.4-34.4-34.4H6.2l23-23.7h.2l112.1-.1c31.6.5 57.1 26.4 57.1 58.1 0 13.3-4.8 26.5-13.4 37-.4.5-2.1 2.2-2.4 2.5-.3.3-1.1 1-1.1 1l-.1.1-35.5 31.2 103.2 90.4zm-35.3-.8h33l-102.4-89.6 36.4-32c.2-.2.7-.6 1-.9.3-.3 2-1.9 2.4-2.4 8.5-10.3 13.2-23.3 13.2-36.4 0-31.5-25.7-57.2-57.2-57.3h-1l-110 .1L8 38.2l111-.1h21.5c19.4 0 35.2 15.8 35.2 35.2 0 8.3-2.8 16-8 22.4-1 1.3-8.1 7.1-8.4 7.3l-12.4 10.6-35.2 31.4L214 234.7zm-35-120.9h-1.4l1-.8h.4V113.8z"></path>
                  <path d="M253.9 237.3H213l-.5-.4-104.8-91.7 1.8-1.6 35.6-31.7 12.5-10.6c4-3.3 7.5-6.4 8-7 4.9-5.9 7.5-13.1 7.5-20.8 0-18-14.7-32.7-32.7-32.7H2l26.4-27.2 117.2-.1-.2.2c30.6 2.6 54.8 28.5 54.8 59.6 0 13.7-4.9 27.3-13.8 38.1-.5.6-2.3 2.4-2.6 2.7-.3.3-1.2 1-1.2 1l-.5.4-33.6 29.5 105.4 92.3zm-39.2-4.3h27.7L142 145.1l33.6-29.5h-3.1l4.7-3.8.1-2.6 1.8 2 1.4.1c.2-.1.3-.3.4-.4.4-.3 1.9-1.9 2.2-2.2 8.3-10 12.8-22.6 12.8-35.3 0-30.6-24.9-55.5-55.5-55.5H30.3l-18 18.5 108.4-.1h19.7c20.4 0 37 16.6 37 37 0 8.7-2.9 16.8-8.4 23.5-.7.9-3.5 3.4-8.5 7.5L148 115.1l-33.7 30L214.7 233z"></path>
                </g>
              </g>
            </svg>
          </div>
          <div className="footer__links">
            <a href="https://www.linkedin.com/in/roman-viitovych-947871271/">
              Linkedin
            </a>
            <a href="https://github.com/romanvtch">GitHub</a>
            <a href="https://www.instagram.com/romanvtch/">Instagram</a>
            <a href="https://t.me/romanvtch">Telegram</a>
          </div>

          <p>© 2023 Roman Viitovych. +48 793 564 770</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
