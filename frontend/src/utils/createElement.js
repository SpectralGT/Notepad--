import ELEMENTS_CLASS from "./ELEMENETS_CLASS";

const UpdateStateOnType = (event, index, data, setData) => {
  var new_data = data;
  new_data[index][1] = event.currentTarget.innerText;
  setData(new_data);
  window.localStorage.setItem("state", JSON.stringify(data));
};

const createPara = (e, index, elements, data, setData) => {
  elements.push(
    <div className="element" key={index}>
      <button
        className="removeButton"
        onClick={() => {
          setData((data) => data.filter((ele) => ele !== e));
          window.localStorage.setItem(
            "state",
            JSON.stringify(data.filter((ele) => ele !== e))
          );
        }}
      >
        X
      </button>
      <div
        className={ELEMENTS_CLASS.para}
        onKeyUp={(event) => UpdateStateOnType(event, index, data, setData)}
        contentEditable
        suppressContentEditableWarning={true}
        onPaste={(e) => {
          e.preventDefault();
          var text = e.clipboardData.getData("text/plain");
          document.execCommand("insertText", false, text);
        }}
      >
        {e[1]}
      </div>
    </div>
  );
};

const createHeading = (e, index, elements, data, setData) => {
  elements.push(
    <div className={ELEMENTS_CLASS.element} key={index}>
      <button
        className="removeButton"
        onClick={() => {
          setData((data) => data.filter((ele) => ele !== e));
          window.localStorage.setItem(
            "state",
            JSON.stringify(data.filter((ele) => ele !== e))
          );
        }}
      >
        X
      </button>
      <h1
        className={ELEMENTS_CLASS.heading}
        onKeyUp={(event) => UpdateStateOnType(event, index, data, setData)}
        contentEditable
        suppressContentEditableWarning={true}
        onPaste={(e) => {
          e.preventDefault();
          var text = e.clipboardData.getData("text/plain");
          document.execCommand("insertText", false, text);
        }}
      >
        {e[1]}
      </h1>
    </div>
  );
};

export const createElement = (e, index, elements, data, setData) => {
  if (e[0] === ELEMENTS_CLASS.para) {
    createPara(e, index, elements, data, setData);
  } else if (e[0] === ELEMENTS_CLASS.heading) {
    createHeading(e, index, elements, data, setData);
  }
};
