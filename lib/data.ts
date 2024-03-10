import React from 'react';
import { CgWorkAlt } from 'react-icons/cg';
import { FaReact } from 'react-icons/fa';
import { LuGraduationCap } from 'react-icons/lu';
import corpcommentImg from '@/public/corpcomment.png';
import masrawy from '@/public/masrawy.png';
import wordanalyticsImg from '@/public/mei.png';

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
      'Current working as front-end developer building internal and out-source projects',
    icon: React.createElement(CgWorkAlt),
    date: 'Sep 2022 - Present',
  },
  ,
] as const;

export const projectsData = [
  {
    title: 'Masrawy mobile application',
    description:
      'Masrawy is one of the biggest news platform in the middle east. I was the front-end developer in team of 2 developers.',
    tags: ['React', 'React Native', 'Redux', 'Rest APIs', 'React Navigation'],
    imageUrl: masrawy,
  },
  {
    title: 'Internal HR system',
    description:
      'I worked as a front end developer on Gemini media projects for 1 and half year. Users with diffrent autorization can perform diffrent operations.',
    tags: ['React', 'Redux tool-kit', 'Tailwind'],
    imageUrl: corpcommentImg,
    // url: '',
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
    title: 'MEI',
    description: 'A public web app for Misr Entertanment Investments holding.',
    tags: ['React', 'Next.js', 'Css', 'AOS animation'],
    imageUrl: wordanalyticsImg,
    url: 'https://beta.gemini.media/',
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'React Native',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express',
] as const;
