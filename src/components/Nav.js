import React, { useEffect, useState } from "react";
import { UserContext } from "../App";
import { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { RiMenuLine } from "react-icons/ri";
import { IoClose } from "react-icons/io5";
import Lottie from "lottie-react";
import animationData from "../assets/createAccount.json";

const links = ["התנתק", "צור חשבון", "צור קשר", "מדיניות"];

const Nav = (props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const user = useContext(UserContext);

  // useEffect(() => {
  //   console.log(location.pathname)
  // }, [location])
  return (
    <div>
      {!location.pathname.includes("invitation") && (
        <div className="flex justify-between items-center p-[40px] font-sans">
          <h1 className="flex flex-1 text-3xl font-black">
            <img width={70} src="/logo512.png" alt="LOGO" />
          </h1>
          {/* <h1 className="text-2xl font-bold">LOGO</h1> */}
          

          <div className="hidden md:flex">
            {links.map((link, index) => (
              <div
                className="p-2 text-xl hover:cursor-pointer"
                key={index}
                onClick={() => {
                  if (index + 1 === 1) {
                    navigate("/login");
                    props.setUserOnLogout();
                  } else if (index + 1 === 2) {
                    navigate("/createAccount");
                    props.setUserOnLogout();
                  } else if (index + 1 === 3) {
                    navigate("/contact");
                  } else if (index + 1 === 4) {
                    navigate("/privacypolicy");
                    // window.location.replace(
                    //   "https://informationaprovals.netlify.app/"
                    // ); היה העמוד של המידע
                  }
                }}
              >
                {link == "התנתק" ? (user.logged ? "התנתק" : "התחבר") : link}
              </div>
            ))}
          </div>
          <div
            className="flex justify-center items-center flex-1 md:hidden hover:cursor-pointer"
            onClick={() => {
              setIsNavOpen((curr) => !curr);
            }}
          >
            <RiMenuLine size={32} />
          </div>
          {!user.logged ? (
            <div className="flex-1 flex justify-end">
              <button
                className="bg-[#f3603c] p-2 rounded-xl text-white text-xl lg:hover:shadow-lg lg:hover:shadow-[#c4acac] lg:hover:rotate-12 lg:hover:scale-110 transition-all"
                onClick={() => {
                  if (user.logged) {
                    props.setUserOnLogout();
                    navigate("/login");
                  } else {
                    alert("התחלנו");
                  }
                }}
              >
                בואו נתחיל
              </button>
            </div>
          ) : (
            <div className="flex-1 flex justify-end text-end">
              <h1 className="flex text-3xl font-bold text-[#f3603c]">
                {user.name} שלום
              </h1>
            </div>
          )}

          <motion.div
            initial={{ y: "-100%" }}
            animate={{ y: isNavOpen ? 0 : "-100%", opacity: isNavOpen ? 1 : 0 }}
            transition={{ bounce: 0 }}
            className="absolute left-0 top-0 w-full flex flex-col items-center justify-center bg-slate-500 lg:hidden z-40"
          >
            {links.map((link, index) => (
              <div
                className="flex flex-col items-center justify-center pb-5 pt-5 pl-2 pr-2 text-xl w-full text-center hover:cursor-pointer hover:bg-slate-200 transition-all duration-150"
                key={index}
                onClick={() => {
                  if (index + 1 === 1) {
                    setIsNavOpen(false);
                    navigate("/login");
                    props.setUserOnLogout();
                  } else if (index + 1 === 2) {
                    setIsNavOpen(false);
                    navigate("/createAccount");
                    props.setUserOnLogout();
                  } else if (index + 1 === 3) {
                    setIsNavOpen(false);
                    navigate("/contact");
                  } else if (index + 1 === 4) {
                    navigate("/privacypolicy");
                    // window.location.replace(
                    //   "https://informationaprovals.netlify.app/"
                    // ); היה העמוד של המידע
                  }
                }}
              >
                {link == "התנתק" ? (user.logged ? "התנתק" : "התחבר") : link}
              </div>
            ))}
            <div
              onClick={() => {
                setIsNavOpen(false);
              }}
              className="hover:cursor-pointer p-2"
            >
              <IoClose size={42} />
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Nav;
