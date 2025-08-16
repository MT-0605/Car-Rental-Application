import React, { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import axios from 'axios';

const AdminCars = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const tokenHeader = () => ({ headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } });

  const load = async () => {
    try {
      const { data } = await axios.get('http://localhost:5000/api/admin/cars', tokenHeader());
      setCars(data);
    } catch (e) {
      setError(e.response?.data?.message || 'Failed to load cars');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const approve = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/admin/cars/${id}/approve`, {}, tokenHeader());
      await load();
      alert('Car approved and email sent (if configured).');
    } catch (e) {
      alert(e.response?.data?.message || 'Approve failed');
    }
  };

  const reject = async (id) => {
    try {
      await axios.post(`http://localhost:5000/api/admin/cars/${id}/reject`, {}, tokenHeader());
      await load();
    } catch (e) {
      alert(e.response?.data?.message || 'Reject failed');
    }
  };

  const remove = async (id) => {
    if (!confirm('Delete this car?')) return;
    try {
      await axios.delete(`http://localhost:5000/api/admin/cars/${id}`, tokenHeader());
      await load();
    } catch (e) {
      alert(e.response?.data?.message || 'Delete failed');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-grow p-8">
        <h1 className="text-2xl font-bold mb-6">Manage Cars</h1>
        {error && <div className="p-4 bg-red-50 border border-red-200 rounded-lg mb-6 text-red-600">{error}</div>}
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="bg-gray-50 text-gray-600">
                  <th className="px-4 py-3">Car</th>
                  <th className="px-4 py-3">Owner</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Available</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {cars.map(car => (
                  <tr key={car._id} className="border-t">
                    <td className="px-4 py-3">{car.brand} {car.model}</td>
                    <td className="px-4 py-3">{car.owner?.name || car.owner}</td>
                    <td className="px-4 py-3">₹{car.price}</td>
                    <td className="px-4 py-3">{car.status}</td>
                    <td className="px-4 py-3">{car.available ? 'Yes' : 'No'}</td>
                    <td className="px-4 py-3 space-x-2">
                      {car.status !== 'approved' && (
                        <button onClick={() => approve(car._id)} className="px-3 py-1 rounded bg-green-600 text-white">Approve</button>
                      )}
                      {car.status !== 'rejected' && (
                        <button onClick={() => reject(car._id)} className="px-3 py-1 rounded bg-yellow-600 text-white">Reject</button>
                      )}
                      <button onClick={() => remove(car._id)} className="px-3 py-1 rounded bg-red-600 text-white">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminCars;


