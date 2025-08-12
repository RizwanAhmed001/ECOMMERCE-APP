import {assets} from '../assets/assets';

function Navbar({setToken}){
  return(
    <div className='flex justify-between py-2 px-[4%] items-center  p-4'>
        <img className='w-[max(10%,80px)]' src={assets.logo}  alt="logo_image" />
        <button className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-sm sm:text-sm' onClick={() => setToken("")}>Logout</button>
    </div>
  )
}
export default Navbar;


