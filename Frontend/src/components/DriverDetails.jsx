import React from "react";
import { useContext } from "react";
import { DriverDataContext } from "../context/DriverContext";


const DriverDetails = () => {
    const { driver } = useContext(DriverDataContext);
    return (
    <div>
        <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between gap-3">
                            <img className="h-10 w-10 rounded-full object-cover" src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR3EWZa4oa8_4WRE58cC6iXT8hGDGy1kqDG0oHHQNHRSpCatkWi9aXNImPnvGyl_pG-E4cFBwd2zx2_okJIjQYd4qQE9YO7jIyUhmDCvA" alt="" />
                            <h4 className="text-lg font-medium capitalize">
                                {driver.fullname.firstname+" "+driver.fullname.lastname}
                            </h4>
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">
                                ₹200
                            </h4>
                            <p className="text-sm text-gray-600" >Earned</p>
                        </div>
                    </div>
                    <div className="flex p-3 mt-8 bg-gray-50 gap-5 rounded-4xl justify-between items-start">
                        <div className="text-center">
                            <i className="text-3xl mb-2 font-thin ri-timer-line"></i>
                            <h5 className="text-lg font-medium">10.2</h5>
                            <p className="text-sm text-gray-600">Hours Online</p>
                        </div>  {/* time */}
                        <div className="text-center">
                            <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
                            <h5 className="text-lg font-medium">10.2</h5>
                            <p className="text-sm text-gray-600">Hours Online</p>
                        </div>  {/* speed */}
                        <div className="text-center">
                            <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
                            <h5 className="text-lg font-medium">10.2</h5>
                            <p className="text-sm text-gray-600">Hours Online</p>
                        </div>  {/* notes */}

                    </div>
    </div>
    )}

export default DriverDetails