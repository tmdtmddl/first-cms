import { useState } from "react";
import CmsForm from "./Cmsform";
import CmsItem from "./CmsItem";
import "./cms.css";
import { person } from "./database";

const Cms = () => {
  const [students, setStudents] = useState([person]);

  return (
    <div>
      <h1>학생명단</h1>
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
