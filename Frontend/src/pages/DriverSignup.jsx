import React, { useState } from "react"
import { Link } from "react-router-dom"
import { DriverDataContext } from "../context/DriverContext"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const DriverSignup = () => { 
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ firstName, setFirstName ] = useState('')
  const [ lastName, setLastName ] = useState('')
  const [ vehicleColor, setVehicleColor ] = useState('')
  const [ vehiclePlate, setVehiclePlate ] = useState('')
  const [ vehicleCapacity, setVehicleCapacity ] = useState('')
  const [ vehicleType, setVehicleType ] = useState('')

  const { driver, setDriver } = React.useContext(DriverDataContext)   
  const navigate = useNavigate()


  const submitHandler = async (e) => {
    e.preventDefault()
    const driverData = { 
        fullname: {
            firstname: firstName,
            lastname: lastName
        },
        email: email,
        password: password,
        vehicle: {
            color: vehicleColor,
            plate: vehiclePlate,
            capacity: vehicleCapacity,
            vehicleType: vehicleType
        }
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/drivers/register`, driverData)
    if (response.status === 201) {
      const data = response.data
      setDriver(data.driver)
      localStorage.setItem('driver-token', data.token)
      navigate('/driver-home')
    }
    // console.log(newDriver)
    setEmail('')
    setFirstName('')
    setLastName('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')

  }    
    return (
        <div> 
            <div className='px-5 py-5 h-screen flex flex-col justify-between'>
                <div>
                    <img className='w-16 mb-8' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
                    <form onSubmit={(e) => {
                        submitHandler(e)
                    }}>

                        <h3 className='text-lg w-1/2  font-medium mb-2'>What's your name</h3>
                        <div className='flex gap-4 mb-5'>
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                            type="text"
                            placeholder='First name'
                            value={firstName}
                            onChange={(e) => {
                            setFirstName(e.target.value)
                            }}
                        />
                        <input
                            required
                            className='bg-[#eeeeee] w-1/2  rounded-lg px-4 py-2 border  text-lg placeholder:text-base'
                            type="text"
                            placeholder='Last name'
                            value={lastName}
                            onChange={(e) => {
                            setLastName(e.target.value)
                            }}
                        />
                        </div>

                        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
                        <input
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        placeholder='email@example.com'
                        />

                        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

                        <input
                        className='bg-[#eeeeee] mb-5 rounded-lg px-4 py-2 border w-full text-lg placeholder:text-base'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required type="password"
                        placeholder='password'
                        />
                        <h3 className='text-lg font-medium mb-2'>Vehicle Information</h3>
                        <div className='flex gap-4 mb-5'>
                            <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type="text"
                            placeholder='Vehicle Color'
                            value={vehicleColor}
                            onChange={(e) => {
                                setVehicleColor(e.target.value)
                            }}
                            />
                            <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type="text"
                            placeholder='Vehicle Plate'
                            value={vehiclePlate}
                            onChange={(e) => {
                                setVehiclePlate(e.target.value)
                            }}
                            />
                        </div>
                        <div className='flex gap-4 mb-5'>
                            <input
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            type="number"
                            placeholder='Vehicle Capacity'
                            value={vehicleCapacity}
                            onChange={(e) => {
                                setVehicleCapacity(e.target.value)
                            }}
                            />
                            <select
                            required
                            className='bg-[#eeeeee] w-1/2 rounded-lg px-4 py-2 border text-lg placeholder:text-base'
                            value={vehicleType}
                            onChange={(e) => {
                                setVehicleType(e.target.value)
                            }}
                            >
                            <option className="bg-[#eeeeee]" value="" disabled>Select Vehicle Type</option>
                            <option value="car">Car</option>
                            <option value="auto">Auto</option>
                            <option value="motorcycle">Bike</option>
                            </select>
                        </div>
                        <button
                        className='bg-[#111] text-white font-semibold mb-2 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
                        >Create account</button>

                    </form>
                    <p className='text-center'>Already associated with us? <Link to='/driver-login' className='text-blue-600'>Login here</Link></p>
                </div>
                <div>
                    <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
                        Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>
                </div>
            </div>
        </div>
    )
}

export default DriverSignup