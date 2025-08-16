import React from 'react';
import { Link, useLocation,useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const linkClass = (path) =>
    `block px-4 py-3 rounded-lg font-medium ${
      location.pathname === path
        ? 'bg-purple-600 text-white shadow'
        : 'text-gray-700 hover:bg-gray-100'
    }`;

    const handleLogout = () => {
    // Remove auth data
    localStorage.removeItem('token');
    localStorage.removeItem('user');

    // Redirect to login
    alert("You have been logged out.");
    navigate('/');
  };

  return (
    <aside className="w-full md:w-64 bg-white border-r border-gray-200 p-6 space-y-2">
      <h2 className="text-xl font-bold mb-4">Admin</h2>
      <nav className="space-y-2">
        <Link className={linkClass('/admin')} to="/admin">Dashboard</Link>
        <Link className={linkClass('/admin/bookings')} to="/admin/bookings">Bookings</Link>
        <Link className={linkClass('/admin/cars')} to="/admin/cars">Cars</Link>
        <Link className={linkClass('/admin/users')} to="/admin/users">Users</Link>
      </nav>
      {/* Divider */}
      <hr className="my-4" />

      {/* Logout button */}
      <button
        onClick={handleLogout}
        className="block w-full text-left px-4 py-3 rounded-lg font-medium text-red-600 hover:bg-red-50"
      >
        Logout
      </button>
    </aside>
  );
};

export default Sidebar;


