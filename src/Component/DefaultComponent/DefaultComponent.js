import React from "react";
import styles from "./DefaultComponent.module.css";

const DefaultComponent = ({ item }) => (
  <div className={styles.container}>
    <p>{`Тип "${item.type}" не підтримуеться!`}</p>
  </div>
);

export default DefaultComponent;
