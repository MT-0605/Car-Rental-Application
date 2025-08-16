import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BookingForm from "../components/BookingForm";
import { carsAPI } from "../utils/api";

const CarDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCar = async () => {
      try {
        setLoading(true);
        setError("");
        const res = await carsAPI.getCarById(id);
        setCar(res.data);
      } catch (err) {
        console.error("Error fetching car:", err);
        setError("Failed to load car details. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCar();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <p className="text-gray-600">Loading car details...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <svg className="w-16 h-16 text-red-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Error Loading Car</h3>
          <p className="text-gray-600 mb-4">{error}</p>
          <button
            onClick={() => navigate('/cars')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
          >
            Back to Cars
          </button>
        </div>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="text-center">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.47-.881-6.08-2.33" />
          </svg>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Car Not Found</h3>
          <p className="text-gray-600 mb-4">The car you're looking for doesn't exist.</p>
          <button
            onClick={() => navigate('/cars')}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300"
          >
            Back to Cars
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="lg:w-2/3 p-8">
              {/* Car Image */}
              <div className="relative mb-6">
                <img
                  src={`http://localhost:5000${car.imageUrl}`}
                  alt={`${car.brand} ${car.model}`}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-4 right-4">
                  {car.available ? (
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Available
                    </span>
                  ) : (
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Not Available
                    </span>
                  )}
                </div>
              </div>

              {/* Car Details */}
              <div className="mb-6">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {car.brand} {car.model}
                </h1>
                <p className="text-gray-600 text-lg mb-4">
                  {car.description || `${car.brand} ${car.model} - ${car.year} model`}
                </p>

                {/* Price */}
                <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">
                      ₹{car.price}/day
                    </span>
                    <span className="text-sm text-gray-600">Per Day</span>
                  </div>
                </div>

                {/* Car Specifications */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Brand</div>
                    <div className="font-semibold">{car.brand}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Model</div>
                    <div className="font-semibold">{car.model}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Year</div>
                    <div className="font-semibold">{car.year}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Fuel Type</div>
                    <div className="font-semibold">{car.fuelType}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Transmission</div>
                    <div className="font-semibold">{car.transmission}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Seating</div>
                    <div className="font-semibold">{car.seating} seats</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Category</div>
                    <div className="font-semibold">{car.category}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Location</div>
                    <div className="font-semibold">{car.location}</div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="text-sm text-gray-600">Status</div>
                    <div className={`font-semibold ${car.available ? 'text-green-600' : 'text-red-600'}`}>
                      {car.available ? 'Available' : 'Not Available'}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Booking Form */}
            <div className="lg:w-1/3 bg-gray-50 p-8">
              <BookingForm car={car} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarDetailPage;
