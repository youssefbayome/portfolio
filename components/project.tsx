"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

type ProjectProps = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData | null;
  url?: string;
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  url,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const isPrivate = url === "";

  const projectContent = (
    <motion.div
      title={`${isPrivate ? "Private" : title}`}
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden relative flex flex-col sm:pr-8 sm:h-[22rem] md:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        {/* Mobile/tablet image: shown inline, above the text */}
        <div className="block sm:hidden w-full aspect-[16/9] relative overflow-hidden rounded-t-lg bg-gradient-to-br from-blue-100 to-cyan-100 dark:from-blue-400/10 dark:to-cyan-400/10">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`${title} preview`}
              quality={95}
              fill
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center text-sm font-medium text-gray-500 dark:text-white/40">
              Preview coming soon
            </div>
          )}
        </div>

        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%] md:max-w-[50%] flex flex-col flex-1 sm:group-even:ml-[18rem] md:sm:group-even:ml-[18rem]">
          <h3 className="text-xl sm:text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70 text-sm sm:text-base">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.65rem] sm:text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop image: absolutely positioned, peeking out to the side */}
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={`${title} preview`}
            quality={95}
            className="absolute hidden sm:block top-8 -right-24 md:-right-40 w-[20rem] md:w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-24 md:group-even:-left-40"
          />
        ) : (
          <div
            className="absolute hidden sm:flex top-8 -right-24 md:-right-40 w-[20rem] md:w-[28.25rem] h-[12rem] md:h-[16rem] items-center justify-center rounded-t-lg shadow-2xl bg-gradient-to-br from-blue-100 to-cyan-100 text-sm font-medium text-gray-500
            transition
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2

            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2

            group-even:right-[initial] group-even:-left-24 md:group-even:-left-40
            dark:from-blue-400/10 dark:to-cyan-400/10 dark:text-white/40">
            Preview coming soon
          </div>
        )}
      </section>
    </motion.div>
  );

  return url ? (
    <Link href={url} target="_blank">
      {projectContent}
    </Link>
  ) : (
    projectContent
  );
}