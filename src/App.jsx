import { useState } from "react";
import "./App.css";
import Input_todo from "./Components/Input_todo";
import Lists from "./Components/Lists";

function App() {
  const [list, setList] = useState([]);
  const handleAdd = (data) => {
    setList((datas) => [...datas, data]);
  };
  return (
    <>
      {" "}
      <h1>my to-do app</h1>
      <div className="input-base">
        <Input_todo list={list} onhandleAdd={handleAdd} />
        <Lists list={list} />
      </div>
    </>
  );
}

export default App;
