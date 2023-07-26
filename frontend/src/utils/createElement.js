import ELEMENTS_CLASS from "./ELEMENETS_CLASS";

const UpdateData = (event, index, data, setData) => {
  var new_data = data;
  new_data[index][1] = event.currentTarget.innerText;
  setData(new_data);
  window.localStorage.setItem("state", JSON.stringify(data));
};

export const createPara = (elements, e, index, data, setData) => {
  elements.push(
    <div
      key={index}
      className={ELEMENTS_CLASS.para}
      onKeyUp={UpdateData(Event, index, data, setData)}
      contentEditable
      suppressContentEditableWarning={true}
    >
      {e[1]}
    </div>
  );
};

export const createHeading = () => {};
