import { Input } from '@components/Input/Input'
import { useForm } from 'react-hook-form'
import { Button } from '@components/Button/Button'
import { Link } from 'react-router-dom'
import { FC, useEffect } from "react"
import Cookies from 'js-cookie'

export const ResetPass: FC = () => {

useEffect(() => {
    console.log('resetpass------------', Cookies.get('cookiesName'));
    
},[])

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm()

    const sendData = (data: any) => {
        console.log('sended------', data);
    }

    return(
        <div className='flex justify-center'>
            <form className="bg-white rounded" onSubmit={handleSubmit(sendData)}>
                <h2 className='mb-3 font-bold'>Reset Password</h2>
                <div className="mb-4">
                    <Input  
                        {
                            ...
                            {
                                lable: 'Email',
                                type: 'email',
                                icon: false,
                                register,
                                required: 'field is required',
                                placeholder: 'Enter your email',
                                errors
                            }
                        }
                    />
                </div>
                
                <div className="flex items-center justify-end">
                    <Button {...{name: 'Sign In', islong: true}} />
                </div>
                <Link 
                    className="mt-2 align-baseline font-bold text-sm flex justify-center text-#061137-500 hover:text-blue-800" 
                    to="/login"
                >
                    Back to Login
                </Link>
            </form>
        </div>
    )
}