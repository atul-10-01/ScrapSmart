import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import blogBg from './assets/blog-bg.png';


const Blog2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen scroll-smooth">
      <div className="sticky top-0 z-50 backdrop-blur-md flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
        <img src={logo} alt="logo" className="w-13 h-10" />
        <Link to="/"><img src={nameLogo} alt="logo" className="w-28 " /></Link>
      </div>
      <h2 className="text-2xl text-center mx-16 sm:mx-8 mt-3 lg:mt-5 sm:text-3xl lg:text-4xl tracking-wide">
        How to Manage Your{" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
          Electronic Devices Responsibly
        </span>
      </h2>

      <div
        className="fixed bg-center mt-20 inset-0 bg-no-repeat h-[95%] opacity-45"
        style={{ backgroundImage: `url(${blogBg})`, backgroundSize: '400px' }}
      ></div>
      <div className="relative mt-10 mx-auto px-12">
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Introduction</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          In an era where technology is constantly evolving, managing electronic devices responsibly has become more important than ever. With the increasing proliferation of gadgets, it's crucial to adopt practices that minimize their environmental impact and promote sustainability. In this blog post, we'll explore practical tips and strategies for managing your electronic devices responsibly, from purchasing decisions to proper disposal.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">1. Choose Sustainable Electronics</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          When purchasing new electronic devices, opt for products that are designed with sustainability in mind. Look for brands that prioritize eco-friendly practices, such as using recycled materials, reducing energy consumption, and implementing take-back programs. Certifications like ENERGY STAR, EPEAT, and TCO Certified can help you identify environmentally responsible products. By making informed choices, you can support companies that are committed to reducing their environmental footprint.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">2. Extend the Lifespan of Your Devices</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          One of the most effective ways to reduce e-waste is by extending the lifespan of your electronic devices. Regular maintenance, such as cleaning and updating software, can keep your gadgets running smoothly for longer. When a device malfunctions, consider repairing it instead of replacing it. Many manufacturers offer repair services, and there are numerous online resources and tutorials available for DIY repairs. Additionally, using protective cases and screen guards can prevent physical damage and prolong the life of your devices.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">3. Donate or Sell Old Electronics</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          If you have electronic devices that you no longer use but are still in working condition, consider donating or selling them. Many charitable organizations accept donations of gently used electronics, which can then be refurbished and distributed to those in need. Alternatively, you can sell your old gadgets through online marketplaces or trade-in programs offered by manufacturers and retailers. By giving your devices a second life, you can reduce e-waste and help bridge the digital divide.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">4. Recycle Responsibly</h3>
        <p className="text-sm sm:text-base font-light mb-6">
          When it's time to dispose of electronic devices that are no longer functional, recycling is the best option. Look for certified e-waste recycling facilities in your area that adhere to environmentally sound practices. These facilities ensure that e-waste is properly dismantled, hazardous materials are safely managed, and valuable components are recovered for reuse. Avoid disposing of electronics in regular trash bins, as this can lead to environmental contamination and health hazards.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Conclusion</h3>
        <p className="text-sm sm:text-base font-light mb-32">
          Managing electronic devices responsibly is essential for minimizing their environmental impact and promoting a sustainable future. By choosing sustainable electronics, extending the lifespan of your gadgets, donating or selling old devices, and recycling responsibly, you can contribute to the reduction of e-waste and help protect our planet. Let's embrace responsible electronics management and work towards a greener, cleaner world.
        </p>
      </div>
    </div>
  );
};

export default Blog2;