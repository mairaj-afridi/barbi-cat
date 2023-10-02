import React from "react";
import TeamCart from "./TeamCart";
import { Fade, Slide } from "react-awesome-reveal";

function Team() {
  return (
    <div id="team" className="w-full">
      <div className="w-full max-w-[1180px] m-auto py-20 flex flex-col gap-8 mb-16">
        <Slide direction="down" triggerOnce={true}>
          <p className="w-full text-center text-[40px] md:text-[110px] uppercase font-carter font-semibold text-white-main italic">
            Picture of Cat
          </p>
        </Slide>
        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8">
          {TeamData.map((member, index) => {
            return (
              <Slide key={index} cascade={true} triggerOnce={true}>
                <TeamCart name={member.name} status={member.status} image={member.image} />
              </Slide>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const TeamData = [
  {
    image: "/About222.png",
    name: `@FAT APE`,
    status: "Senior Cat",
  },
  {
    image: "/About111.jpeg",
    name: `@FAT APE CHIEF`,
    status: "Marketing Cat",
  },
  {
    image: "/About44.jpeg",
    name: `@DJ FAT APE`,
    status: "Chief of Cat",
  },
  {
    image: "/logo12.png",
    name: `@FAT APE BARISTA`,
    status: "Art of Cat",
  },
];

export default Team;