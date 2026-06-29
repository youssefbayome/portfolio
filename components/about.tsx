"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-6">
        My journey into software development started with a degree in{" "}
        <span className="font-semibold">Business Informatics</span>, where I
        discovered my passion for building digital products. Since then, I've
        grown into a <span className="font-semibold">Front-End Engineer</span>{" "}
        with over{" "}
        <span className="font-semibold">
          3 years of professional experience
        </span>
        , developing modern web and mobile applications using{" "}
        <span className="font-semibold">
          React, Next.js, React Native, TypeScript, and Node.js
        </span>
        .
      </p>

      <p className="mb-6">
        Throughout my career, I've contributed to{" "}
        <span className="font-semibold">
          large-scale production applications
        </span>
        , collaborated with cross-functional teams, and recently built an{" "}
        <span className="font-semibold">
          AI-powered menu translation platform 
        </span>
         {" "}from the ground up. I enjoy transforming complex ideas into intuitive,
        responsive, and high-performance user experiences while continuously
        learning new technologies and best practices.
      </p>

      <p>
        Outside of work, you'll usually find me studying{" "}
        <span className="font-semibold">Japanese</span>, exploring new
        technologies, going to the gym, playing guitar, watching movies or
        anime, and occasionally spending time gaming. I'm always looking for
        opportunities to grow both as a developer and as a person.
      </p>
    </motion.section>
  );
}
