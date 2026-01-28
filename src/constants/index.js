import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  figma,
  shopify,
  wordpress,
  python,
  sql,
  excel,
  powerbi,
  genai,
  office,
  carrent,
  jobit,
  tripguide,
  github,
  magiczaika,
  groceries,
  ecommerce,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "BBA Grad", icon: backend },
  { title: "Web Developer", icon: web },
  { title: "Data Analyst", icon: creator },
  { title: "Operation Management ", icon: backend },
];

const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "Figma", icon: figma },
  { name: "WordPress", icon: wordpress },
  { name: "Shopify", icon: shopify },
  { name: "Python", icon: python },
  { name: "SQL", icon: sql },
  { name: "MS Excel", icon: excel },
  { name: "Power BI", icon: powerbi },
  { name: "Gen AI", icon: genai },
  { name: "Git Hub", icon: github },
];

const experiences = [
  {
    title: "Developer & Founder",
    company_name: "Freelance / Self",
    icon: web,
    iconBg: "#383E56",
    date: "Present",
    points: [
      "Developing and maintaining web applications.",
      "Collaborating with cross-functional teams.",
      "Implementing responsive design.",
    ],
  },
  {
    title: "Data Analyst",
    company_name: "Self / Projects",
    icon: python,
    iconBg: "#E6DEDD",
    date: "Sept 2025 - Present",
    points: [
      "Analyzing data sets to extract meaningful insights.",
      "Creating visualizations using Python and PowerBI.",
    ],
  },
  {
    title: "Growth & Strategy Intern",
    company_name: "VMVP GLOBAL INDIA PVT. LTD.",
    icon: backend,
    iconBg: "#383E56",
    date: "Mar 2025 - Oct 2025",
    points: [
      "Assist in developing and executing growth strategies.",
      "Conduct market research and data analysis.",
    ],
  },
  {
    title: "Operation Management Intern",
    company_name: "Athical PVT. LTD.",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - July 2024",
    points: [
      "Assist in implementing and refining operational strategies.",
      "Supervise and mentor a team of specialists.",
    ],
  },
  {
    title: "Lead Generation Supervisor Intern",
    company_name: "Athical PVT. LTD.",
    icon: mobile,
    iconBg: "#383E56",
    date: "Nov 2023 - Apr 2024",
    points: [
      "Gain hands-on experience in lead generation strategies.",
      "Develop team leadership skills.",
    ],
  },
  {
    title: "Lead Generation Intern",
    company_name: "Athical PVT. LTD.",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "July 2023 - Oct 2023",
    points: [
      "Acquire practical experience in lead generation.",
      "Develop proficiency in identifying potential leads.",
    ],
  },
  {
    title: "Marketing Intern",
    company_name: "Corizo",
    icon: mobile,
    iconBg: "#383E56",
    date: "May 2023 - Jun 2023",
    points: [
      "Gain first hand experience in marketing and sales.",
      "Develop skills in creating marketing campaigns.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
];

const projects = [
  {
    name: "MagicZaika",
    description: "Web-based platform for Indegrediants & Masala ",
    tags: [
      { name: "shopify", color: "blue-text-gradient" },
      { name: "figma", color: "green-text-gradient" },
      { name: "plugins", color: "pink-text-gradient" },
    ],
    image: magiczaika,
    source_code_link: "https://github.com/",
  },
  {
    name: "Groceries",
    description: "Web application that enables users to shop online.",
    tags: [
      { name: "wordpress", color: "blue-text-gradient" },
      { name: "plugins", color: "green-text-gradient" },
      { name: "css", color: "pink-text-gradient" },
    ],
    image: groceries,
    source_code_link: "https://github.com/",
  },
  {
    name: "E Commerce",
    description: "A website designed for e-commerce products.",
    tags: [
      { name: "wordpress", color: "blue-text-gradient" },
      { name: "custom css", color: "green-text-gradient" },
      { name: "plugins", color: "pink-text-gradient" },
    ],
    image: ecommerce,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };