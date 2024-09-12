import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import { Link } from 'react-router-dom';
import { Camera, Edit2, X } from 'lucide-react'; // Import Camera, Edit, and X (Close) icon
import React, { useRef, useState } from 'react';

const HeroSection = () => {
  const fileInputRef = useRef(null); // Reference for the hidden file input
  const [image, setImage] = useState(null); // State to store selected image
  const [showPreview, setShowPreview] = useState(false); // State to control if preview should be shown

  // Function to handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the selected image
      setImage(imageUrl); // Set the image to preview
      setShowPreview(false); // Initially hide the preview
    }
  };

  // Function to trigger the file input when camera icon is clicked
  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger the file input
    }
  };

  // Function to handle clicking the "Preview" text
  const handlePreviewClick = () => {
    setShowPreview(true); // Show the preview when "Preview" is clicked
  };

  // Function to handle the "Edit" action
  const handleEditClick = () => {
    handleCameraClick(); // Trigger file input again for editing
  };

  // Function to handle closing the preview window
  const handleClosePreview = () => {
    setShowPreview(false); // Close the preview
  };

  return (
    <div id="hero-section" className="flex flex-col items-center mt-6 lg:mt-20 relative">
      <h1 className="text-4xl mx-12 sm:text-6xl lg:text-7xl text-center tracking-wide">
        ScrapSmart
        <span className="mt-2 text-2xl sm:text-4xl lg:text-6xl bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
          {" "}
          Eco-friendly Solutions  
          <span className="text-xl sm:text-3xl lg:text-5xl bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text">
            {" "}
            Tangible Rewards
          </span>
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-neutral-500 max-w-4xl">
        Join hands to turn e-waste into rewards with our innovative recycling program. Embrace nature by responsibly recycling your e-waste and help shape a greener, more sustainable future for all!
      </p>

      {/* Dump Now Button */}
      <div className="flex justify-center my-10 flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/dumping-page"
          className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 py-3 px-4 rounded-md"
        >
          Dump Now!
        </Link>

        {/* Camera Icon for Scanning E-Waste */}
        <button
          onClick={handleCameraClick}
          className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 py-3 px-4 rounded-md flex items-center"
        >
          <Camera className="mr-2" />
          Scan E-Waste
        </button>

        {/* Show Preview Button if image is uploaded */}
        {image && (
          <button
            onClick={handlePreviewClick}
            className="underline text-green-700"
          >
            Preview
          </button>
        )}

        {/* Hidden file input for selecting images */}
        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment" // Opens camera on mobile or file picker on desktop
          onChange={handleFileChange}
          style={{ display: 'none' }} // Hide the input element
        />
      </div>

      {/* Videos Section */}
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
          className="rounded-lg w-1/2 border border-green-700 shadow-sm shadow-green-500 mx-2 my-4 object-cover"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Image Preview Modal */}
      {showPreview && (
        <div className="fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-neutral-900 p-4 rounded-lg w-1/2 h-1/2 flex flex-col items-center relative">
            {/* Close (Cross) Icon */}
            <button
              onClick={handleClosePreview}
              className="absolute top-2 right-2 text-green-700"
            >
              <X className="h-6 w-6" />
            </button>
            
            {/* Edit Button */}
            <button
              onClick={handleEditClick}
              className="underline text-green-700 my-1 flex items-center"
            >
              <Edit2 className="h-4 mr-1" /> Edit
            </button>
            
            {/* Image Preview */}
            <div className="w-full h-4/5 flex items-center justify-center">
              <img 
                src={image} 
                alt="Selected e-waste" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeroSection;
