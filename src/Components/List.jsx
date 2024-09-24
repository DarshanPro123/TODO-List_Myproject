import PropTypes from "prop-types";

const List = ({ list, listDel }) => {
  return (
    <div>
      {list &&
        list.map((lst) => {
          return (
            <li key={lst.id}>
              {" "}
              {/* Move key here */}
              <span>{lst.val}</span>
              <span onClick={() => listDel(lst.id)}>❌</span>
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
  ).isRequired, // Marking as required for better validation
  listDel: PropTypes.func.isRequired, // Adding prop type for listDel function
};

export default List;
