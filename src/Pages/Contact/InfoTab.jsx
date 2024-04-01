import { Tab } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function InfoTab() {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className=" flex items-center gap-5 border rounded-md border-[#a7ecd8]">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-[#33B08D] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#33B08D] shadow"
                  : "text-[#a7ecd8] hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Contact Sales
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                "ring-white/60 ring-offset-2 ring-offset-[#33B08D] focus:outline-none focus:ring-2",
                selected
                  ? "bg-white text-[#33B08D] shadow"
                  : "text-[#b7dad0] hover:bg-white/[0.12] hover:text-white"
              )
            }
          >
            Contact Support
          </Tab>
        </Tab.List>
        <Tab.Panels className="mt-8 md:px-10 w-full">
          <Tab.Panel>
            <div className=" flex justify-between">
              <div>
                <h2 className=" text-3xl font-bold text-slate-950">
                  Contact Sales
                </h2>
                <div className=" mt-8">
                  <h4 className=" text-xl font-bold text-slate-950">
                    Products and Solutions
                  </h4>
                  <p className="mt-1 font-bold border-b border-b-[#33B08D]">
                    +880 01770064053
                  </p>
                </div>
              </div>
              <div></div>
            </div>
          </Tab.Panel>
          <Tab.Panel>Contact Support</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
