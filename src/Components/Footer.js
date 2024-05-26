import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import CV from '../PDF/Tharik_Thajudeen_Resume.pdf';
import logo from '../Image/logo.png'; // Adjust the path to your logo

export default function Footer() {
    return (
        // Footer section with a background and content
        <footer id='footer' className="bg-custom-blue font-sans text-white pb-[60px] md:px-8">
            <div className="w-full px-6 md:px-8 flex flex-col items-center justify-center">
                <div className='border-t border-gray-200 w-full mb-8'></div>

                <div className="container mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16">
                    
                    {/* Logo Section - 3/12 */}
                    <div className="md:col-span-5 flex flex-col md:flex-row items-center justify-center">
                        {/* Logo */}
                        <img src={logo} alt="Logo" className="w-24 h-24 mb-2" />
                        {/* Name */}
                        <div className="flex flex-col w-full mt-2 md:ml-2 justify-center text-center md:text-left">
                            <p className="text-xl font-semibold text-gray-200 mb-2">Tharik Thajudeen</p>
                            <p className="text-sm text-gray-400">© {new Date().getFullYear()} Tharik Thajudeen. All Rights Reserved.</p>
                        </div>
                    </div>

                    {/* Contact Section - 3/12 */}
                    <div className="md:col-span-3 flex flex-col items-center md:items-start">
                        <h2 className="text-2xl text-gray-200 font-semibold mb-4">Contact</h2>
                        {/* Contact details */}
                        <div className="flex text-sm md:text-md items-center text-gray-400 hover:text-white mb-2">
                            <a href="tel:+94723284001">+94 72 328 4001</a>
                        </div>
                        <div className="flex items-center text-gray-400 hover:text-white mb-2">
                            <a href="mailto:tharikthajudeenOO@gmail.com">tharikthajudeenOO@gmail.com</a>
                        </div>
                    </div>

                    {/* Social Media Section - 3/12 */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                        <h2 className="text-2xl text-gray-200 font-semibold mb-4">Follow Me</h2>
                        {/* Social media links */}
                        <div className="grid grid-cols-5 gap-x-4 gap-y-2">
                            <a href="https://github.com/tharikthajudeen" target="_blank" rel="noopener noreferrer" className="text-xl text-custom-gray hover:text-white">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://www.linkedin.com/in/tharik-thajudeen-b58344226/" target="_blank" rel="noopener noreferrer" className="text-xl text-custom-gray hover:text-white">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://web.facebook.com/tharik.mohamed.545/" target="_blank" rel="noopener noreferrer" className="text-xl text-custom-gray hover:text-white">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="https://www.instagram.com/tharikthajudeen/" target="_blank" rel="noopener noreferrer" className="text-xl text-custom-gray hover:text-white">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://twitter.com/tharikthajudeen" target="_blank" rel="noopener noreferrer" className="text-xl text-custom-gray hover:text-white">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                        </div>
                    </div>

                    {/* CV Download Section - 3/12 */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-start">
                        <h2 className="text-2xl text-gray-200 font-semibold mb-4">Resume</h2>
                        {/* CV download button */}
                        <a href={CV} download="Tharik_Thajudeen_Resume.pdf">
                            <button className="relative inline-flex h-12 overflow-hidden w-fit rounded-md p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                {/* Animated background */}
                                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                {/* CV download button */}
                                <span className="inline-flex h-full w-full cursor-pointer items-center font-bold text-gray-200 hover:text-white justify-center rounded-md bg-slate-950 py-2 px-4 text-sm backdrop-blur-3xl">
                                    <FontAwesomeIcon icon={faFilePdf} className="mr-2" />
                                    Download CV
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
