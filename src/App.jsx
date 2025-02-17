import { useState } from "react";
import CmsForm from "./CmsForm";
import CmsItem from "./CmsItem";
import "./cms.css";
import { person } from "./database";

const Cms = () => {
  const [students, setStudents] = useState([person]);

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
