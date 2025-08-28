import { Link } from 'react-router-dom'
import projects from '../data.js'
const Home = () => {
  return (
    <div className="text-gray-800">
      <section className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-white tracking-tight animate-fadeIn">
          Hi, I'm <span className="text-blue-400">Vikas Dhyani</span>
        </h1>

        <p className="text-lg md:text-2xl mb-8 text-gray-300 animate-fadeIn delay-200">
          Web Developer <span className="text-gray-500">|</span> Tech Enthusiast
        </p>
        <Link
          to="/projects"
          className="bg-gradient-to-r from-blue-500 to-teal-400 text-white px-8 py-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-2xl transform transition duration-300 font-semibold"
        >
          View My Projects
        </Link>
      </section>

      <section className="py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
        <div className="max-w-4xl mx-auto text-center bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-lg p-10">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-inter">
            About Me
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-gray-300 font-inter">
            I’m a passionate developer who loves building clean, modern, and
            responsive web apps. Skilled in{' '}
            <span className="text-blue-400 font-semibold">Frontend</span> and{' '}
            <span className="text-teal-400 font-semibold">Backend</span> basics.
          </p>
          <Link
            to="/about"
            className="inline-block px-6 py-3 text-white bg-gradient-to-r from-blue-500 to-teal-400 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transform transition duration-300 font-semibold"
          >
            Read More →
          </Link>
        </div>
      </section>

      <section className="py-16 bg-gray-900 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-50">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
            >
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-48 w-full object-fit"
                />
              )}
              {project.video && (
                <video controls className="h-48 w-full object-cover">
                  <source src={project.video} type="video/mp4" />
                </video>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/projects"
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 shadow-md"
          >
            See All
          </Link>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
        <h2 className="text-2xl text-gray-50 font-bold mb-4">
          Let’s Work Together
        </h2>
        <p className="mb-6 text-gray-100">
          Have a project or idea? I’d love to hear from you.
        </p>
        <Link
          to="/contact"
          className="bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600"
        >
          Contact Me
        </Link>
      </section>
    </div>
  )
}

export default Home
