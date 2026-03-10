import React, { useState } from 'react'
import {assets, menuLinks} from '../assets/assets'
import { NavLink,Link} from 'react-router-dom'
import {CircleUserRound, LogOut, Search, TextAlignCenter, TextAlignJustify, X, NotebookText} from 'lucide-react'
import { useAppContext } from '../AppContext.jsx'
import toast from 'react-hot-toast'
import { Menu } from '@headlessui/react';
import {motion} from 'motion/react'
import ConformModel from './ConformModel.jsx'

const Navbar = () => {
  
  const {user,logout,isOwner,setShowLogin,axios,setIsOwner,navigate,showconfirm,setShowConfirm,setFilterCar,setHassearch}=useAppContext();
  const [open,setOpen]=useState(false);
  

  const changeRoleOwner=async()=>{
    try{
      
          const {data}=await axios.post('/api/owner/change-role');
          if(data.success){
            setIsOwner(true);
            toast.success(data.message);
            navigate('/owner');
          }
    }catch(error){
      console.log(error);
    }finally{
      setShowConfirm(false);
    }
  }

  return (
    <motion.div
    initial={{y:-1,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.1}}
     className={`flex items-center justify-between px-6 md:px-16 lg:px-24 xl:px-18 py-4 text-gray-600  border-b border-borderColor relative transition-all ${location.pathname === '/' && 'bg-black border-b-0'}`}>
    
      {/* Company Logo */}
        <NavLink to='/'>
          <motion.img whileHover={{scale:1.05}} img src={assets.logo} alt='Car_Logo'/>
        </NavLink>
     
     {/* Menu Links */}
      
      <div className={`max-sm:fixed  max-sm:h-screen max-sm:w-full max-sm:top-16 max-sm:border-t flex flex-col right-0 sm:flex-row gap-4 sm:gap-8 max-sm:p-4 items-start sm:items-center border-borderColor transition-all duration-300 z-50 ${location.pathname==="/"?'bg-black text-white':'bg-white text-black'} ${open ?'max-sm:translate-x-0':'max-sm:translate-x-full'}`}>
            {menuLinks.map((link,index)=>(
              <NavLink key={index} to={link.path} onClick={()=>{setFilterCar([]),setHassearch(false)}} className={({isActive})=>isActive?'text-primary font-bold':'border-b-2 border-transparent  hover:text-primary font-semibold'}>
              {link.name}
              </NavLink>
            ))}

            {/*SearchBar */}
            <div className='lg:flex py-1.5 border border-borderColor px-1 gap-2 rounded-full max-w-56 hidden items-center'>
              <input type="text" className='w-full placeholder-gray-500 outline-none bg-white rounded-full px-3' placeholder='Search Product'/><Search/> 
            </div>

            <div className='flex flex-col gap-4 md:flex-row'>
              {
                user && (
                  <button onClick={()=>(isOwner ? navigate('/owner'):setShowConfirm(true))}
                className='cursor-pointer px-8 py-2 border border-borderColor rounded-lg bg-transparent transition-colors hover:bg-gray-50 hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2'
                type='button'
>
                {isOwner?'Dashboard':'Become a Host'}
              </button>
                )
              }

              {showconfirm && (
                      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <ConformModel
                          title="Do you really want to list your car?"
                          onConform={changeRoleOwner}
                        />
                      </div>
                    )}


              <Menu as="div" className='relative inline-block'>
                  {
                    user ?<Menu.Button className='font-bold text-lg  capitalize rounded-full w-9 h-9 cursor-pointer bg-primary text-white  transition-all hover:bg-primary-dull focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'>
                      {user?.name?.slice(0,2)}</Menu.Button>
                      :<motion.button whileHover={{scale:1.05}} whileTap={{scale:0.95}} className='cursor-pointer bg-primary text-white rounded-lg px-8 py-2 transition-all hover:bg-primary-dull focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary'
                      type='button' onClick={()=>setShowLogin(true)}>Login</motion.button>
                  }

                    {user && 
                      <Menu.Items className='rounded-2xl shadow-xl bg-white text-black  py-3 flex flex-col gap-3 absolute top-15 -right-1.5 w-40'>
                        <div className='bg-white w-5 h-5 rotate-45 -top-1.5 absolute right-4'/>
                        <p className='border-b border-borderColor px-4 py-1 '>Hi {user?.name}</p>
                        
                            <Menu.Item >
                              {<button className='cursor-pointer inline-flex gap-3 px-4 hover:bg-primary hover:text-white py-2' onClick={()=>navigate('/profile')}><CircleUserRound/>Profile</button>}
                            </Menu.Item>
                            <Menu.Item>
                              <button className='cursor-pointer inline-flex gap-3 px-4 hover:bg-primary hover:text-white py-2' onClick={()=>navigate('/my-bookings')}><NotebookText/>Booking</button>
                             </Menu.Item> 
                             < Menu.Item>
                              {<button onClick={()=>logout()} className='cursor-pointer inline-flex gap-3 px-4 hover:bg-primary hover:text-white py-2'><LogOut/>Logout</button>}
                            </Menu.Item>
                          
                      </Menu.Items>
                     }
               </Menu>

            </div>
            
      </div>

      

      {/* Hamburger Icon */}{/* Mobile View */}
            <button className='cursor-pointer sm:hidden' onClick={()=>setOpen(!open)} aria-label='Menu'>
              {open?(<X className='w-6 h-6'/>):(<TextAlignJustify className='w-6 h-6'/>)}
            </button>
      
    </motion.div>
  )
}

export default Navbar

