import { useState, useEffect } from "react";
import CmsForm from "./Cmsform";
import CmsItem from "./CmsItem";
import "./cms.css";
import { person } from "./database";

const Cms = () => {
  const loadStudents = () => {
    const savedStudents = localStorage.getItem("students");
    return savedStudents ? JSON.parse(savedStudents) : [];
  };

  const [students, setStudents] = useState(loadStudents);

  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  return (
    <div
      id="wrap"
      style={{
        margin: "0 auto",
      }}
    >
      <h1>학생명단</h1>
      <CmsForm setStudents={setStudents} students={students} />
      <ul>
        {students.map((student, index) => {
          return (
            <CmsItem
              key={student.tel}
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
