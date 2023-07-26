import ELEMENTS_CLASS from "./ELEMENETS_CLASS";

const UpdateData = (event, index, data, setData) => {
  var new_data = data;
  new_data[index][1] = event.currentTarget.innerText;
  setData(new_data);
  window.localStorage.setItem("state", JSON.stringify(data));
};

const createPara = (e, index, elements, data, setData) => {
  elements.push(
    <div
      key={index}
      className={ELEMENTS_CLASS.para}
      onKeyUp={(event) => UpdateData(event, index, data, setData)}
      contentEditable
      suppressContentEditableWarning={true}
    >
      {e[1]}
    </div>
  );
};

const createHeading = (e, index, elements, data, setData) => {
  elements.push(
    <h1
      key={index}
      className={ELEMENTS_CLASS.para}
      onKeyUp={(event) => UpdateData(event, index, data, setData)}
      contentEditable
      suppressContentEditableWarning={true}
    >
      {e[1]}
    </h1>
  );
};

export const createElement = (e, index, elements, data, setData) => {
  if (e[0] === ELEMENTS_CLASS.para) {
    createPara(e, index, elements, data, setData);
  } else if (e[0] === ELEMENTS_CLASS.heading) {
    createHeading(e, index, elements, data, setData);
  }
};
