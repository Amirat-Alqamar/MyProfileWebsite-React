import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/ProjectsData';


function Projects() {
  return (
    <section className="py-10 px-11 md:px-6" id='projects'>
        <h1 className='my-10 text-2xl font-bold text-center text-cyan-700'>My Projects</h1>
<div className="grid justify-center max-w-6xl grid-cols-1 gap-5 mx-auto md:grid-cols-2 lg:grid-cols-3">        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            live={project.live}
            video={project.video}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;