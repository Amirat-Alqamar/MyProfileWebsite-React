import React from 'react';
import { experiences } from '../data/ExperienceData';

function Experience() {
  return (
    <section className="max-w-6xl px-6 py-12 mx-auto" id="experience">
      <h2 className="my-10 text-2xl font-bold text-center text-cyan-700">
        Work Experience
      </h2>

      <div className="relative pl-6 ml-4 space-y-8 border-l-2 border-cyan-100 md:ml-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="relative group">
            {/* نقطة الـ Timeline */}
            <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-600 border-4 border-white shadow-sm group-hover:scale-125 group-hover:bg-cyan-500 transition-all duration-300" />

            <div className="p-6 transition-all duration-300 bg-white border shadow-sm rounded-3xl border-slate-100 hover:shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{exp.role}</h3>
                  <p className="text-sm font-medium text-cyan-600">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-slate-100 text-slate-600">
                    {exp.period}
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-cyan-50 text-cyan-700">
                    {exp.type}
                  </span>
                </div>
              </div>

              <p className="mb-4 text-sm leading-relaxed text-slate-600">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {exp.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-slate-50 text-slate-600 border border-slate-100"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;