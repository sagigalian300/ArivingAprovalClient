import React, { useRef, useEffect, useState, useContext } from "react";
import barmitvaImg from "../assets/image1.jpg";
import batmitvaImg from "../assets/image2.jpeg";
import wedding from "../assets/image3.jpeg";
import ManageDatabaseRequests from "../db/actions";
import { url } from "../components/ClientUrl";
import { UserContext } from "../App";
import { CgBoy, CgGirl } from "react-icons/cg";
import Loader from "./Loader";
import copy from "clipboard-copy";
import { motion } from "framer-motion";

const images = {
  1: barmitvaImg,
  2: batmitvaImg,
  3: wedding,
};

const options = [
  { icon: "boy", title: "בר מצווה" },
  { icon: "girl", title: "בת מצווה" },
  { icon: "marriage", title: "חתונה" },
];
const CreateInvitation = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [eventType, setEventType] = useState(1);
  const [inviteInfo, setInviteInfo] = useState({});
  const [copyAnimation, setCopyAnimation] = useState(false);

  useEffect(() => {
    setLoading(true);
    ManageDatabaseRequests.GetInviteInfo(user.inviteId).then((result) => {
      setInviteInfo(result.data);
      setLoading(false);
      setEventType(result.data.type);
    });
  }, []);

  return (
    // notice the width of this is 50% on large screens
    <div className="flex flex-col items-center justify-center">
      <div className="flex flex-col md:flex-row text-xl font-bold">
        {options.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setEventType((curr) => index + 1);
            }}
            className={
              "flex items-center text-center justify-center p-5 m-2 rounded-lg hover:cursor-pointer border-black transition-all duration-200 outline-none " +
              ` ${index + 1 == eventType && "lg:shadow-xl"} ${
                index + 1 == eventType && "text-[#f3603c]"
              }`
            }
          >
            {item.icon == "boy" && <CgBoy size={22} />}
            {item.icon == "girl" && <CgGirl size={22} />}
            {item.icon == "marriage" && <CgBoy size={22} />}

            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      {/* <img src={images[eventType]} className="w-[50%]" /> */}
      {!loading ? (
        <div className="flex flex-col justify-center items-center w-[50%]">
          <input
            // ref={nameRef}
            value={inviteInfo.name}
            onChange={(e) => {
              setInviteInfo({ ...inviteInfo, name: e.target.value });
            }}
            placeholder={
              eventType == 1
                ? "שם של החוגג"
                : eventType == 2
                ? "שם החוגגת"
                : eventType == 3
                ? " (אבי והילה) שם החוגגים"
                : "לא נבחר סוג אירוע"
            }
            className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
            dir="rtl"
          />
          <input
            // ref={dateRef}
            value={inviteInfo.date}
            onChange={(e) => {
              setInviteInfo({ ...inviteInfo, date: e.target.value });
            }}
            placeholder="תאריך אירוע"
            className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
            dir="rtl"
          />
          <input
            // ref={locationRef}
            value={inviteInfo.location}
            onChange={(e) => {
              setInviteInfo({ ...inviteInfo, location: e.target.value });
            }}
            placeholder="מיקום האירוע"
            className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
            dir="rtl"
          />
          <input
            type="number"
            value={inviteInfo.latitude}
            placeholder="מיקום (קו רוחב)"
            className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
            onChange={(e) => {
              setInviteInfo({ ...inviteInfo, latitude: e.target.value });
            }}
            dir="rtl"
          />
          <input
            type="number"
            value={inviteInfo.longitude}
            placeholder="מיקום (קו אורך)"
            className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
            onChange={(e) => {
              setInviteInfo({ ...inviteInfo, longitude: e.target.value });
            }}
            dir="rtl"
          />
          <textarea
            id="textarea"
            // ref={otherDetailsRef}
            onChange={(e) => {
              setInviteInfo({ ...inviteInfo, otherDetails: e.target.value });
            }}
            dir="rtl"
            value={inviteInfo.otherDetails}
            placeholder="פרטים נוספים"
            className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2 resize-none"
          />
          <button
            className="bg-[#f3603c] w-[60%] p-2 rounded-full text-white text-xl lg:hover:shadow-lg lg:hover:shadow-[#c4acac] lg:hover:scale-105 transition-all"
            onClick={() => {
              ManageDatabaseRequests.CreateInvitation(
                inviteInfo.name,
                inviteInfo.date,
                inviteInfo.location,
                inviteInfo.otherDetails,
                eventType,
                user._id,
                inviteInfo.latitude,
                inviteInfo.longitude
              )
                .then((result) => {
                  console.log(result);
                  alert("פרטי ההזמנה עודכנו, תודה");
                })
                .catch(() => {
                  throw Error;
                });
            }}
          >
            צור
          </button>
          <div className=" whitespace-nowrap mt-5 flex flex-col justify-center items-center">
            <a
              className="font-medium text-lg text-blue-600"
              href={`${url}invitation/${user.inviteId}`}
              target="_blank"
            >
              לחץ כאן כדי לראות את ההזמנה
            </a>
            <div className="flex flex-col justify-center items-center m-2">
              {/* <h1 className="text-blue-600">{`${url}invitation/${user.inviteId}`}</h1> */}
              <button
                className="ml-2"
                onClick={() => {
                  setCopyAnimation(true);
                  const toCopy = `${url}invitation/${user.inviteId}`;
                  copy(toCopy);
                  setTimeout(() => {
                    setCopyAnimation(false);
                  }, 3000);
                }}
              >
                העתק קישור
              </button>
              {copyAnimation && (
                <div className="w-screen flex justify-center items-center">
                  <motion.h1
                    className="text-black text-2xl font-black font-mono"
                    initial={{ opacity: 0, x: "100%" }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 3, bounce: 0.5, type: 'spring' }}
                  >
                    קישור הועתק
                  </motion.h1>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default CreateInvitation;
