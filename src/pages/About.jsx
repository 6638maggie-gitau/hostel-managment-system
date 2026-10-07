import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto">

        
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-green-700 mb-6">
            About Hostelmanagment
          </h1>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-8">
          This is a modern  platform designed to make student accommodation easier to manage. Our goal is to simplify
            hostel operations by providing a secure, organized, and reliabledigital solution for students and administrators.
          </p>
        </div>

        
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">
          <h2 className="text-3xl font-semibold text-green-700 mb-4">
            Our Story
          </h2>

          <p className="text-gray-600 leading-8 mb-4">
            Managing hostel accommodation manually can be time-consuming and prone to errors. Hostelmanagment was created to provide a smarter
            alternative by bringing all hostel-related activities into one centralized platform.
          </p>

          <p className="text-gray-600 leading-8">
            Whether it's managing residents, handling accommodation requests,or improving communication, our system is designed to save time,
            increase efficiency, and create a better experience for everyone.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">

          <div className="bg-green-700 text-white rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="leading-7">
              To provide a simple, efficient, and reliable hostel management solution that improves the daily experience of both students and
              hostel administrators.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-green-700">
            <h2 className="text-2xl font-bold text-green-700 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-7">
              To become a trusted digital solution that transforms hostelmanagement through innovation, transparency, and technology.
            </p>
          </div>

        </div>

       
        <div className="bg-white rounded-2xl shadow-lg p-10 mb-12">

          <h2 className="text-3xl font-semibold text-center text-green-700 mb-8">
            Our Core Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8 text-center">

            <div>
              <div className="text-5xl mb-3">🤝</div>
              <h3 className="font-semibold text-xl mb-2">Trust</h3>
              <p className="text-gray-600">
                Building confidence through secure and reliable services.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-3">💡</div>
              <h3 className="font-semibold text-xl mb-2">Innovation</h3>
              <p className="text-gray-600">
                Continuously improving our platform with modern technology.
              </p>
            </div>

            <div>
              <div className="text-5xl mb-3">🌍</div>
              <h3 className="font-semibold text-xl mb-2">Community</h3>
              <p className="text-gray-600">
                Creating a better living experience for students and staff.
              </p>
            </div>

          </div>

        </div>

        
        <div className="bg-green-700 rounded-2xl text-white p-10 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Making Hostel Management Smarter
          </h2>

          <p className="max-w-3xl mx-auto leading-8">  Hostelmanagment is more than just software. It is a solution built to
            simplify hostel administration, improve communication, and create a better accommodation experience for every student.
          </p>
        </div>

        <section
          id='about'
          className='py-16 px-8 bg-white text-center scroll-mt-20'
        >
          <h1 className='text-3xl font-bold text-gray-800 mb-6'>
            About the System
          </h1>

          <p className='max-w-3xl mx-auto text-gray-600 text-lg'>
            The hostel management system helps administrators manage hostel
            operations digitally. It improves organization by providing tools
            for managing students, room allocation, payments, complaints and
            hostel resources efficiently.
          </p>
        </section>


      </div>
    </div>
  );
};

export default About;