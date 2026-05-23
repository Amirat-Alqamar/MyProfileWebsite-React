import React from "react";

function About(props) {
  return (
    <div className="container px-4 mx-auto">
      {/* section about me */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center min-h-[70vh] gap-10 md:gap-16 py-10" id="about">
        
        {/* النصوص والمعلومات */}
        <div className="w-full md:w-[55%] flex flex-col justify-center px-4 md:px-0">
          <h2 className="font-sans text-3xl font-bold text-slate-700">About Me</h2>
          <p className="max-w-2xl my-5 leading-relaxed text-gray-700 text-md ">
            I work on transforming ideas into fully integrated digital products,
            starting with requirements analysis and user interface design,
            and continuing with writing clean and organized code. Throughout my career,
            I have delivered numerous projects that showcase my skills in front-end and back-end development.
            My work has included informational websites. Every project I work on is a new opportunity for innovation, 
            skill development, and delivering real value.
          </p>

          {/* بطاقات المهارات والتعليم والخبرة */}
          <div className="grid w-full grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
              
            {/* بطاقة اللغات */}
            <div className="flex flex-col items-center justify-between p-4 text-center border-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/20 border-cyan-600 bg-white min-h-[120px]">
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <img className="object-contain w-5 h-5" src="src/assets/images/code-svgrepo-com (1).svg" alt="code-icons" />
                <h3 className="font-semibold text-md text-slate-800">Languages</h3>
              </div>
              <p className="leading-tight text-md text-slate-500">HTML, CSS, JS <br /> Python, React, Laravel</p>
            </div>

            {/* بطاقة التعليم */}
            <div className="flex flex-col items-center justify-between p-4 text-center border-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/20 border-cyan-600 bg-white min-h-[120px]">
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <img className="object-contain w-5 h-5" src="src/assets/images/graduation-cap-svgrepo-com.svg" alt="graduation-icons" />
                <h3 className="font-semibold text-md text-slate-800">Education</h3>
              </div>
             <p className="leading-tight text-md text-slate-500">Bachelor's degree in Informatics Engineering</p>
            </div>

            {/* بطاقة المشاريع */}
            <div className="flex flex-col items-center justify-between p-4 text-center border-2 rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-cyan-600/20 border-cyan-600 bg-white min-h-[120px]">
              <div className="flex flex-row items-center justify-center gap-2 mb-2">
                <img className="object-contain w-5 h-5" src="src/assets/images/folder-svgrepo-com.svg" alt="folder-icons" />
                <h3 className="font-semibold text-md text-slate-800">Projects</h3>
              </div>
              <p className="leading-tight text-md text-slate-500">Work on more than 5 Projects</p>
            </div>

          </div>
        </div>

        {/* الصورة الشخصية الافتراضية */}
        <div className="w-[60%] md:w-[40%] flex justify-center items-center">
          <img className="object-contain w-full h-auto max-w-xs" src="src/assets/images/profilephoto2.png" alt="Profile" />
        </div>
        
      </section>
    </div>
  );
}

export default About;