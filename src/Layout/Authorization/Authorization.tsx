import { FC } from "react"
import Image from '@assets/img/login.png'
import Logo from '@assets/img/AFSlogo.png'
import { Routeing } from "@src/Routeing"

export const Authorization: FC = () => {
    return(
        <div>
            <div className='grid login grid-cols-2'>
                <div className='grid content-center'>
                    <Routeing />
                </div>
                <div className='h-100 relative'>
                    <img src={Image} alt="" className='h-[100vh] object-cover w-[100%]' />
                    <img src={Logo} alt="" className='absolute bottom-0 right-2' />
                </div>
            </div>
        </div>
    )
}