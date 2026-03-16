import React from 'react'

const Home = () => {
  return (
    <>
    <div className='bg-gray-50 text-black'>
        <h1 className='m-8 items-center p-4 font-bold text-center'>Hostel Managment</h1>
    <section className='text-center py-20 px-6'>
      <h2 className='text-4xl font-bold text-black mb-4'>A smart hostel managment system</h2>
      <p className='text-black max-w-2xl mx-auto mb-8'>This is a modern platform designed to simplify hostel adminstration by managing rooms ,students, 
        payments and maintance efficiently.
      </p>
      <button className='bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700'>Get started</button>
    </section>
    <section className='py-16 px-10 bg-gray-100'>
      <h3 className='text-3xl font-bold text-center text-blackmb-10'>System Features</h3>
      <div className='grid md:grid-cols-3 gap-8'>
        <div className='bg-red-300 p-6 rounded-xl shadow hover:shadow-lg transition'>
          <h4 className='text-xl font-semibold mb-3'>Student Management</h4>
          <p className='text-gray-600'>Easily regester,update and manage all hostel residents.</p>
        </div>
        <div className='bg-red-300 p-6 rounded-xl shadow hover:shadow-lg transition'>
          <h4 className='text-xl font-semibold mb-3'>Room Allocation</h4>
          <p className='text-gray-600'>Assign rooms to students and track room availability in real time.</p>
        </div>
        <div className='bg-red-300 p-6 rounded-2xl shadow hover:shadow-lg transition'>
          <h5 className='text-xl font-semibold mb-3'>Payment Tracking</h5>
          <p className='text-gray-600'>Monitor hostel fee payments and generate payments record.</p>
        </div>
      </div>
    </section>
    <section className='py-16 px-8 bg-white text-center'>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>About the system</h1>
      <p className='max-w-3xl mx-auto text-gray-600 text-1xl'>The hostel managment system helps administrators manage hostel operations digitally.It improves
        organization by providing tools for managing students,room allocation ,payment,complaints and hostel
        resources efficiently.
      </p>
    </section>
    <section className='py-16 bg-blue-900 text-center text-white'>
      <h2 className='text-3xl font-bold mb-4'>Start managing your hostel efficiently</h2>
      <p className='mb-6 text-gray-200'>Simplify hostel operations with our smart managment system</p>
    </section>
    </div>
    </>
  )
}

export default Home