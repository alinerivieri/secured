import React from "react";
import "./DataStyles.css";

import { Link } from "react-router-dom";

const Data = () => {
  return (
    <div className="data">
      <div className="container">
        <div className="content">
          <h2>
            <span>Data</span> Recovery
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut
            quibusdam quidem et repudiandae hic debitis maiores, harum illo eos,
            dolor id maxime sunt atque reprehenderit fuga provident dignissimos,
            magni tenetur.
          </p>
          <div>
            <button><Link to='/recovery'>Learn More</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Data;
