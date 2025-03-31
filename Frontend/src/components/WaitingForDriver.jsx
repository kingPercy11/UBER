import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0' onClick={() => {
        props. setWaitingForDriver(false)
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
                <div className="w-full mt-2">
                    <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2 ">
                        <i className="text-green-700 text-xl ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">
                                {props.pickup.length > 30 ? `${props.pickup.slice(0, 30)}...` : props.pickup}
                            </h3>
                            <p className="text-sm -mt-1 text-gray-500">
                                {props.pickup.includes(",") ? props.pickup.split(",").slice(-2).join(",").trim() : ""}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2 ">
                        <i className="text-red-700 text-xl ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">
                                {props.destination.length > 30 ? `${props.destination.slice(0, 30)}...` : props.destination}
                            </h3>
                            <p className="text-sm -mt-1 text-gray-500">
                                {props.destination.includes(",") ? props.destination.split(",").slice(-1).join(",").trim() : ""}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 ">
                        <i className="text-xl ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.fare[props.vehicleType]}</h3>
                            <p className="text-sm -mt-1 text-gray-500">Cash</p>
                        </div>
                    </div>

                </div>
      </div>
    </div>
  )
}

export default WaitingForDriver