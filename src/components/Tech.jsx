import React from "react";

// YAHAN CHANGE KIYA HAI: Seedha file ka naam likh diya
import BallCanvas from "./canvas/Ball"; 

import SectionWrapper from "../hoc/SectionWrapper";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology) => (
        <div className='w-28 h-28' key={technology.name}>
          {/* BallCanvas ko technology ka icon bhej rahe hain */}
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");