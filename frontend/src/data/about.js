import ibmCertificate from "../assets/images/certificates/ibm-full-stack-software-developer.webp";
import salesforceCertificate from "../assets/images/certificates/salesforce-certified-administrator.webp";

export const professionalSummary = {
  title: "About Me",
  tagline: "Leader. Problem Solver. Builder.",
  body: "I enjoy solving complex problems, building scalable solutions, and creating tools that make a real impact. I bring the discipline, adaptability, and mission-focused mindset from 20 years of military service into every software project I build.",
  mission:
    "I build software that solves real problems, simplifies complexity, and creates value for users.",
};

export const careerBackground = {
  title: "My Background",
  milestones: [
    {
      title: "20 Years in The U.S. Air Force",
      body: "Led high-performing teams, managed complex operations, and delivered results in high-pressure environments.",
      icon: "usaf",
    },
    {
      title: "Leadership & Growth",
      body: "Developed leadership, strategic thinking, and problem-solving skills that drive teams and mission success.",
      icon: "leadership",
    },
    {
      title: "Computer Science",
      body: "Pursuing a B.S. in Computer Science while building real-world projects and strengthening core foundations.",
      icon: "code",
    },
    {
      title: "Software Engineering Journey",
      body: "Continuously learning, building, and refining full-stack skills to create impactful software solutions.",
      icon: "rocket",
    },
  ],
};

export const technologyGroups = [
  {
    category: "Languages",
    icon: "code",
    tone: "violet",
    technologies: ["JavaScript (ES6+)", "Python", "HTML5", "CSS3", "SQL"],
  },
  {
    category: "Frontend",
    icon: "react",
    tone: "blue",
    technologies: [
      "React",
      "Vite",
      "Responsive Design",
      "Component-Based Architecture",
      "React Hooks",
      "State Management",
      "REST API Integration",
    ],
  },
  {
    category: "Backend",
    icon: "datastore",
    tone: "green",
    technologies: [
      "Node.js",
      "Express.js",
      "Django",
      "Flask",
      "RESTful APIs",
      "API Routing",
      "JSON Handling",
      "Authentication Concepts",
      "Microservices Concepts",
    ],
  },
  {
    category: "Databases",
    icon: "database",
    tone: "gold",
    technologies: ["MongoDB", "Mongoose", "SQL", "NoSQL", "Django ORM"],
  },
  {
    category: "Tools & DevOps",
    icon: "toolbox",
    tone: "pink",
    technologies: [
      "Git & GitHub",
      "VS Code",
      "Postman",
      "ESLint",
      "Prettier",
      "Docker",
      "Kubernetes",
      "CI/CD Concepts",
      "Debugging & Troubleshooting",
    ],
  },
  {
    category: "Cloud & Platforms",
    icon: "cloud",
    tone: "blue",
    technologies: [
      "GitHub Pages",
      "Cloud Native Concepts",
      "Salesforce Platform",
      "IBM Cloud Concepts",
    ],
  },
];

export const certifications = [
  {
    id: "ibm-full-stack-software-developer",
    title: "IBM Full Stack Software Developer",
    type: "Professional Certificate",
    issued: "Nov 9, 2024",
    image: ibmCertificate,
    technologiesCovered: {
      intro:
        "Built a strong foundation in full-stack development, including modern web technologies, databases, cloud native concepts, and DevOps practices.",
      items: [
        "Node.js & Express",
        "Git & GitHub",
        "RESTful APIs",
        "Kubernetes Basics",
        "HTML, CSS, JavaScript",
        "React Development",
        "Python Programming",
        "Databases (SQL & NoSQL)",
        "Authentication & Security",
        "Cloud Computing Basics",
        "Docker & Containers",
        "Microservices Concepts",
        "CI/CD Fundamentals",
        "Agile Development",
        "Application Deployment",
      ],
    },
    skillsDeveloped: {
      intro:
        "Gained end-to-end skills to design, develop, test, and deploy full-stack applications using modern tools and best practices.",
      items: [
        "Develop responsive front-end applications with HTML, CSS, JavaScript, and React",
        "Build robust back-end services with Node.js, Express, and Python",
        "Work with relational and NoSQL databases",
        "Implement authentication and secure APIs",
        "Deploy applications using cloud and DevOps practices",
      ],
    },
  },
  {
    id: "salesforce-certified-administrator",
    title: "Salesforce Certified Administrator",
    type: "Professional Certification",
    issued: "Oct 26, 2024",
    image: salesforceCertificate,
    technologiesCovered: {
      intro:
        "Developed the skills to manage and maintain the Salesforce platform, users, data, and security to support business needs.",
      items: [
        "Salesforce Administration",
        "User Management",
        "Security & Access Controls",
        "Data Management",
        "Reports & Dashboards",
        "Process Automation",
        "App & Feature Management",
      ],
    },
    skillsDeveloped: {
      intro:
        "Gained the knowledge and hands-on skills to effectively administer the Salesforce platform and support organizational goals.",
      items: [
        "Manage users, roles, and permissions",
        "Maintain data quality and data integrity",
        "Build reports and dashboards for insights",
        "Automate business processes",
        "Configure and manage Salesforce apps and features",
        "Ensure security and compliance",
      ],
    },
  },
];
