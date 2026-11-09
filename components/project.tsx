"use client";

import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData | null | "";
  url?: string;
};

export default function Project({ title, description, tags, imageUrl, url }: ProjectProps) {
  const content = (
    <motion.article
      className="project-card"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35 }}
    >
      <div className="project-media">
        {imageUrl ? <Image src={imageUrl} alt={`${title} preview`} fill sizes="(max-width: 720px) 100vw, 45vw" /> : <div className="project-placeholder" aria-hidden="true">{title.slice(0, 1)}</div>}
      </div>
      <div className="project-info">
        <div className="project-title-row"><h3 className="project-title">{title}</h3><span className="project-arrow" aria-hidden="true">↗</span></div>
        <p className="project-description">{description}</p>
        <ul className="project-tags">{tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
      </div>
    </motion.article>
  );

  return url ? <a href={url} target="_blank" rel="noreferrer" aria-label={`View ${title}`}>{content}</a> : content;
}
