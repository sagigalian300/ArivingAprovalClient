import React from "react";

const AddToCalendarButton = () => {
  const handleAddToCalendar = () => {
    // Example event data
    const title = "Meeting with Client";
    const description = "Discuss project details and milestones.";
    const location = "123 Main St, Tel Aviv";
    const startDate = "20250920T100000"; // format: YYYYMMDDTHHMMSS (UTC or local)
    const endDate = "20250920T110000";

    // iCalendar content
    const icsContent = `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART:${startDate}
DTEND:${endDate}
END:VEVENT
END:VCALENDAR
`;

    // Create a Blob from the string
    const blob = new Blob([icsContent], {
      type: "text/calendar;charset=utf-8",
    });

    // Create a link and trigger download
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "event.ics"; // file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full flex justify-center ">
      <button
        onClick={handleAddToCalendar}
        className="px-5 py-2 bg-cyan-600 text-white rounded-lg shadow mb-2"
      >
        הוסף ליומן
      </button>
    </div>
  );
};

export default AddToCalendarButton;
