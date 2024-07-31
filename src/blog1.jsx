import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import blogBg from './assets/blog-bg.png';

const Blog1 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen scroll-smooth">
      <div className="sticky top-0 z-50 backdrop-blur-md flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
        <img src={logo} alt="logo" className="w-13 h-10" />
        <Link to="/"><img src={nameLogo} alt="logo" className="w-28 " /></Link>
      </div>
      <h2 className="text-2xl text-center mx-16 sm:mx-2 mt-3 lg:mt-0 sm:text-3xl lg:text-4xl tracking-wide">
        Understanding{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Electronic Waste
        </span>
      </h2>
      <div
        className="fixed bg-center mt-20 inset-0 bg-no-repeat h-[95%] opacity-45"
        style={{ backgroundImage: `url(${blogBg})`, backgroundSize: '400px' }}
      ></div>
      <div className="relative mt-10 mx-auto px-12">
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Introduction</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          In today's tech-driven world, electronic devices have become an integral part of our daily lives. From smartphones to laptops, we rely heavily on these gadgets. However, with the rapid advancement of technology, the lifespan of these devices has shortened, leading to a significant increase in electronic waste. E-waste poses a severe threat to the environment and human health, making it crucial to understand its impact and take responsible steps towards its management and disposal.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">What is Electronic Waste?</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          Electronic waste, commonly referred to as e-waste, encompasses discarded electronic devices such as computers, mobile phones, televisions, and other consumer electronics. These items contain hazardous materials like lead, mercury, cadmium, and brominated flame retardants, which can leach into the environment if not disposed of properly. According to the Global E-waste Monitor 2020, the world generated a staggering 53.6 million metric tons of e-waste in 2019, and this figure is expected to rise significantly in the coming years.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">The Environmental Impact of E-Waste</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          Improper disposal of e-waste has dire consequences for the environment. When e-waste is dumped in landfills, toxic substances can seep into the soil and groundwater, contaminating natural resources and posing a threat to wildlife and human health. Moreover, the incineration of e-waste releases harmful chemicals into the atmosphere, contributing to air pollution and climate change. Addressing the environmental impact of e-waste requires a multi-faceted approach that includes reducing consumption, promoting recycling, and implementing stringent disposal regulations.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">The Role of Recycling in E-Waste Management</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          Recycling plays a pivotal role in mitigating the environmental impact of e-waste. By properly recycling electronic devices, valuable materials such as gold, silver, copper, and rare earth elements can be recovered and reused in the production of new devices. This not only conserves natural resources but also reduces the need for mining and manufacturing, which are energy-intensive processes. However, effective recycling requires the collaboration of consumers, manufacturers, and recycling facilities to ensure that e-waste is collected, processed, and disposed of responsibly.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Conclusion</h3>
        <p className="text-sm sm:text-base font-light mb-32">
          Electronic waste is a growing environmental crisis that demands immediate attention and action. By understanding the impact of e-waste and adopting responsible disposal practices, we can significantly reduce its harmful effects on the environment and human health. Embracing sustainable consumption, supporting recycling initiatives, and advocating for stricter regulations are essential steps towards a greener and healthier future.
        </p>
      </div>
    </div>
  );
};

export default Blog1;
