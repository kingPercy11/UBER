import React, { use, useState } from "react";
import { data, Link } from "react-router-dom";
import {useGSAP} from '@gsap/react'
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'
import DriverDetails from "../components/DriverDetails";
import RidePopUp from "../components/RidePopUp";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { useRef } from "react";
import { useEffect,useContext} from "react";
import { DriverDataContext } from "../context/DriverContext";
import { SocketContext } from "../context/SocketContext";



const DriverHome = ()=>{
    const[ridePopUpPanel,setRidePopUpPanel]=useState(true)
    const[ConfirmRidePopUpPanel,setConfirmRidePopUpPanel]=useState(false)

    const ridePopUpPanelRef = useRef(null)
    const ConfirmRidePopUpPanelRef = useRef(null)

    const{socket} = useContext(SocketContext)
    const{driver} = useContext(DriverDataContext)

    useEffect(() => {
        socket.emit('join', {
            userId: driver._id,
            userType: 'driver'
        })

        // socket.emit('ride-request', (data) => { 
        //     console.log(data)
        //     setRidePopUpPanel(true)
        // })
    }, [socket]);

    useGSAP(() => {
        if(ridePopUpPanel){
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(0)',
                duration: 0.5
            })
        }
        else{
            gsap.to(ridePopUpPanelRef.current, {
                transform: 'translateY(100%)',
                duration: 0.5
            })
        }
    }, [ridePopUpPanel]);

    useGSAP(() => {
        if(ConfirmRidePopUpPanel){
            gsap.to(ConfirmRidePopUpPanelRef.current, {
                transform: 'translateY(0)',
                duration: 0.5
            })
        }
        else{
            gsap.to(ConfirmRidePopUpPanelRef.current, {
                transform: 'translateY(100%)',
                duration: 0.5
            })
        }
    }, [ConfirmRidePopUpPanel]);

    return(
        <div className="h-screen">
            <div className="fixed p-6 top-0 w-screen flex items-center justify-between">
                <img className="w-16" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
                <Link to='/driver/logout' className="h-10 w-10 flex justify-center items-center bg-white rounded-2xl"><i className=" text-2xl font-bold ri-logout-box-line"></i></Link>
                {/*bg-amber-400*/}
            </div>
            <div className="h-3/5">
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="h-2/5 p-6">
                <DriverDetails/>
            </div>
            <div ref={ridePopUpPanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}/>
            </div>
            <div ref={ConfirmRidePopUpPanelRef} className="fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <ConfirmRidePopUp setConfirmRidePopUpPanel={setConfirmRidePopUpPanel}  setRidePopUpPanel={setRidePopUpPanel}/>
            </div>
        </div>
    )
}

export default DriverHome