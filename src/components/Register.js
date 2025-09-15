import { useRef, useState } from "react";
import ManageDatabaseRequests from "../db/actions";
import Loader from "./Loader";
import AddToCalendarButton from "../components/AddToCalendarButton";

//https://kerenbackend.onrender.com // this one is for keren backend
//http://localhost:3001
const Register = ({ inviteId }) => {
  const [count, setCount] = useState(1);
  const fNameRef = useRef();
  const lNameRef = useRef();
  const emailRef = useRef();
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(false);

  // const isValidPhoneNumber = (phoneNumber) => {
  //   if (phoneNumber.length != 10)
  //     return { isValid: false, reason: "מספר טלפון חייב להיות בן 10 ספרות" };
  //   if (phoneNumber[0] != "0")
  //     return { isValid: false, reason: "מספר טלפון חייב להתחיל בספרה 0" };
  //   if (/[^0-9]/.test(phoneNumber) == true)
  //     return { isValid: false, reason: "מספר טלפון לא יכול להכיל תווים" };
  //   return { isValid: true, reason: "" };
  // };

  const isValidEmail = (email) => {
    // must contain '@' and end with '@gmail.com'
    if (!email.endsWith("@gmail.com")) {
      return { isValid: false, reason: "האימייל חייב להסתיים ב- @gmail.com" };
    }

    // username before @gmail.com must not be empty
    const username = email.slice(0, -10); // remove '@gmail.com'
    if (username.length === 0) {
      return {
        isValid: false,
        reason: "האימייל חייב להכיל שם משתמש לפני @gmail.com",
      };
    }

    // check only allowed characters (letters, numbers, dots)
    if (!/^[a-zA-Z0-9.]+$/.test(username)) {
      return {
        isValid: false,
        reason: "שם המשתמש יכול להכיל רק אותיות, מספרים או נקודה",
      };
    }

    return { isValid: true, reason: "" };
  };

  const addGuest = () => {
    setLoading(true);
    if (
      fNameRef.current.value.length > 0 &&
      lNameRef.current.value.length > 0
    ) {
      const result = isValidEmail(emailRef.current.value);
      if (result.isValid) {
        ManageDatabaseRequests.IsEmailAlreadyUsed(
          emailRef.current.value,
          inviteId
        ).then((result) => {
          console.log("is the email aleady in use ? " + result);
          if (result == false) {
            ManageDatabaseRequests.AddGuest(
              { inviteId },
              fNameRef.current.value + " " + lNameRef.current.value,
              emailRef.current.value,
              count
            ).then((result) => {
              console.log(result);
              setDone(true);
              setLoading(false);
            });
          } else {
            alert("מייל זה מופיע אצלנו במאגר, לא ניתן לאשר הגעה פעמיים");
            setLoading(false);
          }
        });
      } else {
        alert(result.reason);
        setLoading(false);
      }
    } else {
      alert("שם פרטי ושם משפחה חייבים להכתב");
      setLoading(false);
    }
  };

  return (
    <div>
      {done ? (
        <div className="w-full flex flex-col items-center justify-center mb-[50px] text-4xl font-medium text-center">
          <h1 className="mb-2"> תגובתך נרשמה בהצלחה</h1>
          <AddToCalendarButton />
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="font-bold text-5xl" id="font1">
            אישור הגעה
          </h1>
          <div
            className="flex flex-col justify-center items-start p-5 mt-[20px] text-2xl"
            style={{ direction: "rtl" }}
          >
            <div className="flex flex-row items-center justify-between mb-4">
              <input
                ref={fNameRef}
                className=" bg-transparent border-[#7ba7b3] text-[#7ba7b3] font-bold outline-none border-b-[4px] w-[45%] focus:border-black transition-colors duration-700 p-2"
                placeholder="שם פרטי"
              />
              <input
                ref={lNameRef}
                className=" bg-transparent border-[#7ba7b3] text-[#7ba7b3] font-bold outline-none border-b-[4px] w-[45%] focus:border-black transition-colors duration-700 p-2"
                placeholder="שם משפחה"
              />
            </div>
            <div className="w-full flex justify-center items-center">
              <input
                ref={emailRef}
                className=" bg-transparent border-[#7ba7b3] text-[#7ba7b3] font-bold outline-none border-b-[4px] w-[45%] focus:border-black transition-colors duration-700 p-2"
                placeholder="Gmail"
              />
            </div>
          </div>
          <div className="flex flex-row text-2xl font-bold mt-[40px] mb-[20px]">
            <div className="flex flex-row items-center justify-center">
              <button
                onClick={() => {
                  setCount((curr) => curr + 1);
                }}
                className="p-2 outline-none"
              >
                +
              </button>
              <h1 className="pl-3 pr-3 ml-1 mr-1 border-b-[4px] border-b-[#7ba7b3] font-medium">
                {count}
              </h1>
              <button
                onClick={() => {
                  setCount((curr) => (curr > 1 ? curr - 1 : curr));
                }}
                className="p-2 outline-none"
              >
                -
              </button>
            </div>
            {/* <div className="text-center my-8">
              <input
                type="range"
                id="slider"
                min="1"
                max="20"
                value={count}
                onChange={handleChange}
                className="w-80 my-2"
              />
              <span className="text-lg text-gray-700">{count}</span>
            </div> */}
            <h1 className=" ml-2">?</h1>
            <h1 className=" ">כמה אתם</h1>
          </div>
          <button
            onClick={() => {
              addGuest();
            }}
            className="bg-[#7ba7b3] font-bold text-white w-[200px] p-2 mb-[100px] hover:scale-125 transition-all"
          >
            שליחה
          </button>
          {/* לא מוסיף בינתיים אורחים */}
        </div>
      )}
      {loading && (
        <div className="w-full flex justify-center items-center p-5">
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Register;
