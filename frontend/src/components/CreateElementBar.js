import ELEMENTS_CLASS from "../utils/ELEMENETS_CLASS";

export default function CreateElementBar({ data, setData }) {
  const addPara = () => {
    const new_para = [ELEMENTS_CLASS.para, "sample text"];
    setData((data) => [...data, new_para]);
  };
  const addHeading = () => {
    const new_heading = [ELEMENTS_CLASS.heading, "sample heading"];
    setData((data) => [...data, new_heading]);
  };

  return (
    <div className="createElementBar">
      <button onClick={addPara}>Add Paragraph</button>
      <button onClick={addHeading}>Add Heading</button>
    </div>
  );
}
