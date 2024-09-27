import React from "react";

const projectsData = [
  {
    id: 1,
    name: "ISA & ISOI HIT SC",
    description:
      "ISA & ISOI HIT SC club website designed and made by me which is used by our college's registered club",
    imageUrl: "/img/ISA.png",
    liveUrl: "https://isaeiehit.vercel.app/",
  },
  {
    id: 2,
    name: "Nike Clone",
    description:
      "With the help of enthusiasm and dedication I made this Nike Clone website",
    imageUrl: "/img/NikeCopy.png",
    liveUrl: "https://nike-by-ayushman.vercel.app/",
  },
  {
    id: 3,
    name: "Tindog",
    description:
      "This webpage was made in the journey of learning HTML, CSS and Bootstrap",
    imageUrl: "/img/tindog.png",
    liveUrl: "https://ranaayushman.github.io/tindog/",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="bg-custom-purple pt-16 min-h-screen mt-0 px-4 sm:px-6 lg:px-12 text-custom-text"
    >
      <h1 className="text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#5A639C] from-3% to-[#37B7C3] to-77%">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="shadow-md shadow-red-200 border-custom-blue border-solid border-2 p-3 rounded-xl flex flex-col text-center gap-y-6"
          >
            <div className="w-full p-1 drop-shadow-lg h-52">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="rounded-lg border-custom-blue border-solid border-2 object-cover h-full w-full"
                  src={project.imageUrl}
                  alt={project.name}
                />
              </a>
            </div>
            <div className="w-full p-3 pb-0">
              <h2 className="text-xl font-semibold mb-2">{project.name}</h2>
              <p className="text-left">{project.description}</p>
            </div>
            <div className="mt-auto p-3">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-gradient-to-r from-[#5A639C] to-[#37B7C3] rounded-full hover:from-pink-500 hover:to-[#1c6065] transition duration-300"
              >
                Live Preview
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Project;
