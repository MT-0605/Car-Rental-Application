import React, { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";
import axios from "axios";

const AdminDash = () => {
  const [stats, setStats] = useState({ totalUsers: 0, totalCars: 0, totalBookings: 0, totalRevenue: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function load() {
      try {
        const token = localStorage.getItem('token');
        const { data } = await axios.get('http://localhost:5000/api/admin/stats', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setStats(data);
      } catch (e) {
        setError(e.response?.data?.message || 'Failed to load stats');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow p-8 bg-gray-50">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Monitor platform performance</p>
        </header>

        {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6 text-red-600">{error}</div>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <StatCard title="Users" value={stats.totalUsers} />
            <StatCard title="Cars" value={stats.totalCars} />
            <StatCard title="Bookings" value={stats.totalBookings} />
            <StatCard title="Revenue (₹)" value={stats.totalRevenue} />
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDash;
