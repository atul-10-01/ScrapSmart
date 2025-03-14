import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import gIcon from './assets/g-icon.png';
import coin from './assets/coins.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Importing the icons
import { SquareArrowOutUpRight } from 'lucide-react';

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State for toggling password visibility

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="relative h-[100vh] overflow-scroll">
            <div className='absolute inset-0 bg-[url("/src/assets/signup-bg.jpg")] bg-cover bg-center opacity-45'></div>
            <div className="relative flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
                <img src={logo} alt="logo" className="w-13 h-10" />
                <Link to="/"><img src={nameLogo} alt="logo" className="w-28 hover:brightness-150 transition-all duration-200" /></Link>
            </div>

            <div className="relative container w-[90%] sm:w-[500px] xl:w-[415px] mt-4 mx-auto p-4 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm">
                <div className="relative flex ml-5 sm:ml-11 items-center opacity-100 px-4">
                    <img src={coin} alt="logo" className="w-11 m-1 opacity-60" />
                    <h2 className="text-xl font-bold text-white text-center">Welcome Back!</h2>
                </div>
                <p className='text-xs font-extralight text-center'>Sign in to track and earn more G-Coins</p>

                <form className='space-y-4'>
                    <div>
                        <label className="block mb-2 text-white">Email</label>
                        <input
                            type="email"
                            className="w-full p-2 border text-[#adadad] bg-white bg-opacity-10 border-gray-800 rounded focus:ring-green-900 focus:border-green-900"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-white">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                className="w-full p-2 border text-[#adadad] bg-white bg-opacity-10 border-gray-800 rounded focus:ring-green-900 focus:border-green-900"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-0 flex items-center pr-3"
                            >
                                {showPassword ? (
                                    <FaEyeSlash className="text-white" />
                                ) : (
                                    <FaEye className="text-white" />
                                )}
                            </button>
                        </div>
                    </div>
                    <div className='text-xs italic leading-[0.1rem] font-light mt-0 pt-0 cursor-pointer hover:text-gray-300 hover:underline'>
                        <a href="#">Forgot Password ?</a>
                    </div>
                    <div>
                        <button type="submit" className="mt-4 w-full p-2 bg-green-800 text-white rounded hover:bg-green-900">
                            Sign In
                        </button>
                    </div>
                    <div className="mt-4 w-full p-2 text-white rounded ">
                        <Link to="/dashboard" className="flex items-center space-x-2">
                            <span className='hover:underline'>Dashboard</span>
                            <SquareArrowOutUpRight className="hover:scale-105" />
                        </Link>
                    </div>

                    <div className='flex justify-center'>
                        <a href="#" className="flex items-center p-[0.2rem] w-[270px] border text-white rounded hover:bg-[#12111085]">
                            <img src={gIcon} alt="logo" className="h-8 " />
                            <span className='ml-[5%] font-medium'>Continue with Google</span>
                        </a>
                    </div>
                    <div className='font-light text-sm text-center mb-4'>
                        New here? <span className='font-bold hover:underline cursor-pointer'>
                            <Link to="/new-account">Create an Account</Link>
                        </span>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Signin;
