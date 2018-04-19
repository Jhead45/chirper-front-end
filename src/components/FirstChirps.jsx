import React from "react";
import Chirp from "./Chirp";

const FirstChirps = props => {
    
  return (
    <div className="d-flex justify-content-center">
      <table className="table table-dark w-50">
        <tr className="text-center">
          <td>This new Chirper App is Amazing!</td>
        </tr>
        <tr className="text-center">
          <td>I know! right?</td>
        </tr>
      </table>
    </div>
  );
};

export default FirstChirps;
