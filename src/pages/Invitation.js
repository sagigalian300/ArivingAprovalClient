import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react"; // search http://localhost:3000/invitation/43243242 in the url of google
import ManageDatabaseRequests from "../db/actions";
import Top from "../components/Top";
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

  // commented just to work on the design
  useEffect(() => {
    ManageDatabaseRequests.GetInviteInfo(key).then((result) => {
      console.log(result.data);
      setInviteId(result.data.inviteId);
      setName(result.data.name);
      setDate(result.data.date);
      setLocation(result.data.location);
      setOtherDetails(result.data.otherDetails);
      setType(result.data.type);
      setLatitude(result.data.latitude);
      setLongitude(result.data.longitude);
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
      />
      <Register inviteId={inviteId} />
      {/* {latitude != '0' && longitude != '0' && <Waze lat={latitude} lon={longitude} />} */}
    </div>
  );
};

export default Invitation;
