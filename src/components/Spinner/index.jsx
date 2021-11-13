import React from "react";
import ReactLoading from "react-loading";

import "./style.css";

const Spinner = () => {
  return (
    <div className="container-fluid bg-color-spinner">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <ReactLoading
            type={"bubbles"}
            color={"#A6711F"}
            height={"100%"}
            width={"100%"}
          />
        </div>
      </div>
    </div>
  );
};

export default Spinner;
