import { FC } from "react"

type ButtonProps = {
    name: string,
    islong?: boolean
}

export const Button: FC<ButtonProps> = ({name, islong}) => {
    
    return(
        <>
            <button 
                className={`bg-[#061137] hover:bg-[#2b2c36] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline ${islong ? 'w-full rounded-md' : 'rounded-full'}`}
                type="submit"
            >
                {name}
            </button>
        </>
    )
}

