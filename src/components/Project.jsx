import { useEffect, useRef } from "react";
import gsap from "gsap";
import { projects } from "../assets/asset";

gsap.registerPlugin();

const Project = () => {
  const topRef = useRef(null);
  const bottomRef = useRef(null);
  const topTween = useRef(null);
  const bottomTween = useRef(null);

  useEffect(() => {
    const animateLoop = (ref, direction = "left") => {
      const content = ref.querySelector(".scroll-content");
      const width = content.scrollWidth / 2;

      return gsap.to(content, {
        x: direction === "left" ? `-=${width}` : `+=${width}`,
        duration: 20,
        ease: "linear",
        repeat: -1,
      });
    };

    topTween.current = animateLoop(topRef.current, "left");
    bottomTween.current = animateLoop(bottomRef.current, "right");

    return () => {
      topTween.current?.kill();
      bottomTween.current?.kill();
    };
  }, []);

  const handlePause = (pause = true) => {
    if (pause) {
      topTween.current?.pause();
      bottomTween.current?.pause();
    } else {
      topTween.current?.resume();
      bottomTween.current?.resume();
    }
  };

  const renderRow = (list, ref, reverse = false) => {
    const rowData = reverse ? [...list].reverse() : [...list];
    const duplicated = [...rowData, ...rowData]; // duplicate for loop illusion

    return (
      <div
        className="relative overflow-hidden hidden md:block"
        ref={ref}
        onMouseEnter={() => handlePause(true)}
        onMouseLeave={() => handlePause(false)}
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-r from-black via-transparent to-black opacity-40" />

        {/* Scroll content */}
        <div className="scroll-content flex gap-3 w-max ">
          {duplicated.map((project, idx) => (
            <div
              key={idx}
              className={`relative min-w-[350px] h-[250px] bg-gray-800 rounded flex items-center justify-center text-white shadow-lg cursor-${project.isAvailable ? 'pointer' : 'not-allowed'}`}
              onClick={() => {
                if (project.isAvailable) {
                  window.open(`${project.hrefLink}`, "_blank");
                }
              }}
            >
              <img
                src={project.projectImage}
                alt={project.projectName}
                className="h-full object-cover rounded w-full"
                loading="lazy"
              />
              <div class="absolute inset-0 bg-black/70 "></div>
              {project.id === 6 ? (
                <img
                  src={project.ImageOverlay}
                  alt=""
                  loading="lazy"
                  className="absolute w-[170px] z-10 bg-white px-4 py-3"
                />
              ) : (
                <img
                  src={project.ImageOverlay}
                  alt=""
                  loading="lazy"
                  className="absolute w-[170px] z-10"
                />
              )}
              <p className="absolute w-full bg-[#140c2c] bottom-0 px-4 py-2 text-sm font-extralight">
                {project.Desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  return (
    <div
      className="mx-4 md:mx-16 lg:mx-44 text-white my-10 md:my-16 overflow-hidden space-y-6 scroll-smooth"
      id="project"
    >
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-br from-[#FFff] to-[#4545458] bg-clip-text text-transparent">
          OUR PROJECT
        </h1>
        <p className="text-lg md:text-xl font-light text-gray-400">
          We love building out solutions, here are a few.
        </p>
      </div>
      <div className="space-y-5">
        {renderRow(projects.slice(0, 5), topRef, false)}
        {renderRow(projects.slice(5), bottomRef, true)}

        {/* Mobile stacked block view */}
        <div className="block md:hidden space-y-4">
          {projects.slice(0, 9).map((project, idx) => (
            <div
              key={idx}
              className="relative w-full h-[250px] bg-gray-800 rounded"
              onClick={() => {
                if (project.isAvailable) {
                  window.open(`${project.hrefLink}`, "_blank");
                }
              }}
            >
              <img
                src={project.projectImage}
                alt={project.projectName}
                className="h-full w-full object-cover rounded"
              />
              <div class="absolute inset-0 bg-black/70 "></div>
              {project.id === 6 ? (
                <img
                  src={project.ImageOverlay}
                  alt=""
                  loading="lazy"
                  className="absolute w-[170px] z-10 bg-white px-4 py-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              ) : (
                <img
                  src={project.ImageOverlay}
                  alt=""
                  loading="lazy"
                  className="absolute w-[170px] z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
              )}
              <p className="absolute w-full bg-[#140c2c] bottom-0 px-2 py-2 text-sm font-extralight text-white/90">
                {project.Desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
