import React, { useState } from "react";
import styles from "./Editor.module.css";
import isJson from "../../helpers/isJson";

export default function Editor({submit}) {
  const [string, setString] = useState('[]');

  const hendleOnchenge = (e) => {
    setString(e.target.value);
  };

  const hendleSubmit = (e) => {
    e.preventDefault();
    const task = isJson(string);
    if(!task) return;
    submit(task);
  };

  return (
    <div className={styles.containerForm}>
      <form onSubmit={hendleSubmit}>
        <textarea
          type="text"
          name="text"
          value={string}
          onChange={hendleOnchenge}
          className={styles.input}
        ></textarea>
        <button type="submit" className={styles.btn}>
          SEND
        </button>
      </form>
    </div>
  );
}

