import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-gray-900 text-white p-5">

      <h2 className="text-2xl font-bold mb-8">
        Hostel Admin
      </h2>

      <div className="space-y-3">

        <Link
          to="/admin"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Dashboard
        </Link>

        <Link
          to="/room"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Rooms
        </Link>

        <Link
          to="/"
          className="block p-3 rounded hover:bg-gray-700"
        >
          Back to Home
        </Link>

      </div>

    </div>
  );
};

export default AdminSidebar;