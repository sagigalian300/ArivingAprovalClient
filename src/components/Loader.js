import React from "react";
import ClipLoader from "react-spinners/ClipLoader";

function Loader() {
  return (
    <div className="loader">
      <ClipLoader size={90} color="#f3603c" speedMultiplier={2} />
    </div>
  );
}

export default Loader;
