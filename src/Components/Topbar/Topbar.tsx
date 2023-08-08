import { FC } from "react"
import Menu from '@assets/icons/menu.svg'
import Topline from '@assets/icons/topline.png'
import './topbar.css'
import { Button } from "@components/Button/Button"
import { Link } from 'react-router-dom'

export const Topbar: FC = () => {
    return(
        <div className="topbar">
            <div className="md:flex hidden">
                <span className="pr-3">
                    <Button name="Blog posts" />
                </span>
                <Button name="Newslatters" color="#2e5827" />
            </div>
            <div className="flex">
                <Link to="dashboard/createpost">
                    <Button name="Create post" />
                </Link>
                <span className="pr-4 pl-10">
                    <img src={Topline} alt="" />
                </span>
                <Button name="GO" icon={Menu} />
            </div>
        </div>
    )
}