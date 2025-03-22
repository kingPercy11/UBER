import React from "react";
import { Link } from "react-router-dom";

const Riding = (props) => {
    return(
        <div className="h-screen">
            <Link to='/home' className="fixed h-10 w-10 bg-amber-400 rounded-full flex items-center justify-center top-2 right-2">
                <i className=" text-2xl font-semibold ri-home-4-line"/>
            </Link>
            <div className="h-1/2">
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="h-1/2 p-4">
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
                {/* try to connect and write pay ₹200 from calculated fare */}
                <button className="bg-green-500 w-full h-10 mt-5 text-black font-semibold rounded-lg">Pay ₹200</button>
            </div>
        </div>
    )
}

export default Riding