import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import Payments from './Payments';

const Header = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  const buttonContent = (currentUser) => {
    console.log(currentUser);
    switch (currentUser) {
      case null:
        return;
      case false:
        return (
          <li>
            <a
              href="/auth/google"
              className="hover:text-green-300 hover:border-green-300 border px-4 py-2 rounded-sm tracking-tight "
            >
              Login With Google
            </a>
          </li>
        );
      default:
        return [
          <li className="">
            <Payments />
          </li>,
          <li className="px-4 py-2 tracking-tight ">
            Credits: {currentUser.credits}
          </li>,
          <li>
            <a
              href="/api/logout"
              className="hover:text-red-300 px-4 py-2 tracking-tight "
            >
              Logout
            </a>
          </li>,
        ];
    }
  };

  return (
    <nav className="bg-slate-900 flex items-center justify-between space-x-6 px-4 py-2">
      <div className="flex items-center">
        <img src={logo} alt="" className="  h-12 w-12" />
        <Link
          to={currentUser ? '/surveys' : '/'}
          className="px-2 text-2xl text-red-300 font-semibold "
        >
          Poll-Pal
        </Link>
      </div>
      <ul className="flex items-center justify-evenly ">
        {buttonContent(currentUser)}
      </ul>
    </nav>
  );
};

export default Header;
