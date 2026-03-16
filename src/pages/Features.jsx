import React from 'react'

const Features = () => {
  const features=[
    {
      title:"Student Managment",
      description:"Add,Update, and manage student records efficiently in one system."
    },
    {
      title:"Room Allocation",
      description:"Asiign rooms to studfents and track room availability in real time."
    },
    {
      title:"Payment Tracking",
      description:"Moniter hostel payments and maintane financial records easily."
    },
    {
      title:"Complaint Managment",
      description:"Allow students to submit maintance requests and track their status."
    },
    {
      title:"Visitors Management",
      description:"Record and manage visitors entering the premises."
    },
    {
      title:"Secure login system",
      description:"Role-based authentication for administrators and students.",
    },
  ]
  return (
    <div className='min-h-screen bg-gray-700 py-16 px-6'>
     <div className='max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold text-center mb-10 text-gray-800'>System Features</h1>
      <div className='grid md:grid-cols-3 gap-8'>
        {features.map((Feature,index) =>(
          <div key={index} className='bg-white p-6 rounded-xl shadow hover:shadow-lg transition'>
           <h2 className='text-xl font-semibold mb-3 text-blue-900'>{Feature.title}</h2> 
           <p className='text-gray-600'>{Feature.description}</p>                                          
          </div>
        )
      )}
      
      </div>
     </div>
    </div>
  )
}

export default Features