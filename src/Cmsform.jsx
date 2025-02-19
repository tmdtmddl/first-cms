import PropTypes from "prop-types";
import { useState, useRef } from "react";
import "./CmsForm.css";

const CmsForm = ({ payload, cmsEdit, students, setStudents, onCancel }) => {
  const [student, setStudent] = useState(
    payload ?? {
      name: "",
      Gender: "",
      age: "",
      Address: "",
      regi: "",
      tel: "",
      job: "",
    }
  );

  const ref = useRef(null);

  const onChange = (e) => {
    setStudent((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (student.length === 0) {
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
      <div id="upForm">
        <div>
          <input
            type="text"
            value={student.name}
            onChange={onChange}
            ref={ref}
            name="name"
            placeholder="이름을 입력하세요."
          />
        </div>

        <div>
          <select
            value={student.Gender}
            onChange={onChange}
            ref={ref}
            name="Gender"
          >
            <option value="GenderPick" hidden>
              성별을 고르세요.
            </option>
            <option value="남성">남성</option>
            <option value="여성">여성</option>
            <option value="기타">기타</option>
          </select>
        </div>

        <div>
          <input
            name="age"
            type="text"
            value={student.age}
            onChange={onChange}
            ref={ref}
            placeholder="나이를 입력하세요."
          />
        </div>

        {/* <div>
          <input
            type="text"
            value={student}
            onChange={onChange}
            ref={ref}
            placeholder="나이를 입력하세요."
          />
        </div> */}
      </div>

      {/* <div id="downForm">
        <div>
          <input type="text" placeholder="재직여부 혹은 직업을 적으세요" />
        </div>

        <div>
          <input
            type="text"
            value={student}
            onChange={onChange}
            ref={ref}
            placeholder="전화번호를 -없이 입력하세요."
          />
        </div>

        <div>
          <input
            type="text"
            value={student}
            onChange={onChange}
            ref={ref}
            placeholder="주소를 입력하세요."
          />
        </div>
      </div> */}

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
  payload: PropTypes.object,

  cmsEdit: PropTypes.bool,

  students: PropTypes.array,
  setStudents: PropTypes.func,

  onCancel: PropTypes.func,
};
