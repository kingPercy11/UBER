import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
// import { endRide } from "../../../Backend/services/ride.service";


const FinishRide = (props) => {
    const navigate = useNavigate()
    async function endRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/end-ride`, {
            rideId: props.ride._id
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('driver-token')}`
            }
        })
        if (response.status === 200) {
            navigate('/driver-home')
        }
    }


    return(
        <div> 
        <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
            props.setfinishRidePanel(false)
        }}><i className="text-4xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>

        <h3 className="text-2xl font-semibold mb-5">Complete this ride</h3>

        <div className="flex items-center justify-between p-3 bg-amber-400 rounded-2xl mt-4">
            <div className="flex items-center justify-between gap-3">
                <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3EWZa4oa8_4WRE58cC6iXT8hGDGy1kqDG0oHHQNHRSpCatkWi9aXNImPnvGyl_pG-E4cFBwd2zx2_okJIjQYd4qQE9YO7jIyUhmDCvA" alt="" />
                <div className="flex flex-col">
                    <h2 className="text-lg font-medium ">
                        <i className="font-bold text-lg ri-user-3-fill"></i> {props.ride?.user.fullname.firstname +" "+ props.ride?.user.fullname.lastname}
                    </h2>
                    <h3 className="text-sm font-medium text-gray-800"><i className=" text-black font-bold text-lg ri-phone-fill"></i> +91 1234567890
                    </h3>
                </div>

            </div>
        </div>        
        <div className="flex gap-2 justify-between flex-col items-center px-3"> 
            <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2 ">
                        <i className="text-green-700 text-xl ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">
                                {props.ride?.pickup.length > 30 ? `${props.ride?.pickup.slice(0, 30)}...` : props.ride?.pickup}
                            </h3>
                            <p className="text-sm -mt-1 text-gray-500">
                                {props.ride?.pickup.includes(",") ? props.ride?.pickup.split(",").slice(-2).join(",").trim() : ""}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 border-gray-300 border-b-2 ">
                        <i className="text-red-700 text-xl ri-map-pin-2-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">
                                {props.ride?.destination.length > 30 ? `${props.ride?.destination.slice(0, 30)}...` : props.ride?.destination}
                            </h3>
                            <p className="text-sm -mt-1 text-gray-500">
                                {props.ride?.destination.includes(",") ? props.ride?.destination.split(",").slice(-1).join(",").trim() : ""}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-5 p-3 ">
                        <i className="text-xl ri-money-rupee-circle-fill"></i>
                        <div>
                            <h3 className="text-lg font-medium">₹{props.ride?.fare}</h3>
                            <p className="text-sm -mt-1 text-gray-500">Cash</p>
                        </div>
                </div>

            </div>
            <div className="w-screen px-6">
                <button 
                onClick={endRide}
                 className="w-full h-11 mt-2 bg-green-500 text-white font-semibold rounded-2xl">Finish Ride</button>
            </div>
        </div>
        </div>
    )
}
export default FinishRide