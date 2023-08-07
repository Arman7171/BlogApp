import { Routes, Route } from 'react-router-dom'
import { Login } from "@components/Login/Login"
import { ResetPass } from '@components/ResetPass/ResetPass'
import { FC } from "react"

export const Routing:FC = () => {
    return(
        <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/resetpassword' element={ <ResetPass /> } />

        </Routes>
    )
}