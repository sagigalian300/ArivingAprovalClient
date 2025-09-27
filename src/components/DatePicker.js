import React, { useEffect, useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { he } from "date-fns/locale"; // Hebrew locale
import "react-datepicker/dist/react-datepicker.css";

// Register Hebrew locale
registerLocale("he", he);

const FancyDatePicker = ({ setInviteInfo, initialDate }) => {
  const [selectedDate, setSelectedDate] = useState(initialDate);

  const handleChange = (date) => {
    setInviteInfo((curr) => ({ ...curr, date: date }));
    setSelectedDate(date);
  };

  return (
    <div className="p-4" dir="rtl">
      <label className="block mb-2 font-semibold text-gray-700">
        בחר תאריך:
      </label>
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        locale="he" // ✅ Hebrew
        dateFormat="dd/MM/yyyy"
        placeholderText="בחר תאריך"
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-400 focus:outline-none"
        popperClassName="shadow-lg rounded-lg"
      />

      {/* {selectedDate && (
        <p className="mt-3 text-green-600 font-medium">
          ✅ התאריך שנבחר: {selectedDate.toLocaleDateString("he-IL")}
        </p>
      )} */}
    </div>
  );
};

export default FancyDatePicker;
