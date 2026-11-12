'use client';

import SectionHeading from './section-heading';
import { experiencesData } from '@/lib/data';
import { useSectionInView } from '@/lib/hooks';
import { motion, useReducedMotion } from 'framer-motion';

export default function Experience() {
  const { ref } = useSectionInView('Experience');
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <p className="section-kicker mb-3">THE PATH SO FAR</p>
      <SectionHeading>My experience</SectionHeading>
      <ol className="experience-list">
        {experiencesData.map((item, index) => (
          <motion.li
            className="experience-item"
            key={`${item.title}-${item.date}`}
            initial={prefersReducedMotion ? false : { opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.45, delay: prefersReducedMotion ? 0 : index * 0.08, ease: 'easeOut' }}
          >
            <motion.div
              className="experience-marker"
              aria-hidden="true"
              initial={prefersReducedMotion ? false : { scale: 0.75 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ type: 'spring', stiffness: 320, damping: 22, delay: prefersReducedMotion ? 0 : index * 0.08 }}
            >{item.icon}</motion.div>
            <motion.article
              className="experience-card"
              whileHover={prefersReducedMotion ? undefined : { y: -3 }}
              transition={{ duration: 0.2 }}
            >
              <p className="experience-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="experience-location">{item.location}</p>
              {item.description && <p className="experience-description">{item.description}</p>}
            </motion.article>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
