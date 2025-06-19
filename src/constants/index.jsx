import {
  // FaXTwitter,
  FaGithub,
  FaLinkedin,
  // FaFacebook,
  // FaDiscord,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.png";
import projectImage2 from "../assets/project2.png";
import projectImage3 from "../assets/project3.png";
import projectImage4 from "../assets/project4.png";
// import projectImage4 from "../assets/project4.jpeg";
// import projectImage5 from "../assets/project5.jpeg";
// import projectImage6 from "../assets/project6.jpeg";

import { RiReactjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import { FaNodeJs } from "react-icons/fa";
import { SiPhp } from "react-icons/si";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";

export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  // { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#exp" },
  // { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const HERO = {
  name: "BAGUS SATRIO WICAKSONO",
  roles: "Web Developer | Graphic Designer", //| Cybersecurity Enthusiast
  roles1: "Im a Web Developer",
  roles2: "Im a Graphic Designer",
  roles3: "Im a Cloud Engineer",
  description:
    "I am a passionate frontend developer with a motivation to create beautiful and functional user interfaces. I like transforming ideas into engaging web experiences. Also dive in Fullstack Development, Cloud Computing, and Cybersecurity. I am always eager to learn new technologies and improve my skills through hands on experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "https://github.com/ssugab/Website-Portfolio",
  },
  {
    id: 2,
    name: "Twiceland",
    description:
      "A information website about TWICE, a Kpop Group, providing all information about the group, members, and discography. Built with Tailwind and Vanilla JS. (Under re-development)",
    image: projectImage2,
    githubLink: "https://github.com/ssugab/Twiceland",
  },
  {
    id: 3,
    name: "KWU E-commerce Website",
    description:
      "A comprehensive e-commerce platform built with MERN Stack, featuring product listings, shopping cart functionality, and user authentication also admin dashboard functionality.",
    image: projectImage4,
    githubLink: "https://github.com/ssugab/KWU-E-Commerce",
  },
  {
    id: 4,
    name: "Website Profile Management",
    description:
      "A simple profile management application built with PHP including features like CRUD a user data.",
    image: projectImage3,
    githubLink: "https://github.com/ssugab/WebsiteProfile",
  },
  // {
  //   id: 4,
  //   name: "Weather App",
  //   description:
  //     "A weather application that uses the OpenWeatherMap API to fetch and display current weather data and forecasts for various locations, built with React and styled-components.",
  //   image: projectImage4,
  //   githubLink: "https://github.com/user/weather-app",
  // },
  // {
  //   id: 5,
  //   name: "Blog Platform",
  //   description:
  //     "A blogging platform developed with Next.js and Markdown for creating, editing, and publishing blog posts. It features a rich text editor, tag system, and user authentication.",
  //   image: projectImage5,
  //   githubLink: "https://github.com/user/blog-platform",
  // },
  // {
  //   id: 6,
  //   name: "Chat Application",
  //   description:
  //     "A real-time chat application using Firebase for backend services, including user authentication, chat rooms, and instant messaging features. Built with React and Firebase.",
  //   image: projectImage6,
  //   githubLink: "https://github.com/user/chat-application",
  // },
];

// export const BIO = [
//   "Carl Frank studied computer science at the University of Technology,from which he graduated in 2010. Following his education, he honed his craft and expertise over the course of 10 years at Tech Innovations Inc., where he immersed himself in the world of frontend development.",
//   "In 2021, driven by a shared vision for innovative web solutions and a passion for creating extraordinary user experiences Carl Frank co-founded WebArtistry alongside his creative partner, Jane Doe. Together, they set out to redefine frontend development, infusing their projects with creativity and cutting-edge technology.",
//   "As a multi-disciplinary frontend developer, Carl Frank brings a wealth of skills and expertise to his work. From his deep understanding of HTML, CSS, and JavaScript to his proficiency in modern frameworks like React and Vue.js, Carl Frank possesses a versatile skill set that allows him to craft stunning and unforgettable web experiences for his clients and audiences alike.",
// ];

export const SKILLS = [
  {
    icon: <RiReactjsLine className="text-4xl text-cyan-400 lg:text-5xl" />,
    name: "React",
    experience: "3 months",
  },
  {
    icon: <IoLogoJavascript className="text-4xl text-yellow-400 lg:text-5xl" />,
    name: "JavaScript",
    experience: "1 year",
  },
  {
    icon: <FaNodeJs className="text-4xl text-green-600 lg:text-5xl" />,
    name: "Node.js",
    experience: "6 months",
  },
  {
    icon: <SiPhp className="text-4xl text-violet-400 lg:text-5xl" />,
    name: "PHP",
    experience: "4 months",
  },
  {
    icon: <SiAdobephotoshop className="text-4xl text-blue-600 lg:text-5xl" />,
    name: "Adobe Photoshop",
    experience: "2 years",
  },
  {
  icon: <SiAdobeillustrator className="text-4xl text-orange-400	 lg:text-5xl" />,
  name: "Adobe Illustrator",
  experience: "2 years",
  },
];

export const EXPERIENCES = [
  {
    title: "Bangkit Academy 2024",
    company: "by Yayasan Dicoding Indonesia",
    duration: "September 2024 - December 2024",
    description:
      "Learning in the Cloud Computing Path, i spent 3 months learning about Cloud Computing, including Google Cloud Platform, Kubernetes, and DevOps practices. I gained hands-on experience (Capstone Project) in deploying applications on the cloud and managing infrastructure of the backend services.",
  },
  {
    title: "Google Developer Student Clubs - Universitas Pembangunan Nasional Veteran Jawa Timur",
    company: "by GDSCr",
    duration: "February 2023 - June 2023",
    description:
      "Participated in the Machine Learning Path program, where I gained hands-on experience in building machine learning models and deploying them using Google Cloud Platform. Using python, tensorflow, and other ML tech stacks provided. I collaborated with fellow students to develop innovative solutions and enhance my understanding of machine learning concepts.",
  },
];

// export const EDUCATION = [
//   {
//     degree: "Master of Science in Computer Science",
//     institution: "Stanford University",
//     duration: "September 2012 - June 2014",
//     description:
//       "Specialized in Human-Computer Interaction and Software Engineering. Completed a thesis on enhancing user experience in web applications through advanced interactive techniques. Participated in various projects involving frontend development, algorithms, and data structures. Graduated with honors.",
//   },
//   {
//     degree: "Bachelor of Science in Information Technology",
//     institution: "University of California, Berkeley",
//     duration: "September 2008 - June 2012",
//     description:
//       "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and PHP. Completed a senior project on developing an e-commerce platform. Graduated with a high GPA.",
//   },
// ];

export const SOCIAL_MEDIA_LINKS = [
  // {
  //   href: "https://x.com/",
  //   icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  // },
  // {
  //   href: "https://x.com/",
  //   icon: <FaDiscord fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://instagram.com/bagustrrw",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  // {
  //   href: "https://x.com/",
  //   icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  // },
  {
    href: "https://github.com/ssugab",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/bagus-satrio-wicaksono",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
