import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Section4 = () => {

  const testimonials = [
    { id: 1, name: "Emma Rodriguez", address: "Barcelona, Spain", image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200", rating: 5, review: "Exceptional service and attention to detail. Everything was handled professionally and efficiently from start to finish. Highly recommended!" },
    { id: 2, name: "Liam Johnson", address: "New York, USA", image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200", rating: 4, review: "I’m truly impressed by the quality and consistency. The entire process was smooth, and the results exceeded all expectations. Thank you!" },
    { id: 3, name: "Sophia Lee", address: "Seoul, South Korea", image: "https://images.unsplash.com/photo-1701615004837-40d8573b6652?q=80&w=200", rating: 5, review: "Fantastic experience! From start to finish, the team was professional, responsive, and genuinely cared about delivering great results." }
  ];

  const Star = ({ filled }) => (
    <svg className="w-4 h-4 text-yellow-400" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25l-6.16 3.73 1.64-7.03L2.5 9.77l7.19-.61L12 2.5l2.31 6.66 7.19.61-5 4.18 1.64 7.03z" />
    </svg>
  );

  return (
    <div className="bg-light">
      <div className="flex flex-col justify-center items-center p-15 gap-10">
        
        {/* Section Header */}
        <div className="flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-4xl font-semibold">What Our Customers Say</h1>
          <p className="text-sm md:text-base text-gray-400 mt-4 max-w-2xl">
            Discover why discerning travelers chose Stay Venture for their luxury accommodations around the world.
          </p>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoHeight={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          breakpoints={{
            840: { slidesPerView: 2},
            1024: { slidesPerView: 3}
          }}
          className="mySwiper w-full"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white text-black m-5 md:m-10 p-4 md:p-6 rounded-3xl shadow-md hover:scale-105 hover:shadow-xl transition-transform h-[250px] duration-300  gap-5 flex flex-col justify-between"
              >
                {/* Card Header */}
                <div className="flex items-center gap-3">
                  <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                  <div>
                    <p className="font-playfair text-xl font-semibold">{testimonial.name}</p>
                    <p className="text-gray-500 text-sm">{testimonial.address}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1">
                  {Array(5).fill(0).map((_, index) => <Star key={index} filled={testimonial.rating > index} />)}
                </div>

                {/* Review */}
                <p className="text-gray-600">"{testimonial.review}"</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default Section4;