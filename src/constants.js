// Skills Section Logo's
import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import sassLogo from "./assets/tech_logo/sass.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactjsLogo from "./assets/tech_logo/reactjs.png";
import angularLogo from "./assets/tech_logo/angular.png";
import reduxLogo from "./assets/tech_logo/redux.png";
import nextjsLogo from "./assets/tech_logo/nextjs.png";
import tailwindcssLogo from "./assets/tech_logo/tailwindcss.png";
import gsapLogo from "./assets/tech_logo/gsap.png";
import materialuiLogo from "./assets/tech_logo/materialui.png";
import bootstrapLogo from "./assets/tech_logo/bootstrap.png";
import springbootLogo from "./assets/tech_logo/springboot.png";
import nodejsLogo from "./assets/tech_logo/nodejs.png";
import expressjsLogo from "./assets/tech_logo/express.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import mongodbLogo from "./assets/tech_logo/mongodb.png";
import firebaseLogo from "./assets/tech_logo/firebase.png";
import cLogo from "./assets/tech_logo/c.png";
import cppLogo from "./assets/tech_logo/cpp.png";
import javaLogo from "./assets/tech_logo/java.png";
import pythonLogo from "./assets/tech_logo/python.png";
import typescriptLogo from "./assets/tech_logo/typescript.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import mcLogo from "./assets/tech_logo/mc.png";
import figmaLogo from "./assets/tech_logo/figma.png";
import netlifyLogo from "./assets/tech_logo/netlify.png";
import vercelLogo from "./assets/tech_logo/vercel.png";
import postgreLogo from "./assets/tech_logo/postgre.png";
import csharpLogo from "./assets/tech_logo/csharp.png";

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
import taskremLogo from "./assets/work_logo/task_rem.png";
import cmLogo from "./assets/work_logo/cm.png";

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
    desc: "I have completed my Master's degree (MCA) in Computer Applications from GLA University, Mathura. During my time at GLA, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
    degree: "Bachalor of Robotics & Automation Engineering",
  },
  {
    id: 1,
    img: dp,
    school: "D P Mehta Junior College Lonavala, Pune",
    date: "June 2021 - May 2022",
    grade: "64.33%",
    desc: "I completed my Bachelor's degree in Computer Science (B.Sc.) from BSA College, Mathura. Throughout my studies, I was immersed in a variety of subjects that deepened my understanding of computing and technology. From exploring Data Structures and Algorithms to diving into Web Development and Database Management Systems, I gained practical insights into the world of software development. My time at BSA College allowed me to work on projects that applied theoretical concepts to real-world problems.",
    degree: "HSC - 12th (Science) ",
  },
  {
    id: 2,
    img: abbhsLogo,
    school: "Adv Bapusaheb Bhonde High School Lonavala, Pune",
    date: "June 2019 - May 2018",
    grade: "80%",
    desc: "I completed my class 12 education from Vatsalya Public School, Govardhan, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Computer Science.",
    degree: "SSC - 10th ( State Board ) ",
  },
];

export const projects = [
  {
    id: 0,
    title: "Chat WebApp",
    description:
      "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
    image: chat,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "API", "Node.js", "GitHub"],
    github: "https://github.com/OmkarYelsange/Chat-App",
    webapp: "",
  },
  {
    id: 1,
    title: "AI ChatBot WebApp",
    description:
      "A full-stack quiz-based platform designed for GATE/UGC NET students to practice previous year questions and create customized tests. The platform offers comprehensive profile stats and detailed results, helping students track and improve their preparation journey effectively.",
    image: aichatbot,
    tags: [
      "Python",
      "Google API",
      "React JS",
      "Flask",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    github: "https://github.com/OmkarYelsange/AI-ChatBot",
    webapp: "",
  },
  {
    id: 2,
    title: "AirBnB Clone App",
    description:
      "A React-based web application that provides movie recommendations based on different criteria, such as genres, user preferences, and popular trends. The intuitive design and smooth experience make it a go-to app for movie enthusiasts.",
    image: airbnb,
    tags: ["Node.js", "API", "HTML", "CSS", "JavaScript", "Express", "GitHub"],
    github: "https://github.com/OmkarYelsange/AirBnB-Clone-App",
    webapp: "",
  },
  {
    id: 3,
    title: "Ciso Assistent Clone ",
    description:
      "An efficient and customizable NPM package for validating email addresses. Built using React.js and Node.js, it provides robust validation features to help developers ensure that email inputs meet required formats and standards.",
    image: ciso,
    tags: ["React JS", "HTML", "CSS", "NPM", "Tailwind CSS", "GitHub"],
    github: "https://github.com/OmkarYelsange/Ciso-Assistent-Clone",
    webapp: "",
  },
  {
    id: 4,
    title: "React E-Commerce Website",
    description:
      "A productivity-boosting Chrome extension designed to help users manage and remember their daily tasks. Built using JavaScript, it offers a simple interface with reminders and task notifications to keep users on track.",
    image: taskremLogo,
    tags: ["React JS", "JavaScript", "HTML", "CSS", "Netlify", "API", "GitHub"],
    github: "https://github.com/OmkarYelsange/React-Project-E-Commerce-Website",
    webapp: "https://react-e-commerce-webapp.netlify.app/",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "The official website for Webverse Digital, a creative digital marketing agency. Built using HTML, CSS, and JavaScript, it features visually appealing animations and a clean design to showcase the agency's services.",
    image: portfolio,
    tags: ["HTML", "CSS", "JavaScript", "React JS", "Vercel", "GitHub"],
    github: "https://github.com/OmkarYelsange/Portfolio",
    webapp: "",
  },
  {
    id: 6,
    title: "Amazon Frontend Clone",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: amazon,
    tags: ["HTML", "CSS", "GitHub"],
    github: "https://github.com/OmkarYelsange/Amazon-Frontend-Clone",
    webapp: "",
  },
  {
    id: 7,
    title: "YouTube Video & Audio Downloader",
    description:
      "An ed-tech platform where users can access tech and coding-related blogs, notes, interview questions, e-books, and premium content with payment integration. Built with full-stack technologies for a seamless learning experience.",
    image: cmLogo,
    tags: ["React JS", "Node.js", "MongoDB", "Express", "Payment Integration"],
    github: "https://github.com/OmkarYelsange/YouTube-Video-Audio-Downloader",
    webapp: "",
  },
];
