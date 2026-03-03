import React, { useState } from 'react';
import { IoMdAdd, IoMdMenu, IoMdClose } from "react-icons/io";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-white shadow-sm">
            <nav className='max-w-7xl mx-auto px-4 py-4 flex justify-between items-center gap-4'>
                
               
                <div className='flex-shrink-0'>
                    <h1 className='text-lg md:text-xl font-bold'>CS-Ticket System</h1>
                </div>

          
                <ul className='hidden lg:flex justify-between gap-6 text-lg font-serif'>
                    <li className="cursor-pointer hover:text-blue-600">Home</li>
                    <li className="cursor-pointer hover:text-blue-600">Changelog</li>
                    <li className="cursor-pointer hover:text-blue-600">Faq</li>
                    <li className="cursor-pointer hover:text-blue-600">Blog</li>
                    <li className="cursor-pointer hover:text-blue-600">Download</li>
                    <li className="cursor-pointer hover:text-blue-600">Contact</li>
                </ul>

               
                <div className="flex items-center gap-3">
                    <button className='bg-[#422AD5] text-white flex items-center justify-center gap-2 text-sm md:text-base px-4 py-2 rounded-md hover:bg-blue-700 transition-all'>
                        <IoMdAdd /> <span className="hidden sm:inline">New Ticket</span>
                    </button>

                 
                    <button 
                        className="lg:hidden text-2xl" 
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <IoMdClose /> : <IoMdMenu />}
                    </button>
                </div>
            </nav>

           
            {isOpen && (
                <div className="lg:hidden bg-gray-50 p-4 border-t">
                    <ul className='flex flex-col gap-4 text-lg font-serif'>
                        <li className="border-b pb-2">Home</li>
                        <li className="border-b pb-2">Changelog</li>
                        <li className="border-b pb-2">Faq</li>
                        <li className="border-b pb-2">Blog</li>
                        <li className="border-b pb-2">Download</li>
                        <li className="border-b pb-2">Contact</li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;