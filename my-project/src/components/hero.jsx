import React from 'react'
import HeroImage from '../assets/headshot.jpg'

const Hero = () => {
  return (
    <section id="home" className="w-full bg-black text-white py-12">
      <div className="mx-auto max-w-6xl min-h-screen flex flex-col items-center justify-center px-4">
        
        <img
          src={HeroImage}
          alt="Sruthi Dacherla Headshot"
          className="mb-8 w-48 h-48 rounded-full object-cover transform 
                     transition-transform duration-300 hover:scale-105"
        />

        <h1 className="text-4xl font-bold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-blue-500">
            Sruthi Dacherla
          </span>
        </h1>

        <p className="mt-4 text-lg text-gray-300">
        Computer Science Student Exploring Product & Software
        </p>

        <div className="mt-8 space-x-4">
          <button
            onClick={() => window.open("https://www.linkedin.com/in/sruthi-dacherla/", "_blank")}
            className="bg-gradient-to-r from-green-400 to-blue-500 text-white
                       transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            LinkedIn
          </button>
          <button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white
                       transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Resume
          </button>
        </div>

      </div>
    </section>
  )
}

export default Hero
