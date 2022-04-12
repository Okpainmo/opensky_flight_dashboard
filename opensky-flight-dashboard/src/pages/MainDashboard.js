import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DashboardContent from '../components/DashboardContent';
import Preloader from '../components/Preloader';

function MainDashboard() {
  const [dashboardContentLoading, setDashboardContentLoading] = useState(false);
  const [data, setData] = useState([]);

  const allFlightsUrl =
    'https://opensky-network.org/api/flights/all?begin=1517227200&end=1517230800';

  async function getAirports() {
    try {
      const response = await fetch(allFlightsUrl);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getAirports();
    if (data.length === 0) {
      setDashboardContentLoading(false);
    } else {
      setDashboardContentLoading(true);
    }
  }, [data.length]);

  return (
    <main className="container flight-dashboard nunito pt-5 pb-5">
      {dashboardContentLoading ? (
        <DashboardContent data={data} />
      ) : (
        <Preloader />
      )}
    </main>
  );
}

export default MainDashboard;
