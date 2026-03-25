import React, { useState } from 'react'
import { cityList } from '../../assets/assets'
import { Loader2, Search } from 'lucide-react'
import { motion } from 'motion/react'
import mainvideo from '../../assets/main_carv.mp4'
import toast from 'react-hot-toast'
import { useAppContext } from '../../AppContext'
import { TypeAnimation } from 'react-type-animation';

const Section1 = () => {

  const [loading, setLoading] = useState(false)

  const {
    navigate,axios,
    pickupCity,
    setPickupCity,
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    setFilterCar,setHassearch
  } = useAppContext()

  const handleCheckAvalibility = async () => {
    try {
      const { data } = await axios.post('/api/booking/check-avaliblity', {
        pickupCity,
        pickupDate,
        returnDate
      })

      if (data.success) {
        setHassearch(true)
        setFilterCar(data.availbleCars)
        navigate('/cars')
        toast.success(data.message)
      } else {
        toast.error(data.message)
      }
    } catch (err) {
      toast.error(err.message)
    }
  }

  return (
    <section className="relative md:h-screen w-full flex flex-col overflow-hidden" id="sec1_search">

      {/* Background video */}
      <motion.video src={mainvideo} autoPlay muted loop playsInline preload="auto" className="order-2 md:absolute inset-0 w-full h-full object-contain md:object-cover z-0 bg-black"/>

      {/* Overlay */}
       <div className="absolute inset-0 md:bg-black/40 z-10"/>

      {/* Content */}
      <div className="order-1 relative z-20 flex flex-col items-center justify-center h-full text-center bg-black md:bg-transparent gap-5 text-white p-10">

        <div className='flex item-center justify-center min-h-20 md:min-h-8'>
         <TypeAnimation sequence={['Experience Automotive Excellence ... ', 2000,'Where Luxury Meets Performance ... ',2000,'Driven by Elegance ... ',2000,'The Pinnacle of Automotive Luxury ... ',2000]} speed={40} wrapper="span" cursor={false}  repeat={Infinity} className="max-w-full text-3xl md:text-5xl font-semibold"/> 
        </div>
          
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="max-w-2xl text-lg text-white/90">
          Premium vehicles • Affordable pricing • Easy booking
        </motion.p>

        {/* SEARCH BAR */}
        <motion.form
          onSubmit={async (e) => {
            e.preventDefault()
            setLoading(true)
            await handleCheckAvalibility()
            setLoading(false)
          }}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="relative backdrop-blur-2xl bg-white/10 border border-white/30 rounded-3xl md:rounded-full px-6 py-6 flex flex-col md:flex-row items-center gap-6 shadow-2xl max-w-6xl text-white hover:shadow-[0_0_40px_rgba(255,255,255,0.25)] transition">

          {/* Location */}
          <div className="flex flex-col px-2 w-full md:w-auto">
            <label className="text-xs font-semibold text-white/80">
              Pick-up Location
            </label>
            <select
              required
              value={pickupCity}
              onChange={(e) => setPickupCity(e.target.value)}
              className="cursor-pointer bg-transparent outline-none text-white"
            >
              <option value="" disabled className="text-black">
                Select city
              </option>
              {cityList.map(city => (
                <option key={city} value={city} className="text-black">
                  {city}
                </option>
              ))}
            </select>
          </div>

          <div className="hidden md:block w-px h-10 bg-white/30" />

          {/* Pickup Date */}
          <div className="flex flex-col px-2 w-full md:w-auto">
            <label htmlFor="pickupDate" className="text-xs font-semibold text-white/80">
              Pick-up Date
            </label>
            <input
              type="date"
              id="pickupDate"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              onClick={(e)=>e.target.showPicker()}
              min={new Date().toISOString().split('T')[0]} // Ensure pickup date cannot be in the past
              className="cursor-pointer bg-transparent outline-none text-white"
              required
            />
          </div>

          <div className="hidden md:block w-px h-10 bg-white/30" />

          {/* Return Date */}
          <div className="flex flex-col px-2 w-full md:w-auto">
            <label htmlFor="returnDate" className="text-xs font-semibold text-white/80">
              Return Date
            </label>
            <input
              type="date"
              id="returnDate"
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              onClick={(e)=>e.target.showPicker()}
              min={pickupDate || new Date().toISOString().split('T')[0]} // Ensure return date cannot be before pickup date
              className="cursor-pointer bg-transparent outline-none text-white"
              required
            />
          </div>

          {/* Button */}
          <motion.button
            disabled={!pickupCity || !pickupDate || !returnDate || loading}
            whileHover={!loading ? { scale: 1.05 } : {}}
            whileTap={!loading ? { scale: 0.95 } : {}}
            type="submit"
            className="bg-primary text-white px-10 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition w-full md:w-auto disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2">
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} />
                Searching...
              </>
            ) : (
              <>
                <Search size={20} />
                Search
              </>
            )}
          </motion.button>

        </motion.form>

      </div>
    </section>
  )
}

export default Section1
