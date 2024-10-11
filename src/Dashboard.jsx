import React, { useEffect, useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Recycle, BarChart2, Award, Settings } from 'lucide-react';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import profile from './assets/blank-profile.png';

const Dashboard = () => {
  const user = {
    name: "Atul Nag",
    joinDate: "March 15, 2024",
    totalDisposals: 27,
    carbonSaved: 1750 // in kg
  };

  const leaderboardData = [
    { id: 1, name: "Atul Nag", carbonSaved: 1750 },
    { id: 2, name: "Yash Saxena", carbonSaved: 1500 },
    { id: 3, name: "Aviral Sharma", carbonSaved: 1400 },
    { id: 4, name: "Jayesh Nalwa", carbonSaved: 1250 },
    { id: 5, name: "Rudrr Bansal", carbonSaved: 1100 },
  ];

  const cardBgClass = "bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm";

  const [welcomeMessage, setWelcomeMessage] = useState('');
  const fullMessage = useMemo(() => `Welcome back, ${user.name}!`, [user.name]);

  useEffect(() => {
    let index = 0;
    setWelcomeMessage(''); // Reset the message at the start
    const interval = setInterval(() => {
      if (index <= fullMessage.length) {
        setWelcomeMessage(fullMessage.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);
    
    return () => clearInterval(interval);
  }, [fullMessage]);

  return (
    <div className="relative h-[100vh] overflow-scroll text-white">
      <div className='absolute inset-0 bg-[url("/src/assets/signup-bg.jpg")] bg-cover bg-center opacity-45'></div>

      {/* Header */}
      <div className="relative flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
        <img src={logo} alt="logo" className="w-13 h-10" />
        <Link to="/"><img src={nameLogo} alt="logo" className="w-28 hover:brightness-150 transition-all duration-200" /></Link>
      </div>

      {/* Main container */}
      <div className="relative container mx-auto px-4 py-7 flex flex-col lg:flex-row gap-8">
        {/* Sidebar */}
        <aside className="lg:w-1/6">
          <nav className={`${cardBgClass} shadow-lg p-4`}>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-neutral-700 transition-colors">
                  <Recycle size={20} />
                  <span>Disposals</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-neutral-700 transition-colors">
                  <BarChart2 size={20} />
                  <span>Statistics</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-neutral-700 transition-colors">
                  <Award size={20} />
                  <span>Achievements</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-3 p-2 rounded hover:bg-neutral-700 transition-colors">
                  <Settings size={20} />
                  <span>Settings</span>
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Main content and Leaderboard */}
        <div className="lg:w-5/6 flex flex-col lg:flex-row gap-8">
          {/* Main content */}
          <main className="lg:w-2/3">
            <div className={`${cardBgClass} shadow-lg p-6 mb-6`}>
            <h1 className="text-2xl xl:text-3xl font-bold mb-6">
            {welcomeMessage || 'Welcome!'}
          </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className={`${cardBgClass} shadow-lg p-6`}>
                <h2 className="text-xl font-semibold mb-4">Your Impact</h2>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span>Member since:</span>
                    <span className="font-semibold">{user.joinDate}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Total disposals:</span>
                    <span className="font-semibold">{user.totalDisposals}</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Carbon emissions saved:</span>
                    <span className="font-semibold">{user.carbonSaved} kg</span>
                  </li>
                </ul>
              </div>
              <div className={`${cardBgClass} shadow-lg p-6`}>
                <h2 className="text-xl font-semibold mb-4">Carbon Savings Progress</h2>
                <div className="flex items-center justify-center">
                  <div className="relative w-32 h-32">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#4B5563"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeDasharray="87.5, 100"
                      />
                    </svg>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                      <span className="text-2xl font-bold">87.5%</span>
                      <span className="block text-xs">of 2000kg goal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${cardBgClass} mt-6 shadow-lg p-6`}>
              <h2 className="text-xl font-semibold mb-4">Recent Disposals</h2>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center justify-between">
                  <span>Old Smartphone</span>
                  <span>25kg CO<sub>2</sub> saved</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Broken Laptop</span>
                  <span>40kg CO<sub>2</sub> saved</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Outdated Tablet</span>
                  <span>30kg CO<sub>2</sub> saved</span>
                </li>
              </ul>
            </div>
          </main>

          {/* Leaderboard */}
          <aside className="lg:w-1/3">
            <div className={`${cardBgClass} shadow-lg p-6`}>
              <h2 className="text-2xl font-semibold mb-4">Carbon Savings Leaderboard</h2>
              <ul className="space-y-4">
                {leaderboardData.map((user, index) => (
                  <li key={user.id} className="flex items-center space-x-4 p-3 rounded-lg bg-neutral-700">
                    <span className="text-2xl w-8 text-center">
                      {index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : index + 1}
                    </span>
                    <img src={profile} alt={user.name} className="w-12 h-12 rounded-full" />
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg">{user.name}</h3>
                      <p className="text-sm text-gray-300">{user.carbonSaved} kg CO<sub>2</sub> saved</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
