import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import nameLogo from './assets/name-logo.png';
import gIcon from './assets/g-icon.png';
import coin from './assets/coins.png';


const NewAccount = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);

        const isPasswordValid = password.length >= 6 && password.length <= 8;
        const isPasswordCheck = password === confirmPassword;

        if (isPasswordValid && isPasswordCheck) {

            setEmail('');
            setPassword('');
            setConfirmPassword('');

            setSuccessMessage('Account created successfully !!');

            setIsSubmitted(false);

            setTimeout(() => setSuccessMessage(''), 9000);
        }
    };

    const isPasswordValid = password.length >= 6 && password.length <= 8;
    const isPasswordCheck = password === confirmPassword;

    return (
        <div className="relative h-[100vh] overflow-scroll">
            <div className='absolute inset-0 bg-[url("/src/assets/signup-bg.jpg")] bg-cover bg-center opacity-45'></div>
            <div className="relative flex justify-start items-center opacity-100 px-4 ml-[0.55rem]">
            <img src={logo} alt="logo" className="w-13 h-10" />
            <Link to="/"><img src={nameLogo} alt="logo" className="w-28 " /></Link>
            </div>

            <div className="relative container w-[90%] sm:w-[500px] xl:w-[415px] mt-4 mx-auto p-4 bg-white bg-opacity-10 rounded-lg backdrop-filter backdrop-blur-sm">
                <div className="relative flex items-center opacity-100 md:ml-8 xl:ml-0 sm:px-4">
                    <img src={coin} alt="logo" className="w-11 mr-2" />
                    <h2 className="min-[411px]:text-xl text-[1.18rem] font-bold text-white sm:text-center">Welcome to ScrapSmart !</h2>
                </div>
                <p className='text-xs font-extralight text-center'>Register now to earn G-Coins</p>

                <form className='space-y-4' onSubmit={handleSubmit}>
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
                        <label className="block mb-2 text-white">Password
                            {isSubmitted && !isPasswordValid && (
                                <span className="text-red-500 italic text-sm ml-2">(Must be 6-8 characters long)</span>
                            )}
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border text-[#adadad] bg-white bg-opacity-10 border-gray-800 rounded focus:ring-green-900 focus:border-green-900"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-2 text-white">Confirm Password
                            {isSubmitted && !isPasswordCheck && (
                                <span className="text-red-500 italic text-sm ml-2">(Doesn't Match)</span>
                            )}
                        </label>
                        <input
                            type="password"
                            className="w-full p-2 border text-[#adadad] bg-white bg-opacity-10 border-gray-800 rounded focus:ring-green-900 focus:border-green-900"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <button type="submit" className="mt-2 w-full p-2 bg-green-800 text-white rounded hover:bg-green-900">Register</button>
                    </div>
                    <div className='flex justify-center'>
                        <a href="#" className=" flex items-center p-[0.2rem] w-[270px] border text-white rounded hover:bg-[#12111085]">
                            <img src={gIcon} alt="logo" className="h-8 " />
                            <span className='ml-[5%] font-medium'>Continue with Google</span>
                        </a>
                    </div>
                    <div className='font-light text-sm text-center mb-4'>
                        Existing User?
                        <span className='font-bold hover:underline cursor-pointer'>
                            <Link to="/signin">Sign In</Link>
                        </span>
                    </div>
                    {successMessage && (
                        <div className="text-green-500 text-center my-2 animate-fadeScale">
                            {successMessage}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}

export default NewAccount;
