import { FaArrowRightLong } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiSoundcharts } from "react-icons/si";
import { LiaServerSolid } from "react-icons/lia";
import { FaDatabase, FaUserLock } from "react-icons/fa";
import { GoGitMerge } from "react-icons/go";
import { TbBrandDatabricks } from "react-icons/tb";
import { MdStorage } from "react-icons/md";

const Technology = () => {
  return (
    <>
      <section className="w-11/12 mx-auto mt-24 flex justify-between">
        <div className="w-full">
          <h3 className=" text-4xl font-medium text-slate-700">
            Browse our technology
          </h3>
        </div>
        <div className="w-full">
          <p className=" text-xl">
            From our flagship products for enterprise{" "}
            <span className="text-[#33B08D]">hybrid cloud infrastructure</span>{" "}
            to next-generation AI, security and storage solutions, find the
            answer to your business challenge.
          </p>
          <button className="text-[#33B08D] flex items-center gap-3 mt-8 hover:underline hover:cursor-pointer">
            View all products <FaArrowRightLong />{" "}
          </button>
        </div>
      </section>
      <section className="mt-16 w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <GiArtificialIntelligence className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>AI & machinelearning</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <SiSoundcharts className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Analytics</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <LiaServerSolid className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Computer & servers</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <FaDatabase className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Databases</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <GoGitMerge className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>IT automation</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <TbBrandDatabricks className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Quantum</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <FaUserLock className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Security & identity</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <MdStorage className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Storage</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Technology;
