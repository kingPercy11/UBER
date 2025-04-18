import React, { useState, useContext } from 'react'
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserDataContext } from "../context/UserContext"


const UserLogin = () => {   
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    // const [userData, setUserData] = useState({})

    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async(e) => {
        e.preventDefault();
        const userData = {
            email: email,
            password: password
        }
        // console.log(userData)
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
        if(response.status === 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            // console.log("LOGIN")
            navigate('/home')
        }
        
        setEmail('')
        setPassword('')
    }
    return (
        <div className="p-7 h-screen flex flex-col justify-between">
            <div>
                <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
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
                <p className="text-center"> New here? <Link to='/signup' className="text-blue-700">Create new Account </Link></p>
            </div>
            <div>
                <Link to='/driver-login' className="bg-amber-400 flex items-center justify-center text-black font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base" >Sign In as Driver</Link>
            </div>
        </div>
    )
}

export default UserLogin