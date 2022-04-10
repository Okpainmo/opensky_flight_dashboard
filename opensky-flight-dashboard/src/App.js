import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ScrollHandler from './components/ScrollHandler';
import AdminLogin from './pages/AdminLogin';
import MainDashboard from './pages/MainDashboard';

function App() {
  return (
    <ScrollHandler>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/flight-dashboard" element={<MainDashboard />} />
      </Routes>
    </ScrollHandler>
  );
}

export default App;
