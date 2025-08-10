import React from 'react'

const NavigationBar = () => {
  return (
    <nav className="bg-black text-white w-full fixed top-0 left-0 z-50">
        <div className='bg-black text-white px-4 py-2 flex justify-center md:justify-between items-center w-full'>
            <div className='text-2xl font-bold hidden md:inline'>Sruthi Dacherla</div>
            <div className='flex gap-6'>
                <a href="#home" className='hover:text-pink-300'>Home</a>
                <a href="#about" className='hover:text-pink-300'>About Me</a>
                <a href="#projects" className='hover:text-pink-300'>Projects</a>
                <a href="#skills" className='hover:text-pink-300'>Skills</a>
                <a href="#certifications" className='hover:text-pink-300'>Certifications</a>
            </div>
            <a href="#contact" className="bg-gradient-to-r from-pink-500 to-blue-500 text-white hidden md:inline
                                          transform transition-transform duration-300 hover:scale-105 px-4 
                                          py-2 rounded-full text-center"
            >
              Connect With Me
            </a>
        </div>
    </nav>
  );
};

export default NavigationBar