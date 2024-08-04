import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Laptop, Mouse, Monitor, Printer, Keyboard, Network, Disc, Tablet, WashingMachine, Microwave, Headphones, Fan, Cable, Battery, CircuitBoard, ShoppingCart } from 'lucide-react';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import formBg from './assets/form-bg.jpg';
import cart from './assets/cart.png';

export const devices = [
  { name: 'Laptop', icon: Laptop },
  { name: 'Mouse', icon: Mouse },
  { name: 'Monitors', icon: Monitor },
  { name: 'Printers', icon: Printer },
  { name: 'Keyboard', icon: Keyboard },
  { name: 'Network Equipment', icon: Network },
  { name: 'DVD Players', icon: Disc },
  { name: 'Phones', icon: Tablet },
  { name: 'Washing Machine', icon: WashingMachine },
  { name: 'Microwave', icon: Microwave },
  { name: 'Headphones', icon: Headphones },
  { name: 'Electric Fans', icon: Fan },
  { name: 'Cable', icon: Cable },
  { name: 'Battery', icon: Battery },
  { name: 'Others', icon: CircuitBoard },
];

const DumpingPage = () => {
  const navigate = useNavigate();
  const [selectedDevices, setSelectedDevices] = useState({});
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddClick = (device) => {
    setSelectedDevices((prevSelectedDevices) => ({
      ...prevSelectedDevices,
      [device.name]: { quantity: 1 },
    }));
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 2000);
  };

  const handleQuantityChange = (deviceName, change) => {
    setSelectedDevices((prevSelectedDevices) => {
      const newQuantity = prevSelectedDevices[deviceName].quantity + change;
      if (newQuantity <= 0) {
        const { [deviceName]: _, ...rest } = prevSelectedDevices;
        return rest;
      } else {
        return {
          ...prevSelectedDevices,
          [deviceName]: { quantity: newQuantity },
        };
      }
    });
  };

  const handleNextClick = () => {
    navigate('/form', { state: { selectedDevices } });
  };

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center h-full opacity-40 will-change-transform"
        style={{ backgroundImage: `url(${formBg})` }}
      ></div>
      <div className="relative z-10 p-1 pt-0">
        <div className="relative flex justify-between items-center opacity-100 px-4 ml-[0.55rem]">
          <div className="flex justify-start items-center">
            <img src={logo} alt="logo" className="w-13 h-10" />
            <Link to="/"><img src={nameLogo} alt="logo" className="w-28 hover:brightness-150 transition-all duration-200" /></Link>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <img
              src={cart}
              alt="cart-logo"
              width={60}
              className="cursor-pointer mt-2 hover:brightness-125"
              onClick={handleNextClick}
            />
            <p onClick={handleNextClick} className='text-sm font-serif cursor-pointer'>Dump Cart</p>
          </div>
        </div>
        <div id='dump'>
          <h3 className='text-xl text-center p-4 capitalize sm:text-2xl'>
            Choose the Product you want to dump
          </h3>
        </div>
        <div className="w-[] lg:w-[80%] xl:w-3/4 mx-auto grid grid-cols-2 gap-2 p-3 sm:grid-cols-3 sm:gap-4 sm:p-4">
          {devices.map((device) => (
            <div
              key={device.name}
              className="flex flex-col items-center border border-gray-300 bg-gray-700 bg-opacity-60 hover:bg-opacity-70 text-white p-4 m-2 rounded-lg transition-all duration-100"
            >
              <device.icon className="w-9 h-9 sm:w-12 sm:h-12" />
              <div className="text-sm sm:text-base mt-2 text-center">{device.name}</div>
              {selectedDevices[device.name] ? (
                <div className="flex items-center max-sm:mt-3 max-sm:py-[0.2rem] mt-2">
                  <button
                    className="border-2 border-gray-300 hover:bg-green-800 text-white max-sm:text-sm rounded px-3 py-1 max-sm:py-[0.2rem] mx-1"
                    onClick={() => handleQuantityChange(device.name, -1)}
                  >
                    -
                  </button>
                  <span className="mx-2">{selectedDevices[device.name].quantity}</span>
                  <button
                    className="border-2 border-gray-300 hover:bg-green-800 text-white max-sm:text-sm rounded px-3 py-1 max-sm:py-[0.2rem] mx-1"
                    onClick={() => handleQuantityChange(device.name, 1)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="mt-3 border-[1.4px] border-gray-300 hover:bg-green-800 text-white px-4 max-sm:text-xs max-sm:py-2 text-sm font-light py-1 sm:py-2 rounded "
                  onClick={() => handleAddClick(device)}
                >
                  Dump to Cart
                </button>
              )}
            </div>
          ))}
        </div>
        {showNotification && (
          <div className='max-xl:flex max-xl:items-center'>
            <div className="fixed bottom-4 right-[23%] md:right-[35%] lg:top-24 lg:right-4 text-sm lg:text-xs font-light bg-green-700 bg-opacity-100 py-3 xl:py-2 px-10 xl:px-4 rounded transition-opacity duration-100 animate-fadeScale xl:h-8 ">
              *Added to Dump Cart
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default DumpingPage;
