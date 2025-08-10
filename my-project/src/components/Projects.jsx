import React from "react";
import Muscle_Imbalance from "../assets/Muscle_Home.png";

const projects = [
  {
    id: 1,
    name: "Muscle Imbalance Tracker",
    used: "Python, Streamlit",
    image: Muscle_Imbalance,
    github: "https://github.com/sruthidacherla/fitness-imbalance-app",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">

        {/* My Projects Title */}
        <h1 className="text-4xl font-bold mb-10 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
            My Projects
          </span>
        </h1>

        {/* Boxes for Projects */}
        <div
          className={`gap-8 ${
            projects.length === 1
              ? "flex justify-center"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg 
                         transform transition-transform duration-300 hover:scale-105 max-w-sm"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.used}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-pink-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
