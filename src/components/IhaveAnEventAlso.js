import React from "react";

const IhaveAnEventAlso = () => {
  const subject = encodeURIComponent("יש לי אירוע");
  const body = encodeURIComponent("שלום, יש לי אירוע ואני רוצה לשמוע פרטים נוספים.");
  const email = "arivingapprovals@gmail.com";

  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className="relative max-w-lg mx-4 md:mx-auto mt-8 bg-gradient-to-r from-blue-100 via-sky-200 to-indigo-200 text-gray-800 rounded-2xl shadow-xl overflow-hidden border border-blue-200">
      {/* Content */}
      <div className="p-6 text-center">
        <h2 className="text-2xl font-extrabold text-blue-700 mb-2">
          גם לי יש אירוע! 🎉
        </h2>
        <p className="text-lg font-medium text-gray-700 mb-6">
          רוצים הזמנה דיגיטלית מיוחדת?  
          זה הזמן לעשות צעד ולפנות אלינו.
        </p>
        <a
          href={mailtoLink}
          className="inline-block px-8 py-3 bg-blue-600 text-white font-bold rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-transform"
        >
          יש לי אירוע, ספרו לי עוד
        </a>
      </div>

      {/* Decorative ribbon */}
      <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg shadow">
        פרסומת
      </div>
    </div>
  );
};

export default IhaveAnEventAlso;
