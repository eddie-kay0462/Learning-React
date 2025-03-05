// import proptype
import PropTypes from 'prop-types'

function Student({name="Guest", age=0, isStudent=false}) {
  return (
    <div className="student">
        <p>
            <strong>Name:</strong> {name}
        </p>
        <p>
            <strong>Age:</strong> {age}
        </p>
        <p>
            <strong>Is Student:</strong> {isStudent ? "Yes" : "No"}
        </p>
    </div>
  );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    isStudent: PropTypes.bool.isRequired 
}

export  default Student;