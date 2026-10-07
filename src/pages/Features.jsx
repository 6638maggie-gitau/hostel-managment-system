import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-green-50 to-green-100 py-16 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            About Our Hostel Management System
          </h1>

          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-8">
            Our Hostel Management System is a modern platform built to simplify hostel administration by managing student accommodation, room
            allocation, payments, and maintenance requests with ease.
          </p>
        </div>

        {/* Features Section */}
        <div className="mb-16">

          <h2 className="text-4xl font-bold text-center text-green-800 mb-10">
            Why Choose Our System?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4">🏠</div>

              <h3 className="text-xl font-semibold mb-3">
                Room Allocation
              </h3>

              <p className="text-gray-600">
                Allocate hostel rooms efficiently and reduce manual work.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4">💳</div>

              <h3 className="text-xl font-semibold mb-3">
                Payment Tracking
              </h3>

              <p className="text-gray-600">
                Monitor hostel payments and keep financial records organized.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6 hover:-translate-y-2 transition duration-300">
              <div className="text-5xl mb-4">🛠️</div>

              <h3 className="text-xl font-semibold mb-3">
                Maintenance Requests
              </h3>

              <p className="text-gray-600">
                Students can report maintenance issues for quick resolution.
              </p>
            </div>

          </div>

        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">

          <div className="bg-green-700 text-white rounded-xl p-6 text-center">
            <h2 className="text-3xl font-bold">500+</h2>
            <p>Students</p>
          </div>

          <div className="bg-green-700 text-white rounded-xl p-6 text-center">
            <h2 className="text-3xl font-bold">150+</h2>
            <p>Rooms</p>
          </div>

          <div className="bg-green-700 text-white rounded-xl p-6 text-center">
            <h2 className="text-3xl font-bold">98%</h2>
            <p>Efficiency</p>
          </div>

          <div className="bg-green-700 text-white rounded-xl p-6 text-center">
            <h2 className="text-3xl font-bold">24/7</h2>
            <p>Support</p>
          </div>

        </div>

        {/* Footer Card */}
        <div className="bg-green-700 rounded-3xl text-white text-center p-10">

          <h2 className="text-3xl font-bold mb-4">
            Simplifying Hostel Management
          </h2>

          <p className="max-w-3xl mx-auto leading-8">
            Our system is designed to improve organization, enhancecommunication, and provide a seamless experience for both
            hostel administrators and students.
          </p>

        </div>

      </div>
    </div>
  );
};

export default About;