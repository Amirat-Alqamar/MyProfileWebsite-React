import React from "react";

function About(props) {
  return (
    <div>
      {/* section about me */}
      <section className="flex flex-col mt-10 mt-15 md:flex-row lg:flex-row gap-17" id="about">
        <div className="md:w-[50%] mx-10">
          <h2 className="font-sans font-bold text-slate-500">About Me</h2>
          <p className="my-5 text-sm">
            I work on transforming ideas into fully integrated digital products,
             starting with requirements analysis and user interface design,
              and continuing with writing clean and organized code. Throughout my career,
               I have delivered numerous projects that showcase my skills in front-end and back-end development.
                My work has included informational websites. Every project I work on is a new opportunity for innovation, 
                skill development, and delivering real value.
?
          </p>

          <div className="flex flex-row gap-1 text-xs md:gap-3 md:text-base ">
              
            <div className="flex flex-col items-center justify-center p-1 text-center border-2 rounded-lg md:p-2 hover:shadow-lg hover:shadow-cyan-600/50 border-cyan-600">
              <div className="flex flex-row items-center justify-center gap-2">
                <span><img class="icons" src="src/assets/images/code-svgrepo-com (1).svg" alt="code-icons" /></span>
                <h3>Languages</h3>
              </div>
              <p className="text-xs text-slate-500">HTML,CSS,JS <br /> Python,React,Laravel</p>
            </div>

            <div className="flex flex-col items-center justify-center p-1 text-center border-2 rounded-lg hover:shadow-lg hover:shadow-cyan-600/50 border-cyan-600">
              <div className="flex flex-row items-center justify-center gap-2">
                <span><img class="icons" src="src/assets/images/graduation-cap-svgrepo-com.svg" alt="graduation-icons" /></span>
                <h3>Education</h3>
              </div>
             <p className="text-xs text-slate-500">Bachelor's degree in Informatics Engineering</p>
            </div>

           <div className="flex flex-col items-center justify-center p-2 text-center border-2 rounded-lg hover:shadow-lg hover:shadow-cyan-600/50 border-cyan-600">
              <div className="flex flex-row gap-2 ">
                <span><img className="w-5" src="src/assets/images/folder-svgrepo-com.svg" alt="folder-svgrepo-com.svg" /></span>
                <h3>Projects</h3>
              </div>
              <p className="flex items-center justify-center text-xs text-slate-500">Work on more 5 Projects</p>
            </div>


          </div>
        </div>



        <div className="md:w-[40%]">
          <img src="src/assets/images/profilephoto2.png" alt="Profile" />
        </div>
      </section>
    </div>
  );
}

export default About;
