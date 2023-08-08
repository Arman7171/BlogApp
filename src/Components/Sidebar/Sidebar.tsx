import { FC } from "react"
import AFS from '@assets/img/AFS.png'
import Blog from "@assets/icons/blog.svg"
import Underline from '@assets/icons/underline.svg'
import Account from '@assets/icons/account.svg'
import Pay from '@assets/icons/pay.svg'
import Halp from '@assets/icons/help.svg'
import Contact from '@assets/icons/contact.svg'
import Notification from '@assets/icons/notification.svg'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import { logout } from '@features/Auth/authSlice'
import './sidebar.css'

export const Sidebar: FC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const Logout = () => {
        dispatch(logout())
        navigate('/login')
    }
    return(
        <div className="sidebar">
            <div>
            <img src={AFS} alt="AFSdashboard" />
            <div className="menu-section">
                <img src={Blog} alt="blog" />
                <img src={Underline} className="h-[27px] " alt="underline" />
                <img src={Account} alt="account" />
                <img src={Underline} className="h-[20px] underline" alt="underline" />
                <img src={Pay} className="mt-3" alt="pay" />
                <img src={Halp} alt="halp" className="mt-3" />
                <img src={Contact} alt="contact" className="mt-3" />
            </div>
            </div>
            <div className="menu-bottom-side">
                <div className="relative">
                    <img src={Notification} className="pb-3" alt="notification" />
                    <div className="active-notification"></div>
                </div>
                <div className="current-user">AV
                    <div className="dropup-menu">
                        <ul>
                            <li>profile</li>
                            <li>settings</li>
                            <li>u mi banel</li>
                            <li onClick={Logout}>Log out</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}