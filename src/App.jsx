import { useState } from "react";
import "./App.css";
import Input_todo from "./Components/Input_todo";
import Lists from "./Components/Lists";
import EmptyList from "./Components/EmptyList";

function App() {
  const [list, setList] = useState([]);

  const handleAdd = (data) => {
    setList((prevList) => [...prevList, data]);
  };

  const handleDel = (id) => {
    setList((prevList) => prevList.filter((item) => item.id !== id));
  };

  const handleEdit = (id, newtxt) => {
    const updatedList = list.map((item) =>
      item.id === id ? { ...item, val: newtxt } : item
    );
    setList(updatedList);
  };

  return (
    <>
      <div className="header">
        <h1>My To-Do App</h1>
        <span>
          {list.length > 0
            ? `You have ${list.length} item${list.length > 1 ? "s" : ""}`
            : `Your list is empty`}
        </span>
      </div>
      <div className="input-base">
        <Input_todo onhandleAdd={handleAdd} />
      </div>
      {list.length > 0 ? (
        <Lists list={list} listDel={handleDel} onEdit={handleEdit} />
      ) : (
        <EmptyList />
      )}
    </>
  );
}

export default App;
