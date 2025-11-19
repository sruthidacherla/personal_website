import React from "react";

const About = () => {
  return (
    <section className="bg-black text-white py-16 -mt-12" id="about">
      <div className="mx-auto max-w-6xl px-8 md:px-16 lg:px-24 text-center">
        
        {/* Paragraph about Me */}
        <h1 className="text-4xl font-bold mb-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
                    About Me
                </span>
        </h1>
        <p className="text-lg text-gray-300 leading-relaxed mb-16">
        I’m a 3rd-year Computer Science major at the University of Virginia with a minor in Technology Entrepreneurship. 
        I’m passionate about building clean, efficient, and user-friendly digital experiences, and I enjoy working across the stack to 
        solve real-world problems with technology. Outside of academics, I stay active through sports and fitness, enjoy exploring new places, 
        and love working on side projects that let me experiment and learn.
        </p>

                <div className="mx-auto max-w-3xl">
                <div className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 p-[2px] rounded-2xl shadow-[0_0_40px_rgba(168,85,247,0.15)]">
                    <div className="rounded-2xl bg-gray-950/90 px-6 py-8 md:px-10 md:py-10 transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center gap-2">
                        <h3 className="text-2xl md:text-3xl font-semibold">
                        University of Virginia
                        </h3>
                        <p className="text-gray-400 italic">
                        B.A. Computer Science • Minor in Technology Entrepreneurship <br />
                        Master’s in Computer Science (2026-2027)
                        </p>
                        <p className="text-gray-300">Expected Graduation: May 2027</p>

                        {/* classes */}
                        <div className="mt-4 flex flex-wrap justify-center gap-3">
                        <span className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-green-400 to-blue-500">
                        Data Structures & Algorithms
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-pink-500 to-yellow-500">
                        Computer Systems and Org
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-indigo-400 to-cyan-400">
                        Software Development Essentials
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-purple-400 to-pink-500">
                        HCI in Software Development
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-orange-400 to-red-500">
                        Intro to Cybersecurity
                        </span>
                        <span className="px-4 py-1.5 rounded-full text-sm bg-gradient-to-r from-teal-400 to-green-500">
                        F1Tenth Autonomous Vehicles
                        </span>
                        </div>
                    </div>
                    </div>
                </div>

                <div className="mt-8 text-left">
                    <div className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-3 rounded-full bg-gradient-to-r from-pink-400 to-blue-500"></div>
                    <div className="text-gray-300">
                        <p className="font-medium text-white">Dean’s List • 2023 - Present</p>
                        <p className="text-sm">GPA: 3.8/4.0</p>
                    </div>
                    </div>
                    <div className="flex items-start gap-4">
                    <div className="mt-1 h-3 w-5 rounded-full bg-gradient-to-r from-pink-400 to-blue-500"></div>
                    <div className="text-gray-300">
                        <p className="font-medium text-white">Extracurriculars</p>
                        <p className="text-sm">Activities: Women in Computer Science, 
                            Girls Who Code,
                            Zeta Tau Alpha Sorority: Secretary of Philanthropy, 
                            Data Science and Analytics, 
                            Smart Woman Securities, 
                            Indian Student Association </p>
                    </div>
                    </div>
                    </div>
                </div>
      </div>
    </section>
  );
};

export default About;
