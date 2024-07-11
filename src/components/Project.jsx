import React from 'react';

const Project = () => {

  return (
    <section id='projects' className='bg-custom-purple pt-16 h-full mt-0 px-12 text-custom-text'>
      <h1  className='text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5A639C] from-3% to-[#37B7C3] to-77%'>Projects</h1>

      {/* card section starts here */}
      <div className='cards flex gap-x-4 mt-10 h-full'>

          {/* card 1 */}
          <div className='w-1/3 shadow-md shadow-red-200 border-custom-blue border-solid border-2 p-3 rounded-xl flex flex-col text-center gap-y-12'>
            <div className='w-full p-1 drop-shadow-lg h-52'>
              <a href='www.lalalaa.com'>
                <img className='rounded-lg border-custom-blue border-solid border-2 object-cover h-full w-full' src='/img/nexus.png' />
              </a>
            </div>
            <div className='w-full p-3 pb-0 rounded-full'>
              <p className='text-left'>I made my first webpage using ReactJS and TailwindCSS</p>
            </div>
            <div className='m-3'>
              <a href="/path-to-your-cv.pdf" className="px-6 py-3 bg-gradient-to-r from-[#5A639C] to-[#37B7C3] rounded-full hover:from-pink-500 hover:to-[#1c6065] transition duration-300">Live Preview</a>
            </div>
          </div>
          {/* card 1 ends here */}

          {/* card 2 */}
          <div className='w-1/3 shadow-md shadow-red-200 border-custom-blue border-solid border-2 p-3 rounded-xl flex flex-col text-center gap-y-12'>
            <div className='w-full p-1 drop-shadow-lg h-52'>
              <a href='https://nike-by-ayushman.vercel.app/'>
                <img className='rounded-lg border-custom-blue border-solid border-2 h-full w-full' src='/img/NikeCopy.png' />
              </a>
            </div>
            <div className='w-full p-3 pb-0 rounded-full'>
              <p className='text-left'>With the help of enthusiasm and dedication I made this Nike Clone website</p>
            </div>
            <div className='m-3'>
              <a href="https://nike-by-ayushman.vercel.app/" className="px-6 py-3 bg-gradient-to-r from-[#5A639C] to-[#37B7C3] rounded-full hover:from-pink-500 hover:to-[#1c6065] transition duration-300">Live Preview</a>
            </div>
          </div>
          {/* card 2 ends here */}

          {/* card 3 */}
          <div className='w-1/3 shadow-md border-custom-blue shadow-red-200 border-solid border-2 p-3 rounded-xl flex flex-col text-center gap-y-12'>
            <div className='w-full p-1 drop-shadow-lg h-52'>
              <a href='https://ranaayushman.github.io/tindog/'>
                <img className='rounded-lg border-custom-blue border-solid border-2 h-full w-full' src='/img/tindog.png' />
              </a>
            </div>
            <div className='w-full p-3 pb-0 rounded-full'>
              <p className='text-left'>This webpage was made in the journey of learning HTMl CSS and Bootstrap</p>
            </div>
            <div className='m-3'>
              <a href="https://ranaayushman.github.io/tindog/" className="px-6 py-3 bg-gradient-to-r from-[#5A639C] to-[#37B7C3] rounded-full hover:from-pink-500 hover:to-[#1c6065] transition duration-300">Live Preview</a>
            </div>
          </div>
          {/* card 3 ends here */}
      </div>
    </section>
  );
}

export default Project;