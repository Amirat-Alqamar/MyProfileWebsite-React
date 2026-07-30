import React from 'react';
import githubIcon from "../assets/images/github-svgrepo-com.svg";
import videoIcon from "../assets/images/play.png";

export default function ProjectCard({ title, description, image, technologies, github, live, video }) {
  return (
    <div className="flex flex-col justify-between w-full max-w-sm p-5 transition-all duration-300 bg-white border shadow-sm rounded-3xl border-slate-100 hover:shadow-xl hover:-translate-y-1">
      
      <div>
        {/* صورة المشروع */}
        <img 
          src={image} 
          alt={title} 
          className="object-cover w-full border h-44 rounded-2xl border-slate-100"
        />

        {/* عنوان المشروع */}
        <h3 className="mt-4 text-xl font-bold tracking-wide text-cyan-600">{title}</h3>

        {/* وصف المشروع */}
        <p className="text-gray-500 text-sm mt-1 leading-relaxed min-h-[40px] line-clamp-3">
          {description}
        </p>

        {/* التقنيات المستخدمة */}
        <div className="flex flex-wrap gap-2 mt-4">
          {technologies?.map((tech, index) => (
            <span 
              key={index}
              className="px-3 py-1 text-xs font-medium rounded-lg bg-cyan-50 text-cyan-600"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* روابط المشروعات - تظهر فقط إذا وجد الرابط */}
      <div className="flex flex-wrap justify-center gap-2 pt-4 mt-6 border-t border-slate-100">
        {github && (
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-slate-700 transition-colors duration-300 shadow-sm"
          >
            <img className='w-4 h-4 invert' src={githubIcon} alt="GitHub icon" />
            <span>GitHub</span>
          </a>
        )}

        {live && (
          <a 
            href={live}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-cyan-600 text-white text-xs font-semibold rounded-full hover:bg-cyan-500 transition-colors duration-300 shadow-sm"
          >
            <span>Live Demo</span>
          </a>
        )}
        
        {video && (
          <a 
            href={video}
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-600 text-white text-xs font-semibold rounded-full hover:bg-emerald-500 transition-colors duration-300 shadow-sm"
          >
            <img className='w-4 h-4 invert' src={videoIcon} alt="Video icon" />
            <span>Video</span>
          </a>
        )}
      </div>

    </div>
  );
}