import React from "react";
import MaxWidthWrapper from "./const/mmw";

const Hero = () => {
  return (
    <section className="bg-custom-purple h-full p-6 px-4 pt-20 text-custom-text">
      <MaxWidthWrapper>
        <h1 className="text-4xl sm:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#5A639C] from-3% to-[#37B7C3] to-77% hover:from-pink-500 hover:to-[#1c6065] transition duration-300 cursor-default mb-4">
          Hello, I am Ayushman Rana
        </h1>
        <h2 className="text-2xl sm:text-4xl">frontend developer</h2>
        <p className="max-w-lg sm:max-w-2xl mt-4 text-lg sm:text-xl">
          Crafting seamless digital experiences, I specialize in building
          responsive, user-centric websites. With a passion for clean code and
          innovative design, I transform ideas into functional, visually
          stunning web solutions.
        </p>
        <div className="mt-8">
          <button className="p-4">
            <a
              href="mailto:contact.ayushmanrana@gmail.com"
              className="mt-6 px-8 py-3 font-bold text-lg sm:text-xl bg-gradient-to-r from-[#5A639C] to-[#37B7C3] rounded-full hover:from-pink-500 hover:to-[#1c6065] transition duration-300"
            >
              Hire me
            </a>
          </button>
        </div>
      </MaxWidthWrapper>
    </section>
  );
};

export default Hero;
