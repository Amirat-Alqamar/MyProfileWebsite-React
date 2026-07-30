import React from "react";
import Photo from "../assets/images/undraw_code-review_jdgp.svg";

function About() {
  return (
    <div className="container px-4 mx-auto">
      <section className="py-12 min-h-[80vh]" id="about">
        
        {/* Title Section */}
        <div className="mb-10 text-center md:text-left">
          <h2 className="text-3xl font-bold text-slate-800">About Me</h2>
          <div className="w-12 h-1 mx-auto mt-2 rounded-full bg-cyan-500 md:mx-0"></div>
        </div>

        {/* Info Grid */}
        <div className="flex flex-col items-center gap-12 mb-16 md:flex-row">
          <div className="w-[70%] md:w-[40%] flex justify-center">
            <img className="object-contain w-full max-w-sm" src={Photo} alt="Code Review Illustration" />
          </div>

          <div className="w-full md:w-[60%] flex flex-col justify-center">
            <p className="text-base leading-relaxed text-slate-700">
              Hello! I'm <span className="font-semibold text-slate-900">Amirat Alqamar Hemami</span>, a Software Engineering graduate and Full Stack Developer specializing in <span className="font-medium text-cyan-600">React.js</span> and <span className="font-medium text-cyan-600">Laravel</span>.
            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              I enjoy transforming ideas into scalable web applications with a strong focus on performance, accessibility and clean architecture.            </p>

            <p className="mt-3 text-base leading-relaxed text-slate-600">
              I believe that writing clean, maintainable code and continuously learning new technologies are essential for creating high-quality software.
            </p>

            <p className="mt-3 text-base font-medium leading-relaxed text-slate-600">
              I'm currently looking for opportunities where I can contribute, grow as a developer, and collaborate with talented teams to build impactful digital products.
            </p>
          </div>
        </div>

        {/* What I Do Cards */}
        <div className="mt-8">
          <h3 className="mb-6 text-2xl font-bold text-center text-slate-800 md:text-left">
            What I Do
          </h3>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            
            {/* Frontend */}
            <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200 hover:shadow-md">
              <h4 className="flex items-center gap-2 mb-3 text-base font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Frontend
              </h4>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "Tailwind", "Bootstrap"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Backend */}
            <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200 hover:shadow-md">
              <h4 className="flex items-center gap-2 mb-3 text-base font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Backend
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Laravel", "PHP", "REST API", "MySQL"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200 hover:shadow-md">
              <h4 className="flex items-center gap-2 mb-3 text-base font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "Postman", "Figma", "VS Code"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div className="p-5 transition-shadow bg-white border shadow-sm rounded-xl border-slate-200 hover:shadow-md">
              <h4 className="flex items-center gap-2 mb-3 text-base font-bold text-slate-800">
                <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                Soft Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {["Problem Solving", "Teamwork", "Communication", "Continuous Learning"].map((skill) => (
                  <span key={skill} className="px-2.5 py-1 text-xs font-medium text-slate-600 bg-slate-100 rounded-md">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>

      </section>
    </div>
  );
}

export default About;