import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';


// Import Swiper styles
import 'swiper/css';
const Slider = ()=> {
    const [active,setActive] = useState(null)
    const langs = [
        {name:'CSS3',logo:'css3',color:'hue-rotate-[240deg]'},
        {name:'HTML5',logo:'html5',color:'hue-rotate-[20deg]'},
        {name:'SASS',logo:'sass',color:'hue-rotate-[340deg]'},
        {name:'Javascript',logo:'javascript',color:'hue-rotate-[58deg]'},
        {name:'React js',logo:'react',color:'hue-rotate-[225deg]'},
        {name:'vue js',logo:'vue', color:'hue-rotate-[168deg]'},
        {name:'Angular js',logo:'angular',color:'hue-rotate-[0deg]'},
    ]
  return (
    <div className="bg-[url('https://getwallpapers.com/wallpaper/full/2/0/7/461557.jpg')] bg-cover bg-center h-[calc(100vh-86px)] mb-10 flex items-center justify-center">
      <div className="w-full p-4">
        <Swiper
          spaceBetween={17}
          slidesPerView={3}
          onSlideChange={(cur) =>setActive(cur.realIndex) }
          loop={true}
          centeredSlides={true}
          speed={600}
          autoplay={{
            delay:3000,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 1, spaceBetween: 10 },
            768: { slidesPerView: 2, spaceBetween: 10 },
            1024: { slidesPerView: 3, spaceBetween: 10 },
          }}
        >
          
          {
            langs.map((Lang,i)=>(
                <SwiperSlide key={i}>
                    <div className="flex items-center justify-center h-96 hover:scale-105">
                      <div className={`card ${active === i && "card-active"} to-red-600/40 ${Lang.color} border-red-600`}>
                        <div className='logo'>
                        <ion-icon name={`logo-${Lang.logo}`}></ion-icon>
                        </div>
                        <h2 className='text-xl font-bold text-center'>{Lang.name}</h2>
                        <p className='para'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ad fuga consectetur, eligendi in temporibus!
                        </p>
                    </div>
                    </div>
                </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;

