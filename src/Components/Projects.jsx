import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/ProjectsData';

function Projects() {
  return (
    <section className="max-w-6xl px-6 py-10 mx-auto" id='projects'>
      <h2 className='my-10 text-2xl font-bold text-center text-cyan-700'>My Projects</h2>
      
      <div className="grid grid-cols-1 gap-6 justify-items-center md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id || project.title}
            {...project} 
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;