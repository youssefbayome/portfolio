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
  // {
  //   title: 'Graduated from MERN stack Course',
  //   location: 'Cairo',
  //   description:
  //     'I graduated after 6 months of studying. I immediately found a job as a front-end developer.',
  //   icon: React.createElement(LuGraduationCap),
  //   date: 'Jan 2021 - July 2021',
  // },
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
  {
    title: 'Software Engineer at HCL Japan',
    location: 'Tokyo',
    description: '',
    icon: React.createElement(CgWorkAlt),
    date: 'Nov 2026 - Present',
  },
] as const;
export const projectsData = [
  {
    slug: 'menuslingo',
    title: 'MenusLingo',
    description:
      'MenusLingo helps restaurants create multilingual menus from the files they already have. Upload an image or PDF, extract its text with OCR, translate the content with AI, and generate a menu ready to share. The product includes a Stripe-powered payment flow and is built with React, TypeScript, Node.js, Express, MongoDB, and Google Cloud.',
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
    role: 'Freelance full-stack developer',
    period: '2025 — Present',
    overview: 'MenusLingo helps restaurants turn menu files into multilingual, ready-to-use menus. It combines OCR, translation, and layout generation in one workflow.',
    contributions: ['Built the product experience for uploading menu images and PDFs and reviewing extracted content.', 'Connected OCR and AI translation services to the menu generation workflow.', 'Integrated Stripe payments into the SaaS product.'],
  },
  {
    slug: 'yalla-kora',
    title: 'Yalla Kora',
    description:
      'Yalla Kora is a leading sports news platform in the Middle East, serving fans who follow regional and international football. I contributed to its web experience within an established MVC application, using JavaScript, jQuery, HTML, and CSS, including work around advertising placements.',
    tags: ['MVC', 'Java script', 'JQuery', 'HTML', 'CSS', 'ADS'],
    imageUrl: yallKora,
    url: 'https://www.yallakora.com/',
    role: 'Front-end developer · Gemini Media',
    period: '2022 — 2025',
    overview: 'Yalla Kora is a major sports news platform in the Middle East, bringing match coverage, news, and updates to a broad audience.',
    contributions: ['Contributed to front-end work on the sports news platform.', 'Worked with the existing MVC application and its JavaScript and jQuery interface.', 'Supported advertising placements within content pages.'],
  },
  {
    slug: 'masrawy-web',
    title: 'Masrawy',
    description:
      'Masrawy is a major Arabic-language news platform covering stories for readers across the Middle East. My front-end work supported its content-focused website, using the existing MVC architecture alongside JavaScript, jQuery, HTML, and CSS. The pages also accommodate advertising placements as part of the publishing experience.',
    tags: ['MVC', 'Java script', 'JQuery', 'HTML', 'CSS', 'ADS'],
    imageUrl: masrawyWeb,
    url: 'https://www.masrawy.com/',
    role: 'Front-end developer · Gemini Media',
    period: '2022 — 2025',
    overview: 'Masrawy is a major Arabic news platform covering current affairs and stories for readers across the region.',
    contributions: ['Contributed to front-end development across the news website.', 'Built and maintained interface work in the existing MVC, JavaScript, and jQuery stack.', 'Worked with advertising placements as part of the site experience.'],
  },
  {
    slug: 'masrawy-mobile',
    title: 'Masrawy mobile application',
    description:
      'The Masrawy Android app extends the publication’s news experience to mobile readers. It uses REST APIs to bring content into a React Native interface, with Redux for application state and React Navigation for moving between screens.',
    tags: ['React', 'React Native', 'Redux', 'Rest APIs', 'React Navigation'],
    imageUrl: masrawy,
    url: 'https://play.google.com/store/apps/details?id=com.gemini.masrawyapp&pcampaignid=web_share',
    role: 'Front-end developer · Gemini Media',
    period: '2022 — 2025',
    overview: 'The Masrawy mobile app brings the publication’s news experience to Android, with content delivered through REST APIs.',
    contributions: ['Worked on the React Native application and its navigation.', 'Connected app screens to REST API data.', 'Used Redux to manage application state.'],
  },
  {
    slug: 'medical-representative-app',
    title: 'Medical Representative App',
    description:
      'A mobile app for medical representatives working with client records in the field. Its local-first SQLite storage keeps core create, read, update, and delete workflows available offline, while location-based check-ins verify that a representative is within 20 meters of a client. The app is built with React Native and Expo.',
    tags: ['React Native', 'Expo', 'SQLite'],
    imageUrl: null,
    url: '',
    role: 'Freelance full-stack developer',
    period: '2025',
    overview: 'A mobile tool for medical representatives to manage client records and check in at customer locations, including when offline.',
    contributions: ['Built local-first CRUD workflows using SQLite.', 'Added location-based check-ins with a 20-meter proximity requirement.', 'Developed the app with React Native and Expo.'],
  },
  {
    slug: 'internal-hr-system',
    title: 'Internal HR system',
    description:
      'An internal HR system for Gemini Media employees, with access to operations based on each user’s authorization level. I contributed front-end features using React and Redux Toolkit, with Tailwind CSS for the interface. The role-aware experience supports different workflows for users with different permissions.',
    tags: ['React', 'Redux tool-kit', 'Tailwind'],
    imageUrl: corpcommentImg,
    url: '',
    role: 'Front-end developer · Gemini Media',
    period: '2022 — 2025',
    overview: 'An internal HR system for employees with different authorization levels to manage operational tasks.',
    contributions: ['Built front-end features with React and Redux Toolkit.', 'Applied role-based access patterns to support different user permissions.', 'Used Tailwind CSS to build the interface.'],
  },
  {
    slug: 'green-me',
    title: 'Green Me',
    description:
      'Green Me is a website focused on renewable energy solutions. Its pages present dynamically fetched information through reusable React components, with Redux Toolkit Query handling data access and Ag-Grid supporting tabular content. The interface is styled with Tailwind CSS.',
    tags: ['React', 'Redux Toolkit Query', 'Ag-Grid', 'Tailwind'],
    imageUrl: '',
    url: '',
    role: 'Front-end developer · Gemini Media',
    period: '2022 — 2025',
    overview: 'A renewable energy website that presents dynamic content through a reusable set of interface components.',
    contributions: ['Built data-driven views with React and Redux Toolkit Query.', 'Used Ag-Grid for tabular content.', 'Created reusable UI components styled with Tailwind CSS.'],
  },
  {
    slug: 'mei',
    title: 'MEI',
    description: 'A public-facing web app for Misr Entertainment Investments, presenting the company and its content to visitors. Built with React and Next.js, the experience combines responsive page styling with AOS animations to add motion as visitors move through the site.',
    tags: ['React', 'Next.js', 'Css', 'AOS animation'],
    imageUrl: wordanalyticsImg,
    url: 'https://beta.gemini.media/',
    role: 'Front-end developer · Gemini Media',
    period: '2022 — 2025',
    overview: 'A public web app for Misr Entertainment Investments, presenting company information and content online.',
    contributions: ['Built the application with React and Next.js.', 'Created page styling and motion details with CSS and AOS.', 'Worked on a responsive public-facing experience.'],
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
