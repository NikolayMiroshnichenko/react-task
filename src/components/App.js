import React, { useState } from "react";
import LendingFormEditor from "./LendingFormEditor/LendingFormEditor";
import TypeHeroImage from "./TypeHeroImage/TypeHeroImage";
import TypeImageText from "./TypeImageText/TypeImageText";
import NotValidComponent from "./NotValidComponent/NotValidComponent";
import TypeData from "./TypeData/TypeData";
import shortid from "shortid";
import TYPE_COMPONETS from "../utils/type-components";

export default function App() {
  const [items, setItems] = useState([]);

  const editorSubmit = (el) => setItems(el);

  return (
    <div className="container">
      <LendingFormEditor submit={editorSubmit} />

      <div className="maket">
        {items.map((item) => {
          switch (item.type) {
            case TYPE_COMPONETS.HERO:
              return <TypeHeroImage key={shortid.generate()} item={item} />;
              break;
            case TYPE_COMPONETS.IMAGE_TEXT:
              return <TypeImageText key={shortid.generate()} item={item} />;
              break;
            case TYPE_COMPONETS.DATA:
              return <TypeData key={shortid.generate()} item={item} />;
              break;
            default:
              return <NotValidComponent key={shortid.generate()} item={item} />;
          }
        })}
      </div>
    </div>
  );
}
