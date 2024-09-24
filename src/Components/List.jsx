import PropTypes from "prop-types";

const List = ({ list, listDel }) => {
  return (
    <div>
      {list &&
        list.map((lst) => {
          return (
            <li key={lst.id}>
              {" "}
              <span>{lst.val}</span>
              <div className="buttons">
                <span>📁</span>
                <span onClick={() => listDel(lst.id)}>❌</span>
              </div>
            </li>
          );
        })}
    </div>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      val: PropTypes.string.isRequired,
    })
  ).isRequired,
  listDel: PropTypes.func.isRequired,
};

export default List;
