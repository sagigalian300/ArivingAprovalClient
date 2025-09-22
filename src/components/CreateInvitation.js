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
import ChooseDecoration from "./ChooseDecoration";
import LocationAutocomplete from "./LocationAutocomplete";
import EditInvitationTour from "./EditInvitationTour";

const images = {
  1: barmitvaImg,
  2: batmitvaImg,
  3: wedding,
};

const btnTextForWaze = ["עדכן", "כבה"];

const options = [
  { icon: "boy", title: "בר מצווה" },
  { icon: "girl", title: "בת מצווה" },
  { icon: "marriage", title: "חתונה" },
  { icon: "brit", title: "ברית" },
];
const CreateInvitation = () => {
  const user = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const [eventType, setEventType] = useState(1);
  const [inviteInfo, setInviteInfo] = useState({});
  const [copyAnimation, setCopyAnimation] = useState(false);
  const [decoIndex, setDecoIndex] = useState(0);
  const [usingWaze, setUsingWaze] = useState(false);
  const [tourme, setTourme] = useState(false);

  const handleShare = async () => {
    const invitationLink = `${url}invitation/${user.inviteId}`;
    const message = `\u202B🎉 יש לנו אירוע 🎉

📅 תאריך: ${inviteInfo.date}
📍 מיקום: ${inviteInfo.location}

להלן הקישור:
🔗 https://eventapprovals.firebaseapp.com/invitation/${user.inviteId}

\nנשמח שתאשר/י הגעה💙\u202C`;
    console.log(message);
    if (navigator.share) {
      try {
        await navigator.share({
          text: message,
        });
        console.log("Invitation shared successfully!");
      } catch (err) {
        console.error("Sharing failed:", err);
      }
    } else {
      // fallback for desktop (copy to clipboard or alert)
      navigator.clipboard.writeText(message);
      alert("הקישור הועתק, ניתן לשתף ידנית.");
    }
  };

  useEffect(() => {
    setLoading(true);
    ManageDatabaseRequests.GetInviteInfo(user.inviteId).then((result) => {
      setInviteInfo(result.data);
      setLoading(false);
      setEventType(result.data.type);
      setDecoIndex(result.data.decoIndex);

      if (result.data.latitude != null && result.data.longitude != null) {
        setUsingWaze(true);
      }
    });
  }, []);

  useEffect(() => {
    if (user.firstLogin === true) {
      setTourme(true);
    }
  }, [user]);

  return (
    // notice the width of this is 50% on large screens
    <div className="flex flex-col items-center justify-center">
      <button
        className="text-2xl font-medium"
        onClick={() => {
          setTourme(true);
        }}
      >
        עשה לי סיור
      </button>
      {(user.firstLogin || tourme) && (
        <EditInvitationTour userId={user._id} run={tourme} setRun={setTourme} />
      )}
      <div id="type" className="flex flex-col md:flex-row text-xl font-bold">
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
            {item.icon == "brit" && <CgBoy size={22} />}

            <h1>{item.title}</h1>
          </div>
        ))}
      </div>
      {/* <img src={images[eventType]} className="w-[50%]" /> */}
      {!loading ? (
        <div className="flex flex-col justify-center items-center w-[50%]">
          {eventType != 4 && (
            <input
              id="name"
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
          )}
          <input
            id="date"
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
            id="location"
            // ref={locationRef}
            value={inviteInfo.location}
            onChange={(e) => {
              setInviteInfo({ ...inviteInfo, location: e.target.value });
            }}
            placeholder="מיקום האירוע"
            className="text-center p-2 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all m-2"
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
          <div className="flex items-center gap-3">
            <h1 className="text-xl font-medium mb-2 mt-2">WAZEמיקום ל</h1>
            <button
              id="waze-mode"
              onClick={() => {
                if (usingWaze) {
                  if (
                    window.confirm(
                      "אתה בטוח שתרצה לכבות את הקישוריות לוויז? תוכל לעדכן מחדש את המיקום לאחר ההסרה."
                    )
                  ) {
                    setInviteInfo({
                      ...inviteInfo,
                      latitude: null,
                      longitude: null,
                    });
                    setUsingWaze(false);
                  }
                } else {
                  setUsingWaze(true);
                }
              }}
              className="text-xl font-medium text-blue-500"
            >
              {usingWaze ? btnTextForWaze[1] : btnTextForWaze[0]}
            </button>
          </div>

          {usingWaze && (
            <LocationAutocomplete
              onSelect={(place) => {
                const lat = place.geometry.location.lat();
                const lng = place.geometry.location.lng();

                setInviteInfo({ ...inviteInfo, latitude: lat, longitude: lng });
              }}
            />
          )}

          <ChooseDecoration
            setDecoIndexInFather={setDecoIndex}
            decoIndexInitial={decoIndex}
          />

          <button
            id="create-btn"
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
                inviteInfo.longitude,
                decoIndex
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
              href={`invitation/${user.inviteId}`}
              target="_blank"
            >
              לחץ כאן כדי לראות את ההזמנה
            </a>
            <div className="flex flex-col justify-center items-center m-2">
              {/* <h1 className="text-blue-600">{`${url}invitation/${user.inviteId}`}</h1> */}
              <button onClick={handleShare} className="ml-2">
                שלח הזמנה מובנית
              </button>
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
                    transition={{ duration: 3, bounce: 0.5, type: "spring" }}
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
