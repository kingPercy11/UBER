import React from "react";
import axios from "axios"; // Ensure axios is imported

const LocationSearchPanel = ({ suggestions, setVehiclePanel, setPanelOpen, setPickup, setDestination, activeField, pickup, setFare, setPickupError }) => { 
    const handleSuggestionClick = async (suggestion) => {
        if (activeField === 'pickup') {
            setPickup(suggestion);
            setPickupError(false); // Reset error when pickup is selected
        } else if (activeField === 'destination') {
            if (!pickup) {
                alert('Please set your Pickup location first.');
                setPickupError(true); // Set error if pickup is empty
                return;
            }
            setDestination(suggestion);
            try {
                const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
                    params: { pickup, destination: suggestion },
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setFare(response.data);
                setVehiclePanel(true);
                setPanelOpen(false);
            } catch (error) {
                console.error("Error fetching fare:", error);
            }
        }
    };

    return (
        <div> 
            {suggestions.map((elem, idx) => {
                return <div key={idx} onClick={() => {
                    handleSuggestionClick(elem)
                }}
                className="flex gap-4 border-2 border-gray-100 active:border-black rounded-xl p-3 my-2 items-center justify-start">
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-8 rounded-full'><i className="ri-map-pin-fill"></i></h2>
                <h4 className='font-medium'>{elem}</h4>
                </div>
            })   
            }
        </div>
    )
}

export default LocationSearchPanel;