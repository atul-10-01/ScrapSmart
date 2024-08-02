import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { metroStations } from './constants';
import { devices } from './DumpingPage';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import formBg from './assets/form-bg.jpg';

const FormPage = () => {
  const location = useLocation();
  const { productType } = location.state || {};

  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pickupOption, setPickupOption] = useState('home');
  const [address, setAddress] = useState('');
  const [metroLine, setMetroLine] = useState('');
  const [metroStation, setMetroStation] = useState('');
  const [selectedProduct, setSelectedProduct] = useState(productType || '');

  return (
    <div className="relative min-h-screen">
      <div className='absolute inset-0 bg-cover bg-center opacity-45' style={{ backgroundImage: `url(${formBg})` }}></div>
      <div className="relative flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
        <img src={logo} alt="logo" className="w-13 h-10" />
        <Link to="/"><img src={nameLogo} alt="logo" className="w-28 " /></Link>
      </div>
      <div className="relative container w-[90%] sm:w-[500px] xl:w-[415px] mt-2 mx-auto p-2 px-4 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm">
        <h2 className="text-xl font-bold mb-[0.3rem] text-white text-center">Dump your E-waste!</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-[0.3rem] text-white">Product</label>
            <select
              className="w-full p-2 border text-black bg-slate-300 border-gray-800 rounded focus:ring-green-800 focus:border-green-800"
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(e.target.value)}
            >
              <option value="">Select Product</option>
              {devices.map((device) => (
                <option key={device.name} value={device.name}>
                  {device.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block mb-[0.3rem] text-white">Email</label>
            <input
              type="email"
              className="w-full p-2 border text-black bg-slate-300 border-gray-800 rounded focus:ring-green-800 focus:border-green-800"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-[0.3rem] text-white">Mobile Number</label>
            <input
              type="tel"
              className="w-full p-2 border text-black bg-slate-300 border-gray-800 rounded focus:ring-green-800 focus:border-green-800"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="block mb-[0.3rem] text-white">Pickup Option</label>
            <select
              className="w-full p-2 border text-black bg-slate-300 border-gray-800 rounded focus:ring-green-800 focus:border-green-800"
              value={pickupOption}
              onChange={(e) => setPickupOption(e.target.value)}
              required
            >
              <option value="home">Home Pickup</option>
              <option value="dumpingSite">Dumping Site</option>
            </select>
          </div>
          {pickupOption === 'home' ? (
            <div>
              <label className="block mb-[0.3rem] text-white">Address</label>
              <input
                type="text"
                className="w-full p-2 border text-black bg-slate-300 border-gray-800 rounded focus:ring-green-800 focus:border-green-800"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          ) : (
            <>
              <div>
                <label className="block mb-[0.3rem] text-white">Nearest Metro Line</label>
                <select
                  className="w-full p-2 border text-black bg-slate-300 border-gray-800 rounded focus:ring-green-800 focus:border-green-800"
                  value={metroLine}
                  onChange={(e) => setMetroLine(e.target.value)}
                  required
                >
                  <option value="">Select Line</option>
                  <option value="red">Red</option>
                  <option value="yellow">Yellow</option>
                  <option value="green">Green</option>
                  <option value="blue">Blue</option>
                  <option value="magenta">Magenta</option>
                  <option value="pink">Pink</option>
                </select>
              </div>
              {metroLine && (
                <div>
                  <label className="block mb-[0.3rem] text-white">Nearest Metro Station</label>
                  <select
                    className="w-full p-2 border text-black bg-slate-300 border-gray-800 rounded focus:ring-green-800 focus:border-green-800"
                    value={metroStation}
                    onChange={(e) => setMetroStation(e.target.value)}
                    required
                  >
                    <option value="">Select Station</option>
                    {metroStations[metroLine].map((station) => (
                      <option key={station} value={station}>
                        {station}
                      </option>
                    ))}
                  </select>
                </div>
              )}
            </>
          )}
          <button type="submit" className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormPage;
