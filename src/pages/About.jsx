const About = () => {
  return (
    <section className="flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-gray-300 px-6 py-20">
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 text-white tracking-tight">
          About <span className="text-blue-400">Me</span>
        </h1>

        <p className="text-lg md:text-xl leading-relaxed mb-10 font-light">
          Hi, I’m{' '}
          <span className="font-semibold text-blue-300">Vikas Dhyani</span>.
          After discovering my passion for technology, I decided to pursue a
          career as a Full Stack Developer. Over the course of my journey, I
          have focused on becoming proficient in HTML, CSS, JavaScript, React,
          and Node.js, and have embraced the challenges that come with learning
          new technologies. I am passionate about creating innovative and
          efficient web solutions and am excited to apply my skills to dynamic
          teams and projects in the tech world. As I’ve delved deeper into the
          tech industry, I’ve developed strong problem-solving and communication
          skills, and I now aim to leverage those to solve technical challenges
          and contribute to meaningful projects. I enjoy coding, learning new
          technologies, and constantly improving my skills. When I’m not coding,
          you can find me exploring new trends in tech or brainstorming new
          project ideas. Let’s connect and create something amazing together!
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'].map(
            (skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300"
              >
                <h3 className="font-semibold text-lg text-white">{skill}</h3>
              </div>
            )
          )}
        </div>

        <p className="mt-12 text-gray-400 text-md max-w-2xl mx-auto">
          Beyond coding, I enjoy reading tech blogs, exploring new tools, and
          contributing to open-source projects. I believe in{' '}
          <span className="text-blue-300 font-medium">lifelong learning</span>{' '}
          and love tackling real-world challenges with code.
        </p>
      </div>
    </section>
  )
}

export default About
