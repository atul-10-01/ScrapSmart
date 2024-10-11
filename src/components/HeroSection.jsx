import React, { useState, useRef } from 'react';
import axios from 'axios';
import { Camera, Edit2, X } from 'lucide-react'; // Import Camera, Edit, and X (Close) icons
import { Link } from 'react-router-dom';
import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';

const HeroSection = () => {
  const [image, setImage] = useState(null); // Store the uploaded image
  const [apiResponse, setApiResponse] = useState(null); // Store the API response
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state
  const [showPreview, setShowPreview] = useState(false); // For showing image preview
  const fileInputRef = useRef(null); // Reference for hidden file input

  // Function to handle file input change
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (file) {
      setError(null); // Clear error state
      const imageUrl = URL.createObjectURL(file); // For local preview
      setImage(imageUrl); // Save preview
      setShowPreview(true); // Show preview

      try {
        // Upload the image to Cloudinary and get the URL
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', 'ml_default'); // Replace with your Cloudinary upload preset

        const cloudinaryRes = await axios.post(
          'https://api.cloudinary.com/v1_1/drbmo5fgw/image/upload', // Replace with your Cloudinary URL
          formData
        );

        const uploadedImageUrl = cloudinaryRes.data.secure_url;
        setImage(uploadedImageUrl); // Set Cloudinary image URL
      } catch (err) {
        setError('Failed to upload image to Cloudinary');
        console.error(err);
      }
    }
  };

  // Function to call API with the Cloudinary image URL
  const handleAPICall = async (imageUrl) => {
    setLoading(true);
    const options = {
      method: 'POST',
      url: 'https://chatgpt-42.p.rapidapi.com/matagvision',
      headers: {
        'x-rapidapi-key': import.meta.env.VITE_SCAN_IMAGE_API_KEY,
        'x-rapidapi-host': 'chatgpt-42.p.rapidapi.com',
        'Content-Type': 'application/json',
      },
      
      data: {
        messages: [
          {
            role: 'user',
            content: 'What\'s in the image?',
            img_url: imageUrl
          }
        ]
      }
    };
    console.log('Making API request with image URL:', imageUrl); // Log the image URL

    try {
      const response = await axios.request(options);
      console.log('API Response:', response.data); // Log the response
      const result = response.data?.result; // Extract only the 'result' field
      setApiResponse(result); // Save the extracted result
    } catch (error) {
      console.error('API call failed:', error); // Log the error
      setApiResponse('Failed to detect objects or extract text.');
    } finally {
      setLoading(false);
    }
  };

  // Trigger file input when camera icon is clicked
  const handleCameraClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Programmatically trigger file input
    }
  };

  // Handle closing the preview window
  const handleClosePreview = () => {
    setShowPreview(false); // Close the preview
  };

  // Handle "Scan" button click, call API with uploaded image URL
  const handleScan = () => {
    if (image) {
      handleAPICall(image); // Call API with image URL
    } else {
      setError('Please upload an image first.');
    }
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

      <div className="flex justify-center my-10 flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
        <Link to="/dumping-page"
          className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 py-3 px-4 rounded-md"
        >
          Dump Now!
        </Link>

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
            onClick={handleScan}
            className="underline text-green-700"
          >
            Scan & Detect
          </button>
        )}

        <input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          capture="environment"
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center">
          <div
            className="w-12 h-12 border-4 border-green-500 border-t-transparent rounded-full animate-spin"
            role="status"
          ></div>
        </div>
      ) : (
        apiResponse && (
          <div className="mt-4">
            <h2 className="text-xl">Product Description:</h2>
            <p className="bg-neutral-900 p-4">{apiResponse}</p>
          </div>
        )
      )}
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
            <button
              onClick={handleClosePreview}
              className="absolute top-2 right-2 text-green-700"
            >
              <X className="h-6 w-6" />
            </button>

            <button
              onClick={handleCameraClick}
              className="underline text-green-700 my-1 flex items-center"
            >
              <Edit2 className="h-4 mr-1" /> Edit
            </button>

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



      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
};

export default HeroSection;
