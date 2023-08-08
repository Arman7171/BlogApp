import { FC, useState } from "react"

type InputProps = {
    lable?: string,
    icon: string | boolean,
    type: string,
    required?: string,
    register: Function,
    placeholder: string,
    errors: any
}

export const Input: FC<InputProps> = ({lable, icon, type, register, required, errors, placeholder}) => {
    const [inputType, setInputType] = useState<string>(type)

    const changeInputType = (): void => {        
        if(inputType==='password'){
            setInputType('text')
        }
        else{
            setInputType('password')
        }
    }
    
    return(
        <div>
            <label className="block text-gray-700 text-sm font-normal mb-2">
                {lable}
            </label>
            <div className="relative">
                <input 
                    className={`shadow appearance-none border rounded w-[382px] h-[41px] py-2 pl-3 pr-9 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${icon ? 'pr-9' : 'pr-3'}`}
                    type={inputType} 
                    placeholder={placeholder}
                    {...register(type, {required})}
                />
                {
                    icon && <img src={`${icon}`} alt={`${icon}`} {...(type === 'password' && { onClick: changeInputType })}className='absolute right-[12px] top-[14px] w-[20px] cursor-pointer' />
                }
            </div>
            <p className="text-red-500 text-xs italic mt-2">{errors[type]?.message}</p> 
        </div>
    )
}