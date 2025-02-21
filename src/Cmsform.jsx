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

    if (student.name.length === 0) {
      alert("학생의 이름을 입력하세요");
      return ref.current?.focus();
    }

    if (student.Gender.length === 0) {
      alert("성별을 고르세요");
      return ref.current?.focus();
    }

    if (student.regi.length === 0) {
      alert("생년월일을 입력하세요");
      return ref.current?.focus();
    }

    if (student.age.length === 0) {
      alert("나이를 입력하세요");
      return ref.current?.focus();
    }

    if (student.job.length === 0) {
      alert("나이를 입력하세요");
      return ref.current?.focus();
    }

    if (student.tel.length < 9 || student.tel.length > 11) {
      alert("전화번호를 정확히 입력하세요");
      return ref.current?.focus();
    }

    if (student.Address.length === 0) {
      alert("주소를 입력하세요");
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
    if (cmsEdit && onCancel) {
      onCancel();
    }

    setStudent({
      name: "",
      Gender: "",
      age: "",
      Address: "",
      regi: "",
      tel: "",
      job: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div id="upForm">
        <input
          id="name"
          type="text"
          value={student.name}
          onChange={onChange}
          ref={ref}
          name="name"
          placeholder="이름을 입력하세요."
          style={{
            flex: 1,
          }}
        />

        <select
          id="Gender"
          value={student.Gender}
          onChange={onChange}
          ref={ref}
          name="Gender"
          style={{
            flex: 1,
          }}
        >
          <option value="GenderPick" hidden>
            성별을 고르세요.
          </option>
          <option value="남성">남성</option>
          <option value="여성">여성</option>
          <option value="기타">기타</option>
        </select>

        <input
          id="regi"
          name="regi"
          type="date"
          value={student.regi}
          onChange={onChange}
          ref={ref}
          placeholder="생년월일 입력하세요."
          style={{
            flex: 1,
          }}
        />

        <input
          id="age"
          name="age"
          type="number"
          value={student.age}
          onChange={onChange}
          ref={ref}
          placeholder="나이를 입력하세요."
          style={{
            flex: 1,
          }}
        />
      </div>

      <div id="downForm">
        <input
          type="text"
          name="job"
          onChange={onChange}
          value={student.job}
          placeholder="직업을 적으세요"
          style={{
            flex: 1,
          }}
        />

        <input
          type="text"
          value={student.tel}
          name="tel"
          onChange={onChange}
          ref={ref}
          placeholder="전화번호를 -없이 입력하세요."
          style={{
            flex: 1,
            width: "300px",
          }}
        />

        <input
          id="address"
          type="text"
          value={student.Address}
          name="Address"
          onChange={onChange}
          ref={ref}
          placeholder="주소를 입력하세요."
          style={{
            flex: 1,
          }}
        />
      </div>

      <div id="btns">
        <button>{cmsEdit ? " 수정" : "추가"}</button>
        {cmsEdit && (
          <button id="cancelBtn" type="button" onClick={onCancel}>
            취소
          </button>
        )}
      </div>
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
