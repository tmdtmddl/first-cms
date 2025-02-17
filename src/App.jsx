import { useState } from "react";
import CmsForm from "./CmsForm";
import CmsItem from "./CmsItem";

const Cms = () => {
  const [students, setStudents] = useState([]);

  return (
    <div>
      <CmsForm setStudents={setStudents} students={students} />
      <ul>
        {students.map((student, index) => {
          return (
            <CmsItem
              key={student}
              setStudents={setStudents}
              students={students}
              index={index}
              payload={student}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cms;
