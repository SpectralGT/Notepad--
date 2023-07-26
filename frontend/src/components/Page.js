import { useState } from "react";
import ELEMENTS_CLASS from "../utils/ELEMENETS_CLASS.js";
import { createPara } from "../utils/createElement.js";

function Page() {
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem("state")) || [
      ["p", "kk"],
      ["p", "aa"],
    ]
  );

  let elements = [];

  const createElements = (e, index) => {
    if (e[0] === ELEMENTS_CLASS.para) {
      createPara(elements, e, index, data, setData);
    }
  };

  return (
    <div className="page">
      {data.map((e, index) => {
        createElements(e, index);
      })}

      {elements}
    </div>
  );
}

export default Page;
