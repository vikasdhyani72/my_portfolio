import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h2 className="text-sm md:text-base font-medium text-center md:text-left text-white">
          © {new Date().getFullYear()} Made with ❤️ by{' '}
          <span className="font-bold">Vikas Dhyani</span>
        </h2>

        <div className="flex gap-6">
          <a
            href="https://github.com/vikasdhyani72"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/vikas-dhyani-433337246/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:vikasdhyani72@gmail.com"
            className="hover:text-white transition"
          >
            <FiMail size={22} />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
