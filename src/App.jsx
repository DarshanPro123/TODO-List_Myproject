import { useState } from "react";
import "./App.css";
import Input_todo from "./Components/Input_todo";
import Lists from "./Components/Lists";

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

  // const handleEdit = (id) => {
  //   if (editId === id) {
  //     setEdit((edit) => !edit);
  //     setEditId(null);
  //   }
  //   console.log(edit);
  // };

  return (
    <>
      {" "}
      <h1>my to-do app</h1>
      <div className="input-base">
        <Input_todo list={list} onhandleAdd={handleAdd} />
      </div>
      {list.length > 0 ? (
        <Lists list={list} listDel={handleDel} />
      ) : (
        <h1 className="emptylist">Oops!! List is Empty 📬</h1>
      )}
    </>
  );
}

export default App;
