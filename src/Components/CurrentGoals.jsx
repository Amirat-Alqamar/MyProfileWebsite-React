import React from 'react';
import { currentGoalsData } from '../data/CurrentGoalsData';

function CurrentGoals() {
  return (
    <section className="max-w-6xl px-6 py-12 mx-auto" id="goals">
      <h5 className="text-2xl font-bold tracking-wider text-center uppercase text-cyan-600">
        Current Goals
      </h5>
      <h2 className="mt-2 mb-10 text-3xl font-bold text-center text-slate-800">
        Currently Learning
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {currentGoalsData.map((goal) => {
          const isAdvanced = goal.status === "Advanced";

          return (
            <div
              key={goal.id}
              className={`p-6 transition-all duration-300 bg-white border shadow-sm rounded-3xl hover:shadow-md flex flex-col justify-between ${
                isAdvanced ? "border-cyan-500 ring-2 ring-cyan-500/20" : "border-slate-100"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span
                    className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      isAdvanced
                        ? "bg-cyan-500 text-white"
                        : "bg-cyan-50 text-cyan-700"
                    }`}
                  >
                    {goal.status}
                  </span>
                  <span className="text-xs font-bold text-slate-400">
                    {goal.progress}%
                  </span>
                </div>

                <h3 className="mb-2 text-base font-bold text-slate-800">
                  {goal.title}
                </h3>
                <p className="mb-4 text-xs leading-relaxed text-slate-500">
                  {goal.description}
                </p>
              </div>

              {/* شريط التقدم */}
              <div className="w-full h-2 mt-2 overflow-hidden rounded-full bg-slate-100">
                <div
                  className={`h-2 transition-all duration-500 rounded-full ${
                    isAdvanced ? "bg-cyan-600" : "bg-cyan-400"
                  }`}
                  style={{ width: `${goal.progress}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default CurrentGoals;