import { FC } from "react"
import './home.css'
import { Card } from "@components/Card/Card"

export const Home: FC = () => {
    return(
        <div>
            <h3>Drafts</h3>
            <Card />
        </div>
    )
}