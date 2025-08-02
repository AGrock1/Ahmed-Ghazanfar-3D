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
  ned,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  westpointek,
  selfbrand,
  beaconhouse,

} from "../assets";

import latech from "../assets/company/latech.png";
import universities from "../assets/company/universities.png";
import test from "../assets/company/test.png";
import linux from "../assets/tech/linux.png";
import wireshark from "../assets/tech/wireshark.png";
import nedgame from "../assets/nedgame.png";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Cybersecurity Learner", icon: web },
  { title: "Robotics Project Builder", icon: mobile },
  { title: "Entrepreneur", icon: backend },
  { title: "Athlete (Shot Put)", icon: creator },
];

const technologies = [
  { name: "Linux", icon: linux },
  { name: "wireshark", icon: wireshark },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "git", icon: git },
  { name: "figma", icon: figma },
  { name: "docker", icon: docker },
];

const experiences = [
  {
    title: "Intern",
    company_name: "NED University of Engineering and Technology",
    icon: ned,
    iconBg: "#282C34",
    date: "July 2024 - August 2024",
    points: [
      "Completed a two-month internship, gaining exposure to engineering workflows and technical projects.",
      "Assisted in research, system analysis, and technical documentation to strengthen computer science knowledge.",
      "Collaborated with mentors and peers to build problem-solving and project coordination skills.",
    ],
  },
  {
    title: "Head of Amazon Department",
    company_name: "Westpointek (Private) Limited",
    icon: westpointek,
    iconBg: "#383E56",
    date: "September 2022 - March 2023",
    points: [
      "Promoted to lead the Amazon department after excelling as a Virtual Assistant.",
      "Managed wholesale operations including sourcing, listings, inventory control, and team coordination.",
      "Developed strategies to optimize sales performance and reduce operational inefficiencies.",
      "Mentored new hires, overseeing training and quality assurance.",
    ],
  },
  {
    title: "Amazon Virtual Assistant",
    company_name: "Westpointek (Private) Limited",
    icon: westpointek,
    iconBg: "#E6DEDD",
    date: "June 2022 - September 2022",
    points: [
      "Assisted in managing Amazon and Daraz seller accounts for multiple clients.",
      "Created and optimized product listings, pricing strategies, and PPC campaigns.",
      "Handled customer queries and ensured smooth order fulfillment.",
      "Contributed to the company’s revenue growth by applying e-commerce best practices.",
    ],
  },
  {
    title: "Entrepreneur & Blogger",
    company_name: "Self-employed",
    icon: selfbrand,
    iconBg: "#4B5563",
    date: "2021 - Present",
    points: [
      "Founded and ran a small home business, managing operations, marketing, and client engagement.",
      "Built and managed a blog, writing content on technology, entrepreneurship, and personal growth.",
      "Developed basic mobile apps and websites, enhancing digital presence.",
      "Created branding and designs using Canva to support business and blogging activities.",
    ],
  },
  {
    title: "Student Leader & Competitor",
    company_name: "Beaconhouse College Program",
    icon: beaconhouse,
    iconBg: "#1F2937",
    date: "2020 - Present",
    points: [
      "Vice President of the STEAM Society; organized STEM events and competitions.",
      "Represented school in national and international competitions like NASA Space Apps and World Scholars Cup.",
      "Earned honors including Eureka 4.0, Hackathon 2.0, SciVision 1.0, SciMatrix 2.0, and ICATS Contest.",
      "Balanced academics with athletics, competing in Shot Put at the Pakistan Nationals (5th position in 2024).",
    ],
  },
];

// === new education timeline export ===
const educationTimeline = [
  {
    title: "O Levels - Beaconhouse",
    company_name: "Beaconhouse School System",
    icon: beaconhouse,
    iconBg: "#4B5563",
    date: "August 2020 - June 2023",
    points: [
      "Completed O Levels in Science and Engineering stream.",
      "A* in Computer Science and Physics.",
      "A in Mathematics, Chemistry, Biology, Pakistan Studies, Islamiyat.",
      "B in Urdu and English.",
    ],
  },
  {
    title: "A Levels - Beaconhouse",
    company_name: "Beaconhouse College Program",
    icon: beaconhouse,
    iconBg: "#1F2937",
    date: "August 2023 - June 2025",
    points: [
      "Studying A Levels with focus on Physics, Math, and Chemistry.",
      "Got A in Physics and B in Math and Chemistry (AS Level).",
      "A2 results pending (August 2025).",
    ],
  },
  {
    title: "Standardized Testing",
    company_name: "SAT & IELTS",
    icon: test,
    iconBg: "#6B7280",
    date: "2024 - 2025",
    points: [
      "SAT: 1230 (August 24, 2024).",
      "IELTS: Band 7 overall (January 20, 2025).",
    ],
  },
  {
    title: "University Acceptances",
    company_name: "Multiple Offers (Total ~USD 426,000+)",
    icon: universities,
    iconBg: "#9CA3AF",
    date: "2025 Admissions",
    points: [
      "Accepted at the following universities with scholarships:",
      "• Knox College – $196,000",
      "• Marquette University – $108,000",
      "• SUNY Buffalo – $60,000",
      "• Louisiana Tech – $55,000",
      "• University of Alberta – $5,920",
      "• University of Calgary – $1,110",
      "• Arizona State, Alabama, Hofstra, LIU, HKBU, Habib – no aid/unknown",
    ],
  },
  {
    title: "Bachelor's in Computer Science",
    company_name: "Louisiana Tech University",
    icon: latech,
    iconBg: "#E6DEDD",
    date: "2025 - 2029",
    points: [
      "Chose Louisiana Tech University for its strong Computer Science program.",
      "Offered a $55,000 scholarship.",
      "Enrolled in the Bachelor's in Computer Science program starting Fall 2025.",
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
    name: "Amazon Wholesale FBA Course",
    description:
      "Comprehensive Amazon Wholesale FBA course in Urdu/Hindi. Expert guidance, practical insights, and a clear path to building a profitable Amazon business. Designed for both beginners and experienced sellers.",
    tags: [
      { name: "e-commerce", color: "blue-text-gradient" },
      { name: "amazon-fba", color: "green-text-gradient" },
      { name: "english/urdu", color: "pink-text-gradient" },
    ],
    image: carrent, // replace with a custom thumbnail if available
    source_code_link: "https://www.youtube.com/playlist?list=PLBFPmLJMXVTtvn5Anave8vam7D6MB-c0W",
  },
  {
    name: "Edvon Robotics League 5.0 – Racing Car",
    description:
      "Certificate project from Edvon Robotics League 5.0. Built a racing car demonstrating robotics principles, programming, and engineering, showcasing collaboration, problem-solving, and hands-on STEM excellence.",
    tags: [
      { name: "robotics", color: "blue-text-gradient" },
      { name: "STEM", color: "green-text-gradient" },
      { name: "hardware", color: "pink-text-gradient" },
    ],
    image: jobit, // replace with a relevant project image or certificate snapshot
    source_code_link:
      "https://docs.google.com/presentation/d/1rJ_lP4kbluVV8GvhrSUhSV6-EOUdqATv/edit?usp=sharing&ouid=110304740403140757758&rtpof=true&sd=true",
  },
  {
    name: "Multi-Tasking Human-Sized Robot",
    description:
      "Developed a versatile robot capable of phone charging, gesture-controlled movement, room cleaning, surveillance, night vision, voice-controlled function toggling via Google Assistant, and Bluetooth audio—combining automation and smart home utility.",
    tags: [
      { name: "robotics", color: "blue-text-gradient" },
      { name: "automation", color: "green-text-gradient" },
      { name: "IoT", color: "pink-text-gradient" },
    ],
    image: tripguide, // replace with an actual robot image or demo thumbnail
    source_code_link: "https://youtu.be/kKnfkmkKtmU",
  },
  {
    name: "Metaverse Game (Internship at NED)",
    description:
      "Created a Unity-based Metaverse game during internship. Explored Metaverse concepts, built interactive environments, and integrated assets modeled in Blender to gain hands-on experience in immersive development.",
    tags: [
      { name: "unity", color: "blue-text-gradient" },
      { name: "blender", color: "green-text-gradient" },
      { name: "metaverse", color: "pink-text-gradient" },
    ],
    image: nedgame, // placeholder; swap for a screenshot from the game
    source_code_link: "https://youtu.be/VO-BIhPwxqw",
  },
];


export { services, technologies, experiences, educationTimeline, testimonials, projects };
