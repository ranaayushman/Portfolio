import React from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa'; 

const Footer = () => {
    return (
        <section className='bg-custom-purple h-full p-8 px-12 text-custom-text'>
            <hr className='drop-shadow-md bg-purple-600'></hr>
            <footer className="text-custom-text py-6">
                <div className="container mx-auto flex flex-col items-center justify-between md:flex-row">
                    <div className="mb-4 md:mb-0">
                        <h1 className="text-2xl font-bold cursor-default">Ayushman Rana</h1>
                        <p className="text-sm cursor-default">© 2024 All rights reserved.</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="https://www.linkedin.com/in/ayushman-rana-1478b32a5/" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://github.com/ranaayushman" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://x.com/AyushmanRa90067" className="hover:text-gray-400" target="_blank" rel="noopener noreferrer">
                            <FaTwitter size={30} />
                        </a>
                    </div>
                </div>
            </footer>
        </section>
    );
}

export default Footer;
