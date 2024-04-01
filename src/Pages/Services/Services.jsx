/* eslint-disable react/no-unescaped-entities */
const Services = () => {
  return (
    <>
      <div className="bg-[#F4F5F6] flex items-center justify-center py-3 gap-5">
        <p>Splunk is now a Web Wizards company.</p>{" "}
        <button className=" border border-[#33B08D] px-5 py-1 hover:bg-[#33B08D] hover:text-slate-50 rounded-full text-[#33B08D]">
          Hear from the exec
        </button>
      </div>
      <section className=" mt-8">
        <section className=" px-8">
          <div>
            <h4 className=" text-5xl font-medium text-slate-600">
              Products, Solutions, and Services
            </h4>
            <p className="mt-5">
              Want some help finding the wizards products that fit your needs?
              You're in the right place. If you want troubleshooting help,
              documentation, other support, or downloads, visit our{" "}
              <span className="text-[#33B08D] hover:cursor-pointer">
                technical support area.
              </span>
            </p>
          </div>
        </section>
      </section>
    </>
  );
};

export default Services;
