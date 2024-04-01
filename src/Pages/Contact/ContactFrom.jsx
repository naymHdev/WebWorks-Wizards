import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContactFrom = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    businessEmail: "",
    country: "",
    businessPhone: "",
    company: "",
    areaOfInterest: "",
    emailOrPhone: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      <div className="mt-16">
        <h2 className=" text-4xl font-bold">
          Products and Solutions Inquiries
        </h2>
        <p className=" font-medium mt-4">
          Have a question about purchasing a product or solution that you are
          interested in? We’re here to help.
        </p>
      </div>
      <section>
        <div className=" mt-10">
          <form>
            <div className="grid grid-cols-1 gap-4">
              <div className="space-y-6">
                <div className=" w-full">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="input-field w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="input-field w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  name="businessEmail"
                  value={formData.businessEmail}
                  onChange={handleChange}
                  placeholder="Business Email"
                  className="input-field w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                />
                <div>
                  <input
                    type="text"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="input-field w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="businessPhone"
                    value={formData.businessPhone}
                    onChange={handleChange}
                    placeholder="Business Phone"
                    className="input-field w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Company"
                    className="input-field w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="areaOfInterest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                    placeholder="Area of Interest"
                    className="input-field w-full border-b py-1 hover:border-[#33B08D] focus:outline-none"
                  />
                </div>
              </div>
              <div>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="emailOrPhone"
                    checked={formData.emailOrPhone}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <span>Contact via Email or Phone</span>
                </label>
              </div>
              <button
                type="submit"
                className="bg-[#37a385] flex items-center justify-center gap-2 hover:bg-[#3fe1b3] text-white font-bold py-2 px-4 rounded-md"
              >
                Continue <FaArrowRight />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactFrom;
