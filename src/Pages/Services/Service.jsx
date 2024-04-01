import { FaArrowRightLong } from "react-icons/fa6";
import { GiArtificialIntelligence } from "react-icons/gi";
import { SiSoundcharts } from "react-icons/si";
import { LiaServerSolid } from "react-icons/lia";
import { FaDatabase, FaUserLock } from "react-icons/fa";
import { GoGitMerge } from "react-icons/go";
import { TbBrandDatabricks } from "react-icons/tb";
import { MdStorage } from "react-icons/md";

const Service = () => {
  return (
    <>
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className=" border hover:cursor-pointer  px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <GiArtificialIntelligence className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>AI & machinelearning</p>{" "}
            <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border hover:cursor-pointer  px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <SiSoundcharts className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Analytics</p> <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border hover:cursor-pointer  px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <LiaServerSolid className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Computer & servers</p> <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border hover:cursor-pointer  px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <FaDatabase className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Databases</p> <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border hover:cursor-pointer  px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <GoGitMerge className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>IT automation</p> <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border hover:cursor-pointer  px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <TbBrandDatabricks className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Quantum</p> <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border hover:cursor-pointer  px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <FaUserLock className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Security & identity</p> <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
        <div className=" border hover:cursor-pointer px-5 py-3 h-56 hover:bg-[#EFEFEF]">
          <div>
            <MdStorage className=" text-6xl" />
          </div>
          <div className="mt-[110px] flex items-center justify-between font-medium">
            <p>Storage</p> <FaArrowRightLong className=" text-xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
