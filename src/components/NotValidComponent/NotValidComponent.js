import React from "react";
import styles from "./NotValidComponent.module.css";

const NotValidComponent = ({ item }) => (
  <div className={styles.container}>
    <p>{`Тип "${item.type}" не підтримуеться!`}</p>
  </div>
);

export default NotValidComponent;
