import PropTypes from "prop-types";
import { useState } from "react";

const CmsForm = ({ payload, cmsEdit, students, setStudents, onCancel }) => {
  const [student, setStudent] = useState(payload ?? "");

  const onChange = (e) => {
    setStudent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (student.length === 0) {
      alert("학생을 입력하세요");
      return;
    }

    setStudents((prev) => {
      let copy = [...prev];

      if (cmsEdit) {
        const index = students.findIndex((p) => p === payload);
        if (index > 0) {
          copy[index] = student;
        }
      } else {
        copy.unshift(student);
      }
      return copy;
    });
    alert(cmsEdit ? " 수정되었습니다" : "추가되었습니다.");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="">학생을 추가하세요.</label>
        <input type="text" value={student} onChange={onChange} />
      </div>
      <button>{cmsEdit ? " 수정" : "추가"}</button>
      <button type="button" onClick={onCancel}>
        취소
      </button>
    </form>
  );
};

export default CmsForm;

CmsForm.PropTypes = {
  payload: PropTypes.string,

  CmsEdit: PropTypes.bool,

  students: PropTypes.array,
  setStudents: PropTypes.func,

  onCancel: PropTypes.func,
};
