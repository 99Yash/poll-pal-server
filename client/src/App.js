import React from 'react';
import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './components/Header';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser, setCurrentUser } from './reducers/authSlice';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard';
import SurveyNew from './components/surveys/SurveyNew';

const App = () => {
  const dispatch = useDispatch();

  const currentUser = useSelector((state) => state.auth.currentUser);
  useEffect(() => {
    if (!currentUser) {
      dispatch(fetchUser());
      setCurrentUser(currentUser);
    }
    console.log(currentUser);
  }, [dispatch, currentUser]);

  return (
    <div className="bg-slate-800 h-screen text-slate-200 ">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/surveys" element={<Dashboard />} />
          <Route path="/surveys/new" element={<SurveyNew />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
