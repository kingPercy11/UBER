import React from "react";

const ConfirmRide = (props) => { 
    return (
        <div>
            <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
                props.setconfirmRidePanel(false)
            }}><i className="text-4xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>
            <h3 className="text-2xl font-semibold mb-5">Confirm your Ride</h3>
            <div className="flex gap-2 justify-between flex-col items-center ">
                <img className="h-20" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
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
                        <i className="text-xl ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹200</h3>
                            <p className="text-sm -mt-1 text-gray-600">Cash</p>
                        </div>
                    </div>

                </div>
                <button onClick={()=>{
                    props.setconfirmRidePanel(false)
                    props.setVehicleFound(true)
                    props.setVehiclePanel(false)
  
                }} className="w-full h-9 mt-5 bg-green-400 text-white font-semibold rounded-lg">Confirm</button>
            </div>
        </div>
    )
}

export default ConfirmRide;