import { useState } from "react";
import CmsForm from "./Cmsform";
import CmsItem from "./CmsItem";

const Cms = () => {
  const [students, setStudents] = useState([]);

  return (
    <div>
      <CmsForm />
      <ul>
        {students.map((student, index) => {
          return <CmsItem key={student} />;
        })}
      </ul>
    </div>
  );
};

export default Cms;
