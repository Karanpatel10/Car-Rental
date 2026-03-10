import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { assets } from '../../assets/assets'
import { FreeMode,Autoplay } from 'swiper/modules';
import Title from '../../components/Title'

const datainfo=[
  {image:assets.info_banner1,title:'Transparent Pricing',subtitle:'Enjoy all-inclusive rates with zero surprises. What you see is what you pay—fuel, taxes, and fees upfront!'},
  {image:assets.info_banner2,title:'All-Insured Vehicles',subtitle:'Every vehicle is fully insured for your peace of mind. Drive confidently with coverage for you and third parties.'},
  {image:assets.info_banner3,title:'RSA Service',subtitle:'24/7 Roadside Assistance.Our round-the-clock RSA ensures help for breakdowns, flat tires, or emergencies—anytime, anywhere.'},
  {image:assets.info_banner4,title:'Low Security Deposit',subtitle:'Minimal security deposit with quick refunds. Focus on the journey, not the paperwork!'},
  {image:assets.info_banner5,title:'Great Deals',subtitle:'Score exclusive discounts, seasonal promotions, and long-term rental perks. Luxury and savings? We’ve got both!'},
]

const Section9 = () => {
  return (
    <div className="px-6 md:px-16 lg:px-45 gap-6 md:gap-15 flex flex-col py-10">
      <Title title='Why CarRental?'/>
     <Swiper
  slidesPerView={2}
  spaceBetween={150}
  freeMode={false}
  autoplay={{
    delay: 2000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  }}
  breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
        }}
  loop={true}
  modules={[FreeMode, Autoplay]}
  className="mySwiper  overflow-hidden w-full h-85"
>
  {
    datainfo.map((item,index)=>(
      <SwiperSlide className='w-full h-full rounded-2xl relative' key={index}><img src={item.image} alt='banner1' className='w-full object-cover h-full rounded-2xl'/>
      <div className="absolute inset-0 bg-black/50  rounded-2xl flex flex-col justify-end p-5">
        <h2 className="text-white text-xl md:text-2xl font-semibold mb-2">{item.title}</h2>
        <p className="text-white text-sm md:text-base leading-relaxed">{item.subtitle}</p>
      </div>
      </SwiperSlide>
      
    ))
  }
            
      </Swiper>
    </div>
  )
}

export default Section9