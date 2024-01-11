import React, { useContext, useEffect, useState } from "react";
import CreateInvitation from "../components/CreateInvitation";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";
import { FcApproval, FcEditImage } from "react-icons/fc";

const Home = () => {
  const user = useContext(UserContext);
  const [creating, setCreating] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user.logged) {
      navigate("/login");
    }
  }, []);

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-[50vh]">
      <div className="flex flex-row justify-center items-center">
        <FcApproval className="m-2" size={32} />
        <button
          onClick={() => {
            navigate("/guests");
          }}
          className="text-2xl font-medium"
        >
          עבור לעמוד האישורים
        </button>
      </div>

      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-row items-center justify-center">
          {!creating && <FcEditImage className="m-2" size={32} />}
          <button
            onClick={() => {
              setCreating((curr) => !curr);
            }}
            className="text-2xl font-medium"
          >
            {creating ? "בטל" : "ערוך הזמנה"}
          </button>
        </div>
        {creating && <CreateInvitation />}
      </div>
    </div>
  );
};

export default Home;
