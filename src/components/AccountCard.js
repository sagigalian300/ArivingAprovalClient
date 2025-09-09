import React from "react";

const AccountCard = (props) => {
  return (
    <div className="flex flex-row items-center">
      <h1 className="m-2 font-black">{props.name}</h1>
      <h1 className="m-2 font-black">{props.password}</h1>
      <button
        className="bg-[#f3603c] m-2 p-1 rounded-xl text-white text-xl lg:hover:shadow-lg lg:hover:shadow-[#c4acac] lg:hover:rotate-12 lg:hover:scale-110 transition-all"
        onClick={() => {
          const isConfirmed = window.confirm(
            "Are you sure you want to delete " +
              props.name +
              " from the database"
          );
          if (isConfirmed) {
            console.log("confirmed");
            props.delAccount(props._id);
          } else {
            console.log("Declined");
          }
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default AccountCard;
