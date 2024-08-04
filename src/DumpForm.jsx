import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { metroStations } from './constants';
import { devices } from './DumpingPage';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import formBg from './assets/form-bg.jpg';
import emptyCart from './assets/empty-cart.png';

const FormPage = () => {
  const location = useLocation();
  const { selectedDevices } = location.state || {};
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [pickupOption, setPickupOption] = useState('home');
  const [address, setAddress] = useState('');
  const [metroLine, setMetroLine] = useState('');
  const [metroStation, setMetroStation] = useState('');

  return (
    <div className="relative min-h-screen">
      <div className='absolute inset-0 bg-cover bg-center opacity-45' style={{ backgroundImage: `url(${formBg})` }}></div>
      <div className="relative flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
        <img src={logo} alt="logo" className="w-13 h-10" />
        <Link to="/"><img src={nameLogo} alt="logo" className="w-28 hover:brightness-150 transition-all duration-200" /></Link>
      </div>
      <div className="relative pb-4 w-[90%] sm:w-[500px] xl:w-[750px] mt-2 mx-auto p-2 px-4 bg-gray-300 bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm">
        <h2 className="text-xl text-[1.4rem] tracking-wide font-semibold mb-[0.3rem] pt-2 text-white text-center">Dump your E-waste!</h2>
        <div className="mt-6 flex max-xl:items-center flex-col xl:flex-row xl:gap-28">
          <div className="mb-4 lg:w-[270px]">
            <h2 className="text-xl font-light xl:font-normal mb-2 text-white text-center">Cart Summary</h2>
            {Object.keys(selectedDevices).length === 0 ? (
              <div className='flex flex-col justify-center items-center'>
                <img src={emptyCart} alt="empty-cart" className='my-4 xl:my-10 max-xl:w-[160px]'/>
                <p className="text-white font-light italic text-sm text-center brightness-150 mt-2">No items in Dump Cart</p>
              </div>
            ) : (
              <>
                <div className="flex justify-between text-white mb-2">
                  <span>Product</span>
                  <span>Quantity</span>
                </div>
                <ul className="text-white">
                  {Object.entries(selectedDevices).map(([deviceName, { quantity }]) => {
                    const deviceIcon = devices.find(device => device.name === deviceName).icon;
                    return (
                      <li key={deviceName} className="flex gap-32 justify-between items-center mb-1">
                        <div className="flex items-center">
                          {deviceIcon && React.createElement(deviceIcon, { className: 'w-5 h-5 mr-2' })}
                          <span>{deviceName}</span>
                        </div>
                        <span className='mr-6'>{quantity}</span>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
          <form className="space-y-4 w-[315px]">
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
    </div>
  );
};

export default FormPage;
