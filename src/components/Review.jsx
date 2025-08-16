import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const reviews = [
  {
    name: "Aarav Patel",
    location: "Ahmedabad, India",
    avatar: "https://i.pravatar.cc/150?img=3",
    rating: 5,
    review:
      "DriveNow made my car rental experience smooth and hassle-free. The car was clean and pickup was quick! Highly recommend for anyone looking for reliable car rental services.",
  },
  {
    name: "Simran Kaur",
    location: "Chandigarh, India",
    avatar: "https://i.pravatar.cc/150?img=5",
    rating: 5,
    review:
      "Great selection of cars and very professional staff. The booking process was seamless and the car was in perfect condition. Will definitely use DriveNow again!",
  },
  {
    name: "Rahul Verma",
    location: "Pune, India",
    avatar: "https://i.pravatar.cc/150?img=8",
    rating: 5,
    review:
      "Affordable prices and seamless booking process. The customer service is exceptional and the cars are well-maintained. I will use DriveNow again for sure.",
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    avatar: "https://i.pravatar.cc/150?img=12",
    rating: 5,
    review:
      "Amazing experience! The app is user-friendly and the car delivery was on time. The vehicle was spotless and the staff was very helpful throughout the process.",
  },
  {
    name: "Vikram Singh",
    location: "Delhi, India",
    avatar: "https://i.pravatar.cc/150?img=15",
    rating: 5,
    review:
      "Best car rental service I've ever used. Competitive pricing, excellent customer support, and a wide variety of vehicles to choose from. Highly recommended!",
  },
  {
    name: "Anjali Desai",
    location: "Bangalore, India",
    avatar: "https://i.pravatar.cc/150?img=20",
    rating: 5,
    review:
      "Outstanding service! The booking was quick, the car was perfect, and the return process was smooth. DriveNow has set a new standard for car rentals.",
  },
];

const CustomerReviews = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their DriveNow experience.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 p-8 border border-gray-100"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {/* Rating */}
              <div className="flex text-yellow-400 text-xl mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                "{review.review}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-200"
                />
                <div className="ml-4">
                  <h4 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16" data-aos="fade-up">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to Experience DriveNow?
          </h3>
          <p className="text-gray-600 mb-8">
            Join thousands of satisfied customers who trust DriveNow for their car rental needs.
          </p>
          <Link
                to="/learn-more"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Learn More
              </Link>
        </div>
      </div>
    </section>
  );
};

export default CustomerReviews;
