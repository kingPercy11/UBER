import React from "react";

const RidePopUp = () => {
return (
    <div>
        <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{

        }}><i className="text-4xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>

        <h3 className="text-2xl font-semibold mb-5">New Ride near You!</h3>

        <div className="flex items-center justify-between p-3 bg-amber-400 rounded-2xl mt-4">
            <div className="flex items-center justify-between gap-3">
                <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3EWZa4oa8_4WRE58cC6iXT8hGDGy1kqDG0oHHQNHRSpCatkWi9aXNImPnvGyl_pG-E4cFBwd2zx2_okJIjQYd4qQE9YO7jIyUhmDCvA" alt="" />
                <h2 className="text-lg font-medium">
                    User Name
                </h2>

            </div>

            <h5 className="text-lg font-semibold">
                2.2 KM 
            </h5>
        </div>        
        <div className="flex gap-2 justify-between flex-col items-center px-3"> 
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
            <div className="w-full flex flex-row gap-3 ">
                <button onClick={()=>{
                }} className="w-full h-11 mt-2 bg-green-500 text-white font-semibold rounded-2xl">Accept</button>
                <button onClick={()=>{
                }} className="w-full h-11 mt-2 bg-red-500 text-white font-semibold rounded-2xl">Ignore</button>
            </div>
        </div>
    </div>
)}

export default RidePopUp