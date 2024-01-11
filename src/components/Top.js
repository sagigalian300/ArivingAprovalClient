import React from "react";
import barmitvaImg from "../assets/image1.jpg";
import batmitvaImg from "../assets/image2.jpeg";
import cheers from "../assets/cheers.jpg";
const images = {
  1: barmitvaImg,
  2: batmitvaImg,
  3: cheers,
};
const Top = ({type}) => {
  return <img className="w-full lg:w-0 bg-cover bg-center" src={images[type]} />;
};

export default Top;
