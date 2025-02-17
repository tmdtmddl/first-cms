import { useState } from "react";
import CmsForm from "./Cmsform";
import CmsItem from "./CmsItem";
import "./cms.css";
import { person } from "./database";

const Cms = () => {
  const [students, setStudents] = useState([]);

  return (
    <div>
      <CmsForm />
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
