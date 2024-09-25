import List from "./List";
import PropTypes from "prop-types";

const Lists = ({ list, listDel, onEdit }) => {
  return (
    <>
      <div className="lists_box">
        <ul>
          {list.map((lst) => (
            <List
              key={lst.id}
              lst={lst}
              keyid={lst.id}
              lstval={lst.val}
              listDel={listDel}
              onEdit={onEdit}
            />
          ))}
        </ul>
      </div>
    </>
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
};

export default Lists;
