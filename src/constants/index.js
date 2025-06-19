import { uint } from "three/examples/jsm/nodes/Nodes.js";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  KMB,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  DEMA,
  PERMI,
  UIN,
  BRIN,
  BUDAK,
  GANA,
  KANAL,
  SEARCH,
  ALPIT,
  KOPMA,
  VIDEO,
  ZONA_FARM,
  FlexBelt,
  GMAT,
  ZONA_AIOT,
  ZONA_MOBILE,
  ASETMU,
  BAMBOO_MAPPER,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "LinkedIn",
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/ihza-surya-pratama-a642001a0",
  },
];

const services = [
  {
    title: "Mobile Developer",
    icon: nodejs,
  },
  {
    title: "Hardware Engineer",
    icon: javascript,
  },
  {
    title: "Backend Engineer",
    icon: threejs,
  },
  {
    title: "Data Analyst",
    icon: threejs,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "CTO & Lead Engineer",
    company_name: "Zona Farm",
    icon: ZONA_FARM,
    iconBg: "#0E5A3E",
    date: "August 2024 - Present",
    points: [
      "Led the technical team to develop a real-time IoT-based poultry farm automation system.",
      "Ensure system able to deliver industrial grade performance and quality.",
      "Translate user story to enterprise application / system feature.",
      "Planned product architecture, R&D, and long-term production pipeline.",
      "Actively monitor and review user feedback from the product and act on it.",
    ],
  },
  {
    title: "Full Time - Hardware Engineer",
    company_name: "Zona Farm",
    icon: ZONA_FARM,
    iconBg: "#0E5A3E",
    date: "August 2024 - Present",
    points: [
      "Design flow diagram and scalable architecture as baseline for further development.",
      "Developed local backend systems with Flask and SQLite, and frontend dashboard using Flutter.",
      "Implemented actuator control and sensor data handling via MQTT and serial communication.",
      "Research type control system algorithm for different type of broiler chicken cage.",
      "Write set of integration test, ensure minimum possible bug on development stage.",
    ],
  },
  {
    title: "Internship",
    company_name: "Badan Riset Inovasi Nasional",
    icon: BRIN,
    iconBg: "#E6DEDD",
    date: "February 2024 - July 2024",
    points: [
      "Developed interactive geospatial data in Semarang application using Flutter.",
      "Developed embedded software for landslide detection and water monitoring on remote place using LoRa and IoT.",
      "Ensured robust and stable performance for field-deployed VEWS (Very Early Warning System).",
      "Maintained data accuracy and uptime in remote conditions.",
    ],
  },
  {
    title: "Contract - Hardware Engineer",
    company_name: "Gadjah Mada Aerospace Team",
    icon: GMAT,
    iconBg: "#13445a",
    date: "August 2022 - February 2024",
    points: [
      "Designed and programmed the onboard systems of a CanSat for telemetry, environmental sensing, and descent control.",
      "Developed embedded firmware using C++ to manage sensor data acquisition, processing, and real-time transmission.",
      "Integrated LoRa communication for long-range data downlink during flight and recovery phases.",
      "Collaborated with multidisciplinary team members to ensure system reliability, payload integration, and flight-readiness.",
      "Conducted rigorous ground testing and simulations to validate performance under mission constraints.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Zona AIoT",
    description:
      "Automatic cooling system and monitoring designed for Broiler's chicken needs. Intuitive UI that can be accessed with touchscreen display.",
    tags: [
      {
        name: "arduino",
        color: "blue-text-gradient",
      },
      {
        name: "MQTT",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Flutter",
        color: "pink-text-gradient",
      },
    ],
    image: ZONA_AIOT,
    source_code_link: "https://zonafarm.site",
  },
  {
    name: "Zona Apps",
    description:
      "Farmer daily logging application integrated with AI for operational suggestion and monitoring broiler's growth and current condition.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "PostgreSQL",
        color: "green-text-gradient",
      },
      {
        name: "NestJS",
        color: "pink-text-gradient",
      },
    ],
    image: ZONA_MOBILE,
    source_code_link: "https://zonafarm.site",
  },
  {
    name: "AsetMU",
    description:
      "Muhammadiyah assets management for documenting land, building, sertificate, and other assets that can be accessed using interactive application",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "NestJS",
        color: "green-text-gradient",
      },
      {
        name: "Google Maps",
        color: "pink-text-gradient",
      },
    ],
    image: ASETMU,
    source_code_link: "https://github.com/izasoerya/simastemu",
  },
  {
    name: "Bamboo App",
    description:
      "A mobile application that parses geospatial data to display interactive marker land data on a map. Users can tap on areas to view detailed properties.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "GIS",
        color: "green-text-gradient",
      },
      {
        name: "OpenStreetMap",
        color: "pink-text-gradient",
      },
    ],
    image: BAMBOO_MAPPER, // Replace with actual image import reference
    source_code_link: "https://github.com/izasoerya/bamboo_app", // Update if available
  },
  {
    name: "SiMandja",
    description:
      "A health management app for posyandu to log teen health records periodically. Combine with knowledge from expert, this app can provide verified health recommendation.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "Supabase",
        color: "green-text-gradient",
      },
      {
        name: "Android",
        color: "pink-text-gradient",
      },
    ],
    image: KOPMA, // Replace with actual image import reference
    source_code_link: "https://github.com/izasoerya/simanja_app", // Update if available
  },
  {
    name: "Flexbelt",
    description:
      "An IoT-based wearable device with a mobile app for real-time posture monitoring and therapy. This device utilize heating element and sensor to ensure user posture health.",
    tags: [
      {
        name: "Flutter",
        color: "blue-text-gradient",
      },
      {
        name: "IoT",
        color: "green-text-gradient",
      },
      {
        name: "C++",
        color: "pink-text-gradient",
      },
    ],
    image: FlexBelt, // Replace with actual image import reference
    source_code_link: "https://github.com/izasoerya/flex-belt-frontend", // Update if available
  },
];

export { services, technologies, experiences, testimonials, projects };
