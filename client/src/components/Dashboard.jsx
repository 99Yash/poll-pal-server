import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed rounded-xl bottom-0 right-0 ">
        <Link to="/surveys/new">+</Link>
      </div>
    </div>
  );
};

export default Dashboard;
