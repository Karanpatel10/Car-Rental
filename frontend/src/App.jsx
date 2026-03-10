import { Route, Router, Routes, useLocation } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './pages/HeroSection/HeroSection'
import Footer from './components/footer'
import Login from './components/Login'
import { useEffect} from 'react'
import CarDetails from './pages/CarDetails'
import MyBooking from './pages/MyBookings'
import Allcars from './pages/AllCars'
import Loading from './components/Loading'
import BookDetails from './pages/BookDetails'
import SLayoutDashbrd from './pages/Share/SLayoutDashbrd'
import AddCar from './pages/Share/SubShare/AddCar'
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './AppContext'
import { AdUser } from './pages/Share/SubShare/AdUser'
import SDashboard from './pages/Share/SDashboard'
import SMCar from './pages/Share/SMCar'
import SMBooking from './pages/Share/SMBooking'
import Location from './pages/Location'
import FAQ from './components/FAQ'
import About from './components/About'
import ContactUs from './components/ContactUs'
import PrivacyPolicy from './components/PrivacyPolicy'
import Profile from './components/Profile'
import TerrmsOfService from './components/TerrmsOfService'

function App() {
  const {showLogin,loading,isOwner,isAdmin,user}=useAppContext()
 const pathname = useLocation().pathname;
const isPath = pathname.startsWith('/owner') || pathname.startsWith('/admin');

 const location=useLocation();

 useEffect(()=>{
  window.scrollTo({top:0,behavior:'smooth'});
 }, [location.pathname])

  return (
    <div>  

      {loading && !isOwner && !isAdmin && <Loading/>}
      <Toaster/>  
          {showLogin && <Login/>} 
            {!isPath && <Navbar/>}
              <Routes>
                <Route path='/' element={<HeroSection/>}/>
                <Route path='/car-details/:id' element={<CarDetails/>}/>
                <Route path='/book-details/:id' element={<BookDetails/>}/>
                <Route path='/my-bookings' element={<MyBooking/>}/>
                <Route path='/cars' element={<Allcars/>}/>
                <Route path='/location' element={<Location/>}/>
                <Route path='/FAQ' element={<FAQ/>}/>
                <Route path='/About'element={<About/>}/>
                <Route path='/privacy-policy'element={<PrivacyPolicy/>}/>
                <Route path='/terms-of-service'element={<TerrmsOfService/>}/>
                <Route path='/contact-us'element={<ContactUs/>}/>
                <Route path='/profile' element={<Profile/>}/>

                
                {/* Owner & Admin Routes */}
                    <Route path={`/${user?.role}`} element={<SLayoutDashbrd/>}>
                        <Route index element={<SDashboard/>}/>
                        <Route path='add-car' element={<AddCar/>}/>
                        <Route path='manage-users' element={<AdUser/>}/>
                        <Route path='manage-cars'element={<SMCar/>}/>
                        <Route path='manage-bookings' element={<SMBooking/>}/>
                    </Route>
                
              </Routes>
            {!isPath && <Footer/>}
    </div>
  )
}

export default App
