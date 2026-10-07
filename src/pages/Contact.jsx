import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-blue-900 to-blue-600 flex items-center justify-center px-6 py-12">
      <div className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-4xl">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-blue-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2">
            We'd love to hear from you. Reach out anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          
          <div className="space-y-6">

            <div className="bg-gray-100 p-5 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                📧 Email
              </h2>
              <p className="text-gray-600">
                hostelms@gmail.com
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                📞 Phone
              </h2>
              <p className="text-gray-600">
                +254 123 456 789
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                📍 Location
              </h2>
              <p className="text-gray-600">
                Meru, Kenya
              </p>
            </div>

            <div className="bg-gray-100 p-5 rounded-xl shadow">
              <h2 className="text-xl font-semibold text-blue-900 mb-2">
                🕒 Office Hours
              </h2>
              <p className="text-gray-600">
                Monday - Friday
                <br />
                8:00 AM - 5:00 PM
              </p>
            </div>

          </div>

         
          <div>

            <form className="space-y-5">

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Email
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
                className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;