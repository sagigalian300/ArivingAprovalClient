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

const ChooseDecoration = ({setDecoIndexInFather, decoIndexInitial}) => {
  const [decoIndex, setDecoIndex] = useState(decoIndexInitial);

  useEffect(() => {
    setDecoIndexInFather(decoIndex);
  }, [decoIndex]);
  
  const switchDecoration = (num) => {
    // num is either 1 or -1
    console.log(num + decoIndex, "num");
    if (decoIndex + num < 0) {
      setDecoIndex(decorations.length - 1);
    } else if (decoIndex + num >= decorations.length) {
      setDecoIndex(0);
    } else {
      setDecoIndex((curr) => curr + num);
    }
  };
  return (
    <div className="flex flex-col w-full items-center justify-center ">
      <h1>בחר קישוט</h1>
      <div className="flex flex-row justify-center text-center">
        <button
          onClick={() => {
            switchDecoration(-1);
          }}
        >
          Left
        </button>
          <Lottie
            className="w-[60%] md:w-[30%] lg:w-[20%] mb-[20px] m-5"
            animationData={decorations[decoIndex]}
          />
        <button
          onClick={() => {
            switchDecoration(1);
          }}
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default ChooseDecoration;
