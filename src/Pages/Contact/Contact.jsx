import { Link } from "react-router-dom";
import { GoChevronRight } from "react-icons/go";

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
        <div className=" flex items-center px-5 font-medium">
          <Link to="/">Home</Link>
          <GoChevronRight />
          <Link to="/contact">Contact Wizards</Link>
        </div>
      </div>
      <section className=" w-11/12 mx-auto"></section>
    </>
  );
};

export default Contact;
