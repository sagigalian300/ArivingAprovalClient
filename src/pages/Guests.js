import { useEffect, useState, useContext, useRef } from "react";
import ManageDatabaseRequests from "../db/actions";
import GuestCard from "../components/GuestCard.js";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Loader from "../components/Loader";
import { url } from "../db/urlConnector.js";
import Axios from "axios";
import { motion } from "framer-motion";

function startWithStr(string, substring) {
  if (substring.length > string.length) return false;

  for (let i = 0; i < substring.length; i++) {
    if (string[i].toLowerCase() != substring[i].toLowerCase()) return false;
  }
  return true;
}

const Guests = () => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const [guests, setGuests] = useState([]);
  const [numberOfGuests, setNumberOfGuests] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filteredGuests, setFilteredGuests] = useState([]);
  const searchRef = useRef();

  const deleteGuest = (guestId) => {
    setGuests((curr) => curr.filter((item) => item.guestId !== guestId));
    ManageDatabaseRequests.DeleteGuest(user.inviteId, guestId).then(
      (result) => {
        console.log(result);
      }
    );
  };

  const getNumberOfGuests = (guests) => {
    var count = 0;

    for (let i = 0; i < guests.length; i++) {
      count += Number(guests[i].guestCount);
    }
    setNumberOfGuests(count);
  };

  useEffect(() => {
    if (!user.logged) {
      navigate("/login");
    }
    setLoading(true);
    ManageDatabaseRequests.GetGuests(user._id)
      .then((result) => {
        setLoading(false);
        console.log(result.data);
        setGuests(result.data.guests);
        console.log(result.data.guests);
        getNumberOfGuests(result.data.guests);
      })
      .catch(() => {
        setLoading(false);
        alert("שגיאה, נא רענן את הדף");
      });
  }, []);

  useEffect(() => {
    setFilteredGuests((curr) => guests);
  }, [guests]);

  return (
    <div className="flex flex-col items-center min-h-[50vh] overflow-x-hidden">
      <div className="flex items-center justify-center">
        <button
          className="m-2"
          onClick={() => {
            navigate("/home");
          }}
        >
          חזור לעמוד הראשי
        </button>
        <div dir="rtl" className="flex flex-col">
          <h1 className="font-medium">מספר אישורים: {guests.length}</h1>
          <h1 className="font-medium">מספר אישורים כולל: {numberOfGuests}</h1>
        </div>
      </div>
      <input
        ref={searchRef}
        dir="rtl"
        className="p-1 outline-none border-[1px] bg-gray-300 rounded-full focus:border-gray-400 transition-all duration-300 focus:scale-x-110"
        placeholder="חפש אורח"
        onChange={(e) => {
          setFilteredGuests(
            guests.filter((i) => startWithStr(i.guestName, e.target.value))
          );
        }}
      />
      {guests.length > 0 && (
        <button
          onClick={() => {
            const confirmed = window.confirm(
              "האם ברצונך לשלוח תזכורות לכל האורחים? מומלץ לשלוח כשבוע לפני האירוע כדי לשמור על רלוונטיות ולהימנע מהצקה מיותרת."
            );

            if (confirmed) {
              Axios.post(url + "guests/sendRemindersToAllGuests", null, {
                params: {
                  userId: user._id,
                  inviteId: user.inviteId,
                },
              }).then((res) => {
                console.log(res);
              });
              console.log("תזכורות נשלחו לכל האורחים");
            } else {
              console.log("שליחת התזכורות בוטלה");
            }
          }}
          className="p-1 outline-none border-[1px] bg-gray-200 rounded-full pr-4 pl-4 mt-1"
        >
          שלח תזכורת
        </button>
      )}

      {filteredGuests.map((item, index) => (
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0, scale: 0.95 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
            damping: 15,
            delay: index * 0.15,
          }}
          className="w-full flex items-center justify-center"
        >
          <GuestCard
            key={item.guestId}
            name={item.guestName}
            email={item.guestEmail}
            count={item.guestCount}
            guestId={item.guestId}
            delMe={deleteGuest}
            date={item.approvalDate}
          />
        </motion.div>
      ))}
      {loading && <Loader />}
      {guests.length === 0 && (
        <h1 className="text-xl font-bold mt-5">אף אורח לא אישר הגעה עדיין</h1>
      )}
    </div>
  );
};

export default Guests;
