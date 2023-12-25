'use client';

import React from 'react';
import SectionHeading from './section-heading';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';

export default function About() {
  const { ref } = useSectionInView('About');

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about">
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{' '}
        <span className="font-medium">Business informatics</span>, I decided to
        pursue my passion for programming. I enrolled in a Full stack php course
        and learned{' '}
        <span className="font-medium">full-stack web development</span>.{' '}
        <span className="italic">My favorite part of programming</span> is the
        building something . I <span className="underline">love</span> the
        feeling of finally completing the project{' '}
        <span className="font-medium">
          with React
        </span>
        . I am also familiar with TypeScript and react query. I am always
        looking to learn new technologies. I am currently looking for a{' '}
        <span className="font-medium">Full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and anime, and playing with my cats. I also
        enjoy <span className="font-medium">learning new things</span>. I am
        currently learning about{' '}
        <span className="font-medium">type script</span>. I'm also learning Japanese and playing guitar
      </p>
    </motion.section>
  );
}
