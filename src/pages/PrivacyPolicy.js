import React from "react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-orange-50 flex items-start justify-center p-6" dir="rtl" lang="he">
      <main className="max-w-3xl w-full bg-white shadow-lg rounded-2xl p-8 text-black">
        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2 text-right">מדיניות פרטיות — ArrivingApprovals</h1>
          <p className="text-sm text-right opacity-80">עודכן בתאריך: 29/10/2025</p>
        </header>

        <section className="mb-6">
          <h2 className="text-xl font-semibold text-right inline-block border-b-4 border-orange-400 pb-1">מבוא</h2>
          <p className="mt-3 text-right leading-relaxed">
            ברוכים הבאים ל-ArrivingApprovals. מדיניות פרטיות זו מסבירה אילו נתונים אנו אוספים, כיצד אנו משתמשים בהם, עם מי אנו משתפים אותם, ומהן המחויבויות והזכויות שלכם. על ידי שימוש ב שירותינו אתם מסכימים לאיסוף ולעיבוד המידע כפי שמפורט להלן.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">הגדרות קצרות</h3>
          <ul className="list-disc list-inside mt-2 text-right">
            <li>"האתר"/"השירות" — ArrivingApprovals.</li>
            <li>"משתמש"/"לקוח" — כל מי שמשתמש בשירות ומעלה/מזמין אירוע.</li>
            <li>"אורח" — אדם המקבל הזמנה שנשלחה דרך השירות.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">אילו נתונים אנו אוספים ולמה</h3>
          <ul className="mt-2 text-right leading-relaxed">
            <li><strong>פרטי קשר:</strong> שם, כתובת דוא"ל, מספר טלפון — נדרשים לצורך שליחת הזמנות ותזכורות.</li>
            <li><strong>פרטי אירוע:</strong> כתובת/מיקום האירוע, תאריך, שעה — מיועדים להצגה לאורחים ולהפצת הנחיות הגעה (כגון קישורים לנווט).</li>
            <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, נתוני שימוש אנונימיים — משמשים לשיפור השירות ואבטחה.</li>
            <li><strong>תוכן שהמשתמש מספק:</strong> הערות לאורחים, תיאורי אירוע, קבצים מצורפים וכדומה — נשמרים ומוצגים בהתאם לאופן בו המשתמש בחר לשתף.</li>
          </ul>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">שימוש בנתונים</h3>
          <p className="mt-2 text-right leading-relaxed">
            אנו משתמשים בנתונים כדי להפעיל את השירות — לשלוח הזמנות, תזכורות, להציג מידע לאורחים, ולשפר את חוויית המשתמש. כמו כן, אנו עשויים להשתמש בנתונים לצרכי אבטחה וזיהוי בעיות טכניות.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">שיתוף עם צד ג' ושירותים חיצוניים</h3>
          <p className="mt-2 text-right leading-relaxed">
            השירות עשוי לקשר לשירותים חיצוניים (כגון שירותי ניווט — Waze, Google Maps; שירותי דוא"ל או SMS חיצוניים; ספקי אחסון ועוד). שימוש בשירותים אלה מפוקח על ידי מדיניות הפרטיות והתנאים של אותם ספקים. ArrivingApprovals אינה אחראית לתפקודם, לזמינותם, לאיכות ההוראות שהם מספקים, ואינה שולטת בתוכן או בהתנהלות שלהם.
          </p>
        </section>

        <section className="mb-6 bg-orange-50 p-4 rounded-lg border border-orange-100">
          <h3 className="text-lg font-semibold text-right">אחריות המשתמש (הצהרה מפורטת)</h3>
          <p className="mt-2 text-right leading-relaxed">
            על ידי שימוש בשירות אתם מאשרים ומסכימים למספר נקודות חשובות הבאות:
          </p>
          <ol className="list-decimal list-inside mt-3 text-right leading-relaxed">
            <li>
              <strong>דיוק המידע:</strong> המשתמש אחראי באופן מלא לדייק את כל המידע שהוא מזין בשירות — כולל כתובות, מיקומי אירוע, תאריכים, שעות ופרטי קשר של אורחים. ArrivingApprovals אינה בודקת, מאשרת או מתאמת כתובות ומיקומים; כל תקלה הנובעת מכתובת שגויה היא באחריות המשתמש.
            </li>
            <li>
              <strong>הנחיות ניווט:</strong> במידה והמשתמש בוחר לספק קישור ניווט (למשל Waze או Google Maps) או מוסיף כתובת - הוא מודע ומסכים שכל נזק, אובדן זמן, הגעה למיקום שגוי או כל נזק ישיר/עקיף אחר הנובע מהוראות הניווט או מיקום שגוי הוא באחריות המשתמש בלבד, ולא של ArrivingApprovals.
            </li>
            <li>
              <strong>שימוש בעדכונים ותזכורות:</strong> שליחת תזכורות, הודעות או קישורים לאורחים מתבצעת על פי הפרטים שסופקו. אם נשלחו הודעות לשגוי או לאדם שלא התכוון לקבל — האחריות להבטיח נכונות הפרטים מוטלת על המשתמש.
            </li>
            <li>
              <strong>התנהלות משפטית ותביעות:</strong> המשתמש מתחייב לשפות ולהגן על ArrivingApprovals מפני כל תביעה, טענה או הוצאה שנובעת מהפרת חובותיו לפי מדיניות זו או שימוש לא תקין בשירות (כולל תביעות של אורחים שנגרמו בעקבות מידע שגוי שנמסר על-ידי המשתמש).
            </li>
            <li>
              <strong>קישורים לאתרים חיצוניים:</strong> ArrivingApprovals אינה אחראית לתוכן, מדיניות הפרטיות או הדיוק של אתרים חיצוניים שאליהם מפנים קישורים שנוספו על-ידי המשתמש או שנוצרו על-ידי השירות.
            </li>
            <li>
              <strong>אבטחה בסיסית:</strong> המשתמש אחראי לשמור על סודיות סיסמאות ופרטי גישה. כל שימוש לא מורשה הנובע מהזנה לקויה של פרטי גישה על-ידי המשתמש הוא באחריות המשתמש.
            </li>
            <li>
              <strong>שימוש בתמונות ותכנים שהועלו:</strong> המשתמש מבטיח שיש לו זכויות לשתף תמונות, מסמכים ותכנים אחרים שהועלו לשירות, ומתקבל על עצמו כי ArrivingApprovals לא תישא באחריות לתביעות הנובעות מהפרת זכויות צד ג'.
            </li>
          </ol>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">הצהרת הימנעות מאחריות</h3>
          <p className="mt-2 text-right leading-relaxed">
            ArrivingApprovals מספקת את השירות "כפי שהוא" ו"כפי שיהיה זמין" ללא ערבויות מכל סוג שהוא, מפורשות או משתמעות. אנו אינם מתחייבים לדייק מוחלט, לזמינות רציפה, או לחסינות מפני שגיאות. בכל הרכב משפטי שניתן — ArrivingApprovals לא תהיה אחראית לנזקים עקיפים, מיוחדים, תוצאתיים או כל נזק אחר הנובע משימוש בשירות, משליחת הודעות או מהסתמכות על מידע שסופק על-ידי המשתמש.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">אבטחה ושמירת מידע</h3>
          <p className="mt-2 text-right leading-relaxed">
            אנו נוקטים באמצעי אבטחה סבירים להגנה על המידע, אך אין אנו יכולים להבטיח אבטחה מוחלטת. במקרה של דליפה בעקבות פריצה חיצונית, נעשה מאמץ להודיע לגורמים המושפעים ולפעול לתיקון, אך ArrivingApprovals לא תישא באחריות לנזקים אם לא ניתן למנועם בשיטות סבירות.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">שמירת נתונים והמחיקה שלהם</h3>
          <p className="mt-2 text-right leading-relaxed">
            אנו שומרים נתונים למשך הזמן הנדרש להפעלת השירות ולצורכי תמיכה, אבטחה, ועמידה בדרישות משפטיות. משתמשים יכולים לבקש מחיקה של חשבונם ו/או נתונים — בקשות ייבחנו ויטופלו בהתאם לחוק ולצרכים הטכניים.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">זכויות המשתמש</h3>
          <p className="mt-2 text-right leading-relaxed">
            בהתאם לחוק ולכל חקיקה רלוונטית, ייתכן שלמשתמשים יהיו זכויות גישה, תיקון, מחיקה והעברת נתונים. פניות בנושא יש לשלוח לכתובת המייל המפורטת מטה.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">ילדים</h3>
          <p className="mt-2 text-right leading-relaxed">
            השירות אינו מיועד לילדים מתחת לגיל 16. אנו לא מתכוונים לאסוף בכוונה מידע אישי של ילדים מתחת לגיל זה; במקרה ונחשף מידע כזה, יש לפנות אלינו להסרתו.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">שינויים במדיניות זו</h3>
          <p className="mt-2 text-right leading-relaxed">
            ArrivingApprovals רשאית לעדכן את מדיניות הפרטיות מעת לעת. שינוי מהותי יתפרסם בדף זה ובמקומות מרכזיים באתר, ויחול ממועד פרסומו.
          </p>
        </section>

        <section className="mb-6">
          <h3 className="text-lg font-semibold text-right">יצירת קשר</h3>
          <p className="mt-2 text-right leading-relaxed">
            אם יש לכם שאלות או בקשות לגבי מדיניות הפרטיות — שלחו דואר אלקטרוני ל: <strong>arivingapprovals@gmail.com</strong>
          </p>
        </section>

        <footer className="mt-6 text-right text-sm opacity-80">
          <p>
            שימו לב: אין במסמך זה תחליף לייעוץ משפטי. אם אתם רוצים ניסוח משפטי מחייב, מומלץ לפנות לעורך-דין המתמחה בפרטיות ומידע.
          </p>
        </footer>
      </main>
    </div>
  );
}
