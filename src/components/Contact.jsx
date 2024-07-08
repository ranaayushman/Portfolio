"use client";
import { motion } from "framer-motion";

const ContactPage = () => {

  const text = "Say Hello";

  return (
    <section id="contact">
    <motion.div
      className="h-full "
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row sm:px-8 md:px-12 lg:px-20 xl:px-48 bg-custom-purple pt-16 mt-0 px-12 text-custom-text">
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center mt-[64px] text-6xl">
          <div>
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
            😊
          </div>
        </div>
        {/* FORM CONTAINER */}
        <form
          className="h-1/2 lg:h-full lg:w-1/2 border bg-custom-purple border-red-400 shadow-md shadow-red-200 rounded-xl text-xl flex flex-col gap-8 justify-center p-24"
        >
          <span>Dear Ayushman,</span>
          <textarea
            rows={4}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none"
            name="user_message"
          />
          <span>My mail address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none"
          />
          <span>Regards</span>
          <button className="font-semibold bg-gradient-to-r from-[#5A639C] to-[#37B7C3] rounded-full hover:from-pink-500 hover:to-[#1c6065] transition duration-300 p-4">
            Send
          </button>
          
        </form>
      </div> 
    </motion.div>
    </section>
  );
};

export default ContactPage;
