import React from 'react'

const Room = () => {
    const rooms=[
        {
            id:1,number:"B100",capacity:4, status:"Available"
        },
        {id:2, number:"B101",capacity:4, status:"Occupied"},
        {id:3, number:"B103",capacity:6, status:"Available"},
        {id:4,number:"B104",capacity:6,status:"Occupied"},
    ];
  return (
    <>
    <div>
        <div className='max-w-3xl mx-auto'>
            <h1 className='text-3xl font-bold text-center mb-10 text-gray-800'>Hostel Rooms</h1>
            <div className='grid md:grid-cols-3 gap-8'>{rooms.map((room) =>(
                <div key={room.id} className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
                    <h2 className='text-2xl font-semibold mb-3'>Room{room.number}</h2>
                    <p className='text-gray-600 mb-2'>Capacity:{room.capacity} students</p>
                        <p className={`font-semibold ${room.status ==="Available"? "text-green-600":"text-red-600"}`}> {room.status}
                        </p>
                            <button className='mt-4 w-full bg-blue-900 text-white py-2 rounded-lg 
                            hover:bg-blue-700 transition'>View details</button>
                </div>
                        ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default Room