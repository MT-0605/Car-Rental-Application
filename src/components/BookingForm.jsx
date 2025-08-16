import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getLoggedInUser } from "../utils/auth";

const BookingForm = ({ car }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    pickupLocation: "",
    returnLocation: "",
    startDate: "",
    endDate: "",
  });
  const [error, setError] = useState("");

  // Handle form change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError("");
  };

const start = formData.startDate ? new Date(formData.startDate) : null;
const end = formData.endDate ? new Date(formData.endDate) : null;
const diffInMs = start && end ? end - start : 0;
const days = diffInMs > 0 ? Math.ceil(diffInMs / (1000 * 60 * 60 * 24)) : 0;
const totalPrice = (Number(days) > 0 ? days * car.price : car.price);


  // Validate form fields
  const validateForm = () => {
    if (!formData.pickupLocation || !formData.returnLocation) {
      setError("Please fill in all location fields.");
      return false;
    }
    if (!formData.startDate || !formData.endDate) {
      setError("Please select pickup and return dates.");
      return false;
    }
    const startDate = new Date(formData.startDate);
    const endDate = new Date(formData.endDate);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (startDate < today) {
      setError("Pickup date cannot be in the past.");
      return false;
    }
    if (endDate <= startDate) {
      setError("Return date must be after pickup date.");
      return false;
    }
    return true;
  };

  const handleBookNow = async (e) => {
  e.preventDefault();
  const user = getLoggedInUser();
  if (!user) {
    setError("You must be logged in to book a car.");
    return;
  }
  if (!validateForm()) return;

  console.log("Booking details:", {
    ...formData,
    carId: car._id,
    carName: car.model,
    totalPrice: totalPrice,
    userId: user.id
  });
}

//   try {
//     const res = await fetch("http://localhost:5000/api/payment/create-checkout-session", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//        body: JSON.stringify({
//         userId: formData.userId,
//         carId: formData.carId,
//         carName: formData.carName,
//         totalPrice: totalPrice, 
//         startDate: formData.startDate,
//         endDate: formData.endDate,
//         pickupLocation: formData.pickupLocation,
//         returnLocation: formData.returnLocation,
//       }),
//     });
//     const data = await res.json();
//     console.log("Checkout session created:", data);

//     // Redirect to Stripe
//     const stripe = await loadStripe("pk_test_51RuyiORxyCGNcYwFt682Sidc6gzkMxGdB8qIQ8cDSS1bCOQPfvVuS2JKNNkeJ4IWcBErq0M89pPhlFIMqEnSfWyH00GcfBr58Y");
//     await stripe.redirectToCheckout({ sessionId: data.id });

//   } catch (err) {
//     console.error(err);
//     setError("Failed to initiate payment.");
//   }
// };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-sm border border-gray-200">
      <div className="flex justify-between items-baseline mb-4">
        <span className="text-3xl font-bold text-gray-900">₹{car.price}</span>
        <span className="text-sm text-gray-500">per day</span>
      </div>

      <hr className="my-4 border-gray-300" />

      <form className="space-y-4" onSubmit={handleBookNow}>
        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Pickup Location
          </label>
          <input
            type="text"
            name="pickupLocation"
            value={formData.pickupLocation}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Return Location
          </label>
          <input
            type="text"
            name="returnLocation"
            value={formData.returnLocation}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Pickup Date
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        <div>
          <label className="block text-gray-700 font-medium mb-1">
            Return Date
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            min={formData.startDate || new Date().toISOString().split("T")[0]}
            required
            className="w-full border border-gray-300 rounded-lg px-3 py-2"
          />
        </div>

        {days > 0 && (
          <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-between">
              <span>Duration:</span>
              <span>{days} day{days > 1 ? "s" : ""}</span>
            </div>
            <div className="flex justify-between">
              <span>Price per day:</span>
              <span>₹{car.price}</span>
            </div>
            <div className="flex justify-between font-bold mt-2">
              <span>Total Price:</span>
              <span className="text-purple-600">₹{totalPrice}</span>
            </div>
          </div>
        )}

        {error && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-sm text-center">{error}</p>
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 rounded-lg"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
