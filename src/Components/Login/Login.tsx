import './login.css'
import Seepass from '../../assets/icons/Seepass.svg'
export function Login() {
    return(
        <div className='flex justify-center'>
            <form className="bg-white  rounded px-8 pt-6 pb-8 mb-4">
                <h2 className='mb-3 font-bold'>Log In</h2>
                <div className="mb-4">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="username">
                    Email
                </label>
                <input className="shadow appearance-none border rounded w-[382px] h-[41px] py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="email" placeholder="Email"/>
                </div>
                <div className="mb-6">
                <label className="block text-gray-700 text-sm font-normal mb-2" htmlFor="password">
                    Password
                </label>
                <div className='relative'>
                <input 
                    className="shadow appearance-none border  pr-[36px] pl-3 rounded w-[382px] h-[41px] py-2 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                    id="password" 
                    type="password" 
                    placeholder="password" 
                />
                <img src={Seepass} alt="" className='absolute right-[12px] top-[14px] w-[20px] cursor-pointer' />
                </div>
                <p className="text-red-500 text-xs italic">Please choose a password.</p>
                </div>
                <div className="flex items-center justify-end">
                <a className="inline-block align-baseline font-bold text-sm text-#061137-500 hover:text-blue-800 mr-3" href="#">
                    Forgot Password?
                </a>
                <button className="bg-[#061137] hover:bg-[#2b2c36] text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline" type="button">
                    Sign In
                </button>
                </div>
            </form>
        </div>
    )
}