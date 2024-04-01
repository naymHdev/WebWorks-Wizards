import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const Integrations = () => {
  const [integration, setIntegration] = useState();

  useEffect(() => {
    fetch("./integrations.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }
        return res.json();
      })
      .then((data) => {
        setIntegration(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(integration);

  return (
    <>
      <div className=" mt-16 px-10">
        <h1 className=" text-4xl font-bold text-slate-950">
          Over 700 integrations.
        </h1>
        <p className=" text-slate-800 font-medium mt-2">
          Work how you want and eliminate tool sprawl.
        </p>
        <h3 className="mt-5 text-[#33B08D] flex items-center gap-2 hover:gap-3 hover:cursor-pointer">
          See our integrations <FaArrowRight />
        </h3>
      </div>
      <section></section>
    </>
  );
};

export default Integrations;
