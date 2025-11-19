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

        {/* Certification Card */}
        <div className="flex justify-center">
          <div className="bg-gray-800 rounded-xl p-10 shadow-lg w-full max-w-xl">

            {/* Badge Image */}
            <img
              src="/image.png"   // make sure the file name matches!
              alt="AWS Certified Cloud Practitioner Badge"
              className="w-32 mx-auto mb-6"
            />

            <h3 className="text-2xl font-semibold mb-2">
              AWS Certified Cloud Practitioner
            </h3>
            <p className="text-gray-300 text-lg mb-4">
              Amazon Web Services • Issued 2025
            </p>

            {/* Credential Link */}
            <a
              href="https://www.credly.com/badges/20d27d29-e734-433d-9f24-127e6f3bf975"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-400 hover:underline"
            >
              View Credential →
            </a>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Certifications;
