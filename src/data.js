import dreamHouseImg from './assets/images/dreamHouse.png'
import techEduImg from './assets/images/techEdu.png'
import foodDeliveryImg from './assets/images/foodDelivery.png'
import hamburgerVid from './assets/images/hamburger.mp4'

const projects = [
  {
    title: 'Hamburger Menu',
    description:
      'Designed a responsive hamburger menu to enhance mobile navigation using semantic HTML, CSS Flexbox, and JavaScript for toggle functionality. Ensured smooth UX across screen sizes.',
    Skills_Used:
      'HTML, CSS (Flexbox, Media Queries), JavaScript, Responsive Design, Git',
    github: 'https://github.com/vikasdhyani72/hamburgur.git',
    video: hamburgerVid,
    demo: 'https://youtu.be/olXd2O0F7Ug',
  },
  {
    title: 'DreamHomes – Real Estate Website',
    description:
      'Multi-page real estate website with modular sections and responsive',
    Skills_Used: 'HTML, CSS, JavaScript.',
    github: 'https://github.com/vikasdhyani72/real-estate-project.git',
    demo: 'https://vikasdhyani72.github.io/real-estate-project/',
    image: dreamHouseImg,
  },
  {
    title: 'TechEdu – EdTech Landing Page',
    description:
      'Education website featuring dark mode, mobile-first design, and performance optimizations.',
    Skills_Used: 'HTML, CSS, JavaScript.',
    github: 'https://github.com/vikasdhyani72/techEducation.git',
    demo: 'https://vikasdhyani72.github.io/techEducation/',
    image: techEduImg,
  },
  {
    title: 'TastyBites – Food Delivery Website',
    description:
      'Food delivery UI clone with modular components and CSS-only animations.',
    Skills_Used: 'HTML, CSS, JavaScript.',
    github: 'https://github.com/vikasdhyani72/food-delivery-project.git',
    demo: 'https://vikasdhyani72.github.io/food-delivery-project/',
    image: foodDeliveryImg,
  },
]

export default projects
