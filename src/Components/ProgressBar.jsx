import { React, useState, useEffect } from "react";

export const ProgressBar = ({title, level, progressLength }) => {
  const [isShowProgress, setIsProgress] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const elementPosition = document.querySelector(
        ".progress__container"
      ).offsetTop;
      const windowHeight = window.innerHeight;

      if (scrollPosition + windowHeight > elementPosition) {
        setIsProgress(true);
      } else {
        setIsProgress(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <div className="text__progress">
    <h3>{title}</h3>
    <h3>{level}</h3>
    </div>
    <div
      className={`progress ${isShowProgress ? "show-before" : ""}`}
      style={{ "--progressLength": progressLength }}
    ></div>
    </>
  );
};
