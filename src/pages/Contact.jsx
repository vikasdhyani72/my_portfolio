import React from 'react'

const Contact = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-16">
      <div className="max-w-3xl w-full bg-white/100 backdrop-blur-md shadow-2xl rounded-2xl p-10">
        <h2 className="text-4xl font-extrabold text-center mb-4 text-gray-800">
          Get In Touch
        </h2>
        <p className="text-center text-gray-600 mb-10 max-w-xl mx-auto">
          Have a project idea, a question, or just want to say hi? Fill out the
          form below or email me directly at{' '}
          <a
            href="mailto:vikasdhyani72@gmail.com"
            className="text-blue-600 font-semibold underline hover:text-blue-800 transition"
          >
            vikasdhyani72@gmail.com
          </a>
        </p>

        <form className="space-y-6 ">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Message
            </label>
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full border border-gray-200 rounded-lg px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 rounded-lg font-semibold shadow-lg hover:scale-105 transform transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
