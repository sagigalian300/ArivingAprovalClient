import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full bg-black p-5 flex flex-col md:flex-row justify-center items-center mt-[100px] md:mt-0">
      <div className="flex flex-col text-end m-5">
        <h1 className="text-white text-lg font-bold">קראו עלינו</h1>
        <h1 onClick={() => {navigate('/info')}} className="text-white text-lg">בעמוד זה</h1>
        <h1> ""</h1>
      </div>
      <div className="flex flex-col text-end m-5">
        <h1 className="text-white text-lg font-bold">
          לפרטים והזמנות מצאו אותנו
        </h1>
        <h1 className="text-white text-lg">במספר - 0585916747</h1>
        <h1 className="text-white text-lg">sagigalianold@gmail.com - במייל </h1>
      </div>
    </div>
  );
};

export default Footer;
