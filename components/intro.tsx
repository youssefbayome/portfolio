"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowDownRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";
import ProfileImage from "@/images/213257751_1871958603012192_5729920071040926733_n.jpg";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section ref={ref} id="home" className="hero-section scroll-mt-28">
      <div className="hero-kicker"><span className="status-dot" /> OPEN TO SELECT PROJECTS <span className="kicker-location">TOKYO, JP · UTC+9</span></div>
      <div className="hero-grid">
        <div className="hero-copy">
          <motion.p className="eyebrow" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>FRONTEND ENGINEER / PRODUCT BUILDER</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08 }}>
            I build digital<br />experiences that <span>work<br className="desktop-break" /> beautifully.</span>
          </motion.h1>
          <motion.p className="hero-description" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.16 }}>
            I’m Youssef Bayoume, a frontend engineer based in Tokyo. I turn complex ideas into clear, thoughtful web and mobile products—with React, TypeScript, and a little curiosity.
          </motion.p>
          <motion.div className="hero-actions" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.24 }}>
            <Link href="#projects" className="button-primary" onClick={() => { setActiveSection("Projects"); setTimeOfLastClick(Date.now()); }}>Explore my work <BsArrowDownRight /></Link>
            <a className="button-secondary" href="/Youssef-Bayoume-Ismail-FrontEndDeveloper.pdf" download>Résumé <HiDownload /></a>
            <a className="social-link" href="https://www.linkedin.com/in/youssef-bayoume-726256203/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><BsLinkedin /></a>
            <a className="social-link" href="https://github.com/youssefbayome" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          </motion.div>
        </div>
        <motion.div className="hero-visual" initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
          <div className="portrait-frame"><Image src={ProfileImage} alt="Youssef Bayoume" fill priority sizes="(max-width: 768px) 80vw, 420px" className="portrait-image" /></div>
          <div className="portrait-stamp">DESIGN<br />MEETS<br />ENGINEERING<span>✳</span></div>
          <div className="portrait-caption"><span>Currently building</span><strong>MenusLingo ↗</strong></div>
        </motion.div>
      </div>
      <div className="hero-footnote"><span>SCROLL TO EXPLORE</span><span>01 — 05</span></div>
    </section>
  );
}
