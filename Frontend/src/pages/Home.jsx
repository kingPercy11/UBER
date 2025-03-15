import React from "react"
import { Link } from "react-router-dom"

const Home = () => {    
    return (
        <div>
            <div className='bg-cover bg-centre bg-[url("https://st4.depositphotos.com/4230659/20159/v/1600/depositphotos_201597146-stock-illustration-yellow-taxi-cab-and-mobile.jpg")] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
                <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt=""/>
                <div className='bg-white pb-7 py-4 px-4'> 
                    <h2 className='text-3xl font-bold'>Get Started with RideOnDemand</h2>
                    <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5' >Continue</Link>
                </div>
            </div>
        </div>
    )
}

export default Home