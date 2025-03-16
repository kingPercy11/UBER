import React from "react"
import { Link } from "react-router-dom"

const DriverLogin = () => {  
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [driverData, setDriverData] = React.useState({})
    const submitHandler = (e) => {
        e.preventDefault();
        setDriverData({
            email: email,
            password
        })
        console.log(driverData)
        setEmail('')
        setPassword('')
    }  
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className='w-20 mb-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
                <form onSubmit={(e) => submitHandler(e)}>
                    <h3 className="text-lg font-medium mb-2">What's your email</h3>
                    <input
                    required
                    value={email}
                    onChange={(e) =>
                        setEmail(e.target.value)
                    }

                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                    type="email" placeholder="email@example.com" 
                    />
                    <h3 className="text-lg font-medium mb-2">Enter Password</h3>
                    <input
                    required 
                    value={password}
                    onChange={(e) => 
                        setPassword(e.target.value)
                    }
                    className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
                    type="password"
                    placeholder="Password" 
                    />
                    <button className="bg-[#111] text-white font-semibold mb-2 rounded px-4 py-2 w-full text-lg placeholder:text-base">Log In</button>
                </form >
                <p className="text-center"> Ready to take control of your journey? <br/>  <Link to='/driver-signup' className="text-blue-700"> Sign up as a Driver today! </Link></p>
            </div>
            <div>
                <Link to='/login' className="bg-[#1CD760] flex items-center justify-center text-black font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" >Sign In as Rider</Link>
            </div>
        </div>
    )
}

export default DriverLogin