import { Topbar } from "@components/Topbar/Topbar"
import { Sidebar } from "@components/Sidebar/Sidebar"
import { FC } from "react"
import './dashboard.css'
import { Routing } from "@src/Routeing";

export const Dashboard: FC = () => {
    return(
        <div>
            <Topbar />
            <Sidebar />
            <div className="content">
                <Routing />
            </div>
        </div>
    )
}