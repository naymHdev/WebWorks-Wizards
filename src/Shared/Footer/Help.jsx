import corporateGirl from "../../assets/corporate girsl.jpeg";
import { MdOutlineEmail, MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import { PiChatsThin } from "react-icons/pi";

const Help = () => {
  return (
    <>
      <section className="grid md:flex items-center justify-between">
        <div className="w-full">
          <div className="space-y-5 w-11/12 mx-auto">
            <h2 className="text-5xl font-bold text-slate-950 text-center">
              How can we help?
            </h2>
            <div className="flex items-center justify-center gap-1">
              <input
                className=" w-72 py-[10px] px-[5px] bg-slate-100 border focus:outline-none focus:border-blue-500"
                placeholder="Help me find something"
                type="search"
                name=""
                id=""
              />
              <div>
                <button className="btn text-sm font-medium md:py-3 py-1 px-3 rounded-md bg-[#33B08D] text-slate-50">
                  Search Wizards
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-8 md:mt-0">
          <div className="grid md:flex gap-2 items-center">
            <div className=" grid grid-cols-2 gap-2">
              <div className="bg-[#33B08D] py-[14px] px-10 text-slate-50">
                <div className=" grid items-center justify-center hover:cursor-pointer">
                  <MdOutlineLocalGroceryStore className=" text-7xl " />
                  <p>How to Buy?</p>
                </div>
              </div>
              <div className="bg-[#33B08D] py-[14px] px-10 text-slate-50">
                <div className=" grid items-center justify-center hover:cursor-pointer">
                  <FaDropbox className=" text-7xl text-center " />
                  <p>Product Support</p>
                </div>
              </div>
              <div className="bg-[#33B08D] py-[14px] px-10 text-slate-50">
                <div className=" grid items-center justify-center hover:cursor-pointer">
                  <MdOutlineEmail className=" text-7xl" />
                  <p>Email Sales</p>
                </div>
              </div>
              <div className="bg-[#33B08D] py-[14px] px-10 text-slate-50">
                <div className=" grid items-center justify-center hover:cursor-pointer">
                  <PiChatsThin className=" text-7xl" />
                  <p>Chat with Sales</p>
                </div>
              </div>
            </div>
            <div className="md:w-[400px] w-full">
              <img
                className="md:w-[390px] w-full bg-cover"
                src={corporateGirl}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Help;
