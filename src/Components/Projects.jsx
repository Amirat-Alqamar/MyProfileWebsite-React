import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/ProjectsData';

// function Projects(props) {
//     return (
//         <section className='mt-10'>
//             <h1 className='font-bold text-center text-cyan-700'>My Projects</h1>
//             <div className='grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3'>
//                 {/* <ProjectCard/> */}
//             </div>
//         </section>
//     );
// }

// export default Projects;


function Projects() {
  return (
    <section className="py-10 px-11 md:px-6" id='projects'>
        <h1 className='my-10 text-2xl font-bold text-center text-cyan-700'>My Projects</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            image={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;