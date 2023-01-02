import React from 'react';
import logo from '../logo.svg';

const Header = () => {
  return (
    <nav className="bg-slate-900 flex items-center justify-between space-x-6 px-4 ">
      <div className="flex items-center">
        <img src={logo} alt="" className="  h-12 w-12" />
        <h1 className="px-2 text-2xl text-red-300 font-semibold ">Poll-Pal</h1>
      </div>
      <button className="hover:text-red-300 tracking-tight ">
        Signup with Google
      </button>
    </nav>
  );
};

export default Header;
