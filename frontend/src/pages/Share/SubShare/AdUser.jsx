import Title from '../../../components/Title'
import { useAppContext } from '../../../AppContext'
import { Eye,EyeOff, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast'
import ConformModel from '../../../components/ConformModel';

export const AdUser = () =>{
    const {axios,setLoading,showconfirm,setShowConfirm}=useAppContext();
    const [manageUser,setManageUser]=useState([]);
    const [deleteUserId,setDeleteUserId]=useState(null);

    const fetchAllUsers=async()=>{
        //api call to fetch all users
        try{
          setLoading(true)
            const {data}=await axios.get('/api/admin/users')
            if(data.success){
                setManageUser(data.alluser)
            }else{
                console.log("Failed to fetch users");
            }
        }catch(err){
            console.log(err);
        }finally{
          setLoading(false)
        }
    }

    const deleteUser=async(userId)=>{
        //api call to delete user
        try{
            const {data}=await axios.delete(`/api/admin/delete-user/${userId}`);
            if(data.success){
                fetchAllUsers();
                toast.success(data.message);
            }
        }catch(err){
            console.log(err);
        }finally{
          setShowConfirm(false)
          setDeleteUserId(null)
        }
    }

    useEffect(()=>{
        fetchAllUsers();
    },[])

    return (
<div className='px-6 md:px-16 lg:px-24 xl:px-32 py-8 w-full'>
      <div>
        <Title title={'Manage Users'} subtitle={'View all users, update their details or remove them from the booking platform'}/>
      </div>

      <div className='border border-borderColor w-full max-w-7xl rounded-md mt-6 p-3 overflow-x-auto gap-3'>
        
        <table className='w-full border-collapse text-left text-gray-600'>
          <thead>
            <tr className='bg-gray-100'>
              
              <th className='p-3'>Name</th>
              <th className='p-3 max-md:hidden'>Email</th>
              <th className='p-3'>Role</th>
              <th className='p-3 text-center'>Actions</th>
            
            </tr>
           </thead>
           <tbody>
            {manageUser.length > 0 ? (
              manageUser.map((user) => (
                <tr key={user._id} className='border-t'>
                  <td className='p-5'>{user.name}</td>
                  <td className='p-5'>{user.email}</td>
                  <td className='p-5 capitalize'>{user.role}</td>
                  <td className='p-5 flex justify-center'>
                    <Trash2 onClick={()=>{setDeleteUserId(user);setShowConfirm(true)}} className='cursor-pointer text-red-500 hover:text-red-700'/>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className='text-center p-4'>
                  No users found
                </td>
              </tr>
            )}
          </tbody>
         </table> 

         {/* Conform delete model */}
         {showconfirm && (
                      <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                        <ConformModel
                          title={`Do you really want to delete user ${deleteUserId?.name} ?`}
                          onConform={() => deleteUser(deleteUserId._id)}
                        />
                      </div>
                    )}
       </div> 
    </div>
    )
}

