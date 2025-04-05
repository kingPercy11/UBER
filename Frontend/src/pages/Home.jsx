import React, { useRef, useState, useEffect } from "react"
import {useGSAP} from '@gsap/react'
import gsap from "gsap"
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from "../components/LocationSearchPanel"
import VehiclePanel from "../components/vehiclePanel"
import ConfirmRide from "../components/ConfirmRide"
import LookingForDriver from "../components/LookingForDriver"
import WaitingForDriver from "../components/WaitingForDriver"
import { SocketContext } from "../context/SocketContext"
import { useContext } from "react"
import { UserDataContext } from "../context/UserContext"

import axios from "axios"



const Home = () => {
    const [pickup, setPickup]=useState('')
    const [destination, setDestination]=useState('') 
    const [panelOpen, setPanelOpen]=useState(false)
    const panelRef = useRef(null)
    const panelCloseRef = useRef(null)
    const vehiclePanelRef = useRef(null)
    const confirmRidePanelRef = useRef(null)
    const vehicleFoundRef = useRef(null)
    const waitingForDriverRef = useRef(null)
    const [vehiclePanel,setVehiclePanel] = useState(false)
    const [confirmRidePanel,setconfirmRidePanel] = useState(false)
    const [vehicleFound,setVehicleFound] = useState(false)
    const [waitingForDriver,setWaitingForDriver] = useState(false)
    const [ pickupSuggestions, setPickupSuggestions ] = useState([])
    const [ destinationSuggestions, setDestinationSuggestions ] = useState([])
    const [ activeField, setActiveField ] = useState(null)
    const [pickupError, setPickupError] = useState(false);
    const [fare, setFare] = useState({});
    const [vehicleType, setVehicleType] = useState(null)
    const {socket } = React.useContext(SocketContext);
    const { user } = useContext(UserDataContext)
    const [ride, setRide] = useState(null)


    const submitHandler = (e) => {  
        e.preventDefault()
    }

    useEffect(() => {
        socket.emit("join", { userType:"user",userId:user._id })
        console.log(user)
    },[user])


    socket.on('ride-confirmed', ride => {
        setVehicleFound(false)
        setWaitingForDriver(true)
        setRide(ride)
    })

    const handlePickupChange = async (e) => {
        setPickup(e.target.value)
        setPickupError(false); 
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }

            })
            setPickupSuggestions(response.data)
        } catch {
        }
    }

    const handleDestinationChange = async (e) => {
        if (!pickup) {
            setPickupError(true);
            return; 
        }
        setDestination(e.target.value)
        try {
            const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
                params: { input: e.target.value },
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setDestinationSuggestions(response.data)
        } catch {
        }
    }

    useGSAP(() => {
        if (panelRef.current && panelOpen) {
            gsap.to(panelRef.current, {
                height: '70%',
                padding: 24,
                paddingTop: 0,
                duration: 0.5
            })
            gsap.to(panelCloseRef.current, {
                opacity: 1
            })
        } else if (panelRef.current) {
            gsap.to(panelRef.current, {
                height: '0%',
                padding: 0, 
                // overflow: 'hidden',
                duration: 0.5
            })
            gsap.to(panelCloseRef.current, {
                opacity: 0
            })
        }
    }, [panelOpen]); 

    useGSAP(() => {
        if(vehiclePanel){
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(0)',
                duration: 0.5
            })
        }
        else{
            gsap.to(vehiclePanelRef.current, {
                transform: 'translateY(100%)',
                duration: 0.5
            })
        }
    }, [vehiclePanel]);

    useGSAP(() => {
        if(confirmRidePanel){
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(0)',
                duration: 0.5
            })
        }
        else{
            gsap.to(confirmRidePanelRef.current, {
                transform: 'translateY(100%)',
                duration: 0.5
            })
        }
    }, [confirmRidePanel]);

    useGSAP(() => {
        if(vehicleFound){
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(0)',
                duration: 0.5
            })
        }
        else{
            gsap.to(vehicleFoundRef.current, {
                transform: 'translateY(100%)',
                duration: 0.5
            })
        }
    }, [vehicleFound]);

    useGSAP(() => {
        if(waitingForDriver){
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(0)',
                duration: 0.5
            })
        }
        else{
            gsap.to(waitingForDriverRef.current, {
                transform: 'translateY(100%)',
                duration: 0.5
            })
        }
    }, [waitingForDriver]);

    async function findTrip(){
        setVehiclePanel(true)
        setPanelOpen(false)

        const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
            params: { pickup, destination },
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })


        setFare(response.data)

    }


    async function createRide() {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`, {
            pickup,
            destination,
            vehicleType
        }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
        // console.log(response.data)
    }

    return(
        <div className="h-screen relative overflow-hidden">
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className="h-screen w-screen">
                {/* temp use image */}
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
                <div className="h-[30%] bg-white relative p-5">
                    <h5 ref={panelCloseRef} onClick={() => {
                        setPanelOpen(false)
                    }} className='absolute opacity-0 right-6 top-4 text-4xl'>
                        <i className="ri-arrow-down-wide-fill"></i>
                    </h5>
                    <h4 className=" text-3xl font-semibold ">Find a ride</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                        <div>
                            <div className="absolute px-0 py-9 left-7 flex flex-col items-center justify-center">
                                <div className="w-4 h-4 bg-green-600 rounded-full border-3 border-black shadow-md"></div>
                                <div className="h-10 w-1 bg-gray-800 rounded-full"></div>
                                <div className="w-4 h-4 bg-red-600 rounded-full border-3 border-black shadow-md"></div>
                            </div>
                            {/* <div className="line absolute h-16 w-1 top-[47%] left-10 bg-gray-900 rounded-full "></div> */}

                            <input
                            onClick={()=>{
                                setPanelOpen(true)
                                setActiveField('pickup')
                            }}
                            value={pickup}
                            // onChange={(e) => 
                            //     {setPickup(e.target.value)
                            // }}
                            onChange={handlePickupChange}
                            className={`bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5 ${pickupError ?'border-2 border-red-600' : 'border border-gray-300'}`}
                            type="text" placeholder="Pick-Up Location"/>
                            <input
                            onClick={()=>{
                                setPanelOpen(true)
                                setActiveField('destination')
                            }}
                            value={destination}
                            // onChange={(e) => 
                            //     {setDestination(e.target.value)
                            // }}
                            onChange={handleDestinationChange}
                            className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3" type="text" placeholder="Drop-off Location"/>
                            {pickupError && <p className="text-red-500 text-sm mt-2">Please set your Pickup location first.</p>}
                        </div>
                    </form>
                    <div>
                        <button onClick={findTrip}
                            className={`bg-black text-white w-full px-4 py-2 rounded-lg mt-3 mb-4 font-semibold ${!panelOpen ? 'hidden' : ''}`}>
                            Find Trip 
                        </button>
                    </div>
                </div>
                <div ref={panelRef} className="h-0 bg-white">
                    <LocationSearchPanel 
                    setPanelOpen={setPanelOpen} 
                    setVehiclePanel={setVehiclePanel} 
                    setPickup={setPickup}
                    setDestination={setDestination}
                    activeField={activeField}
                    suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
                    pickup={pickup}
                    fare={fare} 
                    setFare={setFare} 
                    setPickupError={setPickupError}
                    />
                </div>
            </div>
            <div ref={vehiclePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-8 pt-12">
                <VehiclePanel 
                selectVehicleType={setVehicleType}
                fare={fare}
                setconfirmRidePanel={setconfirmRidePanel} 
                setVehiclePanel={setVehiclePanel}/>
            </div>
            <div ref={confirmRidePanelRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <ConfirmRide 
                createRide={createRide}
                pickup={pickup}
                destination={destination}
                fare={fare}
                vehicleType={vehicleType}
                setVehiclePanel={setVehiclePanel}
                setconfirmRidePanel={setconfirmRidePanel} 
                setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={vehicleFoundRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <LookingForDriver
                pickup={pickup}
                destination={destination}
                fare={fare}
                vehicleType={vehicleType}
                setVehicleFound={setVehicleFound}/>
            </div>
            <div ref={waitingForDriverRef} className="fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12">
                <WaitingForDriver 
                ride={ride} 
                pickup={pickup}
                destination={destination}
                fare={fare}
                vehicleType={vehicleType}
                setWaitingForDriver={setWaitingForDriver}/>
            </div>
        </div>
    )
}
export default Home;