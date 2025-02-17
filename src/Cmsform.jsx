import PropTypes from "prop-types";
import { useState } from "react";

const CmsForm = ({ payload, setStudents, students }) => {
  const [student, setStudent] = useState(payload ?? "");
  // const [students, setStudents] = useState([]);

  const onChange = (e) => {
    setStudent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (student.length === 0) {
      alert("학생을 입력하세요");
      return;
    }

    // const index = students.findIndex((item) => item === payload);
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="">학생을 추가하세요.</label>
        <input type="text" value={student} onChange={onChange} />
      </div>
      <button>추가</button>
    </form>
  );
};

export default CmsForm;

CmsForm.PropTypes = {
  payload: PropTypes.string,

  // CmsEdit: PropTypes.bool,

  students: PropTypes.array,
  setStudents: PropTypes.func,

  // oncancel: PropTypes.func,
};
