import React from "react";

const skills = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "Python, React, Node.js, JavaScript, Java, SQL, REST APIs, Git, MongoDB",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Figma, React, Tailwind CSS",
  },
  {
    id: 3,
    title: "Cloud & DevOps",
    description: "AWS, Docker, Kubernetes, CI/CD",
  },
  {
    id: 4,
    title: "Geospatial Analysis",
    description: "Google Earth Engine, Remote Sensing, GIS, NDVI/Imagery Analysis",
  },
  {
    id: 5,
    title: "Robotics & Autonomous Systems",
    description: "ROS, LiDAR Processing, Algorithms (Wall Following, Follow-the-Gap)",
  },
  {
    id: 6,
    title: "UI/Front-End",
    description: "Figma, React, Tailwind CSS",
  },
];
const Skill = () => {
  return (
    <div className="bg-black text-white py-20" id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold mb-10 text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
            My Skills
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
              transition-transform duration-300 hover:scale-105"
            >
              <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text 
              bg-white">
                {skill.title}
              </h3>
              <p className="mt-2 text-gray-300">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;