import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import UserLogin from "./pages/UserLogin"
import UserSignup from "./pages/UserSignup"
import DriverSignup from "./pages/DriverSignup" 
import DriverLogin from "./pages/DriverLogin"

const App = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<UserLogin />} />
            <Route path="/signup" element={<UserSignup />} />
            <Route path="/driver-signup" element={<DriverSignup />} />
            <Route path="/driver-login" element={<DriverLogin/>} />
        </Routes>
    </div>
  )
}

export default App;
