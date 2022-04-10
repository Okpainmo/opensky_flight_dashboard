import React from 'react';
import avatar from '../assets/images/flight.jpg';

function DashboardItem() {
  return (
    <div className="dashboard-item align-items-center d-flex justify-content-between px-4 py-3 border-top">
      <div className="airport-name-wrapper d-flex flex-row align-items-center">
        <img src={avatar} alt="airport avatar" className="airport-avatar" />
        <div className="airport-name ps-2">
          Lufthansa <br /> Airlines
        </div>
      </div>
      <div className="time item text-center">
        15:00 <br /> (GMT)
      </div>
      <div className="arriving item text-center">17</div>
      <div className="departing item text-center">25</div>
    </div>
  );
}

export default DashboardItem;
