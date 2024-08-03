import { features } from "../constants";

const FeatureSection = () => {
  return (
    <div id="features" className="relative mt-20 border-t border-neutral-800 min-h-[800px]">
      <div className="text-center pt-20">
        <span className="hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] transition ease-in-out cursor-default bg-neutral-900 text-green-600 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
          Features
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-5 lg:mt-10 tracking-wide">
          Explore{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            ScrapSmart
          </span>
        </h2>
      </div>
      <div className="flex flex-wrap justify-center items-center mt-10 lg:mt-10 ">
        {features.map((feature, index) => (
          <div key={index} className="w-full bg-neutral-900 shadow-sm m-3 md:h-[18rem] sm:w-[85%] md:w-[40%] lg:w-[30%] px-2 py-2 rounded-md hover:shadow-gray-400/40 border border-neutral-800 text-neutral-300">
            <div className="flex pt-5 rounded-md">
              <div className="flex mx-2 h-10 w-10 p-2 bg-neutral-900 text-green-600 justify-center items-center rounded-full">
                {feature.icon}
              </div>
              <div>
                <h4 className="mt-1 mb-6 text-xl">{feature.text}</h4>
                <p className="text-md p-3 pl-1 mb-20 text-neutral-300 font-light">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
