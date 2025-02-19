import PropTypes from "prop-types";
import { person } from "./database";
import { useState, useRef } from "react";

const CmsForm = ({ payload, cmsEdit, students, setStudents, onCancel }) => {
  const [student, setStudent] = useState(payload ?? "");

  const ref = useRef(null);

  const onChange = (e) => {
    setStudent(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (person.namelength === 0) {
      alert("학생을 입력하세요");
      return ref.current?.focus();
    }

    setStudents((prev) => {
      let copy = [...prev];

      if (cmsEdit) {
        const index = students.findIndex((p) => p === payload);
        if (index >= 0) {
          copy[index] = student;
        }
      } else {
        copy.unshift(student);
      }

      return copy;
    });

    alert(cmsEdit ? "수정되었습니다." : "추가되었습니다.");

    setStudent("");
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="">
          {cmsEdit ? "학생 이름을 수정해주세요" : "학생을 추가해주세요."}
        </label>
        <input type="text" value={person.name} onChange={onChange} ref={ref} />
        <input type="text" value={person.age} onChange={onChange} ref={ref} />
        <input
          type="text"
          value={person.Address}
          onChange={onChange}
          ref={ref}
        />
        <input type="text" value={person.regi} onChange={onChange} ref={ref} />
        <input type="text" value={person.tel} onChange={onChange} ref={ref} />
        <input
          type="text"
          value={person.Gender}
          onChange={onChange}
          ref={ref}
        />
        <input type="text" value={person.sid} onChange={onChange} ref={ref} />
        <input type="text" value={person.job} onChange={onChange} ref={ref} />
      </div>
      <button>{cmsEdit ? " 수정" : "추가"}</button>
      {cmsEdit && (
        <button type="button" onClick={onCancel}>
          취소
        </button>
      )}
    </form>
  );
};

export default CmsForm;

CmsForm.propTypes = {
  payload: PropTypes.string,

  cmsEdit: PropTypes.bool,

  students: PropTypes.array,
  setStudents: PropTypes.func,

  onCancel: PropTypes.func,
};
