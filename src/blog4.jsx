import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog4 = () => {
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
      E-waste in India and {" "}
        <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
        developed countries
        </span>
      </h2>

      <div className="fixed bg-center mt-20 inset-0 bg-[url('src/assets/blog-bg.png')] bg-no-repeat h-[95%] opacity-45 bg-[length:400px]"></div>
      <div className="relative mt-10 mx-auto px-12">
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Introduction</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        Electronic waste, or e-waste, is a rapidly escalating problem in both developing countries like India and in developed nations. E-waste comprises a range of discarded electronic devices and components that contain both valuable and toxic materials. The improper disposal and management of e-waste pose significant health and environmental risks. This blog provides an overview of global e-waste statistics, health concerns related to e-waste, management and recycling practices, legislative policies, and initiatives taken by developed countries.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Global E-waste Statistics and Health Concerns</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        The world generates an enormous amount of e-waste each year. According to the Global E-waste Monitor, approximately 53.6 million metric tonnes of e-waste were produced in 2019, with projections indicating a continual rise. Developed countries contribute a substantial share of this waste due to high consumption rates of electronic devices. In contrast, developing countries like India are experiencing increasing e-waste due to rapid urbanization and technological advancement.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">E-waste Management and Recycling</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        Efficient e-waste management and recycling are crucial to mitigate the adverse effects of e-waste. Developed countries have established more structured and formal recycling systems compared to developing countries. In India, e-waste management is primarily handled by the informal sector, which lacks proper facilities and knowledge for safe recycling. However, efforts are being made to formalize e-waste recycling processes.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Legislative Policies on E-waste</h3>
        <p className="text-sm sm:text-base font-light mb-6">
        Both developed and developing countries are implementing legislative measures to address e-waste management. In India, the E-waste (Management) Rules, 2016 mandate proper disposal and recycling of e-waste by producers, consumers, and recyclers. Developed countries like the EU have stricter regulations, such as the Waste Electrical and Electronic Equipment (WEEE) Directive, which requires manufacturers to take responsibility for the disposal of electronic products.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Initiatives in Developed Countries
        </h3>
        <p className="text-sm sm:text-base font-light mb-6">
        Developed countries have pioneered several initiatives to manage e-waste effectively. Extended Producer Responsibility (EPR) is a key policy where manufacturers are responsible for the entire lifecycle of their products, including take-back, recycling, and final disposal. Producer Responsibility Organizations (PROs) are established to help manufacturers comply with EPR regulations. These initiatives ensure that e-waste is managed in an environmentally sound manner.
        </p>
        <h3 className="text-lg sm:text-2xl font-[400] mb-2 tracking-wide">Conclusion</h3>
        <p className="text-sm sm:text-base font-light mb-32">
        E-waste is a global challenge that requires concerted efforts from both developing and developed countries. While developed nations have made significant strides in e-waste management through policies like EPR and the establishment of PROs, developing countries like India need to accelerate their efforts. By adopting best practices and fostering international cooperation, the world can effectively address the e-waste problem, ensuring a healthier environment and a sustainable future.
        </p>
      </div>
    </div>
  );
};

export default Blog4;