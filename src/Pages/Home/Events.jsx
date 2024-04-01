import liveEvent from "../../assets/live-event-management-toledo.jpeg";
import boy from "../../assets/corporate boy.jpeg";
import { MdChevronRight } from "react-icons/md";

const Events = () => {
  return (
    <>
      <section className="grid md:flex items-center justify-between mt-32 w-10/12 mx-auto gap-20">
        <div className="w-full">
          <img src={liveEvent} alt="" />
        </div>
        <div className="w-full">
          <h3 className=" text-3xl font-medium mb-4">
            Go Beyond at Wizards Live 2024
          </h3>
          <p>Join us June 2–6 in Las Vegas as AI takes center stage.</p>
          <button className="text-[#33B08D] mt-6 btn px-5 py-4 rounded-full border border-[#33B08D]">
            Register today
          </button>
        </div>
      </section>
      <section className="grid md:flex items-center justify-between mt-32 w-10/12 mx-auto gap-20">
        <div className="w-full md:order-last">
          <img className=" w-full" src={boy} alt="" />
        </div>
        <div className="w-full">
          <h3 className=" text-3xl font-medium mb-4">
            See your IT from a better place
          </h3>
          <p>
            When your apps and infrastructure work better together, you work
            better.
          </p>
          <button className="text-[#33B08D] mt-6 btn px-5 py-4 rounded-full border border-[#33B08D]">
            Discover more
          </button>
          <div className=" flex items-center mt-5">
            <p className=" text-xl font-semibold hover:underline hover:cursor-pointer text-[#33B08D]">
              Explore observability
            </p>
            <MdChevronRight className="text-[#33B08D] text-xl" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
