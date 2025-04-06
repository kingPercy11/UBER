import React from "react";
import { Link, useLocation } from "react-router-dom";
import {useGSAP} from '@gsap/react'
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'
import { useState,useRef } from "react";
import FinishRide from "../components/FinishRide";
import LiveTracking from "../components/LiveTracking";
const DriverRiding = () => {
    const[finishRidePanel,setfinishRidePanel]=useState(false)
    const finishRidePanelRef = useRef(null)
    const location = useLocation()
    const {ride} = location.state || {}


    useGSAP(() => {
        if(finishRidePanel){
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(0)',
                duration: 0.5
            })
        }
        else{
            gsap.to(finishRidePanelRef.current, {
                transform: 'translateY(100%)',
                duration: 0.5
            })
        }
    }, [finishRidePanel]);


    return(
        <div className="h-screen relative ">
            {/*bg-amber-400*/}
            <div className="fixed p-6 top-0 w-screen flex items-center justify-between">
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/driver-home' className="fixed h-10 w-10 bg-white rounded-full flex items-center justify-center top-2 right-2">
                    <i className=" text-2xl font-semibold ri-home-4-line"/>
                </Link>
            </div>

            <div className="h-4/5">
                {/* <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
                 */}
                <LiveTracking/>
            </div>
            <div className="h-1/5 p-6 flex items-center justify-center relative flex-col">
                <h5 className="p-1 text-center w-[95%] absolute top-0" onClick={()=>{
                    setfinishRidePanel(true)
                }}>
                    <i className="text-4xl text-gray-300 ri-arrow-up-wide-fill"></i>
                </h5>
                {/* <h4>Distance</h4> */}
                <button onClick={()=>{
                    setfinishRidePanel(true)
                }}
                className="w-full h-9 mt-5 bg-green-500 text-white font-semibold rounded-lg">Finish Ride</button>
            </div>
            <div ref={finishRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <FinishRide
                 ride={ride }
                 setfinishRidePanel={setfinishRidePanel} />
            </div>
        </div>
    )

}
export default DriverRiding;