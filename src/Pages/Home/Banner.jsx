import banner from "../../assets/web-banner.png";
import { MdChevronRight } from "react-icons/md";

const Banner = () => {
  return (
    <>
      <div className="">
        <img className="w-full" src={banner} alt="" />
      </div>
      <section className=" mt-16">
        <div className=" text-center">
          <h3 className=" text-4xl font-semibold text-slate-900">
            It’s a new day for your data.
          </h3>
          <p className=" text-slate-800 mt-4">
            This is the start of something special. We’re very happy to share
            that Splunk is now a Cisco company.
          </p>
        </div>
        <div className="mt-12 md:flex items-center justify-center md:gap-8 gap-2">
          <div className=" flex justify-center">
            <button className="bg-[#33B08D] text-slate-50 font-bold px-6 py-4  btn rounded-full">
              Find out more
            </button>
          </div>
          <div className="mt-5 md:mt-0 flex items-center justify-center">
            <p className="md:text-xl font-semibold hover:underline hover:cursor-pointer text-[#33B08D]">
              Hear from Cisco and Splunk execs
            </p>
            <MdChevronRight className="text-[#33B08D] text-xl" />
          </div>
        </div>
        <hr className="mt-10 mb-10" />
      </section>
    </>
  );
};

export default Banner;
