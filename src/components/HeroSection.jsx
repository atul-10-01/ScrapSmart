import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div id="hero-section" className="flex flex-col items-center mt-6 lg:mt-20">
      <h1 className="text-4xl mx-12 sm:text-6xl lg:text-7xl text-center tracking-wide">
        ScrapSmart
        <span className="mt-2 text-2xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          Eco-friendly Solutions  <span className=" text-xl sm:text-3xl lg:text-5xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Tangible Rewards
          </span>
        </span>
      </h1>



      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Join hands to turn e-waste into rewards with our innovative recycling program. Embrace nature by responsibly recycling your e-waste and help shape a greener, more sustainable future for all!
      </p>
      <div className="flex justify-center my-10">
        <Link to="/dumping-page"
          className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 py-3 px-4 mx-3 rounded-md"
        >
          Dump Now!
        </Link>
      </div>
      <div className="flex mt-10 justify-center">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-500 mx-2 my-4 object-cover"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border  border-green-700 shadow-sm shadow-green-500 mx-2 my-4 object-cover"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default HeroSection;
