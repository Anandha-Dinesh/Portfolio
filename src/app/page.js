"use client";
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import Image from "next/image";
import Link from "next/link";
import NavBar from "./components/navbar";
import Titles from "./components/titles";
import { infos } from "../../public/images/info";
import Icons from "./components/icons";
import ProjectTile from "./components/project_tile";
import NameCard from "./components/namecard";

const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      particles: {
        number: {
          value: 300,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: "#ffffff",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0,
            sync: false,
          },
        },
        size: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 4,
            size_min: 0.3,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: 1,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 600,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "bubble",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 250,
            size: 0,
            duration: 2,
            opacity: 0,
            speed: 3,
          },
          repulse: {
            distance: 400,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }),
    []
  );

  if (init) {
    return (
      <main className="bg-black h-dvh w-dvw">
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
        />
        <NavBar />
        <div className="flex w-dvw h-dvh overflow-hidden">
          <div className="flex-1 ml-6 mt-10 text-3xl align-middle">
            <div className="ml-20 mt-24 font-mono">
              <div className="text-6xl font-semibold font-mono">
                Hello there !
              </div>
              <div className="mt-8">
                <NameCard />
                <div className="mt-4">
                  <Titles />
                </div>
                <div className="mt-10 ml-10 mb-5 text-sm justify-center">
                  {" "}
                  Connect with me in{" "}
                  <div className="flex mt-3 flex-grow mr-4">
                    <div className="flex space-x-5">
                      <a
                        href="mailto:anandhadinesh80@gmail.com"
                        target="_blank"
                      >
                        <Icons
                          link={"mailto:anandhadinesh80@gmail.com"}
                          alt="Email"
                          img={"/images/mail.png"}
                        />
                      </a>
                      <Icons
                        link={infos.social.linkedin}
                        alt="linkedin"
                        img={"/images/linkedin.svg"}
                      />
                      <Icons
                        link={infos.social.github}
                        alt={"github"}
                        img={"/images/github.svg"}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex sm:flex-1 relative h-dvh justify-center align-middle">
            <Image
              src="/images/devimg.png"
              alt="Dev"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
        <div>
          <div className="flex justify-center font-bold text-4xl font-mono w-full mb-20">
            Projects
          </div>
          <div className="flex flex-row">
            {infos.projects.map((project, index) => {
              return (
                <ProjectTile
                  key={index}
                  title={project.title}
                  description={project.description}
                  stack={project.Stack}
                  url={project.github}
                />
              );
            })}
            <ProjectTile
              className="text-xl"
              title={"See more on Github"}
              url={infos.social.github}
              description={">"}
            />
          </div>
        </div>
      </main>
    );
  }

  return <></>;
};

export default App;
