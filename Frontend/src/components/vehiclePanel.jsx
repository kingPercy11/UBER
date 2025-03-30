import React from "react";

const VehiclePanel = (props) => {
    const fare = props.fare || { car: 0, moto: 0, auto: 0 }; // Default values for fare

    return(
        <div>
            <h5 className='absolute px-3 items-center text-center w-[93%] top-0 text-4xl text-gray-300' onClick={
                ()=>{
                    props.setVehiclePanel(false)
                }
            }><i className="ri-arrow-down-wide-fill"></i></h5>
            <h3 className=" text-2xl font-semibold mb-5">Choose your ride</h3>
            <div onClick={()=>{
                props.setconfirmRidePanel(true)
            }} className="flex w-full border-2 border-gray-200 active:border-black rounded-2xl item-center justify-between p-3 mb-2">
                    <img className="h-12" src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
                    <div className="w-1/2">
                        <h4 className="font-medium text-base">RideOD <span><i className="ri-user-3-fill"/>4</span></h4>
                        <h5 className="font-medium text-sm">2 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Affordable, compact rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">
                        ₹ {fare.car}
                    </h2>
            </div>
            <div  onClick={()=>{
                props.setconfirmRidePanel(true)
            }} className="flex w-full border-2 border-gray-200 active:border-black rounded-2xl item-center justify-between p-3 mb-2">
                    <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_638,w_956/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
                    <div className="w-1/2">
                        <h4 className="font-medium text-base">BikeOD <span><i className="ri-user-3-fill"/>1</span></h4>
                        <h5 className="font-medium text-sm">5 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">2-wheeler rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">
                        ₹ {fare.moto}
                    </h2>
            </div>
            <div onClick={()=>{
                props.setconfirmRidePanel(true)
            }}  className="flex w-full border-2 border-gray-200 active:border-black rounded-2xl item-center justify-between p-3 mb-2">
                    <img className="h-12" src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
                    <div className="w-1/2">
                        <h4 className="font-medium text-base">AutoOD <span><i className="ri-user-3-fill"/>3</span></h4>
                        <h5 className="font-medium text-sm">3 mins away</h5>
                        <p className="font-normal text-xs text-gray-600">Auto-rickshaw rides</p>
                    </div>
                    <h2 className="text-lg font-semibold">
                        ₹ {fare.auto}
                    </h2>
            </div>
        </div>
    )
}

export default VehiclePanel;