import { FC } from "react"
import './card.css'
import { Button } from "@components/Button/Button"

type CardProps = {
    date: string,
    img: string,
    title: string,
    desc?: string,
    publish: boolean,
    bigSize?: Boolean,
}

export const Card: FC<CardProps> = ({date, title, img, desc, publish, bigSize}) => {

    return(
        <div className={`card ${bigSize ? 'big' : ''}`}>
            <img src={img} alt="" />
            <div className="info">
                <p>{date}</p>
                <h6 className="text-ellipsis line-clamp-2 ...">{title}</h6>
                {desc && <p>{desc}</p>}
            </div>
            {publish && <div className="publish"><Button name="Publish" /></div>}
        </div>
    )
}