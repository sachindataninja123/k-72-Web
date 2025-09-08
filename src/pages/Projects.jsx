import React from "react";
import ProjectCard from "../components/Projects/ProjectCard";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

const Projects = () => {
  const projects = [
    {
      image1:
        "https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg",
    },
    {
      image1:
        "https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg",
      image2:
        "https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg",
    },
  ];

  gsap.registerPlugin(ScrollTrigger);

  useGSAP(function () {
    gsap.from(".hero", {
      height: "0px",
      stagger: {
        amount: 0.5,
      },
      scrollTrigger: {
        trigger: ".lol",
        start: "top 100%",
        end: "top -150%",
        scrub: true,
      },
    });
  });

  return (
    <>
      <div className="lg:p-3 p-3">
        <div className=" pt-[45vh] text-black">
          <h2 className="font-[font2] flex lg:text-[13vw] text-7xl uppercase">
            work<span className="text-4xl">16</span>
          </h2>
        </div>
        <div className="-lg:mt-20 lol">
          {projects.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="hero w-full lg:h-[800px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2"
              >
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-black h-[60vh] w-full -mt-4 p-3 flex flex-col justify-between">
        <div className=" flex items-start justify-between">
          <div className="uppercase text-[5vw] font-[font2] flex gap-2">
            <div className="border-3 hover:text-[#D3FD50] transition-all  cursor-pointer inline-block px-6 py-1 rounded-full">
              fb
            </div>
            <div className="border-3 hover:text-[#D3FD50] transition-all  cursor-pointer inline-block px-6 py-1 rounded-full">
              ig
            </div>
            <div className="border-3 hover:text-[#D3FD50] transition-all  cursor-pointer inline-block px-6 py-1 rounded-full">
              in
            </div>
            <div className="border-3 hover:text-[#D3FD50] transition-all  cursor-pointer inline-block px-6 py-1 rounded-full">
              be
            </div>
          </div>
          <div className="font-[font2] uppercase ">
            <h1 className="text-[5vw] hover:text-[#D3FD50] transition-all  cursor-pointer border-2 inline-block px-6 py-1 rounded-full">
              Contact
            </h1>
          </div>
        </div>

        <div className="  uppercase text-[15px] flex items-center justify-center gap-5 pb-3">
          <p className="hover:text-[#D3FD50] cursor-pointer">Privacy Policy</p>
          <p className="hover:text-[#D3FD50] cursor-pointer">Privacy notice</p>
          <p className="hover:text-[#D3FD50] cursor-pointer">ethics report</p>
          <p className="hover:text-[#D3FD50] cursor-pointer">consent choices</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
