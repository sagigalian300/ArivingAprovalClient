import React, { useRef, useState } from "react";
import ManageDatabaseRequests from "../db/actions";
import { useNavigate } from "react-router-dom";
import animationData from "../assets/woman typing.json";
import Lottie from "lottie-react";
import Loader from "../components/Loader";


const Login = (props) => {
  const nameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div id="login" className="flex flex-col md:flex-row min-h-[80vh] items-center justify-center">
      <div className="flex-1 flex justify-center items-center">
        <Lottie animationData={animationData} className="w-[80%]" />
      </div>
      <div className="flex-1 flex flex-col items-center justify-center w-full">
      <h1 className="text-3xl font-bold mb-5">התחברות</h1>
        <input
        dir="rtl"
          className="w-[60%] md:w-[50%] p-3 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
          ref={nameRef}
          placeholder="שם"
        />
        <input
        dir="rtl"
          className="w-[60%] md:w-[50%] p-3 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all"
          ref={passwordRef}
          placeholder="סיסמה"
          type="password"
        />
        <button
          className="bg-[#f3603c] w-[50%] md:w-[40%] p-3 m-2 rounded-full text-white lg:hover:shadow-lg lg:hover:shadow-[#c4acac] lg:hover:scale-110 transition-all mb-[150px]"
          onClick={() => {
            setLoading(true)
            ManageDatabaseRequests.CheckUserExistanceByNameAndPassword(
              nameRef.current.value,
              passwordRef.current.value
            ).then((user) => {
              setLoading(false)
              if (user) {
                // console.log(user)
                props.setUserOnLogin(user);
                navigate("/home");
              } else {
                alert("שם או סיסמה שגויים, נסה שנית");
              }
            }).catch(() => {
              setLoading(false)
            })
          }}
        >
          התחבר
        </button>
        {loading && <Loader />}
      </div>
    </div>
  );
};

export default Login;
