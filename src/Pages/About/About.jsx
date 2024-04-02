import { FaArrowRight } from "react-icons/fa6";

const About = () => {
  return (
    <>
      <section className=" px-5">
        <div className="md:flex justify-between gap-1">
          <div className=" w-full md:order-last">
            <img
              src="https://i.ibb.co/LzrcDFs/business-people-working-using-technology-connect-with-others.jpg"
              alt=""
            />
          </div>
          <div className=" w-full">
            <h2 className=" text-4xl font-medium text-slate-900">
              About Webworks Wizards
            </h2>
            <div className="md:mt-[230px] mt-8">
              <p className="">
                Creators, partners and clients putting technology to work in the
                real world
              </p>
              <div className="md:flex items-center gap-4 md:mt-[35px] mt-8 space-y-3 md:space-y-0">
                <button className="border bg-[#33B08D] text-slate-50 w-full flex items-center md:gap-5 gap-3 px-5 py-5">
                  Get the latest IBM news
                  <FaArrowRight />
                </button>
                <button className="border text-[#33B08D] border-[#33B08D] hover:text-slate-50 hover:bg-[#33B08D]  w-full flex items-center md:gap-5 gap-3 px-5 py-5">
                  Explore financial information <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
