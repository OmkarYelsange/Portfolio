// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";

// Experience Section Logo's
import ddiLogo from "./assets/company_logo/ddi.png";
import codecLogo from "./assets/company_logo/codec.png";
import codtechLogo from "./assets/company_logo/codtech.png";

// Education Section Logo's
import dypcoeLogo from "./assets/education_logo/dypcoe1.jpg";
import dp from "./assets/education_logo/dp.png";
import abbhsLogo from "./assets/education_logo/abbhs.png";

// Project Section Logo's
import chat from "./assets/work_logo/chatapp.png";
import aichatbot from "./assets/work_logo/chatbot.png";
import airbnb from "./assets/work_logo/airbnb.png";
import ciso from "./assets/work_logo/ciso.png";
import portfolio from "./assets/work_logo/portfolio.png";
import amazon from "./assets/work_logo/amazon.png";
import ecommerceLogo from "./assets/work_logo/ecommerce.png";
import deepseekLogo from "./assets/work_logo/deepseek.png";
import ytLogo from "./assets/work_logo/yt.png";

export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React JS", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Next JS", logo: nextjsLogo },
      { name: "TypeScript", logo: typescriptLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node JS", logo: nodejsLogo },
      { name: "Express JS", logo: expressjsLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "Python", logo: pythonLogo },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "TypeScript", logo: typescriptLogo },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "Netlify", logo: netlifyLogo },
    ],
  },
  // {
  //   title: "Others",
  //   skills: [
  //     { name: "Communication", logo: null },
  //     { name: "Teamwork", logo: null },
  //     { name: "Active Learner", logo: null },
  //     { name: "Adaptability", logo: null },
  //     { name: "Problem-Solving", logo: null },
  //     { name: "Creativity", logo: null },
  //   ],
  // },
];

export const experiences = [
  {
    id: 0,
    img: ddiLogo,
    role: "Full Stack Developer",
    company: "Drushya Digital India Pvt. Ltd.",
    date: "Aug 2025 - Present",
    desc: "Developing and maintaining scalable web applications with modern front-end and back-end technologies. Building and integrating RESTful APIs and managing databases for efficient data handling. Ensuring responsive UI/UX and optimized performance across devices.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "Node JS",
      "Tailwind CSS",
      "MongoDB",
      "Redux",
      "Python",
      "Git",
      "GitHub",
      "VS Code",
    ],
  },
  {
    id: 1,
    img: codtechLogo,
    role: "AI Intern",
    company: "CodTech IT Solutions Pvt Ltd.",
    date: "January 2025 - February 2025",
    desc: "Gained hands-on experience in NLP, prompting and Generative AI. Developed end-to-end AI solutions using Python and web technologies. Worked on model training, feature engineering, and deployment",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "AI",
      "Python",
      "APIs",
      "Prompt Engineering",
    ],
  },
  {
    id: 2,
    img: codecLogo,
    role: "AI Intern",
    company: "Codec Technologies Pvt. Ltd.",
    date: "January 2025 - February 2025",
    desc: "Gained hands-on experience in NLP, prompting and Generative AI. Developed end-to-end AI solutions using Python and web technologies. Worked on model training, feature engineering, and deployment",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "AI",
      "Python",
      "APIs",
      "Prompt Engineering",
    ],
  },
];

export const education = [
  {
    id: 0,
    img: dypcoeLogo,
    school: "D Y Patil College of Engineering Akurdi, Pune",
    date: "July 2022 - Present",
    grade: "8.5 CGPA",
    desc: "",
    degree: "Bachalor of Robotics & Automation Engineering",
  },
  {
    id: 1,
    img: dp,
    school: "D P Mehta Junior College Lonavala, Pune",
    date: "June 2021 - May 2022",
    grade: "64.33%",
    desc: "",
    degree: "HSC - 12th ( Science ) ",
  },
  {
    id: 2,
    img: abbhsLogo,
    school: "Adv Bapusaheb Bhonde High School Lonavala, Pune",
    date: "June 2019 - May 2018",
    grade: "80%",
    desc: "",
    degree: "SSC - 10th ( State Board ) ",
  },
];

export const projects = [
  {
    id: 0,
    title: "React E-Commerce Website",
    description:
      "Building an E-Commerce Website using React and external APIs ",
    image: ecommerceLogo,
    tags: ["React JS", "JavaScript", "HTML", "CSS", "Vercel", "API", "GitHub"],
    github: "https://github.com/OmkarYelsange/React-Project-E-Commerce-Website",
    webapp: "https://react-project-e-commerce-website.vercel.app/",
  },
  {
    id: 1,
    title: "Chat WebApp",
    description:
      "Built a real-time messaging app with secure authentication, live chat, and active user presence.",
    image: chat,
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React JS",
      "API",
      "Node.js",
      "GitHub",
      "Firebase",
    ],
    github: "https://github.com/OmkarYelsange/Chat-App",
    webapp: "",
  },
  {
    id: 2,
    title: "DeepSeek Clone",
    description:
      "Developed an AI-powered chatbot by integrating Google Gemini API for intelligent, context-aware responses.",
    image: deepseekLogo,
    tags: [
      "React Js",
      "MongoDB",
      "Clerk",
      "API",
      "Tailwindcss",
      "HTML",
      "CSS",
      "GitHub",
    ],
    github: "https://github.com/OmkarYelsange/Amazon-Frontend-Clone",
    webapp: "https://deep-seek-clone-coral.vercel.app/",
  },
  {
    id: 3,
    title: "AirBnB Clone App",
    description:
      "Currently developing a full-stack web application replicating Airbnb core features (property listings, booking, authentication).",
    image: airbnb,
    tags: ["Node.js", "API", "HTML", "CSS", "JavaScript", "Express", "GitHub"],
    github: "https://github.com/OmkarYelsange/AirBnB-Clone-App",
    webapp: "",
  },
  {
    id: 4,
    title: "Ciso Assistent Clone ",
    description: "Building a CURD App using React and Django.",
    image: ciso,
    tags: ["React JS", "HTML", "CSS", "NPM", "Tailwind CSS", "GitHub"],
    github: "https://github.com/OmkarYelsange/Ciso-Assistent-Clone",
    webapp: "",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description: "My Portfolio Website ",
    image: portfolio,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Vercel", "GitHub"],
    github: "https://github.com/OmkarYelsange/Portfolio",
    webapp: "https://omkaryelsange.vercel.app/",
  },
  // {
  //   id: 6,
  //   title: "AI ChatBot WebApp",
  //   description: "A full-stack Real time chatting app",
  //   image: aichatbot,
  //   tags: [
  //     "Python",
  //     "Google API",
  //     "React JS",
  //     "Flask",
  //     "HTML",
  //     "CSS",
  //     "JavaScript",
  //   ],
  //   github: "https://github.com/OmkarYelsange/AI-ChatBot",
  //   webapp: "",
  // },
  {
    id: 7,
    title: "YouTube Video & Audio Downloader",
    description: "",
    image: ytLogo,
    tags: ["Python", "Flask", "HTML", "CSS", "Firebase"],
    github: "https://github.com/OmkarYelsange/YouTube-Video-Audio-Downloader",
    webapp: "",
  },
  {
    id: 8,
    title: "Amazon Frontend Clone",
    description:
      "Built frontend clone of the Amazon.com homepage, using HTML5 and CSS3.",
    image: amazon,
    tags: ["HTML", "CSS", "GitHub"],
    github: "https://github.com/OmkarYelsange/Amazon-Frontend-Clone",
    webapp: "",
  },
];
