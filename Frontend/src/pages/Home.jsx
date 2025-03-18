import React, { useRef, useState } from "react"
import {useGSAP} from '@gsap/react'
import gsap from "gsap"

const Home = () => {
    const [pickup, setPickup]=useState('')
    const [destination, setDestination]=useState('') 
    const [panelOpen, setPanelOpen]=useState(false)
    const panelRef = useRef(null)

    const submitHandler = (e) => {  
        e.preventDefault()
    }

    useGSAP (function(){
        gsap.to(panelRef.current,{
            height:'70%'
        })
    })

    return(
        <div className="h-screen relative">
            <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
            <div className="h-screen w-screen">
                {/* temp use image */}
                <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
            </div>
            <div className="flex flex-col justify-end h-screen absolute top-0 w-full ">
                <div className="h-[30%] bg-white relative p-5">
                    <h4 className=" text-3xl font-semibold ">Find a ride</h4>
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>
                    <div className="absolute top-[46%] left-7 flex flex-col items-center">
                        <div className="w-4 h-4 bg-red-600 rounded-full border-3"></div>
                        <div className="h-10 w-1 bg-gray-800 rounded-full "></div>
                        <div className="w-4 h-4 bg-green-600 rounded-full border-3"></div>
                    </div>
                        {/* <div className="line absolute h-16 w-1 top-[47%] left-10 bg-gray-900 rounded-full "></div> */}

                        <input
                         onClick={()=>{
                            setPanelOpen(true)
                         }}
                         value={pickup}
                         onChange={(e) => 
                            {setPickup(e.target.value)
                         }}
                         className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-5" type="text" placeholder="Pick-Up Location"/>
                        <input
                         onClick={()=>{
                            setPanelOpen(true)
                         }}
                         value={destination}
                         onChange={(e) => 
                            {setDestination(e.target.value)
                         }}
                        className="bg-[#eee] px-8 py-2 text-lg rounded-lg w-full mt-3" type="text" placeholder="Drop-off Location"/>
                    </form>
                </div>
                <div className="h-0 bg-amber-400 ">

                </div>
            </div>
        </div>
    )
}
export default Home;