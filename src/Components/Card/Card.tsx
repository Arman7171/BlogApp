import { FC } from "react"
import './card.css'
import City from '@assets/blogimg/city.jpg'

export const Card: FC = () => {
    return(
        <div className="card">
            <img src={City} alt="" />
            <div className="info">
                <p>01/07/2022</p>
                <h6 className="text-ellipsis line-clamp-2 ...">asjoiad nsadjioasu asdjioas aoisjdaoijn dfpok</h6>
                <p>assadkaj asdhas iojiji oijioj oiajsd</p>
            </div>
        </div>
    )
}