import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/code.jpg";
function Workflow() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide ">
        Accelerate your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="code image" />
        </div>
        <div className="pt-12 w-full lg:w-1/2"></div>
      </div>
    </div>
  );
}

export default Workflow;
