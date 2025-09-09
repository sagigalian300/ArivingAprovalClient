import React, { useEffect, useState } from "react";

import Lottie from "lottie-react";
import heartAnimation from "../assets/heart_animation.json";
import balloonsAnimation from "../assets/baloons.json";
import presentAnimation from "../assets/presentsAnimaion.json";
import birthday1Animation from "../assets/birthday1Animation.json";
import birthday2Animation from "../assets/birthday2Animation.json";
import birthday3Animation from "../assets/birthday3Animation.json";
import birthday4Animation from "../assets/birthday4Animation.json";
import marriage1Animation from "../assets/marriage1Animation.json";
import marriage2Animation from "../assets/marriage2Animation.json";
import { motion } from "framer-motion";

const decorations = [
  heartAnimation,
  balloonsAnimation,
  presentAnimation,
  birthday1Animation,
  birthday2Animation,
  birthday3Animation,
  birthday4Animation,
  marriage1Animation,
  marriage2Animation,
];

const Main = ({ name, date, location, otherDetails, type, decoIndex }) => {
  const [seperateOtherDetails, setSeperateOtherDetails] = useState([""]);
  useEffect(() => {
    var newArr = [""];
    for (let i = 0; i < otherDetails.length; i++) {
      if (otherDetails[i] === "*") {
        newArr.push("");
      } else {
        newArr[newArr.length - 1] += otherDetails[i];
      }
    }
    // console.log(newArr)
    setSeperateOtherDetails((curr) => newArr);
  }, [otherDetails]);

  useEffect(() => {
    console.log(seperateOtherDetails);
  }, [seperateOtherDetails]);
  return (
    <div className="flex flex-col items-center justify-center text-center p-[30px]">
      <Lottie
        className="w-[60%] md:w-[30%] lg:w-[20%]"
        animationData={heartAnimation}
      />
      <motion.h1
        dir="rtl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="font-bold text-5xl"
      >
        {name}
      </motion.h1>
      <motion.h1
        dir="rtl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2 }}
        className="font-medium text-5xl text-[#7ba7b3]"
      >
        {type === "1" && "חוגג בר מצווה"}
        {type === "2" && "חוגגת בת מצווה"}
        {type === "3" && "מתחתנים"}
        {type === "4" && "נולד לנו בן"}
      </motion.h1>
      <motion.div
        dir="rtl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 3 }}
      >
        {type !== "4" && (
          <h1 className="font-medium text-3xl mb-2 mt-2">
            שמחים להזמין אתכם להשתתף בשמחתינו
          </h1>
        )}
        {type == "4" && (
          <h1 className="font-medium text-3xl mb-2 mt-2">
            אנו שמחים ונרגשים להודיעכם על הולדת בננו ומצפים לראותכם
          </h1>
        )}
        <h1 className="font-mono text-5xl mb-3" dir="rtl">
          {date}
        </h1>
        <h1 className="font-medium text-2xl" dir="rtl">
          {location}
        </h1>
        {/* <h1 className="font-bold text-2xl pt-2" dir="rtl">
          {otherDetails}
        </h1> */}
        {seperateOtherDetails.map((item, index) => (
          <h1 className="font-bold text-2xl pt-2" key={index}>
            {item}
          </h1>
        ))}

        <h1 className="font-medium text-xl mt-3 mb-3" dir="rtl">
          נשמח לראותכם
        </h1>

        <h1 className="font-medium text-2xl mt-3 mb-3" dir="rtl">
          אנא אשרו הגעה
        </h1>
      </motion.div>
      <Lottie
        className="w-[60%] md:w-[30%] lg:w-[20%] mb-[20px]"
        animationData={decorations[decoIndex]}
      />
    </div>
  );
};

export default Main;
