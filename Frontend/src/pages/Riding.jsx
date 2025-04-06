import React from "react";
import { Link, useLocation } from "react-router-dom";
import {useEffect, useContext} from "react";
import { SocketContext } from "../context/SocketContext";
import { useNavigate } from "react-router-dom";
import LiveTracking from "../components/LiveTracking";

const Riding = (props) => {

    const location = useLocation()
    const {ride}= location.state|| {}
    const {socket} = useContext(SocketContext)
    const navigate = useNavigate()

    socket.on("ride-ended",()=>{
        // alert("Ride has ended")
        navigate('/home')
    })
    return(
        <div className="h-screen">
            {/*bg-amber-400*/}
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <Link to='/home' className="fixed h-10 w-10 bg-white rounded-full flex items-center justify-center top-2 right-2">
                <i className=" text-2xl font-semibold ri-home-4-line"/>
            </Link>
            <div className="h-1/2">
                {/* <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" /> */}
                <LiveTracking/>
            </div>
            <div className="h-1/2 p-4">
                <div className='flex items-center justify-between'>
                    <img className='h-12' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                    <div className='text-right'>
                        <h2 className='text-lg font-medium capitalize'>{ride?.driver.fullname.firstname}</h2>
                        <h4 className='text-xl font-semibold -mt-1 -mb-1'>{ride?.driver.vehicle.plate}</h4>
                        <p className='text-sm text-gray-600'>Swift Desire</p>
                        {/* <h1 className='text-lg font-semibold'>  </h1> */}
                    </div>
                </div>

                <div className='flex gap-2 justify-between flex-col items-center'>
                    <div className="w-full mt-5"> 
                        <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2 ">
                            <i className="text-red-700 text-xl ri-map-pin-2-fill"></i>
                            <div>
                            <h3 className="text-lg font-medium">
                                {ride?.pickup.length > 25 ? `${ride?.pickup.slice(0, 25)}...` : ride?.pickup}
                            </h3>
                            <p className="text-sm -mt-1 text-gray-500">
                                {ride?.pickup.includes(",") ? ride?.pickup.split(",").slice(-2).join(",").trim() : ""}
                            </p>
                        </div>
                        </div>
                        <div className="flex items-center gap-5 p-3 ">
                            <i className="text-xl ri-money-rupee-circle-fill"></i>
                            <h3 className="text-lg font-medium">
                                {ride?.destination.length > 25 ? `${ride?.destination.slice(0, 25)}...` : ride?.destination}
                            </h3>
                            <p className="text-sm -mt-1 text-gray-500">
                                {ride?.destination.includes(",") ? ride?.destination.split(",").slice(-1).join(",").trim() : ""}
                            </p>
                        </div>

                    </div>
                </div>
                {/* try to connect and write pay ₹200 from calculated fare */}
                <button className="bg-green-500 w-full h-10 mt-5 text-black font-semibold rounded-lg">Pay ₹{ride?.fare}</button>
            </div>
        </div>
    )
}

export default Riding