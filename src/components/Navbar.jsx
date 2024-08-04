import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import logo from '../assets/logo.png';
import nameLogo from '../assets/name-logo.png';
import { navItems } from '../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleMobileDrawer = () => {
        setMobileDrawerOpen(!mobileDrawerOpen);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <nav id='navbar' className="sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-700/80">
            <div className="px-3 xl:px-4 mx-3 justify-center relative text-sm">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-start">
                        <img src={logo} alt="logo" className="w-13 h-10" />
                        <button onClick={scrollToTop}>
                            <img src={nameLogo} alt="logo" className="w-28 mt-0 hover:brightness-150 transition-all duration-200" />
                        </button>
                    </div>
                    <ul className="hidden lg:flex ml-4 space-x-10 xl:space-x-12">
                        {navItems.map((item, index) => (
                            <li className="transition ease-in-out hover:underline" key={index}>
                                <a href={item.href}>{item.label}</a>
                            </li>
                        ))}
                    </ul>
                    <div className="hidden lg:flex justify-center space-x-12 items-center">
                        <Link to="/signin" className='transition-all duration-300 hover:scale-105 py-2 px-3 border rounded-md hover:bg-gradient-to-r from-green-500 to-green-700'>Sign In</Link>
                        <Link to="/new-account" className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 py-2 px-3 rounded-md">Create an account</Link>
                    </div>
                    <div className="lg:hidden md:flex flex-col justify-end">
                        <button aria-label="hamburger-menu" onClick={toggleMobileDrawer}>{mobileDrawerOpen ? <X /> : <Menu />}</button>
                    </div>
                </div>
                {mobileDrawerOpen && (
                    <div className="fixed right-0 z-20 bg-neutral-900 bg-opacity-85 backdrop-blur-xl w-70 p-6 my-3.5 flex flex-col justify-center lg:hidden">
                        <ul>
                            {navItems.map((item, index) => (
                                <li className="transition ease-in-out hover:underline py-2" key={index}>
                                    <a href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                        <div className="flex flex-col justify-center my-5 space-y-3.5">
                            <Link to="/signin" className='transition-all duration-300 hover:scale-105 py-2 px-3 border rounded-md w-20 hover:bg-gradient-to-r from-green-500 to-green-700'>Sign In</Link>
                            <Link to="/new-account" className="transition-all duration-300 hover:scale-105 bg-gradient-to-r from-green-500 to-green-700 py-2 px-3 rounded-md">Create an account</Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar;
