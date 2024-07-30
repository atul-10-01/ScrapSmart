import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog5 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen scroll-smooth">
      <div className="sticky top-0 z-50 backdrop-blur-md flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
        <img src="src/assets/logo.png" alt="logo" className="w-13 h-10" />
        <Link to="/"><img src="src/assets/name-logo.png" alt="logo" className="w-28 " /></Link>
      </div>
      <h2 className="text-2xl text-center mx-16 sm:mx-8 mt-3 lg:mt-5 sm:text-3xl lg:text-4xl tracking-wide">
      Where Does Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        Electronic Waste Go?
        </span>
      </h2>

      <div className="fixed bg-center mt-20 inset-0 bg-[url('src/assets/blog-bg.png')] bg-no-repeat h-[95%] opacity-45 bg-[length:400px]"></div>
      <div className="relative mt-10 mx-auto px-12">
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Introduction</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        All electronic waste is made up of deadly chemicals such as lead, cadmium, beryllium, mercury, and brominated flame retardants. Disposing of gadgets and devices improperly increases the chances of these dangerous chemicals contaminating the soil, polluting the air, and leaching into water bodies.This blog explores where e-waste goes, its impact on landfills, the reality of recycling, the human cost of scavenging, and potential solutions and recommendations.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Impact of E-waste in Landfills</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        When e-waste is deposited in a landfill, it tends to leach when water passes through it, picking up trace elements. This contaminated landfill water can then reach natural groundwater, significantly increasing toxic levels. If this toxic water enters drinking water bodies, it poses severe health risks to humans and animals.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">The Reality of Recycling</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        Despite having an eco-friendly approach, recycling often leads to overseas shipping and dumping of gadgets, which are then buried in pits. Worse still is the fact that some recycling companies ship e-waste to third-world countries, disguising it as philanthropy. This practice results in significant environmental and health hazards in these regions.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">The Human Cost of E-waste Scavenging</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        Many children in these countries earn their livelihoods by scavenging for valuable materials like gold, silver, iron, and copper from tech waste. This process exposes them to harmful chemicals, jeopardizing their health. Furthermore, countries used as dumping grounds for e-waste often have high rates of cybercrime. Salvaged hard drives can provide criminals with direct access to personal files and information, leading to identity theft and other cybercrimes.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Solutions and Recommendations</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        Addressing the e-waste problem requires a multifaceted approach. Firstly, consumers should be educated about the importance of proper e-waste disposal and the dangers of improper handling. Manufacturers can adopt sustainable practices such as designing products for longer lifespans and easier recycling. Governments and international organizations need to enforce stricter regulations on e-waste disposal and recycling to prevent illegal dumping. Supporting certified e-waste recycling programs and promoting Extended Producer Responsibility (EPR) policies can also play a significant role in reducing the negative impacts of e-waste.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Conclusion</h3>
        <p className="text-sm sm:text-base font-light mb-32">
        The improper disposal of e-waste has far-reaching consequences, affecting both the environment and human health. It is crucial to adopt responsible e-waste management practices and ensure that recycling efforts do not harm vulnerable communities. By increasing awareness and implementing stricter regulations, we can mitigate the negative impacts of e-waste and protect our planet for future generations.
        </p>
      </div>
    </div>
  );
};

export default Blog5;