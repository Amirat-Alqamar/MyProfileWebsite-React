import React, { useEffect, useState } from "react";
import laptopIcon from "../assets/images/laptop-computer.svg";
import codeProgramingIcon from "../assets/images/code-programing-symbol-svgrepo-com.svg";
import girlIcon from "../assets/images/girl-studying-on-a-laptop-svgrepo-com.svg";
import codeIcon from "../assets/images/code.svg";

/**
 * Loader component
 * props:
 *   onFinish: function()  -> يُستدعى عندما ينتهي التحميل ويجب إخفاء الـ Loader
 * يمكن تعديل أزمنة التأخير داخل useEffect بسهولة.
 */
export default function Loader({ onFinish }) {
  const [phase, setPhase] = useState(0); // 0 = initial, 1 = show text, 2 = show icons, 3 = hide
  const [visibleIcons, setVisibleIcons] = useState([false, false, false]);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const timers = [];

    // المرحلة 0 -> بعد 100ms ننتقل إلى إظهار النص (phase 1) أو نبقي أيقونة رئيسية ظاهرة فوراً
    timers.push(setTimeout(() => setPhase(1), 200));   // show text soon

    // المرحلة 1 -> بعد 700ms نبدأ إظهار الأيقونات الثلاثة (phase 2)
    timers.push(setTimeout(() => {
      setPhase(2);
      // إظهار الأيقونات واحدة تلو الأخرى
      timers.push(setTimeout(() => setVisibleIcons([true, false, false]), 0));
      timers.push(setTimeout(() => setVisibleIcons([true, true, false]), 200));
      timers.push(setTimeout(() => setVisibleIcons([true, true, true]), 400));
    }, 900));

    // بعد انتهاء السلسلة (مثلاً 700 + 600) نبدأ إخفاء الـ Loader
    timers.push(setTimeout(() => {
      setIsHidden(true); // يعطي مظهر fade-out
      // بعد انتهاء الـ fade-out نخبر الأب أن ينهي الـ Loader
      timers.push(setTimeout(() => {
        onFinish && onFinish();
      }, 900)); // زمن الفيد أوت
    }, 700 + 600 + 400 + 300)); // يمكن ضبط هذه القيم حسب رغبتك

    // تنظيف عند unmount أو إعادة render
    return () => timers.forEach(t => clearTimeout(t));
  }, [onFinish]);

  return (
    // الغلاف: ثابت يغطي الشاشة
    <div
      aria-hidden={isHidden}
      className={
        "fixed inset-0 z-50 flex items-center justify-center bg-white transition-opacity duration-500 " +
        (isHidden ? "opacity-0 pointer-events-none" : "opacity-100")
      }
    >
      {/* المحتوى المركزي */}
      <div className="flex flex-col items-center gap-4">
        {/* أيقونة رئيسية كبيرة */}
        <div
          className={
            "text-6xl md:text-7xl transition-transform duration-500 " +
            (phase >= 0 ? "scale-100 opacity-100" : "scale-90 opacity-0")
          }
          aria-hidden="true"
        >
          {/* يمكنك استبدال هذه الأيموجي بـ SVG لشعارك */}
          <span role="img" aria-label="logo"><img className="w-20" src={laptopIcon} alt="laptop-computer.svg" /></span>
        </div>

        {/* الجملة تحت الأيقونة */}
        <div
          className={
            "text-lg md:text-xl font-medium text-gray-700 transition-opacity duration-500 " +
            (phase >= 1 ? "opacity-100" : "opacity-0")
          }
        >
          Loading my portfolio...
        </div>

        {/* صف أيقونات ثلاثية تظهر بتتابع */}
        <div className="flex items-center gap-6 mt-2">
          {/** أيقونة 1 */}
          <div className={
            "text-2xl transition-opacity duration-300 " +
            (visibleIcons[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
          }>
            <span role="img" aria-label="html"><img className="w-5" src={codeIcon} alt="codeIcon" /></span>
          </div>

          {/** أيقونة 2 */}
          <div className={
            "text-2xl transition-opacity duration-300 " +
            (visibleIcons[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
          }>
            <span role="img" aria-label="react"><img className="w-5" src={girlIcon} alt="girlIcon" /></span>
          </div>

          {/** أيقونة 3 */}
          <div className={
            "text-2xl transition-opacity duration-300 " +
            (visibleIcons[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")
          }>
            <span role="img" aria-label="css"><img className="w-5" src={codeProgramingIcon} alt="codeProgramingIcon" /></span>
          </div>
        </div>
      </div>
    </div>
  );
}
