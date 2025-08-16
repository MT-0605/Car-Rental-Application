import React from "react";
import { Link } from "react-router-dom";
import { getLoggedInUser } from "../utils/auth";

const CarCard = ({ car }) => {
  const user = getLoggedInUser();

  return (
    <Link to={`/cars/${car._id}`} className="block">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
        {/* Image Container */}
        <div className="relative overflow-hidden">
          <img
            src={`http://localhost:5000${car.imageUrl}`}
            alt={`${car.brand} ${car.model}`}
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
          />
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            {car.available ? (
              <span className="bg-green-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                Available
              </span>
            ) : (
              <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium shadow-lg">
                Rented
              </span>
            )}
          </div>
          {/* Price Badge */}
          <div className="absolute bottom-3 left-3">
            <span className="bg-white/90 backdrop-blur-sm text-purple-600 text-sm px-3 py-1 rounded-full font-bold shadow-lg">
              ₹{car.price}/day
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">
            {car.brand} {car.model}
          </h2>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">
            {car.description || `${car.brand} ${car.model} - ${car.year} model`}
          </p>

          {/* Car Details */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-600">{car.year}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-sm text-gray-600">{car.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-sm text-gray-600">{car.fuelType}</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-600">{car.transmission}</span>
            </div>
          </div>

          {/* Category and Seating */}
          <div className="flex items-center justify-between">
            <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-medium">
              {car.category}
            </span>
            <span className="text-sm text-gray-600">
              {car.seating} seats
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CarCard;
