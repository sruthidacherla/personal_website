import React from "react";

const skills = [
  {
    id: 1,
    title: "Full-Stack Development",
    description: "React, Tailwind CSS, Node.js, SQL, Git, REST APIs, MongoDB",
  },
  {
    id: 2,
    title: "UI/UX Design",
    description: "Figma, React, Tailwind CSS",
  },
  {
    id: 3,
    title: "AI & Machine Learning",
    description: "Python, Streamlit, OpenAI API",
  },
  {
    id: 4,
    title: "Geospatial Analysis",
    description: "Google Earth Engine, Remote Sensing, GIS, Data Visualization",
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