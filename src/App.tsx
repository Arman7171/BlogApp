import { Login } from './Components/Login/Login'
import Image from './assets/img/login.png'
import Logo from './assets/img/AFSlogo.png'
function App() {
  return (
    <div className='h-100'>
      <div className='grid login grid-cols-2'>
            <div className='grid content-center'>
              <Login />
            </div>
            <div className='h-100'>
              <img src={Image} alt="" className='h-[100vh] object-cover w-[100%] relative' />
              <img src={Logo} alt="" className='absolute bottom-0 right-2' />
            </div>
      </div>
    </div>
  );
}

export default App;
