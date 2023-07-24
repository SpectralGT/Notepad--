import { useState } from "react";

function Page() {
  const [data, setData] = useState([
    ["p", "kk"],
    ["p", "aa"],
  ]);

  return (
    <div className="page">
      {data.map((e, index) => {
        if (e[0] === "p") {
          return (
            <div
              key={index}
              className="para"
              onKeyUp={(event) => {
                var new_data = data;
                new_data.splice(index, 1, event.currentTarget.innerText);
                console.log(new_data);
                setData(new_data);
              }}
              contentEditable
            >
              {e[1]}
            </div>
          );
        }
      })}
    </div>
  );
}

export default Page;
