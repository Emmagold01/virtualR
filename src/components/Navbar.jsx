import { navItems } from '../constants';
import { Icon } from '@iconify/react';
import logo from '../assets/logo.png';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleBtn() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img src={logo} alt="logo " className="h-10 w-10 mr-2" />
            <span className="text-xl tracking-tight">VirtualR</span>
          </div>
          <ul className="hidden lg:flex space-x-12 ml-16 ">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.href}
                  className="hover:text-orange-500 transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex space-x-7 items-center">
            <a href="#" className="py-2 px-3 border rounded-lg">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
          <button onClick={toggleBtn} className="lg:hidden">
            <Icon
              icon={isOpen ? 'fa-solid:times' : 'fa-solid:bars'}
              width="20px"
              height="20px"
            />
          </button>
        </div>

        {/* mobile view */}
        <div
          className={`fixed top-14 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden rounded-2xl transition-all duration-300 ease-in-out transform ${
            isOpen
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className="py-3">
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
          <div className="flex justify-center space-x-3 items-center mt-4">
            <a href="#" className="py-2 px-3 border rounded-lg">
              Sign In
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md"
            >
              Create an account
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
