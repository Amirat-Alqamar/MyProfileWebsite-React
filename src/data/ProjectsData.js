import weatherApp from "../assets/images/weatherApp.png";
import todoApp from "../assets/images/todo2.png";
import medicalApp from "../assets/images/medical.png";
import laravelApp from "../assets/images/laravel.png";
import servicesApp from "../assets/images/services.png";
import shopApp from "../assets/images/shop.png";
import foodApp from "../assets/images/food (1).png";
import profileWebApp from "../assets/images/profileWeb.png";
import HireApp from "../assets/images/Hire.png";

export const projects = [
  {
    id: 1,
    image: weatherApp,
    title: "Weather App",
    description: "A simple weather application built with React.",
    technologies: ["React", "HTML","CSS", "API"],
    github: "https://github.com/username/weather-app"
  },
  {
    id: 2,
    image: todoApp,
    title: "ToDo App",
    description: "Task management application with Laravel CRUD features.",
    technologies: ["Laravel", "HTML" ,"CSS"],
    github: "https://github.com/username/todo-app"
  },

  {
    id: 3,
    image: medicalApp,
    title: "Medical App",
    description: "A website for predicting brain tumors using MRI images.",
    technologies: ["AI Model", "Flask", "HTML" ,"CSS","JS"],
    github: "https://github.com/username/todo-app"
  },

  {
    id: 4,
    image: laravelApp,
    title: "Manegment Application",
    description: "An application for managing trainers in an educational institution.",
    technologies: ["Laravel", "HTML" ,"CSS" ,"Bootstrap"],
    github: "https://github.com/username/todo-app"
  },

  {
    id: 5,
    image: servicesApp,
    title: "Services Website",
    description: "A website designed using Tailwind CSS showcases both design and responsiveness.",
    technologies: ["HTML" ,"TailWind css"],
    github: "https://github.com/username/todo-app"
  },

  {
    id: 6,
    image: shopApp,
    title: "Fashion Shop",
    description: "A stylish clothing store website.",
    technologies: ["TailWind css", "HTML" ],
    github: "https://github.com/username/todo-app"
  },

   {
    id: 7,
    image: foodApp,
    title: "Resturant website",
    description: "Interface designed with API technology.",
    technologies: [ "HTML" ,"CSS","JS"],
    github: "https://github.com/username/todo-app"
  },

   {
    id: 8,
    image: profileWebApp,
    title: "Profile Website",
    description: "My website is designed using React and Tailwind CSS.",
    technologies: ["React","TailWind css", "HTML" ],
    github: "https://github.com/Amirat-Alqamar/MyProfileWebsite-React"
  },

   {
    id: 9,
    image: HireApp,
    title: "Hire Jop",
    description: "A job site highlighting the advantages of remote work.",
    technologies: ["JS", "HTML" ,"CSS","Bootstrap"],
    github: "https://github.com/username/todo-app"
  },
];
