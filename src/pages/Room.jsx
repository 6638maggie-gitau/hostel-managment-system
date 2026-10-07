import React from "react";

const Room = () => {
  const rooms = [
    {
      id: 1,
      number: "B100",
      capacity: 4,
      status: "Available",
      price: "Ksh 18,000",
      block: "Block B",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 2,
      number: "B101",
      capacity: 4,
      status: "Occupied",
      price: "Ksh 18,000",
      block: "Block B",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 3,
      number: "B103",
      capacity: 6,
      status: "Available",
      price: "Ksh 22,000",
      block: "Block B",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 4,
      number: "B104",
      capacity: 6,
      status: "Occupied",
      price: "Ksh 22,000",
      block: "Block B",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 5,
      number: "B105",
      capacity: 5,
      status: "Available",
      price: "Ksh 20,000",
      block: "Block B",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
    {
      id: 6,
      number: "B106",
      capacity: 4,
      status: "Available",
      price: "Ksh 18,000",
      block: "Block B",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">

        <h1 className="text-4xl font-bold text-center mb-3">
          Hostel Rooms
        </h1>

        <p className="text-center text-gray-500 mb-10">
          Find your perfect room and book it online.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div
              key={room.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl duration-300"
            >
              <img
                src={room.image}
                alt={room.number}
                className="h-52 w-full object-cover"
              />

              <div className="p-5">

                <div className="flex justify-between items-center mb-3">
                  <h2 className="text-2xl font-bold">
                    Room {room.number}
                  </h2>

                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      room.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {room.status}
                  </span>
                </div>

                <p className="text-gray-600">
                  👥 Capacity: {room.capacity} Students
                </p>

                <p className="text-gray-600">
                  📍 {room.block}
                </p>

                <p className="text-gray-600">
                  ⭐ {room.rating}
                </p>

                <p className="text-xl font-bold text-blue-900 mt-3">
                  {room.price}
                </p>

                <button className="mt-5 w-full bg-blue-900 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
                  View Details
                </button>

              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Room;