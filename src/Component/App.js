import React, { useState } from "react";
import Editor from "./Editor/Editor";
import HeroImage from "./HeroImage/HeroImage";
import ImageText from "./ImageText/ImageText";
import DefaultComponent from "./DefaultComponent/DefaultComponent";
import Data from "./Data/Data";
import shortid from "shortid";

export default function App() {
  const [items, setItems] = useState([]);

  const editorSubmit = (el) => setItems([...el]);

  return (
    <div className="container">
      <Editor submit={editorSubmit} />

      <div className="maket">
        {items.map((item) => {
          switch (item.type) {
            case "hero":
              return <HeroImage key={shortid.generate()} item={item} />;
              break;
            case "image-text":
              return <ImageText key={shortid.generate()} item={item} />;
              break;
            case "data":
              return <Data key={shortid.generate()} item={item} />;
              break;
            default:
              return <DefaultComponent key={shortid.generate()} item={item} />
          }
        })}
      </div>
    </div>
  );
}
