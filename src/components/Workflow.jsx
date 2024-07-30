import { CheckCircle2 } from "lucide-react";
import codeImg from "../assets/workflow.png";
import { checklistItems } from "../constants";

const Workflow = () => {
  return (
    <div id="workflow" className="relative mt-20 border-t border-neutral-800 min-h-[800px]">
      <div className="text-center pt-20">
      <span className="hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] transition ease-in-out cursor-default bg-neutral-900 text-green-600 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
          Workflow
        </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-5 mb-5 lg:mt-10 tracking-wide">
        Accelerate our{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Workflow....!
        </span>
      </h2>
      </div>
      <div className="flex flex-wrap justify-center">
        <div className="p-2 w-full lg:w-1/2">
          <img src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;
