import React from 'react'
import { assets} from '../../assets/assets'
import { Link } from 'react-router-dom'
import {useAppContext} from '../../AppContext.jsx'

const OwnerNavbar = () => {
  const {user,logout}=useAppContext();
  return (
    <div className='border-b-gray-400 border-b py-6 px-10 flex justify-between items-center'>
       <div className='relative group'>
        <Link to="/"><img src={assets.logo} alt='company_logo'/></Link>
          <div className='bg-black text-white p-2 rounded-xl pointer-events-none text-sm absolute translate-1 -right-7 opacity-0 group-hover:opacity-100 transition-all duration-200'>Home
            <span className='absolute -translate-4 right-3 border-l-8 border-r-8 border-b-8 border-b-black'/>
          </div>
       </div>
       <div className='inline-flex gap-5 items-center'>
        <p className='text-bold'>Welcome, {user.name}</p>
       <button className='bg-primary rounded-xl text-white px-3 py-2 cursor-pointer active:scale-95 transition-all duration-200 hover:bg-primary-dull' onClick={()=>logout()}>Logout</button>
       </div>
    </div>
  )
}

export default OwnerNavbar