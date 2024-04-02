import { FaArrowRight } from "react-icons/fa6";
import Impact from "./Impact";
import Faq from "./Faq";

const About = () => {
  return (
    <>
      <section className="md:px-5 px-2">
        <div className="md:flex justify-between gap-1">
          <div className=" w-full md:order-last">
            <img
              src="https://i.ibb.co/LzrcDFs/business-people-working-using-technology-connect-with-others.jpg"
              alt=""
            />
          </div>
          <div className=" w-full">
            <h2 className=" font-thin text-4xl text-slate-900">
              About WebWorks Wizards
            </h2>
            <div className="md:mt-[230px] mt-8">
              <p className="">
                Creators, partners and clients putting technology to work in the
                real world
              </p>
              <div className="md:flex items-center gap-4 md:mt-[35px] mt-8 space-y-3 md:space-y-0">
                <button className="border font-thin bg-[#33B08D] hover:bg-[#42ebbb] text-slate-50 w-full flex items-center md:gap-5 gap-3 px-5 py-5">
                  Get the latest WWW news
                  <FaArrowRight />
                </button>
                <button className="border text-[#33B08D] border-[#33B08D] hover:text-slate-50 hover:bg-[#33B08D] font-thin w-full flex items-center md:gap-5 gap-3 px-5 py-5">
                  Explore financial information <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="md:w-10/12 w-11/12 mx-auto mt-16">
        <div>
          <p className=" text-3xl font-mono">
            "Our clients’ systems support modern society. In making them faster,
            more productive, and more secure, we don’t just make business work
            better. We make the world work better."
          </p>
        </div>
        <div className=" mt-14">
          <h4 className=" text-xl font-medium">Naym Hossen</h4>
          <p className=" font-serif mt-1">
            Chairman and CEO <br />
            WWW
          </p>
        </div>
        <hr className="md:mt-14 mt-5" />
        <p className="md:mt-5 mt-3 flex items-center gap-3 text-[#33B08D] hover:underline hover:cursor-pointer">
          See WWW leadership <FaArrowRight />{" "}
        </p>
        {/* Our impact
         */}
        <div className="md:mt-20">
          <h4 className=" text-5xl font-thin">Our impact</h4>
          <Impact />
        </div>
        <div className=" mt-20">
          <h4 className="md:text-5xl text-3xl font-thin">Frequently asked questions</h4>
          <Faq />
        </div>
      </section>
      {/* Next steps */}
      <section className="bg-[#EFEFEF]">
        <div className="md:w-10/12 w-11/12 mx-auto mt-16 space-y-10 py-10 md:py-20">
          <h3 className=" text-6xl font-thin">Next steps</h3>
          <p>
            Get curated newsletters on the latest IBM technology and thought
            leadership delivered to your inbox.
          </p>
          <div>
            <button className="border text-slate-50 bg-[#33B08D] font-semibold  flex items-center md:gap-5 gap-3 px-5 py-5">
              Subscribe now <FaArrowRight />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
