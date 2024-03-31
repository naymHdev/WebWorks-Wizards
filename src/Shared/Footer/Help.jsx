import corporateGirl from "../../assets/corporate girsl.jpeg";
import { MdOutlineEmail, MdOutlineLocalGroceryStore } from "react-icons/md";
import { FaDropbox } from "react-icons/fa";
import { PiChatsThin } from "react-icons/pi";

const Help = () => {
  return (
    <>
      <section className="grid md:flex items-center justify-evenly">
        <div className="space-y-5">
          <h2 className="text-4xl font-bold text-slate-950 text-center">
            How can we help?
          </h2>
          <div className=" flex items-center justify-center">
            <input
              className="w-full py-[8px] px-[5px] bg-slate-100 border focus:outline-none focus:border-blue-500"
              placeholder="Help me find something"
              type="search"
              name=""
              id=""
            />
            <div className="px-[10px] py-[12px] text-xs bg-[#33B08D] text-slate-50">
              Search
            </div>
          </div>
        </div>
        <div className="grid md:flex gap-3 items-center">
          <div className=" grid grid-cols-2 gap-2">
            <div className="bg-[#33B08D] py-12 px-10 text-slate-50">
              <div className=" grid items-center justify-center">
                <MdOutlineLocalGroceryStore className=" text-7xl ml-3" />
                <p>How to Buy?</p>
              </div>
            </div>
            <div className="bg-[#33B08D] py-12 px-10 text-slate-50">
              <div className=" grid items-center justify-center">
                <FaDropbox className=" text-7xl text-center ml-5" />
                <p>Product Support</p>
              </div>
            </div>
            <div className="bg-[#33B08D] py-12 px-10 text-slate-50">
              <div className=" grid items-center justify-center">
                <MdOutlineEmail className="ml-2 text-7xl" />
                <p>Email Sales</p>
              </div>
            </div>
            <div className="bg-[#33B08D] py-12 px-10 text-slate-50">
              <div className=" grid items-center justify-center">
                <PiChatsThin className="ml-4 text-7xl" />
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
      </section>
    </>
  );
};

export default Help;
