// Removed invalid import: 'three/tsl' does not exist
import {
  backend,
  mobile,
  web,
  github,
  nodejs,
  aws,
  postgresql,
  menu,
  git,
  javascript,
  html,
  css,
  mongodb,
  expressjs,
  reactjs,
  typescript,
  restapi,
  tcs,
  appalto,
  persistent,
  coursebundler,
  resumebuilder,
  netflixclone,
  MovieInfoGuide
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Full-stack Developer",
      icon: mobile,
    },
    {
      title: "Cloud Engineer",
      icon: backend,
    }
  ];
  
  const technologies = [
    {
      name: "NodeJs",
      icon: nodejs,
    },
    {
      name: "ExpressJs",
      icon: expressjs,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "PostgreSQL",
      icon: postgresql,
    },
    {
      name: "REST API",
      icon: restapi,
    },
    {
      name: "HTML",
      icon: html,
    },
    {
      name: "CSS",
      icon: css,
    },
    {
      name: "JS",
      icon: javascript,
    },
    {
      name: "Git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      "title": "Full Stack Developer",
      "company_name": "Tata Consultancy Services(TCS)",
      "icon": tcs,
      "iconBg": "#7F7F7F",
      "date": "January 2025 - Present",
      "points": [
        "Designed and developed scalable microservices and REST APIs using Node.js, handling high-volume workflows and improving system throughput by ~35%",
        "Implemented asynchronous processing and event-driven workflows (Redis, BullMQ), reducing latency and improving system reliability by ~30%",
        "Optimized database performance across MongoDB and relational systems, improving query efficiency and reducing response time by ~30%",
        "Built and deployed cloud-native applications on AWS (Lambda, API Gateway, DynamoDB), improving scalability and system availability by ~40%",
        "Performed performance tuning, debugging, and production issue resolution, improving system stability and reducing downtime by ~25%."
      ],
      "skills": ["Node.Js", "ExpressJs", "AWS Lambda", "AWS API Gateway", "AWS SQS", "AWS SNS", "AWS Cloudwatch", "PostgreSQL", "MongoDB", "Redis", "BullMQ", "Microservices Architecture", "REST API Development", "Cloud-Native Application Development", "Performance Optimization"]
    },
    {
      "title": "Developer",
      "company_name": "Appalto Electronics",
      "icon": appalto,
      "iconBg": "#7F7F7F",
      "date": "Jan 2024 - Jan 2025",
      "points": [
        "Developed backend services and APIs, improving application efficiency and system performance by ~30%",
        "Supported real-time system workflows and asynchronous processing, improving reliability and execution efficiency",
        "Collaborated with cross-functional teams to deliver full-stack features and scalable solutions, improving delivery timelines by ~20%."
      ],
      "skills": ["Node.Js", "MySQL", "React", "ExpressJs", "API Development", "Database Migration", "Team Leadership","C Development", "System Optimization", "Cross-functional Collaboration"]
    },
    {
      "title": "Martian Intern",
      "company_name": "Persistant Systems",
      "icon": persistent,
      "iconBg": "#7F7F7F",
      "date": "July 2023 - August 2023",
      "points": [
        "Designed, implemented, and optimized databases.",
        "Analyzed and implemented various data structures (arrays, linked lists, trees, graphs).",
        "Developed a keen sense of problem-solving through hands-on experience."
      ],
      "skills": ["Data Structures", "Algorithms", "SQL", "Java", "REST API"]
    }
  ];
  
  const projects = [
    {
      name: "CourseBundler - Subscription Learning Platform",
      description:
      "Built a full-stack educational subscription platform that aggregates and manages online courses under a unified membership model. Features secure authentication, subscription management, course catalog browsing, user dashboards, and payment workflow integration. Designed to improve course discoverability and provide a seamless learning experience.",
      tags: [
      {
      name: "mern-stack",
      color: "blue-text-gradient",
      },
      {
      name: "subscription-platform",
      color: "green-text-gradient",
      },
      {
      name: "authentication",
      color: "pink-text-gradient",
      },
      ],
      image: coursebundler,
      source_code_link: "https://github.com/Naman21-web/Coursebundlermain",
    },

    {
      name: "ResumeBuilder - Smart Resume Creation Platform",
      description:
      "Built a full-stack resume creation platform that helps users generate professional, ATS-friendly resumes through an intuitive workflow. Implemented user authentication, dynamic form management, real-time resume preview, template customization, and PDF export capabilities. Focused on improving user experience through responsive design, reusable React components, efficient backend APIs, and AI-assisted content enhancement.",
      tags: [
      {
      name: "reactjs",
      color: "blue-text-gradient",
      },
      {
      name: "nodejs",
      color: "green-text-gradient",
      },
      {
      name: "mongodb",
      color: "pink-text-gradient",
      },
      ],
      image: resumebuilder,
      source_code_link: "https://github.com/Naman21-web/ResumeBuilder",
    },

    {
      name: "MovieBooking Backend - Scalable Ticket Booking API",
      description:
      "Developed a backend system for an online movie ticket booking platform using Node.js, Express.js, and MongoDB. Implemented user authentication and authorization, movie and theater management, show scheduling, seat availability tracking, booking workflows, and payment-ready order management APIs. Designed RESTful services with proper validation, error handling, and database optimization to support concurrent booking requests while maintaining data consistency.",
      tags: [
      {
      name: "nodejs",
      color: "blue-text-gradient",
      },
      {
      name: "expressjs",
      color: "green-text-gradient",
      },
      {
      name: "mongodb",
      color: "pink-text-gradient",
      },
      ],
      image: MovieInfoGuide,
      source_code_link: "https://github.com/Naman21-web/MovieBooking-Backend",
    },

    {
      name: "Netflix Clone - Streaming Platform UI",
      description:
      "Built a responsive Netflix-inspired streaming platform clone focused on delivering a modern user experience and pixel-perfect UI design. Implemented dynamic movie browsing, categorized content sections, responsive layouts, interactive banners, and seamless navigation across devices. Integrated movie data APIs to display trending, popular, and top-rated content while optimizing component reusability and frontend performance.",
      tags: [
      {
      name: "reactjs",
      color: "blue-text-gradient",
      },
      {
      name: "tmdb-api",
      color: "green-text-gradient",
      },
      {
      name: "responsive-design",
      color: "pink-text-gradient",
      },
      ],
      image: netflixclone,
      source_code_link: "https://github.com/Naman21-web/Netflix_Clone",
    }



  ];
  
  export { services, technologies, experiences, projects  };