import { GoDownload } from "react-icons/go";
import { GiDiamondTrophy, GiHumanTarget } from "react-icons/gi";
import { RiPassValidLine } from "react-icons/ri";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdGroups3 } from "react-icons/md";

const Solutions = () => {
  return (
    <>
      <section className=" w-9/12 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-center text-center gap-8">
        <div className=" space-y-3">
          <GoDownload className="ml-[28px] text-5xl" />
          <h3 className="text-center font-medium">Downloads</h3>
        </div>
        <div className=" space-y-3">
          <GiDiamondTrophy className="ml-[28px] text-5xl" />
          <h3 className="text-center font-medium">Certifications</h3>
        </div>
        <div className=" space-y-3">
          <RiPassValidLine className="ml-[28px] text-5xl" />
          <h3 className="text-center font-medium">Validated</h3>
        </div>
        <div className=" space-y-3">
          <BsPersonWorkspace className="ml-[28px] text-5xl" />
          <h3 className="text-center font-medium">Training</h3>
        </div>
        <div className=" space-y-3">
          <MdGroups3 className="ml-[28px] text-5xl" />
          <h3 className="text-center font-medium">Community</h3>
        </div>
        <div className=" space-y-3">
          <GiHumanTarget className="ml-[28px] text-5xl" />
          <h3 className="text-center font-medium">Careers</h3>
        </div>
      </section>
    </>
  );
};

export default Solutions;
