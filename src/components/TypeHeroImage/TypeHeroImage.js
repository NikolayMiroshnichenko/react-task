import React from "react";
import style from "./TypeHeroImage.module.css";

const TypeHeroImage = ({ item }) => {
  return (
    <div className={style.container}>
      <img src={item.imageURI} width="300" alt={item.type} />
    </div>
  );
};

export default TypeHeroImage;
