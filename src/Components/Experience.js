import React from 'react';
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card.tsx";

const ExperienceSection = () => {
  return (
    // Experience section with a background and content
    <section id='experience' className="flex flex-col items-center justify-center bg-nav-custom-blue text-white px-8 md:px-16 py-8 md:py-16">
      <div className="text-center">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-bold">Experience</h2>
      </div>
      <div className="flex items-center justify-center bg-nav-custom-blue h-[40rem] rounded-2xl w-full">
        {/* TextRevealCard component displaying experience */}
        <TextRevealCard
          text="Media Secretary" // Initial text
          revealText="Media Secretary" // Text to reveal on hover
        >
          {/* TextRevealCardTitle containing title and date */}
          <TextRevealCardTitle>
            {/* Title and date */}
            <div className="flex flex-col justify-between text-xl md:text-2xl mb-4">
              <p>Muslim Majlis - USJ</p> {/* Organization */}
              <p>March 2023 - February 2024</p> {/* Duration */}
            </div>
            {/* Description */}
            <p className="text-lg md:text-xl mb-4 text-custom-gray">
              As a media secretary, I handle social media, create tailored content, and optimize strategies for impact.
            </p>
          </TextRevealCardTitle>
          {/* TextRevealCardDescription containing responsibilities */}
          <TextRevealCardDescription>
            <p className="text-lg md:text-xl mb-4 text-custom-gray">
              Responsibilities: {/* Description of responsibilities */}
            </p>
            <ul className="list-disc text-base md:text-lg pl-6 mt-2 text-custom-gray">
              {/* List of responsibilities */}
              <li>Social Media Management</li>
              <li>Content Creation</li>
              <li>Strategy Optimization</li>
              {/* Add more responsibilities as needed */}
            </ul>
          </TextRevealCardDescription>
        </TextRevealCard>
      </div>
    </section>
  );
};

export default ExperienceSection;
