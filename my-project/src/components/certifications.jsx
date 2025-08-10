import React from "react";

const Certifications = () => {
  return (
    <section className="bg-black text-white py-20" id="certifications">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-10">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
            Certifications
          </span>
        </h2>

        {/* Placeholder Content */}
        <div className="bg-gray-800 rounded-lg p-8 shadow-lg inline-block">
          <p className="text-lg text-gray-300">
            Coming Soon!
          </p>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
