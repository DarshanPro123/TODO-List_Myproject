import bgimg from "../assets/boythink.png";

const EmptyList = () => {
  return (
    <>
      {" "}
      <div className="emptylist">
        <h1>
          {" "}
          Oops
          <em>‼</em> List is Empty ⁉️
        </h1>
        <img src={bgimg} alt="" />
      </div>
    </>
  );
};

export default EmptyList;
