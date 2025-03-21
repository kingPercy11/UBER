
import React from "react";

const LocationSearchPanel = (props) => { 
    const locations=[
        "Delhi Technological University, Delhi-110042",
        "DTU Entrance Gate, Delhi-110042", 
        "Rohini Sector-16, Delhi-110042",
        "Rohini Sector-17, Delhi-110042"
    ]
    return (
        <div> 
            {locations.map(function(elem,idx){
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                }}
                className="flex gap-4 border-2 border-gray-50 active:border-black rounded-xl p-3 my-2 items-center justify-start">
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-8 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{elem}</h4>
                </div>
            })
            }
        </div>
    )
}

export default LocationSearchPanel;