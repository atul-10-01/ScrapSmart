import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div id="testimonials" className="relative border-t mt-20 border-neutral-800 min-h-[800px]">
     <div className="text-center pt-20">
      <span className="hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] transition ease-in-out cursor-default bg-neutral-900 text-green-600 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
         Testimonials
        </span>
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center border-neutral-700 mt-10 tracking-wide">
        What people are {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        Saying !
        </span>
      </h2>
      </div>
      <div className="flex flex-wrap justify-center mt-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-neutral-900 shadow-sm m-1 md:m-3 h-70  md:w-[40%] lg:w-[30%] px-10 md:px-2 md:py-2 rounded-md hover:shadow-gray-400/40 border border-neutral-800">
            <div className="rounded-md py-6 sm:p-6 text-md font-thin">
              <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <div>
                  <h4 className="font-[400]">{testimonial.user}</h4>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
