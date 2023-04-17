import React from "react";

export const Case = ({link,image,title,subtitle,number}) => {
  return (
    <div className="case">
      <a
        className="case__img"
        href={link}
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="case__number">
          <div className="number">{number}</div>
        </div>

        <div className="case__text">
          <h3 className="case__text__title">{title}</h3>
          <h5 className="case__text__subtitle">{subtitle}</h5>
          <button className="case__text__btn">
            case work
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 476.213 476.213"
            >
              <path d="M405.606 167.5l-21.212 21.213 34.393 34.393H0v30h418.787L384.394 287.5l21.212 21.213 70.607-70.607"></path>
            </svg>
          </button>
        </div>
      </a>
    </div>
  );
};
