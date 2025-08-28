import React from 'react'
import resume from '../assets/icons/vikasDhyani-full0stack0dev.pdf'

const Resume = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-6 py-20 flex flex-col items-center">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-600 text-center">
        My <span className="text-blue-600">Resume</span>
      </h2>
      <p className="text-gray-300 text-center max-w-xl mb-10">
        Explore my professional journey, skills, and experiences. You can
        preview it here or download it for later.
      </p>

      <div className="w-full max-w-5xl h-[80vh] mb-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-white">
        <iframe src={resume} className="w-full h-full" title="Resume"></iframe>
      </div>

      <div className="flex gap-4">
        <a
          href={resume}
          download
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 shadow-md transition"
        >
          Download
        </a>
        <a
          href={resume}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 shadow-md transition"
        >
          Open in New Tab
        </a>
      </div>
    </section>
  )
}

export default Resume
