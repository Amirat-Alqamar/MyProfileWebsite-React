import React from 'react';
import { techCategories } from '../data/TechStackData';

function TechStack() {
  return (
    <section className="px-6 py-12 bg-slate-50/50" id="tech-stack">
      <div className="max-w-6xl mx-auto">
        <h2 className="my-8 text-2xl font-bold text-center text-cyan-700">
          Tech Stack & Tools
        </h2>

        <div className="space-y-8">
          {techCategories.map((category, idx) => (
            <div key={idx} className="p-6 bg-white border shadow-sm rounded-3xl border-slate-100">
              <h3 className="pb-2 mb-4 text-lg font-semibold border-b text-slate-700 border-slate-100">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 border border-slate-100/80 hover:border-cyan-200 hover:bg-cyan-50/30 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      className="object-contain w-7 h-7" 
                    />
                    <span className="text-xs font-semibold text-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TechStack;