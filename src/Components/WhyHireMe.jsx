import React from 'react';

function WhyHireMe() {
  const reasons = [
    {
      id: 1,
      title: "Clean Code",
      description: "I write readable and maintainable code following modern development practices.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    {
      id: 2,
      title: "Responsive Design",
      description: "I build websites that work seamlessly across all screen sizes and modern devices.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      id: 3,
      title: "Continuous Learning",
      description: "Always exploring new technologies, best practices, and constantly improving my skills.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      id: 4,
      title: "Problem Solving",
      description: "Strong analytical thinking with a passion for solving complex real-world challenges.",
      icon: (
        <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    }
  ];

  return (
    <section className="max-w-6xl px-6 py-12 mx-auto" id="why-me">
      <h5 className="text-2xl font-bold tracking-wider text-center uppercase text-cyan-600">
        Value Proposition
      </h5>
      <h2 className="mt-2 mb-10 text-3xl font-bold text-center text-slate-800">
        Why Hire Me?
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {reasons.map((item) => (
          <div
            key={item.id}
            className="p-6 transition-all duration-300 bg-white border shadow-sm border-slate-100 rounded-3xl hover:shadow-md hover:-translate-y-1 group"
          >
            <div className="flex items-center justify-center w-12 h-12 mb-4 transition-colors rounded-2xl bg-cyan-50 group-hover:bg-cyan-100">
              {item.icon}
            </div>

            <h3 className="mb-2 text-lg font-bold text-slate-800">
              {item.title}
            </h3>

            <p className="text-xs leading-relaxed text-slate-500">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyHireMe;