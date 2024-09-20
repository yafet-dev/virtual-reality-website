import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "./../constants/index";

function Pricing() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap">
        {pricingOptions.map((option, index) => {
          return (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
              <div className="p-10 border border-neutral-700 rounded-xl">
                <p className="text-4xl mb-8">{option.title}</p>
                {option.title === "Pro" && <span>Most Popular</span>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Pricing;
