import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Laptop, Mouse, Monitor, Printer, Keyboard, Network, Disc, Tablet, WashingMachine, Microwave, Headphones, Fan, Cable, Battery, CircuitBoard } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import dumpBg from './assets/dump-bg.jpg';


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

  const handleProductClick = (productType) => {
    navigate('/form', { state: { productType } });
  };

  return (
    <div className="relative h-[100vh]">
      <div
        className="absolute inset-0 bg-cover bg-center h-full opacity-40 will-change-transform"
        style={{ backgroundImage: `url(${dumpBg})` }}
      ></div>
      <div className="relative z-10 p-4">
        <div className="sticky top-0 z-50 backdrop-blur-md flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
          <img src={logo} alt="logo" className="w-13 h-10" />
          <Link to="/"><img src={nameLogo} alt="logo" className="w-28 " /></Link>
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
              className="cursor-pointer flex flex-col items-center border border-gray-300 bg-gray-500 bg-opacity-40 hover:bg-opacity-50 text-white p-4 m-2 rounded-lg transition-all duration-100"
              onClick={() => handleProductClick(device.name)}
            >

              <device.icon className="w-9 h-9 sm:w-12 sm:h-12" />
              <div className="text-sm sm:text-base mt-2 text-center">{device.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DumpingPage;
