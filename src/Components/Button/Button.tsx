import { FC } from "react"

type ButtonProps = {
    name: string,
    islong?: boolean,
    color?: string,
    icon?: string
}

export const Button: FC<ButtonProps> = ({name, islong, color, icon}) => {
    
    return(
        <>
            <button 
                className={`${color ? `bg-[${`${color}`}] hover:bg-[#153f18]` : 'bg-[#061137] hover:bg-[#2b2c36]'}  text-white font-bold py-2 px-4 flex focus:outline-none focus:shadow-outline ${islong ? 'w-full rounded-md' : 'rounded-full'}`}
                type="submit"
            >
                {name}
                <img src={icon} alt="" />
            </button>
        </>
    )
}

