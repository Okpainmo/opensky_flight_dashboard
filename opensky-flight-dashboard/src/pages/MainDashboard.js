import React from 'react';
import DashboardItem from '../components/DashboardItem';

function MainDashboard() {
  return (
    <main className="container flight-dashboard nunito pt-5 pb-5">
      <div className="dashboard-content-wrapper shadow">
        <div className="dashboard-header px-4 py-4">
          <h3 className="open-sans-bold">OpenSky Flight Dashboard</h3>
          <p className="m-0">List of airports and flight details</p>
        </div>
        <div className="dashboard-item-headings mt-3">
          <ul className="d-flex justify-content-between px-4">
            <li className="ps-1">Airports</li>
            <li className="text-center">Time</li>
            <li className="text-center">Arriving</li>
            <li className="text-center">Departing</li>
          </ul>
        </div>
        <div className="dashboard-items-wrapper">
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
          <DashboardItem />
        </div>
      </div>
    </main>
  );
}

export default MainDashboard;
