import React from 'react';

// function ProjectCard(props) {
//     return (
//         <div className='m-10'>
            

// <div className="rounded-xl shadow-xs w-[80%] bg-neutral-primary-soft block max-w-sm p-6 border border-default rounded-base shadow-xs">
//     <a href="#">
//         <img className="rounded-md shadow-xs " src="src/assets/images/food (2).png" alt="error" />
//     </a>
//     <a href="#">
//         <h5 className="mt-6 mb-2  font-bold ">ToDoList Application</h5>
//     </a>
//     <p className="mb-6 text-body">In today’s fast-paced digital landscape, fostering seamless collaboration among Developers and IT Operations.</p>
//     <div>

//     </div>
//     <a href="#" className="inline-flex items-center text-body bg-neutral-secondary-medium box-border border border-default-medium hover:bg-neutral-tertiary-medium hover:text-heading focus:ring-4 focus:ring-neutral-tertiary shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">
//         Read more
//         <svg className="w-4 h-4 ms-1.5 rtl:rotate-180 -me-0.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 12H5m14 0-4 4m4-4-4-4"/></svg>
//     </a>
// </div>

//         </div>
//     );
// }

// export default ProjectCard;



// function ProjectCard({ image, title, description, technologies, github }) {
//   return (
//     <div className="max-w-sm bg-white rounded-xl shadow-lg p-4 hover:scale-105 transition">
      
//       <img 
//         src={image} 
//         alt={title} 
//         className="w-full h-40 object-cover rounded-md mb-3"
//       />

//       <h3 className="font-bold mb-2">{title}</h3>

//       <p className="text-gray-600 mb-3">{description}</p>

//       <div className="flex gap-2 flex-wrap mb-3">
//         {technologies.map((tech, index) => (
//           <span 
//             key={index} 
//             className="bg-cyan-100 text-cyan-700 px-2 py-1 text-sm rounded"
//           >
//             {tech}
//           </span>
//         ))}
//       </div>

//       <a 
//         href={github} 
//         target="_blank"
//         className="block text-center bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
//       >
//         View on GitHub
//       </a>

//     </div>
//   );
// }

// export default ProjectCard;




export default function ProjectCard({ title, description, image, technologies, github }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 w-full max-w-sm flex flex-col transition-transform hover:scale-105">

      {/* صورة المشروع */}
      <img 
        src={image} 
        alt={title} 
        className="w-full h-40 object-cover rounded-xl"
      />

      {/* عنوان */}
      <h3 className="text-gl font-bold text-cyan-600 mt-4">{title}</h3>

      {/* وصف */}
      <p className="text-gray-600 text-sm ">{description}</p>

      {/* التقنيات */}
      <div className="flex flex-wrap gap-2 mt-2">
        {technologies.map((tech, index) => (
          <span 
            key={index}
            className="bg-cyan-100 text-gray-700 p-1 rounded-md text-xs"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* زر Github في الأسفل دائمًا */}
      <div className="mt-auto flex justify-center items-center">
        <a 
          href={github} 
          target="_blank" 
          className=" text-xs font-bold p-1 mt-3 bg-black text-white  rounded-xl hover:bg-cyan-700"
        >
            <div className='flex flex-row gap-1 '>
            <span><img className='w-4' src="src/assets/images/github-svgrepo-com.svg" alt="" /></span>
            <p>GitHub</p>
            </div>
           
        </a>
      </div>

    </div>
  );
}
