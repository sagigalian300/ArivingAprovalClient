import React from "react";

const AddToCalendarButton = ({ name, date, location }) => {
  const formatDate = (d) => {
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}${month}${day}`;
  };

  const parseFlexibleDate = (dateString) => {
    if (!dateString) return null;
    const normalized = dateString.trim().replace(/[-/]/g, ".");
    const parts = normalized.split(".");

    let day, month, year;
    if (parts.length !== 3) return null;

    if (parts[0].length === 4) {
      [year, month, day] = parts; // YYYY.MM.DD
    } else {
      [day, month, year] = parts; // DD.MM.YYYY
    }

    if (year.length === 2) year = "20" + year;

    const d = new Date(Number(year), Number(month) - 1, Number(day));

    if (
      d.getFullYear() !== Number(year) ||
      d.getMonth() + 1 !== Number(month) ||
      d.getDate() !== Number(day)
    ) {
      return null;
    }
    return d;
  };

  const createICS = (title, description, location, start, end) => {
    const startDate = formatDate(start);
    const endDate = formatDate(end);

    return `
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
DTSTART;VALUE=DATE:${startDate}
DTEND;VALUE=DATE:${endDate}
END:VEVENT
END:VCALENDAR
`;
  };

  const handleAddToCalendar = () => {
    const title = "אירוע של " + name;
    const description = "אירוע של " + name;

    const start = parseFlexibleDate(date);
    if (!start) {
      alert("תאריך לא תקין: " + date);
      return;
    }

    const end = new Date(start);
    end.setDate(start.getDate() + 1);

    const startDate = formatDate(start);
    const endDate = formatDate(end);

    // Detect platform
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    const isAndroid = /android/i.test(ua);

    if (isAndroid) {
      // 📆 Open Google Calendar
      const gcalUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        title
      )}&details=${encodeURIComponent(
        description
      )}&location=${encodeURIComponent(
        location
      )}&dates=${startDate}/${endDate}`;
      window.open(gcalUrl, "_blank");
    } else {
      // 📅 Fallback to ICS (iOS + Desktop)
      const icsContent = createICS(title, description, location, start, end);
      const blob = new Blob([icsContent], {
        type: "text/calendar;charset=utf-8",
      });
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "event.ics";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <button
        onClick={handleAddToCalendar}
        className="px-5 py-2 bg-cyan-600 text-white rounded-lg shadow mb-2"
      >
        📅 הוסף ליומן
      </button>
    </div>
  );
};

export default AddToCalendarButton;
