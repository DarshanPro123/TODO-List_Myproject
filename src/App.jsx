import { useState } from "react";
import "./App.css";
import Input_todo from "./Components/Input_todo";
import Lists from "./Components/Lists";
import bgimg from "./assets/boythink.png";

// updating is pending for context and redux

function App() {
  const [list, setList] = useState([]);
  // const [edit, setEdit] = useState(false);
  // const [editId, setEditId] = useState(null);
  const handleAdd = (data) => {
    setList((datas) => [...datas, data]);
  };

  const handleDel = (id) => {
    setList((list) => list.filter((item) => item.id !== id));
  };

  const handleEdit = (id, newtxt) => {
    const updateList = list.map((lst) =>
      lst.id === id ? { ...lst, val: newtxt } : lst
    );

    setList(updateList);
  };

  return (
    <>
      {" "}
      <h1>my to-do app</h1>
      <div className="input-base">
        <Input_todo list={list} onhandleAdd={handleAdd} />
      </div>
      {list.length > 0 ? (
        <Lists list={list} listDel={handleDel} onEdit={handleEdit} />
      ) : (
        <>
          {" "}
          <div className="emptylist">
            <h1>
              {" "}
              Oops
              <em>‼</em> List is Empty ⁉️
            </h1>
            <img src={bgimg} alt="" />
          </div>
        </>
      )}
    </>
  );
}

export default App;
