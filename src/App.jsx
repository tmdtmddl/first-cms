import { useState } from "react";
import CmsForm from "./Cmsform";
import CmsItem from "./CmsItem";
import { person } from "./database";

const Cms = () => {
  const [students, setStudents] = useState([person]);

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
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Cms;
