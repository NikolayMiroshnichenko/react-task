import React, { useState, useEffect } from "react";
import styles from "./Data.module.css";

const Data = ({ item }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(item.url)
      .then((res) => res.json())
      .then((data) => {
        setText(JSON.stringify(data));
      })
      .catch((err) => setText('Помилка під час завантаження!'));
  }, []);

  const fetchUpdate = () => {
    fetch(item.url)
      .then((res) => res.json())
      .then((data) => {
        setText(JSON.stringify(data));
      })
      .catch((err) => setText('Помилка під час завантаження!'));
  };

  return (
    <div className={styles.container}>
      <div className={styles.btn}>
        <button type="button" onClick={fetchUpdate}>Refresh</button>
      </div>
      <div className={styles.content}>
        <p>{text.slice(0, 400)}</p>
      </div>
    </div>
  );
};

export default Data;
