import { useState } from "react";
import List from "./List";
import PropTypes from "prop-types";

const Lists = ({ list, listDel, onEdit, onCheck }) => {
  const [sortby, setSortby] = useState("items");

  const getSortedList = () => {
    let sortedList = [...list];

    if (sortby === "desc") {
      sortedList.sort((a, b) => b.val.localeCompare(a.val));
    } else if (sortby === "assen") {
      sortedList.sort((a, b) => a.val.localeCompare(b.val));
    }

    return sortedList;
  };

  const sortedList = getSortedList();

  return (
    <div className="lists_box">
      <div className="custom-select">
        <select value={sortby} onChange={(e) => setSortby(e.target.value)}>
          <option value="items">Sorted by items</option>
          <option value="desc">Sorted by desc</option>
          <option value="assen">Sorted by ascending</option>
        </select>
      </div>
      <ul>
        {sortedList.map((lst) => (
          <List
            key={lst.id}
            lst={lst}
            listDel={listDel}
            onEdit={onEdit}
            onCheck={onCheck}
          />
        ))}
      </ul>
    </div>
  );
};

Lists.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      val: PropTypes.string.isRequired,
    })
  ).isRequired,
  listDel: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onCheck: PropTypes.func,
};

export default Lists;
