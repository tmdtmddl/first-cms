import { useState } from "react";
import Cmsform from "./Cmsform";

const Cms = () => {
  const [students, setSetstudents] = useState([]);
  return (
    <div>
      <Cmsform />
      <h1></h1>
    </div>
  );
};

export default Cms;
