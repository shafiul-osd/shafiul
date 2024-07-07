import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import Image from "next/image";
import { Card } from "../ui/project-card";
import { LinkPreview } from "../ui/link-preview";
import { Badge } from "../ui/badge";
import { FaGithub } from "react-icons/fa";
import { PiGoogleChromeLogoThin } from "react-icons/pi";

const Prijects = () => {
  return (
    <div id="projects" className="my-20 w-[90vw] mx-auto">
      <div className="">
        <SectionTitle title="Projects" />
      </div>
      <div className="my-20">
        <div className="grid md:grid-cols-3 gap-y-5 md:gap-10">
          {projects.map(project => (
            <Card
              key={project.id}
              className="rounded-[10px] p-4  bg-white dark:bg-zinc-900"
            >
              <Image
                src={project.screenshot}
                alt="jordans"
                height="200"
                width="200"
                className="h-56 w-full"
              />
              <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {project.name}
              </p>

          
              <div className="flex my-1 flex-wrap gap-1">
                {
                    project.technologies.map((t,i)=><Badge  key={i} variant="secondary">{t}</Badge>)
                }
              </div>

              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {project.description}
              </p>

              <div className="flex justify-start gap-1 items-center">
                <LinkPreview url={project.live}>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Live Link </span>
                    <span className="text-green-500">
                      <PiGoogleChromeLogoThin />
                    </span>
                  </button>
                </LinkPreview>
                <LinkPreview url={project.clientRepo}>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Client repo </span>
                    <span className="text-white">
                    <FaGithub />
                    </span>
                  </button>
                </LinkPreview>
                <LinkPreview url={project.serverRepo}>
                  <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
                    <span>Server repo </span>
                    <span className="py-0 text-white">
                    <FaGithub />
                    </span>
                  </button>
                </LinkPreview>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Prijects;

const projects = [
  {
    id: 1,
    technologies : ["React","tailwind","mongo DB","firebase","material ui"],
    name: "Bangla Trips",
    description:
      "Bangla Trips is a website offering information about various travel packages and tours in Bangladesh. It features a range of travel options, highlights key destinations, and provides detailed itineraries and pricing. The site aims to help users explore the cultural and natural beauty of Bangladesh through organized trips",
    screenshot: "/images/projects/bangla-trips.png",
    live: "https://assignment-12-819b8.web.app",
    clientRepo: "https://github.com/Shafiul-islam-5938/bangla-trips-client",
    serverRepo: "https://github.com/Shafiul-islam-5938/bangla-trips-server",
  },
  {
    id: 2,
    technologies : ["React","tailwind","mongo DB","firebase","material ui"],
    name: "Giving Globe",
    description:
      "The website 'Giving Globe' provides a platform for donating to various global causes. It features a map interface highlighting different regions and the specific issues they face, such as poverty, education, and health. Users can select a cause, view detailed information, and contribute directly to make an impact.",
    screenshot: "/images/projects/giving-globe.png",
    live: "https://assignment-11-1edee.web.app",
    clientRepo: "https://github.com/Shafiul-islam-5938/giving-globe-client.git",
    serverRepo: "https://github.com/Shafiul-islam-5938/giving-globe-server.git",
  },
  {
    id: 3,
    technologies : ["React","tailwind","mongo DB","firebase","material ui"],
    name: "Explore World",
    description:
      "Bangla Trips is a website offering information about various travel packages and tours in Bangladesh. It features a range of travel options, highlights key destinations, and provides detailed itineraries and pricing. The site aims to help users explore the cultural and natural beauty of Bangladesh through organized trips",
    screenshot: "/images/projects/explore-world.png",
    live: "https://assignment-10-9a5c8.web.app/",
    clientRepo: "https://github.com/Shafiul-islam-5938/explore-world-client.git",
    serverRepo: "https://github.com/Shafiul-islam-5938/explore-world-server.git",
  },
];
