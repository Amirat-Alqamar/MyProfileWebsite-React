import React from 'react';
import { certificates } from '../data/CertificatesData';

function Certificates() {
  return (
    <section className="max-w-6xl px-6 py-12 mx-auto" id="certificates">
      <h2 className="my-10 text-2xl font-bold text-center text-cyan-700">
        Courses & Certifications
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
        {certificates.map((cert) => (
          <div
            key={cert.id}
            className="flex flex-col justify-between w-full max-w-sm p-6 transition-all duration-300 bg-white border shadow-sm border-slate-100 rounded-3xl hover:shadow-xl hover:-translate-y-1"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 text-xs font-semibold border rounded-full bg-cyan-50 text-cyan-700 border-cyan-100">
                  {cert.type}
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-800 line-clamp-2">
                {cert.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-cyan-600">
                {cert.issuer}
              </p>
            </div>

            {cert.link && cert.link !== "#" && (
              <div className="pt-4 mt-6 border-t border-slate-100">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full gap-2 px-4 py-2 text-xs font-semibold text-white transition-colors duration-300 rounded-full shadow-sm bg-slate-900 hover:bg-cyan-700"
                >
                  <span>View Certificate / Link</span>
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 2 00-2 2v10a2 2 002 2h10a2 2 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;