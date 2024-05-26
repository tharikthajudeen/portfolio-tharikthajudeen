import { HoverEffect } from "./ui/card-hover-effect.tsx";

export default function Education() {
  return (
    // Education section with a background, title, and HoverEffect component
    <section id='education'>
      <div className="bg-custom-blue max-w-full px-[20px] py-[50px] md:py-[100px] md:px-[100px]">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl font-bold text-center mb-[40px] md:mb-[60px]">Education & Qualification</h1>
        {/* HoverEffect component displaying education items */}
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

// Education data
export const projects = [
    {
        title: 'Bachelor of Information and Communication Technology (Hons.)',
        university: 'University of Sri Jayewardenepura',
        duration: '(2021-Present)',
    },
    {
        title: 'Diploma in English',
        university: 'Rajarata University of Sri Lanka',
        duration: '(2020-2021)',
    },
];
