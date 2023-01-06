import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import { fetchUser } from '../reducers/authSlice';

const Header = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchUser());
    }
  }, [currentUser, dispatch]);

  return (
    <nav className="bg-slate-900 flex items-center justify-between space-x-6 px-4 ">
      <div className="flex items-center">
        <img src={logo} alt="" className="  h-12 w-12" />
        <Link
          to={currentUser ? '/surveys' : '/'}
          className="px-2 text-2xl text-red-300 font-semibold "
        >
          Poll-Pal
        </Link>
      </div>
      <button className="hover:text-red-300 hover:border-red-300 border px-4 py-2 rounded-sm tracking-tight ">
        {currentUser ? 'Login' : 'Signup'}
      </button>
    </nav>
  );
};

export default Header;
