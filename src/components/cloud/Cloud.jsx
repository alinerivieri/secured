import React from "react";
import "./CloudStyles.css";

import { Link } from "react-router-dom";

const Cloud = () => {
  return (
    <div className="cloud">
      <div className="container">
        <div className="content">
          <h2>
            <span>Cloud </span>Security
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            ab accusamus sunt qui consectetur possimus ducimus, recusandae modi
            veritatis officia, vero esse tenetur suscipit excepturi eveniet vel
            atque, iste ullam.
          </p>
          <div>
            <button><Link to='/cloud'>Learn More</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cloud;
