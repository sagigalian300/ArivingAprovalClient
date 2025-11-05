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

const ChooseDecoration = ({ setDecoIndexInFather, decoIndexInitial }) => {
  const [decoIndex, setDecoIndex] = useState(decoIndexInitial || 0);

  useEffect(() => {
    setDecoIndexInFather?.(decoIndex);
  }, [decoIndex, setDecoIndexInFather]);

  const switchDecoration = (num) => {
   
    setDecoIndex((prev) => {
      const next = parseInt(prev) + parseInt(num);
      if (next < 0) return decorations.length - 1;
      if (next >= decorations.length) return 0;

      console.log(next);
      return next;
    });
  };

  return (
    <div id="deco" className="flex flex-col w-full items-center justify-center">
      <h1 className="mb-3 text-xl font-bold">בחר קישוט</h1>

      <div className="flex flex-col items-center justify-center gap-4">
        {/* 🔥 Instant render, no animation wrapper */}
        <div className="w-[60%] md:w-[30%] lg:w-[20%] mb-5 flex justify-center items-center">
          <Lottie
            className="w-[90%] md:w-[30%] lg:w-[20%]"
            animationData={decorations[decoIndex]}
            loop
          />
        </div>

        <div className="flex flex-row w-full pr-4 pl-4">
          <button
            className="m-1 p-2 flex-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            onClick={() => switchDecoration(-1)}
          >
            שמאל
          </button>
          <button
            className="m-1 p-2 flex-1 bg-gray-200 rounded-lg hover:bg-gray-300 transition-colors"
            onClick={() => switchDecoration(1)}
          >
            ימין
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseDecoration;
