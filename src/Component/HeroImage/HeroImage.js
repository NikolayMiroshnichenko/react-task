import React from "react";
import style from "./HeroImage.module.css";

const HeroImage = ({ item }) => {
  return (
    <div className={style.container}>
      <img src={item.imageURI} width="300" alt={item.type} />
    </div>
  );
};

export default HeroImage;
