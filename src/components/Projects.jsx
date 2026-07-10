import React, { useState, useEffect, useRef } from "react";
import { projects } from "../constants";
import { AiFillGithub } from "react-icons/ai";
import { FaItchIo } from "react-icons/fa";

const Project = (props) => {
  // Tracks the currently displayed screenshot/video for this project
  const [mediaIndex, setMediaIndex] = useState(0);

  // Use an empty array if the project has no media
  const media = props.media || [];

  const nextMedia = () => {
    setMediaIndex((current) => (current + 1) % media.length);
  };

  const previousMedia = () => {
    setMediaIndex(
      (current) => (current - 1 + media.length) % media.length
    );
  };

  return (
    <div className="project-card flex-shrink-0 w-full mr-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE: PROJECT INFORMATION */}
        <div>
          <div className="flex items-center gap-5">
            <img
              className="w-20 h-20 object-cover rounded-full"
              src={props.image}
              alt={`${props.title} logo`}
            />

            <div>
              <h1 className="font-poppins font-semibold text-3xl text-gradient">
                {props.title}
              </h1>

              {/* TECHNOLOGY ICONS */}
              <div className="flex flex-wrap gap-4 mt-4">
                {props.stack.map((tech) => (
                  <div
                    key={tech.id}
                    className="text-dimWhite text-[24px] hover:text-teal-200 tooltip"
                  >
                    {React.createElement(tech.icon)}

                    <span className="tooltiptext">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* PROJECT DESCRIPTION */}
<div className="mt-8 font-poppins">

  {/* SHORT OVERVIEW */}
  <p className="text-dimWhite text-[16px] leading-7">
    {props.summary}
  </p>

  {/* KEY FEATURES */}
  <ul className="mt-5 space-y-3">
    {props.features?.map((feature, index) => (
      <li
        key={index}
        className="flex items-start gap-3 text-gray-300 text-[15px]"
      >
        <span className="text-teal-300 mt-[2px]">
          ▹
        </span>

        <span>{feature}</span>
      </li>
    ))}
  </ul>

</div>

          {/* GITHUB AND ITCH.IO BUTTONS */}
<div className="flex items-center gap-4 mt-6">

  {/* GITHUB BUTTON */}
  {props.github && (
    <a
      href={props.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`${props.title} GitHub repository`}
      className="flex items-center gap-2 px-4 py-2
      border border-gray-700 rounded-lg
      text-white hover:text-teal-200
      hover:border-teal-300 transition"
    >
      <AiFillGithub size="1.8rem" />

      <span className="font-poppins text-[14px]">
        View Code
      </span>
    </a>
  )}

  {/* ITCH.IO PLAY BUTTON */}
  {props.link && (
    <a
      href={props.link}
      target="_blank"
      rel="noreferrer"
      aria-label={`Play ${props.title} on itch.io`}
      className="flex items-center gap-2 px-4 py-2
      bg-teal-400 rounded-lg
      text-black hover:bg-teal-300
      transition"
    >
      <FaItchIo size="1.8rem" />

      <span className="font-poppins font-semibold text-[14px]">
        Play Game
      </span>
    </a>
  )}

</div>
        </div>

        {/* RIGHT SIDE: SCREENSHOTS AND VIDEO */}
        <div>
          {media.length > 0 && (
            <>
              <div className="relative w-full aspect-video overflow-hidden rounded-xl border border-gray-700 bg-black">

                {/* DISPLAY AN IMAGE */}
                {media[mediaIndex].type === "image" && (
                  <img
                    src={media[mediaIndex].src}
                    alt={`${props.title} gameplay`}
                    className="w-full h-full object-cover"
                  />
                )}
                {/* DISPLAY A LOCAL GAMEPLAY VIDEO */}
                {media[mediaIndex].type === "video" && (
                  <video
                    src={media[mediaIndex].src}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                )}

                {/* DISPLAY A YOUTUBE VIDEO */}
                {media[mediaIndex].type === "youtube" && (
                  <iframe
                    src={media[mediaIndex].src}
                    title={`${props.title} gameplay video`}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}

                {/* PREVIOUS MEDIA BUTTON */}
                {media.length > 1 && (
                  <button
                    onClick={previousMedia}
                    className="absolute left-3 top-1/2 -translate-y-1/2
                    w-10 h-10 rounded-full bg-black/70 text-white
                    text-2xl hover:bg-teal-500 transition"
                  >
                    ‹
                  </button>
                )}

                {/* NEXT MEDIA BUTTON */}
                {media.length > 1 && (
                  <button
                    onClick={nextMedia}
                    className="absolute right-3 top-1/2 -translate-y-1/2
                    w-10 h-10 rounded-full bg-black/70 text-white
                    text-2xl hover:bg-teal-500 transition"
                  >
                    ›
                  </button>
                )}
              </div>

              {/* MEDIA POSITION DOTS */}
              <div className="flex justify-center gap-2 mt-4">
                {media.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setMediaIndex(index)}
                    aria-label={`Open media ${index + 1}`}
                    className={`w-2.5 h-2.5 rounded-full transition ${
                      mediaIndex === index
                        ? "bg-teal-300"
                        : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardTotalWidth, setCardTotalWidth] = useState(0);

  const containerRef = useRef(null);

  useEffect(() => {
    const updateCardWidth = () => {
      if (containerRef.current) {
        const card =
          containerRef.current.querySelector(".project-card");

        if (card) {
          const cardWidth = card.offsetWidth;

          const cardMargin = parseInt(
            window.getComputedStyle(card).marginRight,
            10
          );

          setCardTotalWidth(cardWidth + cardMargin);
        }
      }
    };

    updateCardWidth();

    window.addEventListener("resize", updateCardWidth);

    return () => {
      window.removeEventListener("resize", updateCardWidth);
    };
  }, []);

  const handleNext = () => {
    if (currentIndex < projects.length - 1) {
      setCurrentIndex((current) => current + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((current) => current - 1);
    }
  };

  return (
    <section id="projects" className="overflow-hidden">
      <h1 className="font-poppins font-semibold ss:text-[55px] text-[45px] text-white ss:leading-[80px] leading-[80px]">
        Projects
      </h1>

      <div className="container px-2 py-14 mx-auto">
        <div className="overflow-hidden">

          {/* PROJECT CAROUSEL */}
          <div
            ref={containerRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${
                currentIndex * cardTotalWidth
              }px)`,
            }}
          >
            {projects.map((project) => (
              <Project
                key={project.id}
                {...project}
              />
            ))}
          </div>

          {/* SWITCH BETWEEN PROJECTS */}
<div className="flex justify-end items-center gap-5 mt-8">

  {/* PROJECT NUMBER */}
  <div className="font-poppins text-dimWhite text-[16px]">
    <span className="text-teal-300 font-semibold text-[20px]">
      {String(currentIndex + 1).padStart(2, "0")}
    </span>

    <span className="mx-2 text-gray-600">/</span>

    <span>
      {String(projects.length).padStart(2, "0")}
    </span>
  </div>

  {/* PREVIOUS PROJECT */}
  <button
    onClick={handlePrevious}
    disabled={currentIndex === 0}
    aria-label="Previous project"
    title="Previous project"
    className="
      w-12 h-12
      flex items-center justify-center
      bg-gray-800
      border border-gray-700
      rounded-full
      text-white text-xl
      disabled:opacity-30
      hover:bg-teal-500
      hover:border-teal-300
      transition-all duration-300
    "
  >
    ‹
  </button>

  {/* NEXT PROJECT */}
  <button
    onClick={handleNext}
    disabled={currentIndex >= projects.length - 1}
    aria-label="Next project"
    title="Next project"
    className="
      w-12 h-12
      flex items-center justify-center
      bg-teal-400
      border border-teal-300
      rounded-full
      text-black text-xl
      shadow-lg
      hover:bg-teal-300
      hover:scale-110
      transition-all duration-300
    "
  >
    ›
  </button>

</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;