import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Contact from "./components/Contact";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <FeatureSection />
        <Workflow />
        <Blogs />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default App;
