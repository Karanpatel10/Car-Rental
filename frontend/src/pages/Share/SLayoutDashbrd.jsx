import {useAppContext} from '../../AppContext'
import { Outlet } from 'react-router-dom'
import OwnerNavbar from '../../components/Owners/OwnerNavbar'
import OwnerSidebar from '../../components/Owners/OwnerSidebar'

const SLayoutDashbrd=()=>{
    const {loading}=useAppContext()
    return(
        <div className='flex flex-col'>
            <OwnerNavbar/>
                <div className='flex'>
                    <OwnerSidebar/>
                        <div className='flex-1 relative p-6 overflow-y-auto border-l border-l-gray-400'>
                            <Outlet/>
                                {
                                    loading &&(
                                        <div className="absolute inset-0 bg-white flex items-center justify-center z-100">
                                            <h1 className='text-bold text-3xl'>Loading...............</h1>
                                        </div>   
                                    )
                                }   
                        </div>   
                </div>    
        </div>   
    )
}

export default SLayoutDashbrd