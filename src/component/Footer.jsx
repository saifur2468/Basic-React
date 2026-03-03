import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

const Footer = () => {
    return (
        <div>
            <footer className="bg-black text-gray-400 py-16 px-10 mt-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-white text-xl font-bold mb-4">CS — Ticket System</h3>
            <p className="text-sm leading-relaxed max-w-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>About Us</li>
              <li>Our Mission</li>
              <li>Contact Sales</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Products & Services</li>
              <li>Customer Stories</li>
              <li>Download Apps</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Social Links</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2"><FaTwitter className="bg-white text-black p-1 rounded-full text-xl" /> @CS — Ticket System</li>
              <li className="flex items-center gap-2"><FaLinkedin className="bg-white text-black p-1 rounded-full text-xl" /> @CS — Ticket System</li>
              <li className="flex items-center gap-2"><FaFacebook className="bg-white text-black p-1 rounded-full text-xl" /> @CS — Ticket System</li>
              <li className="flex items-center gap-2"><IoMdMail className="bg-white text-black p-1 rounded-full text-xl" /> support@cst.com</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-gray-800 mt-12 pt-8 text-center text-sm">
          © 2026 CS — Ticket System. All rights reserved.
        </div>
      </footer>
        </div>
    );
};

export default Footer;