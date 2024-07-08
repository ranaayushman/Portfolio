import React from 'react';
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const About = () => {

    const experienceRef = useRef();
    const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });
    
    return (
        <section id='about' className='bg-custom-purple h-full p-6 px-12 pt-20 text-custom-text'>
            <div>
                <h1 className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5A639C] from-3% to-[#37B7C3] to-77% pt-10'>About Me</h1>
            </div>

        <div
            className="flex flex-col gap-12 justify-center pt-12 pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Web Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-md italic">
                  Developing Frontend Designs for web applications using mainly HTML, CSS and Javascript or frameworks like React.js and Next.js.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - Present
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    -
                  </div> */}
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-custom-purple -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-custom-purple -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold rounded-b-lg rounded-s-lg">
                  Backend Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                  Skilled in working with APIs and integrating them to any frontend design. Efficient data management, writing complex queries, and designing and optimizing databases using MySQL or MongoDB.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2022 - 2023{" "}
                  </div>
                  {/* JOB COMPANY */}
                  {/* <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    -
                  </div> */}
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-md italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - Present{" "}
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-custom-purple -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>

        </section>
    );
}

export default About;