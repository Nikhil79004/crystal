import React, { useState } from 'react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { MdOutlineMessage } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';


const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [ setSearchModalOpen] = useState(false);


  const navLinks = (
    <>
      <li className="py-2 text-lg font-medium transition-colors duration-300 hover:text-green-400">
        <details>
          <summary className="cursor-pointer">My Apps</summary>6
        </details>
      </li>
      <li className="py-2 text-lg font-medium transition-colors duration-300 hover:text-green-400">
        <a href="#">Home</a>
      </li>
      <li className="py-2 text-lg font-medium transition-colors duration-300 hover:text-green-400">
        <a href="#">Explore</a>
      </li>
    </>
    );

  return (
    <div>
      <div className="relative shadow-lg navbar bg-gradient-to-r from-slate-500 via-slate-400 to-slate-500 bg-[length:300%_300%] animate-gradientMove">
        <div className="flex items-center justify-between w-full">
          {/* Navbar Start */}
          <div className="flex items-center navbar-start">
            <button
              className="btn btn-ghost lg:hidden"
              onClick={() => setDrawerOpen(!drawerOpen)}
              aria-label="Toggle Drawer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>

            <a
              className="flex items-center gap-4 text-3xl font-bold text-blue-400"
              href="#"
            >
              <img
                src="https://tse4.mm.bing.net/th?id=OIP.hJ3xdyPBF0JXNx5GY09igAHaHa&pid=Api&P=0&h=180"
                alt="crystal image"
                className="w-auto h-10 ml-4"
              />
              <h2 className="hidden lg:flex">Crystal</h2>
            </a>
          </div>

          {/* Navbar Center */}
          <div className="hidden lg:flex navbar-center">
            <ul className="flex space-x-6 menu menu-horizontal">{navLinks}</ul>
          </div>

          {/* Navbar End */}
          <div className="hidden lg:flex navbar-end">
          </div>

          <div className='flex items-center m-8 space-x-6'>
          <button
                    className="btn btn-ghost btn-circle hover:scale-125"
                    onClick={() => setSearchModalOpen(true)}
                >
                    <BiSearch className="w-6 text-white h-7" />
                </button>

                {/* Messages Button */}
                <button className="btn btn-ghost btn-circle hover:scale-125" onClick={() => alert('View all messages')}>
                    <MdOutlineMessage className="w-6 text-green-400 h-7" />
                </button>

                 {/* Notifications Button */}
                 <button className="btn btn-ghost btn-circle hover:scale-125" onClick={() => alert('View all notifications')} >
                  <IoMdNotificationsOutline className="w-6 text-orange-500 h-7" />
          </button>
          <div className="dropdown dropdown-end hover:scale-125">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost btn-circle avatar"
                        onClick={() => alert('open profile')}
                    >
                        <div className="z-20 w-12 p-1 border border-blue-400 rounded-full">
                            <img
                                alt="User Avatar"
                                className="object-cover w-full h-full rounded-full "
                                src="https://static.vecteezy.com/system/resources/previews/006/487/917/original/man-avatar-icon-free-vector.jpg" 
                            />
                        </div>
          </div>
                    
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



