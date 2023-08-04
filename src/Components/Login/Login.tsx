import './login.css'
import { FC } from "react"
import { Input } from '@components/Input/Input'
import Seepass from '@assets/icons/Seepass.svg'
import { useForm } from 'react-hook-form'
import { Button } from '@components/Button/Button'
import { Link } from 'react-router-dom'
import { tokenGenerator } from '@src/utils/tokenGenerator'
import Cookies from 'js-cookie'

export const Login: FC = () => {

    const {
        handleSubmit,
        register,
        formState: {errors}
    } = useForm()

    const sendData = (data: any) => {
        Cookies.set('cookiesName', tokenGenerator())
        console.log('sended------', data);
        
    }

    return(
        <div className='flex justify-center'>
            <form className="bg-white rounded" onSubmit={handleSubmit(sendData)}>
                <h2 className='mb-3 font-bold'>Log In</h2>
                <div className="mb-4">
                    <Input  
                        {
                            ...
                            {
                                lable: 'email',
                                type: 'email',
                                icon: false,
                                register,
                                required: 'field is required',
                                placeholder: 'email',
                                errors
                            }
                        }
                    />
                </div>
                <div className="mb-6">
                    <Input
                        {
                            ...
                            {
                                lable: 'password',
                                type: 'password',
                                icon: Seepass,
                                register,
                                required: 'field is required',
                                placeholder: 'password',
                                errors
                            }
                        }
                    />
                </div>
                <div className="flex items-center justify-end">
                    <Link 
                        className="inline-block align-baseline font-bold text-sm text-#061137-500 hover:text-blue-800 mr-3" 
                        to="/resetpassword"
                    >
                        Forgot Password?
                    </Link>
                    <Button {...{name: 'Sign In'}} />
                </div>
            </form>
        </div>
    )
}