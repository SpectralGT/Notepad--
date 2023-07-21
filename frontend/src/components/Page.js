import { useState } from "react";

function Page() {
  const [data, setData] = useState([
    ["p", "kk"],
    ["p", "aa"],
  ]);

  return (
    <div className="page">
      {data.map((e, id) => {
        if (e[0] === "p") {
          return (
            <div key={id} className="para" contentEditable>
              {e[1]}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Page;
