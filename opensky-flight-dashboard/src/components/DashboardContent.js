import React from 'react';
import DashboardItem from './DashboardItem';

function DashboardContent({ data }) {
  return (
    <div className="dashboard-content-wrapper shadow">
      <div className="dashboard-header px-4 py-4">
        <h3 className="open-sans-bold">OpenSky Flight Dashboard</h3>
        <p className="m-0">List of airports and flight details</p>
        <p className="m-0">Flight assessment period : 12PM - 1PM</p>
        <p>Flight assessment date : 25th January 2018</p>
      </div>
      <div className="dashboard-item-headings mt-3">
        <ul className="d-flex justify-content-between px-4">
          <li className="ps-1">Airports</li>
          <li className="text-center">Time</li>
          <li className="text-center">Arriving</li>
          <li className="text-center">Departing</li>
        </ul>
      </div>
      <div className="dashboard-items-wrapper d-flex flex-column">
        <DashboardItem data={data} />
      </div>
    </div>
  );
}

export default DashboardContent;
