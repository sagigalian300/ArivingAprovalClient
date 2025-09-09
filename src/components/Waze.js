import React, { useEffect, useState } from "react";
import { FaWaze } from "react-icons/fa6";
const Waze = ({ lat, lon }) => {
  useEffect(() => {
    console.log(lat, lon);
  }, []);
  const handleOpenWaze = () => {
    const url = `https://www.waze.com/ul?ll=${lat},${lon}&navigate=yes`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full flex items-center justify-center p-5">
      <div
        onClick={handleOpenWaze}
        className="flex flex-row justify-center items-center hover:cursor-pointer"
      >
        <FaWaze size={32} className="m-2" />
        <h1 className="font-medium text-2xl">WAZEפתח ב</h1>
      </div>
    </div>
  );
};

export default Waze;
