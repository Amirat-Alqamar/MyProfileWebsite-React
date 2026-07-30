import React from 'react';
import profile from "../assets/images/undraw_programmer_raqr.svg";
import githubIcon from "../assets/images/github-svgrepo-com.svg";
import instagramIcon from "../assets/images/instagram-svgrepo-com.svg";
import LinkeinIcon from "../assets/images/linkedin-linked-in-svgrepo-com.svg";
import whatsappIcon from "../assets/images/whatsapp-svgrepo-com.svg";
import locationIcon from "../assets/images/location-pin-alt-1-svgrepo-com.svg";
import bagIcon from "../assets/images/bag-svgrepo-com.svg";
import downloadIcon from "../assets/images/download-svgrepo-com (1).svg";
import CV from "../assets/CV-File/Amirat-alqamar-hemami.pdf";

function Home() {
  return (
    <div className="container px-4 mx-auto">
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between min-h-[85vh] gap-10 py-12" id="home">
        
        {/* Texts & Main Info */}
        <div className="w-full md:w-[55%] flex flex-col justify-center">
          
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl text-slate-800">
            Hi, I'm <span className="text-cyan-500">Amira</span>
          </h1>

          <h2 className="mt-2 text-2xl font-bold md:text-3xl text-slate-900">
            Full Stack Developer
          </h2>

          <p className="mt-1 text-sm font-semibold tracking-wide md:text-base text-cyan-600">
            React.js • Laravel • Next.js • TypeScript
          </p>

          <p className="max-w-xl mt-4 text-base leading-relaxed text-gray-600">
            I build fast, scalable, and user-friendly web applications using modern frontend and backend technologies. I enjoy turning ideas into real products with clean code, responsive design, and a strong focus on user experience.
          </p>

          {/* Location & Availability Status */}
          <div className="flex flex-wrap items-center gap-6 my-5">
            <div className="flex items-center gap-2">
              <img className="w-5 h-5 opacity-70" src={locationIcon} alt="Location" />
              <span className="text-sm font-medium text-slate-600">Aleppo, Syria</span>
            </div>

            <div className="flex items-center gap-2">
              <img className="w-5 h-5 opacity-70" src={bagIcon} alt="Availability" />
              <span className="text-sm font-medium text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Available for Opportunities
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 my-2">
            <a 
              href="#projects" 
              className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-medium text-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              View My Projects
            </a>

            <a 
              href={CV} 
              download="Amirat-alqamar-hemami.pdf" 
              className="flex items-center gap-2 px-5 py-2.5 border border-slate-300 hover:border-cyan-500 text-slate-700 hover:text-cyan-600 font-medium text-sm rounded-lg transition-all duration-300 hover:-translate-y-0.5 bg-white shadow-sm"
            >
              <img className="w-4 h-4 opacity-70" src={downloadIcon} alt="download" />
              <span>Download CV</span>
            </a>

            <a 
              href="#contact" 
              className="px-5 py-2.5 text-slate-600 hover:text-slate-900 font-medium text-sm rounded-lg transition-all duration-300 hover:bg-slate-100"
            >
              Contact Me
            </a>
          </div>

          <hr className="my-6 border-slate-200" />

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium text-slate-500">Follow me:</span>
            <div className="flex items-center gap-3">
              <a href="https://github.com/Amirat-Alqamar" target="_blank" rel="noopener noreferrer" className="p-2 transition-all rounded-full text-slate-600 hover:text-black hover:bg-black">
                <img className="w-6 h-6" src={githubIcon} alt="Github" />
              </a>
              <a href="https://www.linkedin.com/in/amirat-alqamar-hemami-1ab0a4318" target="_blank" rel="noopener noreferrer" className="p-2 transition-all rounded-full text-slate-600 hover:bg-blue-300 ">
                <img className="w-5 h-5" src={LinkeinIcon} alt="LinkedIn" />
              </a>
              <a href="#" className="p-2 transition-all rounded-full text-slate-600 hover:bg-pink-300 ">
                <img className="w-5 h-5" src={instagramIcon} alt="Instagram" />
              </a>
              <a href="#" className="p-2 transition-all rounded-full text-slate-600 hover:bg-emerald-300 ">
                <img className="w-5 h-5" src={whatsappIcon} alt="WhatsApp" />
              </a>
            </div>
          </div>

        </div>

        {/* Hero Illustration */}
        <div className="w-[75%] md:w-[40%] flex justify-center items-center">
          <img className="object-contain w-full max-w-md drop-shadow-sm" src={profile} alt="Amira Illustration" />
        </div>

      </section>

      {/* Quick Highlights Section */}
      <section className="py-4 my-4 border-t border-slate-100">
        <h3 className="mb-6 text-xs font-semibold tracking-wider text-center uppercase text-slate-400 md:text-left">
          Quick Highlights
        </h3>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="p-4 transition-all border shadow-sm rounded-xl border-slate-200 bg-white/50 backdrop-blur-sm hover:border-cyan-500/50">
            <span className="block mb-2 text-2xl">🎓</span>
            <h4 className="text-sm font-semibold text-slate-800">Software Engineering</h4>
            <p className="mt-1 text-xs text-slate-500">Graduate Degree</p>
          </div>

          <div className="p-4 transition-all border shadow-sm rounded-xl border-slate-200 bg-white/50 backdrop-blur-sm hover:border-cyan-500/50">
            <span className="block mb-2 text-2xl">💻</span>
            <h4 className="text-sm font-semibold text-slate-800">Full Stack Developer</h4>
            <p className="mt-1 text-xs text-slate-500">Specialized in React & Laravel</p>
          </div>

          <div className="p-4 transition-all border shadow-sm rounded-xl border-slate-200 bg-white/50 backdrop-blur-sm hover:border-cyan-500/50">
            <span className="block mb-2 text-2xl">🚀</span>
            <h4 className="text-sm font-semibold text-slate-800">6+ Real Projects</h4>
            <p className="mt-1 text-xs text-slate-500">E-Commerce, AI & Management</p>
          </div>

          <div className="p-4 transition-all border shadow-sm rounded-xl border-slate-200 bg-white/50 backdrop-blur-sm hover:border-cyan-500/50">
            <span className="block mb-2 text-2xl">🌍</span>
            <h4 className="text-sm font-semibold text-slate-800">Remote Work Ready</h4>
            <p className="mt-1 text-xs text-slate-500">Open for Global Opportunities</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;