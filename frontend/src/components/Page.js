import { useState } from "react";
import { createElement } from "../utils/createElement.js";

function Page() {
  const [data, setData] = useState(
    JSON.parse(window.localStorage.getItem("state")) || [
      ["p", "kk"],
      ["p", "aa"],
      ["h","heading"]
    ]
  );

  let elements = [];

  return (
    <div className="page">
      {data.map((e, index) => {
        createElement(e, index, elements, data, setData);
      })}

      {elements}
    </div>
  );
}

export default Page;
