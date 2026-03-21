import { useState } from 'react'
import { useAppContext } from '../AppContext';
import toast from 'react-hot-toast';
import { Eye, EyeOff } from 'lucide-react';

const Login=()=>{
    
    const {setShowLogin,axios,setToken}=useAppContext();
    const [loginLoading,setLoginLoading]=useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [form,setForm]=useState({state:"login",name:"",email:"",password:""}); // login or register
    

    const onsubmitHandler=async(event)=>{
        event.preventDefault()
        setLoginLoading(true);
        try{
            const {data}= await axios.post(`/api/user/${form.state}`,{name:form.name,email:form.email,password:form.password})
            if(data.success){
                setToken(data.token);
                localStorage.setItem('token',data.token);
                setShowLogin(false);
                toast.success(data.message);
            }else{
                toast.error(data.message)
            }
        }catch(err){
           toast.error(err.message)
        }finally{
            setLoginLoading(false)
        }
    }

    return(
        <div className="w-full h-screen flex items-center justify-center bg-black/60  fixed top-0 left-0 right-0 z-100 text-sm" onClick={()=>setShowLogin(false)}>
            <form className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-80 sm:w-[352px] text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white" onClick={(e)=>e.stopPropagation()} onSubmit={onsubmitHandler}>
            <p className="text-2xl font-medium m-auto">
                <span className="text-primary">Welcome</span> {form.state === "login" ? "Login" : "Sign Up"}
            </p>
            {form.state === "register" && (
                <div className="w-full">
                    <p>Name</p>
                    <input onChange={(e) => setForm({...form, name: e.target.value})} value={form.name} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="text" required />
                </div>
            )}
            <div className="w-full ">
                <p>Email</p>
                <input onChange={(e) => setForm({...form, email: e.target.value})} value={form.email} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type="email" required />
            </div>
            <div className="w-full relative">
                <p>Password</p>
                <input onChange={(e) => setForm({...form, password: e.target.value})} value={form.password} placeholder="type here" className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary" type={showPassword ? "text" : "password"} required />
                <span className="absolute top-8 right-2 text-primary cursor-pointer" onClick={()=>setShowPassword(!showPassword)}>
                    {showPassword ? <EyeOff /> : <Eye />}
                </span>
            </div>
            {form.state === "register" ? (
                <p>
                    Already have account? <span onClick={() => setForm({...form, state: "login"})} className="text-primary cursor-pointer">click here</span>
                </p>
            ) : (
                <p>
                    Create an account? <span onClick={() => setForm({...form, state: "register"})} className="text-primary cursor-pointer">click here</span>
                </p>
            )}
            <button type='submit' disabled={loginLoading} className="bg-primary hover:bg-primary-dull transition-all text-white w-full py-2 rounded-md cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center">
                {loginLoading ? (
    <span className="flex items-center gap-1">
      Processing<span className="flex gap-0.5"><span className="animate-bounce">.</span><span className="animate-bounce delay-150">.</span><span className="animate-bounce delay-300">.</span></span>
    </span>
  ) : form.state === "register" ? "Create Account" : "Login"}
            </button>
        </form>
        </div>
    )
}

export default Login