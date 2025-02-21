import PropTypes from "prop-types";
import { useState } from "react";
import CmsForm from "./Cmsform";

const CmsItem = ({ setStudents, students, index, payload }) => {
  const [cmsEdit, setCmsEdit] = useState(false);

  const editHandler = () => setCmsEdit((prev) => !prev);

  const cmsDelete = () => {
    if (confirm("삭제하시겠습니까?")) {
      setStudents((prev) => prev.filter((item) => item !== payload));
      alert("삭제했습니다");
    } else {
      alert("취소했습니다");
    }
  };

  return (
    <li>
      {cmsEdit ? (
        <CmsForm
          onCancel={editHandler}
          setStudents={setStudents}
          students={students}
          payload={payload}
          cmsEdit={cmsEdit}
        />
      ) : (
        <>
          <div className="wrap123">
            <div className="gap">
              <p className="namefont">이름: {payload.name}</p>
              <p>성별: {payload.Gender}</p>
              <p className="regifont">직업: {payload.job}</p>
            </div>

            <div>
              <p className="addressfont">
                나이: {payload.age}세 생년월일: {payload.regi}
              </p>

              <p>전화번호: {payload.tel}</p>
            </div>

            <p className="addressfont">주소: {payload.Address}</p>
          </div>
          <div className="btns">
            <button onClick={editHandler} className="graybtn">
              수정
            </button>
            <button onClick={cmsDelete} className="redbtn">
              삭제
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default CmsItem;

CmsItem.propTypes = {
  setStudents: PropTypes.func,
  students: PropTypes.array,
  index: PropTypes.number,
  payload: PropTypes.string,
};
