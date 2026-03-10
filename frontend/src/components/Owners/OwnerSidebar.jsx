import React, { useState } from 'react'
import { dummyUserData} from '../../assets/assets'
import { useLocation} from 'react-router-dom'
import { UserPen } from 'lucide-react';
import { useAppContext } from '../../AppContext';
import { assets } from '../../assets/assets'

const {
  dashboardIcon,
  dashboardIconColored,
  addIcon,
  addIconColored,
  carIcon,
  carIconColored,
  listIcon,
  listIconColored
} = assets

const OwnerSidebar = () => {
    // const navigate =useNavigate();
    const {navigate,isOwner}=useAppContext()
    const location =useLocation()

    const [profileimage,setProfileImage]=useState(null);

    const ownerMenuLinks = [
        { name: "Dashboard", path: isOwner?"/owner":"/admin", icon: dashboardIcon, coloredIcon: dashboardIconColored },
        !isOwner?{ name: "Manage Users", path: isOwner ? null :"/admin/manage-users", icon: carIcon, coloredIcon: carIconColored }:null,
        isOwner?{ name: "Add car", path: isOwner && "/owner/add-car", icon: addIcon, coloredIcon: addIconColored }:null,
        { name: "Manage Cars", path:isOwner ? "/owner/manage-cars":"/admin/manage-cars", icon: carIcon, coloredIcon: carIconColored },
        { name: "Manage Bookings", path: isOwner ?"/owner/manage-bookings":"/admin/manage-bookings", icon: listIcon, coloredIcon: listIconColored },
    ].filter(Boolean)

  return (
    <div className=' w-60 h-screen gap-6 flex flex-col '>

        <div className='flex flex-col items-center relative '>
            <label htmlFor='image' className='relative cursor-pointer group'>
                <img src ={profileimage?URL.createObjectURL(profileimage):dummyUserData.image} alt='owner-profile' className='w-25 h-25 rounded-full object-cover'/>
                <input type='file' id='image' accept='image/*' hidden onChange={(e)=>setProfileImage(e.target.files[0])}/>
                
                <div className='absolute inset-0 hover:bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 cursor-pointer rounded-full'>
                    <UserPen className='w-6 h-6 text-white' />
                </div>
                
            </label>
                {
                    profileimage && <button className='text-sm text-green-400 cursor-pointer absolute flex justify-end items-start right-0 bg-primary/10 text-primary font-bold p-2 rounded-sm' onClick={()=>setProfileImage(null)}>Save</button>
                }
            <p>{dummyUserData.name}</p>
        </div>

        <div>
            {
            ownerMenuLinks.map((link, index) => (
                <div key={index} onClick={() => navigate(link.path)} className={`flex flex-row cursor-pointer gap-4 px-4 py-5  active:scale-95 ${location.pathname === link.path ? 'bg-primary/20 text-primary border-r-primary border-r-10' : ''}`}>
                
                   <img src={link.coloredIcon} alt={link.name} className='w-5 h-5 text-primary' />
                   {link.name}
                
                </div>
            ))
        }
        </div>
    </div>
  )
}

export default OwnerSidebar