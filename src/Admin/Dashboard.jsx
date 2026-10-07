
import AdminSidebar from "./AdminSidebar";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <AdminSidebar />

      <div className="flex-1 p-8">

        <h1 className="text-3xl font-bold mb-2">
          Admin Dashboard
        </h1>

        <p className="text-gray-600 mb-8">
          Welcome to the hostel management system.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold text-gray-700">
              Total Rooms
            </h2>

            <p className="text-3xl font-bold text-yellow-500 mt-3">
              20
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold text-gray-700">
              Students
            </h2>

            <p className="text-3xl font-bold text-blue-500 mt-3">
              45
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold text-gray-700">
              Bookings
            </h2>

            <p className="text-3xl font-bold text-green-500 mt-3">
              30
            </p>
          </div>

        </div>

        <div className="bg-white p-6 rounded-lg shadow mt-8">

          <h2 className="text-xl font-bold mb-3">
            Recent Activity
          </h2>

          <p className="text-gray-600">
            No recent activities yet.
          </p>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;