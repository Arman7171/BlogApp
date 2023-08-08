import { FC } from "react"
import './button.css'

type ButtonProps = {
    name: string,
    islong?: boolean,
    color?: string,
    icon?: string,
    type?: string
}

export const Button: FC<ButtonProps> = ({name, islong, color, icon, type}) => {
    
    return(
        <>
            {
                type === 'post' ? 
                <button className={`post-action-button ${color ? 'approval' : 'cancel'}`}>{name}</button> 
                :
                <button 
                    className={`${color ? `bg-[#2e5827] hover:bg-[#153f18]` : 'bg-[#061137] hover:bg-[#2b2c36]'}  text-white font-bold py-2 px-4 flex focus:outline-none focus:shadow-outline ${islong ? 'w-full rounded-md' : 'rounded-full'}`}
                    type="submit"
                >
                    {name}
                    {
                        icon ? <img src={icon} className="pl-2" /> : null
                    }
                </button>
            }
        </>
    )
}

