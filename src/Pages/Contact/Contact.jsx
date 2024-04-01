import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";
import { TiGroup } from "react-icons/ti";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdDynamicFeed } from "react-icons/md";
import InfoTab from "./InfoTab";

const Contact = () => {
  return (
    <>
      <section
        className="bg-cover bg-center h-[50vh] flex items-center justify-center"
        style={{
          backgroundImage: "url('https://i.ibb.co/z6pZmT2/contact-banner.jpg')",
        }}
      >
        <div className=" flex items-center gap-52">
          <div>
            <h2 className=" text-6xl font-bold text-slate-50">
              Contact Wizards
            </h2>
          </div>
          <div className=" text-slate-50">
            <div className=" flex items-center gap-[70px]">
              <p>Call Sales</p>
              <p className=" text-2xl font-bold">+880 01903141861</p>
            </div>
            <hr className="mb-5 mt-5" />
            <div className=" flex items-center gap-7">
              <p>Contact support</p>
              <p className=" text-2xl font-bold">+880 01770064053</p>
            </div>
          </div>
        </div>
      </section>
      <div className="bg-[#EFEFEF] py-1">
        <div className=" flex items-center px-8 font-medium">
          <Link to="/">Home</Link>
          <GoChevronRight />
          <Link to="/contact">Contact Wizards</Link>
        </div>
      </div>
      <section className="mt-8">
        <div className=" flex px-8 items-center gap-5 border-b pb-3">
          <div className="flex hover:cursor-pointer items-center gap-2 text-xl font-medium">
            <TiGroup className="text-[#33B08D]" /> <p>Sales & Support</p>
          </div>
          <div className=" flex hover:cursor-pointer items-center gap-2 text-xl font-medium">
            <HiOutlineOfficeBuilding className="text-[#33B08D]" />{" "}
            <p>Wizards Offices</p>
          </div>
          <div className=" flex hover:cursor-pointer items-center gap-2 text-xl font-medium">
            <MdDynamicFeed className="text-[#33B08D]" /> <p>Feedback</p>
          </div>
        </div>
        <h2 className=" text-5xl font-bold text-slate-900 px-8 mt-10 mb-6">
          Contact Sales or Support
        </h2>
        <div className=" px-8">
          <InfoTab />
        </div>
      </section>
    </>
  );
};

export default Contact;
