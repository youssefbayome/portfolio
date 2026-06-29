import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { IoCodeSlashOutline } from "react-icons/io5";

import { LuGraduationCap } from 'react-icons/lu';
import { FaPlaneDeparture } from 'react-icons/fa';
import corpcommentImg from '@/public/corpcomment.png';
import masrawy from '@/public/masrawy.png';
import wordanalyticsImg from '@/public/mei.png';
import masrawyWeb from '@/images/projects/MasrawyLogo.jpg';
import yallKora from '@/images/projects/yallakora.jpg';
import MenuLingo from '@/images/projects/menusling.png';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Skills',
    hash: '#skills',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const experiencesData = [
  {
    title: 'Graduated from Business Information system Helwan University',
    location: 'Cairo',
    description: '',
    icon: React.createElement(LuGraduationCap),
    date: 'Jan 2018 - Aug 2022',
  },
  {
    title: 'Graduated from MERN stack Course',
    location: 'Cairo',
    description:
      'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
    icon: React.createElement(LuGraduationCap),
    date: 'Jan 2021 - July 2021',
  },
  {
    title: 'Front-End Developer in Gemini Media',
    location: 'Cairo',
    description:
      'Worked as front-end developer building internal and out-source projects, including Masrawy, Yalla Kora, and an internal HR system.',
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2022 - Mar 2025',
  },
  {
    title: 'Studying Japanese at ISI Japanese Language School',
    location: 'Tokyo',
    description:
      'Moved to Japan to study Japanese full-time, while continuing freelance development work on the side.',
    icon: React.createElement(FaPlaneDeparture),
    date: 'Apr 2025 ~',
  },
  {
    title: 'Relocation Assistant at WA Company',
    location: 'Tokyo',
    description:
      'Part-time role in Japan focused on logistics and relocation support, while studying Japanese full-time.',
    icon: React.createElement(CgWorkAlt),
    date: '2025',
  },
  {
    title: 'Freelance Full-Stack Developer',
    location: 'Tokyo',
    description:
      'Currently building MenusLingo, a SaaS app that extracts, translates, and generates multilingual restaurant menus using OCR and AI.',
    icon: React.createElement(IoCodeSlashOutline),
    date: '2025 - Present',
  },
] as const;
export const projectsData = [
  {
    title: 'MenusLingo',
    description:
      'A SaaS app that extracts, translates, and generates multilingual restaurant menus from uploaded images and PDFs using OCR and AI, with Stripe payments built in.',
    tags: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'MongoDB',
      'Stripe',
      'Google Cloud',
    ],
    imageUrl: MenuLingo,
    url: 'https://menuslingo.com/',
  },
  {
    title: 'Yalla Kora',
    description:
      'YallaKora is one of the BIGGEST Sports News platform in the middle east.',
    tags: ['MVC', 'Java script', 'JQuery', 'HTML', 'CSS', 'ADS'],
    imageUrl: yallKora,
    url: 'https://www.yallakora.com/',
  },
  {
    title: 'Masrawy',
    description:
      'Masrawy is one of the BIGGEST News platform in the middle east.',
    tags: ['MVC', 'Java script', 'JQuery', 'HTML', 'CSS', 'ADS'],
    imageUrl: masrawyWeb,
    url: 'https://www.masrawy.com/',
  },
  {
    title: 'Masrawy mobile application',
    description:
      'Masrawy is one of the BIGGEST News platform in the middle east.',
    tags: ['React', 'React Native', 'Redux', 'Rest APIs', 'React Navigation'],
    imageUrl: masrawy,
    url: 'https://play.google.com/store/apps/details?id=com.gemini.masrawyapp&pcampaignid=web_share',
  },
  {
    title: 'Medical Representative App',
    description:
      'A local-first React Native app for medical sales reps, supporting offline CRUD and location-based client check-ins within 20 meters.',
    tags: ['React Native', 'Expo', 'SQLite'],
    imageUrl: null,
    url: '',
  },
  {
    title: 'Internal HR system',
    description:
      'I worked as a front end developer on Gemini media projects for 1 and half year. Users with diffrent autorization can perform diffrent operations.',
    tags: ['React', 'Redux tool-kit', 'Tailwind'],
    imageUrl: corpcommentImg,
    url: '',
  },
  {
    title: 'Green Me',
    description:
      'A website dedicated to renewable energy solutions, with dynamic content fetching and a reusable component system.',
    tags: ['React', 'Redux Toolkit Query', 'Ag-Grid', 'Tailwind'],
    imageUrl: '',
    url: '',
  },
  {
    title: 'MEI',
    description: 'A public web app for Misr Entertanment Investments holding.',
    tags: ['React', 'Next.js', 'Css', 'AOS animation'],
    imageUrl: wordanalyticsImg,
    url: 'https://beta.gemini.media/',
  },
] as const;

export const skillsData = [
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Redux',
  'Express',
  'HTML',
  'CSS',
  'Git',
  'Tailwind',
  'MongoDB',
  'SQLite',
  'Stripe',
  'Google Cloud',
] as const;