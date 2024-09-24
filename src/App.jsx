import { useState } from "react";
import "./App.css";
import Input_todo from "./Components/Input_todo";
import Lists from "./Components/Lists";

function App() {
  const [list, setList] = useState([]);
  const handleAdd = (data) => {
    setList((datas) => [...datas, data]);
  };

  const handleDel = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
  };
  return (
    <>
      {" "}
      <h1>my to-do app</h1>
      <div className="input-base">
        <Input_todo list={list} onhandleAdd={handleAdd} />
      </div>
      <Lists list={list} listDel={handleDel} />
    </>
  );
}

export default App;
