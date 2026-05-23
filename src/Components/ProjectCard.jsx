import React from 'react';

export default function ProjectCard({ title, description, image, technologies, github }) {
  return (
    <div className="flex flex-col justify-center w-full max-w-sm p-5 transition-all duration-300 bg-white border shadow-sm rounded-3xl border-slate-100 hover:shadow-xl hover:-translate-y-1">

      {/* صورة المشروع */}
      <img 
        src={image} 
        alt={title} 
        className="object-cover w-full border h-44 rounded-2xl border-slate-100"
      />

      {/* عنوان المشروع */}
      <h3 className="mt-4 text-xl font-bold tracking-wide text-cyan-600">{title}</h3>

      {/* وصف المشروع */}
      <p className="text-gray-500 text-sm mt-1 leading-relaxed min-h-[40px]">{description}</p>

      {/* التقنيات المستخدمة */}
      <div className="flex flex-wrap gap-2 mt-4">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 text-xs font-medium rounded-lg bg-cyan-50 text-cyan-600"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* زر الـ GitHub المتناسق في المنتصف */}
      <div className="flex justify-center mt-6">
        <a 
          href={github} 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center gap-2 px-5 py-1.5 bg-black text-white text-xs font-semibold rounded-full hover:bg-cyan-600 transition-colors duration-300 shadow-sm"
        >
          <img className='w-4 h-4 brightness-0 invert' src="src/assets/images/github-svgrepo-com.svg" alt="GitHub icon" />
          <span>GitHub</span>
        </a>
      </div>

    </div>
  );
}