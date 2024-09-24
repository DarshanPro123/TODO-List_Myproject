import { useState } from "react";

const Input_todo = () => {
  const [value, setValue] = useState("");
  return (
    <>
      <form className="input-box">
        <input type="text" placeholder="Enter Todo...👉" />
        <button>ADD.</button>
      </form>
    </>
  );
};

export default Input_todo;
