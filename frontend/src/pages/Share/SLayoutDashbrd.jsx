import {useAppContext} from '../../AppContext'
import { Outlet } from 'react-router-dom'
import { ChevronLeft, ChevronRight} from 'lucide-react';
import OwnerNavbar from '../../components/Owners/OwnerNavbar'
import OwnerSidebar from '../../components/Owners/OwnerSidebar'
import { useState } from 'react';
import {motion} from 'motion/react';



const SLayoutDashbrd=()=>{
    const [issideopen,IsSetsideOpen]=useState(false)   ;
     const {loading}=useAppContext()
    return(
        <div className='flex flex-col'>
            <OwnerNavbar/>
                <div className='flex'>
                    <OwnerSidebar issideopen={issideopen}/>
                        <div className='flex-1 relative p-6 overflow-y-auto border-l border-l-gray-400'>
                            <button onClick={() => IsSetsideOpen(!issideopen)} className="absolute cursor-pointer top-5 left-0 md:hidden z-50 w-5 h-12  bg-primary text-white flex items-center justify-center rounded-r-xl">
                                {issideopen ? <ChevronLeft /> : <ChevronRight />}
                            </button>
                            <Outlet/>
                                {
                                    loading &&(
                                        <div className="absolute inset-0 bg-white flex items-center justify-center z-100">
                                            <h1 className='font-bold text-3xl'>
                                                <div className='flex gap-5 text-primary'>
                                                    Loading
        
                                                   <div className="flex items-end gap-4 py-1">
                                                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{duration:1,repeatDelay:0, repeat: Infinity, delay: 0.2}} className="w-2 h-2 rounded-full bg-primary"/>
                                                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{duration:1, repeatDelay:0, repeat: Infinity, delay: 0.4 }} className="w-2 h-2 rounded-full bg-primary"/>
                                                        <motion.div animate={{ opacity: [0, 1, 0] }} transition={{duration:1, repeatDelay:0, repeat: Infinity, delay: 0.6 }} className="w-2 h-2 rounded-full bg-primary"/>
                                                    </div>

                                                </div>
                                            </h1>
                                        </div>   
                                    )
                                }   
                        </div>   
                </div>    
        </div>   
    )
}

export default SLayoutDashbrd