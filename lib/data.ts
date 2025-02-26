import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import youTube from "../public/youtube.png";
import chatApp from "../public/chat-app.png";
import lms from "../public/lms.png";
import ecommerce from "../public/e-commerce.png";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "TypeScript",
  "JavaScript",
  "React",
  "NextJs",
  "NodeJs",
  "NestJs",
  "ExpressJs",
  "Prisma",
  "MongoDB",
  "Git & Github",
  "Redux",
  "HTML",
  "CSS",
  "Tailwind",
  "Ant Design",
  "Framer Motion",
] as const;

export const experiencesData = [
  {
    title: "Post Graduated bootcamp",
    location: "Bareilly",
    description:
      "I post graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2022",
  },
  {
    title: "Front-End Developer",
    location: "Noida, sector-63, B Block",
    description: "I worked as a front-end developer for 6 months in 1 job.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Full-Stack Developer",
    location: "Dehradun, IT Park",
    description:
      "I'm now a full-stack developer working in a Prodios Labs. My stack includes React, Next.js, Nestjs, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Learning Managment System App",
    description:
      "A Learning Management System (LMS) is a platform for creating, managing, and delivering educational content and training.",
    tags: [
      "NextJs",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn/UI",
      "Prisma",
      "MongoDB",
      "Payment for Stripe",
    ],
    url: "https://learning-management-system-nextjs13-app.vercel.app",
    imageUrl: lms,
  },
  {
    title: "Chat Application",
    description:
      "The Chat Application project is a real-time messaging platform that enables users to send and receive messages instantly.",
    tags: [
      "ReactJs",
      "Javascript",
      "Tailwind CSS",
      "Daisyui",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "Socket/io",
    ],
    url: "https://chat-application-app.onrender.com/login",
    imageUrl: chatApp,
  },
  // {
  //   title: "E-commerce Admin Dashboard & Website",
  //   description:
  //     "This project includes an e-commerce website for customers to browse, search, and purchase products, along with an admin dashboard for managing the platform.",
  //   tags: [
  //     "NextJs",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "Shadcn/UI",
  //     "Prisma",
  //     "MongoDB",
  //   ],
  //   url: "",
  //   imageUrl: ecommerce,
  // },
  {
    title: "Youtube Clone",
    description:
      "The YouTube Clone project is a video-sharing platform that allows users, view, like, and comment on videos.",
    tags: ["React", "Material UI", "Tailwind", "Rapid API"],
    url: "https://youtube-video-clone-app.netlify.app",
    imageUrl: youTube,
  },
] as const;
