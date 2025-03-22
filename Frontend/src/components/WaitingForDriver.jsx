import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props.waitingForDriver(false)
      }}><i className="text-3xl text-gray-200 ri-arrow-down-wide-line"></i></h5>

      <div className='flex items-center justify-between'>
        <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
        <div className='text-right'>
          <h2 className='text-lg font-medium capitalize'>Raj</h2>
          <h4 className='text-xl font-semibold -mt-1 -mb-1'>MH 05 AB 1223</h4>
          <p className='text-sm text-gray-600'>Maruti Swift Desire</p>
          {/* <h1 className='text-lg font-semibold'>  </h1> */}
        </div>
      </div>

      <div className='flex gap-2 justify-between flex-col items-center'>
        <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2 ">
                <i className="text-green-700 text-xl ri-map-pin-user-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">Delhi Technological University</h3>
                    <p className="text-sm -mt-1 text-gray-600">Delhi-110042</p>
                </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2 ">
                <i className="text-red-700 text-xl ri-map-pin-2-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">Delhi Technological University</h3>
                    <p className="text-sm -mt-1 text-gray-600">Delhi-110042</p>
                </div>
            </div>
            <div className="flex items-center gap-5 p-3 ">
                <i class="text-xl ri-money-rupee-circle-fill"></i>
                <div>
                    <h3 className="text-lg font-medium">₹200</h3>
                    <p className="text-sm -mt-1 text-gray-600">Cash</p>
                </div>
            </div>

        </div>
      </div>
    </div>
  )
}

export default WaitingForDriver