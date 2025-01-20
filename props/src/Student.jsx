import PropTypes from "prop-types"; //for debugging
function Student(props) {
  return (
    <div className="student">
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
      <p>Student: {props.isStudent ? "yes" : "no"}</p>
    </div>
  );
}
Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool.isRequired,
};

Student.defaultProps = {
  name: "Guest",
  age: 25,
  isStudent: false,
};
export default Student;
