import PropTypes from "prop-types";
import { useState, useRef } from "react";

const CmsForm = ({ payload, cmsEdit, students, setStudents, onCancel }) => {
  const [student, setStudent] = useState(payload ?? "");

  const ref = useRef(null);

  const onChange = (e) => {
    setStudent(e.target.value);
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
            value={student}
            onChange={onChange}
            ref={ref}
            placeholder="이름을 입력하세요."
          />
        </div>

        <div>
          <select name="">
            <option value="GenderPick" hidden>
              성별을 고르세요.
            </option>
            <option value="m">남성</option>
            <option value="f">여성</option>
            <option value="ex">기타</option>
          </select>
        </div>

        <div>
          <input
            type="date"
            value={student}
            onChange={onChange}
            ref={ref}
            placeholder="나이를 입력하세요."
          />
        </div>

        <div>
          <input
            type="number"
            value={student}
            onChange={onChange}
            ref={ref}
            placeholder="나이를 입력하세요."
          />
        </div>
      </div>

      <div id="downForm">
        <div>
          <select name="">
            <option value="재직" hidden>
              재직 여부
            </option>
            <option value="working">재직중</option>
            <option value="noWorking">무직</option>
            <option value="extra">기타</option>
          </select>
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
