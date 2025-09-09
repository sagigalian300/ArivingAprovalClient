import { useState } from "react";
import Joyride, { STATUS } from "react-joyride";
import ManageDatabaseRequests from "../db/actions";

const EditInvitationTour = ({ run, setRun, userId }) => {
  const steps = [
    {
      target: "#type", // CSS selector of the element to highlight
      content: "כאן בחר את סוג האירוע",
      placement: "right",
    },
    {
      target: "#name", // CSS selector of the element to highlight
      content: "מלא כאן את שם החוגג",
      placement: "right",
    },
    {
      target: "#date", // CSS selector of the element to highlight
      content: "מלא כאן את תאריך האירוע",
      placement: "right",
    },
    {
      target: "#location", // CSS selector of the element to highlight
      content: "כתוב כאן את מיקום האירוע, מיקום זה יופיע בהזמנה שתשלח לאורחים",
      placement: "right",
    },
    {
      target: "#textarea", // CSS selector of the element to highlight
      content:
        "הוסף בתיבה זו פרטים נוספים שתרצה להוסיף, כל פעם שתכתוב * הטקסט בהזמנה ירד שורה",
      placement: "right",
    },
    {
      target: "#waze-mode", // CSS selector of the element to highlight
      content:
        "הפעל אם אתה רוצה לאפשר ניווט למיקום האירוע, לא חובה אבל מומלץ, במידה ותפעיל, תוכל לבחור את המיקום המדוייק",
      placement: "right",
    },
    {
      target: "#deco", // CSS selector of the element to highlight
      content:
        "בחר את הקישוט שהכי מוצא חן בעינך, קישוט זה יופיע בהזמנה שתשלח לאורחים",
      placement: "right",
    },
    {
      target: "#create-btn", // CSS selector of the element to highlight
      content:
        "לחץ על כפתור זה כדי לשמור את השינויים שבצעת, ללא לחיצה עליו השינויים לא ישמרו!",
      placement: "right",
    },
  ];

  const handleJoyrideCallback = (data) => {
    const { status, lifecycle } = data;
    const finishedStatuses = [STATUS.FINISHED, STATUS.SKIPPED];

    // only act when the tour is completely finished, not on step events
    if (finishedStatuses.includes(status) && lifecycle === "complete") {
      console.log("Tour finished!");
      setRun(false);

      ManageDatabaseRequests.updateFirstLoginToFalse(userId)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  return (
    <Joyride
      steps={steps}
      run={run}
      continuous={true} // automatically go to next step
      showSkipButton={true}
      showProgress={true}
      callback={handleJoyrideCallback}
      styles={{
        options: {
          zIndex: 10000,
        },
      }}
      locale={{
        back: "חזור",
        close: "סגור",
        last: "סיום",
        next: "הבא",
        skip: "דלג",
      }}
    />
  );
};

export default EditInvitationTour;
