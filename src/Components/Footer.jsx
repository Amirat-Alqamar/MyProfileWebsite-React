import React from "react";
import messageIcon from "../assets/images/message-svgrepo-com.svg";
import locationIcon from "../assets/images/location-pin-alt-1-svgrepo-com.svg";
import LinkeinIcon from "../assets/images/linkedin-linked-in-svgrepo-com.svg";
import CV from "../assets/CV-File/Amirat-alqamar-hemami.pdf";

function Footer(props) {
  return (
    <footer className="pt-12 pb-8 border-t bg-slate-900 text-slate-300 border-slate-800">
      <div className="w-full max-w-screen-xl px-4 mx-auto">
        
        {/* المحتوى الرئيسي للـ Footer */}
        <div className="grid grid-cols-1 gap-8 mb-10 text-center md:grid-cols-3 md:text-left">
          
          {/* العمود الأول: حالة التوفر والموقع */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Available for Remote Work
            </div>

            <div className="flex items-center justify-center gap-2 text-sm md:justify-start text-slate-400">
              <img className="w-4 h-4 opacity-75 invert" src={locationIcon} alt="Location" />
              <span>Location: <strong className="font-medium text-slate-200">Aleppo, Syria</strong></span>
            </div>
          </div>

          {/* العمود الثاني: روابط التنقل السريع */}
          <div className="flex flex-col items-center justify-center gap-2">
            <ul className="flex flex-wrap justify-center gap-4 text-sm font-medium">
              <li>
                <a href="#home" className="transition-colors hover:text-cyan-400">Home</a>
              </li>
              <li>
                <a href="#about" className="transition-colors hover:text-cyan-400">About Me</a>
              </li>
              <li>
                <a href="#goals" className="transition-colors hover:text-cyan-400">Current Goals</a>
              </li>
              <li>
                <a href="#projects" className="transition-colors hover:text-cyan-400">Projects</a>
              </li>
              <li>
                <a href="#contact" className="transition-colors hover:text-cyan-400">Contact</a>
              </li>
            </ul>
          </div>

          {/* العمود الثالث: التواصل الاجتماعي وتنزيل الـ CV */}
          <div className="flex flex-col items-center justify-between gap-4 md:items-end">
            <div className="flex items-center gap-3">
              {/* GitHub */}
              <a
                href="https://github.com/Amirat-Alqamar"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors border border-slate-700"
              >
                GitHub
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amirat-alqamar-hemami-1ab0a4318"
                target="_blank"
                rel="noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs text-slate-200 transition-colors border border-slate-700"
              >
                LinkedIn
              </a>

             
            </div>

            {/* زر تحميل السيرة الذاتية - Download CV */}
            <a
              href={CV} 
              download="Amirat-alqamar-hemami.pdf"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white text-xs font-semibold shadow-md shadow-cyan-500/10 transition-all transform hover:-translate-y-0.5"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              Download CV
            </a>
          </div>

        </div>

        <hr className="my-6 border-slate-800" />

        {/* الحقوق والملكية */}
        <p className="text-xs text-center text-slate-500">
          © {new Date().getFullYear()} All rights reserved. Designed & Developed with passion.
        </p>

      </div>
    </footer>
  );
}

export default Footer;