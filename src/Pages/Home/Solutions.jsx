import { GoDownload } from "react-icons/go";
import { GiDiamondTrophy, GiHumanTarget } from "react-icons/gi";
import { RiPassValidLine } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdGroups3 } from "react-icons/md";

const Solutions = () => {
  return (
    <>
      <section className="hover:cursor-pointer w-9/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center text-center">
        <div className="flex flex-col items-center">
          <GoDownload className=" text-4xl text-slate-600" />
          <p className="text-center text-slate-950 font-medium mt-2">
            Downloads
          </p>
        </div>
        <div className="flex flex-col items-center">
          <GiDiamondTrophy className=" text-4xl text-slate-600" />
          <p className="text-center text-slate-950 font-medium mt-2">
            Certifications
          </p>
        </div>
        <div className="flex flex-col items-center">
          <RiPassValidLine className=" text-4xl text-slate-600" />
          <p className="text-center text-slate-950 font-medium mt-2">
            Validated
          </p>
        </div>
        <div className="flex flex-col items-center">
          <BsPersonWorkspace className=" text-4xl text-slate-600" />
          <p className="text-center text-slate-950 font-medium mt-2">
            Training
          </p>
        </div>
        <div className="flex flex-col items-center">
          <MdGroups3 className=" text-4xl text-slate-600" />
          <p className="text-center text-slate-950 font-medium mt-2">
            Community
          </p>
        </div>
        <div className="flex flex-col items-center">
          <GiHumanTarget className=" text-4xl text-slate-600" />
          <p className="text-center text-slate-950 font-medium mt-2">Careers</p>
        </div>
      </section>
    </>
  );
};

export default Solutions;
