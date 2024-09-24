import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Input_todo = ({ onhandleAdd }) => {
  const [val, setValue] = useState("");

  const handlieSubmit = (e) => {
    e.preventDefault();
    console.log(val);

    const newList = { val, id: Date.now() };
    console.log(newList);
    onhandleAdd(newList);
    setValue("");
  };

  const handleSetVal = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <form className="input-box" onSubmit={handlieSubmit}>
        <input
          value={val}
          onChange={handleSetVal}
          type="text"
          placeholder="Enter Todo...👉"
        />
        <button>ADD.</button>
      </form>
    </>
  );
};

export default Input_todo;
