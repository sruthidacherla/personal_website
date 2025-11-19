import React from 'react';
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500">
            Connect With Me
          </span>
        </h2>

        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Left Section */}
          <div className="flex-1">
            <h3 className="text-3xl font-bold text-pink-400 mb-4">
                Let’s Connect!
            </h3>
            <p className="text-gray-300">
            I work across software engineering, full-stack development, and front-end/UI. If you’re interested in collaborating or connecting, I’d be happy to chat.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-blue-400 mr-2" />
              <a href="mailto:sruthi.dacherla@gmail.com" className="hover:underline">
                sruthi.dacherla@gmail.com
              </a>
            </div>

            <div className="mb-4">
              <FaPhone className="inline-block text-blue-400 mr-2" />
              <span>+1 (571) 665-9168</span>
            </div>

            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-blue-400 mr-2" />
              <span>United States</span>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="flex-1 w-full">
            <form
              action="https://formsubmit.co/d65175d3697d12f066a318cc691f5f94"
              method="POST"
              className="space-y-4"
            >
              {/* Disable CAPTCHA */}
              <input type="hidden" name="_captcha" value="false" />

              {/* Optional: Redirect after sending */}
              {/* <input type="hidden" name="_next" value="https://yourdomain.com/thanks" /> */}

              <div>
                <label htmlFor="name" className="block mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  placeholder="Enter Your Email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400"
                  rows="5"
                  placeholder="Type Your Message"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-gradient-to-r from-pink-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
