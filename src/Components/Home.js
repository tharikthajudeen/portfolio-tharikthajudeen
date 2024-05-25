import React from 'react';
import { BackgroundBeams } from "./ui/background-beams.tsx";

function Home() {
    const paragraphContent = "Intermediate MERN stack developer with a focus on React.js. Skilled in creating dynamic web applications using MongoDB, Express.js, React.js, and Node.js. Flexible and adaptable to different technologies, and excited to build innovative solutions across various tech stacks.";
    const position = "Undergraduate";

    return (
        <section id='/' className='flex flex-col'>
            <div className="w-full relative justify-center flex flex-col md:flex-row bg-custom-blue text-white items-center md:h-screen px-[5px] py-[50px] md:px-[80px] md:py-[20px] ">
                <div className="max-w-6xl mx-auto p-4">
                    <h1 className="relative z-10 text-4xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                        Hey there! I'm Tharik Thajudeen
                    </h1>
                    <p></p>
                    <p className="text-neutral-500 max-w-xl md:max-w-4xl mx-auto my-2 text-lg md:text-xl text-center relative z-10">
                        {paragraphContent}
                    </p>
                </div>
                <BackgroundBeams />
            </div>
        </section>
    );
}

export default Home;
