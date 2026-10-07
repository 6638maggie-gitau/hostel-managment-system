
import { Link } from "react-router-dom";

const StudentDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100">

    
      <div className="bg-amber-400 p-6">
        <div className="max-w-6xl mx-auto">

          <h1 className="text-3xl font-bold">
            Student Dashboard
          </h1>

          <p className="mt-2">
            Welcome to the Hostel Management System
          </p>

        </div>
      </div>



      <div className="max-w-6xl mx-auto p-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">


          <div className="bg-white p-6 rounded-lg shadow">

            <h2 className="text-xl font-bold mb-3">
              Available Rooms
            </h2>

            <p className="text-3xl font-bold text-green-500">
              12
            </p>

            <p className="text-gray-600 mt-2">
              Rooms currently available
            </p>

          </div>


          <div className="bg-white p-6 rounded-lg shadow">

            <h2 className="text-xl font-bold mb-3">
              My Booking
            </h2>

            <p className="text-3xl font-bold text-blue-500">
              1
            </p>

            <p className="text-gray-600 mt-2">
              Current booking
            </p>

          </div>

          <div className="bg-white p-6 rounded-lg shadow">

            <h2 className="text-xl font-bold mb-3">
              Booking Status
            </h2>

            <p className="text-2xl font-bold text-yellow-500">
              Pending
            </p>

            <p className="text-gray-600 mt-2">
              Your booking is being processed
            </p>

          </div>

        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-8">

          <h2 className="text-2xl font-bold mb-5">
            Student Actions
          </h2>

          <div className="flex flex-wrap gap-4">
         
           <Link to="/student-rooms"
             className="bg-blue-500 text-white px-5 py-3 rounded-lg hover:bg-blue-600"
>
              View Rooms
            </Link>
            <Link
              to="/my-booking"
              className="bg-green-500 text-white px-5 py-3 rounded-lg hover:bg-green-600"
            >
              My Booking
            </Link>

            <Link
              to="/"
              className="bg-gray-700 text-white px-5 py-3 rounded-lg hover:bg-gray-800"
            >
              Back to Home
            </Link>

          </div>

        </div>

      </div>

    </div>
  );
};

export default StudentDashboard;