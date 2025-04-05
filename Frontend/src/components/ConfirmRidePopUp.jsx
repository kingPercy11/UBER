import React,{useState} from "react";  
import { Link } from "react-router-dom";


const ConfirmRidePopUp = (props) => {
    const [opt, setOtp] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
    }

    return (
        <div> 
        <h5 className="p-1 text-center w-[93%] absolute top-0" onClick={()=>{
            props.setConfirmRidePopUpPanel(false)
            props.setRidePopUpPanel(true)
        }}><i className="text-4xl text-gray-300 ri-arrow-down-wide-fill"></i></h5>

        <h3 className="text-2xl font-semibold mb-5">Confirm this ride</h3>

        <div className="flex items-center justify-between p-3 bg-amber-400 rounded-2xl mt-4">
            <div className="flex items-center justify-between gap-3">
                <img className="h-12 w-12 rounded-full object-cover" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3EWZa4oa8_4WRE58cC6iXT8hGDGy1kqDG0oHHQNHRSpCatkWi9aXNImPnvGyl_pG-E4cFBwd2zx2_okJIjQYd4qQE9YO7jIyUhmDCvA" alt="" />
                <div className="flex flex-col">
                    <h2 className="text-lg font-medium ">
                        <i className="font-bold text-lg ri-user-3-fill"></i> {props.ride?.user.fullname.firstname}
                    </h2>
                    <h3 className="text-sm font-medium text-gray-800"><i className=" text-black font-bold text-lg ri-phone-fill"></i> +91 1234567890
                    </h3>
                </div>

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
                            <h3 className="text-lg font-medium">₹{props.ride?.fare[props.vehicleType]}</h3>
                            <p className="text-sm -mt-1 text-gray-500">Cash</p>
                        </div>
                </div>

            </div>
            <div className="w-screen px-6">
                <form onSubmit={(e)=>{
                    submitHandler(e)
                }}>
                    <input value={opt} onChange={(e)=>setOtp(e.target.value)} className="bg-[#eee] px-3 py-2 text-lg rounded-lg w-full mt-5 font-mono " type="text" placeholder="Enter OTP" />
                    <div className="w-full flex flex-row gap-3 mt-1">
                        <Link to='/driver-riding' className="w-full h-11 mt-2 flex items-center justify-center bg-green-500 text-white font-semibold rounded-2xl">
                            <i className="mx-1 text-2xl ri-check-fill"></i> Confirm
                        </Link>
                        <button onClick={()=>{
                            props.setConfirmRidePopUpPanel(false)
                        }} className="w-full h-11 mt-2 bg-red-500 text-white font-semibold rounded-2xl"><i className="ri-close-large-fill"></i> Cancel</button>

                    </div>

                </form>
            </div>
        </div>
        </div>
    )
}

export default ConfirmRidePopUp;