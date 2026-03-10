import React, { useState, useEffect } from "react";
import { useAppContext } from '../AppContext';
import { dummyUserData} from '../assets/assets';
import toast from 'react-hot-toast';
import axios from "axios";


const Profile = () => {

  const {user,token,fetchUser,loading,setLoading}=useAppContext();

  const [editMode, setEditMode] = useState(false);
 
  const [formData, setFormData] = useState({phone: "",licenseNumber: "",Address: "",DateOfBirth: "",avatar: null,avatarPreview: null});
 

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

      
  // Save updated profile
  const handleSave = async(e) => {
    e.preventDefault();
    setSubLoading(true);
    // Simulate API call
    try{
          await axios.put('/api/user/profile-update', {phone: formData.phone,licenseNumber: formData.licenseNumber,Address: formData.Address,DateOfBirth: formData.DateOfBirth,password: formData.password
              },{headers: {Authorization: token}});
          toast.success("Profile updated successfully!");
          await fetchUser();
          setEditMode(false);
    }catch(err){
      toast.error(err.message);
    }finally{
      setSubLoading(false);
    }
  };

  useEffect(() => {
  if (user) {
    setFormData({
      phone: user.phone || "",
      licenseNumber:user.licenseNumber || "",
      Address: user.Address || "",
      DateOfBirth: user.DateOfBirth? user.DateOfBirth.split("T")[0]: "",
      name:user.name || "",
      email:user.email || "",
    });
  }
}, [user]);
      

  return (
    <div className="min-h-screen p-10 lg:p-30">
      <div className="max-w-5xl mx-auto px-5">
       <div className="bg-gray-200 rounded-xl shadow-xl p-10 md:p-20">
          
          <div className="flex flex-col lg:flex-row  lg:gap-20">
            
            {/* Left Section */}
            <div className="flex flex-col lg:flex-col items-center gap-6 w-full lg:w-1/3">
              
              <div className="w-40 h-40 rounded-full overflow-hidden bg-white shadow">
                  <img src ={dummyUserData.image} alt='owner-profile' className='w-40 h-40 rounded-full object-cover'/>
              </div>

              {editMode && (
                <label className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg cursor-pointer transition inline-block">
                  Upload Avatar
                  <input type="file" accept="image/*" className='hidden'/>
                </label>
              )}

              <div className="bg-white p-4 rounded-lg w-full text-center shadow">
                <h3 className="font-semibold">Gold Member</h3>
                <p className="text-gray-400 text-sm">Joined: Jan 2022</p>
                <p className="text-gray-400 text-sm">Rentals: 12</p>
              </div>
            </div>

            {/* Right Section */}
            <div className="flex-1 flex flex-col gap-6 mt-10 lg:mt-0">
              
              <div className="flex justify-between items-center">
                <h2 className="text-3xl font-bold">My Profile</h2>
                {!editMode && (
                  <button onClick={() => setEditMode(true)} className="bg-green-600 text-white hover:bg-green-700 px-4 py-2 rounded-lg transition">Edit Profile</button>
                )}
              </div>

                <form onSubmit={handleSave}>
                  
                      <div className='grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10'>
                            {[
                              { label: "Full Name", name: "name", type:"text"},
                              { label: "Email", name: "email", type:"email"},
                              { label: "Phone", name: "phone", type:"tel"},
                              { label: "License Number", name: "licenseNumber"},
                              { label: "Address", name: "Address"},
                              { label: "Date of Birth", name: "DateOfBirth", type:"date"},
        
                            ].map(field => {
                              const isReadOnly = field.name === "name" || field.name === "email";
                                  return (
                                    <div key={field.name} className='flex flex-col'>
                                      <span className="text-gray-500">{field.label}</span>
                                    
                                        {editMode ? (
                                          // Edit mode: show input
                                          <input
                                            type={field.type || "text"}
                                            name={field.name}
                                            value={formData[field.name] || ""}
                                            onChange={handleChange}
                                            readOnly={isReadOnly}
                                            className={`mt-1 p-2 rounded-md ${isReadOnly? "bg-gray-200 cursor-not-allowed": "bg-white focus:ring-2 focus:ring-blue-500"}`} required/>
                                        ) : (
                                          // View mode: show text/label
                                          <span className="mt-1 text-black">{formData[field.name] || "Not provided"}</span>
                                        )}
                                      </div>
                                  );
                                })}
                          </div>


                          {editMode && (
                            <div className="flex gap-4 pt-4">
                              <button type='submit' disabled={loading} className="bg-blue-600 text-white hover:bg-blue-700 px-4 py-2 rounded-lg transition disabled:opacity-60 disabled:cursor-not-allowed">
                                {loading ? "Saving..." : "Save"}
                              </button>

                              <button type='button' onClick={() => setEditMode(false)} disabled={loading} className="bg-gray-500 text-white hover:bg-gray-600 px-4 py-2 rounded-lg transition">
                                Cancel
                              </button>
                            </div>
                          )}
                </form>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;