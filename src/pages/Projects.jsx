import React from 'react'
import projects from '../data.js'

const Projects = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 px-6 py-12">
      <div className="max-w-6xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-12 text-white tracking-tight">
          My <span className="text-blue-400">Projects</span>
        </h1>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300 flex flex-col justify-between"
            >
              {project.image ? (
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-fit"
                />
              ) : project.video ? (
                <div className="relative w-full h-48">
                  <video
                    src={project.video}
                    title={project.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    controls
                  ></video>
                </div>
              ) : null}

              <div className="p-6 flex flex-col flex-grow justify-between">
                <h2 className="text-2xl font-semibold text-white mb-3">
                  {project.title}
                </h2>
                <p className="text-gray-400 mb-3">{project.description}</p>
                <p className="text-sm text-gray-500 mb-6">
                  <span className="font-semibold text-gray-300">
                    Skills Used:
                  </span>{' '}
                  {project.Skills_Used}
                </p>
                <div className="flex gap-4 justify-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm text-white"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-blue-500 hover:bg-blue-400 rounded-lg text-sm text-white"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
