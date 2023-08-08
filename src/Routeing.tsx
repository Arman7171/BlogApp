import { Routes, Route, Navigate } from 'react-router-dom'
import { Login } from "@components/Login/Login"
import { ResetPass } from '@components/ResetPass/ResetPass'
import { FC } from "react"
import type { RootState } from "@store/store";
import { useSelector } from "react-redux";
import { Home } from '@pages/Dashboard/Home/Home';
import { CreatePost } from '@pages/Dashboard/Createpost/CreatePost';

export const Routing:FC = () => {
    const userAuth = useSelector((state: RootState) => state.auth.token);
    
    return(
        !userAuth ? 
        <Routes>
            <Route path='/' element={ <Login /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/resetpassword' element={ <ResetPass /> } />
            <Route path='*' element={ <Navigate to="/login" replace /> } />
        </Routes>
        :
        <Routes>
            <Route path='/dashboard' element={ <Home /> } />
            <Route path='/dashboard/createpost' element={ <CreatePost /> } />
            <Route path='*' element={ <Navigate to="/dashboard" replace /> } />
        </Routes>
    )
}