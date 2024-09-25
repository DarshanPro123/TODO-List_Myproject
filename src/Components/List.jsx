import { useState } from "react";
import PropTypes from "prop-types";

const List = ({ lst, listDel, onEdit, onCheck }) => {
  const [isEdting, setEditing] = useState(false);
  const [editTxt, setEditTxt] = useState(lst.val);

  const handleTxt = () => {
    onEdit(lst.id, editTxt);
    setEditing(false);
  };
  return (
    <div>
      <li>
        {isEdting ? (
          <>
            <form onSubmit={handleTxt} className="myedit">
              <input
                className="editInput"
                type="text"
                value={editTxt}
                onChange={(e) => setEditTxt(e.target.value)}
              />

              <div className="buttons">
                <span onClick={handleTxt}> 📁</span>
              </div>
            </form>
          </>
        ) : (
          <>
            <div className="inputData">
              <input type="checkbox" onClick={() => onCheck(lst.id)} />
              <span
                style={lst.checked ? { textDecoration: "Line-through" } : {}}
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

        {/*  */}
      </li>
    </div>
  );
};

List.propTypes = {
  lst: PropTypes.arrayOf(
    PropTypes.shape({
      keyid: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      val: PropTypes.string.isRequired,
    })
  ).isRequired,
  listDel: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onCheck: PropTypes.func.isRequired,
};

export default List;
