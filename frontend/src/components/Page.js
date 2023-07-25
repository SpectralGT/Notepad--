import { useState } from "react";

function Page() {
  const [data, setData] = useState(JSON.parse(window.localStorage.getItem('state'))||[
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
                new_data[index][1] = event.currentTarget.innerText;
                console.log(new_data);
                setData(new_data);
                window.localStorage.setItem('state',JSON.stringify(data))
                console.log(JSON.stringify(data));
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
