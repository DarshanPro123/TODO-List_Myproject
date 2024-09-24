import List from "./List";

// eslint-disable-next-line react/prop-types
const Lists = ({ list, listDel }) => {
  return (
    <>
      <div className="lists_box">
        <ul>
          <List list={list} listDel={listDel} />
        </ul>
      </div>
    </>
  );
};

export default Lists;
