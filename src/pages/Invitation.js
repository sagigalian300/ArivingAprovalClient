import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; // search http://localhost:3000/invitation/43243242 in the url of google
import ManageDatabaseRequests from "../db/actions";
import Main from "../components/Main";
import Register from "../components/Register";
import Waze from "../components/Waze";

const Invitation = () => {
  const { key } = useParams();
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [otherDetails, setOtherDetails] = useState("");
  const [type, setType] = useState("");
  const [inviteId, setInviteId] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [decoIndex, setDecoIndex] = useState("");

  useEffect(() => {
    ManageDatabaseRequests.GetInviteInfo(key).then((result) => {
      console.log(result.data);
      setInviteId(result.data.inviteId);
      setName(result.data.name);
      const dateOBJ = new Date(result.data.date);
      const tempDate = result.data.date
        ? dateOBJ.getDate() +
          "." +
          (dateOBJ.getMonth() + 1) +
          "." +
          dateOBJ.getFullYear()
        : "לא נבחר תאריך לאירוע עדיין";
      setDate(tempDate);
      setLocation(result.data.location);
      setOtherDetails(result.data.otherDetails);
      setType(result.data.type);
      setLatitude(result.data.latitude);
      setLongitude(result.data.longitude);
      setDecoIndex(result.data.decoIndex);
    });
  }, [key]);

  return (
    <div>
      <div id="inviteimg"></div>
      {/* <Top type={type} /> */}
      <Main
        name={name}
        date={date}
        location={location}
        otherDetails={otherDetails}
        type={type}
        decoIndex={decoIndex}
      />
      {latitude != null && longitude != null && (
        <Waze lat={latitude} lon={longitude} />
      )}
      <Register
        name={name}
        date={date}
        location={location}
        inviteId={inviteId}
      />
    </div>
  );
};

export default Invitation;
