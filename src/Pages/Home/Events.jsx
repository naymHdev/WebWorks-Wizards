import liveEvent from "../../assets/live-event-management-toledo.jpeg";

const Events = () => {
  return (
    <>
      <section className="grid md:flex items-center justify-between mt-32 w-10/12 mx-auto gap-20">
        <div className="w-full">
          <img src={liveEvent} alt="" />
        </div>
        <div className="w-full">
          <h3 className=" text-3xl font-medium mb-4">Go Beyond at Cisco Live 2024</h3>
          <p>Join us June 2–6 in Las Vegas as AI takes center stage.</p>
          <button className="text-[#33B08D] mt-8 btn px-5 py-4 rounded-full border border-[#33B08D]">Register today</button>
        </div>
      </section>
    </>
  );
};

export default Events;
