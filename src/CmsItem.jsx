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
          <div>
            <p>
              {index + 1}. {payload.name},{payload.age},{payload.Gender}
            </p>
          </div>
          <div>
            <p>{payload.job}</p>
            <p>{payload.tel}</p>
            <p>{payload.Address}</p>
            <p>{payload.regi}</p>
            <p>{payload.sid}</p>
          </div>

          <div>
            <button onClick={editHandler}>수정</button>
            <button onClick={cmsDelete}>삭제</button>
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
