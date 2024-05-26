import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards.tsx";

export default function About() {
  return (
    // About section with a background, title, and InfiniteMovingCards component
    <section id='about' className="">
      <div className="h-[40rem] flex flex-col antialiased bg-white dark:bg-nav-custom-blue dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        {/* Title */}
        <h1 className=" text-4xl md:text-6xl font-bold text-white mb-[40px] md:mb-[60px] text-center">About Me</h1>
        {/* InfiniteMovingCards component displaying testimonials */}
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}

// Testimonials data
const testimonials = [
  {
    quote:
      "👋 Hello, I'm Tharik Thajudeen, a Bachelor of Information Communication Technology undergraduate with a passion for technology and a knack for creative design. My journey in the tech world has been diverse, and I'm excited to share my skills and aspirations with you.",
    title: "Introduction",
  },
  {
    quote:
      " 📊 Data analysis is where my heart truly lies. I'm self-driven in honing my skills in this domain, constantly seeking new challenges and opportunities to apply my analytical prowess.",
    title: "Interest in Data Analysis",
  },
  {
    quote: "🎨 In addition to my technical skills, I'm also proficient in graphic design, with experience in tools like Photoshop, Lightroom, After Effects, Illustrator, and Canva. This creative side of mine allows me to approach problem-solving with a unique perspective.",
    title: "Graphic Design Skills",
  },
  {
    quote:
      "🏏 Beyond the tech world, I am a dedicated softball cricketer, demonstrating my commitment to teamwork and perseverance. This experience has taught me valuable lessons in collaboration, strategy, and discipline, which I bring to every aspect of my life.",
    title: "Beyond Tech",
  },
  {
    quote:
      "Let's connect and explore how we can create meaningful tech solutions together. Feel free to reach out if you share my interests or if you'd like to collaborate on innovative projects. I look forward to connecting with you!.",
    title: "Conclusion",
  },
];
