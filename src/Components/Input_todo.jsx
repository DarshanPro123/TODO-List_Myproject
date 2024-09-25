import { useState } from "react";

// eslint-disable-next-line react/prop-types
const Input_todo = ({ onhandleAdd }) => {
  const [val, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (val.length === 0) {
      alert("Please add a value to the list");
      return;
    }

    const newList = { val, id: Date.now() };
    onhandleAdd(newList);
    setValue("");
  };

  return (
    <form className="input-box" onSubmit={handleSubmit}>
      <input
        value={val}
        onChange={(e) => setValue(e.target.value)}
        type="text"
        placeholder="Enter Todo...👉"
      />
      <button type="submit">ADD</button>
    </form>
  );
};

export default Input_todo;
