import React from "react";
import style from "./ImageText.module.css";

const ImageText = ({ item }) => {
  return (
    <div className={style.block}>
      <div
        className={item.leftToRight ? style.container : style.containerRevers}
      >
        <div className={style.containerImg}>
          <img src={item.imageURI} alt={item.title} />
        </div>
        <div className={style.containerContent}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
        </div>
      </div>
    </div>
  );
}

export default ImageText;
