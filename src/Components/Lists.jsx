import List from "./List";

// eslint-disable-next-line react/prop-types
const Lists = ({ list }) => {
  return (
    <>
      <div className="lists_box">
        <ul>
          <List list={list} />
        </ul>
      </div>
    </>
  );
};

export default Lists;
