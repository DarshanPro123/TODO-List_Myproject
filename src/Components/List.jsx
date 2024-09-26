import { useState } from "react";
import PropTypes from "prop-types";

const List = ({ lst, listDel, onEdit }) => {
  const [isEditing, setEditing] = useState(false);
  const [editTxt, setEditTxt] = useState(lst.val);

  const handleTxt = (e) => {
    e.preventDefault(); // Prevent default form submission
    onEdit(lst.id, editTxt);
    setEditing(false);
  };

  return (
    <>
      <li>
        {isEditing ? (
          <form onSubmit={handleTxt} className="myedit">
            <input
              className="editInput"
              type="text"
              value={editTxt}
              onChange={(e) => setEditTxt(e.target.value)}
            />
            <div className="buttons">
              <button type="submit">📁</button>
            </div>
          </form>
        ) : (
          <>
            <div className="inputData">
              <span
                style={lst.checked ? { textDecoration: "line-through" } : {}}
              >
                {lst.val}
              </span>
            </div>
            <div className="buttons">
              <span onClick={() => setEditing(true)}>🖋️</span>
              <span onClick={() => listDel(lst.id)}>❌</span>
            </div>
          </>
        )}
      </li>
    </>
  );
};
List.propTypes = {
  lst: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    val: PropTypes.string.isRequired,
    checked: PropTypes.bool,
  }).isRequired,
  listDel: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default List;
