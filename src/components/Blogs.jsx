import React from 'react';
import { Link } from 'react-router-dom';
import blog1 from '../assets/blog-1.jpg';
import blog2 from '../assets/blog-2.jpg';
import blog3 from '../assets/blog-3.jpg';
import blog4 from '../assets/blog-4.jpg';
import blog5 from '../assets/blog-5.jpg';
import blog6 from '../assets/blog-6.jpg';

const Blogs = () => {
  return (
    <div id='blogs' className='relative border-t mt-20 border-neutral-800 min-h-[800px]'>
      <div className="text-center pt-20">
        <span className="hover:drop-shadow-[0_1px_1px_rgba(255,255,255,0.5)] transition ease-in-out cursor-default bg-neutral-900 text-green-600 rounded-full h-6 text-sm font-medium px-4 py-2 uppercase">
          Blogs
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center border-neutral-700 mt-10 tracking-wide">
          Know everything about{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text">
            E-Waste
          </span>
        </h2>
      </div>
      <div className='grid grid-cols-1 gap-4 px-4 py-8 mt-5 sm:grid-cols-2 lg:grid-cols-3'>
        <div className='bg-[#3728288a] pb-4 rounded-lg shadow-md max-w-sm mx-auto hover:shadow-gray-400/40'>
          <Link to="/blog1"><img src={blog1} alt='Understanding Electronic Waste' className='w-full h-56 object-cover rounded-t-lg' /></Link>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-green-600 mb-2'>Understanding Electronic Waste</h3>
            <p className='text-gray-300 text-sm'>In today's tech-driven world, electronic devices have become an integral part of our daily lives. From smartphones to laptops, we rely heavily on these gadgets..... </p>
          </div>
        </div>
        <div className='bg-[#3728288a] pb-4 rounded-lg shadow-md max-w-sm mx-auto hover:shadow-gray-400/40'>
          <Link to="/blog2"><img src={blog2} alt='How to Manage Your Electronic Devices Responsibly' className='w-full h-56 object-cover rounded-t-lg' /></Link>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-green-600 mb-2'>How to Manage Your Electronic Devices Responsibly</h3>
            <p className='text-gray-300 text-sm'>In an era where technology is constantly evolving, managing electronic devices responsibly has become...... </p>
          </div>
        </div>
        <div className='bg-[#3728288a] pb-4 rounded-lg shadow-md max-w-sm mx-auto hover:shadow-gray-400/40'>
          <Link to="/blog3"><img src={blog3} alt='Importance of Responsible Disposal of Electronic Waste' className='w-full h-56 object-cover rounded-t-lg' /></Link>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-green-600 mb-2'>Importance of Responsible Disposal of Electronic Waste</h3>
            <p className='text-gray-300 text-sm'>As technology continues to advance at a rapid pace, the volume of electronic waste is growing exponentially......</p>
          </div>
        </div>
        <div className='bg-[#3728288a] pb-4 rounded-lg shadow-md max-w-sm mx-auto hover:shadow-gray-400/40'>
          <Link to="/blog4"><img src={blog4} alt='E-waste in India and Developed Countries' className='w-full h-56 object-cover rounded-t-lg' /></Link>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-green-600 mb-2'>E-waste in India and Developed Countries</h3>
            <p className='text-gray-300 text-sm'>Electronic waste or e-waste is one of the global rising problems in developing countries like India and developed countries. E-waste comprises......</p>
          </div>
        </div>
        <div className='bg-[#3728288a] pb-4 rounded-lg shadow-md max-w-sm mx-auto hover:shadow-gray-400/40'>
          <Link to="/blog5"><img src={blog5} alt='Where Does Your Electronic Waste Go?' className='w-full h-56 object-cover rounded-t-lg' /></Link>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-green-600 mb-2'>Where Does Your Electronic Waste Go?</h3>
            <p className='text-gray-300 text-sm'>All electronic waste is made up of deadly chemicals such as lead, cadmium, beryllium, mercury and brominated flame retardants.....</p>
          </div>
        </div>
        <div className='bg-[#3728288a] pb-4 rounded-lg shadow-md max-w-sm mx-auto hover:shadow-gray-400/40'>
          <Link to="/blog6"><img src={blog6} alt='What are the Long-term Implications of E-Waste Mining?' className='w-full h-56 object-cover rounded-t-lg' /></Link>
          <div className='p-4'>
            <h3 className='text-lg font-semibold text-green-600 mb-2'>What are the Long-term Implications of E-Waste Mining?</h3>
            <p className='text-gray-300 text-sm'>A large number of eWaste recycling companies have started to make use of e-waste mining to decrease the amount of e-waste. The process involves.....</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blogs;
