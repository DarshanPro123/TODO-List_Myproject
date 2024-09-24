import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
const List = ({ list }) => {
  return (
    <>
      {/* // eslint-disable-next-line react/prop-types */}
      {list &&
        list.map((lst) => {
          return (
            <>
              <div key={lst.id}>
                <li>
                  <span>{lst.val}</span>
                  <span>❌</span>
                </li>
              </div>
            </>
          );
        })}
    </>
  );
};

List.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      val: PropTypes.string.isRequired,
    })
  ),
};
export default List;
