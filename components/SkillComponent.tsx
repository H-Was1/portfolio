import { SkillsMarque } from "./Marque";
import { bskill, cskill, fskill, mskill, wskill } from "@/constant";
import { Tooltip } from "@nextui-org/tooltip";
import localFont from "next/font/local";

import Image from "next/image";
const myFont2 = localFont({
  src: "../app/fonts/ProtestRevolution-Regular.ttf",
  display: "swap",
});
function SkillComponent() {
  return (
    <div
      className="lg:deep-gridd deep-gridm grid-skills gap-4 h-[100vh] max-lg:h-[236vh] py-4 px-6 duration-1000 bg-gradient-to-bl from-violet-800/60 from-10% via-indigo-900/70 via-40% to-violet-700/80 to-95% relative overflow-hidden text-white max-md:border-b max-md:shadow-xl max-md:shadow-indigo-700/70 max-md:border-slate-500/80 max-md:rounded-b-2xl"
      id="skills"
    >
      <div className="absolute backdrop-blur-2xl w-screen h-[120vh] max-xl:h-[270vh] h bg-grid bg-cover bg-opacity-20"></div>
      <SkillsMarque />
      <div className="border frontend border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl  rounded-xl relative z-20 overflow-hidden">
        <div className="absolute -right-28 -z-10 blur-[8px] -bottom-11">
          <Image
            src={"/frontend.svg"}
            width={270}
            height={20}
            alt=""
            className="select-none"
          ></Image>
        </div>
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[10rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"FrontEnd"} />
        </div>
        <div className="w-full h-full flex items-center justify-center bg-grid">
          <div className="flex flex-wrap justify-around gap-6 items-center px-3">
            {fskill.map((skill) => {
              return (
                <Tooltip
                  key={skill.name}
                  content={skill.description}
                  className="p-3 bg-black/30 backdrop-blur-lg w-80 border border-black/20 shadow-md rounded-xl text-white"
                >
                  <div>
                    <div>
                      <Image
                        src={skill.url}
                        width={skill.width}
                        height={20}
                        alt={skill.name}
                        className="select-none"
                      ></Image>
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div className="backend border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-20 bg-grid overflow-hidden">
        <div className="absolute -right-28 -z-10 blur-[8px] -bottom-11">
          <Image
            src={"/backend.svg"}
            width={280}
            height={20}
            alt=""
            className="select-none"
          ></Image>
        </div>
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[10rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"BackEnd"} />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {bskill.map((skill) => {
              return (
                <Tooltip
                  key={skill.name}
                  content={skill.description}
                  className="p-3 bg-black/30 backdrop-blur-lg w-80 border border-black/20 shadow-md rounded-xl text-white"
                >
                  <div>
                    <div>
                      <Image
                        src={skill.url}
                        width={skill.width}
                        height={20}
                        alt={skill.name}
                        className="select-none"
                      ></Image>
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div className="cloud border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10 bg-grid overflow-hidden">
        <div className="absolute -right-12 -z-10 blur-[8px] -bottom-10">
          <Image
            src={"/cloud.svg"}
            width={230}
            height={20}
            alt=""
            className="select-none"
          ></Image>
        </div>
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[8rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"Cloud"} />
        </div>
        <div className="w-full h-full flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {cskill.map((skill) => {
              return (
                <Tooltip
                  key={skill.name}
                  content={skill.description}
                  className="p-3 bg-black/30 backdrop-blur-lg w-80 border border-black/20 shadow-md rounded-xl text-white"
                >
                  <div>
                    <div>
                      <Image
                        src={skill.url}
                        width={skill.width}
                        height={20}
                        alt={skill.name}
                        className="select-none"
                      ></Image>
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div className="web-scraping border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10 overflow-hidden">
        <div className="absolute -right-10 -z-10 blur-[8px] -bottom-16">
          <Image
            src={"/data.svg"}
            width={240}
            height={20}
            alt=""
            className="select-none"
          ></Image>
        </div>
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[12.7rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"Web Scraping"} />
        </div>
        <div className="w-full h-full flex items-center justify-center bg-grid">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {wskill.map((skill) => {
              return (
                <Tooltip
                  key={skill.name}
                  content={skill.description}
                  className="p-3 bg-black/30 backdrop-blur-lg w-80 border border-black/20 shadow-md rounded-xl text-white"
                >
                  <div>
                    <div>
                      <Image
                        src={skill.url}
                        width={skill.width}
                        height={20}
                        alt={skill.name}
                        className="select-none"
                      ></Image>
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Miscellaneous border border-slate-600/10 shadow-lg shadow-black/20 ring-1 ring-black/15 bg-black/20 backdrop-blur-xl rounded-xl relative z-10 overflow-hidden">
        <div className="absolute -right-20 -z-10 blur-[8px] -bottom-11">
          <Image
            src={"/miscellaneous.svg"}
            width={230}
            height={20}
            alt=""
            className="select-none"
          ></Image>
        </div>
        <div className="relative -left-4 -top-3 flex">
          <div className="h-[3.4rem] w-[13.2rem] border border-gray-800/30 rounded-xl bg-gradient-to-r from-cyan-700 to-blue-700 skew-x-[-20deg] absolute"></div>
          <Badge Children={"Miscellaneous"} />
        </div>
        <div className="w-full h-full flex items-center justify-center bg-grid">
          <div className="flex flex-wrap justify-center gap-6 items-center px-3">
            {mskill.map((skill, i) => {
              return (
                <Tooltip
                  key={i}
                  content={skill.description}
                  className="p-3 bg-black/30 backdrop-blur-lg w-80 border border-black/20 shadow-md rounded-xl text-white"
                >
                  <div key={i}>
                    <div>
                      <Image
                        src={skill.url}
                        width={skill.width}
                        height={20}
                        alt={skill.name}
                        className="select-none"
                      ></Image>
                    </div>
                  </div>
                </Tooltip>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
export default SkillComponent;

function Badge({ Children }: { Children: string }) {
  return (
    <h1
      className={`select-none absolute top-4 text-xl tracking-[.18rem] ${myFont2.className} text-white left-10 font-cursive`}
    >
      {Children}
    </h1>
  );
}
