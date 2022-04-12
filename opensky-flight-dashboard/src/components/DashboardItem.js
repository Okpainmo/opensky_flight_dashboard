import React, { useState } from 'react';
import avatar from '../assets/images/flight.jpg';

function DashboardItem({ data }) {
  const [arrivals, setArrivals] = useState([]);
  const [departures, setDepartures] = useState([]);

  return data.map(function (each, index) {
    const arrivalsUrl = `https://opensky-network.org/api/flights/arrival?airport=${each.estArrivalAirport}&begin=1517227200&end=1517230800`;
    const departuresUrl = `https://opensky-network.org/api/flights/departure?airport=${each.estArrivalAirport}&begin=1517227200&end=1517230800`;

    // console.log(arrivalsUrl);

    async function getFlightCounts() {
      try {
        const responseA = await fetch(arrivalsUrl);
        const responseD = await fetch(departuresUrl);
        const arrivalsData = await responseA.json();
        const departuresData = await responseD.json();

        setArrivals(arrivalsData);
        setDepartures(departuresData);
      } catch (error) {
        console.log(error);
      }
    }

    window.addEventListener('load', getFlightCounts());

    return (
      <div
        key={index}
        className="dashboard-item align-items-center d-flex justify-content-between px-4 py-3 border-top"
      >
        <div className="airport-name-wrapper d-flex flex-row align-items-center">
          <img src={avatar} alt="airport avatar" className="airport-avatar" />
          <div className="airport-name ps-2">{each.estArrivalAirport}</div>
        </div>
        <div className="time item text-center">1PM - 12PM</div>
        <div className="arriving item text-center">{arrivals.length}</div>
        <div className="departing item text-center">{departures.length}</div>
      </div>
    );
  });
}

export default DashboardItem;
